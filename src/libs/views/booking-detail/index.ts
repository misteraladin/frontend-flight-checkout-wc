import { defineCustomElement } from 'vue';

import BookingDetail from './index.ce.vue';

const bookingDetail = defineCustomElement(BookingDetail);

export function register() {
  customElements.define('ma-booking-detail', bookingDetail);
}
