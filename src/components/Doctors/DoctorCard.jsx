import React, { useState } from 'react';
import './Doctors.css';
import { IoLocationSharp } from "react-icons/io5";

const DoctorCard = ({item,index}) => {
  const [date,setDate]=useState('');
  const add=()=>{
    
  }
    return (
        <div>
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
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        <div>
                            <button className='appointment' onClick={add}>Appointment</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard