// Valores de peso (em kg) e altura (em cm)
const peso = 100;
const altura = 181;

// Converta a altura para metros (divida por 100)
const alturaMetros = altura / 100;

// Calcule o IMC
const imc = peso / (alturaMetros * alturaMetros);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);
