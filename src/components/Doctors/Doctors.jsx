import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Doctors.css'
import DoctorCard from './DoctorCard';

const Doctors = () => {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get(' http://localhost:3000/doctors')
    .then((value)=>{
      setData(value.data);
    })
  },[]);
  return (
    <div>
     <div className='header'>
       <h1>Our Doctors</h1>
     </div>
     <div className='container'>
         {data.length&&data.map((item,index)=>{
            return (
               <DoctorCard item={item} key={index}/>
            )
         })}
     </div>
    </div>
  )
}

export default Doctors;