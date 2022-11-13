import { defineCustomElement } from 'vue';

import FooterTop from './footer.ce.vue';

const footer = defineCustomElement(FooterTop);

export function register() {
  customElements.define('ma-footer-top', footer);
}
