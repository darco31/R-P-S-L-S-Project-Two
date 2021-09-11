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




function generateComputerChoice() {

    let comChoice = Math.ceil(Math.random() * 5);

    if (comChoice === 1) {
        return "Rock";
    } else if (comChoice === 2) {
        return "Paper";
    } else if (comChoice === 3) {
        return "Scissors";
    } else if (comChoice === 4) {
        return "Lizard";
    } else if (comChoice === 5) {
        return "Spock";
    } else {
        return "error";
    }
}

function getResult(userChoice) {
    let result;
    let comChoice = generateComputerChoice();
    if (userChoice === comChoice) {
        result = 'The game is a drawn!';
    } else {
        if (userChoice === 'rock' && (comChoice === 'paper' || comChoice === 'lizard')) {
            result = 'you win!'
        } else if (userChoice === 'paper' && (comChoice == 'rock' || comChoice == 'spock')) {
            result = 'you win!'
        } else if (userChoice === 'scissors' && (comChoice == 'paper' || comChoice == 'lizard')) {
            result = 'you win!'
        } else if (userChoice === 'lizard' && (comChoice == 'spock' || comChoice == 'paper')) {
            result = 'you win!'
        } else if (userChoice === 'spock' && (comChoice == 'scissors' || comChoice == 'rock')) {
            result = 'you win!'
        } else {
            result = 'You lose!'
        }
    }

    userChose(userChoice);
    gameResult(result);
    computerChose(comChoice);
    return result;
}


function userChose(whatUserChose) {
    const usersChoice = document.getElementById("user-choice");
    usersChoice.innerHTML = whatUserChose;
}

function gameResult(gameResult) {
    const gameEnded = document.getElementById("result");
    gameEnded.innerHTML = gameResult;
}

function computerChose(computerChose) {
    const computersChoice = document.getElementById("computer-choice");
    computersChoice.innerHTML = computerChose;
}