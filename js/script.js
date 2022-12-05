import {Slide, SlideNav} from "./slide.js";

const slide = new SlideNav('.slide', '.wrapper', 'ativo');
slide.init();
slide.addArrow('.prev', '.next')