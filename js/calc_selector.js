// Evita retroceder
window.history.pushState(null, "", window.location.href);
window.onpopstate = function () {
  window.history.pushState(null, "", window.location.href);
};

// Revisa sesión
if (!localStorage.getItem("usuarioActivo")) {
  window.location.href = "../index.html";
}

document.addEventListener("DOMContentLoaded", () => {
  //primera parte
  const btn_Permutaciones = document.getElementById("btn_Permutaciones");
  const btn_Permutaciones_r = document.getElementById("btn_Permutaciones_r");
  const btn_Combinaciones = document.getElementById("btn_Combinaciones");
  //segunda parte
  const btn_favorables_posibles = document.getElementById(
    "btn_favorables_posibles"
  );
  const btn_Regla_suma = document.getElementById("btn_Regla_suma");
  const btn_Eventos_excluyentes = document.getElementById(
    "btn_Eventos_excluyentes"
  );
  const btn_Eventos_no_excluyentes = document.getElementById(
    "btn_Eventos_no_excluyentes"
  );
  const btn_Regla_producto = document.getElementById("btn_Regla_producto");
  const btn_Eventos_independientes = document.getElementById(
    "btn_Eventos_independientes"
  );
  const btn_Eventos_dependientes = document.getElementById(
    "btn_Eventos_dependientes"
  );
  const btn_Complemento_evento = document.getElementById(
    "btn_Complemento_evento"
  );
  //tercera parte
  const pb_condicional = document.getElementById("pb_condicional");
  const pb_objetiva = document.getElementById("pb_objetiva");
  const pb_binominal = document.getElementById("pb_binominal");
  const pb_poisson = document.getElementById("pb_poisson");
  const pb_Exponencial = document.getElementById("pb_Exponencial");
  const pb_binominalNegativa = document.getElementById("pb_binominalNegativa");
  const pb_DistribucionNormal = document.getElementById(
    "pb_DistribucionNormal"
  );

  (function () {
    btn_Permutaciones.addEventListener("click", () => {
      const input = 1;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Permutaciones_r.addEventListener("click", () => {
      const input = 2;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Combinaciones.addEventListener("click", () => {
      const input = 3;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_favorables_posibles.addEventListener("click", () => {
      const input = 4;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Regla_suma.addEventListener("click", () => {
      const input = 5;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Eventos_excluyentes.addEventListener("click", () => {
      const input = 6;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Eventos_no_excluyentes.addEventListener("click", () => {
      const input = 7;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Regla_producto.addEventListener("click", () => {
      const input = 8;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Eventos_independientes.addEventListener("click", () => {
      const input = 9;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Eventos_dependientes.addEventListener("click", () => {
      const input = 10;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    btn_Complemento_evento.addEventListener("click", () => {
      const input = 11;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });

    pb_condicional.addEventListener("click", () => {
      const input = 12;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    pb_objetiva.addEventListener("click", () => {
      const input = 13;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    pb_binominal.addEventListener("click", () => {
      const input = 14;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    pb_poisson.addEventListener("click", () => {
      const input = 15;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    pb_Exponencial.addEventListener("click", () => {
      const input = 16;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    pb_binominalNegativa.addEventListener("click", () => {
      const input = 17;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
    pb_DistribucionNormal.addEventListener("click", () => {
      const input = 18;
      localStorage.setItem("mensaje", input);
      window.location.href = "./calc.html";
    });
  })();
});
