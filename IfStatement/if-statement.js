/**
 * if statements are used to provide conditional code.
 * if certain conditions are met then do one thing 
 * if not, do something else
 * 
 * you can have the following statements:
 * if
 * if-else
 * if-else if-else
 * ternary operator: condition ? if condition is true : if condition is false
 */

let age = 24;
let online = true;

//note: the order of your if statements matter when using if-elseif-else
//if you want two things to be true use multiple if statements
if (age >= 18){
    console.log('you are an adult')
} else 
    console.log('you are not an adult')


//checking booleans
if(online){
    console.log('you are online')
} else console.log('you are offline')

/**
 * Logical operators && (and) and || (or) and ! (Not) are used to see if two or more things
 * are true (&&) or is at least one of them is true (||) or if not true (!)
 */

let temp = 15;
let newTemp = 30;
let sunny = false;

//logical and
if (temp >= 0 && temp<30){
    console.log("great temps today")
} else {
    console.log("bad weather ahead")
}

//logical or
if(temp<=0 || temp>30){
    console.log("poor weather today")
} else {
    console.log("even weather today")
}

//combination of logical operators
if(temp > 0 && temp < 20 || sunny === true){
    console.log("good weather today")
} else {
    console.log("weather is not looking too good")
}

//not operator
if(!(temp>0)){
    console.log("stay warm today")
} else {
    console.log("good temps today")
}

//booleans
if(!sunny){
    console.log("the skies are cloudy")
} else {
    console.log("today is sunny")
}

//ternary operator
let adult = checkAge(10);

function checkAge(age){
    return age >= 18 ? true : false;
}
console.log(adult)