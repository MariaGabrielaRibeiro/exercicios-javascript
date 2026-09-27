const produtos = [
  { nome: "Teclado Mecânico", preco: 250.00, estoque: 15 },
  { nome: "Mouse Gamer", preco: 120.00, estoque: 0 },
  { nome: "Monitor 24'", preco: 899.90, estoque: 5 },
  { nome: "Headset Bluetooth", preco: 350.00, estoque: 8 }
];

let valorTotalEstoque = 0;

produtos.forEach(produto => {
  console.log(`${produto.nome} — R$ ${produto.preco.toFixed(2)} (${produto.estoque} em estoque)`);
  valorTotalEstoque += produto.preco * produto.estoque;
});

console.log(`\nValor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);
