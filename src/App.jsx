import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import QuestionForm from "./pages/QuestionForm";

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}>  </Route>
    <Route path="/question-form" element={<QuestionForm/>}>  </Route>
   </Routes>
   </>
  )
}

export default App
