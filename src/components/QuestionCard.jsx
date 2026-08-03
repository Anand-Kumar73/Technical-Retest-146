import React from 'react'

const QuestionCard = ({ item }) => {
  return (
    <div>
      <h3>Question {item.id}</h3>
      <p>Question: {item.question}</p>
      <p>Answer: {item.answer}</p>
    </div>
  )
}

export default QuestionCard
