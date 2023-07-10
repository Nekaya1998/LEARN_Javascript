/**
 * LOOPS:
 * 
 * A while loop repeats code while a condition is met.
 * Careful with while loops, they can be infinite if not checked
 * with the right conditions and on the correct data objects.
 * 
 * A do-while loop means you perform an action and then check the condition;
 * 
 * A for-loop repeats code a certain number of times;
 * 
 * A nested-loop is a loop inside of another loop
 */

let username;
let rows = window.prompt("how many rows?");
let cols = window.prompt("how many cols?");
let symbol = window.prompt("enter a symbol to use");
//do-while loop

/* do {
    username = window.prompt("enter your name");
} while(username === "" || username === null)

console.log("hello", username); */

//for-loop

//count up
console.log("counting up")
for (let i=1; i<=10; i++){
    console.log(i)
}

//count down
console.log("count down")
for (let i=10; i>0; i--){
    console.log(i)
}

// counting up or down by a specific number
console.log("count up by two")
for(let i=0; i<=10; i+=2){
    console.log(i)
}

//breaking a loop exits the loop completely
console.log("breaking loop")
for(let i=0; i<=20; i++){
    console.log(i)
    if(i===13){
        break;
    }
}

//continuing in a loop skips an iteration in a loop
console.log("continuing loop")
for(let i=0; i<=20; i++){
    if(i===13){
        continue;
    }
    console.log(i)
}

//nested loop
for(let i=1; i<=rows; i++){
    for(let j=1; j<=cols; j++){
        document.getElementById("rectangle").innerHTML += symbol
    }
    document.getElementById("rectangle").innerHTML += '<br>'
}