const  mongoose = require('mongoose');


mongoose.connect("mongodb+srv://Himank:Himank123@cluster-0.tbaskcb.mongodb.net/todo")


const databaseschema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})
const database= mongoose.model("todolist",databaseschema)

module.exports = {
    database
};