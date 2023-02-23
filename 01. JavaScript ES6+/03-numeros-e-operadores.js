// * * * NÚMEROS * * * //

var idade = 34;
var gols = 1000;
var pi = 3.14;
var exp = 2e10;

console.log("Idade: " + idade);
console.log("Gols: " + gols);
console.log("PI:" + pi);
console.log("Exp:" + exp);

// * * * OPERADORES * * * //

var soma = 10 + 5;
var subtracao = 10 - 5;
var multiplicacao = 10 * 5;
var divisao = 10 / 5;
var exp = 10 ** 5;
var modulo = 10 % 5;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(exp);
console.log(modulo);

// EXERCÍCIO

// Qual o resultado da seguinte expressão?
var total = 10 + (5 * 2) / 2 + 20;
// o resultado é 35
console.log(total);

// Crie duas expressões que retornem NaN
var idade = +"35 anos";
var seriePreferida = +"The Big Bang Theory";
console.log(idade);
console.log(seriePreferida);

// Somar a string '200' com o número 50 e retornar 250
var n1 = +"200";
var n2 = 50;
var soma = n1 + n2;
console.log(soma);

// Incremente o número 5 e retorne o seu valor incrementado
var x = 5;
console.log(++x);

// Como dividir o peso por 2?
var numero = "80";
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)


