const express = require('express')
const app = express();
const port = 3000;
import { createTodo } from './types';
import { updateTodo } from './types';
app.use(express.json())

app.post('/todo',(req,res)=>{
    const input = req.body;
    const parseinput = createTodo.safeParse(input);
    if(!parseinput.success){
        res.status(411).json({
            msg: "wrong input !"
        })
    }
})

app.get('todos',(req,res)=>{

})

app.put('completed',(req,res)=>{
    const udpateInput = req.body;
    const parseUpdateInput = updateTodo.safeParse(udpateInput);
    if(!parseUpdateInput.success){
        req.status(411).json({
            msg: "you send the wrong input "
        })
    }
})

app.listen(port, ()=>{
    console.log("server is listening on the port {port}")
})