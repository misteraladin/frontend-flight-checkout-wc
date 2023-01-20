import { defineComponent as P, reactive as S, computed as f, openBlock as o, createElementBlock as r, normalizeClass as j, createElementVNode as e, unref as l, Fragment as y, renderList as x, createCommentVNode as c, toDisplayString as s, normalizeStyle as F, pushScopeId as T, popScopeId as K, defineCustomElement as M } from "vue";
import { u as U } from "./vue-i18n.esm-bundler.9ad5361b.mjs";
import { _ as q } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const D = {
  en: {
    room_remain: "{total} Rooms left",
    room_empty: "Kamar Tidak Tersedia"
  },
  id: {
    room_remain: "Sisa {total} Kamar",
    room_empty: "Kamar Tidak Tersedia"
  }
}, L = (h) => (T("data-v-f8f19b77"), h = h(), K(), h), H = { class: "ma-card-hotel__header" }, O = {
  key: 0,
  class: "ma-card-hotel-badge"
}, V = ["src", "alt", "title"], G = {
  key: 1,
  class: "ma-card-hotel-rating"
}, J = { class: "ma-card-hotel-rating-rate" }, Q = { class: "ma-card-hotel-rating-label" }, Y = { class: "ma-card-hotel__thumbnail" }, Z = ["src", "alt"], A = { class: "ma-card-hotel__body" }, W = { class: "ma-card-hotel__body-top" }, X = {
  key: 0,
  class: "ma-card-hotel__top-badge-container"
}, tt = ["src", "alt"], et = { class: "ma-card-hotel__top-badge-text" }, at = { class: "ma-popover__content" }, ot = { class: "ma-card-hotel__title" }, rt = { class: "ma-card-hotel__text" }, it = /* @__PURE__ */ L(() => /* @__PURE__ */ e("svg", {
  class: "ma-star-sprite",
  width: "0",
  height: "0",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [
  /* @__PURE__ */ e("symbol", {
    id: "star",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 15"
  }, [
    /* @__PURE__ */ e("path", { d: "M7.69092 12.0773C7.91337 11.943 8.19189 11.943 8.41434 12.0773L11.8365 14.1428C12.3667 14.4627 13.0206 13.9874 12.88 13.3844L11.9718 9.49146C11.9127 9.23841 11.9987 8.97349 12.1951 8.80335L15.2197 6.18316C15.6877 5.77772 15.4375 5.00894 14.8205 4.95659L10.8396 4.61884C10.5808 4.59689 10.3555 4.43356 10.2542 4.19451L8.69713 0.520658C8.45592 -0.0484614 7.64934 -0.0484614 7.40813 0.520658L5.85103 4.19451C5.74972 4.43356 5.52441 4.59689 5.26571 4.61884L1.28472 4.95659C0.667718 5.00894 0.417534 5.77772 0.885552 6.18316L3.91013 8.80335C4.10652 8.97349 4.19252 9.23841 4.13348 9.49146L3.22531 13.3844C3.08464 13.9874 3.7386 14.4627 4.26872 14.1428L7.69092 12.0773Z" })
  ])
], -1)), nt = { class: "ma-card-hotel-star-location" }, st = {
  key: 0,
  class: "ma-star-wrapper"
}, lt = /* @__PURE__ */ L(() => /* @__PURE__ */ e("svg", {
  width: "16",
  height: "16"
}, [
  /* @__PURE__ */ e("use", { "xlink:href": "#star" })
], -1)), ct = [
  lt
], dt = { class: "ma-card-hotel__location" }, mt = {
  key: 0,
  class: "ma-card-hotel__room-alert"
}, ht = {
  key: 1,
  class: "ma-card-hotel__price"
}, ft = {
  key: 0,
  class: "ma-card-hotel__price-original"
}, _t = { class: "ma-card-hotel__price-normal" }, pt = { class: "ma-card-hotel__discount-percent" }, gt = {
  key: 1,
  class: "ma-card-hotel__price-special"
}, bt = {
  key: 2,
  class: "ma-card-hotel__room-alert"
}, ut = ["href", "title"], vt = /* @__PURE__ */ P({
  __name: "card-hotel.ce",
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
  setup(h) {
    const w = h, { t: k } = U({
      messages: D
    }), t = S(w.data ? JSON.parse(w.data) : null), b = f(
      () => t.badges.length > 0 && t.badges.filter(({ name: i }) => i === "dynamic_badge")
    ), u = f(
      () => t.badges.length > 0 && t.badges.filter(({ name: i }) => i === "dynamic_badge_hover_top")
    ), $ = f(() => ({
      justifyContent: t.cheapest_room ? "space-between" : "flex-end"
    })), d = S(t.cheapest_room && t.cheapest_room.rate), B = f(() => {
      const { gimmick: i, total: n } = d;
      return i && n ? Math.round((n - i) / n * 100) : 0;
    }), z = (i) => i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."), E = f(() => d.allotment < 6 ? k("room_remain", { total: d.allotment }) : ""), C = () => {
      const i = new URLSearchParams(window.location.search), n = Object.fromEntries(i.entries());
      return new URLSearchParams(n).toString();
    }, R = f(() => {
      const { id: i, slug: n, area: m } = t;
      if (!m)
        return "";
      const _ = m.city.state.country.slug, p = m.city.slug, g = m.slug, a = C() ? `?${C()}` : "";
      return `/hotel/${_}/${p}/${g}/${n}/${i}${a}`;
    }), I = (i) => {
      const n = parseFloat(i.toString());
      return n < 2.99 ? "rate-1" : n < 5.99 ? "rate-2" : n < 7.99 ? "rate-3" : n < 8.99 ? "rate-4" : "rate-5";
    }, N = () => {
      console.log("Favorite clicked!");
    };
    return (i, n) => {
      var m, _, p, g;
      return o(), r("div", {
        class: j(["ma-card-hotel", { "is-small": h.isSmall }])
      }, [
        e("div", H, [
          l(b) && l(b).length > 0 ? (o(), r("div", O, [
            (o(!0), r(y, null, x(l(b), (a, v) => (o(), r("img", {
              key: `${v}-${a.name}`,
              src: a.image,
              alt: a.description,
              title: a.description,
              loading: "lazy",
              class: "ma-card-hotel-badge__img"
            }, null, 8, V))), 128))
          ])) : c("", !0),
          e("div", {
            class: "ma-card-hotel-favorite",
            onClick: N
          }, "\u2665\uFE0F"),
          ((m = t == null ? void 0 : t.review) == null ? void 0 : m.score) > 0 ? (o(), r("div", G, [
            e("span", {
              class: j(["ma-card-hotel-rating-icon", I((_ = t == null ? void 0 : t.review) == null ? void 0 : _.score)])
            }, null, 2),
            e("span", J, s((p = t == null ? void 0 : t.review) == null ? void 0 : p.score), 1),
            e("span", Q, s((g = t == null ? void 0 : t.review) == null ? void 0 : g.description), 1)
          ])) : c("", !0),
          e("div", Y, [
            e("img", {
              src: t.original_image_url_resized,
              alt: t.name,
              class: "ma-card-hotel__image",
              loading: "lazy"
            }, null, 8, Z)
          ])
        ]),
        e("div", A, [
          e("div", W, [
            l(u) && l(u).length > 0 ? (o(), r("div", X, [
              (o(!0), r(y, null, x(l(u), (a, v) => (o(), r("div", {
                class: "ma-popover",
                key: `${v}-${a.name}`
              }, [
                e("div", {
                  class: "ma-card-hotel__top-badge",
                  style: F({
                    color: a.text_color,
                    backgroundColor: a.background_color
                  })
                }, [
                  e("img", {
                    src: a.icon,
                    alt: a.name,
                    class: "ma-card-hotel__top-badge-icon"
                  }, null, 8, tt),
                  e("div", et, s(a.title), 1)
                ], 4),
                e("div", at, s(a.description), 1)
              ]))), 128))
            ])) : c("", !0),
            e("div", ot, [
              e("div", rt, s(t.name), 1),
              it
            ]),
            e("div", nt, [
              t.star_rating ? (o(), r("span", st, [
                (o(!0), r(y, null, x(Math.floor(t.star_rating), (a) => (o(), r("span", {
                  key: a,
                  class: "ma-star"
                }, ct))), 128))
              ])) : c("", !0),
              e("div", dt, s(t.area.name) + ", " + s(t.area.city.name), 1)
            ])
          ]),
          e("div", {
            class: "ma-card-hotel__body-bottom",
            style: F(l($))
          }, [
            t.cheapest_room ? (o(), r("div", mt, s(l(E)), 1)) : c("", !0),
            t.cheapest_room ? (o(), r("div", ht, [
              d.gimmick ? (o(), r("div", ft, [
                e("div", _t, " Rp" + s(z(d.gimmick)), 1),
                e("div", pt, s(l(B)) + "% ", 1)
              ])) : c("", !0),
              d.total ? (o(), r("div", gt, " Rp" + s(z(d.total)), 1)) : c("", !0)
            ])) : c("", !0),
            t.cheapest_room ? c("", !0) : (o(), r("div", bt, s(l(k)("room_empty")), 1))
          ], 4)
        ]),
        e("a", {
          href: l(R),
          title: t.name,
          class: "ma-card-hotel__link"
        }, null, 8, ut)
      ], 2);
    };
  }
}), yt = `[data-v-f8f19b77]:root{--el-color-primary: $primary-1;color:#3d4151}.ma-popover[data-v-f8f19b77]{position:relative;cursor:help;z-index:2}.ma-popover:hover .ma-popover__content[data-v-f8f19b77]{opacity:1;visibility:visible}.ma-popover__content[data-v-f8f19b77]{position:absolute;top:calc(100% + .5rem);left:50%;display:inline-block;min-width:13rem;max-width:90%;padding:.75rem .5rem;border-radius:.5rem;background-color:#fff;box-shadow:0 .125rem .75rem -.125rem #0003;z-index:10;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out;transform:translate(-50%);color:#3d4151;font-size:12px}.ma-popover__content[data-v-f8f19b77]:before{content:"";position:absolute;top:-.5rem;left:50%;width:0;height:0;z-index:9;border-left:.5rem solid transparent;border-right:.5rem solid transparent;border-bottom:.5rem solid #FFFFFF;transition:opacity .3s ease-in-out;transform:translate(-50%)}.ma-card-hotel[data-v-f8f19b77]{max-width:16rem;max-height:27.5rem;min-height:27.5rem;position:relative;display:flex;flex-direction:column;padding:.75rem;background-color:#fff;border-radius:.75rem;box-shadow:.25rem 0 .875rem #4242421a}.ma-card-hotel__header[data-v-f8f19b77]{position:relative}.ma-card-hotel__body[data-v-f8f19b77]{min-height:9.875rem;display:flex;flex-flow:column;justify-content:space-between;margin-top:.75rem}.ma-card-hotel__body .ma-card-hotel__body-bottom[data-v-f8f19b77]{display:flex;align-items:flex-end;margin-top:1rem}.ma-card-hotel__link[data-v-f8f19b77]{position:absolute;top:0;left:0;display:block;width:100%;height:100%;z-index:1}.ma-card-hotel-badge[data-v-f8f19b77]{position:absolute;top:.5rem;left:.5rem;display:flex;align-items:center;justify-content:flex-start;gap:.5rem;z-index:2}.ma-card-hotel-badge__img[data-v-f8f19b77]{height:3rem;width:3rem;object-fit:contain}.ma-card-hotel-favorite[data-v-f8f19b77]{position:absolute;top:.5rem;right:.5rem;display:flex;align-items:center;justify-content:center;height:2rem;width:2rem;border-radius:50%;background-color:#fff;z-index:2;cursor:pointer;transition:all .3s ease;color:#ccc}.ma-card-hotel-favorite[data-v-f8f19b77]:hover{background-color:#2f4095;color:#fff}.ma-card-hotel-rating[data-v-f8f19b77]{position:absolute;bottom:.5rem;left:.5rem;display:flex;align-items:center;justify-content:flex-start;border-radius:1rem;background-color:#fff;transition:all .3s ease;overflow:hidden;font-size:10px;z-index:2}.ma-card-hotel-rating:hover .ma-card-hotel-rating-label[data-v-f8f19b77]{max-width:10rem;opacity:1}.ma-card-hotel-rating .ma-card-hotel-rating-icon[data-v-f8f19b77]{display:inline-block;margin:.25rem;height:1rem;width:1rem;object-fit:contain;background-color:transparent;background-position:center;background-repeat:no-repeat;background-size:contain}.ma-card-hotel-rating .ma-card-hotel-rating-icon.rate-1[data-v-f8f19b77]{background-image:url(/rating/icon-1.png)}.ma-card-hotel-rating .ma-card-hotel-rating-icon.rate-2[data-v-f8f19b77]{background-image:url(/rating/icon-2.png)}.ma-card-hotel-rating .ma-card-hotel-rating-icon.rate-3[data-v-f8f19b77]{background-image:url(/rating/icon-3.png)}.ma-card-hotel-rating .ma-card-hotel-rating-icon.rate-4[data-v-f8f19b77]{background-image:url(/rating/icon-4.png)}.ma-card-hotel-rating .ma-card-hotel-rating-icon.rate-5[data-v-f8f19b77]{background-image:url(/rating/icon-5.png)}.ma-card-hotel-rating .ma-card-hotel-rating-rate[data-v-f8f19b77]{margin-inline:.25rem;font-weight:700;font-size:14px;color:#2f4095}.ma-card-hotel-rating .ma-card-hotel-rating-label[data-v-f8f19b77]{display:inline-block;max-width:0;margin-right:.5rem;opacity:0;color:#2f4095;transition:all .3s ease}.ma-card-hotel__thumbnail[data-v-f8f19b77]{position:relative;display:grid;align-items:center;justify-content:center;height:16.25rem;width:100%;overflow:hidden;line-height:1;background-color:#dfe2e7;border-radius:.5rem;aspect-ratio:8/7}@supports not (aspect-ratio: 8/7){.ma-card-hotel__thumbnail[data-v-f8f19b77]:before{float:left;padding-top:100%;content:""}.ma-card-hotel__thumbnail[data-v-f8f19b77]:after{display:block;content:"";clear:both}}.ma-card-hotel__image[data-v-f8f19b77]{position:absolute;top:50%;transform:translateY(-50%);width:100%;height:100%;object-fit:cover}.ma-card-hotel__top-badge-container[data-v-f8f19b77]{display:flex;flex-direction:row}.ma-card-hotel__top-badge[data-v-f8f19b77]{display:flex;flex-direction:row;align-items:center;margin-right:6px;padding:6px;border-radius:4px;font-size:12px}.ma-card-hotel__top-badge .ma-card-hotel__top-badge-text[data-v-f8f19b77]{margin-left:3px}.ma-card-hotel__title[data-v-f8f19b77]{display:flex;align-items:flex-start;justify-content:space-between;min-height:2.875rem;margin:6px 0;font-weight:700;font-size:16px;line-height:24px;color:#3d4151}.ma-star-sprite[data-v-f8f19b77]{position:absolute}.ma-star[data-v-f8f19b77]{display:inline-block;width:.875rem;height:.875rem;margin-left:2px;overflow:hidden}.ma-star svg[data-v-f8f19b77]{height:.875rem;width:.875rem;object-fit:contain}.ma-card-hotel-star-location[data-v-f8f19b77]{display:flex;align-items:center;justify-content:flex-start;gap:.5rem}.ma-card-hotel__location[data-v-f8f19b77]{display:flex;align-items:center;justify-content:flex-start;gap:.25rem;font-size:.75rem;line-height:1rem;font-size:12px;font-weight:400;color:#657085}.ma-card-hotel__price-original[data-v-f8f19b77]{display:flex;align-items:center;justify-content:flex-start;gap:.5rem;height:1.25rem}.ma-card-hotel__price-normal[data-v-f8f19b77]{font-size:.75rem;font-weight:400;color:#657085;text-decoration-line:line-through;line-height:1rem}.ma-card-hotel__discount-percent[data-v-f8f19b77]{padding:3px;background:#FDECE9;border-radius:4px;font-size:.75rem;font-weight:400;color:#c62828;line-height:1rem}.ma-card-hotel__price-special[data-v-f8f19b77]{font-size:1rem;font-weight:700;line-height:1.5rem;color:#e64325;text-align:right}.ma-card-hotel__room-alert[data-v-f8f19b77]{font-weight:400;font-size:.75rem;color:#c62828}
`, xt = /* @__PURE__ */ q(vt, [["styles", [yt]], ["__scopeId", "data-v-f8f19b77"]]), wt = M(xt);
function St() {
  customElements.define("ma-card-hotel", wt);
}
export {
  St as register
};
