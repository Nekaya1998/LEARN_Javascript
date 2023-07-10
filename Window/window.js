/**
 * window is an interface used to talk to the web browser
 * the DOM is a property of the window
 */

console.dir(window);

//width and height of window
console.log(window.innerWidth, window.innerHeight)
console.log(window.outerWidth, window.outerHeight)

//scroll position
console.log(window.scrollX, window.scrollY);

//finding href
console.log(window.location.href)

//finding host name
console.log(window.location.hostname)

//finding path name
console.log(window.location.pathname)

//open new window and close window
const windowButton = document.querySelector("#windowButton");
const windowCloseButton = document.querySelector("#windowCloseButton");
windowButton.addEventListener("click", () => window.open());
windowCloseButton.addEventListener("click", () => window.close())

//print current page
const windowPrintButton = document.querySelector("#windowPrintButton");
windowPrintButton.addEventListener("click", () => window.print());

//popups alert, confirm and prompt
window.alert("hello");
window.confirm("Press okay to continue");
window.prompt("Enter your age");