function bomDia() {
	console.log('Bom dia!');
}

const boaTarde = function () {
	console.log('Boa tarde!');
};

// passando funções como parâmetros
function executarQualquerCoisa(fn) {
	if (typeof fn === 'function') fn();
	else console.log(`${fn} Não é uma função`);
}

executarQualquerCoisa(3);
executarQualquerCoisa(bomDia);
executarQualquerCoisa(boaTarde);

// retornar função a partir de outra função
function potencia(base) {
	return function (exp) {
		return Math.pow(base, exp);
	};
}

const potenciaDe2 = potencia(2);
console.log(potenciaDe2(8));

const pot34 = potencia(3)(4);
console.log(pot34);
