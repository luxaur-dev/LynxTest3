// hide.js
// Скрывает всплывающее окно

function hide() {
	const startButton = document.getElementById('startbutton');

	startButton.style.pointerEvents = 'auto';
	popup.style.display = 'none';
}