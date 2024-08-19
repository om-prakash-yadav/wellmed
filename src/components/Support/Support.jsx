import React from 'react';
import './support.css';
import Banner from '../../assets/Images/banner1.png';
import Banner2 from '../../assets/Images/banner2.png';

const Support = () => {
  return (
    <section class="about-section py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <h1>About WellMed</h1>
            <p>
              Welcome to WellMed, where your health and well-being are our top priorities.
              Our mission is to provide you with the highest quality medical products and services that cater
              to your daily healthcare needs.
            </p>
            <p>
              Founded in 2024, WellMed has grown from a small local store to a trusted brand that serves
              customers nationwide.
              Our commitment to quality, customer satisfaction, and innovation has helped us build a loyal
              customer base that relies on us for their healthcare needs.
            </p>
          </div>
          <div class="col-lg-6">
            <img src={Banner} style={{height:'400px', objectFit:'contain'}} alt="About WellMed" class="img-fluid"/>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-6">
            <img src={Banner2} alt="Our Team" class="img-fluid"/>
          </div>
          <div class="col-lg-6">
            <h1>Our Team</h1>
            <p>
              At WellMed, we are proud of our team of dedicated professionals who are passionate about
              healthcare and customer service.
              From our pharmacists and healthcare consultants to our customer service representatives and store
              associates, everyone plays a crucial role in our success.
            </p>
            <p>
              We believe in fostering a collaborative and inclusive work environment where every team member
              can contribute their unique skills and ideas.
              This culture of teamwork and innovation helps us stay ahead of the trends and continuously
              improve our products and services.
            </p>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-lg-12 text-center">
            <h1>Our Values</h1>
            <p>
              Quality, Innovation, Customer Satisfaction, and Care are at the core of everything we
              do.
              We are committed to providing products that are not only effective and safe but also
              affordable and accessible.
            </p>
            <p>
              Thank you for choosing WellMed. We look forward to supporting you on your journey to better health.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Support