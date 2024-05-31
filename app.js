let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate random number
let remainingGuesses = 3;

const messageEl = document.getElementById('message');
const guessEl = document.getElementById('guess');
const submitBtn = document.getElementById('submit');
const resultEl = document.getElementById('result');

submitBtn.addEventListener('click', function () {
  let userGuess = parseInt(guessEl.value);

  // Validate user input
  if (isNaN(userGuess)) {
    alert("Please enter a valid number!");
    return;
  }

  remainingGuesses--;

  if (userGuess === randomNumber) {
    resultEl.textContent = "Congratulations! You guessed the number!";
    submitBtn.disabled = true; // Disable button after win
  } else if (userGuess < randomNumber) {
    resultEl.classList.add('wrong');
    resultEl.textContent = "Too low! Try again. You have " + remainingGuesses + " tries left.";
  } else {
    resultEl.classList.add('wrong');
    resultEl.textContent = "Too high! Try again. You have " + remainingGuesses + " tries left.";
  }

  guessEl.value = ""; // Clear guess input after each attempt
  resultEl.classList.remove('wrong'); // Remove wrong class for next attempt

  if (remainingGuesses === 0) {
    messageEl.textContent = "Game Over! The number was " + randomNumber;
    submitBtn.disabled = true; // Disable button after losing
  }
});
