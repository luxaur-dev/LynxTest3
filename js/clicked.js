// clicked.js
// Обрабатывает клики по полю, предотвращает недопустимые клики

let openedTiles = [];

tileField.addEventListener("click", clicker);

function clicker(event) {
	let clickedTile = event.target.id;
	let clicked = document.getElementById(clickedTile);
	
    if (openedTiles.length != 4 && clickedTile != "tilefield") {
		clicked.style.background = colors[clickedTile];
    	clicked.style.pointerEvents = "none";
		
    	openedTiles.push(clickedTile, colors[clickedTile]);
		
		checkGameState();
    }
}