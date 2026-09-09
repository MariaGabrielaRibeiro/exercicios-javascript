function celsiusParaFahrenheit(c) {
    return c * 9 / 5 + 32;
}

for (let c = 0; c <= 40; c += 5) {
    console.log(`${c}°C = ${celsiusParaFahrenheit(c)}°F`);
}
