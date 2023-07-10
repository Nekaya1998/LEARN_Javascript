/**
 * Canvas API is a means for drawing graphics used for 
 * animations, games, data visualization
 * 
 * use .rect for rectangles (x, y, width, height)
 * use .arc for circles (x, y, r, sAngle, eAngle, counterClockwise)
 * use .fillText to draw text
 */

let canvas = document.getElementById("canvasApi");
let canvas2 = document.getElementById("canvasApi2");
let context = canvas.getContext("2d"); //painting within picture frame
let context2 = canvas2.getContext("2d");

//drawing lines
context.strokeStyle = "lightgreen";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0,0);
context.lineTo(250,250);
context.lineTo(250,500);
context.moveTo(500,0);
context.lineTo(250,250);
context.stroke();


//drawing triangle
context2.strokeStyle = "black"
context2.fillStyle = "lightgreen"
context2.lineWidth = 10;
context2.beginPath();
context2.moveTo(250, 0);
context2.lineTo(0, 250);
context2.lineTo(500, 250);
context2.lineTo(250,0);
 context2.fill();
context2.stroke();