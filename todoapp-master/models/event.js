//for requiring mongoose (importing module)
const mongoose=require('mongoose');

// For defining schema
const EventSchema=new mongoose.Schema({
    Description:{
        type:String,
        required:true
    },
    Task:{
        type:String,
        required:true
    },
    DueDate:{
        type:String,
        required:true
    },
    Time:{
        type:String,
        required:true
    },
    update:{
        type:String
    }
})
// 
const Task=mongoose.model('event',EventSchema);

// For exporting the schema
module.exports = Task;