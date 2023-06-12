//querySelector(p, ul, #id, .classes)

const contenidor = document.querySelector('.contenidor');
const seients = document.querySelectorAll('.fila .seient:not(.ocupat)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');

let preuDelTicket = +peliculaSelect.value;

console.log(preuDelTicket);