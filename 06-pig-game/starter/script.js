'use strict';

console.log('Pig Game project ready!');

//game state variables
let scores, currentScore, activePlayer, playing;

//select player 0 (player 1)
const player0El = document.querySelector('.player--0');

//select player 1 (player 2)
const player1El = document.querySelector('.player--1');

//select score 0 element
const score0El = document.querySelector('#score--0');

//select score 1 element
const score1El = document.querySelector('#score--1');

//select current score 0 element
const current0El = document.querySelector('#current--0');

//select current score 1 element
const current1El = document.querySelector('#current--1');

//select dice element
const diceEl = document.querySelector('.dice');

//select roll button
const btnRoll = document.querySelector('.btn--roll');

// game initialization function
const init = function () {
  //start w both players at 0 score
  scores = [0, 0];

  //set current score to 0
  currentScore = 0;

  //set active player to 0 (player 1)
  activePlayer = 0;

  playing = true;

  //reset all the display
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.classList.add('hidden');
};

init();

// roll dice event listener
btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1; //to roll dice randomly
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`; //to display the correct dice image

    if (dice !== 1) {
      //add dice to current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //switch to next player (1)
      document.getElementById(`current--${activePlayer}`).textContent = 0;
    }
  }
});
