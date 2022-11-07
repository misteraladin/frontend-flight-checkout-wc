import { defineComponent as s, computed as c, openBlock as b, createElementBlock as d, normalizeClass as i, unref as a, createElementVNode as t, renderSlot as o, defineCustomElement as m } from "vue";
import { _ as f } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const g = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzIgMzIiCiAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPgogIDwvZGVmcz4KICA8dGl0bGUvPgogIDxnIGlkPSJjaGV2cm9uLXJpZ2h0Ij4KICAgIDxsaW5lIGNsYXNzPSJjbHMtMSIgeDE9IjIxIiB4Mj0iMTIiIHkxPSIxNiIgeTI9IjI1Ii8+CiAgICA8bGluZSBjbGFzcz0iY2xzLTEiIHgxPSIxMiIgeDI9IjIxIiB5MT0iNyIgeTI9IjE2Ii8+CiAgPC9nPgo8L3N2Zz4=", u = ["href"], p = { class: "btn-content" }, I = {
  div: "",
  class: "btn-text"
}, v = { class: "btn-title" }, x = { class: "btn-subtitle" }, y = ["src"], h = /* @__PURE__ */ s({
  __name: "button-fancy.ce",
  props: {
    small: { type: Boolean },
    customClass: null,
    url: null
  },
  setup(l) {
    const n = l, r = c(() => [
      "btn-nav",
      {
        "btn-small": n.small
      },
      n.customClass
    ]);
    return (e, k) => (b(), d("a", {
      class: i(a(r)),
      href: n.url,
      target: "_blank"
    }, [
      t("div", p, [
        o(e.$slots, "icon"),
        t("div", I, [
          t("span", v, [
            o(e.$slots, "default")
          ]),
          t("div", x, [
            o(e.$slots, "subtitle")
          ])
        ])
      ]),
      t("div", {
        class: i(["btn-arrow", { "is-small": l.small }])
      }, [
        t("img", { src: a(g) }, null, 8, y)
      ], 2)
    ], 10, u));
  }
}), z = `:root{--el-color-primary: $primary-1;color:#3d4151}.btn-nav{display:flex;align-items:center;gap:1rem;background-color:#fff;border-radius:.75rem;text-decoration:none;color:#3d4151;overflow:hidden;box-sizing:border-box}.btn-nav .btn-icon{width:3rem;height:auto;object-fit:contain}.btn-nav .btn-content{display:flex;gap:.5rem;padding:.5rem}.btn-nav .btn-text{display:flex;flex-flow:column;justify-content:center}.btn-nav .btn-arrow{display:flex;align-items:center;justify-content:center;padding:1rem;height:2.25rem;background-color:#f9f9f9}.btn-nav .btn-arrow img{width:1.75rem}.btn-nav.btn-travel .btn-title{color:#2f4095}.btn-nav.btn-mall .btn-title{color:#e64325}.btn-nav .btn-title{display:block;font-size:18px;font-weight:700;margin-bottom:.25rem}.btn-nav .btn-subtitle{display:block;font-size:12px}
`, _ = `:root{--el-color-primary: $primary-1;color:#3d4151}.btn-nav{display:flex;align-items:center;gap:1rem;background-color:#fff;border-radius:.75rem;text-decoration:none;color:#3d4151;overflow:hidden;box-sizing:border-box}.btn-nav .btn-icon{width:3rem;height:auto;object-fit:contain}.btn-nav .btn-content{display:flex;gap:.5rem;padding:.5rem}.btn-nav .btn-text{display:flex;flex-flow:column;justify-content:center}.btn-nav .btn-arrow{display:flex;align-items:center;justify-content:center;padding:1rem;height:2.25rem;background-color:#f9f9f9}.btn-nav .btn-arrow img{width:1.75rem}.btn-nav.btn-travel .btn-title{color:#2f4095}.btn-nav.btn-mall .btn-title{color:#e64325}.btn-nav .btn-title{display:block;font-size:18px;font-weight:700;margin-bottom:.25rem}.btn-nav .btn-subtitle{display:block;font-size:12px}
`, w = /* @__PURE__ */ f(h, [["styles", [z, _]]]), j = m(w);
function Z() {
  customElements.define("ma-button-fancy", j);
}
export {
  Z as register
};
