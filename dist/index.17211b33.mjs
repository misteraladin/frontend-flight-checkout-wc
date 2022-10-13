import { defineComponent as N, reactive as k, computed as h, openBlock as o, createElementBlock as r, normalizeClass as R, createElementVNode as t, unref as n, Fragment as p, renderList as g, createCommentVNode as d, normalizeStyle as C, toDisplayString as s, createTextVNode as z, pushScopeId as I, popScopeId as M, defineCustomElement as T } from "vue";
import { u as P } from "./vue-i18n.esm-bundler.9ad5361b.mjs";
import { _ as K } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const U = {
  en: {
    room_remain: "{total} Rooms left",
    room_empty: "Kamar Tidak Tersedia"
  },
  id: {
    room_remain: "Sisa {total} Kamar",
    room_empty: "Kamar Tidak Tersedia"
  }
}, f = (m) => (I("data-v-6826185b"), m = m(), M(), m), V = { class: "ma-card-hotel__header" }, Z = {
  key: 0,
  class: "ma-card-hotel-badge"
}, q = ["src", "alt", "title"], D = { class: "ma-card-hotel__thumbnail" }, H = ["src", "alt"], O = { class: "ma-card-hotel__body" }, G = { class: "ma-card-hotel__body-top" }, J = {
  key: 0,
  class: "ma-card-hotel__top-badge-container"
}, Q = ["src", "alt"], Y = { class: "ma-card-hotel__top-badge-text" }, A = { class: "ma-popover__content" }, W = { class: "ma-card-hotel__title" }, X = { class: "ma-card-hotel__text" }, tt = {
  key: 0,
  class: "ma-star-wrapper"
}, et = /* @__PURE__ */ f(() => /* @__PURE__ */ t("svg", {
  width: "16",
  height: "16"
}, [
  /* @__PURE__ */ t("use", { "xlink:href": "#star" })
], -1)), at = [
  et
], ot = /* @__PURE__ */ f(() => /* @__PURE__ */ t("svg", {
  class: "ma-star-sprite",
  width: "0",
  height: "0",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [
  /* @__PURE__ */ t("symbol", {
    id: "star",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 15"
  }, [
    /* @__PURE__ */ t("path", { d: "M7.69092 12.0773C7.91337 11.943 8.19189 11.943 8.41434 12.0773L11.8365 14.1428C12.3667 14.4627 13.0206 13.9874 12.88 13.3844L11.9718 9.49146C11.9127 9.23841 11.9987 8.97349 12.1951 8.80335L15.2197 6.18316C15.6877 5.77772 15.4375 5.00894 14.8205 4.95659L10.8396 4.61884C10.5808 4.59689 10.3555 4.43356 10.2542 4.19451L8.69713 0.520658C8.45592 -0.0484614 7.64934 -0.0484614 7.40813 0.520658L5.85103 4.19451C5.74972 4.43356 5.52441 4.59689 5.26571 4.61884L1.28472 4.95659C0.667718 5.00894 0.417534 5.77772 0.885552 6.18316L3.91013 8.80335C4.10652 8.97349 4.19252 9.23841 4.13348 9.49146L3.22531 13.3844C3.08464 13.9874 3.7386 14.4627 4.26872 14.1428L7.69092 12.0773Z" })
  ])
], -1)), rt = { class: "ma-card-hotel__location" }, it = /* @__PURE__ */ f(() => /* @__PURE__ */ t("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ t("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.07786 9.90368C8.02595 7.487 9 5.77552 9 4.76923C9 3.23983 7.65685 2 6 2C4.34315 2 3 3.23983 3 4.76923C3 5.77552 3.97405 7.487 5.92214 9.90368L5.92214 9.90368C5.9568 9.94668 6.01976 9.95344 6.06276 9.91878C6.06832 9.9143 6.07338 9.90924 6.07786 9.90368Z",
    stroke: "#1C1C1C",
    "stroke-width": "0.7"
  }),
  /* @__PURE__ */ t("path", {
    d: "M5.96875 6C6.52103 6 6.96875 5.55228 6.96875 5C6.96875 4.44772 6.52103 4 5.96875 4C5.41646 4 4.96875 4.44772 4.96875 5C4.96875 5.55228 5.41646 6 5.96875 6Z",
    stroke: "#1C1C1C",
    "stroke-width": "0.7"
  })
], -1)), st = {
  key: 0,
  class: "ma-card-hotel__room-alert"
}, nt = {
  key: 1,
  class: "ma-card-hotel__price"
}, lt = {
  key: 0,
  class: "ma-card-hotel__price-original"
}, dt = { class: "ma-card-hotel__price-normal" }, ct = { class: "ma-card-hotel__discount-percent" }, mt = {
  key: 1,
  class: "ma-card-hotel__price-special"
}, ht = {
  key: 2,
  class: "ma-card-hotel__room-alert"
}, _t = ["href", "title"], pt = /* @__PURE__ */ N({
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
  setup(m) {
    const u = m, { t: b } = P({
      messages: U
    }), a = k(u.data ? JSON.parse(u.data) : null), v = h(
      () => a.badges.filter(({ name: i }) => i === "dynamic_badge")
    ), y = h(
      () => a.badges.filter(({ name: i }) => i === "dynamic_badge_hover_top")
    ), S = h(() => ({
      justifyContent: a.cheapest_room ? "space-between" : "flex-end"
    })), c = k(a.cheapest_room.rate), L = h(() => {
      const { gimmick: i, total: l } = c;
      return i && l ? Math.round((l - i) / l * 100) : 0;
    }), x = (i) => i.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."), $ = h(() => c.allotment < 4 ? b("room_remain", { total: c.allotment }) : ""), w = () => {
      const i = new URLSearchParams(window.location.search), l = Object.fromEntries(i.entries());
      return new URLSearchParams(l).toString();
    }, j = h(() => {
      const { id: i, slug: l, area: e } = a;
      if (!e)
        return "";
      const _ = e.city.state.country.slug, B = e.city.slug, F = e.slug, E = w() ? `?${w()}` : "";
      return `/hotel/${_}/${B}/${F}/${l}/${i}${E}`;
    });
    return (i, l) => (o(), r("div", {
      class: R(["ma-card-hotel", { "is-small": m.isSmall }])
    }, [
      t("div", V, [
        n(v).length ? (o(), r("div", Z, [
          (o(!0), r(p, null, g(n(v), (e, _) => (o(), r("img", {
            key: `${_}-${e.name}`,
            src: e.image,
            alt: e.description,
            title: e.description,
            loading: "lazy",
            class: "ma-card-hotel-badge__img"
          }, null, 8, q))), 128))
        ])) : d("", !0),
        t("div", D, [
          t("img", {
            src: a.original_image_url_resized,
            alt: a.name,
            class: "ma-card-hotel__image",
            loading: "lazy"
          }, null, 8, H)
        ])
      ]),
      t("div", O, [
        t("div", G, [
          n(y).length ? (o(), r("div", J, [
            (o(!0), r(p, null, g(n(y), (e, _) => (o(), r("div", {
              class: "ma-popover",
              key: `${_}-${e.name}`
            }, [
              t("div", {
                class: "ma-card-hotel__top-badge",
                style: C({
                  color: e.text_color,
                  backgroundColor: e.background_color
                })
              }, [
                t("img", {
                  src: e.icon,
                  alt: e.name,
                  class: "ma-card-hotel__top-badge-icon"
                }, null, 8, Q),
                t("div", Y, s(e.title), 1)
              ], 4),
              t("div", A, s(e.description), 1)
            ]))), 128))
          ])) : d("", !0),
          t("div", W, [
            t("div", X, [
              z(s(a.name) + " ", 1),
              a.star_rating ? (o(), r("span", tt, [
                (o(!0), r(p, null, g(Math.floor(a.star_rating), (e) => (o(), r("span", {
                  key: e,
                  class: "ma-star"
                }, at))), 128))
              ])) : d("", !0)
            ]),
            ot
          ]),
          t("div", rt, [
            it,
            z(" " + s(a.area.name) + ", " + s(a.area.city.name), 1)
          ])
        ]),
        t("div", {
          class: "ma-card-hotel__body-bottom",
          style: C(n(S))
        }, [
          a.cheapest_room ? (o(), r("div", st, s(n($)), 1)) : d("", !0),
          a.cheapest_room ? (o(), r("div", nt, [
            c.gimmick ? (o(), r("div", lt, [
              t("div", dt, " Rp" + s(x(c.gimmick)), 1),
              t("div", ct, s(n(L)) + "% ", 1)
            ])) : d("", !0),
            c.total ? (o(), r("div", mt, " Rp" + s(x(c.total)), 1)) : d("", !0)
          ])) : d("", !0),
          a.cheapest_room ? d("", !0) : (o(), r("div", ht, s(n(b)("room_empty")), 1))
        ], 4)
      ]),
      t("a", {
        href: n(j),
        title: a.name,
        class: "ma-card-hotel__link"
      }, null, 8, _t)
    ], 2));
  }
}), gt = `[data-v-6826185b]:root{--el-color-primary: $primary-1;color:#3d4151}.ma-popover[data-v-6826185b]{position:relative;cursor:help;z-index:2}.ma-popover:hover .ma-popover__content[data-v-6826185b]{opacity:1;visibility:visible}.ma-popover__content[data-v-6826185b]{position:absolute;top:calc(100% + .5rem);left:50%;display:inline-block;min-width:13rem;max-width:90%;padding:.75rem .5rem;border-radius:.5rem;background-color:#fff;box-shadow:0 .125rem .75rem -.125rem #0003;z-index:10;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out;transform:translate(-50%);color:#3d4151;font-size:12px}.ma-popover__content[data-v-6826185b]:before{content:"";position:absolute;top:-.5rem;left:50%;width:0;height:0;z-index:9;border-left:.5rem solid transparent;border-right:.5rem solid transparent;border-bottom:.5rem solid #FFFFFF;transition:opacity .3s ease-in-out;transform:translate(-50%)}.ma-card-hotel[data-v-6826185b]{max-width:19rem;max-height:27.5rem;min-height:27.5rem;position:relative;display:flex;flex-direction:column;padding:.75rem;background-color:#fff;border-radius:.75rem;box-shadow:.25rem 0 .875rem #4242421a}.ma-card-hotel__header[data-v-6826185b]{position:relative}.ma-card-hotel__body[data-v-6826185b]{min-height:9.875rem;display:flex;flex-flow:column;justify-content:space-between;margin-top:.75rem}.ma-card-hotel__body .ma-card-hotel__body-bottom[data-v-6826185b]{display:flex;align-items:flex-end;margin-top:1rem}.ma-card-hotel__link[data-v-6826185b]{position:absolute;top:0;left:0;display:block;width:100%;height:100%;z-index:1}.ma-card-hotel-badge[data-v-6826185b]{position:absolute;top:.5rem;left:.5rem;display:flex;align-items:center;justify-content:flex-start;gap:.5rem;z-index:2}.ma-card-hotel-badge__img[data-v-6826185b]{height:3rem;width:3rem;object-fit:contain}.ma-card-hotel__thumbnail[data-v-6826185b]{position:relative;display:grid;align-items:center;justify-content:center;height:16.25rem;width:100%;overflow:hidden;line-height:1;background-color:#dfe2e7;border-radius:.5rem;aspect-ratio:8/7}@supports not (aspect-ratio: 8/7){.ma-card-hotel__thumbnail[data-v-6826185b]:before{float:left;padding-top:100%;content:""}.ma-card-hotel__thumbnail[data-v-6826185b]:after{display:block;content:"";clear:both}}.ma-card-hotel__image[data-v-6826185b]{position:absolute;top:50%;transform:translateY(-50%);width:100%;height:100%;object-fit:cover}.ma-card-hotel__top-badge-container[data-v-6826185b]{display:flex;flex-direction:row}.ma-card-hotel__top-badge[data-v-6826185b]{display:flex;flex-direction:row;align-items:center;margin-right:6px;padding:6px;border-radius:4px;font-size:12px}.ma-card-hotel__top-badge .ma-card-hotel__top-badge-text[data-v-6826185b]{margin-left:3px}.ma-card-hotel__title[data-v-6826185b]{display:flex;align-items:flex-end;justify-content:space-between;margin:6px 0;font-weight:700;font-size:16px;line-height:24px;color:#3d4151}.ma-star-sprite[data-v-6826185b]{position:absolute}.ma-star[data-v-6826185b]{display:inline-block;width:1rem;height:1rem;margin-left:2px;overflow:hidden}.ma-star svg[data-v-6826185b]{height:1rem;width:1rem;object-fit:contain}.ma-card-hotel__location[data-v-6826185b]{display:flex;align-items:center;justify-content:flex-start;gap:.25rem;margin:0 0 .25rem;font-size:.75rem;line-height:1rem;font-size:12px;font-weight:400;color:#657085}.ma-card-hotel__price-original[data-v-6826185b]{display:flex;align-items:center;justify-content:flex-start;gap:.5rem;height:1.25rem}.ma-card-hotel__price-normal[data-v-6826185b]{font-size:.75rem;font-weight:400;color:#657085;text-decoration-line:line-through;line-height:1rem}.ma-card-hotel__discount-percent[data-v-6826185b]{padding:3px;background:#FDECE9;border-radius:4px;font-size:.75rem;font-weight:400;color:#c62828;line-height:1rem}.ma-card-hotel__price-special[data-v-6826185b]{font-size:1rem;font-weight:700;line-height:1.5rem;color:#2f4095}.ma-card-hotel__room-alert[data-v-6826185b]{font-weight:400;font-size:.75rem;color:#c62828}
`, ft = /* @__PURE__ */ K(pt, [["styles", [gt]], ["__scopeId", "data-v-6826185b"]]), ut = T(ft);
function xt() {
  customElements.define("ma-card-hotel", ut);
}
export {
  xt as register
};
