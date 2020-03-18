// Creating the locations for the ships.
var randomLocation = Math.floor(Math.random() * 5);

var location1 = randomLocation;
var location2 = location1 + 1;
var location3 = location2 + 1;

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

        // Going to start the the conditionals for hitting the ships
        if (guess ==  location1 || guess == location2 || guess == location3)
        {
            // Let's sink the ships!
            alert('HIT!');
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert('You sank my battleship!');
            }
        } else {
            alert('MISS!');
        }
    };
}

// Show the users the amount of misses and hits they took
var stats = "You took " + guesses + " guesses to sink the battleship, " + "which means your shooting accuracy was " + (3/guesses);
alert(stats);