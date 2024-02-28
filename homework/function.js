let choice = ["piatra", "ziar", "foarfece"];


/ Choices //
console.log(computerScore, playerScore)


// Randomly Generate a computer choice //
function getComputerChoice(choice){

    return choice[Math.floor(Math.random() * choice.length)];

}
// Score Variable(s)
var computerScore = 0;
var playerScore = 0;
// Playing the round ; determining winners //

function round (playerSelection,computerSelection){
    console.log(playerSelection, computerSelection);



if (playerSelection === computerSelection){
return `It's a tie! You both picked ${playerSelection}!` ;
}
else if (playerSelection === "rock" && computerSelection=== "scissors"){
   playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}
else if (playerSelection === "paper" && computerSelection=== "rock"){
    playerScore ++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

else if (playerSelection === "scissors" && computerSelection=== "paper"){
   playerScore ++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

else {
    computerScore += 1;
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

}



const playerSelection = prompt("Rock, Paper, Or Scissors?").toLowerCase();
const computerSelection = getComputerChoice(choice);

/// shows comparison of what was passed ///
console.log(round(playerSelection,computerSelection));

while (computerScore<4 && playerScore<4){
for (let i = 0; i < 10; i++) {
    const playerSelection = prompt("Rock, Paper, Or Scissors?");
    const computerSelection = getComputerChoice(choice);
    //call round function
    console.log(round(playerSelection, computerSelection));
    console.log(playerScore, computerScore)


}
}
round()

console.log(computerScore, playerScore)

console.log("Hello World")