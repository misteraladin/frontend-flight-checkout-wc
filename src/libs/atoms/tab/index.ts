import { defineCustomElement } from 'vue';
import Tab from './tab.ce.vue';

const tab = defineCustomElement(Tab);

export function register() {
  customElements.define('ma-tab', tab);
}
