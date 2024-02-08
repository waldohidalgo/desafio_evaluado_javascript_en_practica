const btns_colores = document.querySelectorAll(".ejercicio_dos_btn_color");
const caja = document.getElementById("caja");

for (let btn_color of btns_colores) {
  btn_color.addEventListener("click", (evento) => {
    const color_btn = evento.target.style.backgroundColor;
    caja.style.backgroundColor = color_btn;
  });
}

const resetear_color = document.querySelector(".resetear_color");

resetear_color.addEventListener("click", () => {
  caja.style.backgroundColor = "white";
});
