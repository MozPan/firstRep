'use strict';
//hello
//Selecting elements
const dice_el = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
  
const score0_el = document.getElementById('score--0');
const score1_el = document.getElementById('score--1');
const current0_el = document.getElementById('current--0');
const current1_el = document.getElementById('current--1');
const player0_el = document.querySelector('.player--0');
const player1_el = document.querySelector('.player--1');

const switchP = function () {
  document.getElementById(`current--${activeP}`).textContent = 0;
  cScore = 0;
  // activeP = activeP === 0 ? (activeP = 1) : (activeP = 0);
  //this toggles, works the same as above
  activeP = activeP ? 0 : 1;
  player0_el.classList.toggle('player--active');
  player1_el.classList.toggle('player--active');
};

//starting condotions
score0_el.textContent = 0;
score1_el.textContent = 0;
dice_el.classList.add('hidden');

let totalS = [0, 0];
let cScore = 0;
let activeP = 0;
let playing = true;

//displays the dice corresponding to its number
btnRoll.addEventListener('click', function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    dice_el.classList.remove('hidden');
    console.log(dice);
    dice_el.src = `dice-${dice}.png`;
    //logic of the cScores
    if (dice !== 1) {
      cScore += dice;
      document.getElementById(`current--${activeP}`).textContent = cScore;
    } else {
      switchP();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    totalS[activeP] += cScore;
    document.querySelector(`#score--${activeP}`).textContent = totalS[activeP];
    if (totalS[activeP] < 10) {
      switchP();
    } else {
      document
        .querySelector(`.player--${activeP}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activeP}`)
        .classList.remove('player--active');
      dice_el.classList.add('hidden');
      playing = false;
    }
  }
});

btnNew.addEventListener('click', function () {
  score0_el.textContent = 0;
  score1_el.textContent = 0;
  dice_el.classList.add('hidden');
  totalS = [0, 0];
  cScore = 0;
  document.getElementById(`current--${activeP}`).textContent = cScore;
  activeP = 0;
  playing = true;
  document.querySelector(`.player--0`).classList.remove('player--winner');
  document.querySelector(`.player--1`).classList.remove('player--winner');
  player0_el.classList.add('player--active');
  player1_el.classList.remove('player--active');
  console.log(activeP);
});
