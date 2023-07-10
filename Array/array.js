/**
 * An array is an object that can store one or more items. Arrays can 
 * have data types assigned to them
 */

let fruit = ["orange", "pineapple", "cherry"];
let meat = ["chicken", "pork", "turkey"]
let vegetables = ["carrots", "onions", "potatoes"]
console.log(fruit)

//access specific index
fruit[2]

//update array
fruit[0] = "coconut";

//add an element to array
fruit.push("melon");

//take off last element of array
fruit.pop();

//add item to beginning of array
fruit.unshift("mango");

//remove beginning element
fruit.shift();

//check length of array
let len = fruit.length;

//find index
//elements that do not exist have an index of -1
let index = fruit.indexOf("kiwi");

//looping through array
//for loop forward
for(let i=0; i<fruit.length; i++){
    console.log(fruit[i])
}

//for loop backward
for(let i=fruit.length-1; i>=0; i--){
    console.log(fruit[i])
} 

//for of
for (let f of fruit){
    console.log(f)
}

//Array sorting 
//ascending
fruit.sort();

//descending
fruit.sort().reverse();

//2D Arrays
let groceryList = [fruit, vegetables, meat];

for(let list of groceryList){
    for(let food of list){
        console.log(food)
    }
}

//spread operator ...
//unpacks and array into individual arguments
let numberArray = [1,2,3,4,5,6,7,8,9]
let maximum = Math.max(...numberArray);

//forEach
fruit.forEach(fruit => {
    console.log(fruit)
})

//map
let numbers = [1,2,3,4,5];
let squares = numbers.map(square)
squares.forEach(i => console.log(i))

function square(element){
    return Math.pow(element, 2);
}

//filter
numbers.filter(filter).forEach(i=>console.log(i));

function filter(element){
 return element >= 3;
}

//reduce
//reduces and array to one value
let prices = [5, 10,15, 20, 25];
let total = prices.reduce(checkOut);

console.log(total)

function checkOut(total, element){
    return total+element
}

//sort array of numbers
let grades = [100, 50, 80, 90, 70 ,68];
grades = grades.sort(sortDescending);
console.log(grades)

grades = grades.sort(sortAscending)
console.log(grades)

function sortDescending(x,y){
    return y-x;
}

function sortAscending(x,y){
    return x-y;
}

//shuffle elements of array
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
shuffle(cards);
console.log(cards)

function shuffle(array){
let currentIndex = array.length;

while(currentIndex != 0){
    let randomIndex = Math.floor(Math.random()*array.length);
    currentIndex--;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
}
return array;
}

//create an array of objects
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

const cars = [car1, car2, car3];