let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let attempts = 0;
const maxAttempts = 10; // Limit the number of guesses
const attemptCountElement = document.getElementById('attempt-count');
const guessesLeftElement = document.getElementById('guesses-left');
const guessButton = document.getElementById('guess-button');
const restartButton = document.getElementById('restart-button');

// Function to handle the guess submission
guessButton.addEventListener('click', function() {
    const userGuess = parseInt(document.getElementById('guess-input').value);
    const feedbackMessage = document.getElementById('feedback-message');

    // Check for invalid inputs
    if (isNaN(userGuess)) {
        feedbackMessage.textContent = 'Invalid input! Please enter a number.';
        feedbackMessage.style.color = '#d9534f'; // Red color for error
        return;
    } else if (userGuess < 1 || userGuess > 100) {
        feedbackMessage.textContent = 'Please enter a number between 1 and 100.';
        feedbackMessage.style.color = '#d9534f'; // Red color for error
        return;
    }

    attempts++;
    attemptCountElement.textContent = attempts;
    guessesLeftElement.textContent = maxAttempts - attempts;

    // Check if the number of attempts is exceeded
    if (attempts >= maxAttempts) {
        feedbackMessage.textContent = `Game over! The correct number was ${randomNumber}. You've used all your attempts.`;
        feedbackMessage.style.color = '#d9534f'; // Red color for error
        guessButton.classList.add('hidden'); // Hide guess button
        restartButton.classList.remove('hidden'); // Show restart button
        return;
    }

    // Check the user's guess against the random number
    if (userGuess === randomNumber) {
        feedbackMessage.textContent = `Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts.`;
        feedbackMessage.style.color = '#28a745'; // Green color for success
        guessButton.classList.add('hidden'); // Hide guess button
        restartButton.classList.remove('hidden'); // Show restart button
    } else if (userGuess < randomNumber) {
        feedbackMessage.textContent = 'Too low! Try again.';
        feedbackMessage.style.color = '#0077cc'; // Blue color for hint
    } else {
        feedbackMessage.textContent = 'Too high! Try again.';
        feedbackMessage.style.color = '#0077cc'; // Blue color for hint
    }

    document.getElementById('guess-input').value = ''; // Clear input field
});

// Function to restart the game
restartButton.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a new random number
    attempts = 0;
    attemptCountElement.textContent = attempts;
    guessesLeftElement.textContent = maxAttempts;
    document.getElementById('feedback-message').textContent = '';
    guessButton.disabled = false; // Re-enable guess button
    guessButton.classList.remove('hidden'); // Show guess button
    restartButton.classList.add('hidden'); // Hide restart button
});
