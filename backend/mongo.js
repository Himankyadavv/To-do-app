const mongoose = require('mongoose')
const { string, boolean } = require('zod')

mongoose.connect("mongodb+srv://Himank:Himank123@cluster-0.tbaskcb.mongodb.net/todo")

const dataSchema = mongoose.model("todolist",{
    title: string,
    description: string,
    completed: boolean
})

module.exports = {
    dataSchema: dataSchema
}