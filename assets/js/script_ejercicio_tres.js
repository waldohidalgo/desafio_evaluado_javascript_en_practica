const input_valor_1 = document.getElementById("ejercicio_tres_valor_1");
const input_valor_2 = document.getElementById("ejercicio_tres_valor_2");

const ejercicio_tres_btn_sumar = document.getElementById(
  "ejercicio_tres_btn-sumar"
);
const ejercicio_tres_btn_restar = document.getElementById(
  "ejercicio_tres_btn-restar"
);

const calculadora_resultado = document.querySelector(
  ".ejercicio_tres_contenedor_calculadora .resultado"
);

function validacionInputs(evento) {
  const data_ingresada = evento.data;
  if (evento.target.value.length == 1) {
    if (data_ingresada == "-") {
      evento.target.value = "-";
    }
    if (
      (isNaN(+evento.target.value) ||
        data_ingresada == " " ||
        data_ingresada == "e") &&
      data_ingresada != "-"
    ) {
      evento.target.value = evento.target.value.slice(0, -1);
    }
  } else {
    if (
      isNaN(+evento.target.value) ||
      data_ingresada == " " ||
      data_ingresada == "e"
    ) {
      evento.target.value = evento.target.value.slice(0, -1);
    }
  }
}
input_valor_1.addEventListener("input", (evento) => {
  validacionInputs(evento);
});

input_valor_2.addEventListener("input", (evento) => {
  validacionInputs(evento);
});

ejercicio_tres_btn_sumar.addEventListener("click", () => {
  const valor1 = +input_valor_1.value;
  const valor2 = +input_valor_2.value;
  calculadora_resultado.innerHTML = `${valor1 + valor2}`;
});

ejercicio_tres_btn_restar.addEventListener("click", () => {
  const valor1 = +input_valor_1.value;
  const valor2 = +input_valor_2.value;
  calculadora_resultado.innerHTML = `${
    valor1 - valor2 < 0 ? 0 : valor1 - valor2
  }`;
});
