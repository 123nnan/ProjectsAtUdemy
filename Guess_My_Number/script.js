'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Corrent number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const showMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    showMessage('No Number!');
  } else if (guess === secretNumber) {
    showMessage('Corrent number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('body').style.backgroundColor = '#60b347';
  } else if (Math.abs(guess - secretNumber) > 6 && guess <= 20) {
    if (score > 1) {
      showMessage('❄️Cold!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You lost the game!');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  } else if (
    Math.abs(guess - secretNumber) >= 3 &&
    Math.abs(guess - secretNumber) <= 6 &&
    guess <= 20
  ) {
    if (score > 1) {
      showMessage('🔥Warmer');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You lost the game!');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  } else if (Math.abs(guess - secretNumber) <= 2 && guess <= 20) {
    if (score > 1) {
      showMessage('☀️Hot!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('You lost the game!');
      score--;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > 20) {
    showMessage('Error, Number is not between 1 & 20. Please Try Again!');
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
