import { defineComponent as j, reactive as p, computed as u, openBlock as o, createElementBlock as i, normalizeClass as B, createElementVNode as a, toDisplayString as l, unref as r, createCommentVNode as s, normalizeStyle as C, defineCustomElement as S } from "vue";
import { u as E } from "./vue-i18n.esm-bundler.9ad5361b.mjs";
import { _ as N } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const O = "/icons/official-store.svg", R = {
  en: {
    out_of_stock: "Out of stock",
    left: "Left",
    sold_out: "Sold Out"
  },
  id: {
    out_of_stock: "Habis",
    left: "Tersisa",
    sold_out: "Habis Terjual"
  }
}, $ = { class: "ma-card-mall__body" }, M = { class: "ma-card-mall__thumbnail" }, D = ["src", "alt"], F = {
  key: 0,
  class: "ma-card-mall__label-sold-out"
}, H = { class: "ma-card-mall__body-top" }, T = { class: "ma-card-mall__title" }, V = { class: "ma-card-mall__text" }, q = { class: "ma-card-mall__price" }, G = {
  key: 0,
  class: "ma-card-mall__price-special"
}, I = {
  key: 1,
  class: "ma-card-mall__price-original"
}, J = { class: "ma-card-mall__discount-percent" }, L = { class: "ma-card-mall__price-normal" }, Y = { class: "ma-card-mall__official-store" }, A = {
  key: 0,
  src: O,
  alt: "logo-official-store"
}, K = { class: "ma-card-mall__official-store-name" }, P = {
  key: 0,
  class: "ma-card-mall__footer"
}, Q = {
  key: 0,
  class: "ma-card-mall__room-alert"
}, U = {
  key: 1,
  class: "ma-card-mall__sale-amount-value"
}, W = ["href", "title"], X = /* @__PURE__ */ j({
  __name: "card-mall.ce",
  props: {
    data: {
      type: String,
      required: !0
    },
    isSmall: {
      type: Boolean,
      default: !1
    },
    flashsale: {
      type: Boolean,
      default: !1
    }
  },
  setup(m) {
    const h = m, { t: n } = E({
      messages: R
    }), e = p(h.data ? JSON.parse(h.data) : null), g = p(e.store_info), k = u(() => ({
      justifyContent: e.price_range ? "space-between" : "flex-end"
    })), _ = p(e.price_range.minimum_price), w = u(() => Math.round(_.discount.percent_off)), v = u(() => {
      var x, y;
      const { minimum_price: t, maximum_price: c } = e.price_range, f = (x = t == null ? void 0 : t.final_price) == null ? void 0 : x.value, b = (y = c == null ? void 0 : c.final_price) == null ? void 0 : y.value;
      return f < b ? `Rp${d(f)} - Rp${d(b)}` : `Rp${d(f)}`;
    }), d = (t) => t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."), z = (t) => Number.isInteger(t) ? t : t.toFixed(1);
    return (t, c) => (o(), i("div", {
      class: B(["ma-card-mall", { "is-small": m.isSmall }])
    }, [
      a("div", $, [
        a("div", M, [
          a("img", {
            src: e.image.url,
            alt: e.image.label,
            class: "ma-card-mall__image",
            loading: "lazy"
          }, null, 8, D),
          e.available_stock ? s("", !0) : (o(), i("div", F, [
            a("span", null, l(r(n)("sold_out")), 1)
          ]))
        ]),
        a("div", H, [
          a("div", T, [
            a("div", V, l(e.name), 1)
          ])
        ]),
        a("div", {
          class: "ma-card-mall__body-bottom",
          style: C(r(k))
        }, [
          a("div", q, [
            r(v) ? (o(), i("div", G, l(r(v)), 1)) : s("", !0),
            _.discount ? (o(), i("div", I, [
              a("div", J, l(r(w)) + "% ", 1),
              a("div", L, " Rp" + l(d(_.discount.amount_off)), 1)
            ])) : s("", !0)
          ])
        ], 4),
        a("div", Y, [
          +g.is_premium ? (o(), i("img", A)) : s("", !0),
          a("div", K, l(g.store_name), 1)
        ])
      ]),
      m.flashsale ? (o(), i("div", P, [
        e.available_stock ? (o(), i("div", U, l(z(e.available_stock)) + " " + l(r(n)("left")), 1)) : (o(), i("div", Q, l(r(n)("out_of_stock")), 1))
      ])) : s("", !0),
      a("a", {
        href: e.url_key,
        title: e.name,
        class: "ma-card-mall__link"
      }, null, 8, W)
    ], 2));
  }
}), Z = `[data-v-afd67912]:root{--el-color-primary: $primary-1;color:#3d4151}.ma-card-mall[data-v-afd67912]{max-width:11.25rem;position:relative;display:flex;flex-direction:column}.ma-card-mall__body[data-v-afd67912]{max-height:343px;min-height:343px;display:flex;flex-flow:column;justify-content:space-between;margin-top:.75rem;padding:.75rem;background-color:#fff;border-radius:.75rem;box-shadow:.25rem 0 .875rem #4242421a}.ma-card-mall__body .ma-card-mall__body-bottom[data-v-afd67912]{display:flex;align-items:flex-end}.ma-card-mall__link[data-v-afd67912]{position:absolute;top:0;left:0;display:block;width:100%;height:100%;z-index:1}.ma-card-mall__thumbnail[data-v-afd67912]{position:relative;display:grid;align-items:center;justify-content:center;height:10.75rem;width:100%;overflow:hidden;line-height:1;border-radius:.5rem;aspect-ratio:8/7}.ma-card-mall__label-sold-out[data-v-afd67912]{display:flex;flex-direction:column;align-items:flex-start;padding:8px 16px;gap:10px;position:absolute;background:rgba(61,65,81,.5);border-radius:8px;width:5rem;top:50%;left:50%;transform:translate(-50%,-50%)}.ma-card-mall__label-sold-out span[data-v-afd67912]{font-size:12px;font-weight:400;color:#fff}@supports not (aspect-ratio: 8/7){.ma-card-mall__thumbnail[data-v-afd67912]:before{float:left;padding-top:100%;content:""}.ma-card-mall__thumbnail[data-v-afd67912]:after{display:block;content:"";clear:both}}.ma-card-mall__image[data-v-afd67912]{position:absolute;top:50%;transform:translateY(-50%);width:100%;height:100%;object-fit:cover}.ma-card-mall__title[data-v-afd67912]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:pre-wrap;word-break:keep-all;text-overflow:ellipsis;overflow:hidden;margin:6px 0;font-weight:700;font-size:16px;line-height:24px;color:#3d4151}.ma-card-mall__price-original[data-v-afd67912]{display:flex;align-items:center;justify-content:flex-start;gap:.5rem;height:1.25rem}.ma-card-mall__price-normal[data-v-afd67912]{font-size:.75rem;font-weight:400;color:#657085;text-decoration-line:line-through;line-height:1rem}.ma-card-mall__discount-percent[data-v-afd67912]{padding:3px;background:#FDECE9;border-radius:4px;font-size:.75rem;font-weight:400;color:#c62828;line-height:1rem}.ma-card-mall__price-special[data-v-afd67912]{margin-bottom:.5rem;font-size:.75rem;font-weight:700;line-height:1.5rem;color:#3d4151}.ma-card-mall__room-alert[data-v-afd67912]{font-weight:400;font-size:.75rem;color:#c62828}.ma-card-mall__official-store[data-v-afd67912]{display:flex;margin-top:.6rem}.ma-card-mall__official-store img[data-v-afd67912]{width:1.5rem;height:1.5rem;object-fit:cover}.ma-card-mall__official-store .ma-card-mall__official-store-name[data-v-afd67912]{font-size:.75rem;font-weight:400;padding-top:.32rem}.ma-card-mall__footer[data-v-afd67912]{margin-top:.5rem;padding:.5rem 0;background-color:#fff;border-radius:.75rem;box-shadow:.25rem 0 .875rem #4242421a;text-align:center}.ma-card-mall__footer .ma-card-mall__sale-amount-value[data-v-afd67912]{color:#3d4151;font-size:12px;font-weight:400}
`, aa = /* @__PURE__ */ N(X, [["styles", [Z]], ["__scopeId", "data-v-afd67912"]]), ea = S(aa);
function ia() {
  customElements.define("ma-card-mall", ea);
}
export {
  ia as register
};
