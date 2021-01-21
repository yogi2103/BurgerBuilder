const Task=require('../models/event');
var task=[
]

//For home tab or viewing all the task available on home page
module.exports.home=function(req,res){

    //When Using with database
    Task.find({},function(err,task){
        if(err){
            console.log('Error in getting tasks!');
            return;
        }
        return res.render('home',{
                title: "TODO App",
                tasks: task 
             });
    })

    // When using without database
    // return res.render('home',{
    //     title: "TODO App",
    //     tasks: task 
    // });
    //return res.end('<h1>Howdy! I am running!</h1>');
}

//For adding task 
module.exports.Addtask=function(req,res){
    console.log(req.body);

    //Without database
    Task.create({
        Description: req.body.Description,
        Task: req.body.Task,
        DueDate: req.body.DueDate,
        Time: req.body.Time
    },function(err,newTask){
        if(err){
            console.log("error in creating Contact!");
            return;
        }
        console.log('****',newTask);
        return res.redirect('back');
    });

}

//For findingtask
module.exports.Findtask=function(req,res){
    console.log(req.query);
    console.log(Task);
    Task.find({Task:req.query.Task},(err,task)=>{
        if(err)
        {
            console.log("OOps!Not found!");
            return;
        }
        else{
        return res.render('home',{
            title: "TODO App",
            tasks: task 
         });
        }
    });
}

//For deleting task
module.exports.Deletetask=function(req,res){
    console.log(req.body);
    let id=req.body.Description;

    //Using with database
    console.log(typeof(id))
     if(typeof(id)=="string"){
     Task.findByIdAndDelete(id,function(err){
        if(err){
             console.log('Sorry not delete');
             return;
         }
         return res.redirect('back');
     });
     }
     else{
        for(let i=0;i<id.length;i++){
            console.log(id[i]);
            Task.findByIdAndDelete(id[i],function(err){
                if(err){
                     console.log('Sorry not delete');
                     return;
                 }
             });
        }
        return res.redirect('back');
     }
}

module.exports.update = function(req, res){
    console.log('hi',req.body);
    console.log('hi',req.params);
    Task.findById(req.params.id,function(err,task){
        task.Description=req.body.checking;
        task.Task=req.body.checking2;
        task.DueDate=req.body.checking3;
        task.Time=req.body.checking4;
        task.save();
    });
    return res.redirect('back');
}

