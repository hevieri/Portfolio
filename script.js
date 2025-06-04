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
