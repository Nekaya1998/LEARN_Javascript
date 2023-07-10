/**
 * Synchronous code occurs in an ordered sequence.
 * Step by step linear instructions.
 * 
 * Asynchronous code occurs out of sequence.
 * Ex. Access a database, file fetching or tasks that take time
 */

//synchronous
console.log("start")
console.log("this step is synchronous")
console.log("end")

//asynchronous
console.log("start")
setTimeout(() => console.log("This is asynchronous"), 5000);
console.log("end")

/**
 * Async
 */