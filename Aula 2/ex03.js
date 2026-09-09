// Previsão: "55" -> O '+' junta (concatena) o texto "5" com o número 5.
console.log("5" + 5); // Saída: "55"

// Previsão: 0 -> O '-' não funciona com texto, então o JS converte o "5" em número e subtrai.
console.log("5" - 5); // Saída: 0

// Previsão: "105" -> Primeiro soma os números (5 + 5 = 10), depois junta com o texto "5".
console.log(5 + 5 + "5"); // Saída: "105"

// Previsão: "555" -> Começa com texto, então o primeiro '+' junta ("55"). O segundo '+' junta o outro 5 também.
console.log("5" + 5 + 5); // Saída: "555"

// Previsão: "string" -> 5 + "5" vira o texto "55". O 'typeof' diz que o tipo disso é uma string.
console.log(typeof (5 + "5")); // Saída: "string"
