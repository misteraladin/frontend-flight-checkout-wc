import { defineCustomElement } from 'vue';

import Partners from './index.ce.vue';

const maHomepagePartners = defineCustomElement(Partners);

export function register() {
  customElements.define('ma-homepage-partners', maHomepagePartners);
}
