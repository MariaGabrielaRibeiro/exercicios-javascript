// Previsõs explicadas em comentários:

// "55" -> O operador + com string faz concatenação (junta os textos).
console.log("5" + "5");

// 0 -> O operador - não funciona com texto, então o Javascript converte a string "5" em número e subtrai.
console.log("5" - 5);

// "105" -> Primeiro soma os números (5 + 5 = 10) e depois concatena com a string "5".
console.log(5 + 5 + "5");

// "555" -> Primeiro junta "5" com 5 ("55") e depois junta com o outro 5 ("555").
console.log("5" + 5 + 5);

// "string" -> 5 + "5" vira string "55", e o operador typeof lê o tipo do resultado. 
console.log(typeof (5 + "5"));