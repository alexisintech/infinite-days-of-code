// Create a function that returns rock, paper, or scissors as randomly as possible

function rockPaperScissors() {
    num = Math.random();
    return ( num < 0.33 ? 'rock' : num < 0.66 ? 'paper' : 'scissors');
}

// Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function


function checkWin(playerChoice) {
    let botChoice = rockPaperScissors();
    if ( playerChoice === botChoice){
        console.log("It's a draw!");
    } else if ( (playerChoice === 'rock' && botChoice === 'scissors') || (playerChoice === 'paper' && botChoice === 'rock') || (playerChoice === 'scissors' && botChoice === 'paper') ) {
        console.log("You win!");
    } else {
        console.log("You lost");
    }
}

checkWin('rock');

//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

function playGameXTimes(arr){
    arr.forEach( choice => checkWin(choice) );
}

playGameXTimes(['rock', 'paper', 'paper']);