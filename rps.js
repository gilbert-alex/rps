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
        let choice = prompt('Enter Rock, Paper, or Scissors', '');
        if (['rock', 'paper', 'scissors'].includes(choice.toLowerCase())) {
            return choice;
        }
    }
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

console.log(`computer: ${computerChoice} \t human: ${humanChoice}`);