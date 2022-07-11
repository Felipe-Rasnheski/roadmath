import Conta from  "./Contas.js"
let conta = new Conta()

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let max = null
let min = null

let nivel = window.location.search;
nivel = nivel.replace("?", "");
nivel = nivel.replace("+", "");

let qtdPerguntas = conta.qtdPerguntas(nivel)

let controle = qtdPerguntas/2;
nivel = nivel.replace(qtdPerguntas,'');
let perguntasQTD = document.querySelector("#qtdPerguntas h3 span");
perguntasQTD.textContent = qtdPerguntas

if(nivel === "facil") {
  max = 100;
  min = 30;
} else if (nivel === "normal") {
  max = 1000;
  min = 100;
} else {
  max = 10000;
  min = 1000;
}

num1.textContent = conta.randomNumber(100, 10)
num2.textContent = conta.randomNumber(num1.textContent, 10)
