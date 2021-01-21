// For changing the background image in selecting different options

document.getElementById('tasking').onchange=function(err){
    if(this.value=="Gym"){
        document.body.style.background= "url('images/Workout.jpg')";
        document.body.style.backgroundSize="contain";
    }
    if(this.value=="Meeting"){
        document.body.style.background= "url('images/Meeting.jpg')";
        document.body.style.backgroundSize="cover";
    }
    if(this.value=="Grocery"){
        document.body.style.background= "url('images/Grocert.jpg')";
        document.body.style.backgroundSize="contain";
    }
    if(this.value=="Exam"){
        document.body.style.background= "url('images/Exam.jpg')";
        document.body.style.backgroundSize="contain";
    }
    if(this.value=="BillPayment"){
        document.body.style.background= "url('images/BillPayment.png')";
        document.body.style.backgroundSize="contain";
    }
    if(this.value=="Doctor"){
        document.body.style.background= "url('images/Doctor.jpg')";
    }
    if(this.value=="Movie"){
        document.body.style.background= "url('images/Movie.jpg')";
        document.body.style.backgroundSize="contain";
    }
    if(this.value=="Others"){
        document.body.style.background= "url('images/To_do_list.jpg')";
    }
}

function update(a,b,c,d,e){
    document.getElementById('updating').action='/update/'+e;
    // console.log(e);
    // document.getElementById("updatelink").href = "/update/"+e;
    // console.log( document.getElementById("updatelink"));
    document.getElementById('update').style.visibility="visible";
    document.getElementById("Description").value =b;
    document.getElementById("tasking").value=a;
    document.getElementById("Duedate").value=c;
    document.getElementById("appt").value=d;
}

function finalupdate(){
    document.getElementById("givenDesc").value=document.getElementById("Description").value;
    document.getElementById("givenTask").value=document.getElementById("tasking").value;
    document.getElementById("givenDueDate").value=document.getElementById("Duedate").value;
    document.getElementById("givenTime").value=document.getElementById("appt").value;
}
