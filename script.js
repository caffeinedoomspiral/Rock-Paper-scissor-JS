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
        console.log (`Your choice: ${playerChoice}\n\nComputer's choice: ${computerChoice}\n\nIt's a tie, you both chose ${playerChoice}.\n\n`)
        console.log (`Your score: ${playerScore}\n\nComputer's score: ${computerScore}`)
        return  
    }  else if (
        (computerChoice === "rock" && playerChoice === "paper") ||
        (computerChoice === "paper" && playerChoice === "scissors") ||
        (computerChoice === "scissors" && playerChoice === "rock")
     ) {
        console.log (`Your choice: ${playerChoice}\n\nComputer's choice: ${computerChoice}\n\nYou win this round, ${playerChoice} beats ${computerChoice}!\n\n`)
        playerScore += 1
        console.log (`Your score: ${playerScore}\n\nComputer's score: ${computerScore}`)
    }  else {
        console.log (`Your choice: ${playerChoice}\n\nComputer's choice: ${computerChoice}\n\nYou lose this round, ${computerChoice} beats ${playerChoice}.\n\n`)
        computerScore += 1 
        console.log (`Your score: ${playerScore}\n\nComputer's score: ${computerScore}`)
    }
}

// 5. Write the logic to play the entire game.

let keepPlaying = true

while (keepPlaying) {
    let computerChoice = getcomputerChoice()
    let playerChoice = prompt("Make your choice, write 'Rock', 'Paper' or 'Scissors'.").toLowerCase();
    console.log (playRound(computerChoice, playerChoice))
    if (computerScore === 3 || playerScore === 3) {
        keepPlaying = false
        if (computerScore === 3) {
            console.log (`Your score: ${playerScore}\n\nComputer's score: ${computerScore}\n\nThe computer wins!`)
        } else {
            console.log (`Your score: ${playerScore}\n\nComputer's score: ${computerScore}\n\nYou win!`)
        }
    }
}