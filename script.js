

     let humanScore = 0;
     let compScore = 0; 

function game(rounds){    

    let moves = ["rock","paper","scissors"]


    for(let i = 0; i<rounds;i++){

        let humanInput = prompt("Pick Your Weapon").toLowerCase()
        let compInput = Math.floor(Math.random() * 3);

        console.log(Round(humanInput,moves[compInput]))
    }
    if(humanScore>compScore){
        console.log("Human wins")
    }else if(humanScore<compScore){
        console.log("Computer wins")
    }else if(humanScore===compScore){
        console.log("You are equally matched")
    }
}




function round(humanTurn,compTurn)
    if(humanTurn != "rock" && humanTurn != "paper" && humanTurn != "scissors"){
        return("please pick a valid weapon")
    }else if(humanTurn === compTurn){compTurn
        return "You can't pick the same weapon"
    }else if(humanTurn === "scissors" && compTurn === "paper"){
        humanScore++
        return(`Human wins with ${humanTurn}, Score: Human - ${humanScore} Computer - ${compScore}`)
    }else if(humanTurn === "rock" && compTurn === "scissors"){
        humanScore++
        return(`Human wins with ${humanTurn}, Score: Human - ${humanScore} Computer - ${compScore}`)
    }
    else if(humanTurn === "paper" && compTurn === "rock"){
        humanScore++
        return(`Human wins with ${humanTurn}, Score: Human - ${humanScore} Computer - ${compScore}`)
    }else{
        compScore++
            return(`Computer wins with ${compTurn}, Score: Human - ${humanScore} Computer - ${compScore}`)
    }
}


game(5)