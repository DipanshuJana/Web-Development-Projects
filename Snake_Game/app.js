// Gmae Constants & Variables
let snakeVelocity = {x: 0, y: 0};
const pointScore = new Audio('point.wav');
const gameOver = new Audio('gameover.wav');
const gameStart = new Audio('start.wav');
const scoreCount = document.getElementById('score');
const highScoreCount = document.getElementById('high-score');
let speed = 4;
let score = 0;
let gameStarted = false;
let lastPaintTime = 0;
let snakeArr = [
    {x: 10, y: 10}
]
let food = {x: 13, y:15};

// Game Functions
function main(cTime){
    window.requestAnimationFrame(main);
    if((cTime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = cTime;
    gameEngine();
}

function isCollide(snake){
    // if you bump into yourself
    for (let i = 1; i < snake.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }

    // if you cross the border
    if(snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0){
        return true;
    }
}

function gameEngine(){
    // Part 1: Updating the snake array and the food
    if(isCollide(snakeArr)){
        gameStarted = false;
        snakeVelocity = {x:0, y:0};
        snakeArr = [{x: 10, y: 10}];
        food = {x: 13, y:15};
        gameOver.play();
        getScore = localStorage.getItem('score');
        highScore = {'score': score};
        if (getScore == undefined){
            localStorage.setItem ('score', highScore['score']);
        }
        else{
            if(getScore < score){
                localStorage.setItem ('score', highScore['score']);
            }
        }
        getScore = localStorage.getItem('score');
        score = 0;
        highScoreCount.innerHTML = `<strong>High Score: ${getScore}</strong>`;
        scoreCount.innerHTML = `<strong>Score: ${score}</strong>`
        alert('Game Over. Press any key to play again!');
    }
    
    // If you have eaten the food then increment the score and regenerate the food
    if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
        snakeArr.unshift({x: snakeArr[0].x + snakeVelocity.x, y: snakeArr[0].y + snakeVelocity.y});
        a = 2;
        b = 16;
        food = {x: 2+Math.round(a + (b-a) * Math.random()), y: Math.round(a + (b-a) * Math.random())};
        score += 1;
        pointScore.play();
        scoreCount.innerHTML = `<strong>Score: ${score}</strong>`;
    }

    // Moving the snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += snakeVelocity.x;
    snakeArr[0].y += snakeVelocity.y;

    // Part 2: Display the snake and the food
    board.innerHTML = "";

    // Displaying the snake
    snakeArr.forEach((e, index)=> {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if(index === 0){
            snakeElement.classList.add('head');   
        }

        else{
            snakeElement.classList.add('snake');
        }

        board.appendChild(snakeElement);
    });

    // Displaying the food
    foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

    // Part 3: increasing the difficulty level as the score becomes higher
    if(score % 20 === 0 && speed <10){
        speed++;
    }
}

// Main Logic Starts Here
getScore = localStorage.getItem('score');
if(getScore === null){
    highScoreCount.innerHTML = `<strong>High Score: 0</strong>`;
}
else{
    highScoreCount.innerHTML = `<strong>High Score: ${getScore}</strong>`;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', (e)=>{
    if(e.keyCode === 32 && !gameStarted){
        snakeVelocity = {x:0, y:1}; // Start the game
        gameStart.play();
        gameStarted = true;
    }
    if(e.key === "ArrowUp" && gameStarted){
        snakeVelocity.y = -1;
        snakeVelocity.x = 0;
    }
    
    if(e.key === "ArrowDown" && gameStarted){
        snakeVelocity.y = 1;
        snakeVelocity.x = 0;
    }
    
    if(e.key === "ArrowLeft" && gameStarted){
        snakeVelocity.x = -1;
        snakeVelocity.y = 0;
    }
    
    if(e.key === "ArrowRight" && gameStarted){
        snakeVelocity.x = 1;
        snakeVelocity.y = 0;
    }
})