import React, { useContext, useEffect, useState } from 'react';
import './Doctors.css';
import { IoLocationSharp } from "react-icons/io5";
import axios from 'axios';
import { AuthContext } from '../../contexts/AuthContext';

const DoctorCard = ({ loading, item, index, notify }) => {
    const { userid } = useContext(AuthContext);
    const [data, setData] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                const val = await axios.get(`http://localhost:3000/users/${userid}`);
                setData(val.data);
            } catch (error) {
                console.error("Error during fetching data", error);
            }
        }
        fetchData();
    }, [])
    const [date, setDate] = useState('');
    const add = () => {
        notify(item.name, date);
        const userAppointment = { userId: userid, name: item.name, date: date };
        const newData = { ...data, appointment: [...data.appointment, userAppointment] };
        axios.put(`http://localhost:3000/users/${userid}`, newData)
            .then((res) => console.log(res.data));
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
                        <input className='date-select' type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                        <div>
                            {loading & date ? (
                                <div class="spinner-border" role="status">
                                    <span class="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <button className='appointment' onClick={add}>Appointment</button>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DoctorCard