import { defineCustomElement } from 'vue';

import LocalizationHost from './index.ce.vue';

const localizationHost = defineCustomElement(LocalizationHost);

export function register() {
  customElements.define('ma-i18n-host', localizationHost);
}
