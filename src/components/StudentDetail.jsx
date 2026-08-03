import React from 'react'
import StudentDetail from './components/StudentDetail'

const StudentDetail = () => {
  return (
    <div>
      <h2>{Student.name}</h2>
      <p>Roll No:{student.roll}</p>
      <p>Branch:{student.branch}</p>
      <p>Semester:{student.sem}</p>
      <p>College:{student.college}</p>
    </div>
  )
}

export default StudentDetail
