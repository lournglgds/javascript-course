'use strict';

// DOM element selection
const messageEl = document.querySelector('.message');
console.log(messageEl);
console.log(messageEl.textContent);

// change text content
//messageEl.textContent = 'Hello from JavaScript';

const scoreEl = document.querySelector('.score');
console.log('Score element:', scoreEl);
//scoreEl.textContent = 50;

const numberEl = document.querySelector('.number');
//numberEl.textContent = 15;

const highscoreEl = document.querySelector('.highscore');
//highscoreEl.textContent = 100;

const guessEl = document.querySelector('.guess');
// guessEl.value = 12;

//stores variables
let secretNumber = Math.trunc(Math.random() * 20) + 1; // +1 para 'di mainclude 0
console.log('Secret Number:', secretNumber);

//track the current score of the player
let score = 20;
let highscore = 0;

//change the value of the score dynamically
document.querySelector('.score').textContent = score;
document.querySelector('.highscore').textContent = highscore;

console.log('Game state initialized');

//BASIC GAME LOGIC
document.querySelector('.check').addEventListener('click', function () {
  //function once check button is clicked:
  console.log('Check button is clicked!');

  //players guess
  const guess = Number(document.querySelector('.guess').value);
  console.log('Players guessed:', guess);

  //if guess is correct
  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    document.querySelector('.message').textContent = 'Correct Number 🥳';

    //shows the secret num if guess is correct
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high! 😥';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low! 😥';
  }
});
