function contarOcorrencias(array, valor) {
    let contador = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            contador++;
        }
    }
    return contador;
}

// Testando a função
const nomes = ["Ana", "Pedro", "Ana", "Carlos", "Ana", "Pedro"];
console.log("Vezes que 'Ana' aparece:", contarOcorrencias(nomes, "Ana"));
console.log("Vezes que 'Carlos' aparece:", contarOcorrencias(nomes, "Carlos"));