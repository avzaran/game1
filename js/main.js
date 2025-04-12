const { JSDOM } = require('jsdom');
const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
const document = dom.window.document;

// Теперь можно использовать document

// прием выбора игрока
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');

let gameRes = playRound()
let computerSelection = getCompChoice()

rockBtn.addEventListener('click', () => playerClick('Rock'));
paperBtn.addEventListener('click', () => playerClick('Paper'));
scissorsBtn.addEventListener('click', () => playerClick('Scissors'));


function playerClick (playerChoice){
    playerSelection = playerChoice;
    return playerSelection
}



function getCompChoice (){
    let randomNum = Math.floor(Math.random()*3);
    let compChoice
    if (randomNum == '0'){
        compChoice = 'Rock'
    }
    else if (randomNum == '1'){
        compChoice = 'Paper'
    }
    else if (randomNum == '2'){
        compChoice = 'Scissors'
    }
    return compChoice
}
// console.log (computerSelection);

function playRound(playerSelection, computerSelection) {
    let gameRes
    if (playerSelection === computerSelection){
        gameRes = "it's a tie"
    }
    else if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
    ){
    gameRes = "You Win"}
    else {
        gameRes = "You Lose"
    }
    return gameRes
}

console.log (gameRes)

