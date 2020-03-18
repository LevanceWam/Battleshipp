// Creating the locations for the ships.

var location1 = 5;
var location2 = 1;
var location3 = 3;

// Will make the guess a prompt and have the user guess where the ships are.
var guess;
var hits = 0;
var guesses =0;

// This will change to sunk when the ship has been hit enough.
var isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6) :");

    // We are going to write a conditional to make sure that thee user doesn't go over the given numbers.
    if (guess < 0 || guess > 6) {
        alert('Please enter the right coorinates!');
    } else {
        // We are gonna keep track of how many times the user hit a ship.
        guesses = guesses + 1;
    };
}