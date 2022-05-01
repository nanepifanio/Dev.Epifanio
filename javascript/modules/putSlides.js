export default class PutSlide {
  constructor(sliderArea, slideContainer) {
    this.slideContainer = document.querySelector(slideContainer);
    this.sliderArea = document.querySelector(sliderArea);
  }

  putSlide(data) {
    this.sliderArea.style.display = "block";
    this.slideContainer.innerHTML = "";
    data.forEach((slide) => {
      const projectArea = this.sliderArea.cloneNode(true);
      projectArea.querySelector("a").href = slide.href;
      projectArea.querySelector("a img").src = slide.src;
      this.slideContainer.appendChild(projectArea);
    });
  }

  async getSlidesData() {
    const json = await (await fetch("../Dev.Epifanio/slides.json")).json();
    this.putSlide(json);
  }

  init() {
    if (this.slideContainer) {
      this.getSlidesData();
    }
    return this;
  }
}
