document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");

  window.registrarActivo = () => {
    const id = prompt("Ingrese ID del activo:");
    const nombre = prompt("Ingrese nombre del activo:");
    const estado = prompt("Ingrese estado (Activo/Inactivo):");
    const responsable = prompt("Ingrese responsable:");

    if (id && nombre && estado && responsable) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${estado}</td>
        <td>${responsable}</td>
      `;
      tableBody.appendChild(row);
      alert("Activo registrado correctamente.");
    } else {
      alert("Todos los campos son obligatorios.");
    }
  };
});
