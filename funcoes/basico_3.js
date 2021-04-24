// arrow function

const felizNatal = () => console.log("Feliz natal!!");
felizNatal();

const saudacao = (nome) => `Fala ${nome}!!!`;
console.log(saudacao("Klayver"));

const somar = (...numeros) => {
    console.log(Array.isArray(numeros));
    let total = 0;
    for (let n of numeros) {
        total += n;
    }

    return total;
};

console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5, 6));
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9));

const subtrair = (a, b) => a - b;
console.log(subtrair(3, 2));

const potencia = (base) => (exp) => Math.pow(base, exp);
console.log(potencia(2)(8));

// this
Array.prototype.ultimo = function () {
    console.log(this[this.length - 1]);
};

Array.prototype.primeiro = function () {
    console.log(this[0]);
};

const numeros = [1, 2, 3];
numeros.ultimo();
numeros.primeiro();
