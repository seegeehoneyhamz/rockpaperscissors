/**rock paper scissors console game */


/**
 * Randomly choose one of three options 
 * rock, paper or scissors
 */
function getComputerChoice(){
    //get a random percentage
    let randPercent = Math.floor(Math.random()*100)+1;
    //rock will be 0-33, paper will be 34-66,
    //scissors will be 67-100.
    let choice;
    if(randPercent<=33){
        choice = 'rock';
    }else if(randPercent<=67){
        choice = 'paper';
    }else {
        choice = 'scissors';
    }
    return choice;
}


/**
 * Plays a single round of the game
 * and declares who won
 */
function playRound(playerSelection, computerSelection){
    //compare the player and computer selections
    if(playerSelection.toLowerCase().trim() === computerSelection){
        return "tie!";
    }
    if(playerSelection.toLowerCase().trim() == "rock"){
        if(computerSelection == "paper"){
            return "You lose, Paper beats Rock!";
        }else {
            return "You win, Rock beats Scissors!";
        }
    }
    if(playerSelection.toLowerCase().trim() == "paper"){
        if(computerSelection == "scissors"){
            return "You lose, Scissors beats Paper!";
        }else {
            return "You win, Paper beats Rock!";
        }
    }
    if(playerSelection.toLowerCase().trim() == "scissors"){
        if(computerSelection == "rock"){
            return "You lose, Rock beats Scissors!";
        }else {
            return "You win, Scissors beats Paper!";
        }
    }
}

//const playerSelection = "rock";
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection,computerSelection));

/**
 * Game loop for 5 rounds
 */
function game(){
    console.log("starting game...");
    let playerScore=0;
    for (let i=0; i<5; i++){

        let playerSelection = prompt("choose: rock, paper or scissors").trim().toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(`round ${i} : you have chosen ${playerSelection}, computer has chosen ${computerSelection}`);
        let result = playRound(playerSelection,computerSelection);
        console.log(result);
        if(playerWon(result)){
            playerScore++;
        }

    }
    //check final score
    if(playerScore > 2){
        console.log(`You won ${playerScore} out of 5`);
    } else{
        console.log(`You lost, score: ${playerScore} out of 5`);
    }
}


/**
 * check the score of a round
 */
function playerWon(message){
    let check = message.split(',')[0].trim().toLowerCase();
    if(check == "you win"){
        return true;
    }else{
        return false;
    }
}
