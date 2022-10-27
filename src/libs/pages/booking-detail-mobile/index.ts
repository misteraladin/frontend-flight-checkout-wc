import { defineCustomElement } from 'vue';

import BookingDetailMobile from './booking-detail-mobile.ce.vue';

const bookingDetailMobile = defineCustomElement(BookingDetailMobile);

export function register() {
  customElements.define('ma-booking-detail-mobile', bookingDetailMobile);
}
