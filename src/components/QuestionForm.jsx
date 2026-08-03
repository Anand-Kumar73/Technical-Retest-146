import React from 'react'
import { useState } from 'react'
import QuestionCard from '../components/QuestionCard'

const QuestionForm = () => {
  const QuestionCard=()=>{
    const [form,setForm]=useState({
      name:" ",
      question:"",
      answer:"",
    })
    const [question, setQuestion] =useState([]);
    function handleChange(e){
      setForm({
        form,
        [e.target.name]: e.target.value,
      })
      function handleSubmit(e){
        setQuestion([question, form]);
        setForm({
          name:"",
          question:"",
          answer:"",
        })
      }
    }
  }
  return (
    <div>
      <h1>Question form</h1>
      <form onSubmit={handleSubmit}>
        <input
         type="text"
         name="name"
         placeholder='Student Name'
         value={form.name}
         onChange={handleChange}
          />
          <textarea
          name="answer"
          placeholder='Answer'
          value={form.value}
          onChange={handleChange}
          />
          <button>
            submit
          </button>
      </form>
      <hr />
      {
        question.length===0?(
          <h2>No Qusetion solved</h2>
        ):(
          question.map((item,index))=(
            <QuestionCard
            key={index}
            item={item}
            />
          )
        )
      }
    </div>
  )
}

export default QuestionForm
