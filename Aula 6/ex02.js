const pessoa = {
  nome: "Maria Gabriela",
  idade: 19,
  curso: "Análise e Desenvolvimento de Sistemas",
  hobbies: ["Assistir filmes e séries", "Ler", "Cozinhar"],
  contato: {
    email: "mariaribeiro49170@email.com"
  },
  resumo: function() {
    return `Nome: ${this.nome} | Curso: ${this.curso}`;
  }
};

const informacoesResumidas = pessoa.resumo();
console.log(informacoesResumidas);
