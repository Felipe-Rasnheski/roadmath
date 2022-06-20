function exercicios(location) {
  let nivel = document.getElementById('nivel').value;
  let qtdPerguntas = document.getElementById('qtdPerguntas').value;
  window.location.href = location + nivel + "+" + qtdPerguntas;
}