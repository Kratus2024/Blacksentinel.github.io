document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector("tbody");
  <li><a href="reportes.html">Reportes</a></li>


  window.generarReporte = () => {
    const id = "REP-" + Math.floor(Math.random() * 1000);
    const nombre = prompt("Ingrese nombre del reporte:");
    const fecha = new Date().toLocaleDateString();

    if (nombre) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${id}</td>
        <td>${nombre}</td>
        <td>${fecha}</td>
        <td><button onclick="exportarPDF('${id}')">Exportar PDF</button></td>
      `;
      tableBody.appendChild(row);
      alert("Reporte generado correctamente.");
    } else {
      alert("Debe ingresar un nombre para el reporte.");
    }
  };

  window.exportarPDF = (id) => {
    alert("Exportando reporte " + id + " a PDF...");
  };
});
