function cerrarSesion() {
  localStorage.removeItem("usuarioActivo");
  window.location.href = "../index.html";
}

window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
  window.history.pushState(null, "", window.location.href);
};

// Revisa sesión
if (!localStorage.getItem("usuarioActivo")) {
  window.location.href = "../index.html";
}
