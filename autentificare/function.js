function playGame(playerChoice) 

  // Generate a random choice for the computer

  const choices = ["rock", "paper", "scissors"];

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];




  // Compare the choices and determine the winner

  if (playerChoice === computerChoice) {

    return "It's a tie!";

  } else if (

    (playerChoice === "rock" && computerChoice === "scissors") ||

    (playerChoice === "paper" && computerChoice === "rock") ||

    (playerChoice === "scissors" && computerChoice === "paper")

  ) {

    return "You win!";

  } else {

    return "Computer wins!";

  }

}




// Example usage

const playerChoice = prompt("Enter your choice (rock, paper, or scissors):")//.toLowerCase();

const result = playGame(playerChoice);

console.log(result);  