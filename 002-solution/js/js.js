(function () {
	function init() {
		var novaTabela = document.createElement("table");
		document.body.appendChild(novaTabela);
		for (var i = 0; i < 3; i++){
			var linha = novaTabela.insertRow(i);
			for ( var j = 0; j < 3; j++){
				var col = linha.insertCell(j);
				if(i==1 && j==1){
					col.className += "Black";
				}
				if(i!=1 && j!=1){
					col.className += "White";
				}
				}	
		}
	}

	window.addEventListener('load', function() { init(); });
	

})();