let timerElement = document.getElementById('timer');
let timerMessage = document.getElementById('timer-message');
let correctAnswer = "Increase Tariffs on Countries with Unfair Trade Practices"; // Correct answer

let timerCount = 10;
let timerInterval;

window.onload = () => {
    setTimeout(startTimer, 1000);
};

function startTimer() {
    timerMessage.innerHTML = "Timer starts in 10 seconds...";
    let countdown = setInterval(() => {
        timerElement.innerHTML = timerCount;
        timerCount--;
        
        if (timerCount < 0) {
            clearInterval(countdown);
            timerMessage.innerHTML = "Time's up!";
            startQuiz();
        }
    }, 1000);
}

function startQuiz() {
    // Enable the options
    let options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.disabled = false;
    });
}

function checkAnswer(button) {
    let options = document.querySelectorAll('.option');

    // Disable all options
    options.forEach(option => {
        option.disabled = true;
        if (option.innerHTML === correctAnswer) {
            option.classList.add('correct');
        } else {
            option.classList.add('incorrect');
        }
    });

    // Show correct/incorrect alert
    if (button.innerHTML === correctAnswer) {
        alert("Correct! The reciprocal tariff is aimed at countries with unfair trade practices.");
    } else {
        alert("Incorrect! The correct answer is: " + correctAnswer);
    }
}