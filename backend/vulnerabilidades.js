document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");

  window.registrarVulnerabilidad = () => {
    const id = prompt("Ingrese ID de la vulnerabilidad:");
    const nombre = prompt("Ingrese nombre:");
    const severidad = prompt("Ingrese severidad (Alta/Media/Baja):");
    const estado = prompt("Ingrese estado:");
    const fecha = new Date().toLocaleDateString();

    if (id && nombre && severidad && estado) {
      let clase = "";
      if (severidad.toLowerCase() === "alta") clase = "severidad-alta";
      else if (severidad.toLowerCase() === "media") clase = "severidad-media";
      else clase = "severidad-baja";

      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${id}</td>
        <td>${nombre}</td>
        <td class="${clase}">${severidad}</td>
        <td>${estado}</td>
        <td>${fecha}</td>
      `;
      tableBody.appendChild(row);
      alert("Vulnerabilidad registrada correctamente.");
    } else {
      alert("Todos los campos son obligatorios.");
    }
  };
});
