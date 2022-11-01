import { defineCustomElement } from 'vue';
import CardExplore from './card-explore.ce.vue';

const cardExplore = defineCustomElement(CardExplore);

export function register() {
  customElements.define('ma-card-explore', cardExplore);
}
