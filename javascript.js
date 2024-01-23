let playerChoice = "RoCk";
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
    } else if (playerChoice === "paper" && computerChoice.toLowerCase === "rock") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else if (playerChoice === "Paper" && computerChoice === "Scissors") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice == "Scissors" && computerChoice === "Paper") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else if (playerChoice == "Scissors" && computerChoice === "Rock") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice === "Rock" && computerChoice === "Paper") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You lose!")
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        gameText.textContent = ("You chose " + playerChoice + ", they chose " + computerChoice + "! You win!")
    } else {
        gameText.textContent = (playerChoice);
    }
}