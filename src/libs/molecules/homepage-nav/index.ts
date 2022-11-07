import { defineCustomElement } from 'vue';

import HomepageNav from './homepage-nav.ce.vue';

const homepageNav = defineCustomElement(HomepageNav);

export function register() {
  customElements.define('ma-homepage-nav', homepageNav);
}
