// Initializing scores
let humanScore = 0;
let compScore = 0; 

// getting all buttons and adding event listeners 
let buttons = document.querySelectorAll("button")
 buttons.forEach(button =>{
     button.addEventListener("mousedown",playRound)
     button.addEventListener("mousedown",computerTurn)
 })


function playRound(e){
    const currentButton = document.querySelector(`button[id=${e.toElement.id}`)
    const scoreDisplay = document.querySelector(".score-display")
    const currentMove = document.querySelector('.move-display')
    let computerTurn = e.view.computerTurn();

    console.log("comp turn",computerTurn)
    console.log("human turn", currentButton.id)

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
}

// Calculates computer turn
function computerTurn(e){
    let moves = ["rock","paper","scissors"]
    let compInput = moves[Math.floor(Math.random() * 3)];
    return compInput
}

