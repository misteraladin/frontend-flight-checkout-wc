import { defineCustomElement } from 'vue';

import BookingConfirmation from './index.ce.vue';

const bookingConfirmation = defineCustomElement(BookingConfirmation);

export function register() {
  customElements.define('ma-booking-confirmation', bookingConfirmation);
}
