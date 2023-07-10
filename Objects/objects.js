/**
 * objects are groups of properties and methods
 * 
 * properties = what an object has
 * methods = what an object can do
 * 
 * use dot (.) operator to access properties/methods in objects
 * 
 * this keyword provides reference to a particular object
 * the object depends on the immediate context
 */

const car = {
    model: "Mustang",
    color: "red",
    year: "2023",

    drive: function(){
        console.log(`you drive the ${this.model}`)
    },

    brake: function(){
        console.log("you step on the breaks")
    }
}

console.log(car.model)
car.drive();

/**
 * anonymous objects are objects without a name and
 * is not directly referenced so it involves less syntax.
 */

class Card{
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    }
}

let cards = [
    new Card("A", "Hearts"),
    new Card("A", "Diamonds"),
    new Card("A", "Spades"),
    new Card("A", "Clubs"),
    new Card("2", "Hearts"),
    new Card("2", "Diamonds"),
    new Card("2", "Spades"),
    new Card("2", "Clubs")
]
cards.forEach(card => console.log(`${card.value} ${card.suit}`))

/**
 * The date object is used to work with dates and times
 */

let date = new Date();
let year = date.getFullYear();

//setting date properties
date.setMinutes(42);
console.log(date)

date = date.toLocaleString();
console.log(date)


console.log(year)