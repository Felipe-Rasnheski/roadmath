export default class Conta {

  constructor(max, min, qtdPergun) {
    this.random1 = parseInt(Math.random() * (max - min)) + min
    this.random2 = parseInt(Math.random() * (this.random1 - min)) + min
    this.answer = setAnswer()
  }

}

function setAnswer() {
  
}