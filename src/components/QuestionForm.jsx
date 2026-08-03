import React, { useState } from 'react'
import QuestionCard from './QuestionCard'
import questionsData from '../QuestionData/Question'

const QuestionForm = () => {
  const [questions] = useState(() => [...questionsData])

  return (
    <div>
      <h1>Questions</h1>
      {questions.length === 0 ? (
        <h2>No Question available</h2>
      ) : (
        questions.map((item, index) => (
          <QuestionCard key={item.id || index} item={item} />
        ))
      )}
    </div>
  )
}

export default QuestionForm
