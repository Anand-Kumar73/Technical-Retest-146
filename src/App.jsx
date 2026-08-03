import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import QuestionForm from './components/QuestionForm'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question-form" element={<QuestionForm />} />
      </Routes>
    </>
  )
}

export default App
