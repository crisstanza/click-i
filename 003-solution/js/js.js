(function () {
	function inverterCor(element) {
		if (element.className == "Black"){
			element.className = "White";
		}
		else {
			element.className = "Black";
		}
	}
	function updateTable (element){
		var tab = document.getElementById('tab')
		var i = element.parentNode.rowIndex;
		var j = element.cellIndex;
		inverterCor (element);
		
		var tmp = i+1;
		if (tmp < 3){
			inverterCor(tab.rows[tmp].cells[j]);
		}
		tmp = i-1;
		if (tmp >= 0){
			inverterCor(tab.rows[tmp].cells[j]);
		}
		var tmp = j+1;
		if (tmp < 3){
			inverterCor(tab.rows[i].cells[tmp]);
		}
		var tmp = j-1;
		if (tmp >= 0){
			inverterCor(tab.rows[i].cells[tmp]);
		}

		
	}
	
	function init() {
		var novaTabela = document.createElement("table");
		novaTabela.id ='tab';
		document.body.appendChild(novaTabela);
		for (var i = 0; i < 3; i++){
			var linha = novaTabela.insertRow(i);
			for ( var j = 0; j < 3; j++){
				var col = linha.insertCell(j);
				if(i==1 && j==1){
					col.className += "Black";
				} else {
					col.className += "White";
				}
				//console.log('linha: ' + i + ' col: ' + j);
				col.addEventListener("click", function(){
					updateTable(this);
				});

			}	
		}
	}

	window.addEventListener('load', function() { init(); });


})();