const choices = ["rock", "paper", "scissors"];

//randomizes computer selection
const computerPlay = () => {
  let random = Math.floor(Math.random() * choices.length);
  return choices[random];
};

//player vs computer
//determines who wins the round

const playRound = (playerSelection, computerSelection) => {
  let playerChoice = playerSelection.toLowerCase();
  if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(`${playerSelection} beats ${computerSelection}! You Win!`);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(`${playerSelection} beats ${computerSelection}! You Win!`);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(`${playerSelection} beats ${computerSelection}! You Win!`);
  } else if (playerSelection === computerSelection) {
    console.log(`${playerSelection} ties ${computerSelection}! Both Draw!`);
  } else {
    console.log(
      `${playerSelection} does not beat ${computerSelection}! You Lose!`
    );
  }
};

//every round the score should be kept
//should log the winner of every game

const game = (playRound) => {
  let score = 0;
  let cscore = 0;
  for (let round = 0; round < 5; round++) {
    if (playerSelection > computerSelection) {
      console.log("You won that round!");
      score++;
    } else if (computerSelection > playerSelection) {
      console.log("You lost that round!");
      cscore++;
    } else {
      continue;
    }
  }
  if (score > cscore) {
    console.log("You won the game!");
  } else if (cscore > score) {
    console.log("You lost the game!");
  } else {
    console.log("Its a draw!");
  }
};

const playerSelection = "scissors";
const computerSelection = computerPlay();

game(playRound);
