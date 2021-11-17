export default function showMenu() {
  const menu = document.querySelector(".menu");

  document.querySelector(".menu-hamburguer").addEventListener("click", () => {
    if (!menu.classList.contains("menu-opener")) {
      menu.classList.toggle("menu-opener");
    } else {
      menu.classList.toggle("menu-opener");
    }
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > menu.offsetTop) menu.classList.remove("menu-opener");
  });
}
