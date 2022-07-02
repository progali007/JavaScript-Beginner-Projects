'use strict';
const cl = console.log.bind(console);

const body = document.getElementsByTagName('body');
const message = document.querySelector('.message'),
   number = document.querySelector('.number'),
   score = document.querySelector('.score'),
   check = document.querySelector('.check'),
   highScore = document.querySelector('.high-score'),
   guess = document.querySelector('.guess'),
   btnAgain = document.querySelector('.again');

const secretNumber = Math.floor(Math.random() * 20) + 1
let userScore = 20;
let userHighScore = 0;

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
      body[0].style.backgroundColor = '#21bd55';
      number.style.width = '24rem';
      number.innerHTML = secretNumber.toString();
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

btnAgain.addEventListener('click', ()=> {
   document.location.reload();
})