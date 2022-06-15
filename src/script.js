let num2 = document.getElementById('num2');
let num1 = document.getElementById('num1'); 
let respostaCerta = null;
let random1 = null;
let random2 = null;

function getRandomNumber(max, min) {
  return Math.floor(Math.random() * (max -min)) + min;
}

function newRandomNumber() {
  random1 = getRandomNumber(100, 30);
  num1.textContent = random1;
  random2 = getRandomNumber(random1, 30);
  num2.textContent = random2;
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
  respostaCerta = random1 + random2;
  if (resposta === respostaCerta) {
    answer.className = "respostaCerta";
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