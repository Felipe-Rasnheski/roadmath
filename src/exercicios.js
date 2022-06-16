let num2 = document.getElementById('num2');
let num1 = document.getElementById('num1'); 
let respostaCerta = null;
let random1 = null;
let random2 = null;
let max = null;
let min = null;
let controle = 20;

let nivel = window.location.search;
nivel = nivel.replace("?", "");

if(nivel === "facil") {
  max = 100;
  min = 30;
} else if (nivel === "normal") {
  max = 1000;
  min = 100;
} else {
  max = 10000;
  min = 1000;
}

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max -min)) + min;
}

function newRandomNumber() {
  random1 = getRandomNumber(max, min);
  num1.textContent = random1;
  random2 = getRandomNumber(random1, min);
  num2.textContent = random2;
  if (controle <= 10 && controle > 0) {
    let acao = document.getElementById('acao');
    acao.textContent = "-";
  } else if (controle <= 0) {
    window.location.href = "estatisticas.html";
  }
}

let answer = document.getElementById('resposta');
let answerVazia = answer;

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
  respostaCerta = controle > 10 ? random1 + random2 : random1 - random2;

  if (resposta === respostaCerta) {
    answer.className = "respostaCerta";
    controle--
    newAnswer()
  } else if ( answer.value === ''){
    alert('digite a resposta')
  } else {
    answer.className = "respostaErrada";
  }
  
}

function newAnswer() {
let newanswer = setTimeout(function() {
  answer.classList.remove("respostaCerta");
  answer.value = "";
  newRandomNumber();
}, 1000);
}

newRandomNumber()