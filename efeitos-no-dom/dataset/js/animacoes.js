function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      const direcao = tabContent[index].dataset.anime;
      tabContent[index].classList.add("ativo", direcao);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}

initTabNav();

function initAccordeon() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    function activeAccordion() {
      this.classList.toggle("ativo");
      this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}

initAccordeon();

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Forma alternativa
    // window.scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}

initScrollSuave();

function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");

  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initAnimacaoScroll();

// const animais = document.getElementById("animais");
// console.log(animais);

// const gridSection = document.getElementsByClassName("grid-section");

// const primeiraLi = document.querySelector("li");
// console.log(primeiraLi.innerText);

// const primeiraUl = document.querySelector("ul");
// console.log(primeiraUl.innerHTML);

// const linkInterno = document.querySelector("[href^='#']");
// console.log(linkInterno);

// const animaisImg = document.querySelectorAll(".animais img");
// console.log(animaisImg[3]);

// // Retorne no console todas as imagens do site
// const allImgs = document.querySelectorAll("img");

// // Retorne no console apenas as imagens que começaram com a palavra imagem
// const imagens = document.querySelectorAll("img[src^='./img/imagem']");
// console.log(imagens);

// // Selecione todos os links internos (onde o href começa com #)
// const linksInternos = document.querySelectorAll("[href^='#']");
// console.log(linksInternos);

// // Selecione o primeiro h2 dentro de .animais-descricao
// const primeiroH2 = document.querySelector(".animais-descricao h2");
// console.log(primeiroH2);

// // Selecione o último p do site
// const paragrafos = document.querySelectorAll("p");
// console.log(paragrafos[paragrafos.length - 1]);

// const imgs = document.querySelectorAll("img");

// imgs.forEach(function (img, index, array) {
//   console.log(img);
//   console.log(index);
//   console.log(array);
// });

// const imgs = document.querySelectorAll("img");

// imgs.forEach((item) => {
//   console.log(item);
// });

// // EXERCÍCIOS

// // Mostre no console cada parágrado do site
// // Mostre o texto dos parágrafos no console

// const paragrafos = document.querySelectorAll("p");
// paragrafos.forEach((paragrafo) => {
//   console.log(paragrafo);
//   console.log(paragrafo.innerText);
// });

// // Como corrigir os erros abaixo:
// const imgs = document.querySelectorAll("img");

// imgs.forEach((item, index) => {
//   console.log(item, index);
// });

// let i = 0;
// imgs.forEach(() => {
//   console.log(i++);
// });

// imgs.forEach(() => i++);

// const imgs = document.querySelector("img");

// const srcImg = imgs.getAttribute("src");
// const altImg = imgs.setAttribute("alt", "Agora tem alt");
// const temAtributo = imgs.hasAttribute("id");
// const removerAlt = imgs.removeAttribute("alt");

// console.log(temAtributo);

// EXERCÍCIO

// // Adicione a classe ativo a todos os itens do menu

// const itensMenu = document.querySelectorAll(".menu a");

// itensMenu.forEach((item) => {
//   item.classList.add("ativo");
// });

// // Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

// itensMenu.forEach((item) => {
//   item.classList.remove("ativo");
// });

// itensMenu[0].classList.add("ativo");

// // Verifique se as imagens possuem o atributo alt

// const imgs = document.querySelectorAll("img");

// imgs.forEach((img) => {
//   const temAtributo = img.hasAttribute("alt");
//   console.log(img, temAtributo);
// });

// // Modifique o href do link externo no menu

// const link = document.querySelector('a[href^="http"]');
// link.setAttribute("href", "https://www.conradodigital.com.br");
// console.log(link);

// EXERCÍCIO

// // Verifique a distância da primeira imagem
// // em relação ao topo da página

// const img = document.querySelector("img");
// const imgTop = img.offsetTop;
// console.log(imgTop);

// // Retorne a soma da largura de todas as imagens

