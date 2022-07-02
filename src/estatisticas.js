let tempo = document.getElementById('tempo');
let melhorTempo = document.getElementById('melhorTempo');

let search = window.location.search
search = search.replace("?", "");
tempo.innerText = search;