// Rock, Paper, Scissors game

// DOM selectors
const buttons = document.querySelector('#btns');
const gameLog = document.querySelector('#gameLog');
const userScore = document.querySelector('.score.user');
const computerScore = document.querySelector('.score.computer');

// Event Listeners
buttons.addEventListener('click', (event) => {
    playRound(event.target.textContent);
});

// main game function
function playRound(userChoice) {
    //  play rock, paper, scissors

    let winner;
    let computerChoice = getComputerChoice();

    // determine winner
    switch (userChoice.toLowerCase()) {
        case ('rock') :
            winner = computerChoice === 'scissors' ? 'user' :
                computerChoice === 'rock' ? 'tie' : 'computer';
            break;
        case ('paper') :
            winner = computerChoice === 'rock' ? 'user' :
                computerChoice === 'paper' ? 'tie' : 'computer';
            break;
        case ('scissors') :
            winner = computerChoice === 'paper' ? 'user' :
                computerChoice === 'scissors' ? 'tie' : 'computer';
            break;
        default : // should never reach
            console.error('Error: playRound()');
    }

    keepScore(winner);
    updateGameLog(winner, userChoice, computerChoice);
};

// helper functions
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
        console.error('Error: getComputerChoice()');
    }
};

function keepScore(winner) {
    if (winner === 'user' ) ++userScore.textContent;
    if (winner === 'computer') ++computerScore.textContent;
};

function updateGameLog(winner, userChoice, computerChoice) {
    // string for game log
    var message = '';
    var log = document.createElement('li');

    if (winner === 'user') {
        message = `You win! ${userChoice} beats ${computerChoice}.`;
    } else if (winner === 'computer') {
        message = `You lose! ${computerChoice} beats ${userChoice}.`;
    } else {
        message = `Tie. ${userChoice} ties ${computerChoice}`;
    }

    log.textContent = message;
    gameLog.appendChild(log);
};

