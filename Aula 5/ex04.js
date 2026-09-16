function inverter(array) {
    const novoArray = [];
    // Percorre o array original de trás para frente
    for (let i = array.length - 1; i >= 0; i--) {
        novoArray.push(array[i]);
    }
    return novoArray;
}

// Provando o funcionamento
const original = ["A", "B", "C", "D"];
const invertido = inverter(original);

console.log("Array Invertido:", invertido); 
console.log("Array Original (não mudou):", original); 