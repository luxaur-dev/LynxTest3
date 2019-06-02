// popup.js
// Вызывает всплывающее окно с результатом

const popup = document.getElementById('popup');

function showPopup() {
	const result = document.getElementById('result');
	
	popup.style.display = 'block';
	result.innerHTML = timer.innerHTML;
	isGameStarted = false;
}