import { defineCustomElement } from 'vue';

import FooterBottom from './footer.ce.vue';

const footer = defineCustomElement(FooterBottom);

export function register() {
  customElements.define('ma-footer-bottom', footer);
}
