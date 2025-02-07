/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'

import './App.css'
//import { title } from 'process'

//anytime a parent re-render,it's child re-renders as well

function App() {
  const [todos, setTodos] = useState([{
    title: "go to gym",
    description: "go to gym from 7-9",
    completed: false
  },
{
  title: "study DSA",
  description: "study DSA from 7-9",
  completed: true
},
{
  title: "study DSA",
  description: "study DSA from 7-9",
  completed: true
}
]);

function addTodo(){
  //[1,2]
  //([...todos],3)
  setTodos([...todos, {
    title: "new Todos",
    description:"Desc of new todo"
  }])
}

  return (
   <div>
   <button onClick={addTodo}>Add a random todo</button>
   {/* <Todo title={todos[0].title} description={todos[0].description}/>
   <Todo title={todos[1].title} description={todos[1].description}/> */}

   {todos.map(function(todo){
    return <Todo title={todo.title} description={todo.description} />
   })}
   {/* {JSON.stringify(todos)} */}
   </div>
  )
}


function Todo(props){
  return <div>
    <h2>{props.title}</h2>
    <h2>{props.description}</h2>
  </div>
}

export default App
