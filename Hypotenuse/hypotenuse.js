/*
This program will return the hypotenuse of a right triangle to the user
There are two versions:
1. input accepted through window prompt
2. input accepted from html text boxes
*/


//window prompt
let sideA = window.prompt("what is the length of side a?");
let sideB = window.prompt("what is the length of side b?");
let hypotenuse;


//conversions not needed here but are good practice for when they are needed
sideA = Number(sideA);
sideB = Number(sideB);

hypotenuse = findHypotenuse(sideA, sideB);
console.log(hypotenuse)


//html text areas
let hypotenuseFromHtml;

function findHypotenuse(a, b){
    a = Math.pow(a,2);
    b = Math.pow(b,2);
    const SIDES = a+b;
    return Math.sqrt(SIDES);
}

let a;
let b;

document.getElementById("hypotenuseButton").onclick = function(){
    a = Number(document.getElementById("aText").value);
    b = Number(document.getElementById("bText").value);
    document.getElementById("sideC").innerHTML = "Side C: " + findHypotenuse(a, b);
}