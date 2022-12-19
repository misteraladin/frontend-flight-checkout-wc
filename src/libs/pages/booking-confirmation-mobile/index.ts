import { defineCustomElement } from 'vue';

import BookingConfirmationMobile from './booking-confirmation-mobile.ce.vue';

const bookingConfrimationMobile = defineCustomElement(BookingConfirmationMobile);

export function register() {
  customElements.define('ma-booking-confirmation-mobile', bookingConfrimationMobile);
}
