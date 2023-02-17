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
function game(playerSelection) {
    let computerSelection = getComputerChoice();
    content.textContent = (`Round Results: `, playRound(playerSelection, computerSelection));
    results.appendChild(content);
    if(playerScore === 5) {
      gameOver.textContent = ('Game Over, You Are The Champion!');
      results.appendChild(gameOver);
    }
    else if (computerScore === 5) {
      gameOver.textContent = ('Game Over, The Computer Is The Champion!');
      results.appendChild(gameOver);
    }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    game(button.id);
  });
});
// const container = document.querySelector('#container');

const content = document.createElement('div');
const gameOver = document.createElement('div');
