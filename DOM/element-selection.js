/**
 * selecting elements in the DOM
 */

//selection by id
let element = document.getElementById("elementSelectionHeader");

element.style.backgroundColor = "lightgreen";

//selection by name
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit => {
    fruit.checked ? console.log(fruit.value) : null
});

//selection by tag name
let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

//selection by class name
let desserts = document.getElementsByClassName("desserts");
desserts[1].style.backgroundColor = "lightgreen";

//selection by query selector

//if you need all items use querySelectorAll and iterate over the array

//selection by id, tag, class or attribute
//id preceed with '#'
let element2 = document.querySelector("#domDiv");
element2.style.backgroundColor = "white";

//class name preceed with '.'
let element3 = document.querySelector(".desserts");

//attribute surrounded by '[]'
let element4 = document.querySelector("[for]");