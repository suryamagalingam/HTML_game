var randno = Math.round(Math.random()*100);

var  live=document.getElementById("rlive");

var messge=document.getElementById("message");

console.log(randno);


var msg="";

var lives=10;


function firstpage()
{
    location.href="./firstpage.html";
}

function res()
{

    lives--;
    var input=document.getElementById("txt").value;
    console.log(input);


    if (input == randno)
    {
        location.href="./win.html";
    }
    else if((input > randno)&&(lives != 0))
    {
        console.log(input,randno);
        msg="YOUR GUESS IS HIGH";
    }
    else if((input < randno)&&(lives!= 0))
    {
        console.log(input,randno);
        msg="YOUR GUESS IS LOW";
    }
    else if(lives == 0)
    {
        location.href="./lose.html";
    }
messge.innerHTML=msg;
live.innerHTML="Remaining Lives:"+lives;
}
function reset()
{
    document.getElementById("txt").value="";
    document.getElementById("rlive").innerHTML="";
    document.getElementById("message").innerHTML="";
}