import { defineCustomElement } from 'vue';
import CardHotel from './card-hotel.ce.vue';

const cardHotel = defineCustomElement(CardHotel);

export function register() {
  customElements.define('ma-card-hotel', cardHotel);
}
