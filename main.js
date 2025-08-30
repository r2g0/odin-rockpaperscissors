let playerScore = 0;
let computerScore = 0;
let round = 1;
const maxRounds = 5;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return "It's a tie!";
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        playerScore++;
        return `You win! ${player} beats ${computer}`;
    } else {
        computerScore++;
        return `You lose! ${computer} beats ${player}`;
    }
}

function playGame(playerChoice) {
    if (round > maxRounds) return;

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    document.getElementById('result').innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
    document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
    document.getElementById('round').innerText = `Round: ${round}`;

    round++;

    if (round > maxRounds) {
        let finalResult;
        if (playerScore > computerScore) {
            finalResult = "Game Over! You win the match!";
        } else if (computerScore > playerScore) {
            finalResult = "Game Over! Computer wins the match!";
        } else {
            finalResult = "Game Over! It's a tie!";
        }
        document.getElementById('result').innerText = finalResult;
        document.getElementById('reset').style.display = 'block';
        // Disable game buttons
        document.querySelectorAll('button:not(#reset)').forEach(button => {
            button.disabled = true;
        });
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    document.getElementById('result').innerText = '';
    document.getElementById('score').innerText = `Player: 0 | Computer: 0`;
    document.getElementById('round').innerText = `Round: 1`;
    document.getElementById('reset').style.display = 'none';
    // Re-enable game buttons
    document.querySelectorAll('button:not(#reset)').forEach(button => {
        button.disabled = false;
    });
}