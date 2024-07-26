import { useState } from "react";

 export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style={{
            padding: 5, 
            margin: 10,
            marginBottom: 15
        }} type="text" placeholder="title" id="input1" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }} />
        <input style={{
            padding: 5,
            margin: 10,
            marginBottom: 15
        }} type="text" placeholder="description" id="input2" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }} /><br />

        <button style={{
            margin: 10
        }} onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),

                headers: {
                    "content-type": "application/JSON"
                }
            })
            .then(async function(res){
                const json = await res.json();
                alert("To do added")
            })
        }}>Add task</button>
    </div>
 }

 