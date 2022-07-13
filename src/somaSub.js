import Conta from  "./Contas.js"
import Search from "./Search.js"

let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let max = null
let min = null

let search = new Search(window.location.search)

document.querySelector("span").textContent = ""

if( max === "facil") {
  max = 100;
  min = 30;
} else if (min === "normal") {
  max = 1000;
  min = 100;
} else {
  max = 10000;
  min = 1000;
}

let conta = new Conta(100, 10)
num1.textContent = conta.random1
num2.textContent = conta.random2