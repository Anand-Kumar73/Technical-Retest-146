import React from 'react'
import StudentCard from './components/StudentCard'
import StudentDetail from './StudentDetail'

const QuestionCard = () => {
  return (
    <div>
     <h3>{item.name}</h3>
     <p>Question:{item.question}</p>
     <p>{item.answer}</p>
    </div>
    
  )
}

export default QuestionCard
