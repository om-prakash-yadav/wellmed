import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Doctors.css'
import DoctorCard from './DoctorCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Doctors = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(' http://localhost:3000/doctors')
      .then((value) => {
        setData(value.data);
      })
  }, []);

  const notify = (date) => toast(`Your Appointment has been sheduled on ${date}`);
  return (
    <div>
      <div className='header'>
        <h1>Our Doctors</h1>
      </div>
      <div className='container'>
        {data.length && data.map((item, index) => {
          return (
            <DoctorCard notify={(date)=>notify(date)} item={item} key={index} />
          )
        })}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Doctors;