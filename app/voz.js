// pegando div chute
const elementoChute = document.querySelector('#chute')

// adicionando a api de voz
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()

// colocando a linguagem
recognition.lang = "pt-br"

// iniciando a api
recognition.start()

// adicionando um evento
recognition.addEventListener("result", onSpeak)

function onSpeak(e) {
  // pegando o resultado do reconhecimento de voz
  // console.log(e.results[0][0].transcript)

  // guardando a resultado
  const chute = e.results[0][0].transcript
  exibeChute(chute)
  verificaSeOChutePossuiUmValorValido(chute)
}

function exibeChute(chute) {
  // colocando na tela, fazendo o html pelo js
  elementoChute.innerHTML = `
  <div>Você disse:</div>
  <span class="box">${chute}</span>
  `
}

// adicionando um evento para quando o programa desligar, ele ligar dnv, fazendo assim que o programa não acabe
recognition.addEventListener('end', () => recognition.start())
