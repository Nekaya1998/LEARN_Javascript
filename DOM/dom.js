/**
 * The DOM is the Document Object Model (API).
 * An interface for changing the content of a page
 * Arranged in a hierarchical tree
 */

//document is the entry point of the DOM
console.log(document)

//get directory of DOM
console.dir(document)

//get parts of DOM. These can be changed in value and location
console.log(document.title, document.URL);

document.body.style.backgroundColor = "skyblue";

document.getElementById("domDiv").innerHTML = "Learning DOM";