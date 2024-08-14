import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/');
  };
  return (
    <header className="navbar">
      <div className="logo">
        <img src="logo.png" onClick={handleImageClick} alt="" />
      </div>
      <nav>
        <ul className="nav-links menu">
          <li><a href="/services">Services</a></li>
        
          <li><a href="/doctors">Doctors</a></li>
          <li><a href="/pricing">MediStore</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/support">Health Blogs</a></li>
        </ul>
      </nav>
      <div class="container">
        <div class="get-started">GET STARTED</div>
        <div className='back-div'></div>
      </div>
    </header>
  );
};

export default NavBar;