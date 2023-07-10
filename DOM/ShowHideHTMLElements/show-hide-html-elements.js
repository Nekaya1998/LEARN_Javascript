/**
 * showing and hiding html elements
 */

const toggle = document.querySelector("#toggleImage");
const img = document.querySelector("#funkyShrek");

toggle.addEventListener("click", () => {
    if(img.style.visibility == "hidden"){
        img.style.visibility = "visible";
    } else {
        img.style.visibility = "hidden";
    }
})