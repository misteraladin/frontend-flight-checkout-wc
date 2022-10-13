import { defineCustomElement } from 'vue';
import Popover from "./popover.ce.vue";

const popover = defineCustomElement(Popover);

export function register() {
  customElements.define('ma-popover', popover);
}
