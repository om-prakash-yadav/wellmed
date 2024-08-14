import React from 'react';
import './Home.css';

function HomePage() {
  return (
    <div className="App">
      <section className="hero">
        <div className="hero-content">
          <h1>We always provide best service</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <button className="appointment-btn">Make an Appointment</button>
        </div>
        <div className="hero-image">
          {/* Add image here */}
        </div>
      </section>

      <section className="services">
        <div className="service-card">Emergency</div>
        <div className="service-card">Appointment</div>
        <div className="service-card">Find Doctor</div>
      </section>

      <section className="steps">
        <div className="step-card">Request consultation</div>
        <div className="step-card">Receive your consultation</div>
        <div className="step-card">Get your solution</div>
      </section>

      <section className="safety">
        <h2>We Believe in keeping you safe</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <button className="explore-btn">Explore More</button>
      </section>

      <section className="our-services">
        <div className="service-card">Physiotherapy</div>
        <div className="service-card">Neurology</div>
        <div className="service-card">Gynecology</div>
        <div className="service-card">Cardiology</div>
      </section>

      <section className="testimonials">
        <div className="testimonial-card">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</div>
        <div className="testimonial-card">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</div>
      </section>

      <section className="call-to-action">
        <h2>It's time to change your life today</h2>
        <button className="contact-btn">Contact Us</button>
      </section>
    </div>
  );
}

export default HomePage;