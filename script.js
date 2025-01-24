// ROCK-PAPER-SCISSORS:

// 1. Write the logic to get the computer's choice;

let getcomputerChoice = function () {
    let number = Math.floor(Math.random() * 10) + 3
    if (number <= 4) {
        return "rock"
    }  else if (number > 8) {
        return "scissors"
    }  else {
        return "paper" 
    }
}

let computerChoice = getcomputerChoice()

// 2. Write the logic to get the player's choice;

let playerChoice = prompt("Make your choice, write 'Rock', 'Paper' or 'Scissors'.").toLowerCase();

// 3. Declare the players score variables;

let computerScore = 0
let playerScore = 0

// 4. Write the logic to play a single round;

function playRound(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log (`It's a tie. You both chose ${playerChoice}.`)
        return  
    }  else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
     ) {
        console.log (`Your choice: ${playerChoice}\nComputer's choice: ${computerChoice}\n\nYou win this round, ${playerChoice} beats ${computerChoice}!`)
        return playerScore += 1
    }  else {
        console.log (`Your choice: ${playerChoice}\nComputer's choice: ${computerChoice}\n\nYou lose this round, ${computerChoice} beats ${playerChoice}.`)
        return computerScore += 1 
    }
}

// 5. Write the logic to play the entire game.




console.log (`${playerScore}`)
console.log (`${computerScore}`)
console.log (`${computerChoice}`)
console.log (`${playerChoice}`)
console.log (playRound(computerChoice, playerChoice))
console.log (`${playerScore}`)
console.log (`${computerScore}`)
