import { defineCustomElement } from 'vue';

import CardBrand from './card-brand.ce.vue';

const cardBrand = defineCustomElement(CardBrand);

export function register() {
  customElements.define('ma-card-brand', cardBrand);
}
