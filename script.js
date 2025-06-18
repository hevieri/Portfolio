// ================================
// 🎛️ INTERACTIVIDAD GENERAL — PORTFOLIO ERIKA
// ================================

document.addEventListener("DOMContentLoaded", () => {
  // 🌙 MODO OSCURO
  const darkModeToggle = document.getElementById("dark-mode-toggle");
  darkModeToggle?.addEventListener("click", () =>
    document.body.classList.toggle("dark-mode")
  );

  // 🧠 DESCRIPCIÓN por CATEGORÍA con "VER MÁS / VER MENOS"
  const botonesCategorias = document.querySelectorAll(".filtro-btn");
  const verMasBtn = document.getElementById("verMasBtn");
  const descripcionBloque = document.getElementById("descripcionBloque");
  const descripcionTexto = document.getElementById("descripcionTexto");

  const descripciones = {
    web: "Como desarrollador web, manejo HTML, CSS, JavaScript, PHP, MySQL y frameworks como Bootstrap y jQuery.",
    marketing: "Experiencia en WordPress y marketing digital, gestionando contenido y campañas efectivas.",
    grafico: "Diseño profesional con Illustrator, Photoshop, After Effects y Premiere Pro.",
  };

  let categoriaActual = null;
  let descripcionVisible = false;

  botonesCategorias.forEach(boton => {
    boton.addEventListener("click", () => {
      const cat = boton.getAttribute("data-categoria");
      categoriaActual = cat;

      descripcionTexto.textContent = descripciones[cat] || "";
      descripcionTexto.classList.replace("opacity-0", "opacity-100");
      descripcionBloque.style.maxHeight = "10rem";
      descripcionVisible = true;
      verMasBtn.textContent = "Ver menos";
    });
  });

  verMasBtn?.addEventListener("click", () => {
    if (!categoriaActual) return;

    if (descripcionVisible) {
      descripcionBloque.style.maxHeight = "0";
      descripcionTexto.classList.replace("opacity-100", "opacity-0");
      verMasBtn.textContent = "Ver más";
    } else {
      descripcionTexto.textContent = descripciones[categoriaActual];
      descripcionTexto.classList.replace("opacity-0", "opacity-100");
      descripcionBloque.style.maxHeight = "10rem";
      verMasBtn.textContent = "Ver menos";
    }
    descripcionVisible = !descripcionVisible;
  });

  // 📦 BOTONES TIPO TOGGLE INDEPENDIENTES
  document.querySelectorAll(".toggleBtn").forEach(boton => {
    boton.addEventListener("click", () => {
      const contenido = document.getElementById(boton.dataset.target);
      contenido.classList.toggle("oculto");
      boton.textContent = contenido.classList.contains("oculto")
        ? "Ver más"
        : "Ver menos";
    });
  });

  // 🧩 CAMBIO DE CATEGORÍA + DETALLE VER MÁS
  const categoriaBotones = document.querySelectorAll(".categoriaBtn");
  const categorias = document.querySelectorAll(".categoria");

  // Ocultar todas y mostrar solo la primera al inicio
categorias.forEach((cat, i) => {
  if (i === 0) {
    cat.classList.remove("oculto");
  } else {
    cat.classList.add("oculto");
  }
});


  categoriaBotones.forEach(boton => {
    boton.addEventListener("click", () => {
      categorias.forEach(cat => cat.classList.add("oculto"));
      const contenido = document.getElementById(boton.dataset.target);
      contenido.classList.remove("oculto");
    });
  });

  document.querySelectorAll(".verMasBtn").forEach(boton => {
    boton.addEventListener("click", () => {
      const detalle = document.getElementById(boton.dataset.target);
      detalle.classList.toggle("oculto");
      boton.textContent = detalle.classList.contains("oculto")
        ? "Ver más"
        : "Ver menos";
    });
  });
const text = "Diseño Digital | Desarrollo Web | Marketing";
const inputField = document.getElementById("animatedInput");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    inputField.value += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    inputField.classList.add("shake");
  }
}

setTimeout(typeEffect, 500);


  // 🎨 FILTRADO + ANIMACIÓN de PROYECTOS
  const botonesFiltro = document.querySelectorAll(".filtro-proyecto-btn");
  const proyectosContainer = document.querySelector(".proyectos-container");
  const proyectos = document.querySelectorAll(".proyecto");

  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-categoria");

      let visibles = 0;
      proyectos.forEach(proyecto => {
        if (categoria === "todos" || proyecto.classList.contains(categoria)) {
          proyecto.style.display = "block";
          visibles++;
        } else {
          proyecto.style.display = "none";
        }
      });

      if (visibles === 1) {
        proyectosContainer.style.display = "flex";
        proyectosContainer.style.justifyContent = "center";
      } else {
        proyectosContainer.style.display = "grid";
      }
    });
  });

  // Mostrar proyectos al azar al cargar
  const categoriasProyectos = ["web", "marketing", "grafico"];
  const randomCat = categoriasProyectos[Math.floor(Math.random() * categoriasProyectos.length)];
  proyectos.forEach(proyecto => {
    proyecto.style.display = proyecto.classList.contains(randomCat) ? "block" : "none";
  });

  // 🧠 "Sobre mí": cambio de sección con botón activo
  const botonesSobreMi = document.querySelectorAll(".btn-sobre-mi");
  const seccionesSobreMi = document.querySelectorAll(".seccion-sobre-mi");

  if (botonesSobreMi.length > 0 && seccionesSobreMi.length > 0) {
    botonesSobreMi.forEach(boton => {
      boton.addEventListener("click", () => {
        const seccionSeleccionada = boton.getAttribute("data-seccion");

        seccionesSobreMi.forEach(seccion => seccion.classList.add("hidden"));
        document.getElementById(seccionSeleccionada).classList.remove("hidden");

        botonesSobreMi.forEach(btn => btn.classList.remove("activo"));
        boton.classList.add("activo");
      });
    });

    botonesSobreMi[0].classList.add("activo");
    const primerId = botonesSobreMi[0].getAttribute("data-seccion");
    document.getElementById(primerId).classList.remove("hidden");
  }

  // 🍔 MENÚ HAMBURGUESA
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle?.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});

