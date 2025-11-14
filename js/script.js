// Pequeña mejora opcional: alterna visibilidad de la contraseña.
// No cambia el diseño, solo la interacción.
document.addEventListener("DOMContentLoaded", () => {
  const pwd = document.getElementById("password");
  const btn = document.getElementById("togglePwd");
  const login = document.getElementById("btnLoger");

  if (pwd && btn) {
    btn.addEventListener("click", () => {
      const isPwd = pwd.getAttribute("type") === "password";
      pwd.setAttribute("type", isPwd ? "text" : "password");
    });
  }

  login.addEventListener("click", () => {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    //  alert("Verificando credenciales...");

    if (username === "admin" && password === "admin") {
      //  alert("Inicio de sesión exitoso");
      localStorage.setItem("usuarioActivo", "true");
      window.location.href = "./html/dashboard.html";

      //  alert("Redirigiendo al panel de control...");
    } else {
      alert("Credenciales incorrectas");
    }
  });
});
