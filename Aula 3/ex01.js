const numero = 30;
const parOuImpar = numero % 2 === 0 ? "Par" : "Ímpar";

let tipo;

if(numero === 0){
    tipo = "Zero";
}else if(numero > 0){
    tipo = "Positivo";
}else{
    tipo = "Negativo";
}

console.log(`O número é ${parOuImpar} e ${tipo}`);
