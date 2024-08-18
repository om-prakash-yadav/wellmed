import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="navbar-brand" onClick={handleImageClick}>
          <img src="logo.png" alt="Logo" height="50" />
        </div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/doctors">Doctors</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/store">MediStore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Health Blogs</Link>
            </li>
          </ul>

          <div className="d-flex align-items-center start-container">
            <button className="btn">
              <Link className='nav-link' to='/cart'>
                <IoCartOutline color='#00B0FF' size={30} />
                <span className='badge fs-6 p-1 rounded-pill bg-success  text-white'>4</span>
              </Link>
            </button>
          </div>
          <Link style={{
            textDecoration: 'none'
          }} to='/login'>
            <div className="d-flex align-items-center start-container">
              <button className="btn btn-outline-primary me-2 get-started ">GET STARTED</button>
              <div className='back-div'></div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
