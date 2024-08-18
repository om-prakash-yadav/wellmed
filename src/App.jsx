import React from 'react'
import NavBar from './components/navBar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Doctors from './components/Doctors/Doctors';
import Support from './components/Support/Support';
import MediStore from './components/Medistore/MediStore'
import Design from './components/Health_blog/health_blog';
import Home from './components/Home/Home';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/support' element={<Support />} />
        <Route path='/blogs' element={<Design />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/store' element={<MediStore />} />

      </Routes>
    </div>
  )
}

export default App;