import { useEffect, useState } from 'react';
import people from './data';
import { FaChevronLeft,FaChevronRight} from 'react-icons/fa'
import {BiRefresh} from 'react-icons/bi'
const Reviews=()=>{
    const [index,setIndex]=useState(0);
    const {id,image,name,job,text}=people[index];
    const checkNumber=(number)=>{
        if(number > people.length-1){
          return 0
        }
        if(number < 0){
        return people.length-1
        }
        return number
    }

        

    const randomNumber=()=>{
        let num=Math.floor(Math.random()*people.length)
        if(num===index){
            num=index+1
        }
        setIndex(checkNumber(num))
    }
    const prev=()=>{
        setIndex(()=>{
            return checkNumber( index-1);
        })
    }
    const next=()=>{
        setIndex(()=>{
            return checkNumber( index+1);
        })
    }
    return(
        <div className='d-block mx-auto my-5 '>
            <h2 className='text-decoration-underline fw-bold text-center'><i>Our Reviews</i></h2>
            <div className='border rounded-3 bg-white text-center p-4 review' >
                <img src={image} alt={name} className='img-fluid rounded-circle' style={{width:'170px',height:'170px'}} />
                <h4 className='my-2'>{name}</h4>
                <p className='my-2'>{job}</p>
                <p className='px-4'>{text}</p>
                <FaChevronLeft  onClick={prev} className='mx-4 display-6'/>
                <BiRefresh onClick={randomNumber} className='display-6 mx-4'/>
                <FaChevronRight onClick={next}  className='mx-4  display-6'/>
              
            </div>
        </div>
    )
}
export default Reviews;