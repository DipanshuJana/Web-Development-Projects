console.log("Welcome to TicTacToe")
let gameover = new Audio("gameover.mp3")
let onturn = new Audio("turn.mp3")
let turn = "X"
let isgameover = false;


// Function to change the turn in the game
const changeTurn = ()=>{
    return turn === "X"? "0": "X"  
}

// Function to check for a win 
const checkWin = ()=>{

    let boxtext = document.getElementsByClassName('boxtext');

    // all the probabilites of win in a list

    let wins = [
        [0, 1, 2, 3, 5, 0],
        [3, 4, 5, 3, 15, 0],
        [6, 7, 8, 3, 25, 0],
        [0, 3, 6, -7, 15, 90],
        [1, 4, 7, 3, 15, 90],
        [2, 5, 8, 13, 15, 90],
        [0, 4, 8, 3, 15, 45],
        [2, 4, 6, 3, 15, 135]
    ]

    wins.forEach(e=>{
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== '')){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector(".image").getElementsByTagName('img')[0].style.width = "200px";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            document.querySelector(".line").style.width = "24vw";            
        }
    })
}

// Main game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if (boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            onturn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})  

// Add oneclick listener to the reset button

reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn; 
    document.querySelector(".image").getElementsByTagName('img')[0].style.width = "0px"
    document.querySelector(".line").style.width = "0px"
})