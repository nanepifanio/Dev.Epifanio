import letterEffect from "./modules/lettereffect.js";
const text = "Olá, me chamo Renan Epifânio e sou desenvolvedor Front-end.";
letterEffect(text);

import scrollEffect from "./modules/scrolleffect.js";
scrollEffect();

import showMenu from "./modules/showmenu.js";
showMenu();

import TechPut from "./modules/techPut.js";
const tech = new TechPut(".icones-experiencia", ".icones-interesse");
tech.init();

import PutSlide from "./modules/putSlides.js";
const slides = new PutSlide(".slider-width");
slides.init();

import slide from "./modules/slide.js";
setTimeout(() => {
  slide();
}, 300);
