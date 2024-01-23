let playerChoice;
let computerChoice;
let wins = 0;
let enemyWins = 0;
const winTitle = document.querySelector('#winTitle');
const startGame = document.querySelector('.startGame');
const winScore = document.querySelector('#winScore');
const enemyWinScore = document.querySelector('#enemyWinScore');

startGame.addEventListener("click", playRound);

function compare () {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        alert ("You both chose " + playerChoice + "! It's a draw.")
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        ++wins
        alert ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        ++enemyWins
        alert ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice == "scissors" && computerChoice === "paper") {
        ++wins
        alert ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else if (playerChoice == "scissors" && computerChoice === "rock") {
        ++enemyWins
        alert ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        ++enemyWins
        alert ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        ++wins
        alert ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else {
        alert ("Type 'rock', 'paper', or 'scissors'.");
    }
}


function playRound() {
    playerChoice = prompt("Choose rock, paper, or scissors!");
    getComputerChoice();
    compare();
    game();
}

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
    return computerChoice;
}

function game() {
    winScore.textContent = (wins);
    console.log(wins);
    enemyWinScore.textContent = (enemyWins);
}
