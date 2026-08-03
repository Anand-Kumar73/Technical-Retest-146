import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <h2>Welcome</h2>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/question-form">Questions</NavLink>
      </div>
    </nav>
  )
}

export default Navbar
