// COmplete game function

let playerScore = 0;
let computerScore = 0;
let playerChoice = "";
let computerChoice = "";
let pCount = document.getElementById('p-count');
let cCount = document.getElementById('c-count');
let winnerDisplay = document.getElementById('winnerDisplay');
//Function to grab user input and run function to evaluate choices


function computerSelect() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      computerChoice = "paper";
      break;
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
}
  function chooseRock() {
    computerSelect();
    switch (computerChoice) {
      case "paper":
        computerScore++;
        winnerDisplay.textContent = 'You lose!';
        break;
      case "rock":
      winnerDisplay.textContent = 'You tie!';
        break;
      case "scissors":
        playerScore++;
        winnerDisplay.textContent = 'You win!';
        break;
    }
    pCount.textContent = playerScore;
    cCount.textContent = computerScore;
  }

  function choosePaper() {
    computerSelect();
    switch (computerChoice) {
      case "scissors":
        computerScore++;
        winnerDisplay.textContent = 'You lose!';
        break;
      case "paper":
       winnerDisplay.textContent = 'You tie!';
        break;
      case "rock":
        playerScore++;
        winnerDisplay.textContent = 'You win!';
        break;
    }
    pCount.textContent = playerScore;
    cCount.textContent = computerScore;

  }

  function chooseScissors() {
    computerSelect();
    switch (computerChoice) {
      case "rock":
        computerScore++;
        winnerDisplay.textContent = 'You lose!';
        break;
      case "scissors":
      winnerDisplay.textContent = 'You tie!';
        break;
      case "paper":
        playerScore++;
        winnerDisplay.textContent = 'You win!';
        break;
    }
    pCount.textContent = playerScore;
    cCount.textContent = computerScore;

  }

  function reset() {
    computerScore = 0;
    playerScore = 0;
    pCount.textContent = playerScore;
    cCount.textContent = computerScore;
  }
