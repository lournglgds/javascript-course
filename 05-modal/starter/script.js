'use strict';

//modal elements
const modalEl = document.querySelector('.modal');

//overlay element
const overlayEl = document.querySelector('.overlay');

//close modal
const btnCloseModalEl = document.querySelector('.close-modal');

//open modal
const btnsOpenModalEl = document.querySelectorAll('.show-modal'); //querySelectorAll returns all the buttons

//helper function to open modal
const openModal = function () {
  // removes the hidden classname from the modal (html) to make it visible
  modalEl.classList.remove('hidden');
  // removes the hidden classname from overlay
  overlayEl.classList.remove('hidden');

  modalEl.focus(); // set focus to the modal for accessibility
  lastFocusedButton = document.activeElement; // store the last active button
};

let lastFocusedButton = null;

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');

  if (lastFocusedButton.focus) lastFocusedButton.focus();
};

//event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal)); // way to interact w the modals
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);

// escape key event listener to close it when its open
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    closeModal();
  }
});

modalEl.setAttribute('role', 'dialog');
modalEl.setAttribute('aria-modal', 'true');

btnCloseModalEl.setAttribute('aria-label', 'Close modal');
