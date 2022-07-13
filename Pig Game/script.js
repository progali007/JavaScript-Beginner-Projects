'use strict'
/* 
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/

let currentUser = false;
let currentScore = 0;

const player0El = document.querySelector('.player__0'),
    player1El = document.querySelector('.player__1');

const score0El = document.querySelector('#score__0'),
   current0El = document.querySelector('#current__0'),
   score1El = document.querySelector('#score__1'),
   current1El = document.querySelector('#current__1'),
   diceEl = document.querySelector('.dice');

const btnNew = document.querySelector('.btn__new'),
   btnRoll = document.querySelector('.btn__roll'),
   btnHold = document.querySelector('.btn__hold');

score0El.innerHTML = "0";
score1El.innerHTML = "0";
diceEl.classList.add('hidden')

// Roll Button
btnRoll.addEventListener('click', () => {
   const dice = Math.floor(Math.random() * 6) + 1;

   diceEl.classList.remove('hidden');
   diceEl.src = `dice-${dice}.png`;

   if (dice === 1) {
      if(currentUser) {
         player1El.classList.remove('player__active');
         player0El.classList.add('player__active');
      }
      else {
         player0El.classList.remove('player__active');
         player1El.classList.add('player__active');
      }
      currentScore = 0;
      currentUser = !currentUser;
      return ;
   }

   addUserScore(currentUser, dice);
})

function addUserScore(currentUser, dice) {
   switch (currentUser) {
      case false:
         current0El.innerHTML = `${currentScore += dice}`
         break;
      case true:
         current1El.innerHTML = `${currentScore += dice}`
         break;
   }
}