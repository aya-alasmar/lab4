var name ='';
name = prompt("please wnter your name");

var gender = prompt("what your gender? (input F/f if you female , M/m if you male");
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
document.write(vmsg);