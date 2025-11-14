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
  const dato1 = document.getElementById("txt_dato1");
  const dato2 = document.getElementById("txt_dato2");
  const dato3 = document.getElementById("txt_dato3");
  const btn = document.getElementById("btn_calcular");
  const res = document.getElementById("txt_result");
  const historialContainer = document.getElementById("div_history");

  //operaciones de control
  const calcularPermutaciones = (n) => factorial(n);
  const calcularPermutacionesConR = (n, r) => factorial(n) / factorial(n - r);
  const calcularCombinaciones = (n, r) =>
    factorial(n) / (factorial(r) * factorial(n - r));
  const calcularBinomial = (n, k, p) =>
    calcularCombinaciones(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
  const calcularPoisson = (l, x) =>
    (Math.pow(l, x) * Math.exp(-l)) / factorial(x);
  const calcularExponencial = (l, x) => l * Math.exp(-l * x);
  const calcularBinomialNegativa = (x, r, p) =>
    calcularCombinaciones(x - 1, r - 1) *
    Math.pow(1 - p, x - r) *
    Math.pow(p, r);

  let tema = parseInt(localStorage.getItem("mensaje"));

  if (!tema) {
    alert("❌ Error al cargar el tema.");
    return;
  }

  // Validar entradas

  configurarTema(tema);

  // CONFIGURACIÓN SEGÚN EL TEMA

  function configurarTema(op) {
    ocultarCampos();

    const temas = {
      1: ["Permutaciones", "P = n!", [dato1], calcularPermutaciones],
      2: [
        "Permutaciones con r",
        "P = n! / (n - r)!",
        [dato1, dato2],
        calcularPermutacionesConR,
      ],
      3: [
        "Combinaciones",
        "C = n! / (r! * (n - r)!)",
        [dato1, dato2],
        calcularCombinaciones,
      ],
      4: [
        "Probabilidad (Casos favorables / posibles)",
        "P = f / n",
        [dato1, dato2],
        (f, n) => f / n,
      ],
      5: [
        "Regla de la Suma",
        "P(A ∪ B) = P(A) + P(B)",
        [dato1, dato2],
        (a, b) => a + b,
      ],
      6: [
        "Eventos excluyentes",
        "P(A ∪ B) = P(A) + P(B)",
        [dato1, dato2],
        (a, b) => a + b,
      ],
      7: [
        "Eventos no excluyentes",
        "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        [dato1, dato2, dato3],
        (a, b, ab) => a + b - ab,
      ],
      8: [
        "Regla del Producto",
        "P(A ∩ B) = P(A) * P(B|A)",
        [dato1, dato2],
        (a, b) => a * b,
      ],
      9: [
        "Eventos Independientes",
        "P(A ∩ B) = P(A) * P(B)",
        [dato1, dato2],
        (a, b) => a * b,
      ],
      10: [
        "Eventos Dependientes",
        "P(A ∩ B) = P(A) * P(B|A)",
        [dato1, dato2],
        (a, b) => a * b,
      ],
      11: [
        "Complemento de un evento",
        "P(A') = 1 - P(A)",
        [dato1],
        (a) => 1 - a,
      ],
      12: [
        "Probabilidad Condicional",
        "P(A|B) = P(A ∩ B) / P(B)",
        [dato1, dato2],
        (ab, b) => ab / b,
      ],
      13: [
        "Probabilidad Objetiva",
        "P = f / n",
        [dato1, dato2],
        (f, n) => f / n,
      ],
      14: [
        "Distribución Binomial",
        "P(X=k) = C(n,k)*p^k*(1-p)^(n-k)",
        [dato1, dato2, dato3],
        calcularBinomial,
      ],
      15: [
        "Distribución de Poisson",
        "P(x) = (λ^x * e^-λ) / x!",
        [dato1, dato2],
        calcularPoisson,
      ],
      16: [
        "Distribución Exponencial",
        "P(x) = λ * e^(-λx)",
        [dato1, dato2],
        calcularExponencial,
      ],
      17: [
        "Distribución Binomial Negativa",
        "P(x) = C(x-1,r-1)*(1-p)^(x-r)*p^r",
        [dato1, dato2, dato3],
        calcularBinomialNegativa,
      ],
      18: [
        "Distribución Normal",
        "Z = (x - μ) / σ",
        [dato1, dato2, dato3],
        (x, mu, s) => (x - mu) / s,
      ],
    };

    const [nombre, formula, campos, funcion] = temas[op];
    document.getElementById("titulo").textContent = nombre;
    document.getElementById("formula").textContent = formula;

    //mowstrar y ocultar campos
    mostrarCampos(campos);

    btn.onclick = () => {
      const valores = [dato1.value, dato2.value, dato3.value].map(parseFloat);
      // const resul = funcion(...valores);
      // if (!isNaN(resul)) mostrarResultado(nombre, resul);
      const resul = funcion(...valores);

      if (!isNaN(resul)) {
        mostrarResultado(nombre, resul);

        // Si el tema es binomial, graficamos todo el rango
        if (tema === 14) {
          const [n, k, p] = valores;
          const labels = [];
          const data = [];

          for (let x = 0; x <= n; x++) {
            labels.push(x);
            data.push(calcularBinomial(n, x, p));
          }

          graficar(labels, data, "Distribución Binomial");
        }
      }
      if (tema === 15) {
        const [λ] = valores;
        const labels = [];
        const data = [];

        for (let x = 0; x <= 15; x++) {
          labels.push(x);
          data.push(calcularPoisson(λ, x));
        }

        graficar(labels, data, "Distribución de Poisson");
      }
      if (tema === 16) {
        const [λ] = valores;
        const labels = [];
        const data = [];

        for (let x = 0; x <= 10; x += 0.5) {
          labels.push(x.toFixed(1));
          data.push(calcularExponencial(λ, x));
        }

        graficar(labels, data, "Distribución Exponencial");
      }
      if (tema === 17) {
        const [x, r, p] = valores;
        const labels = [];
        const data = [];

        for (let i = r; i <= x + 5; i++) {
          labels.push(i);
          data.push(calcularBinomialNegativa(i, r, p));
        }

        graficar(labels, data, "Binomial Negativa");
      }
      if (tema === 18) {
        const [x, mu, sigma] = valores;

        const labels = [];
        const data = [];

        for (let z = -3; z <= 3; z += 0.25) {
          labels.push(z.toFixed(2));
          const y =
            (1 / (sigma * Math.sqrt(2 * Math.PI))) *
            Math.exp(-0.5 * Math.pow((z * sigma + mu - mu) / sigma, 2));
          data.push(y);
        }

        graficar(labels, data, "Distribución Normal");
      }

      Historial(formula, resul);
    };
  }

  // -----------------------------
  // FUNCIONES AUXILIARES
  // -----------------------------
  function factorial(n) {
    if (n < 0) return NaN;
    let r = 1;
    for (let i = 2; i <= n; i++) r *= i;
    return r;
  }

  function mostrarResultado(nombre, resultado) {
    res.textContent = resultado.toFixed(3);

    const div = document.createElement("div");
    div.className =
      "bg-gray-100 dark:bg-gray-800 p-3 rounded-lg text-sm shadow";
    div.innerHTML = `
      <p><b>${nombre}</b></p>
      <p>Resultado: <b>${resultado.toFixed(3)}</b></p>
      <p class="text-xs text-gray-500">${new Date().toLocaleTimeString()}</p>`;
    // hist.prepend(div);
  }

  // Ocultar todos los campos antes de mostrar solo los necesarios
  function ocultarCampos() {
    [dato1, dato2, dato3].forEach((d) => (d.style.display = "none"));
  }

  function mostrarCampos(campos) {
    // alert(campos.length);
    campos.forEach((d) => (d.style.display = "block"));

    // Limpiar campos no usados
    [dato1, dato2, dato3].forEach((d) =>
      !campos.includes(d) ? (d.value = "") : null
    );
  }

  function Historial(formula, resultado) {
    // --- Crear un nuevo elemento para el historial ---
    const item = document.createElement("div");
    item.className =
      "bg-gray-100 dark:bg-background-dark rounded-lg p-3 cursor-pointer hover:bg-gray-200 dark:hover:bg-[#233648]";

    // Fecha / hora actual corta
    const ahora = new Date();
    const hora =
      ahora.getHours().toString().padStart(2, "0") +
      ":" +
      ahora.getMinutes().toString().padStart(2, "0");

    // Estructura del historial
    item.innerHTML = `
      <p class="text-slate-800 dark:text-white font-mono text-sm">
        ${formula}
      </p>
      <div class="flex justify-between items-center mt-1">
        <p class="text-primary font-bold text-lg">${resultado}</p>
        <p class="text-slate-500 dark:text-[#92adc9] text-xs">${hora}</p>
      </div>
    `;

    // Insertar al inicio del historial
    if (historialContainer) {
      historialContainer.prepend(item);
    }
  }

  //gtrafica historial
  let chart = null;

  function graficar(labels, data, label = "Distribución") {
    const ctx = document.getElementById("chart").getContext("2d");

    if (chart) chart.destroy(); // Eliminar gráfico anterior

    chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: label,
            data: data,
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true },
        },
      },
    });
  }
});

d;
