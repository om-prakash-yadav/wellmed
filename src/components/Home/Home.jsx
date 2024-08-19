import React from 'react';
import styles from './Home.module.css';
import Service from '../Services/Service';
import Banner from '../../assets/Images/banner1.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className={styles.home}>
      <section className={`row align-items-center ${styles.hero}`}>
        <div className="col-md-6">
          <div className={styles.heroContent}>
            <h1>Wellness and Medicines at your fingertips</h1>
            <p>Your satisfaction is our priority.</p>
            <Link to="/doctors" style={{textDecoration:'none' , color:'#fff'}}>
              <button className={`btn btn-primary ${styles.appointmentBtn}`}>Book an Appointment</button>
            </Link>
          </div>
        </div>
        <div className="col-md-6">
          <div className={styles.heroImage}>
            <img
              className={`img-fluid ${styles.image}`}
              src={Banner}
              alt="Hero"
            />
          </div>
        </div>
      </section>
      <Service />
      <section className={`text-center ${styles.callToAction}`}>
        <h2>Ready to Get Started?</h2>
        <button className={`btn btn-primary ${styles.contactBtn}`}>Contact Us</button>
      </section>
    </div>
  );
}

export default Home;
