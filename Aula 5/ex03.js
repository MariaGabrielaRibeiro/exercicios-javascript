// Começando com 3 nomes na fila
const fila = ["Ana", "Bruno", "Carlos"];
console.log("Fila inicial:", fila);

// Chegam 2 clientes
fila.push("Daniela");
fila.push("Eduardo");
console.log("Clientes chegaram:", fila);

// Atendendo 2 clientes
const atendido1 = fila.shift();
console.log(`Atendendo: ${atendido1}`);

const atendido2 = fila.shift();
console.log(`Atendendo: ${atendido2}`);

// Mostrando a fila restante
console.log("Fila restante:", fila);