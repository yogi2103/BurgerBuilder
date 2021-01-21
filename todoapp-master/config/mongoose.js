//Requiring the mongoose library
const mongoose=require('mongoose');

//Connecting to database
mongoose.connect('mongodb+srv://yogi:21032103@cluster0.nmyxz.mongodb.net/todo_app?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(() => console.log("Database Connected Successfully"))
.catch(err => console.log(err));


//Checking establishment of connection
const db=mongoose.connection;

//For checking error
db.on('err',console.error.bind(console,'error connecting to database!'));

//For Successfull Connection
db.once('open',function(){
    console.log("Succesfull Connection!");
})
