import { defineComponent as n, reactive as d, openBlock as o, createElementBlock as i, createElementVNode as r, toDisplayString as c, defineCustomElement as s } from "vue";
import { _ as m } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const l = { class: "ma-card-brand" }, p = ["href"], _ = { class: "brand-image-wrapper" }, h = ["src", "alt"], f = { class: "brand-name" }, b = /* @__PURE__ */ n({
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
  setup(t) {
    const a = t, e = d(a.data ? JSON.parse(a.data) : null);
    return (x, w) => (o(), i("div", l, [
      r("a", {
        href: e.url
      }, [
        r("div", _, [
          r("img", {
            src: e.logo,
            alt: e.name
          }, null, 8, h)
        ]),
        r("div", f, c(e.name), 1)
      ], 8, p)
    ]));
  }
}), g = `:root{--el-color-primary: $primary-1;color:#3d4151}.ma-card-brand{min-width:8rem;width:8rem;border:1px solid #DFE2E7;border-radius:1rem}.ma-card-brand a{text-decoration:none;text-align:center}.ma-card-brand .brand-image-wrapper{display:flex;align-items:center;justify-content:center;margin:.5rem;height:7rem;border-radius:.5rem;overflow:hidden}.ma-card-brand .brand-image-wrapper img{height:auto;width:100%;object-fit:contain}.ma-card-brand .brand-name{display:flex;align-items:center;justify-content:center;height:3em;padding:.5rem;font-size:12px;line-height:16px;color:#3d4151}
`, u = /* @__PURE__ */ m(b, [["styles", [g]]]), y = s(u);
function B() {
  customElements.define("ma-card-brand", y);
}
export {
  B as register
};
