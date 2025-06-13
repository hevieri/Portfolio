document.addEventListener("DOMContentLoaded", function () {
  // Alternar modo oscuro
  document.getElementById("dark-mode-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Alternar texto "Sobre mí"
  const toggleBtn = document.querySelector(".toggle-btn");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const text = this.nextElementSibling;
      text.classList.toggle("hidden");
      this.textContent = text.classList.contains("hidden") ? "Mostrar más" : "Mostrar menos";
    });
  }

  // Filtrado de habilidades
  const botonesHabilidades = document.querySelectorAll(".filtro-btn");
  const habilidades = document.querySelectorAll(".habilidad");

  // Función para mostrar N habilidades al azar al cargar la página
  function mostrarHabilidadesRandom(cantidad = 4) {
    habilidades.forEach(h => h.style.display = "none");
    const random = [...habilidades].sort(() => 0.5 - Math.random()).slice(0, cantidad);
    random.forEach(h => h.style.display = "block");
  }

  botonesHabilidades.forEach(boton => {
    boton.addEventListener("click", () => {
      botonesHabilidades.forEach(btn => btn.classList.remove("activo"));
      boton.classList.add("activo");

      const categoria = boton.getAttribute("data-categoria");

      habilidades.forEach(hab => {
        if (hab.classList.contains(categoria)) {
          hab.style.display = "block";
        } else {
          hab.style.display = "none";
        }
      });
    });
  });

  // Mostrar habilidades random al cargar la página
  mostrarHabilidadesRandom();

  // Filtrado de proyectos
  const botonesProyectos = document.querySelectorAll(".filtro-proyecto-btn");
  const proyectos = document.querySelectorAll(".proyecto");

  botonesProyectos.forEach(boton => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-categoria");

      proyectos.forEach(proyecto => {
        if (categoria === "todos" || proyecto.classList.contains(categoria)) {
          proyecto.style.display = "block";
        } else {
          proyecto.style.display = "none";
        }
      });
    });
  });

  // Al cargar la página, mostrar proyectos al azar
  const categoriasProyectos = ["web", "marketing", "grafico"];
  const randomCat = categoriasProyectos[Math.floor(Math.random() * categoriasProyectos.length)];

  proyectos.forEach(proyecto => {
    proyecto.style.display = proyecto.classList.contains(randomCat) ? "block" : "none";
  });

  // Botones "Sobre mí"
  const botonesSobreMi = document.querySelectorAll(".btn-sobre-mi");
  botonesSobreMi.forEach(boton => {
    boton.addEventListener("click", () => {
      const seccionSeleccionada = boton.getAttribute("data-seccion");

      document.querySelectorAll(".seccion-sobre-mi").forEach(seccion => {
        seccion.classList.add("hidden");
      });

      document.getElementById(seccionSeleccionada).classList.remove("hidden");
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const botones = document.querySelectorAll('.btn-sobre-mi');
  if (botones.length > 0) {
    botones.forEach(btn => btn.classList.remove('activo'));
    botones[0].classList.add('activo');

    // Mostrar la primera sección también
    const secciones = document.querySelectorAll('.seccion-sobre-mi');
    secciones.forEach(seccion => seccion.classList.add('hidden'));
    const primerId = botones[0].getAttribute('data-seccion');
    document.getElementById(primerId).classList.remove('hidden');
  }
});


// boton ver mas y ver menos
document.addEventListener("DOMContentLoaded", () => {
  const botones = document.querySelectorAll(".filtro-btn");
  const verMasBtn = document.getElementById("verMasBtn");
  const descripcionBloque = document.getElementById("descripcionBloque");
  const descripcionTexto = document.getElementById("descripcionTexto");

  // Textos para cada categoría
  const descripciones = {
    web: "Como desarrollador web, manejo HTML, CSS, JavaScript, PHP, MySQL y frameworks como Bootstrap y jQuery.",
    marketing: "Experiencia en WordPress y marketing digital, gestionando contenido y campañas efectivas.",
    grafico: "Diseño profesional con Illustrator, Photoshop, After Effects y Premiere Pro."
  };

  let categoriaActual = null;
  let descripcionVisible = false;

  // Cuando se hace click en un botón de categoría
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      const cat = boton.getAttribute("data-categoria");
      categoriaActual = cat;

      // Mostrar el texto de la categoría y abrir automáticamente descripción
      descripcionTexto.textContent = descripciones[cat] || "";
      descripcionTexto.classList.remove("opacity-0");
      descripcionTexto.classList.add("opacity-100");

      descripcionBloque.style.maxHeight = "10rem";  // ajusta según el texto
      descripcionVisible = true;
      verMasBtn.textContent = "Ver menos";
    });
  });




  // Toggle al botón Ver más / Ver menos
  verMasBtn.addEventListener("click", () => {
    if (!categoriaActual) return; // no hacer nada si no hay categoría seleccionada

    if (descripcionVisible) {
      // Ocultar
      descripcionBloque.style.maxHeight = "0";
      descripcionTexto.classList.remove("opacity-100");
      descripcionTexto.classList.add("opacity-0");
      verMasBtn.textContent = "Ver más";
      descripcionVisible = false;
    } else {
      // Mostrar
      descripcionTexto.textContent = descripciones[categoriaActual];
      descripcionTexto.classList.remove("opacity-0");
      descripcionTexto.classList.add("opacity-100");
      descripcionBloque.style.maxHeight = "10rem";
      verMasBtn.textContent = "Ver menos";
      descripcionVisible = true;
    }
  });
});


