import React from 'react'
import studentImage from '../assets/photo.png'

const StudentCard = () => {
  return (
    <div>
      <img src={studentImage} alt="Student photo" width={120} height={120} />
      <h2>Anand kumar</h2>
      <p>Roll No: 146</p>
      <p>Branch: CSE</p>
      <p>Semester: 5th</p>
      <p>College: SVIET</p>
    </div>
  )
}

export default StudentCard
