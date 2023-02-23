// window.alert("Hello World!");

let href = window.location.href;
console.log(href);

const h1Selecionado = document.querySelector("h1");
console.log(h1Selecionado);

const h1Classes = h1Selecionado.classList;
console.log(h1Classes);

h1Selecionado.addEventListener("click", function () {
  console.log(h1Selecionado.innerText);
});

// Retorne o url da página atual utilizando o objeto window
const urlAtual = document.location.href;

// Selecione o primeiro elemento da página que
// possua a classe ativo
const ativo = document.querySelector(".ativo");

// Retorne a linguagem do navegador
const linguagemNavegador = navigator.language;

// Retorne a largura da janela
const larguraJanela = window.innerWidth;
