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

