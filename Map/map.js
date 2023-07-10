/**
 * A map is an object that holds key value pairs of any data type
 */

const STORE = new Map([
["t-shirt", 20],
["jeans", 30],
["socks", 10],
["underwear", 15]
]);

let shoppingCart = 0;

//map get method
shoppingCart += STORE.get("t-shirt");
shoppingCart += STORE.get("socks");
console.log(shoppingCart);

//map set method
STORE.set("hat", 25);

//map delete method
STORE.delete("hat");

//map has key method
console.log(STORE.has("necklace"))

//map size method
console.log(STORE.size)

STORE.forEach((value, key) => console.log(`${key} $${value}`))
console.log(STORE);