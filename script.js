window.onload = function () {
  alert("¡Bienvenido a mi CV web! 😎");
};

function cambiarTema() {
  document.body.classList.toggle("oscuro");
}

function toggleHabilidades() {
  const lista = document.getElementById("listaHabilidades");
  lista.style.display = lista.style.display === "none" ? "block" : "none";
}
