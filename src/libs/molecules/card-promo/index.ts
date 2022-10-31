import { defineCustomElement } from 'vue';
import CardPromo from './card-promo.ce.vue';

const cardPromo = defineCustomElement(CardPromo);

export function register() {
  customElements.define('ma-card-promo', cardPromo);
}
