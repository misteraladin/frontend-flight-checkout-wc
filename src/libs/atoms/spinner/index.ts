import { defineCustomElement } from 'vue';

import Spinner from './spinner.ce.vue';

const maSpinner = defineCustomElement(Spinner);

export function register() {
  customElements.define('ma-spinner', maSpinner);
}
