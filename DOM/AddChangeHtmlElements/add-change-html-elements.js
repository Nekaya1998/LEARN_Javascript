/**
 * Adding and changing HTML elements
 */

const header = document.createElement("h1");

//can change the header tag using innerHTML (vulnerable to cross site scripting attacks)
//does not protect against malicious scripting
header.innerHTML = window.prompt("enter your header");
document.body.append(header);

//can change the header tag using .textContent (preferred for security)
header.textContent = window.prompt("enter your header");
document.body.append(header);

//add item
const fruitList = document.querySelector("#fruit");
const fruitListItem = document.createElement("li");
fruitListItem.textContent = "mango";

//add to end of list
fruitList.append(fruitListItem);

//add to beginning of list
fruitList.prepend(fruitListItem);

//add to places in the middle of list
fruitList.insertBefore(fruitListItem, fruitList.getElementsByTagName("li")[3]);