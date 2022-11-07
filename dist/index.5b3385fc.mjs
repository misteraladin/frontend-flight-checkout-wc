import { defineComponent as n, reactive as o, openBlock as d, createElementBlock as i, createElementVNode as r, toDisplayString as s, defineCustomElement as c } from "vue";
import { _ as m } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const l = ["href"], p = { class: "brand-image-wrapper" }, f = ["src", "alt"], h = { class: "brand-name" }, _ = /* @__PURE__ */ n({
  __name: "card-brand.ce",
  props: {
    data: {
      type: String,
      required: !0
    },
    small: {
      type: Boolean,
      default: !1
    }
  },
  setup(a) {
    const t = a, e = o(t.data ? JSON.parse(t.data) : null);
    return (y, x) => (d(), i("a", {
      href: e.url,
      class: "brand-item"
    }, [
      r("div", p, [
        r("img", {
          src: e.logo,
          alt: e.name
        }, null, 8, f)
      ]),
      r("div", h, s(e.name), 1)
    ], 8, l));
  }
}), g = `:root{--el-color-primary: $primary-1;color:#3d4151}.ma-card-brand{min-width:8rem;width:8rem;border:1px solid #DFE2E7;border-radius:1rem;text-decoration:none;text-align:center}.ma-card-brand .brand-image-wrapper{display:flex;align-items:center;justify-content:center;margin:.5rem;height:7rem;border-radius:.5rem;overflow:hidden}.ma-card-brand .brand-image-wrapper img{height:auto;width:100%;object-fit:contain}.ma-card-brand .brand-name{display:flex;align-items:center;justify-content:center;height:3em;padding:.5rem;font-size:12px;line-height:16px;color:#3d4151}
`, b = /* @__PURE__ */ m(_, [["styles", [g]]]), u = c(b);
function B() {
  customElements.define("ma-card-brand", u);
}
export {
  B as register
};
