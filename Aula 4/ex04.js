function ehPrimo(n) {
  if (n < 2) return false;

  // Testa apenas até a raiz quadrada de n
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

// Começa em 2, pois 1 não é primo
for (let i = 2; i <= 50; i++) {
  if (ehPrimo(i)) {
    console.log(i);
  }
}