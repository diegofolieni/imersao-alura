let listaFilmes = [
    "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg",
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fumtigrenocinema.com%2Fwp-content%2Fuploads%2F2016%2F11%2FChegada-Poster.jpg&f=1&nofb=1&ipt=0556c98aac3980c336c1e2e779b51743482eea370b81a82a7df80d59b1ca81c4&ipo=images",
    "https://image.tmdb.org/t/p/original/ybQSBSrINtjWsJQ6Ih8sva8HlEZ.jpg",
    "https://image.tmdb.org/t/p/original/lsCDtBiviZnENBDBBsxMXV6g3EP.jpg",
    "http://image.tmdb.org/t/p/original/4RIr8hGts84JLZ8f2EoeYh4uk7.jpg"    
]

for(let i = 0; i < listaFilmes.length ; i++){
    document.write("<img src=" + listaFilmes[i] + ">")
}