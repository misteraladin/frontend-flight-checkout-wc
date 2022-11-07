import { defineComponent as r, openBlock as o, createElementBlock as l, normalizeStyle as i, createElementVNode as e, toDisplayString as t, renderSlot as m, defineCustomElement as g } from "vue";
import { _ as s } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const d = { class: "btn-wrapper" }, p = ["src", "alt"], c = /* @__PURE__ */ r({
  __name: "homepage-nav.ce",
  props: {
    title: {
      type: String,
      default: "Mau liburan atau belanja?"
    },
    subtitle: {
      type: String,
      default: "Cobain semua keseruan di Mister Aladin"
    },
    backgroundUrl: {
      type: String,
      default: "/homepage/bg-desktop.png"
    },
    artworkUrl: {
      type: String,
      default: "/homepage/artwork.png"
    }
  },
  setup(a) {
    return (n, v) => (o(), l("div", {
      class: "ma-homepage-nav",
      style: i({ backgroundImage: `url(${a.backgroundUrl})` })
    }, [
      e("div", null, [
        e("h2", null, t(a.title), 1),
        e("p", null, t(a.subtitle), 1),
        e("div", d, [
          m(n.$slots, "default")
        ])
      ]),
      e("div", null, [
        e("img", {
          src: a.artworkUrl,
          alt: a.title
        }, null, 8, p)
      ])
    ], 4));
  }
}), u = `:root{--el-color-primary: $primary-1;color:#3d4151}.ma-homepage-nav{display:flex;align-items:flex-end;justify-content:space-between;gap:2rem;margin:0 auto 2rem;padding:2rem;border-radius:.5rem;background:#F5F7FF}.ma-homepage-nav h2{line-height:1;margin-bottom:.5rem}.ma-homepage-nav p{margin:0}.ma-homepage-nav>div:first-child{width:75%}.ma-homepage-nav>div:last-child{width:25%;text-align:center}.ma-homepage-nav img{max-width:100%;object-fit:contain}.ma-homepage-nav .btn-wrapper{display:flex;gap:1rem;margin-top:2rem}
`, h = /* @__PURE__ */ s(c, [["styles", [u]]]), f = g(h);
function k() {
  customElements.define("ma-homepage-nav", f);
}
export {
  k as register
};
