const produtos = [
  { nome: "Teclado Mecânico", preco: 250.00, estoque: 15 },
  { nome: "Mouse Gamer", preco: 120.00, estoque: 0 },
  { nome: "Monitor 24", preco: 899.90, estoque: 5 },
  { nome: "Headset Bluetooth", preco: 350.00, estoque: 8 }
];

let produtoMaisCaro = produtos[0];
let quantidadeSemEstoque = 0;

produtos.forEach(produto => {
  // Encontra o mais caro
  if (produto.preco > produtoMaisCaro.preco) {
    produtoMaisCaro = produto;
  }
  
  // Conta os sem estoque
  if (produto.estoque === 0) {
    quantidadeSemEstoque++;
  }
});

console.log(`Produto mais caro: ${produtoMaisCaro.nome} (R$ ${produtoMaisCaro.preco.toFixed(2)})`);
console.log(`Quantidade de produtos sem estoque: ${quantidadeSemEstoque}`);
