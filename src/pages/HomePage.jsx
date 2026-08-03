import React from 'react'
import StudentCard from '..cpmponents/StudentCard'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate=useNavigate();
 function handleClick(){
  navigate("/question-form")
 }
  return (
    <div>
    
      <StudentCard/>
      <button onClick={handleClick}>
        Solve Question
      </button>
    </div>
  )
}

export default HomePage
