const totalSlides = document.querySelectorAll(".projetos").length;

document.querySelector(".slider-count span:last-child").innerHTML = totalSlides;

let currentSlide = 0;

document.querySelector(".slider-count span:first-child").innerHTML =
  currentSlide + 1;

let auto = setInterval(slideAuto, 3500);

function slideAuto() {
  currentSlide++;
  if (currentSlide > totalSlides - 1) {
    currentSlide = 0;
  }
  upadateMargin();
}

document
  .querySelectorAll(".slider-control")[0]
  .addEventListener("click", () => {
    clearInterval(auto);
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    }
    upadateMargin();
  });

document
  .querySelectorAll(".slider-control")[1]
  .addEventListener("click", () => {
    clearInterval(auto);
    currentSlide++;
    if (currentSlide > totalSlides - 1) {
      currentSlide = 0;
    }
    upadateMargin();
  });

function upadateMargin() {
  document.querySelector(".slider-count span:first-child").innerHTML =
    currentSlide + 1;
  let newMargin =
    currentSlide * document.querySelector(".projetos").clientWidth;
  document.querySelector(".slider-width").style.marginLeft = `-${newMargin}px`;
}
