const ejercicio_uno_formulario = document.getElementById(
  "ejercicio_uno_formulario"
);
const ejercicio_uno_resultado = document.querySelector(
  ".ejercicio_uno_resultado"
);

const input_nombre = document.getElementById("ejercicio_uno_nombre");
const input_asunto = document.getElementById("ejercicio_uno_asunto");
const textarea_mensaje = document.getElementById("ejercicio_uno_mensaje");

const ejercicio_uno_errorNombre = document.querySelector(
  ".ejercicio_uno_errorNombre"
);
const ejercicio_uno_errorAsunto = document.querySelector(
  ".ejercicio_uno_errorAsunto"
);
const ejercicio_uno_errorMensaje = document.querySelector(
  ".ejercicio_uno_errorMensaje"
);

ejercicio_uno_formulario.addEventListener(
  "submit",
  function (evento) {
    const form = evento.target;
    if (!form.checkValidity()) {
      evento.stopPropagation();
    }
    if (form.checkValidity()) {
      ejercicio_uno_resultado.classList.add("show_formulario_validado_message");
      ejercicio_uno_errorNombre.classList.remove("error_contenedor_activo");
      ejercicio_uno_errorAsunto.classList.remove("error_contenedor_activo");
      ejercicio_uno_errorMensaje.classList.remove("error_contenedor_activo");
    } else {
      ejercicio_uno_resultado.classList.remove(
        "show_formulario_validado_message"
      );
      validar_input(input_nombre, ejercicio_uno_errorNombre);
      validar_input(input_asunto, ejercicio_uno_errorAsunto);
      validar_input(textarea_mensaje, ejercicio_uno_errorMensaje);
    }
    evento.preventDefault();
    form.classList.add("was-validated");
  },
  false
);

function validar_input(input_a_validar, elemento_mensaje) {
  if (/^[a-zA-Z\s]+$/g.test(input_a_validar.value)) {
    input_a_validar.setCustomValidity("");
    elemento_mensaje.classList.remove("error_contenedor_activo");
  } else {
    input_a_validar.setCustomValidity(
      "El campo no debe estar vacio y solo debe tener letras."
    );
    elemento_mensaje.classList.add("error_contenedor_activo");
  }
}

input_nombre.addEventListener("input", (evento) => {
  validar_input(evento.target, ejercicio_uno_errorNombre);
});

input_asunto.addEventListener("input", (evento) => {
  validar_input(evento.target, ejercicio_uno_errorAsunto);
});

textarea_mensaje.addEventListener("input", (evento) => {
  validar_input(evento.target, ejercicio_uno_errorMensaje);
});
