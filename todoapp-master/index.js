const express= require('express');
const app=express();
const port=process.env.PORT || 8000;

//For mongo-db connection
const db=require('./config/mongoose');
const Task=require('./models/event');

//For encoding
app.use(express.urlencoded());

//For using static files
app.use(express.static('./assets'));

//For routing and accessing pages from here
app.use('/',require('./routes/Route_index'));

//FOr view engine as ejs
app.set('view engine','ejs');
app.set('views','./views');

//To check if the server is running successfully or not
app.listen(port,function(err){
    if(err){
        console.log(`error in Server!: ${err}`);
    }
    console.log(`Server is Running on port: ${port}`);
})
