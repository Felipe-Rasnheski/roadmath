let tempo = document.getElementById('tempo');

let search = window.location.search;
search = search.replace("?", "")
console.log(search)

tempo.innerText = search;
let melhorTempo = null;
