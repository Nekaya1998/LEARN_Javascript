/**
 * Animatiosn in JS
 */

const animationButton = document.getElementById("animationButton");
const animationDiv = document.getElementById("animationDiv");

animationButton.addEventListener("click", begin);
animationButton.addEventListener("click", rotate);
animationButton.addEventListener("click", scale);

function begin(){
    let timerId = null;
    let x=0;
    let y=0;

    timerId = setInterval(frame, 5);


    function frame(){
        if(x >= 200 || y>=200){
            clearInterval(timerId);
        } else {
            x++;
            y++;
            animationDiv.style.left = x+"px";
            animationDiv.style.top = y+"px";
        }
    }
}

function rotate(){
    let timerId = null;
    let degrees = 0;

    timerId = setInterval(frame, 5);

    function frame(){
        if(degrees >= 360){
            clearInterval(timerId);
        } else {
            degrees++;
            animationDiv.style.transform = "rotateZ("+degrees+"deg)";
        }
    }
}

function scale(){
    let timerId = null;
    let scaleX = 1;
    let scaleY = 1;

    timerId = setInterval(frame, 5);

    function frame(){
        if(scaleX >=2 || scaleY >= 2){
            clearInterval(timerId);
        } else{
            scaleX+=0.01;
            scaleY+=0.01;
            animationDiv.style.transform = "scale("+scaleX+","+scaleY+")"
        }
    }
}