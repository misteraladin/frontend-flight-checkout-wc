import { defineComponent as S, computed as z, ref as g, onMounted as B, openBlock as a, createElementBlock as o, createElementVNode as t, normalizeClass as _, createCommentVNode as s, toDisplayString as i, unref as m, normalizeStyle as C, renderSlot as $, defineCustomElement as D } from "vue";
import { u as E } from "./vue-i18n.esm-bundler.9ad5361b.mjs";
import { _ as M } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const T = "/icons/bolt.svg", q = "/icons/time.svg", I = { class: "ma-card-section" }, N = { class: "ma-card-section__header" }, V = {
  key: 0,
  class: "flashsale flashsale__icon"
}, j = /* @__PURE__ */ t("img", { src: T }, null, -1), A = [
  j
], H = {
  key: 2,
  class: "flashsale flashsale__countdown"
}, L = /* @__PURE__ */ t("div", { class: "flashsale__countdown-icon" }, [
  /* @__PURE__ */ t("img", { src: q })
], -1), Z = { class: "flashsale__countdown-text" }, F = { class: "flashsale__countdown-time" }, G = {
  key: 0,
  class: "ma-card-section__header-link"
}, J = ["to"], K = ["src", "alt"], O = { class: "ma-card-section__product" }, P = /* @__PURE__ */ S({
  __name: "card-section.ce",
  props: {
    title: {
      type: String,
      required: !0
    },
    countdown: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      required: !0
    },
    url: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "default"
    },
    backgroundColor: {
      type: String,
      default: ""
    },
    fullBackground: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["onBannerToggle"],
  setup(u, { emit: p }) {
    const e = u, { t: h } = E({
      messages: {
        en: {
          ends_in: "Ends in",
          see_all: "See All"
        },
        id: {
          ends_in: "Berakhir dalam",
          see_all: "Lihat Semua"
        }
      }
    }), w = z(() => ({
      background: e.backgroundColor,
      width: e.fullBackground ? "auto" : "23.75rem",
      padding: e.image && "1.5rem",
      height: e.image && "29rem"
    })), c = g(!1);
    p("onBannerToggle", () => c.value = !c.value);
    const l = g(), d = (n) => n < 10 ? `0${n}` : `${n}`, y = () => {
      if (!e.countdown)
        return;
      const n = setInterval(() => {
        const f = new Date(e.countdown).getTime(), v = new Date().getTime(), r = f - v, k = Math.floor(r / (1e3 * 60 * 60)), x = Math.floor(r % (1e3 * 60 * 60) / (1e3 * 60)), b = Math.floor(r % (1e3 * 60) / 1e3);
        l.value = `${d(k)} : ${d(x)} : ${d(b)}`, r < 0 && clearInterval(n);
      }, 1e3);
    };
    return B(() => {
      y();
    }), (n, f) => (a(), o("div", I, [
      t("div", N, [
        t("div", {
          class: _(["ma-card-section__header-title", { "ma-card-section__header-flashsale": u.countdown }])
        }, [
          e.countdown ? (a(), o("div", V, A)) : s("", !0),
          e.title ? (a(), o("h1", {
            key: 1,
            class: _({ big: e.countdown, flashsale: e.countdown })
          }, i(e.title), 3)) : s("", !0),
          l.value ? (a(), o("div", H, [
            L,
            t("div", Z, i(m(h)("ends_in")), 1),
            t("div", F, [
              t("span", null, i(l.value), 1)
            ])
          ])) : s("", !0)
        ], 2),
        e.url ? (a(), o("div", G, [
          t("ma-link", {
            to: e.url,
            arrow: ""
          }, i(m(h)("see_all")), 9, J)
        ])) : s("", !0)
      ]),
      t("div", {
        class: "ma-card-section__body",
        style: C(m(w))
      }, [
        e.image ? (a(), o("div", {
          key: 0,
          class: _(["ma-card-section__banner", { "d-none": c.value }])
        }, [
          t("img", {
            src: e.image,
            alt: e.title
          }, null, 8, K)
        ], 2)) : s("", !0),
        t("div", O, [
          $(n.$slots, "default")
        ])
      ], 4)
    ]));
  }
}), Q = `:root{--el-color-primary: $primary-1;color:#3d4151}.ma-card-section{width:100%}.ma-card-section__banner img{width:14.5rem;margin-right:1.5rem}.ma-card-section__banner.d-none{display:none}.ma-card-section__product{display:grid;grid-gap:1rem;grid-auto-flow:column;gap:1rem;z-index:10}.ma-card-section__header{display:flex;justify-content:space-between;align-items:center}.ma-card-section__header-link{display:flex;align-items:center}.ma-card-section__header-link a{font-weight:700;font-size:.875rem;text-transform:capitalize;color:#2f4095;text-decoration:none}.ma-card-section__header-link svg{width:1.5rem;height:1.5rem;fill:#2f4095}h1{font-weight:700;font-size:1rem;text-transform:capitalize;color:#3d4151}h1.big{font-size:24px}.ma-card-section__header-flashsale{display:flex;align-items:center}.ma-card-section__header-flashsale .flashsale{padding-right:1rem}.ma-card-section__header-flashsale .flashsale__countdown{display:flex;align-items:center}.ma-card-section__header-flashsale .flashsale__countdown-icon{font-size:1rem;color:#3d4151;margin-right:.5rem}.ma-card-section__header-flashsale .flashsale__countdown-text{font-weight:400;margin-right:.5rem}.ma-card-section__header-flashsale .flashsale__countdown-time{padding:.25rem .5rem;background-color:#fdd835;border-radius:50px;font-weight:700;text-align:center}.ma-card-section__body{display:flex;border-radius:24px;z-index:1;align-items:center}
`, R = /* @__PURE__ */ M(P, [["styles", [Q]]]), U = D(R);
function ee() {
  customElements.define("ma-card-section", U);
}
export {
  ee as register
};
