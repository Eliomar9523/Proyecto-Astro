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
