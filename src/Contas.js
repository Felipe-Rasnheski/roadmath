export default class Conta {

  constructor(max, min) {
    this.random1 = parseInt(Math.random() * (max - min)) + min
    this.random2 = parseInt(Math.random() * (this.random1 - min)) + min
    this.answer = this.random1 + this.random2
  }

}