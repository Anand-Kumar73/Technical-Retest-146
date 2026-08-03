import React from 'react'
import StudentCard from './components/StudentCard'
import StudentDetail from './StudentDetail'

const QuestionCard = ({item}) => {
  return (
    <div>
     <h3>Question{item.id}</h3>
     <p>Question:{item.question}</p>
     <p>{item.answer}</p>
    </div>
    
  )
}

export default QuestionCard
