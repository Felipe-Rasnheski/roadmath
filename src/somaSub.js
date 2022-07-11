import Conta from  "./Contas.js"
let conta = new Conta(window.location.search)

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let max = null
let min = null

document.querySelector("span").textContent = conta.qtdPergun

if(conta.nivel === "facil") {
  max = 100;
  min = 30;
} else if (conta.nivel === "normal") {
  max = 1000;
  min = 100;
} else {
  max = 10000;
  min = 1000;
}

num1.textContent = conta.randomNumber(max, min)
num2.textContent = conta.randomNumber(num1.textContent, min)