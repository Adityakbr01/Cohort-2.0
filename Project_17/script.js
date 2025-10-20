// Set total time in seconds (10 minutes = 600 seconds)
let totalTime = 10 * 60; 

// Reference to timer element
const timerDisplay = document.getElementById('timer');

// Function to format time as mm:ss
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2,'0')}:${secs.toString().padStart(2,'0')}`;
}

// Display initial time
timerDisplay.textContent = formatTime(totalTime);

// Start countdown
const countdown = setInterval(() => {
    totalTime--;
    timerDisplay.textContent = formatTime(totalTime);

    if (totalTime <= 0) {
        clearInterval(countdown);
        alert("Time's up!");
    }
}, 1000);
