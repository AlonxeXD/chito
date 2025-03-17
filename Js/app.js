let Titulo = document.title;

window.addEventListener('blur', () => {
    Titulo = document.title;
    document.title = "Regresa, no te vallas :(";
})

window.addEventListener('focus', () => {
    document.title = Titulo;
})

let Boton1 = document.getElementById("B1");
Boton1.addEventListener('click', function() {
    // Redirige a otra página HTML (puedes cambiar "otraPagina.html" por el nombre de la página de destino)
      window.location.href = "flor.html";
});

let Boton12 = document.getElementById("B12");
Boton1.addEventListener('click', function() {
    // Redirige a otra página HTML (puedes cambiar "otraPagina.html" por el nombre de la página de destino)
      window.location.href = "corazon.html";
});