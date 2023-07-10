/**
 * checking to see if input checkboxes and radio buttons are checked
 */

//checkbox
document.getElementById("checkboxButton").onclick = function(){
    const ISBOXCHECKED = document.getElementById("checkbox").checked;
    if (ISBOXCHECKED) {
        console.log("you are subscribed") 
    }
    else {
        console.log("you are not subscribed")
    }
}

//radio buttons

let radioButton = document.getElementById("radioButton");

radioButton.onclick = function(){
    const OPTION1 = document.getElementById("radio1");
    const OPTION2 = document.getElementById("radio2");
    const OPTION3 = document.getElementById("radio3");

    if (OPTION1.checked) {
        console.log("you have selected option 1")
    } else if (OPTION2.checked){
        console.log("you have selected option 2")
    } else if (OPTION3.checked){
        console.log("you have selected option 3")
    } else {
        console.log("no option was selected")
    }
}