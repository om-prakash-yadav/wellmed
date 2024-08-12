import React from 'react';
import './NavBar.css'; 

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo"><span>W</span>ell<span>M</span>ed</div>
      <nav>
        <ul className="nav-links">
          <li><a href="/services">Services</a></li>
          <li><a href="/doctors">Doctors</a></li>
          <li><a href="/patients">Patients</a></li>
          <li><a href="/pricing">Pricing</a></li>
          <li><a href="/support">Support</a></li>
        </ul>
      </nav>
      <button className="get-started-btn">GET STARTED</button>
    </header>
  );
};

export default NavBar;