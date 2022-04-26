// Initializing scores and grabbing score and move elements 
let humanScore = 0;
let compScore = 0; 
const scoreDisplay = document.querySelector(".score-display");
const currentMove = document.querySelector('.move-display');


// getting all move buttons and adding event listeners 
const moveButtons = document.querySelectorAll(".move")
 moveButtons.forEach(button =>{
     button.addEventListener("mousedown",playRound);
     button.addEventListener("mousedown",computerTurn);
 });
// grabbing play again button and adding restart functionality 
const playAgain = document.querySelector('.play-again');
playAgain.addEventListener('mousedown',restart)

function restart(){
    playAgain.classList.toggle('toggle-buttons')
    moveButtons.forEach(button =>{
        button.classList.toggle('toggle-buttons')
    })
    scoreDisplay.textContent = "Human - 0, Computer - 0"
    humanScore = 0;
    compScore = 0;
}

 // Calculates computer turn
function computerTurn(){
    let moves = ["rock","paper","scissors"]
    let compInput = moves[Math.floor(Math.random() * 3)];
    return compInput
}

// logic for deciding who wins each round. calling game function to check scores after each round
function playRound(e){
    let currentButton = document.querySelector(`button[id=${e.toElement.id}`)
    let computerTurn = e.view.computerTurn();


    if(currentButton.id === computerTurn){
        currentMove.textContent = `You both made the same decision...continue`
    }else if(currentButton.id === "rock" && computerTurn === "scissors"){
        humanScore++
        scoreDisplay.textContent = `Human - ${humanScore}, Computer - ${compScore} `;
        currentMove.textContent = `Human chose ${currentButton.id}, Computer chose ${computerTurn}`
    }else if(currentButton.id === "paper" && computerTurn === "rock"){
        humanScore++
        scoreDisplay.textContent = `Human - ${humanScore}, Computer - ${compScore} `;
        currentMove.textContent = `Human chose ${currentButton.id}, Computer chose ${computerTurn}`
    }
    else if(currentButton.id === "scissors" && computerTurn === "paper"){
        humanScore++
        scoreDisplay.textContent = `Human - ${humanScore}, Computer - ${compScore} `;
        currentMove.textContent = `Human chose ${currentButton.id}, Computer chose ${computerTurn}`
    }else{
        compScore++
        scoreDisplay.textContent = `Human - ${humanScore}, Computer - ${compScore} `;
        currentMove.textContent = `Human chose ${currentButton.id}, Computer chose ${computerTurn}`
    }

    game(e,computerTurn)
}

// checking scores and displaying correct ui for when someone wins
function game(e,computerTurn){

    let currentButton = document.querySelector(`button[id=${e.toElement.id}`)
    if(humanScore === 5){
        currentMove.textContent = `Human chose ${currentButton.id} and wins`
        moveButtons.forEach(item => {
            item.classList.toggle('toggle-buttons')
        })
        playAgain.classList.toggle('toggle-buttons')
    }else if (compScore === 5){
        currentMove.textContent = `Computer chose ${computerTurn} and wins`
        moveButtons.forEach(item => {
            item.classList.toggle('toggle-buttons')
        })
        playAgain.classList.toggle('toggle-buttons')
    }

}





