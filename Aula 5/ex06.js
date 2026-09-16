function removerDuplicatas(array) {
    const semDuplicatas = [];
    
    for (let i = 0; i < array.length; i++) {
        // Se o novo array ainda NÃO inclui o número atual, adiciona ele
        if (!semDuplicatas.includes(array[i])) {
            semDuplicatas.push(array[i]);
        }
    }
    
    return semDuplicatas;
}

// Testando o desafio
const numeros = [1, 2, 2, 3, 4, 4, 5];
const resultado = removerDuplicatas(numeros);

console.log("Array original:", numeros);
console.log("Sem duplicatas:", resultado);