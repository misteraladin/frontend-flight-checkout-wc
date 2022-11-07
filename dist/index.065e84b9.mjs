import { defineComponent as g, ref as b, computed as x, openBlock as n, createElementBlock as i, normalizeClass as p, unref as s, Fragment as _, renderList as y, createBlock as k, withCtx as w, createTextVNode as h, toDisplayString as v, defineCustomElement as C } from "vue";
import { _ as B } from "./button.vue_vue_type_script_setup_true_lang.1b97ee21.mjs";
import { _ as j } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const z = /* @__PURE__ */ g({
  __name: "button-group.ce",
  props: {
    data: null,
    active: null,
    transparent: null,
    small: null
  },
  emits: ["click"],
  setup(u, { emit: l }) {
    const t = u, c = JSON.parse(t.data), e = b(t.active), m = x(() => [
      "ma-button-group",
      {
        "with-bg": t.transparent,
        small: t.small
      }
    ]), f = (r, a) => {
      l("click", r), e.value = a;
    };
    return (r, a) => (n(), i("div", {
      class: p(s(m))
    }, [
      (n(!0), i(_, null, y(s(c), (o) => (n(), k(B, {
        class: p([
          {
            active: e.value === o.value
          }
        ]),
        onClick: (d) => f(d, o.value)
      }, {
        default: w(() => [
          h(v(o.name), 1)
        ]),
        _: 2
      }, 1032, ["class", "onClick"]))), 256))
    ], 2));
  }
}), E = `:root{--el-color-primary: $primary-1;color:#3d4151}.ma-button-group{display:flex;flex-wrap:wrap;list-style:none;padding:8px;gap:8px;border-radius:32px;margin-top:15px;margin-bottom:15px;font-size:14px}.ma-button-group.justify-content-between{justify-content:space-between!important}.ma-button-group.justify-content-center{justify-content:center!important}.ma-button-group.with-bg{background-color:#f5f7ff}.ma-button-group.with-bg>button{flex-grow:1;font-size:16px}.ma-button-group.small>button{font-size:12px;padding:8px 24px;line-height:24px}.ma-button-group>button{min-width:100px;border:none;padding:16px 24px;line-height:24px;text-align:center;color:#2f4095;background-color:#f5f7ff;font-weight:700;border-radius:32px;cursor:pointer}.ma-button-group>button.active{color:#fff;background-color:#2f4095;box-shadow:0 4px 8px #3d415133;animation-name:fadein;animation-duration:.5s}@keyframes fadein{0%{opacity:0}to{opacity:1}}
`, D = /* @__PURE__ */ j(z, [["styles", [E]]]), G = C(D);
function F() {
  customElements.define("ma-button-group", G);
}
export {
  F as register
};
