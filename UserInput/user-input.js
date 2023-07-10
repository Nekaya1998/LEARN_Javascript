//How to accept user input using a window propmt and through html text box

//window prompt
let username = window.prompt('What is your name?');
console.log('Thank you for giving your name', username)

//html text box
let userName;
//on button click this will take in the text in the box and change the label
document.getElementById("submit").onclick = function(){
    userName = document.getElementById("username").value;
    document.getElementById("prompt").innerHTML = "Hi " + userName;
}