
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
let playerSelection = null;

let computerSelection = getCompChoice();
let gameRes = playRound(playerSelection, computerSelection);
console.log(gameRes);

rockBtn?.addEventListener('click', () => playerClick('Rock'));
paperBtn?.addEventListener('click', () => playerClick('Paper'));
scissorsBtn?.addEventListener('click', () => playerClick('Scissors'));


function playerClick (playerChoice){
    playerSelection = playerChoice;
    let computerSelection = getCompChoice();
    gameRes = playRound(playerSelection, computerSelection);
    console.log (gameRes);
    return gameRes
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


function playRound(playerSelection, computerSelection) {
    let game = null;
    if (playerSelection == computerSelection){
        return game = "it's a tie"
    }
    if (
        (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
        (playerSelection == 'Paper' && computerSelection == 'Rock') ||
        (playerSelection == 'Scissors' && computerSelection == 'Paper')
    ){
    game = "You Win"
    }
    else {
        game = "You Lose"
    }
    return game
}

document.querySelector('.gameResult').textContent = gameRes;


