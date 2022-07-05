'use strict';
const cl = console.log.bind(console);

/*========== FUNCTIONS ==========*/
const closeModal = () => {
   modal.classList.add('hidden');
   overlay.classList.add('hidden');
}
/*========== HTML ITEMS ==========*/
const modal = document.querySelector('.modal'),
   modalIndex = document.querySelector('.modal__index'),
   overlay = document.querySelector('.overlay'),
   closeIcon = document.querySelector('.close__icon');

const btnShowModal = document.querySelectorAll('.show__modal');

btnShowModal.forEach((btn, index) => {
   btn.addEventListener('click', () => {
      modalIndex.innerHTML = `number ${++index}`
      modal.classList.remove('hidden');
      overlay.classList.remove('hidden');
   });
});

closeIcon.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);