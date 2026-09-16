const ano = 2024; // Teste com 2024, 1900 ou 2000

// É bissexto se: divisível por 4 E (NÃO divisível por 100 OU divisível por 400)
const ehBissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

if (ehBissexto) {
    console.log(`${ano} é Bissexto!`);
} else {
    console.log(`${ano} NÃO é Bissexto!`);
}
