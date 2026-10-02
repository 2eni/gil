// Gera um número aleatório
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

// Define o maximo de tentativas
let maxTentativas = 10


function chutar() {
    const resultado = document.getElementById("mensagem");

    if (maxTentativas < 1) {
        resultado.textContent = `Fim de Jogo, o numero secreto era ${numeroAleatorio}`
        console.log("Fim de jogo")
        document.getElementById("botao").disabled = true;
    } else {
        verificPalpite();
        limparPalpite();
    }
}

function verificPalpite() {
    const resultado = document.getElementById("mensagem");
    const tentativas = document.getElementById("tentativas");
    const historico = document.getElementById("historico");
    var listahistorico = []

    const palpite = parseInt(document.getElementById("numero").value)
    if (palpite <= 0){
        resultado.textContent = `Digite um numero de 0 a 100`;
        console.log("erro de 0");
    } else if (palpite < numeroAleatorio) {
        resultado.textContent = "o numero secreto é MAIOR!"
        tentativas.textContent = `Tentativas restantes: ${maxTentativas}`
        listahistorico.push(palpite)
        historico.textContent = `Historico: ${listahistorico}`
        maxTentativas--;
    } else if (palpite > numeroAleatorio) {
        resultado.textContent = "o numero secreto é MENOR!"
        tentativas.textContent = `Tentativas restantes: ${maxTentativas}`
        listahistorico.push(palpite)
        historico.textContent = `Historico: ${listahistorico}`
        maxTentativas--;
    } else if (palpite === numeroAleatorio) {
        resultado.textContent = "Parabéns, você acertou!!"
        tentativas.textContent = `Tentativas restantes: ${maxTentativas}`
        return
    }
}
function limparPalpite() {
    document.getElementById("numero").value = "";
}
