/*
Generating random numbers concept can be used in creating games
*/

//gives random numbers between 1 and 6
let x;
let y;
let z;


document.getElementById("randomButton").onclick = function(){
    x = Math.floor(Math.random() * 6) + 1;
    y = Math.floor(Math.random() * 6) + 1;
    z = Math.floor(Math.random() * 6) + 1;
    document.getElementById("randomNumber1").innerHTML = "first number: " + x;
    document.getElementById("randomNumber2").innerHTML = "second number: " + y;
    document.getElementById("randomNumber3").innerHTML = "third number: " + z;    
}