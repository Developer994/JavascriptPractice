'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden'); //Removes the hidden class, exposing the element
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal); // If there are more than one elements of the same class/id that need to be dealt with, we use a loop.

btnCloseModal.addEventListener('click', closeModal); // There are no parenthesis on the closeModal because we don't want the function to happen immmediately, but rather only as soon as click event happens
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  console.log(event.key); // This will console out which key you press onto the console.

  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
