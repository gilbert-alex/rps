function getComputerChoice() {
    // get computer choice of rock, paper, or scissors
    choice = Math.floor( Math.random() * 3 ) + 1;

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if ( choice === 3) {
        return 'scissors';
    } else {
        console.error('Something is wrong with the Math.random logic');
    }
}

function getHumanChoice() {
    while (true) {
        let choice = String( prompt('Enter Rock, Paper, or Scissors', '').toLowerCase());
        if (['rock', 'paper', 'scissors'].includes(choice)) {
            return choice;
        }
    }
}

function playRound(humanChoice, computerChoice) {

    let winner;

    switch (humanChoice) {
        case ('rock') :
            winner = computerChoice === 'scissors' ? 'human' :
                computerChoice === 'rock' ? 'tie' : 'computer';
            break;
        case ('paper') :
            winner = computerChoice === 'rock' ? 'human' :
                computerChoice === 'paper' ? 'tie' : 'computer';
            break;
        case ('scissors') :
            winner = computerChoice === 'paper' ? 'human' :
                computerChoice === 'scissors' ? 'tie' : 'computer';
            break;
        default :
            console.error('game logic shouldn\'t reach here.');
    }

    if (winner === 'human') {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (winner === 'computer') {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        console.log(`Tie.`);
    }
}

let humanScore = 0;
let computerScore = 0;

const maxGames = 5;
let gameCounter = 0;

while (gameCounter < maxGames) {
    console.groupCollapsed(gameCounter)
    playRound(getHumanChoice(), getComputerChoice());
    console.log(`Humans: ${humanScore} \t Computers: ${computerScore}`);
    console.groupEnd(gameCounter);
    gameCounter++;
}

if (humanScore > computerScore) {
    console.log(`Human wins.`);
} else if (computerScore > humanScore) {
    console.log(`Computer wins.`);
} else {
    console.log(`Tie.`);
}



