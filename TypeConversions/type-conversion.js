//type conversion allows you to change one data type to another

let age = window.prompt("How old are you? ");

//To fix you need to convert the type because user input is a string.
//when you do not know the data type of something you can use 'typeof' item
console.log(typeof age)
age = Number(age)
console.log(typeof age)
age += 1;

console.log(age)

let a;
let b;
let c;
let d;

a = Number("789");
b = String(24);
c = Boolean('okay');
d = Boolean('');

console.log(a, typeof(a))
console.log(b, typeof(b))
//with booleans, if there is a value (not empty), will return true. If no values (empty), will return false
console.log(c, typeof(c))
console.log(d, typeof(d))