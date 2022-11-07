import { defineCustomElement } from 'vue';
import ButtonFancy from './button-fancy.ce.vue';

const buttonFancy = defineCustomElement(ButtonFancy);

export function register() {
  customElements.define('ma-button-fancy', buttonFancy);
}
