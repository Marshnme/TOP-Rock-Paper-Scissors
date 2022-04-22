

     let humanScore = 0;
     let compScore = 0; 

function game(rounds){    

    let moves = ["rock","paper","scissors"]


    for(let i = 0; i<rounds;i++){

        let humanTurn = prompt("Pick Your Weapon").toLowerCase()
         let compInput = Math.floor(Math.random() * 3);

        console.log(Round(humanTurn,moves[compInput]))
    }
    if(humanScore>compScore){
        console.log("Human wins")
    }else if(humanScore<compScore){
        console.log("Computer wins")
    }else if(humanScore===compScore){
        console.log("You are equally matched")
    }
}



function round(human,comp){

    if(human != "rock" && human != "paper" && human != "scissors"){
        return("please pick a valid weapon")
    }else if(human === comp){
        return "You can't pick the same weapon"
    }else if(human === "scissors" && comp === "paper"){
        humanScore++
        return(`Human wins with ${human}, Score: Human - ${humanScore} Computer - ${compScore}`)
    }else if(human === "rock" && comp === "scissors"){
        humanScore++
        return(`Human wins with ${human}, Score: Human - ${humanScore} Computer - ${compScore}`)
    }
    else if(human === "paper" && comp === "rock"){
        humanScore++
        return(`Human wins with ${human}, Score: Human - ${humanScore} Computer - ${compScore}`)
    }else{
        compScore++
            return(`Computer wins with ${comp}, Score: Human - ${humanScore} Computer - ${compScore}`)
    }
}


game(5)