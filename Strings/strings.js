/**
 * useful methods and properties for strings
 */

let username = "  Nekaya Lovett";
let phone = "123-456-7890"

//finding length
console.log(username.length)

//find character at certain index. index starts with 0
console.log(username.charAt(17))

//index of first occurrence of a letter
console.log(username.indexOf('a'))

//last occurrence of a letter
console.log(username.lastIndexOf('t'))

//get rid of empty spaces before and after string
console.log(username.trim())

//make uppercase
console.log(username.toUpperCase())

//make lowercase
console.log(username.toLowerCase())

//replace all
console.log(phone.replaceAll('-', ''))

/**
 * slicing strings allows you to extracts parts of a string without
 * modifying the original string
 */
let fullname = 'Nekaya Lovett';
let firstname;
let lastname;

lastname = fullname.slice(7);
console.log(lastname)

firstname = fullname.slice(0,6);
console.log(firstname)

//using indexof method
lastname= fullname.slice(fullname.indexOf(' ')+1);
console.log(lastname)

firstname = fullname.slice(0, fullname.indexOf(' '));
console.log(firstname)

/**
 * toLocaleString() method returns a string with a languange specific 
 * interpretation of a given number.
 * 
 * number.toLocaleString(locale, {options});
 * locale = specify that language (undefined returns default settings)
 * options = object with formatting options
 */

let englishNumber = 56983274.0932;
let hindiNumber = 56983274.0932;
let germanNumber = 56983274.0932;
let usd = 56983274.0932;
let rupee = 56983274.0932;
let euros = 56983274.0932;
let percent = .034;
let unit = 30;

//us english
englishNumber = englishNumber.toLocaleString("en-US");
console.log(englishNumber)

//hindi
hindiNumber = hindiNumber.toLocaleString("hi-IN");
console.log(hindiNumber)

//standard german
germanNumber = germanNumber.toLocaleString("de-DE");
console.log(germanNumber)

//formatting currency
usd = usd.toLocaleString("en-US",{style:"currency", currency:"USD"});
console.log(usd)

rupee = rupee.toLocaleString("hi-IN",{style:"currency", currency:"INR"});
console.log(rupee)

euros = euros.toLocaleString("de-DE",{style:"currency", currency:"EUR"});
console.log(euros)

//formatting percent
percent = percent.toLocaleString(undefined,{style:"percent"});
console.log(percent)

//formatting units
unit = unit.toLocaleString(undefined,{style:"unit", unit: "celsius"});
console.log(unit)