import { defineCustomElement } from 'vue';
import Dropdown from './dropdown.ce.vue';

const dropdown = defineCustomElement(Dropdown);

export function register() {
  customElements.define('ma-dropdown', dropdown);
}
