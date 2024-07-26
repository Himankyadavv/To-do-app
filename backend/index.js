const express = require('express')
const app = express();
const port = 3000;
import { createTodo } from './types';
import { updateTodo } from './types';
app.use(express.json())

app.post('/todo',(req,res)=>{

})

app.get('todos',(req,res)=>{

})

app.put('completed',(req,res)=>{

})

app.listen(port, ()=>{
    console.log("server is listening on the port {port}")
})