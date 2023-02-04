function adicionarFilme(){
    let filmeFavorito = document.getElementById('filme').value
    let elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML +
                                    '<img src=' + filmeFavorito + '>'
    document.getElementById('filme').value = ''
}