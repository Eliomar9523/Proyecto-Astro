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



function confirmarEliminacion() {
    // confirm() devuelve true si el usuario da clic en "Aceptar" 
    // y false si da clic en "Cancelar"
    var respuesta = confirm("¿Estás seguro de que deseas eliminar este aviso? Esta acción no se puede deshacer.");
    
    if (respuesta) {
        return true; // El formulario se envía y se ejecuta el PHP
    } else {
        return false; // Se cancela el envío y no pasa nada
    }
}






document.addEventListener("DOMContentLoaded", function() {
    const miBoton = document.getElementById("btnArriba");

    // Forzar que se oculte al cargar si estamos en el inicio (top 0)
    if (window.scrollY < 200) {
        miBoton.style.display = "none";
    }

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 200 || document.body.scrollTop > 200) {
            miBoton.style.display = "flex";
        } else {
            miBoton.style.display = "none";
        }
    };
    
    // ... resto de tu código de click ...
});





// Cambiar el texto del botón cuando se selecciona un archivo
document.getElementById('archivo').onchange = function () {
    var fileName = this.value.split('\\').pop();
    if (fileName) {
        document.querySelector('.boton-personalizado').innerHTML = "✅ " + fileName;
    }
};




document.addEventListener("DOMContentLoaded", function() {
    
    const miBoton = document.getElementById("btnArriba");

    

    // Función para mostrar/ocultar
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            miBoton.style.display = "flex";
        } else {
            miBoton.style.display = "none";
        }
    };


    // Función para subir
    miBoton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});