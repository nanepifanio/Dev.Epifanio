// Eventos clique para Scroll Suave

document
  .querySelectorAll(".lista-menu li a, .button a, .buttonUp")
  .forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      scrollSmooth(item.getAttribute("href"));
    });
  });

const scrollSmooth = (section) => {
  if (section) {
    scrollAnimate(section);
  } else {
    scrollAnimate("body");
  }
};

const scrollAnimate = (top) => {
  window.scrollTo({
    top: document.querySelector(`${top}`).offsetTop,
    behavior: "smooth",
  });
};

// Eventos de animação ao Scroll

function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const mobile = window.matchMedia("max-width=500px");

if (mobile.matches) {
  minhaFoto.removeAttribute("data-anime");
}

const buttonUp = document.querySelector(".buttonUp");

const target = document.querySelectorAll("[data-anime]");

const minhaFoto = document.querySelector(".minha-foto");

if (target.length) {
  window.addEventListener(
    "scroll",
    debounce(() => {
      if (scrollY > 700) {
        buttonUp.style.opacity = "1";
      } else {
        buttonUp.style.opacity = "0";
      }
      const windowTop = window.scrollY + window.innerHeight * 0.8;
      target.forEach((element) => {
        if (windowTop > element.offsetTop) {
          element.classList.add(
            `${element.getAttribute("data-anime")}`,
            `animate`
          );
        }
      });
    }),
    200
  );
}
