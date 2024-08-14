import React from 'react'
import NavBar from './components/navBar/Navbar'
import Services from './components/Services/Service'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
   <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Services />}/>
    </Routes>
   </div>
  )
}

export default App;