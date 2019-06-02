// checkGameState.js
// Сверяет цвета открытых пар плиток, контролирует прогресс игровой сессии и поведение плиток

let successCounter = 0;

function checkGameState() {
	const tile1 = document.getElementById(openedTiles[0]);
	const tile2 = document.getElementById(openedTiles[2]);
	
  
	const failedTurn = function() {
		tile1.style.background = '#FFF';
		tile2.style.background = '#FFF';
		tile1.style.pointerEvents = 'auto';
		tile2.style.pointerEvents = 'auto';
		
		openedTiles = [];
	}

	const goodTurn = function() {
		tile1.style.pointerEvents = 'none';
		tile2.style.pointerEvents = 'none';
		
		successCounter += 1;
		openedTiles = [];
	}

	// Проверяет количество открытых плиток и сверяет цвета
	if (openedTiles.length === 4) {
		if (openedTiles[1] === openedTiles[3] && openedTiles[0] !== openedTiles[2]) {
  		goodTurn();
		}
		else {
		setTimeout(failedTurn, 500);
		}
	}

	if (successCounter === 8) {
		window.clearInterval(interval);
		return showPopup()
	}
}