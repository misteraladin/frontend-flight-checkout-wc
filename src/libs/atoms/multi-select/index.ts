import { defineCustomElement } from 'vue';
import MultiSelect from './multi-select.ce.vue';

const multiSelect = defineCustomElement(MultiSelect);

export function register() {
  customElements.define('ma-multi-select', multiSelect);
}
