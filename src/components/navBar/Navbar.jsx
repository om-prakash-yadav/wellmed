import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { IoCartOutline } from "react-icons/io5";
import { CartContext } from '../../contexts/CartContext'
import { AuthContext } from '../../contexts/AuthContext';
import { FaArchive } from "react-icons/fa";

const NavBar = () => {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

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
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/blogs">Health Blogs</Link>
            </li> */}
          </ul>


          {

            isLoggedIn && <>
              <button className="btn">
                <Link className='nav-link' to='/service'>
                  <FaArchive color='#00B0FF' size={30} />
                </Link>
              </button>
              <div className="d-flex align-items-center start-container">
                <button className="btn">
                  <Link className='nav-link' to='/cart'>
                    <IoCartOutline color='#00B0FF' size={30} />
                    {cartItems.length > 0 &&
                      <span className='badge fs-6 p-1 rounded-pill bg-success  text-white'>{cartItems.length}</span>
                    }
                  </Link>
                </button>
              </div>
            </>
          }

          {
            isLoggedIn ? (
              <div className="d-flex align-items-center start-container">
                <button onClick={() => logout()} className="btn btn-danger text-white ">LogOut</button>
              </div>

            ) : (
              <Link style={{
                textDecoration: 'none'
              }} to='/register'>

                <div className="d-flex align-items-center start-container">
                  <button className="btn btn-outline-primary me-2 get-started ">GET STARTED</button>
                  <div className='back-div'></div>
                </div>
              </Link>
            )
          }

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
