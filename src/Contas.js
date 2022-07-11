export default class Conta {

  constructor(search) {
    this.nivel = search.replace("?", "").replace("+", "")
    this.qtdPergun = parseFloat(
      this.nivel.split("").filter(n => (Number(n) || n == 0)).join("")
    )
    this.nivel = this.nivel.replace(this.qtdPergun, "")
    this.controle = this.qtdPergun / 2
  }

  randomNumber(max, min) {
    return parseInt(Math.random() * (max - min) + min)
  }
  
}