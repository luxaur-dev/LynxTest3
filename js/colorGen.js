// colorGen.js
// Перемешивает цвета плиток

function colorGen() {
	colors = [
		'#FE0000', '#FC00F1', '#002EFE', '#FFB901',
		'#FE0000', '#FC00F1', '#002EFE', '#FFB901',
        '#21DC13', '#00FBE4', '#D9DC13', '#7B7B7B',
  		'#21DC13', '#00FBE4', '#D9DC13', '#7B7B7B'
	];

	colors.sort(() => Math.random() - 0.5);
	
	return colors
}