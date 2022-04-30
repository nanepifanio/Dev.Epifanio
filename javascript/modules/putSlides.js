export default class PutSlide {
  constructor(slideContainer) {
    this.slideContainer = document.querySelector(slideContainer);
  }

  putSlide(data) {
    data.forEach((slide) => {
      this.slideContainer.innerHTML += `
      <div class="projetos">
          <a
            href=${slide.href}
            target="_blank"
            rel="external"
            ><img src=${slide.src}
          /></a>
       </div>
      `;
    });
  }

  async getSlidesData() {
    const json = await (await fetch("../../Dev.Epifanio/slides.json")).json();
    this.putSlide(json);
  }

  init() {
    if (this.slideContainer) {
      this.getSlidesData();
    }
    return this;
  }
}
