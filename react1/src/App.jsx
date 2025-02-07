/* eslint-disable no-undef */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */

import { useState } from 'react';
import './App.css'
//state,components

// let state = {
//   count: 0
// }
function App() {

 const [count, setCount] = useState(0);

// function onclickhandler(){
//  setCount(count + 1)
// }

  return (
   <div>
   <Custombtn count={count} setCount={setCount}></Custombtn>
   {/* <Custombtn count={count+1} setCount={setCount}></Custombtn>
   <Custombtn count={count*100} setCount={setCount}></Custombtn> */}
   
    {/* <button onClick={onclickhandler}>Counter  {count}</button> */}
   </div>
  )
}

//component
function Custombtn(props){

   function onclickhandler(){
    props.setCount(props.count + 1);
   }

  return <button onClick={onclickhandler}>
    Counter {props.count}
  </button>
}

export default App
