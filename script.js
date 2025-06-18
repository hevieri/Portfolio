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
    web: "Como desarrolladora web, manejo HTML, CSS, JavaScript, PHP, MySQL y frameworks como Bootstrap y jQuery.",
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

    descripcionBloque.style.maxHeight = descripcionVisible ? "0" : "10rem";
    descripcionTexto.classList.toggle("opacity-0");
    descripcionTexto.classList.toggle("opacity-100");
    verMasBtn.textContent = descripcionVisible ? "Ver más" : "Ver menos";
    descripcionVisible = !descripcionVisible;
  });

  // 📦 BOTONES TIPO TOGGLE INDEPENDIENTES
  document.querySelectorAll(".toggleBtn").forEach(boton => {
    boton.addEventListener("click", () => {
      const contenido = document.getElementById(boton.dataset.target);
      contenido.classList.toggle("oculto");
      boton.textContent = contenido.classList.contains("oculto") ? "Ver más" : "Ver menos";
    });
  });

  // 🧩 CATEGORÍAS DE HABILIDADES TÉCNICAS
  const categoriaBotones = document.querySelectorAll(".categoriaBtn");
  const categorias = document.querySelectorAll(".categoria");

  categorias.forEach((cat, i) => {
    cat.classList.toggle("oculto", i !== 0);
  });

  categoriaBotones.forEach(boton => {
    boton.addEventListener("click", () => {
      categorias.forEach(cat => cat.classList.add("oculto"));
      const destino = document.getElementById(boton.dataset.target);
      destino.classList.remove("oculto");
    });
  });

  // 📚 TEXTOS "VER MÁS" EN HABILIDADES
  document.querySelectorAll(".verMasBtn").forEach(boton => {
    boton.addEventListener("click", () => {
      const detalle = document.getElementById(boton.dataset.target);
      detalle.classList.toggle("oculto");
      boton.textContent = detalle.classList.contains("oculto") ? "Ver más" : "Ver menos";
    });
  });

  // 🖋️ ANIMACIÓN DE INPUT (escritura)
  const inputField = document.getElementById("animatedInput");
  if (inputField) {
    const text = "Diseño Digital | Desarrollo Web | Marketing";
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
  }

  // 🎨 FILTRADO DE PROYECTOS
  const botonesFiltro = document.querySelectorAll(".filtro-proyecto-btn");
  const proyectosContainer = document.querySelector(".proyectos-container");
  const proyectos = document.querySelectorAll(".proyecto");

  botonesFiltro.forEach(boton => {
    boton.addEventListener("click", () => {
      const categoria = boton.getAttribute("data-categoria");

      let visibles = 0;
      proyectos.forEach(proyecto => {
        const coincide = categoria === "todos" || proyecto.classList.contains(categoria);
        proyecto.style.display = coincide ? "block" : "none";
        if (coincide) visibles++;
      });

      proyectosContainer.style.display = visibles === 1 ? "flex" : "grid";
      proyectosContainer.style.justifyContent = visibles === 1 ? "center" : "initial";
    });
  });

  // Mostrar una categoría al azar al cargar
  const categoriasProyectos = ["web", "marketing", "grafico", "multimedia"];
  const randomCat = categoriasProyectos[Math.floor(Math.random() * categoriasProyectos.length)];
  proyectos.forEach(proyecto => {
    proyecto.style.display = proyecto.classList.contains(randomCat) ? "block" : "none";
  });

  // 👤 "Sobre mí": mostrar secciones con botón activo

  
  const botonesSobreMi = document.querySelectorAll(".btn-sobre-mi");
const seccionesSobreMi = document.querySelectorAll(".seccion-sobre-mi");

if (botonesSobreMi.length && seccionesSobreMi.length) {
  botonesSobreMi.forEach(boton => {
    boton.addEventListener("click", () => {
      const id = boton.getAttribute("data-seccion");

      // Oculta todas las secciones primero
      seccionesSobreMi.forEach(seccion => {
        seccion.classList.add("oculto");
        seccion.classList.remove("mostrar");
      });

      // Muestra la seleccionada
      const seleccionada = document.getElementById(id);
      seleccionada.classList.remove("oculto");
      seleccionada.classList.add("mostrar");

      // Marca el botón activo
      botonesSobreMi.forEach(btn => btn.classList.remove("activo"));
      boton.classList.add("activo");
    });
  });

  // Opcional: iniciar con todo oculto
  seccionesSobreMi.forEach(seccion => {
    seccion.classList.add("oculto");
    seccion.classList.remove("mostrar");
  });
}


  // 🍔 MENÚ HAMBURGUESA
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  menuToggle?.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});
