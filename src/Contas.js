export default class Conta {

  constructor(max, min, controle) {
    this.controle = controle
    this.random1 = parseInt(Math.random() * (max - min)) + min
    this.random2 = parseInt(Math.random() * (this.random1 - min)) + min
    this.answer = this.random1 + this.random2
    this.mult = this.random1 * this.random2
  }

  set answerSoma(qtdPergun) {
    if(qtdPergun <= this.controle) {
      this.answer = this.random1 - this.random2
    }
  }

  set answerMult(qtdPergun) {
    if(qtdPergun <= this.controle) {
      this.answer = this.random2
    } else {
      this.answer = this.mult
    }
  }
}