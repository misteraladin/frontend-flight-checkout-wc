import { defineCustomElement } from 'vue';

import CardSection from './card-section.ce.vue';

const cardSection = defineCustomElement(CardSection);

export function register() {
  customElements.define('ma-card-section', cardSection);
}
