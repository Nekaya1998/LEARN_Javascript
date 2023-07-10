/* 
Javascript is a web based interpreting programming language that is used to add interactive behavior to applications,
build web and mobile applications, to create command line tools and for game development 
*/


/*
display info in the console. can use single quotes, double quotes and objects
does not have to end with ';'
*/
console.log('display info in console');


//Create an alert
window.alert('Hiya');

/**
 * console.time() starts a timer that can be used to track how long
 * a synchronous operation takes. Each timer should have a unique name
 */
//start
console.time("response time");

//do something
alert("click the okay button")

setTimeout(()=> console.log("set time out method"), 3000)

//end
console.timeEnd("response time");