//querySelector(p, ul, #id, .classes)

const contenidor = document.querySelector(".contenidor");
const seients = document.querySelectorAll(".fila .seient:not(.ocupat)");
const contador = document.getElementById("contador");
const total = document.getElementById("total");
const peliculaSelect = document.getElementById("pelicula");

let preuDelTicket = +peliculaSelect.value;

ompleUI();

function actualizasSeleccioSeients() {
  const seientsSeleccionats = document.querySelectorAll(
    ".fila .seient.seleccionat"
  );
  //console.log(seientsSeleccionats);

  const seientsIndex = [...seientsSeleccionats].map(function (seient) {
    return [...seients].indexOf(seient);
  });

  const seientsIndexFletxa = [...seientsSeleccionats].map((seient) =>
    [...seients].indexOf(seient)
  );

  localStorage.setItem("seientsSeleccionats", JSON.stringify(seientsIndex));

  const contadorSeients = seientsIndex.length;

  contador.innerText = contadorSeients;
  total.innerText = contadorSeients * preuDelTicket;
}

function guardaInfoPelicula(indexPelicula, preuPelicula) {
  localStorage.setItem("indexPeliculaSeleccionada", indexPelicula);
  localStorage.setItem("preuPeliculaSeleccionada", preuPelicula);
}

contenidor.addEventListener("click", (e) => {
  //si es un seient i no esta ocupat
  if (
    e.target.classList.contains("seient") &&
    !e.target.classList.contains("ocupat")
  ) {
    //toggle per canviar de clase
    e.target.classList.toggle("seleccionat");
    actualizasSeleccioSeients();
  }
});

function ompleUI() {
  //PER RECUPERAR DEL LOCAL STORAGE, JSON.PARSE
  const seientsSeleccionats = JSON.parse(localStorage.getItem("seientsSeleccionats"));
  
    if (seientsSeleccionats !== null && seientsSeleccionats.length > 0) {
        seients.forEach((seient, index) => {
            if(seientsSeleccionats.indexOf(index) > -1) {
                seient.classList.add('seleccionat');
            }
        })
    }

    const indexPeliculaSeleccionada = localStorage.getItem("indexPeliculaSeleccionada");

    if (indexPeliculaSeleccionada !== null){
        peliculaSelect.selectedIndex = indexPeliculaSeleccionada;
    }

    const preuPeliculaSeleccionada = localStorage.getItem("preuPeliculaSeleccionada");
    if(preuPeliculaSeleccionada!== null) {
        preuDelTicket = +preuPeliculaSeleccionada;
    }
}

peliculaSelect.addEventListener("change", (e) => {
  preuDelTicket = +e.target.value;
  guardaInfoPelicula(e.target.selectedIndex, e.target.value);
  actualizasSeleccioSeients();
});

actualizasSeleccioSeients();
