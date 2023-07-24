// numeros
const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleatorio()

// tag html
const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor

const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor

function gerarNumeroAleatorio() {
    // math.random usado para sortear um numero entre 0 e 100
    return parseInt(Math.random() * maiorValor + 1) // colocado +1 para incluir o 100, pois sem o +1 pegaria de apenas até 99
}

console.log("Número secreto:", numeroSecreto)
