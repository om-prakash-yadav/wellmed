import React from 'react';
import './NavBar.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <img src="logo.png" alt="" />
      </div>
      <nav>
        <ul className="nav-links menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/doctors">Doctors</Link></li>
          <li><Link to="/store">MediStore</Link></li>
          <li><Link to="/support">Support</Link></li>
          <li><Link to="/blogs">Health Blogs</Link></li>
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