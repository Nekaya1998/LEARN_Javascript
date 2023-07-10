/**
 * errors are objects with a description of something 
 * going wrong
 * 
 * use the throw keyword to implement a user defined error
 * 
 * finally block always executes
 */

try{
    let x = Number(window.prompt("enter a number"));

    if(isNaN(x)) throw `${x} is not a number`;
    if(x == "") throw `${x} is not a number`;
    
    console.log(x);
} 
catch(error){
    console.log(error)
}
finally{
    console.log("Hello, I always execute")
}