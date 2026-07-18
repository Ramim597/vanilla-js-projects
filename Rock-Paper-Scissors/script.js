let resultRock = document.querySelector(".result-rock");
let playerMoveEl = document.querySelector(".playerMove");
let resultEl = document.querySelector(".result");
let winEl = document.querySelector(".win");
let losesEl = document.querySelector(".loses");
let tiesEl = document.querySelector(".ties");
let computerMoveEl = document.querySelector(".computerMove");
function resetScore() {
  Wins = 0;
  loses = 0;
  Ties = 0;
  winEl.innerHTML = 0;
  losesEl.innerHTML = 0;
  tiesEl.innerHTML = 0;
  localStorage.removeItem("score");
}

let score = JSON.parse(localStorage.getItem("score")) || {
  Wins: 0,
  loses: 0,
  Ties: 0,
};

let computerMove = "";

// it will create random move for computer
function pickComputerMove() {
  let randomNum = Math.random();
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissors";
  }
}

pickComputerMove();

// it will create random user move
let randomUserMove = "";
function pickUserMove() {
  let randomNum = Math.random();
  if (randomNum >= 0 && randomNum < 1 / 3) {
    return "paper";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    return "rock";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    return "scissors";
  }
}
pickUserMove();

function autoPlay() {
  setInterval(function () {
    let randomUserMove = pickUserMove();
    getResult(randomUserMove);
  }, 1000);
}

// result start from here
let result = "";

function getResult(userMove) {
  if (userMove === "rock") {
    if (computerMove === "rock") {
      result = "Ties";
    } else if (computerMove === "paper") {
      result = "You lose.";
    } else if (computerMove === "scissors") {
      result = "You win.";
    }
  }

  if (userMove === "paper") {
    if (computerMove === "rock") {
      result = "You win.";
    } else if (computerMove === "paper") {
      result = "Tie";
    } else if (computerMove === "scissors") {
      result = "You lose.";
    }
  }

  if (userMove === "scissors") {
    if (computerMove === "rock") {
      result = "You lose.";
    } else if (computerMove === "paper") {
      result = "You win.";
    } else if (computerMove === "scissors") {
      result = "Ties";
    }
  }

  if (result === "You lose.") {
    score.loses += 1;
  } else if (result === "You win.") {
    score.Wins += 1;
  } else if (result === "Tie") {
    score.Ties += 1;
  }

  winEl.innerHTML = score.Wins;
  losesEl.innerHTML = score.loses;
  tiesEl.innerHTML = score.Ties;

  playerMoveEl.innerHTML = userMove;
  computerMoveEl.innerHTML = computerMove;
  resultEl.innerHTML = result;
  localStorage.setItem("score", JSON.stringify(score));
}
