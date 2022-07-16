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
    const newConta = new Conta(search.max, search.min)
    answer = newConta.answer
    resposta.value = ""
    resposta.classList.remove("respostaCerta")
    num1.textContent = newConta.random1
    num2.textContent = newConta.random2
  }, 1000)
    
}