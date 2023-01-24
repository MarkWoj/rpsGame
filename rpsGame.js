function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${computerSelection}. You: ${playerScore} Computer: ${computerScore}`;
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}. You: ${playerScore} Computer: ${computerScore}`;
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}. You: ${playerScore} Computer: ${computerScore}`;
  }
  else if (playerSelection === "scissors"
  && computerSelection === "paper") {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}. You: ${playerScore} Computer: ${computerScore}`;
  }
  else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}. You: ${playerScore} Computer: ${computerScore}`;
  }
}
function getComputerChoice() {
  let compRand = Math.floor(Math.random() * 3);
  if (compRand === 0) {
    return "rock";
  }
  else if (compRand === 1) {
    return "paper";
  }
  else {
    return "scissors";
  }
}
function game() {
  for (i=1; i < 6; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("Please enter rock, paper, or scissors: ").toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
  }
}
let playerScore = 0;
let computerScore = 0;
game();
