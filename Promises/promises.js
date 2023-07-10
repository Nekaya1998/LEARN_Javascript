/**
 * A promise encapsulates the result of an asynchronous 
 * operation.
 * 
 * lets asynchronous methods return values like synchronous
 * methods 
 * 
 * The state is pending then fulfilled or rejected.
 * The result is what can be returned and errors have to be caught.
 */

const promise = new Promise((resolve, reject) => {
    let fileLoaded = false;

    fileLoaded ? resolve("file loaded") : reject("file not loaded");
});


promise.then(value => console.log(value))
       .catch(error => console.log(error))


const wait = time => new Promise((resolve) => {
    setTimeout(resolve, time);
});

wait(3000).then(() => console.log("Thank you for waiting"));

/**
 * The async keyword make a function return a promise
 */

/**
 * await keyword makes an async function wait for a promise
 */

async function loadFile(){
    let fileLoaded = true;

    if(fileLoaded){
        return "loaded";
    } else {
        throw "not loaded"
    }
}

async function startProcess(){
    try {
      let message = await loadFile();
      console.log(message);
    } catch(error){
        console.log(error);
    }
    
}

startProcess();