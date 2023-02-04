var paulo = {
    nome: "Paulo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos:0
}

var rafa = {
    nome: "Rafa",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos:0
}

var gui = {
    nome: "Gui",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos:0
}

var renata = {
    nome: "Renata",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos:0
}

let tabelaJogadores = document.getElementById('tabelaJogadores')

exibirNaTela(paulo)
function exibirNaTela(jogador){
tabelaJogadores.innerHTML =  
    `
    <tr>
    <td>${jogador.nome}</td>
    <td>${jogador.vitoria}</td>
    <td>${jogador.empate}</td>
    <td>${jogador.derrota}</td>
    <td>${jogador.pontos}</td>
    <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
    <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
    <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
    </tr>
    `
}
function adicionarVitoria(jogador){
    jogador.vitoria ++
    jogador.pontos += 3
    exibirNaTela(paulo)
}
function adicionarEmpate(jogador){
    jogador.empate ++
    jogador.pontos += 1
    exibirNaTela(jogador)
}
function adicionarDerrota(jogador){
    jogador.derrota ++
    exibirNaTela(jogador)
}