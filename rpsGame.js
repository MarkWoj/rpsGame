function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `It's a tie! You both chose ${computerSelection}.`;
  }
  else if (playerSelection === "rock" && computerSelection === "scissors") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else if (playerSelection === "paper" && computerSelection === "rock") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else if (playerSelection === "scissors"
  && computerSelection === "paper") {
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  }
  else {
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
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
const playerSelection = "Rock".toLowerCase();
const computerSelection = getComputerChoice();
console.log(`Your choice: ${playerSelection} Computer's Choice: ${computerSelection}`);
console.log(playRound(playerSelection, computerSelection));
