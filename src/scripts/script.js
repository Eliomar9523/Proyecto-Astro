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




document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".slide-img");
    let i = 0;

    function rotar() {
        imagenes[i].classList.remove("activa");
        i = (i + 1) % imagenes.length;
        imagenes[i].classList.add("activa");
    }

    setInterval(rotar, 3500);
});





function abrirModal(seccion) {
    const modal = document.getElementById("miModal");
    const titulo = document.getElementById("modalTitulo");
    const texto = document.getElementById("modalTexto");

    const contenidos = {
        'nosotros': {
            titulo: "Sobre Nosotros",
            texto: "Somos una comunidad educativa comprometida con el desarrollo integral de niñas y niños, integrando excelencia académica con valores sólidos. Nuestros docentes apasionados fomentan el pensamiento crítico, la creatividad y el aprendizaje colaborativo en un ambiente seguro y familiar. Nos enfocamos en formar ciudadanos responsables, empáticos y preparados para el futuro."
        },
        'mision': {
            titulo: "Nuestra Misión",
            texto: "Proporcionar una educación básica de calidad que fortalezca la lengua y cultura indígena, integrando conocimientos académicos con valores humanos, en un entorno seguro y participativo con la comunidad."
        },
        'vision': {
            titulo: "Nuestra Visión",
            texto: "Ser una institución líder en educación indígena que logre que los alumnos egresen con alto nivel de competencia, manteniendo firme su identidad cultural y con la capacidad de continuar sus estudios con éxito."
        }
    };

    if (contenidos[seccion]) {
        titulo.innerText = contenidos[seccion].titulo;
        texto.innerText = contenidos[seccion].texto;
        modal.style.display = "block";
    }
}


function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("miModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

window.abrirModal = abrirModal;

window.cerrarModal = cerrarModal;





document.addEventListener("DOMContentLoaded", function() {
    
    const miBoton = document.getElementById("btnArriba");


    
    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            miBoton.style.display = "flex";
        } else {
            miBoton.style.display = "none";
        }
    };

    
    miBoton.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const miBoton = document.getElementById("btnArriba");

    
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
});