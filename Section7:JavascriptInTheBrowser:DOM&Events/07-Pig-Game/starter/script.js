'use strict';

// Target the score elements for 1st & 2nd players
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');

// We need to hide the dice and in order to do that, we need to
// create a class named 'hidden' and add that to the css file.
// We also created the 'diceEl' variable above for the dice element
const diceEL = document.querySelector('.dice');
// We add the hidden class to the dice element by selecting the dice class, which hides the dice
diceEL.classList.add('hidden');

// Starting conditions:
// Set the scores for the players to zero
score0El.textContent = 0;
score1El.textContent = 0;

// Lets target the btn--roll class for rolling the dice functionality
const btnRoll = document.querySelector('.btn--roll');

const scores = [0, 0]; // Scores for player 1 and 2
let currentScore = 0;
let activePlayer = 0;

// The btn listener below will roll the dice
btnRoll.addEventListener('click', function () {
  // 1. Generate the random dice number
  const diceVal = Math.trunc(Math.random() * 6) + 1;
  console.log(diceVal);

  // 2. Display the dice:
  //   - Remove the hidden class:
  diceEL.classList.remove('hidden');
  //   - Select the dice image
  diceEL.src = `dice-${diceVal}.png`;

  // 3. Check if rolled 1. True, then switch player. False, continue
  if (diceVal !== 1) {
    // Player remains the same since it does not equal to 1
    //   - Create a variable outside this btn function for current score (currentScore)
    //   - Add the dice value(diceVal) to currentScore
    currentScore += diceVal;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
    //   - For dev purposes, we keep default current score to player1.
    //   - We create both the variables for players 1 & 2 current scores
    //     on one of the first few lines, so we can select the current score classes from the html
  } else {
    // Player gets switched since it is a 1
    // CURRENT STEP: We need to switch the active player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
