import { defineCustomElement } from 'vue';

import Newsletter from './index.ce.vue';

const newsletter = defineCustomElement(Newsletter);

export function register() {
  customElements.define('ma-newsletter', newsletter);
}
