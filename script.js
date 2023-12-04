'use strict';

// Define the secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// The trunc takes away the decimals
// The + 1 allows 20 to be generated

// Define the starting score
let score = 20;

// Defining the highscore
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const updateScore = function (userScore) {
  document.querySelector('.score').textContent = userScore;
};

// Define the Check! button
document.querySelector('.check').addEventListener('click', function () {
  // Creating a variable that holds the value entered into the input box
  const guess = Number(document.querySelector('.guess').value);
  // Returns a string, therefore we convert it to a number

  // When there is no input
  if (!guess) {
    // If guess = false, change value to true and execute the code below

    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');

    // Display the correct number
    document.querySelector('.number').textContent = secretNumber;

    // Change background colour to green
    document.querySelector('body').style.backgroundColor = '#60b347';

    // Increase width of correct number
    document.querySelector('.number').style.width = '30rem';

    // Set the highscore
    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;

      updateScore(score);
    } else {
      displayMessage('💥 You lost the game!');

      updateScore(0);
    }
  }
});

// Define the again button
document.querySelector('.again').addEventListener('click', function () {
  // Reset score variable
  score = 20;
  updateScore(score);

  // Reset secret number variable
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset message
  displayMessage('Start guessing...');

  // Reset background
  document.querySelector('body').style.backgroundColor = '#222';

  // Reset secret number box
  document.querySelector('.number').style.width = '15rem';

  // Reset ?
  document.querySelector('.number').textContent = '?';

  // Reset input box
  document.querySelector('.guess').value = '';
});
