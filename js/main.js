const choices = ["rock", "paper", "scissors"];

const computerPlay = () => {
  let random = Math.floor(Math.random() * choices.length);
  console.log(choices[random]);
};

computerPlay();

const playRound = (playerSelection, computerSelection) => {
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
