function fatorial(n) {
    let resultado = 1;
    for (let i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}

console.log(`5! = ${fatorial(5)}`); // 120
console.log(`0! = ${fatorial(0)}`); // Retorna 1 (o laço nem inicia, pois i vira 0 e 0 não é > 1)
