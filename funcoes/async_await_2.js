function gerarNumerosEntre(min, max, numerosProibidos) {
	if (min > max) [max, min] = [min, max];

	return new Promise((resolve, reject) => {
		const fator = max - min + 1;
		const aleatorio = parseInt(Math.random() * fator) + min;

		if (numerosProibidos.includes(aleatorio)) {
			reject('Número repetido!');
		} else {
			resolve(aleatorio);
		}
	});
}

async function gerarMegaSena(qteNumeros, tentativas = 1) {
	try {
		const numeros = [];

		for (let _ of Array(qteNumeros).fill()) {
			numeros.push(await gerarNumerosEntre(1, 60, numeros));
		}

		return numeros;
	} catch (err) {
		if (tentativas > 10) {
			throw 'Não deu certo!!!';
		}
		gerarMegaSena(qteNumeros, tentativas + 1);
	}
}

gerarMegaSena(6).then(console.log).catch(console.log);
