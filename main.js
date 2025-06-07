
function playGame () {

    function getComputerChoice() {
        return Math.floor(Math.random() * 3)
     
    }


    function getHumanChoice() {
        let choice = prompt("Rock?Paper?Scissor?").toLowerCase()
        return (choice === "rock") ? 0 : (choice === "paper") ? 1 : 2;
    }


    let humanScore = 0;
    let computerScore = 0;

    function playRound () {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let userWin = false;
        let draw = false;
        
        if ( humanSelection + 2 === computerSelection) {

            userWin = true;
            console.log("You win! Rock beats Scissor")

        } else if (humanSelection === computerSelection+1) {
            userWin = true;
            if (humanSelection === 1) {
                console.log("You win! Paper beats Rock")
            } else if (humanSelection === 2) {
                console.log("You win! Scissor beats Paper")

                
            }


        } else if (humanSelection === computerSelection) {
            draw = true;
            console.log("It's a draw!")
        } else {
            let message = (computerSelection === 0) ? "You lose! Rock beats Scissor" : (computerSelection === 1) ? "You lose! Paper beats Rock" : "You lose! Scissor beats Paper"
            console.log(message)
        }


        if (userWin) {
            humanScore ++;
        } else if (!draw){
            computerScore++;
        }

    }

    console.log(`START OF THE GAME !! \nYou: ${humanScore} ---- Computer: ${computerScore}`)
    playRound();
    console.log(`You: ${humanScore} ---- Computer: ${computerScore}`)
    playRound();
    console.log(`You: ${humanScore} ---- Computer: ${computerScore}`)
    playRound();
    console.log(`You: ${humanScore} ---- Computer: ${computerScore}`)
    playRound();
    console.log(`You: ${humanScore} ---- Computer: ${computerScore}`)
    playRound();
    console.log(`END OF THE GAME !! FINAL SCORE !!\nYou: ${humanScore} ---- Computer: ${computerScore}`)


}

playGame();

