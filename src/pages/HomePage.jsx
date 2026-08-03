import React from 'react'
import StudentCard from '..cpmponents/StudentCard'
import { useNavigate } from 'react-router-dom'
import navbar from '../components/Navbar'
import StartButton from "../components/StartButton";
import Navbar from '../components/Navbar';

const HomePage = () => {
  return (
    <div>
    <Navbar/>
     <h1>Student Id Card</h1>
      <StudentCard/>
      <StartButton/>
    </div>
  )
}

export default HomePage
