function soma(a) {
	return function (b) {
		return function (c) {
			return a + b + c;
		};
	};
}

console.log(soma(2)(3)(4));



function calcular(a) {
	return function (b) {
		return function (fn) {
			return fn(a, b);
		};
	};
}

function subtrair(a, b) {
	return a - b;
}

function multiplicar(a, b) {
	return a * b;
}

const resultado1 = calcular(10)(5)(subtrair);
console.log(resultado1);

const resultado2 = calcular(10)(5)(multiplicar);
console.log(resultado2);
