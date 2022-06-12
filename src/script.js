let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');

function getRandomNumber() {
  let max = parseFloat(num1.textContent);
  number = Math.floor(Math.random() * (max - 10)) + 10;
  return number
}

random1 = getRandomNumber();
random2 = getRandomNumber();

num1.textContent = random1;
num2.textContent = random2;

function checkAnswer() {
  let answer = document.getElementById('resposta');
  let resposta = answer.value;
  resposta = parseFloat(resposta);
  respostaCerta = random1 + random2;
  if (resposta === respostaCerta) {
    answer.className = "respostaCerta";
  } else if ( answer.value === ''){
    
  } else {
    answer.className = "respostaErrada";
  }
}