/*
coding method used to call multiple functions in one line
*/

let username = 'nekaya';

//without method chaining to return first letter
let letter = username.charAt(0);
letter = letter.toUpperCase();
console.log(letter)


//method chaining
let mLetter = username.charAt(0).toUpperCase();
console.log(mLetter)