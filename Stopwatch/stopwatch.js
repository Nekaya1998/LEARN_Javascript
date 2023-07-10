const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTime = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId;

startBtn.addEventListener("click", () => {
    if(paused){
        paused = !paused;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 1000)
    }
});
pauseBtn.addEventListener("click", () => {
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
});
resetBtn.addEventListener("click", () => {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTime = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;

    seconds = pad(Math.floor((elapsedTime / 1000) % 60));
    minutes = pad(Math.floor((elapsedTime / (1000 * 60)) % 60));
    hours = pad(Math.floor((elapsedTime / (1000 * 60 * 60)) % 60));

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

    function pad(number){
        return (("0")+number).length > 2 ? number : "0"+number;
    }
}