let listOfNumbers = [];
let numeroSecreto = criarNumeroSecreto();
let guesses = 1;

function exibirMensagem(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'UK English Female', {rate: 1.5});
}

exibirMensagem('h1', 'Secret number game');
exibirMensagem('p', 'Choose a secret number between 1 and 100');

function verificarChute() {
    let input = document.querySelector('input');
    let chute = parseInt(input.value);
    
    if (chute == numeroSecreto) {
        let mensagem = 'Congratulations! You guessed the secret number!';
        exibirMensagem('p', mensagem);
        let wordGuess = guesses > 1 ? 'guesses' : 'guess';
        let mensagem2= 'You discovered the secret number with ' + guesses + ' ' + wordGuess + '!';
        exibirMensagem('h1', mensagem2);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirMensagem('p', 'The secret number is lower');
        } else {
            exibirMensagem('p', 'The secret number is higher');
        }
        guesses++;
        limparCampo();
    }
}

function criarNumeroSecreto() {
    let chosenNumber = parseInt(Math.random() * 10 + 1);
    if(listOfNumbers.includes(chosenNumber)){
        return criarNumeroSecreto();
    } else {
        listOfNumbers.push(chosenNumber);
        return chosenNumber;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function exibirMsgInicial(){
    exibirMensagem('h1', 'Secret number game');
    exibirMensagem('p', 'Guess the secret number between 1 and 100');
}

function restartGame(){
    numeroSecreto = criarNumeroSecreto();
    limparCampo();
    guesses = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}