//

const botones = document.querySelectorAll(".toggleBtn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        const contenido = document.getElementById(boton.dataset.target);
        
        contenido.classList.toggle("oculto");

        boton.textContent = contenido.classList.contains("oculto") ? "Ver más" : "Ver menos";
    });
});


// nuevo codigo ver mas y ver menos
const categoriaBotones = document.querySelectorAll(".categoriaBtn");
const verMasBotones = document.querySelectorAll(".verMasBtn");
const categorias = document.querySelectorAll(".categoria");

categoriaBotones.forEach(boton => {
    boton.addEventListener("click", () => {
        // Ocultar todas las categorías antes de mostrar la nueva
        categorias.forEach(cat => cat.classList.add("oculto"));

        // Mostrar la categoría correspondiente
        const contenido = document.getElementById(boton.dataset.target);
        contenido.classList.remove("oculto");
    });
});

verMasBotones.forEach(boton => {
    boton.addEventListener("click", () => {
        const detalle = document.getElementById(boton.dataset.target);
        detalle.classList.toggle("oculto");

        boton.textContent = detalle.classList.contains("oculto") ? "Ver más" : "Ver menos";
    });
});


//el boton que escribe
const text = "Diseño Digital | Desarrollo Web | Marketing";
  const inputField = document.getElementById("animatedInput");
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      inputField.value += text.charAt(index);
      index++;
      setTimeout(typeEffect, 100); // Velocidad de escritura
    } else {
      inputField.classList.add("shake"); // Activa la animación de sacudida al final
    }
  }

  setTimeout(typeEffect, 500); // Retraso antes de iniciar la animación







  // Animación proyecto
 document.addEventListener("DOMContentLoaded", function () {
    const botonesFiltro = document.querySelectorAll(".filtro-proyecto-btn");
    const proyectosContainer = document.querySelector(".proyectos-container");

    botonesFiltro.forEach(boton => {
        boton.addEventListener("click", () => {
            const categoria = boton.getAttribute("data-categoria");
            const proyectos = document.querySelectorAll(".proyecto");

            let visibles = 0;
            proyectos.forEach(proyecto => {
                if (categoria === "todos" || proyecto.classList.contains(categoria)) {
                    proyecto.style.display = "block";
                    visibles++;
                } else {
                    proyecto.style.display = "none";
                }
            });

            // Si hay pocos elementos, centramos la grid
            if (visibles === 1) {
                proyectosContainer.style.display = "flex";
                proyectosContainer.style.justifyContent = "center";
            } else {
                proyectosContainer.style.display = "grid";
            }
        });
    });
});
