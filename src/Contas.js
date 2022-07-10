class Conta {
  constructor(max, min) {
    this.num = parseInt(Math.random() * (max - min) + min)
  }
}

let num1 = new Conta(100, 10)
let num2 = new Conta(num1.num, 10)

console.log(num1.num, num2.num);