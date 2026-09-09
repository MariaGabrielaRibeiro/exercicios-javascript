// Defina os valores das notas (de 0 a 10) e da frequencia (em porcentagem)
const nota1 = 8.0;
const nota2 = 7.0;
const nota3 = 7.5;
const frequencia = 74;

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7 && frequencia >= 75){
    console.log("Aprovado")
}else if (media >=4 && frequencia >=75){
    console.log("Em recuperação")
}else{
    console.log("Reprovado")
}