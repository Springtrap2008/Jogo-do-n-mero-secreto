let listaDeNumerosSorteados = [];
let limteDisponível = 10
let numeroSecreto = gerarNumeroAleatório();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male',
    {rate: 1.0});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Número Secreto, O Jogo');
    exibirTextoNaTela('p', 'Escolha um número entre 1 a 10');
}

    exibirMensagemInicial();

    function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Seu miserável você acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com
        ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Menor o número secreto é');
        } else {
            exibirTextoNaTela('p', 'Maior o número secreto é');
        }
        tentativas ++;
        limparCampo();
    }
}
    function gerarNumeroAleatório(){
    let numeroEscolhido = parseInt(Math.random() * limteDisponível + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElementosNaLista == 3) {
    listaDeNumerosSorteados = []
}
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatório();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
    function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

    function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatório();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}