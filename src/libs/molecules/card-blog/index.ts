import { defineCustomElement } from 'vue';
import CardBlog from './card-blog.ce.vue';

const cardBlog = defineCustomElement(CardBlog);

export function register() {
  customElements.define('ma-card-blog', cardBlog);
}
