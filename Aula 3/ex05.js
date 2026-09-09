// 1. '==' olha só o valor (dá true). '===' olha o valor e o tipo (dá false).
console.log(5 == "5", 5 === "5"); // true false

// 2. Texto vazio "" é falso. Texto com "0" é verdadeiro. Número 0 é falso.
console.log(Boolean(""), Boolean("0"), Boolean(0)); // false true false

// 3. Qualquer texto entre aspas é verdadeiro, até a palavra "false". Por isso entra no if.
if ("false") console.log("surpresa!"); // surpresa!
