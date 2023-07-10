/**
 * template literals are delimited with (`) instead of double or single quotes.
 * template literals allow for embedded variables and expressions 
 */

let username = 'kay';
let items = 3;
let total = 56;

//these are the same
console.log("Hello", username)
console.log("you have", items, "items sin your cart")
console.log("your total is", total)

console.log(`Hello ${username}`)
console.log(`you have ${items} items in your cart`)
console.log(`your total is $${total}`)

let text = `Hello ${username} <br>
you have ${items} items in your cart <br>
your total is $${total}<br>`

document.getElementById("literalLabel").innerHTML = text;