// function somaImagens() {
//   let soma = 0;
//   const imagens = document.querySelectorAll("img");
//   imagens.forEach((imagem) => {
//     soma = soma + imagem.offsetWidth;
//   });
//   console.log(soma);
// }

// window.onload = function () {
//   somaImagens();
// };

// // Verifique se os links da página possuem
// // o mínimo recomendado para telas utilizadas
// // com o dedo. (48px/48px de acordo com o google)

// const links = document.querySelectorAll("a");
// linka.forEach((link) => {
//   const linkWidth = link.offsetWidth;
//   const linkHeight = link.offsetHeight;
//   if (linkWidth >= 48 && linkHeight >= 48) {
//     console.log("Possui acessibilidad!");
//   } else {
//     console.log("Não possui acessibilidade!");
//   }
// });

// // Se o browser for menor que 720px,
// // adicione a classe menu-mobile ao menu

// const browserSmall = window.matchMedia("(max-width: 720px)").matches;
// if (browserSmall) {
//   const menu = document.querySelector(".menu");
//   menu.classList.add("menu-mobile");
// }

// const img = document.querySelector("img");

// function callback(e) {
//   console.log(e);
// }

// img.addEventListener("click", callback);

// const linkExterno = document.querySelector('a[href^="http"]');

// function handleLinkExterno(event) {
//   event.preventDefault();
//   console.log("Clicou!");
// }

// // linkExterno.addEventListener("click", handleLinkExterno);

// const imgs = document.querySelectorAll("img");

// function handleImg(event) {
//   console.log(event.currentTarget.getAttribute("src"));
// }

// imgs.forEach((img) => {
//   img.addEventListener("click", handleImg);
// });

// EXERCÍCIOS

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

// const linksInternos = document.querySelectorAll('a[href^="#"]');

// function handleLink(event) {
//   event.preventDefault();
//   linksInternos.forEach((link) => {
//     link.classList.remove("ativo");
//   });
//   event.currentTarget.classList.add("ativo");
// }

// linksInternos.forEach((link) => {
//   link.addEventListener("click", handleLink);
// });

// // Selecione todos os elementos do site começando a partir do body,
// // ao clique mostre exatamente quais elementos estão sendo clicados

// const todosElementos = document.querySelectorAll("body *");

// function handleElemento(event) {
//   event.currentTarget.remove();
// }

// todosElementos.forEach((elemento) => {
//   elemento.addEventListener("click", handleElemento);
// });

// // console.log(todosElementos);

// // Utilizando o código anterior, ao invés de mostrar no console,
// // remova o elemento que está sendo clicado, o método remove() remove um elemento

// // Se o usuário clicar na tecla (t), aumente todo o texto do site.

// function handleClickT(event) {
//   console.log(event.key);
//   if (event.key === "t") {
//     document.documentElement.classList.toggle("aumentarTexto");
//   }
// }

// // window.addEventListener("keydown", handleClickT);

// const menu = document.querySelector(".menu");

// const outerHTML = menu.outerHTML;
// const innerHTML = menu.innerHTML;
// const innerText = menu.innerText;

// menu.innerText = "<p>Texto</p>";
// menu.innerHTML = "<p>Texto</p>";

// console.log(outerHTML);
// console.log(innerHTML);
// console.log(innerText);

// // Duplique o menu e adicione ele em copy

// const menu = document.querySelector(".menu");
// const rodape = document.querySelector(".copy");

// const cloneMenu = menu.cloneNode(true);
// rodape.appendChild(cloneMenu);

// // Selecione o primeiro DT da dl de Faq

// const faq = document.querySelector(".faq");
// const primeiroDt = faq.querySelector("dt");

// // Selecione o DD referente ao primeiro DT

// const proximoDD = primeiroDt.nextElementSibling;

// // Substitua o conteúdo html de .faq pelo de .animais

// const animais = document.getElementById("animais");

// menu.innerHTML = animais.innerHTML;
