// Modal rules pop up

document.getElementById('how--to').addEventListener("click", function() {
    document.querySelector('.pop__out__modal').style.display = "flex";
});

document.querySelector('.close--button').addEventListener("click", function() {
    document.querySelector('.pop__out__modal').style.display = "none";
});


//  The below will call the modal pop up to display the result an possibly the score and close it

document.getElementById('result__display').addEventListener("click", function() {
    document.querySelector('.result__modal').style.display = "flex";
});

document.querySelector('.close--result').addEventListener("click", function() {
    document.querySelector('.result__modal').style.display = "none";
});

let computerPicked = getComputerChoice();
let result;

/**
 * Generates a random number from 1 to 5 to assign to the computers choice
 */

function getComputerChoice() {

    let computerPicked = Math.ceil(Math.random() * 5);

    if (computerPicked === 1) {
        return "rock";
    } else if (computerPicked === 2) {
        return "paper";
    } else if (computerPicked === 3) {
        return "scissors";
    } else if (computerPicked === 4) {
        return "lizard";
    } else if (computerPicked === 5) {
        return "spock";
    } else {
        return "error";
    }
}


/**
 * This function decides the outcome and displays the result in a results modal
 */


function getResult(userPicked) {


    if (userPicked === computerPicked) {
        result = 'The game is a drawn!';
    } else {
        if (userPicked === 'rock' && (computerPicked === 'scissors' || computerPicked === 'lizard')) {
            result = 'you win!'
        } else if (userPicked === 'paper' && (computerPicked == 'rock' || computerPicked == 'spock')) {
            result = 'you win!'
        } else if (userPicked === 'scissors' && (computerPicked == 'paper' || computerPicked == 'lizard')) {
            result = 'you win!'
        } else if (userPicked === 'lizard' && (computerPicked == 'spock' || computerPicked == 'paper')) {
            result = 'you win!'
        } else if (userPicked === 'spock' && (computerPicked == 'scissors' || computerPicked == 'rock')) {
            result = 'you win!'
        } else {
            result = 'You lose!'
        }
    }

    userPick(userPicked);
    computerPick(computerPicked);
    gameResult(result);
    return result;
}

function userPick(userIcon) {
    const usersChoice = document.getElementById("user-pick");
    usersChoice.innerHTML = userIcon;
}

function computerPick(computerIcon) {
    const computersChoice = document.getElementById("computer-pick");
    computersChoice.innerHTML = computerIcon;
}

function gameResult(gameResult) {
    const gameEnded = document.getElementById("result");
    gameEnded.innerHTML = gameResult;
}