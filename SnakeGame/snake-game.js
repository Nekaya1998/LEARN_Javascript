const gameBoard = document.querySelector("#gameBoard");
const context = gameBoard.getContext("2d");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;

const scoreText = document.querySelector("#scoreText");
const resetBtn = document.querySelector("#resetBtn");

const boardBackground = "black";
const snakeColor = "pink";
const snakeBorder = "corflowerblue";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize;
let yVelocity = 0;
let foodXCoordinate;
let foodYCoordinate;

let score = 0;
let snake = [
    {x:unitSize*4, y:0},
    {x:unitSize*3, y:0},
    {x:unitSize*2, y:0},
    {x:unitSize, y:0},
    {x:0, y:0}
];

window.addEventListener("keydown", changeDirection);
resetBtn.addEventListener("click", resetGame);

gameStart();

function gameStart(){
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
}

function nextTick(){
    if(running){
        setTimeout(() => {
            clearBoard();
            drawFood();
            moveSnake();
            drawSnake();
            checkGameOver();
            nextTick();
        }, 75)
    }
    else {
        displayGameOver();
    }
}

function clearBoard(){
    context.fillStyle = boardBackground;
    context.fillRect(0, 0, gameWidth, gameHeight);
}

function createFood(){
    function randomFood(min, max){
        const randNumber = Math.round((Math.random()*(max-min) + min) / unitSize) * unitSize;
        return randNumber;
    }
    
    foodXCoordinate = randomFood(0, gameWidth - unitSize);
    foodYCoordinate = randomFood(0, gameWidth - unitSize);
}

function drawFood(){
    context.fillStyle = foodColor;
    context.fillRect(foodXCoordinate, foodYCoordinate, unitSize, unitSize);

}

function moveSnake(){
    const head = {x: snake[0].x + xVelocity, y:snake[0].y + yVelocity};
    snake.unshift(head);

    if(snake[0].x == foodXCoordinate && snake[0].y == foodYCoordinate){
        score++;
        scoreText.textContent = score;
        createFood();
    } else{
        snake.pop();
    }
}

function drawSnake(){
    context.fillStyle = snakeColor;
    context.strokeStyle = snakeBorder;
    snake.forEach(snakePart => {
        context.fillRect(snakePart.x, snakePart.y, unitSize, unitSize)
        context.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize)
    });
}

function changeDirection(event){
    const keyPressed = event.keyCode;
    const left = 37;
    const right = 39;
    const up = 38;
    const down = 40;

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);

    switch(true){
        case (keyPressed == left && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == up && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize;
            break;
        case (keyPressed == right && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == down && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;

    }
}

function checkGameOver(){
    switch(true){
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
    }

    for(let i = 1; i < snake.length; i++){
        if((snake[i].x == snake[0].x) && (snake[i].y == snake[0].y)){
            running = false;
        }
    }
}

function displayGameOver(){
    context.font = "50px Courier New";
    context.fillStyle = "White";
    context.textAlign = "center";
    context.fillText("Game Over!", gameWidth/2, gameHeight/2);
    running = false;
}

function resetGame(){
    score = 0;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        {x:unitSize*4, y:0},
        {x:unitSize*3, y:0},
        {x:unitSize*2, y:0},
        {x:unitSize, y:0},
        {x:0, y:0}
    ];
    gameStart();    
}