let workDuration = 25 * 60; // 25 minutes
let breakDuration = 5 * 60; // 5 minutes
let isWorking = true; // Flag to determine if it's working time or break time
let timer;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const sessionLengthSpan = document.getElementById('session-length');
const breakLengthSpan = document.getElementById('break-length');
const sessionDecreaseBtn = document.getElementById('session-decrease');
const sessionIncreaseBtn = document.getElementById('session-increase');
const breakDecreaseBtn = document.getElementById('break-decrease');
const breakIncreaseBtn = document.getElementById('break-increase');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timerDisplay.textContent = isWorking ? formatTime(workDuration) : formatTime(breakDuration);
}

function startTimer() {
    timer = setInterval(() => {
        if (isWorking) {
            workDuration--;
            if (workDuration === 0) {
                clearInterval(timer);
                isWorking = false;
                breakDuration = parseInt(breakLengthSpan.textContent) * 60;
                updateTimerDisplay();
                alert('Take a break!');
                startTimer();
            }
        } else {
            breakDuration--;
            if (breakDuration === 0) {
                clearInterval(timer);
                isWorking = true;
                workDuration = parseInt(sessionLengthSpan.textContent) * 60;
                updateTimerDisplay();
                alert('Time to work!');
                startTimer();
            }
        }
        updateTimerDisplay();
    }, 1000);
}

startButton.addEventListener('click', () => {
    startButton.disabled = true;
    workDuration = parseInt(sessionLengthSpan.textContent) * 60;
    breakDuration = parseInt(breakLengthSpan.textContent) * 60;
    startTimer();
});

pauseButton.addEventListener('click', () => {
    clearInterval(timer);
    startButton.disabled = false;
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    isWorking = true;
    workDuration = parseInt(sessionLengthSpan.textContent) * 60;
    breakDuration = parseInt(breakLengthSpan.textContent) * 60;
    updateTimerDisplay();
    startButton.disabled = false;
});

sessionDecreaseBtn.addEventListener('click', () => {
    let sessionLength = parseInt(sessionLengthSpan.textContent);
    if (sessionLength > 1) {
        sessionLength--;
        sessionLengthSpan.textContent = sessionLength;
        if (isWorking) {
            workDuration = sessionLength * 60;
            updateTimerDisplay();
        }
    }
});

sessionIncreaseBtn.addEventListener('click', () => {
    let sessionLength = parseInt(sessionLengthSpan.textContent);
    sessionLength++;
    sessionLengthSpan.textContent = sessionLength;
    if (isWorking) {
        workDuration = sessionLength * 60;
        updateTimerDisplay();
    }
});

breakDecreaseBtn.addEventListener('click', () => {
    let breakLength = parseInt(breakLengthSpan.textContent);
    if (breakLength > 1) {
        breakLength--;
        breakLengthSpan.textContent = breakLength;
        if (!isWorking) {
            breakDuration = breakLength * 60;
            updateTimerDisplay();
        }
    }
});

breakIncreaseBtn.addEventListener('click', () => {
    let breakLength = parseInt(breakLengthSpan.textContent);
    breakLength++;
    breakLengthSpan.textContent = breakLength;
    if (!isWorking) {
        breakDuration = breakLength * 60;
        updateTimerDisplay();
    }
});

updateTimerDisplay();
