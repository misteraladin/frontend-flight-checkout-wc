import { defineComponent as a, provide as i, renderSlot as r, defineCustomElement as s } from "vue";
import { c, I as l } from "./vue-i18n.esm-bundler.ea1ea4e9.js";
const f = /* @__PURE__ */ a({
  __name: "index.ce",
  props: {
    languange: {
      type: String,
      required: !1,
      default: "id"
    }
  },
  setup(e) {
    const { languange: n } = e, t = c({
      legacy: !1,
      locale: n,
      fallbackLocale: "id"
    });
    return i(l, t), (o, d) => r(o.$slots, "default");
  }
}), m = s(f);
function g() {
  customElements.define("ma-i18n-host", m);
}
export {
  g as register
};
