const primeiroElemento = arrayOuString => arrayOuString[0];

const primeiraLetra = string => string[0];

const letraMinuscula = letra => letra.toLowerCase();

let p = new Promise(function (resolve) {
	resolve(['Klayver', 'Francisco', 'Joao']);
});

p.then(primeiroElemento)
	.then(primeiroElemento)
	.then(letraMinuscula)
	.then(console.log);
