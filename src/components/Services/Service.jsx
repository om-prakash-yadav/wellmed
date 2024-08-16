import React from 'react';
import './services.css';

const Services = () => {

  const Service = () => {
    return (
      <div className='cards'>
        <div className="card-body">
          <img className="card-img-top" src="https://th.bing.com/th/id/R.f48ceff9ab3322d4e84ed12a44c484d1?rik=0KQ6OgL4T%2b9uCA&riu=http%3a%2f%2fwww.photo-paysage.com%2falbums%2fuserpics%2f10001%2fCascade_-15.JPG&ehk=kx1JjE9ugj%2bZvUIrjzSmcnslPc7NE1cOnZdra%2f3pJEM%3d&risl=1&pid=ImgRaw&r=0" alt="#" />
          <h2 className='text'>Physio</h2>
          <p className="text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div className='back-card'></div>
      </div>
    )
  }
  return (
    <div className='services'>
      <h2 className='title'>Our services</h2>
      <p className='subtitle'>Suspus mus efwobusiuegdrfviubfr wef sdv wefsdvx  wesdx  wesdv wesdvc  wesdvx we wesd fwsd wesd rsvdf 4wefsd wesdz gresdv wesdvz x</p>
      <div className='flex'>
        <Service />
        <Service />
        <Service />
        <Service />
      </div>
    </div>
  );
}

export default Services;