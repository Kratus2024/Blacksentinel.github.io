document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const password = document.getElementById("password").value.trim();
    const idioma = document.getElementById("idioma").value;
    const tema = document.getElementById("tema").value;

    if (!nombre || !correo || !password) {
      alert("Por favor, completa todos los campos obligatorios.");
      return;
    }

    const configuracion = { nombre, correo, idioma, tema };
    localStorage.setItem("configuracionUsuario", JSON.stringify(configuracion));

    alert("Configuración guardada correctamente.");

    if (tema === "Claro") {
      document.body.style.background = "#f0f0f0";
      document.body.style.color = "#000";
    } else {
      document.body.style.background = "radial-gradient(circle at center, #0a1a2f 0%, #000814 100%)";
      document.body.style.color = "#fff";
    }
  });
});
