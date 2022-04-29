export default function showMenu() {
  const menu = document.querySelector(".menu");
  const menuHamb = document.querySelector(".menu-hamburguer");

  menuHamb.addEventListener("click", () => {
    if (!menu.classList.contains("menu-opener")) {
      menu.classList.toggle("menu-opener");
      menuHamb.classList.toggle("ativo");
    } else {
      menu.classList.toggle("menu-opener");
      menuHamb.classList.toggle("ativo");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > menu.offsetTop) {
      menu.classList.remove("menu-opener");
      menuHamb.classList.remove("ativo");
    }
  });
}
