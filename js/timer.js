// timer.js
// Запуск, сброс и обработка отсчета времени

const timer = document.getElementById('timer');

let interval;
let ms = 0;
let seconds = 0;
let minutes = 0;

function timerStart() {
	difference = Date.now();
	interval = window.setInterval(updateTimer, 1);
}
function resetTimer() {
	ms = 0;
	seconds = 0;
	minutes = 0;
}

function elapsedTime() {
	const now = Date.now();
	
	elapsed = now - difference;
	difference = now;
	return elapsed
}

function updateTimer() {
	const minutesString = formString(minutes);
	const secondsString = formString(seconds);
	
	ms += elapsedTime();
	
	if (ms >= 1000) {
  	seconds += 1;
  	ms = 0;
	}
	
	if (seconds >= 60) {
  	minutes += 1;
  	seconds = 0;
	}
	
	timer.innerHTML = minutesString + ':' + secondsString + '.' + ms;
}
function formString(value) {
		const maxValue = 10;
		return value < maxValue ? '0' + value : value
}