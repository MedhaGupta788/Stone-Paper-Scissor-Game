let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["stone", "paper", "scissors"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};
const drawGame = () => {
  console.log("game was draw");
  msg.innerText = "Oops, Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, CompChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${CompChoice}.`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose!");
    msg.innerText = `You Lose! ${CompChoice} beats your ${userChoice}.`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  //to generate computer choice:-
  const CompChoice = genCompChoice();
  console.log("computer choice = ", CompChoice);
  if (userChoice == CompChoice) {
    //draw
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "stone") {
      //comp-paper,scissors
      userWin = CompChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //comp-stone,scissors
      userWin = CompChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      // comp-stone,paper it cannot be scissors because it will make game draw
      userWin = CompChoice === "stone" ? false : true;
    }

    showWinner(userWin, userChoice, CompChoice);
  }
};
choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice was clicked");
    playGame(userChoice);
  });
});
