'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Check Button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  let highScore = Number('');

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = ('Correct Number!');
    displayMessage('Correct Number!'); // This is the condensed code for the comment above.
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score === 1) {
      // document.querySelector('.message').textContent = (
      //     'You lose the guessing game! Continue guessing with a new num!'
      //   );
      displayMessage(
        'You lose the guessing game! Continue guessing with a new num!'
      ); // This is the condensed code for the comment above.
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.score').textContent = 20;
    } else if (score >= 1) {
      // document.querySelector('.message').textContent =
      //     (guess > secretNumber ? 'Too high!' : 'Too low!')
      //   ;
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--; // This is the condensed code for the comment above.
      document.querySelector('.score').textContent = score;
      console.log(score);
    }
  }
});

// Again Button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  Number((document.querySelector('.guess').value = ''));
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(`Secret Number: ${secretNumber}`);
});

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13; // This will be the nuber on the top
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;
