/*
Variables are containers for storing data
Variables take on the behavior of the data it is assigned to

Variables have to be declared and then initalized.

In JS, declaration looks like:
(var, let, const) variable_name;
let = variables that are limited to block scope{}
var = variables that are limited to a function(){}

global var variables can and will change the browsers window properties

const cannot be reassigned

In JS, initialization looks like:
variable_name = item;

Variable names should be descriptive of what they contain
Variables can be declared and initialized on the same line or different lines based on needs
*/

//global variables
let age;
let firstName = 'Nekaya'; //string
let isStudent = true; //boolean
console.log(age) //this is undefined because the variable is not initialized at this point

age = 24; //number
age = age + 1; //be careful to not perform number operators on strings


//console output is separated by commas
console.log("Hello", firstName)
console.log("you are", age, "years old in August")
console.log("Are you a current student?", isStudent)

//change innerHTML of items
//Notice in the html that there is nothing inside the p tags. This updates the HTML that is seen
document.getElementById("name").innerHTML = "Hello " + firstName;
document.getElementById("age").innerHTML = "you are " + age + " years old in August";
document.getElementById("isStudent").innerHTML = "Are you a current student? " + isStudent;


//Constants ... const

//finding the circumference of a circle
const PI = 3.14159; //pi is not able to be changed. Constants are capitalized for conventions
let radius;
let circumference;

radius = window.prompt("insert radius");
radius = Number(radius);

circumference = 2 * PI * radius;
console.log("The circumference is: ", circumference)

//using var inside {}
//var can escape {}. console.log(i) is 4
for(var i=0; i<=3; i++){
}
console.log(i)

//var inside function()
//var cannot escape a function. The console below has an error
function doSomething(){
    for(var j=0; j<=3; j++){
    }
}
console.log(j)