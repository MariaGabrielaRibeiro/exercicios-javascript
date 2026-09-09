let soma = 0;

for (let i = 1; i <= 1000; i++) {
    if (i % 2 === 0) {
        soma += i;
    }
}

console.log(`Resultado: ${soma}`); // Deve exibir 250500
