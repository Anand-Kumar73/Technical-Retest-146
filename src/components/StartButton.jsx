import React from 'react'
import { useNavigate } from 'react-router-dom'

const StartButton = () => {
  const navigate = useNavigate()

  return (
    <button type="button" onClick={() => navigate('/question-form')}>
      Start Test
    </button>
  )
}

export default StartButton
