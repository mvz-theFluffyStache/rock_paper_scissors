function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3) + 1;
    switch(computerChoice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
    }
}

console.log(getComputerChoice());

let humanChoice = prompt("Please enter Rock, Paper, or Scissors");

function getPlayerChoice() {
    return humanChoice = String(humanChoice).at(0).toUpperCase() + String(humanChoice).slice(1).toLowerCase();
}

console.log(getPlayerChoice());

