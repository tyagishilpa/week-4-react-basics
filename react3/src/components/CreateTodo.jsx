/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState } from "react";

export function CreateTodo(props){
    const [title, setTitle] = useState("");
    const [description, SetDescription] =
    useState("");

    return <div>
        <input style={{
            padding:10,
            margin:10
        }
        } type="text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}/>
        <br />

        <input style={{
            padding:10,
            margin:10
        }
        } type="text" placeholder="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input>
        <br/>

        <button style={{
            padding:10,
            margin:10
        } } onClick={()=>{
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            })
            .then( async function(res){
                const json = await res.json();
                alert("Todo added");
            })
        }}>Add a todo</button>

    </div>
}