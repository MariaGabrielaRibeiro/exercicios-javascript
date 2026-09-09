const peso = 70;
const altura = 1.75;
const imc = peso / (altura ** 2);

let status = "";

if (imc < 18.5) {
    status = "Abaixo do peso";
} else if (imc <= 24.9) {
    status = "Peso normal";
} else if (imc <= 29.9) {
    status = "Sobrepeso";
} else {
    status = "Obesidade";
}

console.log(`IMC: ${imc.toFixed(2)} - ${status}`);