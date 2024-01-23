let playerChoice = "Paper";
let computerChoice;
const gameText = document.querySelector('.gameText');
const playerInput = document.querySelector('#playerInput');
const submit = document.querySelector('.submit');

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    computerChoice = options[Math.floor(Math.random() * options.length)];
    console.log(computerChoice);
    return computerChoice;
}

function compare() {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === computerChoice) {
        gameText.textContent = ("You both chose " + playerChoice + "! It's a draw.")
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else if (playerChoice === "paper" && computerChoice === "scissors") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice == "scissors" && computerChoice === "paper") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else if (playerChoice == "scissors" && computerChoice === "rock") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice === "rock" && computerChoice === "paper") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else {
        gameText.textContent = (playerChoice);
    }
}

getComputerChoice();
compare();