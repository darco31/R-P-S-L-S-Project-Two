document.getElementById('how-to').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
});

// Steps

const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

// function generateComputerChoice() {

//     let computerChoice = Math.ceil(Math.random() * 5);

//     if (computerChoice === 1) {
//         return "rock";
//     } else if (computerChoice === 2) {
//         return "paper";
//     } else if (computerChoice === 3) {
//         return "scissors";
//     } else if (computerChoice === 4) {
//         return "lizard";
//     } else if (computerChoice === 5) {
//         return "spock";
//     } else {
//         return "error";
//     }
//     computerChoiceDisplay.innerHTML = computerChoice;
// }

/**
 * This function generates a random between 0 and 5 and assigns an icon depending
 * on the number
 */
function generateComputerChoice() {
    const randomNumber = Math.ceil(Math.random() * 5) // or you can use possibleChoices.length

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'lizard'
    }
    if (randomNumber === 3) {
        computerChoice = 'spock'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(userChoice) {
    if (computerChoice === userChoice) {
        result = 'its a draw!';
    } else {
        if (userChoice === 'rock' && (computerChoice == 'paper' || computerChoice == 'lizard')) {
            result = 'you win!'
        } else if (userChoice === 'paper' && (computerChoice == 'rock' || computerChoice == 'spock')) {
            result = 'you win!'
        } else if (userChoice === 'scissors' && (computerChoice == 'paper' || computerChoice == 'lizard')) {
            result = 'you win!'
        } else if (userChoice === 'lizard' && (computerChoice == 'spock' || computerChoice == 'paper')) {
            result = 'you win!'
        } else if (userChoice === 'spock' && (computerChoice == 'scissors' || computerChoice == 'rock')) {
            result = 'you win!'
        }
    }

    resultDisplay.innerHTML = result
}