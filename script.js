// COmplete game function

  let playScore = 0;
  let computerScore = 0;
  let playerChoice = "";
  let computerChoice = "";
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

function chooseRock() {
  computerSelect();
  switch (computerChoice) {
    case "paper":
    computerScore++;
    break;
    case "rock":
    break;
    case "scissors":
    playerScore++;
    break;
  }
  pCount.textContent = playerScore;
  cCount.textContent = computerScore;
}

function choosePaper() {
  computerSelect();
  switch (computerChoice) {
    case "paper":
    computerScore++;
    break;
    case "rock":
    break;
    case "scissors":
    playerScore++;
    break;
}
pCount.textContent = playerScore;
cCount.textContent = computerScore;

}

function chooseScissors() {
  computerSelect();
  switch (computerChoice) {
    case "paper":
    computerScore++;
    break;
    case "rock":
    break;
    case "scissors":
    playerScore++;
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