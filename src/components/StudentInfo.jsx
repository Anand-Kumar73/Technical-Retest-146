import React from 'react'
import StudentInfo from '../QuestionData/Question'

const StudentInfo = (props) => {
  return (
    <>
      <h2>props.name</h2>
      <p>Roll No:{props.roll}</p>
      <p>Branch:{props.branch}</p>
      <p>:{Semester.semester}</p>
      <p>College:{props.college}</p>

    </>
  )
}

export default StudentInfo
