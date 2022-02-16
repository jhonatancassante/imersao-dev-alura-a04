var listaFilmes = [
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg",
  "https://ingresso-a.akamaihd.net/img/cinema/cartaz/19592-cartaz.jpg",
  "https://br.web.img2.acsta.net/medias/nmedia/18/93/88/04/20282944.jpg"
]

listaFilmes.forEach(function (item) { document.write("<img class='poster-filme' src=" + item + ">") });