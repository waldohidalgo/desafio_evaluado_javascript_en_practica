/*
Control de lightbox
*/
const carrusel_btn_img_1 = document.querySelectorAll(".carrusel_btn_img_1");
const carrusel_btn_img_2 = document.querySelectorAll(".carrusel_btn_img_2");
const carrusel_btn_img_3 = document.querySelectorAll(".carrusel_btn_img_3");

for (let btn of carrusel_btn_img_1) {
  btn.addEventListener("click", () => {
    showImage("./assets/img/requisitos_hoja_1.webp");
  });
}
for (let btn of carrusel_btn_img_2) {
  btn.addEventListener("click", () => {
    showImage("./assets/img/requisitos_hoja_2.webp");
  });
}

for (let btn of carrusel_btn_img_3) {
  btn.addEventListener("click", () => {
    showImage("./assets/img/requisitos_hoja_3.webp");
  });
}

function showImage(imageSrc) {
  // Muestra la imagen en el lightbox
  document.getElementById("lightbox-image").src = imageSrc;
  document.getElementById("lightbox").style.display = "flex";
}

// Cierra el lightbox al hacer clic fuera de la imagen
document.getElementById("lightbox").addEventListener("click", function () {
  document.getElementById("lightbox").style.display = "none";
});
