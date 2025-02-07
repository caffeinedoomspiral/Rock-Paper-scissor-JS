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

// 2. Write the logic to get the player's choice and start the round;

const playRound = document.querySelector('#playRound')
playRound.addEventListener ('click', () => {
  let playerChoice = prompt("Make your choice, write 'Rock', 'Paper' or 'Scissors'.").toLowerCase()
  let computerChoice = getcomputerChoice()
  playRound(computerChoice, playerChoice)
})

// 3. Declare the players score variables;

let computerScore = 0
let playerScore = 0

// 4. Write the logic to play;

function playRound(computerChoice, playerChoice) { 
    // Check for a tie:
    if (computerChoice === playerChoice) {
      alert (`Your choice: ${playerChoice}\n\nComputer's choice: ${computerChoice}\n\nIt's a tie, you both chose ${playerChoice}.\n\n`)
      alert (`Your score: ${playerScore}\n\nComputer's score: ${computerScore}`)
      return  

    // Check for round winner:
    }  else if (
      (computerChoice === "rock" && playerChoice === "paper") ||
      (computerChoice === "paper" && playerChoice === "scissors") ||
      (computerChoice === "scissors" && playerChoice === "rock")
    ) {
      alert (`Your choice: ${playerChoice}\n\nComputer's choice: ${computerChoice}\n\nYou win this round, ${playerChoice} beats ${computerChoice}!\n\n`)
      playerScore += 1
      alert (`Your score: ${playerScore}\n\nComputer's score: ${computerScore}`)
    }  else {
      alert (`Your choice: ${playerChoice}\n\nComputer's choice: ${computerChoice}\n\nYou lose this round, ${computerChoice} beats ${playerChoice}.\n\n`)
      computerScore += 1 
      alert (`Your score: ${playerScore}\n\nComputer's score: ${computerScore}`)
    }

    // Check for winner:
    if (computerScore === 5 || playerScore === 5) {
      if (computerScore === 5) {
        alert (`The computer wins!`)
      } 
      else {
        alert (`You win!`)
      }
      
      // Reset scores:
      computerScore = 0
      playerScore = 0
      return
    }
  }