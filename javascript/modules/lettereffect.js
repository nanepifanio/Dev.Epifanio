export default letterEffect = () => {
  const text = "Olá, me chamo Renan Epifânio e sou desenvolvedor web.";
  if (text) {
    const splitText = text.split("");
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
};
