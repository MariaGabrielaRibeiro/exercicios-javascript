// Criando o array com 5 filmes/jogos favoritos
const favoritos = ["Franquia John Wick", "Vingadores: Ultimato", "Velozes e Furiosos 5: Operação Rio", "Mad Max: Estrada da Fúria", "Franquia Resident Evil"];

// 1. Imprimindo o primeiro item
console.log("Primeiro item:", favoritos[0]);

// 2. Imprimindo o último item usando length
console.log("Último item:", favoritos[favoritos.length - 1]);

// 3. Imprimindo o total de itens
console.log("Total de itens:", favoritos.length);

// 4. Imprimindo a lista completa 
console.log("\nLista completa:");
for (let i = 0; i < favoritos.length; i++) {
    console.log(`${i + 1}. ${favoritos[i]}`);
}