var computerScore = 0;
var humanScore = 0;
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choiceIndex = Math.floor(Math.random() * 3);
  const choice = options[choiceIndex];
  console.log(`The machine rolls ${choice}.`);
  return choice;
}

function getHumanChoice() {
  let choice;
  let choiceValid = false;
  do {
    choice = prompt("Choose rock, paper, or scissors").toLowerCase();
    choiceValid = options.includes(choice);
    if (!choiceValid) alert("Nope, that's not a valid choice. Try again!");
  } while (!choiceValid);

  console.log(`The human chooses ${choice}.`);
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    console.log("It's a tie between man and machine!");
    return;
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    humanScore++;
    console.log("Humans have triumphed over the machines!");
    return;
  }

  // No more options, as we've already checked for a tie and human win
  computerScore++;
  console.log("The machines have dominated mankind!");
}
