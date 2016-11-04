(function() {
	var SIZE = 3;
	var MAX_CLICKS = 10;
	var isGameOver;
	var clicks;
	function $(id) {
		return document.getElementById(id);
	}
	function invert(i, j) {
		var table = $('board');
		if (i >= 0 && j >= 0 && i < SIZE && j < SIZE) {
			var celula = table.rows[i].cells[j];
			var currentClass = celula.className;
			var newClass = currentClass == 'Black' ? 'White' : 'Black';
			celula.className = newClass;
		}
	}
	function checkGameOver() {
		var table = $('board');
		var count1 = 0;
		var count2 = 0;
		for (var i = 0; i < SIZE; i++) {
			var linha = table.rows[i];
			for (var j = 0; j < SIZE; j++) {
				var celula = linha.cells[j];
				var currentClass = celula.className;
				if (currentClass == 'Black') {
					count1++;
				} else if (currentClass == 'White') {
					count2++;
				} else {
					throw new Error('Cor inesperada: ' + currentClass + '.');
				}
			}
		}
		var goal = Math.pow(SIZE, 2);
		if (count1 == goal || count2 == goal) {
			gameOver(true);
		}
		if (clicks == MAX_CLICKS) {
			gameOver(false);
		}
	}
	function gameOver(win) {
		if (win) {
			alert('You win (with ' + clicks + ' clicks)!');
		} else {
			alert('You lose!');
		}
		var bt = $('bt-play-again');
		bt.className = '';
		isGameOver = true;
	}
	function playerClick(sender) {
		clicks++;
		var linha = sender.parentNode.rowIndex;
		var celula = sender.cellIndex;
		invert(linha, celula);
		invert(linha - 1, celula);
		invert(linha, celula + 1);
		invert(linha + 1, celula);
		invert(linha, celula - 1);
		checkGameOver();
	}
	function initBoard() {
		isGameOver = false;
		clicks = 0;
		var center = (SIZE - 1) / 2;
		var table = $('board');
		var contents = []
		for (var i = 0; i < SIZE; i++) {
			contents.push('<tr>');
			for (var j = 0; j < SIZE; j++) {
				contents.push('<td class="' + (i == center && j == center ? 'Black' : 'White') + '"></td>');
			}
			contents.push('</tr>');
		}
		table.innerHTML = contents.join('');
		for (var i = 0; i < SIZE; i++) {
			var linha = table.rows[i];
			for (var j = 0; j < SIZE; j++) {
				var celula = linha.cells[j];
				celula.addEventListener('click', function() {
					if (isGameOver == false) {
						playerClick(this);
					}
				});
			}
		}
	}
	function init() {
		initBoard();
	}
	window.addEventListener('load', function() {
		init();
	});
})();
