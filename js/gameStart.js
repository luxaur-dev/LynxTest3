// gameStart.js
// Запускает таймер, сбрасывает поле и открывает доступ для кликов

const tileField = document.getElementById("tilefield");
const tiles = document.getElementsByClassName("tile");
let isGameStarted = false;

function gameStart() {
	if (!isGameStarted) {
  	tileField.style.pointerEvents = "auto";
	
	resetTimer();
    timerStart();
	
	resetTiles();
    colorGen();
	
	successCounter = 0;
	isGameStarted = true;
	}
}

function resetTiles () {
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].style.background = "#FFFFFF";
		tiles[i].style.pointerEvents = "auto";
	}
}