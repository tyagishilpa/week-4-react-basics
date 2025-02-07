/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './App.css'
import React, {Fragment} from "react"
import { useState } from 'react'

//key concept
let counter = 4; 

function App() {
 const [todos, setTodos] = useState([{
  id: 1,
  title: "study",
  description:"study"
 },
 {
  id: 2,
  title: "dance",
  description:"dance"
 },
 {
  id: 3,
  title: "singing",
  description:"singing"
 },
])

function addTodo(){
 // [...App.todos,{}] -> spread operatorr
  setTodos([...todos,{
    id:counter++,
    title:Math.random(),
    description:Math.random()
  }])
}

 return (
    <div>
    <button onClick={addTodo}>Add a todo</button>
    
     {todos.map(todo => <Todo title={todo.title} description={todo.description} key={todo.id}></Todo>)}
    </div>
  )
}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
