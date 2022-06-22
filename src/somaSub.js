let num2 = document.getElementById('num2');
let num1 = document.getElementById('num1'); 
let respostaCerta = null;
let random1 = null;
let random2 = null;
let max = null;
let min = null;

let nivel = window.location.search;
nivel = nivel.replace("?", "");
nivel = nivel.replace("+", "");

let qtdPerguntas = nivel.split("").filter(n => (Number(n) || n == 0)).join("");

qtdPerguntas = parseFloat(qtdPerguntas);
let controle = qtdPerguntas/2;
nivel = nivel.replace(qtdPerguntas,'');
let perguntasQTD = document.querySelector("#qtdPerguntas h3 span");
perguntasQTD.textContent = qtdPerguntas

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
  if (qtdPerguntas <= controle && qtdPerguntas > 0) {
    let acao = document.getElementById('acao');
    acao.textContent = "-";
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
  respostaCerta = qtdPerguntas > controle ? random1 + random2 : random1 - random2;

  if (resposta === respostaCerta) {
    answer.className = "respostaCerta";
    qtdPerguntas--
    perguntasQTD.textContent = qtdPerguntas

    if (qtdPerguntas <= 0) {
    // if(minutos < 10){
    //   minutos = "0" + minutos + ":" + segundos;
    // } else {
    //   minutos = minutos + ":" + segundos;
    // }
    // console.log(minutos)
    window.location.href = "estatisticas.html?" + minutos + ":" + segundos;
  }
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

let segundos = 0;
let minutos = 0;
let setTime = setInterval(() => {
  segundos++
  if(segundos === 60) {
    segundos = 0;
    minutos++ 
  }
},1000);