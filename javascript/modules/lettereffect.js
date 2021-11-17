export default function letterEffect(txt) {
  if (txt) {
    const splitText = txt.split("");
    const auto = setInterval(() => {
      const letter = splitText.shift();
      document.querySelector(
        ".apresentacao p"
      ).innerHTML += `<span class="letter-effect">${letter}<span class="pipe"></span></span>`;
      setTimeout(() => {
        document
          .querySelector(".letter-effect")
          .classList.remove("letter-effect");
        document.querySelector(".pipe").classList.remove("pipe");
      }, 100);
      if (!splitText.length) {
        document
          .querySelector(".apresentacao p span:last-child")
          .classList.add("pipe");
        clearInterval(auto);
      }
    }, 100);
  }
}
