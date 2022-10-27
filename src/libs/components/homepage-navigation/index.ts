import { defineCustomElement } from 'vue';

import Navigation from './homepage-navigation.ce.vue';

const maHomepageNav = defineCustomElement(Navigation);

export function register() {
  customElements.define('ma-homepage-nav', maHomepageNav);
}
