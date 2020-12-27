
function validation(uinput,msg){
    while(uinput === '' || uinput === null || uinput === undefined){
        uinput = prompt(msg);
    }
    return uinput;
}

function alertMsg(uinput,msg){
    alert(msg+uinput);
}

function ratevalidation(uinput,msg){
    if(uinput>0 && uinput<=5){
        for(var i = 0; i<uinput ; i++){
        document.write(msg);
        }
    }
    else if(uinput>5){
        for(var i = 0; i<5 ; i++){
            document.write(msg);
            }
    }
}

var username= validation(username,"please enter your name");
var rate=validation(rate,"What star rating would you give, 1-5?");
ratevalidation(rate,"<img src=star.png width=30px heigth='30px' class='rate'>")
alertMsg("aya" ," thank you ");




//// this code for lab 6

/*var gender = prompt("what your gender? (input F/f if you female , M/m if you male");
var gmsg='';
if (gender == "f" || gender =="F"){
    gmsg='Madam .';
}
else if(gender == "m" || gender =="M"){
   gmsg='Mr.';
}
document.write('<h3> Welcome <i>'+gmsg+name+' </i></h3>'); 


var visit = prompt("are you visit our website before? (input Y to yes , N to no)");
var msg ='';
if(visit=="y" || visit=="Y"){
 vmsg ='<h3> we happy to see you again ^_^</h3>' ;
}
else if(visit=="N" || visit=="n"){
 vmsg='<h3>we pleasure you choose us *_* </h3>'; 
}
document.write(vmsg);*/
