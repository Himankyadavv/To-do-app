const mongoose = require('mongoose')
const { string } = require('zod')

mongoose.connect("mongodb+srv://Himank:Himank123@cluster-0.tbaskcb.mongodb.net/todo")

const dataSchema = mongoose.model("todolist",{
    title: string,
    description: string 
})