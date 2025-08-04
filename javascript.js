let getPlayerChoice = prompt("Please enter Rock, Paper or Scissors: ");
let outcome;

function playerChoice() {
    return String(getPlayerChoice).toLowerCase();
}
console.log(playerChoice());

let getComputerChoice = Math.floor(Math.random() * 3) + 1;

console.log(getComputerChoice);