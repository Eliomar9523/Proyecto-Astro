const btnHamburguesa = document.getElementById('btnHamburguesa');
const menuLateral = document.getElementById('menuLateral');

btnHamburguesa.addEventListener('click', () => {
  menuLateral.classList.toggle('activo');
});

window.addEventListener('scroll', () => {
  if (menuLateral.classList.contains('activo')) {
    menuLateral.classList.remove('activo');
  }
});

document.addEventListener('click', (e) => {
  if (menuLateral.classList.contains('activo') &&
      !menuLateral.contains(e.target) &&
      e.target !== btnHamburguesa) {
    menuLateral.classList.remove('activo');
  }
});
