'use strict';

//constants ('di nagbabago)
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 20;

//cached selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
const guessEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

//ui helper
function setMessage(text) {
  messageEl.textContent = text;
}

function setNumber(value) {
  numberEl.textContent = value;
}

function setScore(value) {
  scoreEl.textContent = value;
}

function setHighscore(value) {
  highscoreEl.textContent = value;
}

function setBackground(color) {
  bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
  guessEl.disabled = disabled;
  checkBtnEl.disabled = disabled;
}

function clearInput() {
  guessEl.value = '';
}

//GAME STATE
//stores variables
let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER; // +1 para 'di mainclude 0
console.log('First Secret Number:', secretNumber);

//track the current score of the player
let score = START_SCORE;
let highscore = 0;

//reset game state
function resetGameState() {
  score = START_SCORE;
  secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
}

function renderInitialUI() {
  setMessage('Start guessing...');
  setNumber('?');
  setScore(score);
  clearInput();
  disablePlay(false);
  setBackground('');
}

//BASIC GAME LOGIC
checkBtnEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  if (!guess) return setMessage('No number!');
  if (guess < MIN_NUMBER || guess > MAX_NUMBER)
    return setMessage(
      `Number must be between ${MIN_NUMBER} and ${MAX_NUMBER}!`
    );

  //correct guess
  if (guess === secretNumber) {
    setMessage('Correct Number! 🎊');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
      highscore = score;
      setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;
  }

  // wrong guess
  setMessage(guess > secretNumber ? 'Too High!😢' : 'Too Low! 😐');
  score--;
  setScore(score);

  if (score < 1) {
    setMessage('You lost! 🤣🫵');
    setNumber(secretNumber);
    setBackground('maroon');
    disablePlay(true);
    clearInput();
  }
});

againBtnEl.addEventListener('click', function () {
  resetGameState();
  renderInitialUI();
});

window.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && !checkBtnEl.disabled) {
    checkBtnEl.click();
  }
});

againBtnEl.addEventListener('click', function () {
  guessEl.focus();
});
