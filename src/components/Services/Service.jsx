import React from 'react';
import styles from './Services.module.css';
import { FaStethoscope, FaTooth, FaHeartbeat, FaSkiing } from 'react-icons/fa';
import Slider from "react-slick";


const servicesData = [
  { id: 1, title: 'Physiotherapy', description: 'Professional physiotherapy services to help you recover and maintain physical health.', icon: <FaStethoscope size={50} /> },
  { id: 2, title: 'Dental Care', description: 'Comprehensive dental care services for all ages.', icon: <FaTooth size={50} /> },
  { id: 3, title: 'Cardiology', description: 'Expert cardiology services for heart health.', icon: <FaHeartbeat size={50} /> },
  { id: 4, title: 'Dermatology', description: 'Advanced dermatology services for skin care.', icon: <FaSkiing size={50} /> },
  // Add more services as needed
];

const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3.5,
    slidesToScroll: 2,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const ServiceCard = ({ service }) => {
    return (
      <div className={styles.cards}>
        <div className={styles.cardBody}>
          {service.icon}
          <h2 className={styles.text}>{service.title}</h2>
          <p className={styles.text}>{service.description}</p>
        </div>
        <div className={styles.backCard}></div>
      </div>
    );
  };

  return (
    <div className={styles.services}>
      <h2 className={styles.title}>Our Services</h2>
      <Slider {...settings}>
        {servicesData.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Slider>
    </div>
  );
}

export default Services;
