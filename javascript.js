function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter Rock, Paper, or Scissors");
    return choice = String(choice).at(0).toUpperCase() + String(choice).slice(1).toLowerCase();
}

// Testing switch to make process simpler
function winConditions(human, computer) {
    const condition = `${human} ${computer}`;
    switch(condition) {
        case "Rock Scissors":
        case "Paper Rock":
        case "Scissors Paper":
            return "Win";
        case "Paper Scissors":
        case "Scissors Rock":
        case "Rock Paper":
            return "Loss";
        default:
            return "Draw";

    }
}

function playGame(rounds) {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
        const outcome = winConditions(humanChoice, computerChoice);
         if (outcome == "Win") {
      console.log(`You win!`);
      humanScore++;
    } else if (outcome == "Loss") {
      console.log(`You lose!`);
      computerScore++;
    } else {
      console.log(`It's a tie! You both played ${humanChoice}`);
    }

    console.log(`Score is: ${humanScore} - ${computerScore}`);
  }

  for (let n = 0; n < rounds; n++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore)
    console.log("Congratulations, you won the game!");
  else if (computerScore > humanScore)
    console.log("The computer won. Better luck next time!");
  else
    console.log("You and the computer are perfectly tied")
}

playGame(5);