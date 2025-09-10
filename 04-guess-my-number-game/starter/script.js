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

  //check if the guess input value is empty
  if (!guess) {
    document.querySelector('.message').textContent = 'Please input a number😐';
    return;
  }

  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20! 😤';
    return;
  }

  //if guess is correct
  if (guess === secretNumber) {
    console.log('Your guess is correct!');
    // document.querySelector('.message').textContent = 'Correct Number 🥳';

    //shows the secret num if guess is correct
    document.querySelector('.number').textContent = secretNumber;

    //inputs the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //para 'di na magalaw once the player won
    document.querySelector('.message').textContent = 'You have won!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'green';
  } else if (guess > secretNumber) {
    console.log('Too high!');
    document.querySelector('.message').textContent = 'Too high! 😥';
    score--; //score decrease when wrong
    document.querySelector('.score').textContent = score; //updates the score
    //para 'di na magalaw once the player lost
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You have lost, press again!';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
      document.body.style.backgroundColor = 'maroon';
      document.querySelector('.message').textContent = 'Game Over! 🤣🫵';
      document.querySelector('.guess').value = '';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low! 😥';
    score--;
    document.querySelector('.score').textContent = score;
    if (score < 1) {
      document.querySelector('.message').textContent =
        'You have lost, press again!';
      document.querySelector('number').textContent = secretNumber;
      document.querySelector('.guess').disabled = true;
      document.querySelector('.check').disabled = true;
    }
  }
});

//for again button once the player lost
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('New secret number is:', secretNumber); //para lumabas new secret num
  //restart the message display
  document.querySelector('.message').textContent = 'Start guessing';
  //restart the question mark
  document.querySelector('.number').textContent = '?';
  //update the score in the ui
  document.querySelector('.score').textContent = score;
  //to empty the input field box when again btn is clicked
  document.querySelector('.guess').value = '';
  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
  document.body.style.backgroundColor = '';
});
