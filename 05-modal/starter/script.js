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
};

const closeModal = function () {
  modalEl.classList.add('hidden');
  overlayEl.classList.add('hidden');
};

//event listeners
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal)); // way to interact w the modals
btnCloseModalEl.addEventListener('click', closeModal);
overlayEl.addEventListener('click', closeModal);
