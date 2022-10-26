import { defineCustomElement } from 'vue';
import ButtonGroup from './button-group.ce.vue';

const buttonGroup = defineCustomElement(ButtonGroup);

export function register() {
  customElements.define('ma-button-group', buttonGroup);
}
