// Rock, Paper, Scissors game

// DOM selectors
const buttons = document.querySelector('#choices');
const gameLog = document.querySelector('#gameLog');
const userScore = document.querySelector('.score.user');
const computerScore = document.querySelector('.score.computer');
const endGameMsg = document.querySelector('#msg');

// Event Listeners
buttons.addEventListener('click', handleButtonClick);
function handleButtonClick(event) {
    playRound(event.target.textContent);
};

// main game function
function playRound(userChoice) {
    //  play Rock, Paper, Scissors

    let winner;
    let computerChoice = getComputerChoice();

    // determine winner
    switch (userChoice) {
        case ('Rock') :
            winner = computerChoice === 'Scissors' ? 'user' :
                computerChoice === 'Rock' ? 'tie' : 'computer';
            break;
        case ('Paper') :
            winner = computerChoice === 'Rock' ? 'user' :
                computerChoice === 'Paper' ? 'tie' : 'computer';
            break;
        case ('Scissors') :
            winner = computerChoice === 'Paper' ? 'user' :
                computerChoice === 'Scissors' ? 'tie' : 'computer';
            break;
        default : // should never reach
            console.error('Error: playRound()');
    }

    updateGameLog(winner, userChoice, computerChoice);
    keepScore(winner);
};

// helper functions
function getComputerChoice() {
    // get random computer choice of Rock, Paper, or Scissors
    choice = Math.floor( Math.random() * 3 ) + 1;

    if (choice === 1) {
        return 'Rock';
    } else if (choice === 2) {
        return 'Paper';
    } else if ( choice === 3) {
        return 'Scissors';
    } else { // should never reach
        console.error('Error: getComputerChoice()');
    }
};

function keepScore(winner) {
    if (winner === 'user' ) ++userScore.textContent;
    if (winner === 'computer') ++computerScore.textContent;

    if (userScore.textContent === '5' || computerScore.textContent === '5') {
        endGame();
    };
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

function endGame() {

    buttons.removeEventListener('click', handleButtonClick);

    const msg = document.createElement('p');
    if (userScore.textContent > computerScore.textContent) {
        msg.textContent = `Game over! User wins!`;
    } else {
        msg.textContent = `Game over! Computer wins!`
    }
    endGameMsg.appendChild(msg);
};