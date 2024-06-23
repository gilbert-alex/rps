// Rock, Paper, Scissors game

// why is event crossed out? 
const buttons = document.querySelector('#btns');
buttons.addEventListener('click', () => {
    playRound(event.target.textContent, getComputerChoice());
});

function getComputerChoice() {
    // get random computer choice of rock, paper, or scissors
    choice = Math.floor( Math.random() * 3 ) + 1;

    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if ( choice === 3) {
        return 'scissors';
    } else { // should never reach
        console.error('Something is wrong with the Math.random logic');
    }
};


function playRound(humanChoice, computerChoice) {
    // complete a round of rps, updates score (global) variables, and console.log winner

    console.log(`${humanChoice} & ${computerChoice}`); // debug

    let winner;
    // determine winner
    switch (humanChoice.toLowerCase()) {
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
        default : // should never reach
            console.error('game logic shouldn\'t reach here.');
    }

    // console.log winner and choices
    if (winner === 'human') {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (winner === 'computer') {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    } else {
        console.log(`Tie.`);
    }

    return winner;
};

/*
function playGame() {
    // play a maxGames number of rounds and keep score

    // constants and counters
    let humanScore = 0;
    let computerScore = 0;
    const maxGames = 5;
    let gameCounter = 0;
    
    while (gameCounter < maxGames) {
        // game loop

        console.groupCollapsed(gameCounter) // group round results for console.log

        // play round
        const result = playRound(getHumanChoice(), getComputerChoice());

        // keep and display score
        if (result === 'human') {
            humanScore++;
        } else if (result === 'computer') {
            computerScore++;
        }
        console.log(`Humans: ${humanScore} \t Computers: ${computerScore}`);

        console.groupEnd(gameCounter); // end console.log group

        // finish round
        gameCounter++;
    }
    
    // display final result
    if (humanScore > computerScore) {
        console.log(`Human wins.`);
    } else if (computerScore > humanScore) {
        console.log(`Computer wins.`);
    } else {
        console.log(`Tie.`);
    }
}

playGame();
*/


