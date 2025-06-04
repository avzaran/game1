const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
let playerSelection = null;

let playerScore = 0;
let computerScore = 0;
let round = 0;

let computerSelection = getCompChoice();
let gameRes = playRound(playerSelection, computerSelection);
console.log(gameRes);

rockBtn?.addEventListener("click", () => playerClick("Rock"));
paperBtn?.addEventListener("click", () => playerClick("Paper"));
scissorsBtn?.addEventListener("click", () => playerClick("Scissors"));

function playerClick(playerChoice) {
  if (round >= 3) return;
  playerSelection = playerChoice;
  let computerSelection = getCompChoice();
  gameRes = playRound(playerSelection, computerSelection);

  if (gameRes === "You Win") playerScore++;
  else if (gameRes === "You Lose") computerScore++;

  round++;

  document.querySelector(
    ".gameResult"
  ).textContent = `Round ${round}: ${gameRes}\nScore — You: ${playerScore} | Computer: ${computerScore}`;

  if (round === 3) {
    let finalResult = "";
    if (playerScore > computerScore)
      finalResult = "Game over: You won the game!";
    else if (playerScore < computerScore)
      finalResult = "Game over: You lost the game!";
    else finalResult = "Game over: It's a tie overall!";

    document.querySelector(".gameResult").textContent += `\n${finalResult}`;

    disableButtons(true);

    addRestartButton();
  }

  return gameRes;
}

function getCompChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  let compChoice;
  if (randomNum == "0") {
    compChoice = "Rock";
  } else if (randomNum == "1") {
    compChoice = "Paper";
  } else if (randomNum == "2") {
    compChoice = "Scissors";
  }
  return compChoice;
}

function playRound(playerSelection, computerSelection) {
  let game = null;
  if (playerSelection == computerSelection) {
    return (game = "it's a tie");
  } else if (
    (playerSelection == "Rock" && computerSelection == "Scissors") ||
    (playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper")
  ) {
    game = "You Win";
  } else {
    game = "You Lose";
  }

  return game;
}

function disableButtons(disable) {
  rockBtn.disabled = disable;
  paperBtn.disabled = disable;
  scissorsBtn.disabled = disable;
}

function addRestartButton() {
  if (document.querySelector(".restart-btn")) return;

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart Game";
  restartBtn.classList.add("restart-btn");
  document.querySelector("main").appendChild(restartBtn);

  restartBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    round = 0;
    document.querySelector(".gameResult").textContent = "";
    disableButtons(false);
    restartBtn.remove();
  });
}
