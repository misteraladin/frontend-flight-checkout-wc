import { defineComponent as F, reactive as E, computed as n, openBlock as r, createElementBlock as i, normalizeClass as S, createElementVNode as e, unref as c, Fragment as m, renderList as h, createCommentVNode as p, normalizeStyle as u, toDisplayString as d, createTextVNode as j, pushScopeId as B, popScopeId as $, defineCustomElement as I } from "vue";
import { _ as N } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const v = (l) => (B("data-v-a26f45c1"), l = l(), $(), l), D = { class: "ma-card-explore__header" }, M = {
  key: 0,
  class: "ma-card-explore-badge"
}, R = ["src", "alt", "title"], V = /* @__PURE__ */ v(() => /* @__PURE__ */ e("div", { class: "ma-card-explore-badge--placeholder" }, null, -1)), L = { class: "ma-card-explore__thumbnail" }, Z = ["src", "alt"], q = { class: "ma-card-explore__body" }, G = { class: "ma-card-explore__body-top" }, J = {
  key: 0,
  class: "ma-card-explore__top-badge-container"
}, O = ["src", "alt"], T = { class: "ma-card-explore__top-badge-text" }, Y = { class: "ma-popover__content" }, A = { class: "ma-card-explore__title" }, H = { class: "ma-card-explore__text" }, K = { class: "ma-card-explore__location" }, P = /* @__PURE__ */ v(() => /* @__PURE__ */ e("svg", {
  width: "12",
  height: "12",
  viewBox: "0 0 12 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ e("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M6.07786 9.90368C8.02595 7.487 9 5.77552 9 4.76923C9 3.23983 7.65685 2 6 2C4.34315 2 3 3.23983 3 4.76923C3 5.77552 3.97405 7.487 5.92214 9.90368L5.92214 9.90368C5.9568 9.94668 6.01976 9.95344 6.06276 9.91878C6.06832 9.9143 6.07338 9.90924 6.07786 9.90368Z",
    stroke: "#1C1C1C",
    "stroke-width": "0.7"
  }),
  /* @__PURE__ */ e("path", {
    d: "M5.96875 6C6.52103 6 6.96875 5.55228 6.96875 5C6.96875 4.44772 6.52103 4 5.96875 4C5.41646 4 4.96875 4.44772 4.96875 5C4.96875 5.55228 5.41646 6 5.96875 6Z",
    stroke: "#1C1C1C",
    "stroke-width": "0.7"
  })
], -1)), Q = { class: "ma-card-explore__category" }, U = {
  key: 0,
  class: "ma-card-explore__room-alert"
}, W = { class: "ma-card-explore__price" }, X = {
  key: 0,
  class: "ma-card-explore__price-original"
}, ee = { class: "ma-card-explore__price-normal" }, ae = { class: "ma-card-explore__discount-percent" }, te = {
  key: 1,
  class: "ma-card-explore__price-special"
}, oe = ["title"], re = /* @__PURE__ */ F({
  __name: "card-explore.ce",
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
  emits: ["to"],
  setup(l, { emit: y }) {
    const g = l, a = E(g.data ? JSON.parse(g.data) : null), x = n(
      () => a.badges.filter(({ badge_type: o }) => o === "default_badge")
    ), f = n(
      () => a.badges.filter(({ badge_type: o }) => o === "top_badge")
    ), w = n(() => ({
      justifyContent: a.highest_price ? "space-between" : "flex-end"
    })), k = n(() => {
      const o = [];
      return a.destinations.map(({ name: s }) => {
        o.push(s);
      }), o && o.join(", ") || "";
    }), C = n(() => {
      const { highest_gimmick_price: o, highest_price: s } = a;
      return o && s ? Math.round((s - o) / s * 100) : 0;
    }), b = (o) => o.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."), z = () => y("to");
    return (o, s) => (r(), i("div", {
      class: S(["ma-card-explore", { "is-small": l.isSmall }])
    }, [
      e("div", D, [
        c(x).length ? (r(), i("div", M, [
          (r(!0), i(m, null, h(c(x), (t, _) => (r(), i("div", {
            key: `${t.badge_type}-${_}`
          }, [
            e("img", {
              src: t.badge_image,
              alt: t.badge_description,
              title: t.badge_title,
              loading: "lazy",
              class: "ma-card-explore-badge__img"
            }, null, 8, R),
            V
          ]))), 128))
        ])) : p("", !0),
        e("div", L, [
          e("img", {
            src: a.image_url,
            alt: a.name,
            class: "ma-card-explore__image",
            loading: "lazy"
          }, null, 8, Z)
        ])
      ]),
      e("div", q, [
        e("div", G, [
          c(f).length ? (r(), i("div", J, [
            (r(!0), i(m, null, h(c(f), (t, _) => (r(), i("div", {
              class: "ma-popover",
              key: `${t.badge_type}-${_}`
            }, [
              e("div", {
                class: "ma-card-explore__top-badge",
                style: u({
                  color: t.badge_preset_color.text_color,
                  backgroundColor: t.badge_preset_color.background_color
                })
              }, [
                e("img", {
                  src: t.badge_image,
                  alt: t.badge_title,
                  class: "ma-card-explore__top-badge-icon"
                }, null, 8, O),
                e("div", T, d(t.badge_title), 1)
              ], 4),
              e("div", Y, d(t.badge_description), 1)
            ]))), 128))
          ])) : p("", !0),
          e("div", A, [
            e("div", H, d(a.name), 1)
          ]),
          e("div", K, [
            P,
            j(" " + d(c(k)), 1)
          ]),
          e("div", Q, [
            (r(!0), i(m, null, h(a.categories.slice(0, 2), (t) => (r(), i("span", {
              key: t.id
            }, d(t.name), 1))), 128))
          ])
        ]),
        e("div", {
          class: "ma-card-explore__body-bottom",
          style: u(c(w))
        }, [
          a.highest_price ? (r(), i("div", U)) : p("", !0),
          e("div", W, [
            a.highest_gimmick_price ? (r(), i("div", X, [
              e("div", ee, " Rp" + d(b(a.highest_gimmick_price)), 1),
              e("div", ae, d(c(C)) + "% ", 1)
            ])) : p("", !0),
            a.highest_price ? (r(), i("div", te, " Rp" + d(b(a.highest_price)), 1)) : p("", !0)
          ])
        ], 4)
      ]),
      e("a", {
        title: a.name,
        class: "ma-card-explore__link",
        onClick: z
      }, null, 8, oe)
    ], 2));
  }
}), ie = `[data-v-a26f45c1]:root{--el-color-primary: $primary-1;color:#3d4151}.ma-popover[data-v-a26f45c1]{position:relative;cursor:help;z-index:2}.ma-popover:hover .ma-popover__content[data-v-a26f45c1]{opacity:1;visibility:visible}.ma-popover__content[data-v-a26f45c1]{position:absolute;top:calc(100% + .5rem);left:50%;display:inline-block;min-width:13rem;max-width:90%;padding:.75rem .5rem;border-radius:.5rem;background-color:#fff;box-shadow:0 .125rem .75rem -.125rem #0003;z-index:10;opacity:0;visibility:hidden;transition:opacity .3s ease-in-out;transform:translate(-50%);color:#3d4151;font-size:12px}.ma-popover__content[data-v-a26f45c1]:before{content:"";position:absolute;top:-.5rem;left:50%;width:0;height:0;z-index:9;border-left:.5rem solid transparent;border-right:.5rem solid transparent;border-bottom:.5rem solid #FFFFFF;transition:opacity .3s ease-in-out;transform:translate(-50%)}.ma-card-explore[data-v-a26f45c1]{max-width:19rem;position:relative;display:flex;flex-direction:column;padding:.75rem;background-color:#fff;border-radius:.75rem;box-shadow:.25rem 0 .875rem #4242421a}.ma-card-explore__header[data-v-a26f45c1]{position:relative}.ma-card-explore__body[data-v-a26f45c1]{min-height:11.5rem;max-height:11.5rem;display:flex;flex-flow:column;justify-content:space-between;margin-top:.75rem}.ma-card-explore__body .ma-card-explore__body-bottom[data-v-a26f45c1]{display:flex;align-items:flex-end;margin-top:1rem}.ma-card-explore__link[data-v-a26f45c1]{position:absolute;top:0;left:0;display:block;width:100%;height:100%;z-index:1}.ma-card-explore-badge[data-v-a26f45c1]{padding:.5rem;background:#F5F7FF;box-shadow:0 4px 10px #42424233;border-radius:8px 0;position:absolute;top:0;left:-.7rem;display:flex;align-items:center;justify-content:flex-start;gap:.5rem;z-index:2}.ma-card-explore-badge__img[data-v-a26f45c1]{height:1.5rem;object-fit:contain}.ma-card-explore-badge .ma-card-explore-badge--placeholder[data-v-a26f45c1]{position:absolute;bottom:-11px;left:0px;width:11px;height:11px;background-color:#a2b1f1;border-bottom-left-radius:100px;box-sizing:border-box}.ma-card-explore__thumbnail[data-v-a26f45c1]{position:relative;display:grid;align-items:center;justify-content:center;height:16.25rem;width:100%;overflow:hidden;line-height:1;background-color:#dfe2e7;border-radius:.5rem;aspect-ratio:8/7}@supports not (aspect-ratio: 8/7){.ma-card-explore__thumbnail[data-v-a26f45c1]:before{float:left;padding-top:100%;content:""}.ma-card-explore__thumbnail[data-v-a26f45c1]:after{display:block;content:"";clear:both}}.ma-card-explore__image[data-v-a26f45c1]{position:absolute;top:50%;transform:translateY(-50%);width:100%;height:100%;object-fit:cover}.ma-card-explore__top-badge-container[data-v-a26f45c1]{display:flex;flex-direction:row}.ma-card-explore__top-badge[data-v-a26f45c1]{display:flex;flex-direction:row;align-items:center;margin-right:6px;padding:6px;border-radius:4px;font-size:12px}.ma-card-explore__top-badge .ma-card-explore__top-badge-text[data-v-a26f45c1]{margin-left:3px}.ma-card-explore__title[data-v-a26f45c1]{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;white-space:pre-wrap;word-break:keep-all;text-overflow:ellipsis;overflow:hidden;margin:6px 0;font-weight:700;font-size:16px;line-height:24px;color:#3d4151}.ma-star-sprite[data-v-a26f45c1]{position:absolute}.ma-card-explore__location[data-v-a26f45c1]{display:flex;align-items:center;justify-content:flex-start;gap:.25rem;margin:0 0 .25rem;font-size:.75rem;line-height:1rem;font-size:12px;font-weight:400;color:#657085}.ma-card-explore__category[data-v-a26f45c1]{font-weight:400;font-size:12px;line-height:18px;color:#2e7d32}.ma-card-explore__category span[data-v-a26f45c1]{padding:0 .5rem;border-radius:.5px;border-right:1px solid #DFE2E7}.ma-card-explore__category span[data-v-a26f45c1]:first-child{padding-left:0}.ma-card-explore__category span[data-v-a26f45c1]:last-child{border:none}.ma-card-explore__price-original[data-v-a26f45c1]{display:flex;align-items:center;justify-content:flex-start;gap:.5rem;height:1.25rem}.ma-card-explore__price-normal[data-v-a26f45c1]{font-size:.75rem;font-weight:400;color:#657085;text-decoration-line:line-through;line-height:1rem}.ma-card-explore__discount-percent[data-v-a26f45c1]{padding:3px;background:#FDECE9;border-radius:4px;font-size:.75rem;font-weight:400;color:#c62828;line-height:1rem}.ma-card-explore__price-special[data-v-a26f45c1]{font-size:1rem;font-weight:700;line-height:1.5rem;color:#e64325}.ma-card-explore__room-alert[data-v-a26f45c1]{font-weight:400;font-size:.75rem;color:#c62828}
`, de = /* @__PURE__ */ N(re, [["styles", [ie]], ["__scopeId", "data-v-a26f45c1"]]), ce = I(de);
function ne() {
  customElements.define("ma-card-explore", ce);
}
export {
  ne as register
};
