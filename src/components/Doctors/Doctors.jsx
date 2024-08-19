import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import './Doctors.css'
import DoctorCard from './DoctorCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../contexts/AuthContext';
import emailjs from "@emailjs/browser";

const Doctors = () => {
  const [data, setData] = useState([]);
  const [userdata, setUserData] = useState([]);
  const { isLoggedIn , userid } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    axios.get(' http://localhost:3000/doctors')
      .then((value) => {
        setData(value.data);
      });
    emailjs.init("");
    async function fetchData() {
      try {
        const val = await axios.get(`http://localhost:3000/users/${userid}`);
        setUserData(val.data);
      } catch (error) {
        console.error("Error during fetching data", error);
      }
    }
    fetchData();
  }, []);

  const notify = async (doc, date) => {
    if (isLoggedIn) {
      if (date) {

        const serviceId = "service_nhsvroj";
        const templateId = "template_u7mt1v6";
        try {
          setLoading(true);
          let tdata = {
            name:userdata.name,
            Doctor: doc,
            date: date,
            recipent: userdata.email
          };
          console.log(tdata);
          await emailjs.send(serviceId, templateId, tdata);
          alert("email successfully sent check inbox");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
          toast(`Your Appointment has been sheduled on ${date}`);
        }
      }

      else {
        toast.error("Please select date first")
      }
    }
    else {
      toast.error("Please Login First")
    }

  }
  return (
    <div>
      <div className='header'>
        <h1>Our Doctors</h1>
      </div>
      <div className='container'>
        {data.length && data.map((item, index) => {
          return (
            <DoctorCard loading={loading} notify={(doc, date) => notify(doc, date)} item={item} key={index} />
          )
        })}
      </div>
      <ToastContainer />
    </div>
  )
}

export default Doctors;