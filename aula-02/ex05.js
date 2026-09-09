const preco = "1250.50";

// Converte a string para o número decimal
const precoNumero = parseFloat(preco);

// Calcula o valor final com 10% de desconto (multiplicar por 0.90 remove 10%)
const precoComDesconto = precoNumero * 0.90;

// Formata usando .toFixed(2) para garantir duas casas decimais
console.log(`O preço com desconto é R$ ${precoComDesconto.toFixed(2)}`);