import { defineComponent as p, reactive as m, openBlock as l, createElementBlock as c, normalizeClass as n, createElementVNode as e, toDisplayString as s, defineCustomElement as f } from "vue";
import { _ as x } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const _ = ["alt", "src"], h = { class: "ma-card-promo__text-wrapper" }, v = /* @__PURE__ */ p({
  __name: "card-promo.ce",
  props: {
    data: {
      type: String,
      required: !0
    },
    isSmall: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["click"],
  setup(o, { emit: i }) {
    const t = o, a = m(t.data ? JSON.parse(t.data) : null), d = (r) => {
      i("click", r), console.log("should open new tab to detailed promo");
    };
    return (r, b) => (l(), c("div", {
      class: n(["ma-card-promo", { "is-small": o.isSmall }]),
      onClick: d
    }, [
      e("img", {
        alt: a.description,
        src: a.image_url
      }, null, 8, _),
      e("div", h, [
        e("label", null, s(a.title), 1)
      ])
    ], 2));
  }
}), w = `[data-v-a9f71a5f]:root{--el-color-primary: $primary-1;color:#3d4151}.ma-card-promo[data-v-a9f71a5f]{cursor:pointer;position:relative;overflow:hidden;border:1px solid #DFE2E7;border-radius:16px}.ma-card-promo img[data-v-a9f71a5f]{width:100%;height:192px;object-fit:cover}@media screen and (max-width: 480px){.ma-card-promo img[data-v-a9f71a5f]{height:164px}}.ma-card-promo .ma-card-promo__text-wrapper[data-v-a9f71a5f]{padding:16px;width:17vw;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}@media screen and (max-width: 480px){.ma-card-promo .ma-card-promo__text-wrapper[data-v-a9f71a5f]{width:100%;padding:8px 16px}}.ma-card-promo .ma-card-promo__text-wrapper label[data-v-a9f71a5f]{position:relative;font-size:16px;font-weight:700;line-height:24px;letter-spacing:0em;text-align:left}@media screen and (max-width: 480px){.ma-card-promo .ma-card-promo__text-wrapper label[data-v-a9f71a5f]{font-size:14px;line-height:150%}}.ma-card-promo img[data-v-a9f71a5f]{width:100%}
`, g = /* @__PURE__ */ x(v, [["styles", [w]], ["__scopeId", "data-v-a9f71a5f"]]), u = f(g);
function C() {
  customElements.define("ma-card-promo", u);
}
export {
  C as register
};
