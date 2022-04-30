export default class TechPut {
  constructor(expContainer, learnContainer) {
    this.expContainer = document.querySelector(expContainer);
    this.learnContainer = document.querySelector(learnContainer);
  }

  putExperience(data) {
    data.experience.forEach((icon) => {
      this.expContainer.innerHTML += `
      <abbr title=${icon.title} class=${icon.class}
      ><img src=${icon.src} alt=${icon.title}
    /></abbr>
      `;
    });
  }

  putToLearn(data) {
    data.toLearn.forEach((icon) => {
      this.learnContainer.innerHTML += `
      <abbr title=${icon.title} class=${icon.class}
      ><img src=${icon.src} alt=${icon.title}
    /></abbr>
      `;
    });
  }

  async getIconsData() {
    const json = await (await fetch("../../icons.json")).json();
    this.putExperience(json);
    this.putToLearn(json);
  }

  init() {
    if (this.expContainer && this.learnContainer) {
      this.getIconsData();
    }
    return this;
  }
}
