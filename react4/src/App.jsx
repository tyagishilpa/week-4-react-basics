/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {Fragment} from "react"
import { useState } from 'react'
import './App.css'

function App() {
  const [title, setTitle] = useState("my name is shilpi");

  function updateTitle(){
    setTitle("my name is " + Math.random());
  }


 return (
   <div>
    <button onClick={updateTitle}>Update the title</button>

    <Header title={title}></Header>
    <Header title="shilpi"></Header>
   </div>
  )
}



const Header = React.memo(function Header({title}){

  return <div>
    {title}
  </div>
})

export default App
