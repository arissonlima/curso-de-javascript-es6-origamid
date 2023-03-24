const eReaders = ["Kindle", "Lev", "Kobo"];

eReaders.forEach((item, index, array) => {
  console.log(item, index, array);
});

// O FOREACH() E O MAP() PRATICAMENTE FAZEM A MESMA COISA
// PORÉM A DIFERENÇA É QUE SE EU ADICIONAR UMA VARIÁVEL PARA RECEBER UM RETORNO
// ELA VAI RETORNAR UNDEFINED
// JÁ SE EU ADICIONAR UMA VARIÁVEL AO MAP, ELE VAI CONSEGUIR ME RETORNAR ALGO

const carros = ["HB20", "Corolla", "Hilux"];

const novoArray = carros.map((item, index, array) => {
  return item.toUpperCase();
});

console.log(carros);
console.log(novoArray);

// const aulas = [
//   {
//     nome: "HTML 1",
//     min: 15,
//   },
//   {
//     nome: "HTML 2",
//     min: 10,
//   },
//   {
//     nome: "CSS 1",
//     min: 20,
//   },
//   {
//     nome: "JS 1",
//     min: 25,
//   },
// ];

// const tempoDasAulas = aulas.map((aula) => aula.min);
// console.log(tempoDasAulas);

// const aulas = [10, 25, 30];

const reduceAulas = aulas.reduce((acumulador, item) => {
  return acumulador + item;
}, 0);

console.log(reduceAulas);

const numeros = [10, 33, 35, 43, 45, 55, 88, 00];

const maiorNumero = numeros.reduce((anterior, atual) => {
  if (anterior > atual) {
    return anterior;
  } else {
    return atual;
  }
});

console.log(maiorNumero);

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   return acumulador;
// }, {});

// O REDUCE FAZ A LEITURA DA ESQUERDA PARA A DIREITA
// MAS EXISTE TAMBÉM O REDUCERIGHT QUE FAZ O PERCURSO INVERSO

const frutas = ["Banana", "Pêra", "Uva"];

const temUva = frutas.some((item) => {
  return item === "Uva";
});

console.log(temUva);

// SOME E EVERY
