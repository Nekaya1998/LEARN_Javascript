const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");

const choiceButtons = document.querySelectorAll(".choice-button")

let player;
let computer;
let result;

choiceButtons.forEach(button => {
    button.addEventListener("click", () => {
        player = button.textContent;
        computerTurn();

        playerText.textContent = `Player: ${player}`;
        computerText.textContent = `Computer: ${computer}`;
        resultText.textContent = checkWinner();
    })
})

function computerTurn(){
    const randNumber = Math.floor(Math.random()*3) + 1;
    switch(randNumber){
        case 1:
            computer = "Rock";
            break;
        case 2:
            computer = "Paper";
            break;
        case 3:
            computer = "Scissors";
            break;
    }
}

function checkWinner(){
    if(player == computer){
        return "Draw";
    } 
    else if (computer == "Rock"){
        return (player == "Paper") ? "you win" : "you lose";
    } 
    else if (computer == "Paper"){
        return (player == "Scissors") ? "you win" : "you lose";
    } 
    else if(computer == "Scissors"){
        return (player == "Rock") ? "you win" : "you lose";
    }
}