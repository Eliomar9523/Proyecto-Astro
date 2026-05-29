const btnHamburguesa = document.getElementById('btnHamburguesa');
const menuLateral = document.getElementById('menuLateral');

// Mostrar/ocultar al dar clic
btnHamburguesa.addEventListener('click', () => {
  menuLateral.classList.toggle('activo');
});

// Ocultar al hacer scroll
window.addEventListener('scroll', () => {
  if (menuLateral.classList.contains('activo')) {
    menuLateral.classList.remove('activo');
  }
});

// Opcional: cerrar si se hace clic fuera del menú
document.addEventListener('click', (e) => {
  if (menuLateral.classList.contains('activo') &&
      !menuLateral.contains(e.target) &&
      e.target !== btnHamburguesa) {
    menuLateral.classList.remove('activo');
  }
});





function buscarLibro() {
  const input = document.getElementById("search").value.toLowerCase();
  const libros = document.querySelectorAll(".libro");

  libros.forEach(libro => {
    const titulo = libro.querySelector("p").textContent.toLowerCase();
    if (titulo.includes(input)) {
      libro.style.display = "block"; 
    } else {
      libro.style.display = "none";
    }
  });
}
