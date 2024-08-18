import React from 'react'
import NavBar from './components/navBar/Navbar';
import Services from './components/Services/Service';
import { Route, Routes } from 'react-router-dom';
import Doctors from './components/Doctors/Doctors';
import Blogs from './components/Blogs/Blogs'
import Support from './components/Support/Support'
import MediStore from './components/Medistore/MediStore'
import Login from './components/logins/Login'
import Register from './components/logins/Register';

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

        <Route path ='/register' element={<Register/>}/> 
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App;