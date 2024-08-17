import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Doctors.css'
import { IoLocationSharp } from "react-icons/io5";

const Doctors = () => {
  const [data,setData]=useState([]);
  const [date,setDate]=useState('');
  useEffect(()=>{
    axios.get(' http://localhost:3000/Doctors')
    .then((value)=>{
      setData(value.data);
    })
  },[])
  return (
    <div>
     <div className='header'>
       <h1>Our Doctors</h1>
     </div>
     <div className='container'>
         {data.length&&data.map((item,index)=>{
            return (
              <div className='card'>
                <div className='card_header'>
                  <img src={item.img_src} alt="" />
                </div>
                <div className='main'>
                <div className='card-content'>
                   <h3>{item.name}</h3>
                   <div className='card-main'>
                   <h5>{item.specialization}</h5>
                   <div className='location-bar'>
                      <div className='location-icon'>
                      <IoLocationSharp />
                      </div>
                      <div className='location'>
                         {item.location}
                      </div>
                  </div>
                   </div>
                   <p>{item.about}</p>
                </div>
                <div className='card-footer'>
                  <input type="date" value={date} />
                  <div>
                     <button className='appointment'>Appointment</button>
                  </div>
                </div>
                </div>
              </div>
            )
         })}
     </div>
    </div>
  )
}

export default Doctors;