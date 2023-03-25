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

// const reduceAulas = aulas.reduce((acumulador, item) => {
//   return acumulador + item;
// }, 0);

// console.log(reduceAulas);

// const numeros = [10, 33, 35, 43, 45, 55, 88, 00];

// const maiorNumero = numeros.reduce((anterior, atual) => {
//   if (anterior > atual) {
//     return anterior;
//   } else {
//     return atual;
//   }
// });

// console.log(maiorNumero);

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

const maiores15 = aulas.filter((aula) => {
  return aula.min > 15;
});

console.log(maiores15);

// EXERCÍCIOS

// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Quejo",
    preco: "R$ 10,60",
  },
];
