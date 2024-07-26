const express = require('express')
const app = express();
const port = 3000;
import { dataSchema } from './mongo';
import { createTodo } from './types';
import { updateTodo } from './types';
app.use(express.json())

app.post('/todo', async (req,res)=>{
    const input = req.body;
    const parseinput = createTodo.safeParse(input);
    if(!parseinput.success){
        res.status(411).json({
            msg: "wrong input !"
        })
        return ;
    }

    await dataSchema.create({
        title: input.title,
        description: input.description,
        completed: false
    })

    res.json({
        msg: "To do created"
    })
})

app.get('todos',async (req,res)=>{
    const todos = await dataSchema.find({})
    res.json({
        todos
    })
})

app.put('completed',async (req,res)=>{
    const udpateInput = req.body;
    const parseUpdateInput = updateTodo.safeParse(udpateInput);
    if(!parseUpdateInput.success){
        req.status(411).json({
            msg: "you send the wrong input "
        })
        return;
    }

    await dataSchema.udpate({
        _id: req.body.id
    }, {
        completed: true
    })

    res.json({
        msg: "to do marked as completed"
    })

})

app.listen(port, ()=>{
    console.log("server is listening on the port {port}")
})