const nums = [1, 2, 3, 4, 5];
const dobro = (n, i, a) => n * 2 + i + a.length;

console.log(nums.map(dobro));

const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa'];
const primeiraLetra = texto => texto[0];
const letras = nomes.map(primeiraLetra);

console.log(nomes, letras);

const carrinho = [
	{nome: 'Caneta', qtde: 10, preco: 7.99},
	{nome: 'Impressora', qtde: 0, preco: 649.5},
	{nome: 'Caderno', qtde: 4, preco: 27.1},
	{nome: 'Lapis', qtde: 3, preco: 5.82},
	{nome: 'Tesoura', qtde: 1, preco: 19.2},
];

// const getNome = item => item.nome;
// console.log(carrinho.map(getNome));

// const getTotal = item => item.qtde * item.preco;
// const totais = carrinho.map(getTotal);
// console.log(totais);

Array.prototype.meuMap = function (fn) {
	const novoArray = [];
	for (let i = 0; i < this.length; i++) {
		const result = fn(this[i], i, this);
		novoArray.push(result);
	}
	return novoArray;
};

const getNome = item => item.nome;
console.log(carrinho.meuMap(getNome));

const getTotal = item => item.qtde * item.preco;
const totais = carrinho.meuMap(getTotal);
console.log(totais);
