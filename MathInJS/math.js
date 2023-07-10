let x = 3.67;
let y = 8.99;
let z = 3.23;
let a = 9.4;
let b = 4.93;
let c = -4.20;
let maximum;
let minimum;
let pi;

//rounding
//rounds up or down based on normal math practices
x = Math.round(x);
console.log(x)

//rounds down always
y = Math.floor(y);
console.log(y)

//rounding up
z = Math.ceil(z);
console.log(z)

//raising to a power
//input 1 is the base value. input 2 is the power
a = Math.pow(a, 3);
console.log(a)

//square root
b = Math.sqrt(b);
console.log(b)

//absolute value
c = Math.abs(c);
console.log(c)

//maximum
maximum = Math.max(x, y, z);
console.log(maximum)

//minimum
minimum = Math.min(a, b, c);
console.log(minimum)

//built in constant pi
pi = Math.PI;
console.log(pi)
