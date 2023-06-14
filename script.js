//querySelector(p, ul, #id, .classes)

const contenidor = document.querySelector('.contenidor');
const seients = document.querySelectorAll('.fila .seient:not(.ocupat)');
const contador = document.getElementById('contador');
const total = document.getElementById('total');
const peliculaSelect = document.getElementById('pelicula');

let preuDelTicket = +peliculaSelect.value;

function actualizasSeleccioSeients(){
    const seientsSeleccionats = document.querySelectorAll('.fila .seient.seleccionat');
    //console.log(seientsSeleccionats);

    const seientsIndex = [...seientsSeleccionats].map(function(seient){
        return [...seients].indexOf(seient);
    });

    const seientsIndexFletxa = [...seientsSeleccionats].map((seient) => [...seients].indexOf(seient));
    
    localStorage.setItem('seientsSeleccionats', JSON.stringify(seientsIndex));

    const contadorSeients = seientsIndex.length;

    contador.innerText = contadorSeients;
    total.innerText = contadorSeients * preuDelTicket;
}

contenidor.addEventListener('click', (e) => {
    //si es un seient i no esta ocupat
    if (e.target.classList.contains('seient') &&  !e.target.classList.contains('ocupat')) {
        //toggle per canviar de clase
        e.target.classList.toggle('seleccionat');
        actualizasSeleccioSeients();
    }
} )

peliculaSelect.addEventListener('change', (e) => {
    preuDelTicket = +e.target.value;   

    actualizasSeleccioSeients();
})