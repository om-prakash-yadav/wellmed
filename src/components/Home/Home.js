import React from 'react';
import styles from './Home.module.css';
import Service from '../Services/Service'

function Home() {
  return (
    <div className={styles.app}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Our Service</h1>
          <p>Your satisfaction is our priority.</p>
          <button className={styles.appointmentBtn}>Book an Appointment</button>
        </div>
        <div className={styles.heroImage}>
          <img
            className={styles.image}
            src="https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg"
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
