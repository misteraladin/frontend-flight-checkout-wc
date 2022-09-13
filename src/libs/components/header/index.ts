import { defineCustomElement } from 'vue';

import Logo from './logo.ce.vue';
import Header from './header.ce.vue';

const logo = defineCustomElement(Logo);
const maHeader = defineCustomElement(Header);

export function register() {
  customElements.define('ma-logo', logo);
  customElements.define('ma-header', maHeader);
}
