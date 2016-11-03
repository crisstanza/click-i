(function () {
	function init() {
		var novaTabela = document.createElement("table");
		document.body.appendChild(novaTabela);
		for (var i = 0; i < 3; i++){
			var linha = novaTabela.insertRow(i);
			for ( var j = 0; j < 3; j++){
				linha.insertCell(j);
			}
		}
	}

	window.addEventListener('load', function() { init(); });
	

})();