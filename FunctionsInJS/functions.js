/**
 * functions allow you to avoid duplicating code. 
 * functions can be called in places where code will need to be repeated 
 * by calling the function.
 * 
 * Functions have access to global variables;
 * variables have to be scoped by their need to be reused in multiple places.
 * 
 * functions can accept multiple parameters of multiple data types
 * 
 * return statements return values or data from functions and begins with key word "return". These values are returned back to the place where the function was called
 * 
 */

let username = "kaya";
let userAge = 24;
/* let width = window.prompt("what is the width")
let height = window.prompt("what is the height") */
let area;

//calling functions
heyGirl();

//passing values to functions using parameters
whatAge(userAge);

//function
function heyGirl(){
    console.log("Hiya", username)
    console.log("Hey Hey", username)
    console.log("Horlo", username)
    console.log("Hello World", username)
}

//function with parameter
function whatAge(age){
    console.log("your age is", age)
}

//return function
function getArea(width, height){
    return width*height;
}
/* area = getArea(width, height);
console.log(area);
 */
//callback functions
/**
 * callback functions help ensure a function will not run before it 
 * is needed. This helps develop asynchronous code
 */

let total = sum(2,3, displayConsole);
let otherTotal = sum(8,20, displayDOM)

function sum(x, y, callBack){
    let result = x+y;
    callBack(result);
}

function displayConsole(output){
    console.log(output)
}

function displayDOM(output){
    document.getElementById("callBackFunction").innerHTML = output;
}

/**
 * Function expression is a function without a name that 
 * help you avoid making global scope messy. Function expressions
 * can be written and forgotten about
 */
const GREETING = function(){
    console.log("hello")
}
GREETING();

let count = 0;
document.getElementById("increaseButton").onclick = function(){
    count++;
    document.getElementById("counterLabel").innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count--;
    document.getElementById("counterLabel").innerHTML = count;
}

/**
 * Arrow function expressions are a compact alternative to writing out
 * full function expressions
 */

const greeting = () => {
    console.log("hiya")
}

const percent = (x,y) => {
    return x/y * 100;
}

console.log(percent(6,5))

let grades = [78, 92, 45, 97, 56];

grades.sort((x,y) => y - x);
console.log(grades)

grades.forEach((x) => console.log(x))

/**
 * nested functions are functions inside of other functions. The outer
 * function has access to the inner functions.
 * Inner functions are "hidden" from the outside and are used in closures
 */

let someUser = "nekaya";
let userInbox = 0;

login();

function login(){
 displayUsername();
 displayUserInbox();

 function displayUsername(){
    console.log(`Hello ${someUser}`)
 }
   
 function displayUserInbox(){
       console.log(`you have ${userInbox} new messages`)
 }
}

//passing objects to functions
class Car{
    constructor(model, year, color){
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Toyota", 2016, "red");
const car2 = new Car("Trailblazer", 2023, "red");
const car3 = new Car("Tahoe", 2024, "black");

displayInfo(car1);
displayInfo(car2);
displayInfo(car3);

function displayInfo(car){
    console.log(car.model)
    console.log(car.year)
    console.log(car.color)
}

/**
 * set timeout method invokess function after a specified 
 * number of milliseconds. Helps you create asynchronous 
 * code (doesn't pause execution of program)
 */

let timer1 = setTimeout(firstMessage, 3000); //3seconds
let timer2 = setTimeout(firstMessage, 6000);
let timer3 = setTimeout(firstMessage, 9000);

function firstMessage(){
    alert('buy this course for $550')
    alert('pls')
    alert('The money would help')
    alert('you will learn so much')
}

document.getElementById("timeOutButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
}

/**
 * set interval method invokes a function repeatedly
 * after a number of millisecondsa and does not stop the
 * execution of your program
 */

let intervalCount = 0;
let max = Number(window.prompt("count up to what number"));

let myTimer = setInterval(countUp, 1000);

function countUp(){
    intervalCount++;
    console.log(intervalCount);

    if(intervalCount >= max){
        clearInterval(myTimer)
    }
}