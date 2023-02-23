function quadrado(lado) {
  return lado * lado;
}

console.log(quadrado(2));

function pi() {
  return 3.14159;
}

var total = 1 * pi();
console.log(total);

function imc(peso, altura) {
  const imc = peso / (altura * 2);
  return imc;
}

console.log(imc(80, 1.8));

function corDoTime(time) {
  if (time === "Palmeiras") {
    console.log("As cores do Palmeiras são verde e branco.");
  } else if (time === "Flamingo") {
    console.log("As cores do Flamingo são preto e vermelho.");
  } else {
    console.log("Time inválido.");
  }
}

console.log(corDoTime("Palmeiras"));
