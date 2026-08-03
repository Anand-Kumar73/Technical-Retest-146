import React from 'react'
import Navbar from './components/Navbar'
import {Routers,Routes,Route, NavLink} from 'react-router-dom'

const Navbar = () => {
  return(
    <nav>
      <h2>Welcome</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/question-form">Question Form</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
