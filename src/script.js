let num2 = document.getElementById('num2');
let num1 = null; 
let respostaCerta = null;

function getRandomNumber() {
  num1 = document.getElementById('num1');
  let max = parseFloat(num1.textContent);
  return Math.floor(Math.random() * (max - 10)) + 10; 
}

let random1 = getRandomNumber();
num1.textContent = random1;
let random2 = getRandomNumber();
num2.textContent = random2;

let answer = document.getElementById('resposta');

answer.addEventListener("keyup", function(event) {

  if (event.key === "Enter") {
    // event.preventDefault();
    // answer.click();
    checkAnswer();
  } else {
    answer.classList.remove("respostaCerta");
    answer.classList.remove("respostaErrada");
  }
});

function checkAnswer() {

  let resposta = answer.value;
  resposta = parseFloat(resposta);
  respostaCerta = random1 + random2;
  if (resposta === respostaCerta) {
    answer.className = "respostaCerta";
  } else if ( answer.value === ''){
    alert('digite a resposta')
  } else {
    answer.className = "respostaErrada";
  }
  
}