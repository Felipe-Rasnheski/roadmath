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

function checkAnswer() {
  
  if(resposta.value == conta.answer) {
    resposta.classList.add("respostaCerta")
  } else {
    resposta.classList.add("respostaErrada")
  }
}