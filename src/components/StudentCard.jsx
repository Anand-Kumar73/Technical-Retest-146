import React from 'react'
import studentImage from '../assets/hero.png'

const StudentCard = () => {
  return (
    <div>
      <img src={studentImage} alt="Anand" width={120} height={120} />
      <h2>Anand kumar</h2>
      <p>Roll No: 146</p>
      <p>Branch: CSE</p>
      <p>Semester: 5th</p>
      <p>College: SVIET</p>
    </div>
  )
}

export default StudentCard
