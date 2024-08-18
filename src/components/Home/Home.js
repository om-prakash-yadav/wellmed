import React from 'react';
import styles from './Home.module.css';

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

      <section className={styles.services}>
        <div className={styles.serviceCard}>
          <h3>Service 1</h3>
          <p>Details about service 1.</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Service 2</h3>
          <p>Details about service 2.</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Service 3</h3>
          <p>Details about service 3.</p>
        </div>
      </section>

      <section className={styles.steps}>
        <div className={styles.stepCard}>
          <h3>Step 1</h3>
          <p>Details about step 1.</p>
        </div>
        <div className={styles.stepCard}>
          <h3>Step 2</h3>
          <p>Details about step 2.</p>
        </div>
        <div className={styles.stepCard}>
          <h3>Step 3</h3>
          <p>Details about step 3.</p>
        </div>
      </section>

      <section className={styles.safety}>
        <h2>Safety Measures</h2>
        <p>We prioritize your safety with the following measures.</p>
        <button className={styles.exploreBtn}>Explore More</button>
      </section>

      <section className={styles.ourServices}>
        <div className={styles.serviceCard}>
          <h3>Our Service 1</h3>
          <p>Details about our service 1.</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Our Service 2</h3>
          <p>Details about our service 2.</p>
        </div>
        <div className={styles.serviceCard}>
          <h3>Our Service 3</h3>
          <p>Details about our service 3.</p>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.testimonialCard}>
          <p>"Great service!" - Customer A</p>
        </div>
        <div className={styles.testimonialCard}>
          <p>"Highly recommend!" - Customer B</p>
        </div>
        <div className={styles.testimonialCard}>
          <p>"Will come back again." - Customer C</p>
        </div>
      </section>

      <section className={styles.callToAction}>
        <h2>Ready to Get Started?</h2>
        <button className={styles.contactBtn}>Contact Us</button>
      </section>
    </div>
  );
}

export default Home;
