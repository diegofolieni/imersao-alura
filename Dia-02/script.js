let numeroSecreto = parseInt(Math.random() * 1001)
let chute = 0
while(chute !== numeroSecreto){
    chute = prompt('Digite um número entre 1 e 1000')
    //Se o chute for igual ao número secreto
    if(chute == numeroSecreto){
        alert('Acertou!')
        break;
    }else if(chute > numeroSecreto){
        alert('Errou! O número secreto é menor!')
    } else {
        alert('Errou! O número secreto é maior')
    }
}
