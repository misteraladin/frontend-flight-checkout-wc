import { defineCustomElement } from 'vue';
import CardMall from './card-mall.ce.vue';

const cardMall = defineCustomElement(CardMall);

export function register() {
  customElements.define('ma-card-mall', cardMall);
}
