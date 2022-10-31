import { defineCustomElement } from 'vue';
import TabCategory from './tab-category.ce.vue';

const tabCategory = defineCustomElement(TabCategory);

export function register() {
  customElements.define('ma-tab-category', tabCategory);
}
