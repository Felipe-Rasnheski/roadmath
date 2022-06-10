let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

parseFloat(num1)

function getRandomNumber() {
  let max = parseFloat(num1.textContent);
  number = Math.floor(Math.random() * (max - 10)) + 10;
  return number
}

num1.textContent = getRandomNumber();
num2.textContent = getRandomNumber();