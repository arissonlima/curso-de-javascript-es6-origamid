const pessoa = new Object({
  nome: "Arisson",
});

console.log(pessoa);

const carro = {
  marca: "Marca",
  rodas: 4,
  acelerar() {
    return this.marca + " acelerou...";
  },
  buzinar() {
    return this.marca + " buzinou...";
  },
};

const honda = Object.create(carro);
console.log(honda);

// const moto = {
//   rodas: 2,
// };

// moto.rodas = 5;

// console.log(moto);

const moto = {};

Object.defineProperties(moto, {
  rodas: {
    value: 2,
    configurable: false,
  },
});

console.log(moto);

// EXERCÍCIOS //

// Crie uma função que verifique
// corretamente o tipo de dado

function verificarDado(dado) {
  return Object.prototype.toString.call(dado);
}

console.log(verificarDado("string"));

// Crie um objeto quadrado com
// a propriedade lados e torne
// ela imutável

const quadrado = {};
Object.defineProperties(quadrado, {
  lados: {
    value: 4,
    enumerable: true,
  },
});

quadrado.lados = 10;

console.log(quadrado);

// Previna qualquer mudança
// no objeto abaixo
const configuracao = {
  width: 800,
  height: 600,
  background: "#333",
};

Object.freeze(configuracao);

// Liste o nome de todas
// as propriedades do
// protótipo de String e Array

console.log(Object.getOnPropertiesName(String.prototype));
console.log(Object.getOnPropertiesName(Array.prototype));
