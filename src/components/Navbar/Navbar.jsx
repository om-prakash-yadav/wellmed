import React from 'react';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <nav>
        <ul className="nav-links menu">
          <li><a href="/services">Services</a></li>
          <li><a href="/doctors">Doctors</a></li>
          <li><a href="/patients">Patients</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </nav>
      <div className="container">
        <div className="get-started">GET STARTED</div>
        <div className='back-div'></div>
      </div>
    </header>
  );
};

export default NavBar;