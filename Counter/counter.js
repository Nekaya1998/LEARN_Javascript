let count = 0;
let countNumber = document.getElementById("countNumber");

document.getElementById("resetButton").onclick = function(){
    count = 0;
    countNumber.innerHTML = count;
}

document.getElementById("increaseButton").onclick = function(){
    count++;
    countNumber.innerHTML = count;
}

document.getElementById("decreaseButton").onclick = function(){
    count--;
    countNumber.innerHTML = count;
}