import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

import {Link} from 'react-router-dom'

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/store">MediStore</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/blogs">Health Blogs</Link></li>
           <Link to="/login"> </Link>
        </ul>
      </nav>
      <nav>
      <div className="container">
        <div className="get-started" > <Link to="/register">GET STARTED</Link>   </div>
        <div className='back-div'></div>
      </div>
      </nav>
      
    </header>
  );
};

export default NavBar;