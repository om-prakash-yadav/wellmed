import React from 'react';
import NavBar from './components/NavBar/Navbar';
import Services from './components/Services/Service';
import { Route, Routes } from 'react-router-dom';
import Doctors from './components/Doctors/Doctors';
import Blogs from './components/Blogs/Blogs'
import Support from './components/Support/Support'
import MediStore from './components/Medistore/MediStore'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Services />} />
        <Route path='/support' element={<Support />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/store' element={<MediStore />} />

      </Routes>
    </div>
  )
}

export default App;