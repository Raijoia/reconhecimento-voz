function verificaSeOChutePossuiUmValorValido(chute) {
  // transformando string para numero
  const numero = +chute
  
  // steregg
  if (gameOver(chute) ) {
    document.body.innerHTML = `
    <h2>Game Over</h2>
    <button id='jogar-denovo' class='btn-jogar'>Jogar Novamente</button>
    `
    document.body.style.backgroundColor = 'red'
  }
  
  // validação se não for um numero
  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor inválido</div>
    `
    // colocando return para a função não ser mais invocada
    return
  }

  // validação se o numero não estiver entre menor e maior valor
  if (numeroMaiorOuMenor(numero)) {
    elementoChute.innerHTML += `
    <div>Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}.</div>
    `
    // colocando return para a função não ser mais invocada
    return
  }

  // validação se acertar o numero secreto
  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto é ${numeroSecreto}</h3>

    <button id='jogar-denovo' class='btn-jogar'>Jogar Novamente</button>
    `
  } else if (numero < numeroSecreto) { // validação numero secreto maior
    elementoChute.innerHTML += `
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
    `
  } else { // validação numero secreto menor
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>
    `
  }
}

function chuteForInvalido(numero) {
  // se não for um numero
  return Number.isNaN(numero)
}

function numeroMaiorOuMenor(numero) {
  // se o numero for maior ou menor que o valido
  return numero > maiorValor || numero < menorValor
}

function gameOver(chute) {
  return chute == "game over"
}

// criando um evento
document.body.addEventListener('click', e => {
  // se o evento clicado tiver o id 'jogar-denovo'
  if (e.target.id == 'jogar-denovo') {
    // atualizar a página
    window.location.reload()
  }
})

