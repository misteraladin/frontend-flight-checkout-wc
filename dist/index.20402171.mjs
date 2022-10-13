import { openBlock as t, createElementBlock as r, createElementVNode as a, renderSlot as o, defineCustomElement as n } from "vue";
import { _ as i } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const s = `.ma-popover[data-v-88338da5]{position:relative;cursor:help;z-index:2}.ma-popover:hover .ma-popover__content[data-v-88338da5]{opacity:1;visibility:visible}.ma-popover__content[data-v-88338da5]{position:absolute;top:calc(100% + .5rem);left:50%;display:inline-block;min-width:13rem;max-width:90%;padding:.75rem .5rem;border-radius:var(--border-radius-base);background-color:var(--color-white-50);box-shadow:0 .125rem .75rem -.125rem #0003;z-index:10;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out;transform:translate(-50%);font-size:12px;font-family:var(--font-family-base);color:var(--color-secondary-darkest)}.ma-popover__content[data-v-88338da5]:before{content:"";position:absolute;top:-.5rem;left:50%;width:0;height:0;z-index:9;border-left:.5rem solid transparent;border-right:.5rem solid transparent;border-bottom:.5rem solid var(--color-white-50);transition:opacity .3s ease-in-out;transform:translate(-50%)}
`, d = {}, c = { class: "ma-popover" }, l = { class: "ma-popover__content" };
function p(e, f) {
  return t(), r("div", c, [
    a("div", l, [
      o(e.$slots, "content", {}, void 0, !0)
    ]),
    o(e.$slots, "default", {}, void 0, !0)
  ]);
}
const m = /* @__PURE__ */ i(d, [["render", p], ["styles", [s]], ["__scopeId", "data-v-88338da5"]]), v = n(m);
function b() {
  customElements.define("ma-popover", v);
}
export {
  b as register
};
