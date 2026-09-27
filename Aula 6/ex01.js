const pessoa = {
  nome: "Maria Gabriela",
  idade: 19,
  curso: "Análise e Desenvolvimento de Sistemas",
  hobbies: ["Assistir filmes e séries", "Ler", "Cozinhar"],
  contato: {
    email: "mariaribeiro49170@email.com"
  }
};

console.log(`Olá! Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} anos e faço o curso de ${pessoa.curso}.
Meus hobbies favoritos são: ${pessoa.hobbies.join(", ")}.
Você pode falar comigo pelo e-mail: ${pessoa.contato.email}.`);
