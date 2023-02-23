// - - - - - - - - - - - - - - - - - -
// - - VERIFICAÇÃO DO TIPO DE DADO - -

var time = "Palmeiras";
console.log(time);
console.log(typeof time);
// typeof serve para verificar o tipo da variável em questão.

// - - - - - - - - - - - - - -
// - - SOMANDO DUAS STRINGS - -

var serieEmIngles = "[EN] Two And a Half Men";
var serieEmPortugues = "[PT-BR] Dois Homens e Meio";
var serie = serieEmIngles + " - " + serieEmPortugues;
console.log(serie);

// - - - - - - - - - - - - - - -
// - - SOMANDO Nº COM STRING - -

var nomeDaSerie = "You";
var qtdTemporadas = 4;
var info = nomeDaSerie + qtdTemporadas;
console.log(typeof info);
// A soma de uma string com number o tipo será sempre uma string.

// - - - - - - - - - - - - - - - -
// - - - - TEMPLATE STRING - - - -

// Frase de exemplo: Thing outside the box!

var think = "Think",
  outside = "outside",
  the = "the",
  box = "box";

var frase = `${think} ${outside} ${the} ${box}!`;
console.log(frase);

// - - - - - - - - - - - - - - -
// - - - - TIPO DE DADOS - - - -

var nome = "Arisson"; // string
var idade = 34; // number
var possuiFaculdade = true; // boolean
var simbolo = Symbol(); // symbol
var time; // undefined
var objeto = {}; // objeto
var comida = null; // null

// Declare uma variável contendo uma string
var school = "Origamid";
// Declare uma variável contendo um número dentro de uma string
var year = "2023";
// Declare uma variável com a sua idade
var age = 34;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var myName = "Arisson";
var myMiddlename = "Lima";
var fullName = myName + " " + myMiddlename;
console.log(fullName);
// Coloque a seguinte frase em uma variável: It's time
var phrase = "It's time!";
// Verifique o tipo da variável que contém o seu nome
console.log(typeof myName);
