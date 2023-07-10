/* 
Arithmetic expressions are a combination of operands and operators.
Operands: 
(values, variables, etc)

Operators:
(+, -, *, /, %, **) Note: % is modulus not percent and ** is an exponent

These expressions can be evaluated to a value
*/

let students = 30;
let chairs = 30;
let cubbies = 30;
let backpacks = 30;
let desks = 31;
let pencils = 30;

//Augmented assignment operators. The extended versions are commented below
students += 1;
chairs -= 1;
cubbies *= 2;
backpacks /= 2;
pencils **= 2;
let desksLeft = desks %= 3; // the new variable has to be set equal to the reassignment of the desk variable
/*
students = students + 1;
chairs = chairs - 1;
cubbies = cubbies * 2;
backpacks = backpacks / 2;
pencils = pencils ** 2;
let desksLeft = desks % 3; // This operator gives you the remainder after division
*/

/*
PEMDAS exists here! Welcome back to math class lol
From Left to right solve in order:
1. Parenthesis
2. Exponents
3. Multiplication
4. Division
5. Addition
6. Subtraction
*/

let result = 1 + 2 * (3+4);


console.log('students', students)
console.log('chairs', chairs)
console.log('cubbies', cubbies)
console.log('backpacks', backpacks)
console.log('desks', desks)
console.log('pencils', pencils)
console.log('result', result)