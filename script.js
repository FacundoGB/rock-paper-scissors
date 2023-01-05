let userWins = 0;
let compWins = 0;

//Event handler obtains information from the event
const userChoice = document.querySelectorAll("button");
userChoice.forEach((choice) => {
  choice.addEventListener("click", (event) => {
    //obtains reference to the user choice (button)
    const userC = event.target;

    //passes the button to getUserChoice to be proccesed. but function is unneeded
    //const userChoice = getUserChoice(button);

    //pass the user choice (button) id (r,p or s) as argument
    playChoices(userC.id);
  });
});

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

// COMBINE CHOICES
//calls both the comp choice method and gets the usr choice as the parameter of the event handler
function playChoices(userChoice) {
  const compChoice = getComputerChoice();
  //sends both arguments to the round
  round(compChoice, userChoice);
}
//PLAY A ROUND
function round(computerChoice, userChoice) {
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
// PLAY A FULL GAME
function game() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      roundWinText.textContent = playChoices();
      userWinText.textContent = "user Win totals: " + userWins;
      compWinText.textContent = "computer win totals: " + compWins;
      console.log("user wins: " + userWins);
      console.log("computer wins: " + compWins);

      if (compWins === 3) {
        compWinText.textContent =
          "The computer has won: " +
          compWins +
          " rounds. The rise of the computers is unavoidable, resistance is futile.";
        //disable buttons
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    
        //new DOM for replay button
        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again!";
        allResults.appendChild(playAgain);
    
        //if button is clicked it reload the page
        playAgain.addEventListener("click", () => {
          location.reload();
        });
      } else if (userWins === 3) {
        userWinText.textContent =
          "The player has won: " + userWins + " rounds. Humanity still has hope.";
        //disable buttons
        document.getElementById("rock").disabled = true;
        document.getElementById("paper").disabled = true;
        document.getElementById("scissors").disabled = true;
    
        //new DOM for replay button
        const playAgain = document.createElement("button");
        playAgain.textContent = "Play Again!";
        allResults.appendChild(playAgain);
    
        //if button is clicked it reload the page
        playAgain.addEventListener("click", () => {
          location.reload();
        });
      }
    });
  });
  //playChoices();

  //DOM TO VIEW RESULTS
  const container = document.querySelector("#container");
  const allResults = document.createElement("div");
  allResults.classList.add("allResults");
  allResults.style.marginTop = "20px";
  container.appendChild(allResults);

  //DOM USER WINS TRACKER
  const userWinText = document.createElement("p");
  userWinText.style.color = "black";
  userWinText.textContent = "user Win totals: " + userWins;
  allResults.appendChild(userWinText);

  //DOM COMPUTER WINS TRACKER
  const compWinText = document.createElement("p");
  compWinText.style.color = "red";
  compWinText.textContent = "computer win totals: " + compWins;
  allResults.appendChild(compWinText);

  //roundWinText.textContent = playChoices();

  //DOM EACH ROUND
  const roundWinText = document.createElement("p");
  roundWinText.style.color = "blue";
  allResults.appendChild(roundWinText);
}


game();

/* //USER CHOICE METHOD v.1
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
*/

