import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import QuestionForm from "./pages/Question";

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}>  </Route>
    <Route path="/question" element={<Question/>}>  </Route>
   </Routes>
   </>
  )
}

export default App
