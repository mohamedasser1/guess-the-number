'use strict';
const guessText = document.querySelector('.game-info h3');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const numberBox = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const checkBtn = document.getElementById('check');
const againBtn = document.getElementById('again');
let highScoreValue = 0;
let randomNumber = Math.floor(Math.random() * 30) + 1;
let currScore = 20;
highScore.textContent = highScoreValue;
checkBtn.addEventListener('click', () => {
  const guess = Number(guessInput.value);

  // When there is no number
  if (!guess) {
    guessText.textContent = '⛔ No number!';
  } else {
    switch (true) {
      case guess === randomNumber:
        guessText.textContent = '✅ Correct Number!';
        document.querySelector('body').classList.add('bg-green');
        numberBox.style.width = '12rem';
        numberBox.textContent = randomNumber;
        highScoreValue = Math.max(highScoreValue, currScore);
        highScore.textContent = highScoreValue;

        break;
      case guess > randomNumber:
        if (currScore > 1) {
          currScore--;
          score.textContent = currScore;
          guessText.textContent = '⬆ Too High!';
        } else {
          guessText.textContent = '🤯 You Lost!';
          score.textContent = 0;
          document.querySelector('body').style.backgroundColor = 'darkred';
        }
        break;
      case guess < randomNumber:
        if (currScore > 1) {
          currScore--;
          score.textContent = currScore;
          guessText.textContent = '⬇ Too Low!';
        } else {
          guessText.textContent = '🤯 You Lost!';
          score.textContent = 0;
          document.querySelector('body').style.backgroundColor = 'darkred';
        }
        break;
    }
  }
});
againBtn.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 30) + 1;
  guessText.textContent = 'Start Guessing...';
  document.querySelector('body').classList.remove('bg-green');
  document.querySelector('body').style.backgroundColor = '#222222';
  numberBox.textContent = '?';
  currScore = 20;
  score.textContent = currScore;
  guessInput.value = '';
});
