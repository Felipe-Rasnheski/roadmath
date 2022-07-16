import Conta from  "./Contas.js"
import Search from "./Search.js"

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")

let search = new Search(window.location.search)

let qtdPerguntas = document.querySelector("span")
qtdPerguntas.textContent = search.qtdPergun

let conta = new Conta(search.max, search.min)
num1.textContent = conta.random1
num2.textContent = conta.random2

let controle = search.qtdPergun / 2

let resposta = document.getElementById("resposta")

resposta.addEventListener("keydown", event => {
  resposta.classList.remove("respostaErrada")
  if(event.key == "Enter") {
    checkAnswer()
  }
})

let answer = conta.answer

function checkAnswer() {

  if(resposta.value == answer) {
    resposta.classList.remove("respostaErrada")
    resposta.classList.add("respostaCerta")
    search.qtdPergun--
    qtdPerguntas.textContent = search.qtdPergun
    newConta()
  } else {
    resposta.classList.add("respostaErrada")
  }

}

function newConta() {

  setTimeout(() => {
    if(search.qtdPergun == 0) {
      minutos < 10 ? minutos = "0" + minutos.toString() : minutos
      segundos < 10 ? segundos = "0" + segundos.toString() : segundos
      window.location.href = `estatisticas.html?${minutos}:${segundos}`
    }
    const newConta = new Conta(search.max, search.min)
    newConta.answerRes = search.qtdPergun
    answer = newConta.answer
    if(search.qtdPergun == 5) {
      document.getElementById("acao").innerHTML = "-"
    }
    resposta.value = ""
    resposta.classList.remove("respostaCerta")
    num1.textContent = newConta.random1
    num2.textContent = newConta.random2
  }, 1000)
    
}

let proximaPergun = document.querySelector(".inner-header button")
proximaPergun.addEventListener("click", () => checkAnswer())

let segundos = 0
let minutos = 0
setInterval(() => {
  segundos++
  if (segundos > 60) {
    minutos++
    segundos = 0
  }
}, 1000);