import { defineCustomElement } from 'vue';
import Link from './link.ce.vue';

const link = defineCustomElement(Link);

export function register() {
  customElements.define('ma-link', link);
}
