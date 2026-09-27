const produtos = [
  { nome: "Teclado Mecânico", preco: 250.00, estoque: 15 },
  { nome: "Mouse Gamer", preco: 120.00, estoque: 0 },
  { nome: "Monitor 24", preco: 899.90, estoque: 5 },
  { nome: "Headset Bluetooth", preco: 350.00, estoque: 8 }
];

function buscarPorNome(lista, nomeBuscado) {
  for (let produto of lista) {
    const { nome } = produto;
    if (nome.toLowerCase() === nomeBuscado.toLowerCase()) {
      return produto;
    }
  }
  return null;
}

// Testes corrigidos com aspas
console.log(buscarPorNome(produtos, "Mouse Gamer")); 
console.log(buscarPorNome(produtos, "Cadeira Gamer")); // Retorna null (correto)
