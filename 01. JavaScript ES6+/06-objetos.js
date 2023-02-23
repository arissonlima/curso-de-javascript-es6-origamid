var serie = {
  nome: "The Office",
  formato: "Sitcom",
  pais: "EUA",
  temporadas: 9,
  totalEpisodios: 201,
  episodiosAssistidos: function (qtd) {
    return this.totalEpisodios - qtd;
  },
  temporadasAssistidas: function (qtd) {
    return this.temporadas - qtd;
  },
};

console.log(serie.nome);
console.log(serie.episodiosAssistidos(78));
console.log(serie.temporadasAssistidas(3));
