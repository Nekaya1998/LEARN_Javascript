/**
 * DOM traversal techniques. The relationship of elements in
 * the DOM matters
 */

let element = document.body;

//first child
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen"

//parent element
let vegetables = document.querySelector("#vegetables");
let parent = vegetables.parentElement;
parent.style.backgroundColor = "lightblue"

//next element sibling
let nextSibling = vegetables.nextElementSibling;
nextSibling.style.backgroundColor = "purple";

//previous sibling
let previousSibling = vegetables.previousElementSibling;
previousSibling.style.backgroundColor = "blue";

//accessing children of the element using methods
let element2 = document.querySelector("#vegetables");
child = element2.firstElementChild;
child.style.backgroundColor = "lightgreen";

//accessing children of the element by index
let element3 = document.querySelector("#vegetables");
child = element3.children[2];
child.style.backgroundColor = "white";