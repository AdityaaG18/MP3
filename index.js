const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

let intervalId;
let minutes = 0;
let seconds = 0;

function startTimer() {
	intervalId = setInterval(() => {
		seconds++;
		if (seconds == 60) {
			seconds = 0;
			minutes++;
		}
		minutesDisplay.innerText = padZero(minutes);
		secondsDisplay.innerText = padZero(seconds);
	}, 1000);
}

function stopTimer() {
	clearInterval(intervalId);
}

function resetTimer() {
	stopTimer();
	minutes = 0;
	seconds = 0;
	minutesDisplay.innerText = '00';
	secondsDisplay.innerText = '00';
}

function padZero(num) {
	return num < 10 ? `0${num}` : num;
}

document.getElementById('start-btn').addEventListener('click', startTimer);
document.getElementById('stop-btn').addEventListener('click', stopTimer);
document.getElementById('reset-btn').addEventListener('click', resetTimer);
