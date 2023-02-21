var seriesFavoritas = [
  "Two and a Half Men",
  "The Big Bang Theory",
  "How I Met Your Mother",
  "That '70s Show",
  "The Office",
];

console.log(`Estou assistindo no momento: ${seriesFavoritas[4]}`);

seriesFavoritas.pop();
seriesFavoritas.push("You");

console.log(seriesFavoritas);

console.log(seriesFavoritas.length);

// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }

var i = 0;
while (i <= 10) {
  console.log(i);
  i++;
}

var bandasFavoritas = ["Queen", "Guns N' Roses", "Maneskin"];
for (var i = 0; i < bandasFavoritas.length; i++) {
  console.log(bandasFavoritas[i]);
}

var frontEndFrameworks = ["React", "Vue.js", "Angular"];
for (var i = 0; i < frontEndFrameworks.length; i++) {
  console.log(frontEndFrameworks[i]);
  if (frontEndFrameworks[i] === "React") {
    break;
  }
}

var filmesFavoritos = [
  "Let's Go to Prison",
  "The Internship",
  "Back to the Future",
];

filmesFavoritos.forEach(function (movieName, index) {
  console.log(movieName, index);
});

// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeaoDoMundo = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
for (var i = 0; i < brasilCampeaoDoMundo.length; i++) {
  console.log(`O Brasil ganhou a copa de ${brasilCampeaoDoMundo[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.
var ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
