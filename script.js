//COMPUTER CHOICE METHOD
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3 + 1);
  let computerChoice = "";

  if (x === 1) {
    computerChoice = "Rock";
  } else if (x === 2) {
    computerChoice = "Scissors";
  } else if (x === 3) {
    computerChoice = "Paper";
  } else {
    alert("ERROR");
  }
  return computerChoice.toLowerCase();
  //console.log(computerChoice);
}

//USER CHOICE METHOD
function getUserChoice() {
  const userChoice = document.querySelectorAll("button");

  userChoice.forEach((choice) => {
    choice.addEventListener("click", function () {
      const compChoice = getComputerChoice();
      playRound(compChoice, this.id);
      console.log("this: " + this.id);
    });
  });
}

function playRound(computerChoice, userChoice) {
  if (userChoice === computerChoice) {
    console.log("----------------");
    console.log("Draw!");
    console.log("User choice was: " + userChoice);
    console.log("Computer choice was: " + computerChoice);
    console.log("----------------");
  } else if (userChoice === "rock" && computerChoice === "paper") {
    console.log("----------------");
    console.log("The computer wins!");
    compWins++;
    console.log("User choice was: " + userChoice);
    console.log("Computer choice was: " + computerChoice);
    console.log("----------------");
  } else if (userChoice === "paper" && computerChoice === "rock") {
    console.log("----------------");
    console.log("The user wins!");
    userWins++;
    console.log("User choice was: " + userChoice);
    console.log("Computer choice was: " + computerChoice);
    console.log("----------------");
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    console.log("----------------");
    console.log("The computer wins!");
    compWins++;
    console.log("User choice was: " + userChoice);
    console.log("Computer choice was: " + computerChoice);
    console.log("----------------");
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    console.log("----------------");
    console.log("The user wins!");
    userWins++;
    console.log("User choice was: " + userChoice);
    console.log("Computer choice was: " + computerChoice);
    console.log("----------------");
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    console.log("----------------");
    console.log("The computer wins");
    compWins++;
    console.log("User choice was: " + userChoice);
    console.log("Computer choice was: " + computerChoice);
    console.log("----------------");
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    console.log("----------------");
    console.log("The user wins");
    userWins++;
    console.log("User choice was: " + userChoice);
    console.log("Computer choice was: " + computerChoice);
    console.log("----------------");
  }
}

function game() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach("click", () => {
    let computerChoice = getComputerChoice();
    let userChoice = getComputerChoice();

    roundWinText.textContent = playRound(computerChoice, userChoice);
    userWinText.textContent = "game function user: " + userWins;
    compWinText.textContent = "game function comp: " + compWins;
  });

  /*   for (let i = 0; i < 5; i++) {
    console.log("Round number: " + (i + 1));
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();

    console.log(playRound(computerChoice, userChoice));
    console.log("computer: " + compWins);
    console.log("user: " + userWins);
    if (compWins === 3) { //game win alert
      console.log("The computers have won. Humanity is lost.");
    } else if (userWins === 3) {
      console("Humanity reigns victorious. Death to the machines.");
    }
  } */
}

//DOM TO VIEW RESULTS
const container = document.querySelector("#container");
const allResults = document.createElement("div");
allResults.classList.add("allResults");
allResults.textContent = "this is content of all results";
allResults.style.marginTop = "20px";
container.appendChild(allResults);

//DOM USER WINS TRACKER
const userWinText = document.createElement("p");
userWinText.style.color = "black";
userWinText.textContent =
  "The player has won: " + userWins + " rounds. Humanity still has hope.";
allResults.appendChild(userWinText);

//DOM COMPUTER WINS TRACKER
const compWinText = document.createElement("p");
compWinText.style.color = "red";
compWinText.textContent =
  "The computer has won: " +
  compWins +
  " rounds. The rise of the computers is unavoidable, resistance is futile.";
allResults.appendChild(compWinText);

//DOM EACH ROUND
const roundWinText = document.createElement("p");
roundWinText.style.color = "blue";
allResults.appendChild(roundWinText);

// getComputerChoice();
// let userChoice = "Rock";
// playRound(getComputerChoice(), getUserChoice());
let userWins = 0;
let compWins = 0;
game();
