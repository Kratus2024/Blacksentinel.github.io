document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const remember = document.getElementById("remember").checked;

    if (!email || !password) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    if (email === "usuario@blacksentinel.com" && password === "123456") {
      alert("Inicio de sesión exitoso. Bienvenido a BlackSentinel.");
      if (remember) {
        localStorage.setItem("session", email);
      }
      window.location.href = "dashboard.html";
    } else {
      alert("Credenciales incorrectas. Intenta nuevamente.");
    }
  });
});

