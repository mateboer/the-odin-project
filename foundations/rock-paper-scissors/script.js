var computerScore = 0;
var humanScore = 0;
var draws = 0;
const options = ["rock", "paper", "scissors"];

document.querySelector("#controls").addEventListener("click", (event) => {
  const humanChoice = event.target.id;
  if (!options.includes(humanChoice)) return;
  playRound(humanChoice, getComputerChoice());
});

function getComputerChoice() {
  const choiceIndex = Math.floor(Math.random() * 3);
  const choice = options[choiceIndex];
  return choice;
}

function playRound(humanChoice, computerChoice) {
  declareChoices(humanChoice, computerChoice);
  if (humanChoice === computerChoice) {
    draw();
    return;
  }

  const humanWinning =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWinning) {
    humanWin();
    return;
  }

  // No more options, as we've already checked for a draw and human win
  computerWin();
}

function declareChoices(humanChoice, computerChoice) {
  document.querySelector("#human-choice").innerText = `You have chosen ${humanChoice.toUpperCase()}!`;
  document.querySelector("#computer-choice").innerText = `The machine rolls ${computerChoice.toUpperCase()}.`;
}

function humanWin() {
  humanScore++;
  document.querySelector("#human-score").innerText = humanScore;
  document.querySelector("#result").innerText =
    "Humans have triumphed this round!";
}

function computerWin() {
  computerScore++;
  document.querySelector("#computer-score").innerText = computerScore;
  document.querySelector("#result").innerText =
    "The machines have dominated this round!";
}

function draw() {
  draws++;
  document.querySelector("#draws").innerText = draws;
  document.querySelector("#result").innerText =
    "It's a draw between man and machine!";
}
