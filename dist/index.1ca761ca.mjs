import { defineComponent as f, reactive as p, ref as C, onMounted as $, openBlock as r, createElementBlock as c, unref as a, toDisplayString as _, createCommentVNode as u, createElementVNode as e, computed as w, createBlock as b, resolveDynamicComponent as B, normalizeStyle as S, renderSlot as D, createStaticVNode as z, defineCustomElement as L } from "vue";
import { u as M } from "./vue-i18n.esm-bundler.9ad5361b.mjs";
import { _ as j } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const E = { class: "ma-card-section__header-flashsale" }, q = /* @__PURE__ */ e("div", { class: "flashsale flashsale__icon" }, [
  /* @__PURE__ */ e("svg", {
    width: "26",
    height: "36",
    viewBox: "0 0 26 36",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ e("path", {
      d: "M12.849 36H7.07847L10.0785 24H3.87897C3.27984 23.9998 2.68906 23.8594 2.15386 23.5901C1.61866 23.3208 1.15387 22.93 0.79663 22.449C0.439391 21.968 0.199608 21.4102 0.0964415 20.82C-0.00672489 20.2298 0.0295861 19.6236 0.202472 19.05L5.96397 0H20.1645L15.6645 12H21.699C22.3856 12.0004 23.0592 12.1869 23.6483 12.5396C24.2373 12.8923 24.7198 13.398 25.0445 14.0029C25.3691 14.6079 25.5238 15.2895 25.492 15.9754C25.4602 16.6612 25.2432 17.3256 24.864 17.898L12.849 36Z",
      fill: "#FDD835"
    })
  ])
], -1), H = {
  key: 0,
  class: "flashsale"
}, N = {
  key: 1,
  class: "flashsale flashsale__countdown"
}, O = /* @__PURE__ */ e("div", { class: "flashsale__countdown-icon" }, [
  /* @__PURE__ */ e("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ e("path", {
      d: "M7.99935 15.3333C12.0494 15.3333 15.3327 12.0501 15.3327 7.99999C15.3327 3.9499 12.0494 0.666656 7.99935 0.666656C3.94926 0.666656 0.666016 3.9499 0.666016 7.99999C0.666016 12.0501 3.94926 15.3333 7.99935 15.3333Z",
      stroke: "#3D4151",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }),
    /* @__PURE__ */ e("path", {
      d: "M7.99902 5.17944V7.99996L10.8647 11.3394",
      stroke: "#3D4151",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  ])
], -1), V = { class: "flashsale__countdown-text" }, Z = { class: "flashsale__countdown-time" }, I = /* @__PURE__ */ f({
  __name: "card-section-header-flahsale",
  props: {
    data: {
      type: Object,
      required: !0
    },
    t: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const s = d, { data: t, t: o } = p(s), i = C(), l = (n) => n < 10 ? `0${n}` : `${n}`, h = () => {
      const n = setInterval(() => {
        const g = new Date(t.countdown).getTime(), v = new Date().getTime(), m = g - v, y = Math.floor(m / (1e3 * 60 * 60)), x = Math.floor(m % (1e3 * 60 * 60) / (1e3 * 60)), k = Math.floor(m % (1e3 * 60) / 1e3);
        i.value = `${l(y)} : ${l(x)} : ${l(k)}`, m < 0 && clearInterval(n);
      }, 1e3);
    };
    return $(() => {
      h();
    }), (n, g) => (r(), c("div", E, [
      q,
      a(t).name ? (r(), c("h1", H, _(a(t).name), 1)) : u("", !0),
      a(t).countdown ? (r(), c("div", N, [
        O,
        e("div", V, _(a(o)("ends_in")), 1),
        e("div", Z, [
          e("span", null, _(i.value), 1)
        ])
      ])) : u("", !0)
    ]));
  }
}), T = { class: "ma-card-section__header-default" }, F = {
  key: 0,
  class: "default"
}, P = /* @__PURE__ */ f({
  __name: "card-section-header-default",
  props: {
    data: {
      type: Object,
      required: !0
    }
  },
  setup(d) {
    const s = d, { data: t } = p(s);
    return (o, i) => (r(), c("div", T, [
      a(t).name ? (r(), c("h1", F, _(a(t).name), 1)) : u("", !0)
    ]));
  }
}), A = {
  en: {
    ends_in: "Ends in",
    see_all: "See All"
  },
  id: {
    ends_in: "Berakhir dalam",
    see_all: "Lihat Semua"
  }
}, J = { class: "ma-card-section" }, G = { class: "ma-card-section__header" }, K = { class: "ma-card-section__header-title" }, Q = { class: "ma-card-section__header-link" }, R = ["href"], U = /* @__PURE__ */ z('<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_6457_84485)"><path d="M8.92102 5.58782C8.59638 5.26318 8.07003 5.26318 7.74538 5.58782C7.42099 5.91221 7.4207 6.43807 7.74474 6.76282L10.9749 10L7.74474 13.2372C7.4207 13.5619 7.42099 14.0878 7.74538 14.4122C8.07003 14.7368 8.59638 14.7368 8.92102 14.4122L12.6261 10.7071C13.0166 10.3166 13.0166 9.68342 12.6261 9.29289L8.92102 5.58782Z"></path></g><defs><clipPath id="clip0_6457_84485"><rect width="20" height="20" fill="white"></rect></clipPath></defs></svg>', 1), W = { class: "ma-card-section__banner" }, X = ["src", "alt"], Y = { class: "ma-card-section__product-wrapper" }, ee = { class: "ma-card-section__product" }, te = /* @__PURE__ */ f({
  __name: "card-section.ce",
  props: {
    data: {
      type: String,
      required: !0
    },
    type: {
      type: String,
      default: "default"
    },
    fullBackground: {
      type: Boolean,
      default: !1
    },
    colorBackground: {
      type: String,
      default: "linear-gradient(245.81deg, #2F4295 -0.35%, #1B2D76 90.63%)"
    }
  },
  setup(d) {
    const s = d, { t } = M({
      messages: A
    }), o = p(s.data ? JSON.parse(s.data) : null), i = w(() => ({
      background: s.colorBackground,
      width: s.fullBackground ? "auto" : "23.75rem"
    })), l = w(() => ({
      default: P,
      flashsale: I
    })[s.type]);
    return (h, n) => (r(), c("div", J, [
      e("div", G, [
        e("div", K, [
          (r(), b(B(a(l)), {
            data: o,
            t: a(t)
          }, null, 8, ["data", "t"]))
        ]),
        e("div", Q, [
          e("a", {
            href: o.url
          }, _(a(t)("see_all")), 9, R),
          U
        ])
      ]),
      e("div", {
        class: "ma-card-section__body",
        style: S(a(i))
      }, [
        e("div", W, [
          e("img", {
            src: o.image,
            alt: o.name
          }, null, 8, X)
        ]),
        e("div", Y, [
          e("div", ee, [
            D(h.$slots, "default")
          ])
        ])
      ], 4)
    ]));
  }
}), ae = `:root{--el-color-primary: $primary-1;color:#3d4151}.ma-card-section{width:100%}.ma-card-section__banner img{width:14.5rem;margin-right:1.5rem}.ma-card-section__product-wrapper{position:absolute;z-index:5;padding-left:16rem;width:100%;overflow:auto}.ma-card-section__product{display:grid;grid-gap:1rem;grid-auto-flow:column;grid-auto-columns:minmax(282px,1fr);gap:1rem;z-index:10}.ma-card-section__header{display:flex;justify-content:space-between;align-items:center}.ma-card-section__header-link{display:flex;align-items:center}.ma-card-section__header-link a{font-weight:700;font-size:.875rem;text-transform:capitalize;color:#2f4095;text-decoration:none}.ma-card-section__header-link svg{width:1.5rem;height:1.5rem;fill:#2f4095}.ma-card-section__header-flashsale{display:flex;align-items:center}.ma-card-section__header-flashsale h1{font-size:24px}.ma-card-section__header-flashsale .flashsale{padding-right:1rem}.ma-card-section__header-flashsale .flashsale__countdown{display:flex;align-items:center}.ma-card-section__header-flashsale .flashsale__countdown-icon{font-size:1rem;color:#3d4151;margin-right:.5rem}.ma-card-section__header-flashsale .flashsale__countdown-text{font-weight:400;margin-right:.5rem}.ma-card-section__header-flashsale .flashsale__countdown-time{padding:.25rem .5rem;background-color:#fdd835;border-radius:50px;font-weight:700;text-align:center}.ma-card-section__header-default .default{font-weight:700;font-size:1rem;text-transform:capitalize;color:#3d4151}.ma-card-section__body{display:flex;padding:1.5rem;border-radius:24px;z-index:1}
`, se = /* @__PURE__ */ j(te, [["styles", [ae]]]), oe = L(se);
function de() {
  customElements.define("ma-card-section", oe);
}
export {
  de as register
};
