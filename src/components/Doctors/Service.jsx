import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../../contexts/AuthContext';
import './Service.css'
function Service() {
    const [app, setapp] = useState([]);
    const { userid } = useContext(AuthContext);
    useEffect(() => {
        axios.get(`http://localhost:3000/users/${userid}`).then((response) => {
            setapp(response.data.appointment);
        })
    }, [])
    return (
        <div>
           
           {/* <div className="servicewrapper">
                {app.map((item, index) => {
                    return <div className="servicecontainer" key={index}>
                        <p>You have been assigned <span>{item.name}</span> on date <span>{item.date}</span></p>
                        <p><span>{item.specialization}</span></p>
                        <img src={item.img_src} alt={item.name} />
                    </div>
                })}
            </div>  */}

            <div className='service'>
                <h3>Your appointments</h3>
                <div className="servicewrapper">
                    {app.map((item, index) => {
                        return (
                            <div className="servicecontainer" key={index}>
                                <img src={item.img_src} alt={item.name} />
                                <div className="serviceinfo">
                                    <h4>You have been assigned <span>{item.name}</span> on date <span>{item.date}</span></h4>
                                    <p>Specialization: <span>{item.specialization}</span></p>
                        
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div >
    )
}

export default Service
