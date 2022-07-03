'use strict';
const cl = console.log.bind(console);

const body = document.querySelector('body');
const message = document.querySelector('.message'),
   number = document.querySelector('.number'),
   score = document.querySelector('.score'),
   check = document.querySelector('.check'),
   highScore = document.querySelector('.high-score'),
   guess = document.querySelector('.guess'),
   btnAgain = document.querySelector('.again');

let secretNumber = Math.floor(Math.random() * 20) + 1
let userScore = 20;
let userHighScore = 0;

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
      message.innerHTML = '🎉 Well Done';
      number.style.width = '24rem';
      
      body.style.backgroundColor = '#21bd55';
      number.innerHTML = secretNumber.toString();
      
      if(userScore > userHighScore) {
         userHighScore = userScore;
         highScore.innerHTML = userScore.toString();
      }

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
   secretNumber = Math.floor(Math.random() * 20) + 1
   userScore = 20;

   message.innerHTML = 'Start guessing...';
   number.innerHTML = '?';
   score.innerHTML = '20';

   body.style.backgroundColor = '#222';
   number.style.width = '15rem';
})