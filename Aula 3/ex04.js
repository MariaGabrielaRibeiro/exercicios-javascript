/* 
O break serve para parar o switch assim que o mês certo é encontrado. 
Sem ele, o código continua rodando em cascata e executa todos os meses seguintes.
*/

const numeroMes = 3; 
let nomeMes;

switch (numeroMes) {
    case 1: nomeMes= "Janeiro"; break;
    case 2: nomeMes= "Fevereiro"; break;
    case 3: nomeMes= "Março"; break;
    case 4: nomeMes= "Abril"; break;
    case 5: nomeMes= "Maio"; break;
    case 6: nomeMes= "Junho"; break;
    case 7: nomeMes= "Julho"; break;
    case 8: nomeMes= "Agosto"; break;
    case 9: nomeMes= "Setembro"; break;
    case 10: nomeMes= "Outubro"; break;
    case 11: nomeMes= "Novembro"; break;
    case 12: nomeMes= "Dezembro"; break;
    default: nomeMes= "Mês inválido"; break;
}

console.log(`O mês correspondente é ${nomeMes}`);