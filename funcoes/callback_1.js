const somaNoTerminal = (a, b) => console.log(a + b);

const subtraiNoTerminal = (a, b) => console.log(a - b);

const subtrai = (a, b) => a - b;

function exec(fn, a, b) {
    return fn(a, b);
}

exec(somaNoTerminal, 56, 38);
exec(subtraiNoTerminal, 182, 27);

const r = exec(subtrai, 56, 38);
console.log(r);

setInterval(() => console.log("Exec..."), 1000);
