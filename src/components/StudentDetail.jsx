import React from 'react'

const StudentDetail = ({ student }) => {
  return (
    <div>
      <h2>{student?.name}</h2>
      <p>Roll No: {student?.roll}</p>
      <p>Branch: {student?.branch}</p>
      <p>Semester: {student?.sem}</p>
      <p>College: {student?.college}</p>
    </div>
  )
}

export default StudentDetail
