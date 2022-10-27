import { defineCustomElement } from 'vue';
import Carousel from './carousel.ce.vue';

const carousel = defineCustomElement(Carousel);

export function register() {
  customElements.define('ma-carousel', carousel);
}
