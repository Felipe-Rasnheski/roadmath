export default class Conta {
  constructor() {
    
  }

  qtdPerguntas(qtd) {
    return parseFloat(qtd.split("").filter(n => (Number(n) || n == 0)).join(""))
  }

  randomNumber(max, min) {
    return parseInt(Math.random() * (max - min) + min)
  }
}