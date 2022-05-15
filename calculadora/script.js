
function inserir(num){
	var numero = document.getElementById('visor').innerHTML;
	document.getElementById('visor').innerHTML = numero + num;
};

function limparVisor(){
	document.getElementById('visor').innerHTML = '';
};

function del(){
	var resultado = document.getElementById('visor').innerHTML;
	document.getElementById('visor').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
	var resultado = document.getElementById('visor').innerHTML;
	if (resultado){
		document.getElementById('visor').innerHTML = eval(resultado);
	}else{
		document.getElementById('visor').innerHTML = 0;
	};
};