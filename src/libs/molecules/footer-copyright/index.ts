import { defineCustomElement } from 'vue';

import FooterCopyright from './footer.ce.vue';

const footer = defineCustomElement(FooterCopyright);

export function register() {
  customElements.define('ma-footer-copyright', footer);
}
