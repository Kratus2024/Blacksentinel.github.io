document.addEventListener("DOMContentLoaded", () => {
  const logConsole = document.getElementById("logConsole");

  function addLog(message) {
    const hora = new Date().toLocaleTimeString(); // hora local
    const p = document.createElement("p");
    p.textContent = `[${hora}] ${message}`;
    logConsole.appendChild(p);
    logConsole.scrollTop = logConsole.scrollHeight;
  }

  // Logs iniciales
  addLog("Sistema iniciado...");
  addLog("Conexión segura TLS 1.3 establecida.");
  addLog("Escaneo de vulnerabilidades completado.");

  // Simulación de nuevos eventos
  setTimeout(() => addLog("Nuevo activo registrado."), 3000);
  setTimeout(() => addLog("Vulnerabilidad crítica detectada."), 6000);
  setTimeout(() => addLog("Reporte mensual generado."), 9000);
});
