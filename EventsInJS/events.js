/**
 * Events are things that the user or the browser does
 */

//onclick event
const element = document.getElementById("eventButton");
element.onclick = eventFunction;

//onload event in the html on the body tag

//onchange event
const textElement = document.getElementById("eventText");
textElement.onchange = eventFunction;

//onmouseover event, onmouseout event, onmousedown event, and onmouseup event
const divElement = document.getElementById("eventDiv");
divElement.onmouseover = changeColor;
divElement.onmouseout = revertColor;
divElement.onmousedown = eventFunction;
divElement.onmouseup = eventFunctionUp;

/**
 * .addEventListener(event, function, useCapture)
 * you can add many event handlers to one element.
 * Even the same event that invokes different functions.
 */

const handlingDiv = document.getElementById("handlingDiv");
const divGroup = document.getElementById("divGroup");

handlingDiv.addEventListener("click", changePink);
divGroup.addEventListener("click", changePink);



//Functions
function eventFunction(){
    console.log("the click was the event");
}

function eventFunctionUp(){
    console.log("you released the mouse");
}

function changeColor(){
    divElement.style.backgroundColor = "pink";
}

function revertColor(){
    divElement.style.backgroundColor = "cornflowerblue";
}

/**
 * Event listener Functions
 */
function changePink(){
    this.style.backgroundColor = "pink";
}


/**
 * Detect key presses by creating a movable box
 */
const movableBox = document.getElementById("movableBox");
let x=0;
let y=0;

window.addEventListener("keydown", move);

function move(event){
    switch(event.key){
        case "ArrowDown":
            y+=5;
            movableBox.style.top = y+"px";
            break;
        case "ArrowUp":
            y-=5;
            movableBox.style.top = y+"px";
            break;
        case "ArrowRight":
            x+=5;
            movableBox.style.left = x+"px";
            break;
        case "ArrowLeft":
            x-=5;
            movableBox.style.left = x+"px";
            break;
    }
}