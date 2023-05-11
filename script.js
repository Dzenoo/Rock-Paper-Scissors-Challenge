let papir = document.querySelector(".paper");
let kamen = document.querySelector(".rock");
let makaze = document.querySelector(".scissors");
let userScore = document.querySelector(".userScore");
let computerScore = document.querySelector(".computerScore");
let computerChoose = document.querySelector(".computerChoose");

const buttons = [papir, kamen, makaze];
let uScore = 0;
let cScore = 0;

const startGame = (userMove) => {
  userScore.innerText = uScore;
  computerScore.innerText = cScore;

  const cases = ["Paper", "Rock", "Scissors"];
  const randomNumber = Math.round(Math.random() * 2);
  const computerMove = cases[randomNumber];

  computerChoose.innerText = computerMove;

  if (userMove === computerMove) {
    alert("Tie");
  }

  if (userMove === "Paper") {
    if (computerMove === "Rock") {
      uScore++;
      alert("User Win");
    } else if (computerMove === "Scissors") {
      cScore++;
      alert("Computer Win");
    }
  }

  if (userMove === "Rock") {
    if (computerMove === "Paper") {
      cScore++;
      alert("Computer Win");
    } else if (computerMove === "Scissors") {
      uScore++;
      alert("User Win");
    }
  }

  if (userMove === "Scissors") {
    if (computerMove === "Paper") {
      uScore++;
      alert("User Win");
    } else if (computerMove === "Rock") {
      cScore++;
      alert("Computer Win");
    }
  }

  userScore.innerText = uScore;
  computerScore.innerText = cScore;

  console.log("COMPUTER" + " " + computerMove);
  console.log("USER" + " " + userMove);
};

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    startGame(e.target.innerText);
  });
});
