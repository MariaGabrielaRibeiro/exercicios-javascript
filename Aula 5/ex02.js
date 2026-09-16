const temperaturas = [22, 25, 19, 30, 28, 21, 24];

// Calcula a soma usando reduce e calcula a média
const soma = temperaturas.reduce((acc, temp) => acc + temp, 0);
const media = soma / temperaturas.length;

// Encontra o maior e o menor usando Math
const maior = Math.max(...temperaturas);
const menor = Math.min(...temperaturas);

// Conta os dias usando filter
const diasAcimaDaMedia = temperaturas.filter(temp => temp > media).length;

console.log(`Média: ${media.toFixed(2)}`);
console.log(`Maior: ${maior}`);
console.log(`Menor: ${menor}`);
console.log(`Dias acima da média: ${diasAcimaDaMedia}`);

