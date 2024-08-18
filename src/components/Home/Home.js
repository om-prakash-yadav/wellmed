import React from 'react';
import styles from './Home.module.css';
import Service from '../Services/Service'
import Banner from '../../assets/Images/banner1.png'

function Home() {
  return (
    <div className={styles.app}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 >Wellness and Medicines at your fungertips</h1>
          <p>Your satisfaction is our priority.</p>
          <button className={styles.appointmentBtn}>Book an Appointment</button>
        </div>
        <div className={styles.heroImage}>
          <img
            className={styles.image}
            src={Banner}
            alt="Hero"
          />
        </div>
      </section>
      <Service />


      <section className={styles.callToAction}>
        <h2>Ready to Get Started?</h2>
        <button className={styles.contactBtn}>Contact Us</button>
      </section>
    </div>
  );
}

export default Home;
