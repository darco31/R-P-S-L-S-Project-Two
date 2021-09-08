document.getElementById('how-to').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "flex";
});

document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display = "none";
});

// Steps

// Generate some random numbers for the computer to receive its pick?

/**
 * This returns random number between 1 and 5 that
 * are assigned to the computer for its picks in the game
 */
function computerNumber() {

    let pcPick = Math.ceil(Math.random() * 5);

    if (pcPick === 1) {
        return 'rock';
    } else if (pcPick === 2) {
        return 'paper';
    } else if (pcPick === 3) {
        return 'scissors';
    } else if (pcPick === 4) {
        return 'lizard';
    } else if (pcPick === 5) {
        return 'spock'
    } else {
        return 'error'
    }

}

// if statements to decide the winner of each game?