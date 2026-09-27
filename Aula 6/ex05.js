const produtos = [
  { nome: "Teclado Mecânico", preco: 250.00, estoque: 15 },
  { nome: "Mouse Gamer", preco: 120.00, estoque: 0 },
  { nome: "Monitor 24", preco: 899.90, estoque: 5 },
  { nome: "Headset Bluetooth", preco: 350.00, estoque: 8 }
];

// Convertendo para String JSON (formatada com indentação de 2 espaços)
const produtosJSON = JSON.stringify(produtos, null, 2);
console.log("--- Convertido para JSON (String) ---");
console.log(produtosJSON);

// Convertendo de volta para Objeto JavaScript
const produtosObjeto = JSON.parse(produtosJSON);
console.log("\n--- Convertido de volta para Objeto ---");

// Provando o acesso à propriedade do primeiro elemento
console.log(`Acessando o primeiro produto: ${produtosObjeto[0].nome}`);
