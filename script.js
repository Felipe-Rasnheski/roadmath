function somaSub() {
  let nivel = document.getElementById('nivel').value;
  let qtdPerguntas = document.getElementById('qtdPerguntas').value;
  window.location.href = "src/somaSub.html?" + nivel + "+" + qtdPerguntas;
}