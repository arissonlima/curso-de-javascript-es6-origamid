var idadeAtual = 16;
var idadeMinima = 18;
var podeTirarCarteira =
  idadeAtual >= idadeMinima
    ? "Apto para tirar a carteira"
    : "Não tem idade suficiente";

console.log(podeTirarCarteira);
