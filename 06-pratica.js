// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var me = {
  name: "Arisson",
  middleName: "Lima",
  age: 34,
};

// Crie um método no objeto anterior, que mostre o seu nome completo
me.fullName = function () {
  return `${this.name} ${this.middleName}`;
};
console.log(me.fullName());

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};

carro.preco = 7000;
console.log(carro.preco);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
var dog = {
  raca: "Labrador",
  cor: "Preta",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "mulher") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};

console.log(dog.latir("homem"));
