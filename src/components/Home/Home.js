import React from 'react';
import styles from './Home.module.css';

function HomePage() {
    return (
      <div className={styles.App}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>We always provide best service</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className={styles.appointmentBtn}>Make an Appointment</button>
          </div>
          <div className={styles.heroImage}>
            {/* Image Add Karna*/}
          </div>
        </section>
  
        <section className={styles.services}>
          <div className={styles.serviceCard}>Emergency</div>
          <div className={styles.serviceCard}>Appointment</div>
          <div className={styles.serviceCard}>Find Doctor</div>
        </section>
  
        <section className={styles.steps}>
          <div className={styles.stepCard}>Request consultation</div>
          <div className={styles.stepCard}>Receive your consultation</div>
          <div className={styles.stepCard}>Get your solution</div>
        </section>
  
        <section className={styles.safety}>
          <h2>We Believe in keeping you safe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className={styles.exploreBtn}>Explore More</button>
        </section>
  
        <section className={styles.ourServices}>
          <div className={styles.serviceCard}>Physiotherapy</div>
          <div className={styles.serviceCard}>Neurology</div>
          <div className={styles.serviceCard}>Gynecology</div>
          <div className={styles.serviceCard}>Cardiology</div>
        </section>
  
        <section className={styles.testimonials}>
          <div className={styles.testimonialCard}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</div>
          <div className={styles.testimonialCard}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</div>
        </section>
  
        <section className={styles.callToAction}>
          <h2>It's time to change your life today</h2>
          <button className={styles.contactBtn}>Contact Us</button>
        </section>
      </div>
    );
  }
  
  export default HomePage;
  