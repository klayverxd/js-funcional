const carrinho = [
	{nome: 'Caneta', qtde: 10, preco: 7.99, fragil: true},
	{nome: 'Impressora', qtde: 1, preco: 649.5, fragil: true},
	{nome: 'Caderno', qtde: 4, preco: 27.1, fragil: false},
	{nome: 'Lapis', qtde: 3, preco: 5.82, fragil: false},
	{nome: 'Tesoura', qtde: 1, preco: 19.2, fragil: true},
];

// 1. fragil == true
// 2. qtde * preco -> total
// 3. media totais

const fragil = elem => elem.fragil;

const getTotal = item => item.qtde * item.preco;

const getMedia = (acc, el) => {
	const novaQtde = acc.qtde + 1;
	const novoTotal = acc.total + el;

	return {
		qtde: novaQtde,
		total: novoTotal,
		media: novoTotal / novaQtde,
	};
};

const mediaInicial = {qtde: 0, total: 0, media: 0};

const media = carrinho
	.filter(fragil)
	.map(getTotal)
	.reduce(getMedia, mediaInicial).media;

console.log(`A média é ${media}`);
