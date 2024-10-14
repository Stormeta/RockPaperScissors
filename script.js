function getComputerChoice() {
    let r = Math.trunc((Math.random() * 3 + 1));

    if (r === 1) {
        return 'rock';
    } else if (r === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt('Choose between Rock, Paper or Scissors.').toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        console.log('Invalid choice. Please enter Rock, Paper, or Scissors.');
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log(`It's a tie both chose ${humanChoice}`);
        return "tie";
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'paper' && computerChoice === 'scissors') || (humanChoice === 'scissors' && computerChoice === 'rock')) {
        console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
        return "lost";
    } else {
        console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
        return "win";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        console.log(`Round ${i + 1}`);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const roundResult = playRound(humanChoice, computerChoice);

        if (roundResult === 'win') {
            humanScore++;
            console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
        } else if (roundResult === 'lost') {
            computerScore++;
            console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
        } else {
            console.log(`Current Score - You: ${humanScore}, Computer: ${computerScore}`);
        }
    }

    if (humanScore > computerScore) {
        console.log(`Congratulations! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. The final score was ${computerScore} to ${humanScore}.`);

    } else {
        console.log("The game is a tie!");

    }
}

playGame()


