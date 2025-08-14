let computerChoice;

function getComputerChoice() {
    for (computerChoice = Math.floor(Math.random() * 3) + 1;;) {
        if (computerChoice === 1) {
            return computerChoice = "Rock";
        } else if (computerChoice === 2) {
            return computerChoice = "Paper";
        } else {
            return computerChoice = "Scissors";
        }
    }
}

console.log(getComputerChoice());

let humanChoice = prompt("Please enter Rock, Paper, or Scissors");

function getPlayerChoice() {
    return humanChoice = String(humanChoice).at(0).toUpperCase() + String(humanChoice).slice(1).toLowerCase();
}

console.log(getPlayerChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(){
    
}