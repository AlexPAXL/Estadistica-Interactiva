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
  let datoRecibido = localStorage.getItem("mensaje");
  comparar();

  function comparar() {
    if (datoRecibido == null) {
      alert("ERRO DE CARDA DE DATOS.");
      console.log("Dato recibido:", datoRecibido);
    } else if (datoRecibido == 1) {
      getInfoById(1);
    } else if (datoRecibido == 2) {
      getInfoById(2);
    } else if (datoRecibido == 3) {
      getInfoById(3);
    } else if (datoRecibido == 4) {
      getInfoById(4);
    } else if (datoRecibido == 5) {
      getInfoById(5);
    } else if (datoRecibido == 6) {
      getInfoById(6);
    } else if (datoRecibido == 7) {
      getInfoById(7);
    } else if (datoRecibido == 8) {
      getInfoById(8);
    } else if (datoRecibido == 9) {
      getInfoById(9);
    } else if (datoRecibido == 10) {
      getInfoById(10);
    } else if (datoRecibido == 11) {
      getInfoById(11);
    } else if (datoRecibido == 12) {
      getInfoById(12);
    } else if (datoRecibido == 13) {
      getInfoById(13);
    } else if (datoRecibido == 14) {
      getInfoById(14);
    } else if (datoRecibido == 15) {
      getInfoById(15);
    } else if (datoRecibido == 16) {
      getInfoById(16);
    } else if (datoRecibido == 17) {
      getInfoById(16);
    } else if (datoRecibido == 18) {
      getInfoById(16);
    }
  }

  function getInfoById(id) {
    let titulo = "";
    let x = "";
    const myObj = {
      name: "John",
      age: 30,
      cars: [
        //********************primera parte */
        {
          name: "Permutaciones",
          models: [
            "Las permutaciones representan todas las posibles formas de ordenar un conjunto de elementos, donde el orden de los objetos es importante.",
            "El número total de permutaciones de n elementos distintos se calcula con la siguiente fórmula:",
            "P = n!",
            "<strong>P</strong>: Número total de permutaciones posibles.",
            "<strong>n</strong>: Número total de elementos a ordenar.",
            "<strong>!</strong>: Símbolo de factorial, que representa el producto de todos los números enteros positivos hasta n.",
            "Esta fórmula sólo aplica cuando todos los elementos son diferentes y se utilizan todos en cada ordenamiento.",
            "n - Número total de elementos",
            "n! - Factorial de n",
            "P - Total de formas posibles de ordenar los elementos",
            "El diagrama que aparece a continuación se actualiza según los valores ingresados. Visualiza cuántas permutaciones son posibles al variar la cantidad de elementos n.",
          ],
        },
        {
          name: "Permutaciones con r",
          models: [
            "Las permutaciones con r elementos muestran cuántas formas distintas existen para ordenar solo una parte del conjunto total, considerando que el orden sí importa.",
            "La fórmula general de las permutaciones con r elementos es:",
            "P(n, r) = n! / (n - r)!",
            "<strong>P(n, r)</strong>: Número de permutaciones de n elementos tomados de r en r.",
            "<strong>n</strong>: Número total de elementos disponibles.",
            "<strong>r</strong>: Número de elementos que se van a ordenar.",
            "Esta fórmula sólo aplica cuando los elementos son distintos y el orden influye en el resultado final.",
            "n - Total de elementos disponibles",
            "r - Elementos seleccionados para ordenar",
            "P(n, r) - Total de formas distintas de ordenar r elementos de un conjunto de n",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza cómo cambia el número de permutaciones al modificar n y r.",
          ],
        },
        {
          name: "Combinaciones",
          models: [
            "Las combinaciones representan las diferentes formas de seleccionar elementos de un conjunto sin importar el orden en que se elijan.",
            "El número total de combinaciones de n elementos tomados de r en r se calcula con la fórmula:",
            "C(n, r) = n! / (r! * (n - r)!)",
            "<strong>C(n, r)</strong>: Número de combinaciones posibles.",
            "<strong>n</strong>: Número total de elementos disponibles.",
            "<strong>r</strong>: Número de elementos seleccionados.",
            "Esta fórmula sólo aplica cuando el orden no afecta el resultado y los elementos no se repiten.",
            "n - Total de elementos disponibles",
            "r - Elementos seleccionados sin importar el orden",
            "C(n, r) - Total de combinaciones posibles",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza cómo cambia la cantidad de combinaciones al modificar n y r.",
          ],
        },
        //********************segunda parte */
        {
          name: "Concepto de probabilidad y casos favorables/posibles",
          models: [
            "La probabilidad mide la posibilidad de que ocurra un evento dentro de un experimento aleatorio. Su valor siempre se encuentra entre 0 y 1.",
            "La probabilidad clásica se define como la razón entre los casos favorables y los casos posibles.",
            "P(A) = n(A) / n(E)",
            "<strong>P(A)</strong>: Probabilidad de que ocurra el evento A.",
            "<strong>n(A)</strong>: Número de casos favorables al evento A.",
            "<strong>n(E)</strong>: Número total de casos posibles del experimento.",
            "Esta fórmula sólo aplica cuando todos los resultados son igualmente probables.",
            "n(A) - Casos favorables",
            "n(E) - Casos posibles",
            "P(A) - Probabilidad de que ocurra el evento A",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza la proporción entre los casos favorables y los casos posibles.",
          ],
        },
        {
          name: "Regla de la suma",
          models: [
            "La regla de la suma se utiliza para calcular la probabilidad de que ocurra al menos uno de dos eventos.",
            "Si los eventos A y B son mutuamente excluyentes, la probabilidad se obtiene sumando las probabilidades individuales.",
            "P(A ∪ B) = P(A) + P(B)",
            "<strong>P(A ∪ B)</strong>: Probabilidad de que ocurra A o B.",
            "<strong>P(A)</strong>: Probabilidad de que ocurra el evento A.",
            "<strong>P(B)</strong>: Probabilidad de que ocurra el evento B.",
            "Esta fórmula sólo aplica cuando A y B no pueden ocurrir al mismo tiempo (eventos excluyentes).",
            "P(A) - Probabilidad del evento A",
            "P(B) - Probabilidad del evento B",
            "P(A ∪ B) - Probabilidad de que ocurra A o B",
            "El diagrama que aparece a continuación se actualiza según los valores de la calculadora. Visualiza cómo se suman las áreas de A y B en el caso de eventos excluyentes.",
          ],
        },
        {
          name: "Eventos excluyentes",
          models: [
            "Los eventos excluyentes son aquellos que no pueden ocurrir al mismo tiempo en un mismo experimento aleatorio.",
            "Cuando dos eventos son excluyentes, la ocurrencia de uno impide la del otro.",
            "P(A ∩ B) = 0",
            "<strong>P(A ∩ B)</strong>: Probabilidad de que ocurran A y B al mismo tiempo.",
            "<strong>P(A ∪ B)</strong>: Probabilidad de que ocurra A o B.",
            "<strong>P(A ∪ B) = P(A) + P(B)</strong> si los eventos son excluyentes.",
            "Esta condición indica que los eventos no tienen resultados en común.",
            "A y B - Eventos distintos sin intersección",
            "P(A ∩ B) = 0 - No hay coincidencia entre A y B",
            "P(A ∪ B) - Probabilidad combinada de A o B",
            "El diagrama que aparece a continuación muestra cómo los eventos excluyentes no se superponen en el espacio muestral.",
          ],
        },
        {
          name: "Eventos no excluyentes",
          models: [
            "Los eventos no excluyentes son aquellos que pueden ocurrir simultáneamente dentro de un mismo experimento.",
            "La probabilidad de que ocurra A o B se calcula restando la intersección entre ambos eventos.",
            "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
            "<strong>P(A ∪ B)</strong>: Probabilidad de que ocurra A o B.",
            "<strong>P(A ∩ B)</strong>: Probabilidad de que ocurran A y B al mismo tiempo.",
            "<strong>P(A)</strong> y <strong>P(B)</strong>: Probabilidades individuales de cada evento.",
            "Esta fórmula evita contar dos veces la intersección de A y B.",
            "P(A) - Probabilidad del evento A",
            "P(B) - Probabilidad del evento B",
            "P(A ∩ B) - Probabilidad conjunta de A y B",
            "El diagrama que aparece a continuación muestra la superposición entre los eventos A y B en el caso de eventos no excluyentes.",
          ],
        },
        {
          name: "Regla del producto",
          models: [
            "La regla del producto se utiliza para calcular la probabilidad de que ocurran simultáneamente dos eventos.",
            "Cuando los eventos A y B son independientes, su probabilidad conjunta se obtiene multiplicando sus probabilidades individuales.",
            "P(A ∩ B) = P(A) * P(B)",
            "<strong>P(A ∩ B)</strong>: Probabilidad de que ocurran A y B al mismo tiempo.",
            "<strong>P(A)</strong>: Probabilidad del evento A.",
            "<strong>P(B)</strong>: Probabilidad del evento B.",
            "Esta fórmula sólo aplica si los eventos no se afectan entre sí (independientes).",
            "P(A) - Probabilidad del evento A",
            "P(B) - Probabilidad del evento B",
            "P(A ∩ B) - Probabilidad conjunta de A y B",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza la relación entre A y B según la regla del producto.",
          ],
        },
        {
          name: "Regla del producto",
          models: [
            "La regla del producto se utiliza para calcular la probabilidad de que ocurran simultáneamente dos eventos.",
            "Cuando los eventos A y B son independientes, su probabilidad conjunta se obtiene multiplicando sus probabilidades individuales.",
            "P(A ∩ B) = P(A) * P(B)",
            "<strong>P(A ∩ B)</strong>: Probabilidad de que ocurran A y B al mismo tiempo.",
            "<strong>P(A)</strong>: Probabilidad del evento A.",
            "<strong>P(B)</strong>: Probabilidad del evento B.",
            "Esta fórmula sólo aplica si los eventos no se afectan entre sí (independientes).",
            "P(A) - Probabilidad del evento A",
            "P(B) - Probabilidad del evento B",
            "P(A ∩ B) - Probabilidad conjunta de A y B",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza la relación entre A y B según la regla del producto.",
          ],
        },
        {
          name: "Eventos dependientes",
          models: [
            "Los eventos dependientes son aquellos en los que la ocurrencia de uno modifica la probabilidad de que ocurra el otro.",
            "La probabilidad conjunta se calcula multiplicando la probabilidad del primero por la probabilidad condicional del segundo.",
            "P(A ∩ B) = P(A) * P(B|A)",
            "<strong>P(A ∩ B)</strong>: Probabilidad de que ocurran A y B.",
            "<strong>P(B|A)</strong>: Probabilidad de que ocurra B dado que A ya ocurrió.",
            "<strong>P(A)</strong>: Probabilidad de que ocurra el evento A.",
            "Esta fórmula muestra cómo el primer evento afecta al segundo.",
            "P(A) - Probabilidad inicial del evento A",
            "P(B|A) - Probabilidad condicionada de B dado A",
            "P(A ∩ B) - Probabilidad conjunta ajustada por dependencia",
            "El diagrama que aparece a continuación muestra cómo cambia la probabilidad de B cuando A ya ha ocurrido.",
          ],
        },
        {
          name: "Complemento de un evento",
          models: [
            "El complemento de un evento representa la probabilidad de que dicho evento no ocurra.",
            "Si A es un evento, su complemento se denota como A’ o Ac.",
            "P(A’) = 1 - P(A)",
            "<strong>P(A’)</strong>: Probabilidad de que no ocurra el evento A.",
            "<strong>P(A)</strong>: Probabilidad de que ocurra el evento A.",
            "<strong>1</strong>: Representa la totalidad del espacio muestral.",
            "Esta relación indica que la suma de las probabilidades de A y su complemento siempre es igual a 1.",
            "A - Evento que puede ocurrir",
            "A’ - Evento complementario (A no ocurre)",
            "P(A’) - Probabilidad de no ocurrencia de A",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza la relación entre un evento y su complemento en el espacio muestral.",
          ],
        },

        {
          name: "Probabilidad Condicional",
          models: [
            "La probabilidad condicional mide la probabilidad de que ocurra un evento, dado que otro evento ya ha ocurrido. Es un concepto fundamental en la teoría de la probabilidad y desempeña un papel crucial en diversos campos como el aprendizaje automático, las finanzas y el diagnóstico médico.",
            "La probabilidad condicional se define como:",
            "P(A|B) = P(A ∩ B) / P(B)",
            "<strong>P(A|B)</strong>: Probabilidad de que ocurra A dado que B ya ocurrió.",
            "<strong>P(A ∩ B)</strong>: Probabilidad de que ambos eventos ocurran al mismo tiempo.",
            "<strong>P(B)</strong>: Probabilidad del evento B.",
            "Esta fórmula sólo aplica si <strong>P(B) > 0</strong>. Cuando B tiene probabilidad cero significa que no puede ocurrir, por lo tanto, no es posible condicionar sobre él.",
            "P(A ∩ B) - Probabilidad de A y B",
            "P(B) - Probabilidad de B",
            "P(A|B)",
            "El diagrama de Venn que aparece a continuación se actualiza según los valores de la calculadora. Visualiza la relación entre los eventos A y B.",
          ],
        },
        {
          name: "Probabilidad Objetiva",
          models: [
            "La probabilidad objetiva se basa en hechos reales, datos observables o frecuencias relativas obtenidas mediante la experimentación o la observación repetida de un fenómeno.",
            "La probabilidad objetiva se puede calcular mediante la siguiente fórmula:",
            "P(A) = n(A) / n(E)",
            "<strong>P(A)</strong>: Probabilidad de que ocurra el evento A.",
            "<strong>n(A)</strong>: Número de resultados favorables al evento A.",
            "<strong>n(E)</strong>: Número total de resultados posibles en el experimento.",
            "Esta definición está estrechamente vinculada a la <strong>frecuencia relativa</strong>, la cual se aproxima a la probabilidad real a medida que aumenta el número de repeticiones del experimento.",
            "n(A)",
            "n(E)",
            "P(A)",
            "En la visualización siguiente, la calculadora muestra cómo se relacionan los resultados favorables y el total de casos posibles para estimar la probabilidad objetiva.",
          ],
        },
        {
          name: "Distribución Binomial",
          models: [
            "La distribución binomial permite calcular la probabilidad de obtener un número específico de éxitos en una cantidad fija de ensayos independientes, donde cada ensayo tiene dos resultados posibles: éxito o fracaso.",
            "La distribución binomial se define mediante la siguiente fórmula:",
            "P(X = k) = C(n, k) * p^k * (1 - p)^(n - k)",
            "<strong>P(X = k)</strong>: Probabilidad de obtener exactamente k éxitos en n ensayos.",
            "<strong>C(n, k)</strong>: Número de combinaciones posibles, calculado como n! / (k! * (n - k)!).",
            "<strong>p</strong>: Probabilidad de éxito en un solo ensayo.",
            "Esta fórmula sólo aplica si los ensayos son independientes y la probabilidad de éxito se mantiene constante en cada uno.",
            "n - Número total de ensayos",
            "k - Número de éxitos deseados",
            "p - Probabilidad de éxito en cada ensayo",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza la probabilidad de obtener distintos números de éxitos en una distribución binomial.",
          ],
        },
        {
          name: "Distribución de Poisson",
          models: [
            "La distribución de Poisson se utiliza para modelar la probabilidad de que ocurra un número determinado de eventos en un intervalo fijo de tiempo o espacio, siempre que dichos eventos ocurran de manera independiente y con una tasa promedio constante.",
            "La distribución de Poisson se define mediante la siguiente fórmula:",
            "P(X = k) = (λ^k * e^(-λ)) / k!",
            "<strong>P(X = k)</strong>: Probabilidad de que ocurran exactamente k eventos en el intervalo.",
            "<strong>λ (lambda)</strong>: Promedio de ocurrencias esperadas por intervalo.",
            "<strong>e</strong>: Constante de Euler, aproximadamente igual a 2.71828.",
            "Esta fórmula sólo aplica cuando los eventos son independientes y ocurren con una frecuencia promedio constante en el tiempo o el espacio.",
            "λ - Tasa promedio de ocurrencias",
            "k - Número de eventos que se desea observar",
            "P(X = k) - Probabilidad de que ocurran k eventos",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza cómo cambia la probabilidad de ocurrencia de eventos según el valor de λ en la distribución de Poisson.",
          ],
        },
        {
          name: "Distribución Exponencial",
          models: [
            "La distribución exponencial se utiliza para modelar el tiempo que transcurre entre la ocurrencia de eventos sucesivos en un proceso que sigue una tasa constante y donde los eventos ocurren de manera independiente.",
            "La distribución exponencial se define mediante la siguiente fórmula:",
            "f(x) = λ * e^(-λx), para x ≥ 0",
            "<strong>f(x)</strong>: Función de densidad de probabilidad en el punto x.",
            "<strong>λ (lambda)</strong>: Tasa de ocurrencia promedio o parámetro de la distribución.",
            "<strong>e</strong>: Constante de Euler, aproximadamente igual a 2.71828.",
            "Esta fórmula sólo aplica cuando los eventos son independientes y el proceso ocurre de manera continua en el tiempo.",
            "λ - Tasa promedio de ocurrencia por unidad de tiempo",
            "x - Tiempo transcurrido hasta el siguiente evento",
            "f(x) - Probabilidad de que el evento ocurra en el intervalo de tiempo x",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza cómo cambia la forma de la distribución al modificar el valor de λ en la distribución exponencial.",
          ],
        },
        {
          name: "Distribución Binomial Negativa",
          models: [
            "La distribución binomial negativa modela el número de ensayos necesarios para obtener un número fijo de éxitos en una serie de ensayos independientes, donde cada ensayo tiene dos posibles resultados: éxito o fracaso.",
            "La distribución binomial negativa se define mediante la siguiente fórmula:",
            "P(X = x) = C(x - 1, r - 1) * p^r * (1 - p)^(x - r)",
            "<strong>P(X = x)</strong>: Probabilidad de que el r-ésimo éxito ocurra en el x-ésimo ensayo.",
            "<strong>C(x - 1, r - 1)</strong>: Número de combinaciones posibles, calculado como (x - 1)! / ((r - 1)! * (x - r)!).",
            "<strong>p</strong>: Probabilidad de éxito en un solo ensayo.",
            "Esta fórmula sólo aplica si los ensayos son independientes y la probabilidad de éxito se mantiene constante en cada intento.",
            "r - Número de éxitos deseados",
            "x - Número total de ensayos realizados hasta lograr r éxitos",
            "p - Probabilidad de éxito en cada ensayo",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza cómo cambia la probabilidad de obtener el r-ésimo éxito según el número de ensayos en la distribución binomial negativa.",
          ],
        },
        {
          name: "Distribución Normal",
          models: [
            "La distribución normal, también conocida como distribución gaussiana, es una de las más importantes en estadística, ya que describe muchos fenómenos naturales y sociales donde los datos tienden a agruparse alrededor de un valor medio.",
            "La distribución normal se define mediante la siguiente fórmula:",
            "f(x) = (1 / (σ√(2π))) * e^(-((x - μ)²) / (2σ²))",
            "<strong>f(x)</strong>: Valor de la función de densidad de probabilidad en el punto x.",
            "<strong>μ (mu)</strong>: Media o valor esperado de la distribución.",
            "<strong>σ (sigma)</strong>: Desviación estándar, que mide la dispersión de los datos respecto a la media.",
            "Esta fórmula sólo aplica para variables continuas y se caracteriza por su forma de campana simétrica alrededor de la media.",
            "μ - Media de la distribución",
            "σ - Desviación estándar",
            "x - Valor de la variable aleatoria",
            "El gráfico que aparece a continuación se actualiza según los valores de la calculadora. Visualiza cómo cambian la forma y la dispersión de la distribución al modificar μ y σ en la distribución normal.",
          ],
        },
      ],
    };
    // irCalculadora();

    for (let i in myObj.cars) {
      if (id - 1 == i) {
        titulo = myObj.cars[i].name;
        document.getElementById("titulo").innerHTML = myObj.cars[i].name;
        document.getElementById("texto").innerHTML = myObj.cars[i].models[0];
        document.getElementById("descFormula").innerHTML =
          myObj.cars[i].models[1];
        document.getElementById("formula").innerHTML = myObj.cars[i].models[2];
        document.getElementById("concepto1").innerHTML =
          myObj.cars[i].models[3];
        document.getElementById("concepto2").innerHTML =
          myObj.cars[i].models[4];
        document.getElementById("concepto3").innerHTML =
          myObj.cars[i].models[5];
        document.getElementById("descCalculadora").innerHTML =
          myObj.cars[i].models[6];
        document.getElementById("regla1").innerHTML = myObj.cars[i].models[7];
        document.getElementById("regla2").innerHTML = myObj.cars[i].models[8];
        document.getElementById("tituloResult").innerHTML =
          myObj.cars[i].models[9];
        document.getElementById("interDiagrama").innerHTML =
          myObj.cars[i].models[10];
      }
    }

    document.getElementById("tituloOpciones").innerHTML = titulo;
  }
});

function irAtras() {
  window.history.back();
}
function irInicio() {
  window.location.href = "./calc_selector.html";
}

function irCalculadora() {
  document.getElementById("tituloOpciones").innerHTML = "";
  document.getElementById("titulo").innerHTML = "";
  document.getElementById("texto").innerHTML = "";
  document.getElementById("descFormula").innerHTML = "";
  document.getElementById("formula").innerHTML = "";
  document.getElementById("concepto1").innerHTML = "";
  document.getElementById("concepto2").innerHTML = "";
  document.getElementById("concepto3").innerHTML = "";
  document.getElementById("descCalculadora").innerHTML = "";
  document.getElementById("regla1").innerHTML = "";
  document.getElementById("regla2").innerHTML = "";
  document.getElementById("tituloResult").innerHTML = "";
  document.getElementById("interDiagrama").innerHTML = "";
}
