function calcularGorj (event){

	event.preventDefault();
	let custo = document.getElementById('custo').value;
	let servico = document.getElementById('servico').value;
	let qtdeP = document.getElementById('qtdeP').value;

	if(custo == '' | servico == ''){
		alert("Preencha os valores!");
		return;
	}

	if (qtdeP == '' | qtdeP <= 1) {
		qtdeP = 1;
		document.getElementById('cadaP').style.display = "none";
	} else {
		document.getElementById('cadaP').style.display = "block";
	}

	let total = (custo * servico) / qtdeP;
	total = total.toFixed(2);

	document.getElementById('res').innerHTML = total;	
	document.getElementById('resultado').style.display = "block";
}

document.getElementById('resultado').style.display = "none";
document.getElementById('cadaP').style.display = "none";

document.getElementById('formulario').addEventListener('submit',calcularGorj);