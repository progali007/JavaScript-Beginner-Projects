'use strict';
const cl = console.log.bind(console);

const body = document.getElementsByTagName('body');
const message = document.querySelector('.message'),
   number = document.querySelector('.number'),
   score = document.querySelector('.score'),
   check = document.querySelector('.check'),
   highScore = document.querySelector('.high-score'),
   guess = document.querySelector('.guess');

const secretNumber = Math.floor(Math.random() * 20) + 1
let userScore = 10;

cl(secretNumber)
check.addEventListener('click', () => {
   const inputNumber = Number(guess.value);
   let userMessage = ""

   if (userScore === 1) {
      score.innerHTML = 0;
      message.innerHTML = '♨ You lost the game !';
      return;
   }
   if (!inputNumber) {
      message.innerHTML = '⛔ Enter a number pleas';
      return;
   }

   /* Check Input */
   if (inputNumber === secretNumber) {
      userMessage = '🎉 Well Done';
      body[0].classList.add('well-done');
   }
   else if (inputNumber >= secretNumber - 2 && inputNumber <= secretNumber + 2) {
      userMessage = '😶 You are so close';
      userScore--;

   }
   else if (inputNumber > secretNumber) {
      userMessage = '📈 Too High';
      userScore--;

   }
   else if (inputNumber < secretNumber) {
      userMessage = '📉 Too Low';
      userScore--;

   }

   score.innerHTML = userScore;
   message.innerHTML = userMessage;

})