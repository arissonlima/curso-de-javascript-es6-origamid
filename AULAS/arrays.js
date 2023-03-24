// TRANSFORMANDO OBJETOS E NÃO ARRAYS EM ARRAYS DE VERDADE //

const obj = {
  0: "Arisson",
  1: "Lima",
  2: "Freire",
  length: 3,
};

const objArray = Array.from(obj);

console.log(objArray);

// ARRAY COM 3 ITENS //

const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];

console.log(frutas.length);

// MODIFICADORES DE ARRAYS //

const times = ["Palmeiras", "Corinthians", "São Paulo", "Santos"];

console.log(times);

// ORGANIZANDO POR ORDEM ALFABÉTICA //

times.sort();
console.log(times);

// UNSHIFT() E PUSH()
// UNSHIFT ADICIONA O ITEM AO INICIO DA ARRAY E RETORNA O SEU TAMANHO
// PUSH ADICIONA O ITEM AO FINAL DA ARRAY E RETORNA O SEU TAMANHO

times.unshift("Água Santa");
console.log(times);

times.push("Red Bull Bragantino");
console.log(times);

// SHIFT() E POP()
// SHIFT REMOVE O PRIMEIRO ITEM DA ARRAY E RETORNA ELE
// POP REMOVE O ÚLTIMO ITEM DA ARRAY E RETORNA ELE

const timesCariocas = ["Flamengo", "Vasco", "Fluminense", "Botafogo"];
console.log(timesCariocas.shift());
console.log(timesCariocas);

console.log(timesCariocas.pop());
console.log(timesCariocas);

// SPLICE
// ADICIONA NOVOS ITENS NA POSIÇÃO ESCOLHIDA E É POSSÍVEL REMOVER TAMBÉM AO ADICIONAR
// O RETORNO SERÁ SEMPRE OS ITENS REMOVIDOS

const frameworks = ["TailwindCSS", "Bootstrap", "React"];
console.log(frameworks.splice(1, 1, "VueJS"));
console.log(frameworks);

const ling = ["HTML", "CSS", "JS"];
console.log(ling.includes("PHP")); // VERIFICA SE EXSITE O TERMO
console.log(ling.indexOf("PHP")); // VERIFICA SE EXISTE O TERMO E RETORNA O INDICE

// EXERCÍCIO

const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiraComida = comidas.shift();
console.log(primeiraComida);
console.log(comidas);

const ultimaComida = comidas.pop();
console.log(ultimaComida);
console.log(comidas);

comidas.push("Arroz");
console.log(comidas);

comidas.unshift("Peixe", "Batata");
console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

console.log(estudantes.sort());
console.log(estudantes.reverse());

console.log(estudantes.includes("Joana"));
console.log(estudantes.includes("Juliana"));

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;
// Substitua section por ul e div com li,
// utilizando split e join

html = html.split("section").join("ul").split("div").join("li");
console.log(html);

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopia = carros.slice();

carros.pop();

console.log(carros);
console.log(carrosCopia);
