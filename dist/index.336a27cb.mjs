import { defineComponent as w, computed as W, openBlock as e, createElementBlock as b, createElementVNode as i, toDisplayString as l, createCommentVNode as d, unref as R, withDirectives as V, isRef as K, vModelDynamic as lA, renderSlot as z, ref as S, onMounted as F, createVNode as t, withCtx as g, Fragment as o, renderList as B, createTextVNode as k, withModifiers as q, normalizeStyle as eA, createBlock as y, onBeforeUnmount as cA, Transition as O, vModelText as _, createStaticVNode as ZA, reactive as x, defineCustomElement as IA } from "vue";
import { _ as $, H as AA, a as iA } from "./ModalPeek.vue_vue_type_script_setup_true_lang.c5f253da.mjs";
import { t as L, b as r } from "./index.ba6cd7a3.mjs";
import { E as RA } from "./el-popper.df109c89.mjs";
import { u as GA } from "./vue-i18n.esm-bundler.9ad5361b.mjs";
import { _ as bA } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
import "./plugin-vue_export-helper.60902f82.mjs";
const MA = { class: "booking-detail__flight-item" }, DA = { class: "flight-item__title" }, dA = { class: "flight-item__info" }, YA = { class: "flight-item__info-image" }, EA = ["src", "alt"], nA = { class: "flight-item__info-description" }, UA = { class: "flight-item__info--title" }, jA = { class: "flight-item__info--subtitle" }, gA = { class: "flight-item__route" }, JA = { class: "flight-item__route-name" }, yA = { class: "flight-item__route--airport" }, tA = /* @__PURE__ */ i("div", { class: "flight-item__route--arrow" }, [
  /* @__PURE__ */ i("svg", {
    width: "11",
    height: "12",
    viewBox: "0 0 11 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, [
    /* @__PURE__ */ i("path", {
      d: "M6.47017 1.13684C6.21048 0.877147 5.78944 0.877146 5.52975 1.13684C5.27022 1.39636 5.27003 1.81708 5.52933 2.07684L8.77996 5.33329H1.33329C0.965103 5.33329 0.666626 5.63177 0.666626 5.99996C0.666626 6.36815 0.965103 6.66663 1.33329 6.66663H8.77996L5.52933 9.92308C5.27003 10.1828 5.27022 10.6036 5.52975 10.8631C5.78944 11.1228 6.21048 11.1228 6.47017 10.8631L10.6262 6.70707C11.0167 6.31654 11.0167 5.68338 10.6262 5.29285L6.47017 1.13684Z",
      fill: "#424242"
    })
  ])
], -1), wA = { class: "flight-item__route--airport" }, mA = { class: "flight-item__route-time" }, C = /* @__PURE__ */ w({
  __name: "booking-detail-flight-item-mobile",
  props: {
    title: null,
    segment: null,
    hasDetailButton: { type: Boolean },
    t: null
  },
  setup(A) {
    const { title: M, segment: E, hasDetailButton: N, t: G } = A, Y = W(() => E.Segments.Departure[0]), n = W(() => E.Segments.Departure[E.Segments.Departure.length - 1]), U = W(() => {
      const I = E.Segments.TotalTransitDepart;
      return I === 0 ? G("direct") : G("transit", { total: I });
    });
    return (I, c) => (e(), b("section", MA, [
      i("div", DA, [
        i("h2", null, l(A.title), 1),
        A.hasDetailButton ? (e(), b("a", {
          key: 0,
          class: "btn-link",
          onClick: c[0] || (c[0] = (Z) => I.$emit("showDetail"))
        }, l(A.t("see_detail")), 1)) : d("", !0)
      ]),
      i("div", dA, [
        i("div", YA, [
          i("img", {
            src: R(Y).AirlineImageUrl,
            alt: R(Y).AirlineName
          }, null, 8, EA)
        ]),
        i("div", nA, [
          i("div", UA, l(R(Y).AirlineName), 1),
          i("div", jA, l(R(Y).ClassCategory) + " (Subclass " + l(R(Y).ClassCode) + ") ", 1)
        ])
      ]),
      i("div", gA, [
        i("div", JA, [
          i("div", yA, l(R(Y).OriginCityName) + " (" + l(R(Y).Origin) + ") ", 1),
          tA,
          i("div", wA, l(R(n).DestinationCityName) + " (" + l(R(n).Destination) + ") ", 1)
        ]),
        i("div", mA, [
          i("span", null, l(R(L)(R(Y).DepartDate)), 1),
          i("span", null, l(R(Y).DepartTime) + " - " + l(R(n).ArriveTime), 1),
          i("span", null, l(A.segment.Segments.TravelTimeDepart), 1),
          i("span", null, l(R(U)), 1)
        ])
      ])
    ]));
  }
}), WA = { class: "form" }, oA = { class: "form-input" }, SA = { class: "form-input__title" }, zA = { class: "form-input__control" }, BA = ["type"], kA = {
  key: 0,
  class: "form__error"
}, uA = {
  key: 1,
  class: "form__info"
}, h = /* @__PURE__ */ w({
  __name: "FormInput",
  props: {
    type: null,
    title: null,
    value: null,
    error: null,
    info: null
  },
  emits: ["input"],
  setup(A, { emit: M }) {
    const { type: E, title: N, value: G, error: Y, info: n } = A;
    return (U, I) => (e(), b("div", WA, [
      i("div", oA, [
        i("div", SA, l(A.title), 1),
        i("div", zA, [
          V(i("input", {
            type: A.type,
            "onUpdate:modelValue": I[0] || (I[0] = (c) => K(G) ? G.value = c : null),
            onInput: I[1] || (I[1] = (c) => M("input", A.value))
          }, null, 40, BA), [
            [lA, A.value]
          ]),
          z(U.$slots, "info")
        ])
      ]),
      A.error ? (e(), b("div", kA, l(A.error), 1)) : d("", !0),
      A.info ? (e(), b("div", uA, l(A.info), 1)) : d("", !0)
    ]));
  }
}), TA = { class: "form" }, vA = { class: "form-input" }, hA = { class: "form-input__title" }, aA = ["value"], pA = /* @__PURE__ */ i("svg", {
  width: "12",
  height: "7",
  viewBox: "0 0 12 7",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ i("path", {
    d: "M11.2946 0.294581C10.9053 -0.0946914 10.2743 -0.0950353 9.88462 0.293813L6 4.16997L2.11538 0.293812C1.72569 -0.0950355 1.09466 -0.0946913 0.705384 0.294581C0.315811 0.684154 0.315811 1.31578 0.705384 1.70535L5.29289 6.29286C5.68342 6.68338 6.31658 6.68338 6.70711 6.29286L11.2946 1.70535C11.6842 1.31578 11.6842 0.684154 11.2946 0.294581Z",
    fill: "#424242"
  })
], -1), FA = { class: "form-select__title" }, QA = ["onClick"], LA = {
  key: 0,
  width: "18",
  height: "13",
  viewBox: "0 0 18 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, VA = /* @__PURE__ */ i("path", {
  d: "M5.99991 10.17L2.53492 6.705C2.14515 6.31524 1.51356 6.31412 1.12242 6.70251C0.729321 7.09284 0.728198 7.72829 1.11992 8.12L5.29281 12.2929C5.68333 12.6834 6.31649 12.6834 6.70702 12.2929L17.2947 1.70517C17.6842 1.31571 17.6842 0.684286 17.2947 0.294834C16.9054 -0.0944891 16.2743 -0.094638 15.8847 0.294501L5.99991 10.17Z",
  fill: "#323C9F"
}, null, -1), XA = [
  VA
], H = /* @__PURE__ */ w({
  __name: "FormSelect",
  props: {
    title: null,
    value: null,
    options: null,
    t: null
  },
  emits: ["input"],
  setup(A, { emit: M }) {
    const { title: E, value: N, options: G, t: Y } = A, n = S(), U = (Z) => G.find((J) => J.value === Z);
    F(() => {
      const Z = U(N);
      n.value = Z;
    });
    const I = S(!1), c = (Z) => {
      n.value = Z, I.value = !1, M("input", Z.value);
    };
    return (Z, J) => {
      var j;
      return e(), b("div", TA, [
        i("div", vA, [
          i("div", hA, l(A.title), 1),
          i("div", {
            class: "form-input__control",
            onClick: J[0] || (J[0] = (D) => I.value = !0)
          }, [
            i("input", {
              type: "text",
              value: (j = n.value) == null ? void 0 : j.label
            }, null, 8, aA),
            pA
          ])
        ]),
        t($, {
          show: I.value,
          "onUpdate:show": J[2] || (J[2] = (D) => I.value = D),
          class: "form-select",
          onClose: J[3] || (J[3] = (D) => I.value = !1)
        }, {
          footer: g(() => [
            i("button", {
              class: "btn btn-primary",
              onClick: J[1] || (J[1] = (D) => I.value = !1)
            }, l(A.t("close")), 1)
          ]),
          default: g(() => [
            i("div", FA, l(A.title), 1),
            (e(!0), b(o, null, B(A.options, (D) => {
              var m;
              return e(), b("div", {
                key: D.value,
                class: "form-select__item",
                onClick: (u) => c(D)
              }, [
                k(l(D.label) + " ", 1),
                D.value === ((m = n.value) == null ? void 0 : m.value) ? (e(), b("svg", LA, XA)) : d("", !0)
              ], 8, QA);
            }), 128))
          ]),
          _: 1
        }, 8, ["show"])
      ]);
    };
  }
}), OA = ["onClick"], xA = { class: "modal-base-mobile__image" }, rA = { class: "modal-base-mobile__title" }, CA = { class: "modal-base-mobile__footer" }, HA = /* @__PURE__ */ w({
  __name: "ModalBase",
  props: {
    width: { default: "65%" }
  },
  emits: ["close"],
  setup(A, { emit: M }) {
    const { width: E } = A, N = () => {
      M("close");
    };
    return (G, Y) => (e(), b("div", {
      id: "modal-base-mobile",
      onClick: q(N, ["self"])
    }, [
      i("div", {
        class: "modal-base-mobile__body",
        style: eA({ width: E })
      }, [
        i("div", xA, [
          z(G.$slots, "image")
        ]),
        i("div", rA, [
          z(G.$slots, "title")
        ]),
        z(G.$slots, "default"),
        i("div", CA, [
          z(G.$slots, "footer")
        ])
      ], 4)
    ], 8, OA));
  }
}), PA = { class: "form-info" }, sA = /* @__PURE__ */ i("path", {
  d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z",
  fill: "#424242"
}, null, -1), fA = [
  sA
], KA = /* @__PURE__ */ i("svg", {
  width: "64",
  height: "56",
  viewBox: "0 0 64 56",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ i("path", {
    d: "M29.5255 3.19227C30.6464 1.32426 33.3536 1.32426 34.4745 3.19227L62.5828 50.0395C63.7368 51.9628 62.3513 54.4098 60.1083 54.4098H3.89169C1.64866 54.4098 0.263203 51.9628 1.41723 50.0395L29.5255 3.19227Z",
    fill: "#EEF5FF",
    stroke: "#BBD3F9",
    "stroke-width": "2"
  }),
  /* @__PURE__ */ i("path", {
    d: "M29.3404 17.5239H34.7318L33.8211 36.1719H30.2147L29.3404 17.5239ZM32.0361 45.6952C31.1861 45.6952 30.4819 45.4029 29.9233 44.8185C29.3647 44.2076 29.0854 43.4638 29.0854 42.5872C29.0854 41.7105 29.3647 40.98 29.9233 40.3956C30.4819 39.8112 31.1861 39.519 32.0361 39.519C32.8619 39.519 33.5418 39.8112 34.0761 40.3956C34.6347 40.98 34.914 41.7105 34.914 42.5872C34.914 43.4638 34.6347 44.2076 34.0761 44.8185C33.5418 45.4029 32.8619 45.6952 32.0361 45.6952Z",
    fill: "#BBD3F9"
  })
], -1), qA = ["innerHTML"], _A = /* @__PURE__ */ i("svg", {
  width: "20",
  height: "20",
  viewBox: "0 0 20 20",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ i("path", {
    d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V9H11V15ZM11 7H9V5H11V7Z",
    fill: "#424242"
  })
], -1), P = /* @__PURE__ */ w({
  __name: "FormInputInfo",
  props: {
    type: null,
    t: null
  },
  setup(A) {
    const M = S(!1);
    return (E, N) => {
      const G = RA;
      return e(), b("div", PA, [
        A.type === "Name" ? (e(), b(o, { key: 0 }, [
          (e(), b("svg", {
            onClick: N[0] || (N[0] = (Y) => M.value = !0),
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
          }, fA)),
          M.value ? (e(), y(HA, {
            key: 0,
            width: "80%",
            onClose: N[2] || (N[2] = (Y) => M.value = !1)
          }, {
            image: g(() => [
              KA
            ]),
            title: g(() => [
              k(l(A.t("name_instruction_title")), 1)
            ]),
            footer: g(() => [
              i("button", {
                class: "btn btn-primary",
                onClick: N[1] || (N[1] = (Y) => M.value = !1)
              }, l(A.t("understand")), 1)
            ]),
            default: g(() => [
              i("div", {
                class: "form-info__description",
                innerHTML: A.t("name_instruction_desc")
              }, null, 8, qA)
            ]),
            _: 1
          })) : d("", !0)
        ], 64)) : d("", !0),
        A.type === "Passport" ? (e(), y(G, {
          key: 1,
          placement: "bottom-end",
          width: 255,
          trigger: "hover",
          effect: "dark",
          content: A.t("passport_info")
        }, {
          reference: g(() => [
            _A
          ]),
          _: 1
        }, 8, ["content"])) : d("", !0)
      ]);
    };
  }
}), s = [
  {
    country_id: 8,
    country_code: "AF",
    country_name: "Afghanistan",
    currency_default: "RUB",
    calling_code: 93,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3REQwQzQwNjE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3REQwQzQwNzE3NTMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdERDBDNDA0MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdERDBDNDA1MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+duaIkQAAAalJREFUeNpiZMAN2BkYVjMwyDIwfMCQ4mNgeM3K4DEFj24GJgaagaFpNAuR6v4yMPwDO4SRaOcQZfQfBgZOCQkOSclfb978/fbt59u3/6li9G+guTIy/EZGTOycbDJyrIIC3+7e/XX0CMgXZIc1I9hcPnstsbzA94ePfH/x+N//n683b+ILNBGw0v3zlwKjIYErGub94dhpJi5u3Q1rtFcuZeYTerNtj3CwJxMjBQECdBaXoRybhCzLFy6eQJuHPW1/P30W9Db9fuMlh6QSt706A8NNMl0NNJpNVIrHyIyDR/DV4UOMivxf3tx/vnM7p4gor5kFh7gs+QEC9NG38ze+3jz7m+Mrv6i2oKGtTGo6v7jOr3/vP1878fXcNfIDBCj39fWHdyt2K/Q3vpy05FFWCwMTE6+NrnhR3PvyCZ9vP6Mo8bEyMLxZsOkTD4tkaga/vvXvt285rdSeT5n1dckaFkrS9X+w9F+Gf8+nrPl9+Q2LkMD/f//+rd/4es8ePoZ/LKyUZZn/YIczMzC8PHgALsgGFvxPeW78D8477BiCw7RQpaHRAAEGAEWfj+c8VB1nAAAAAElFTkSuQmCC"
  },
  {
    country_id: 251,
    country_code: "AX",
    country_name: "Aland Islands",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 11,
    country_code: "AL",
    country_name: "Albania",
    currency_default: "ALL",
    calling_code: 355,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRDFBRDI0NTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRDFBRDI0NjE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdERDBDNDA4MTc1MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJEMUFEMjQ0MTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GPq/agAAAiRJREFUeNrEVb9rFEEUfm9m9nb3bhNz50UMClopRAsFrUURW1tBrSzsLPwfbPwDbGz8F8QiIkLAKiCkUIKiGBEFwXAhd7fZH7Mz83zZtbC4TdyF4LDF8N7ON9/73jczuN4/A4czBBzaqIUmAA+Q0wjQRzkUCsv4USEHKKs4/0DtWOdAgxLxrUk+mqyHIkLx2eg1k1gA3kwDtYFeFOqVnj5NRwXQip7eGG9+svlPV1wff3mejwuiZ9n2i3zCRWANAta1kaFX9OS1jkdkHdGyCt6blMmel8E3p1OgY6iueL2b/pEtZ5qx5kRCLIhMyK4WMQFt2HzdpEzypZ5OnOVUSoT1gqi6BOvA7ZoDUan5JB3BXxPeOALBahigxloLQO4SFy5hBjMOpuA0zc4ebL4OYExuZl0dxNiRh63MZ4jYXjzJiG77/cuqW8UvqvBO0Ge+jjsplKHmgrCIIeICyke9pXPKZ+kvqPCS1+X6T4vO42iJN/YB22jNIo6cYWN9dfqdya560TxKruKaF32w2abVW2VWtNCa6fRQnpTeD1vcD4anZOdNEa8VCZN9EA6/2+KE9Ob3dUit+XbJHRfqXjBgTZjYhk3nUDAQN/CsDJbDYIfcbvlhU+hqQUpuSo6tcstfYMp8q9z1+7+cyfZMuUe4zZGp/GfLxRm4bbIPu4scYbIJOO6EO+hSVf9y8zLQmGxUKrNDRu7HtSH0n+NHrpr8/1fmtwADAEjB+xzEjgF0AAAAAElFTkSuQmCC"
  },
  {
    country_id: 62,
    country_code: "DZ",
    country_name: "Algeria",
    currency_default: "DZD",
    calling_code: 213,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQUY5NTY0OTkxRjRDNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRDFBRDI0QTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRDFBRDI0OTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFGOTU2NDk5MUY0QzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFGOTU2NDk5MUY0QzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5FFcD/AAACLUlEQVR42sSWQWsTURDHf283dTdZQ9qCVWhQD2JrRCmEaqUoarEQi3c/QEDx2ByqtwgSUTx5EvINPHlQRLRYsViqHgQRVGopRpo2kKbppk26SbO+3UDBk5uY2mEXdh7s++1/5s3MClJDNi1a/daMLaDU5GtBeS/6+AcT7uVu1KwFFXbJmldstwfsXXFdEoWM7P4AGJt0qTqlpcUdBjtQTYUeP6c+LjOd+srKzSnq/RHMWIzNdBpqtR0Aq1Jpt07i8Ryzj74wmCtz72yY4qunBO/edyNRnZxsc46dnEqlo++yPHjx0106Ej9E5kqUGwNRuYMfbeAE9VwO2zQRwWCbFDtqq3Wuzyy77p0LvWTO9WLMm9ReT8Hnb2wkkwi/3zPUm2KZWy1fIbqw5rpv+jply7DoCPdRz+exRy+z4SgwDPREQj4o7cuxsBudYruabGdBQfh829Vll8uN9bYdLmuLSrfGp4ONMA7/kMqDGrVfGQgYKNPvCUxMoI+Py7SobQTXpApdJX26x3Vvv8ywbzZL6bBBx6UR+SWDBFIpqFSw19c9g1VGwsm/NWTKW3w/1gVmlfMLJtc+rGKvWpwcjhFas7CeP8MuFFAjEa9cS3iaTk4D8ctzGNrDxbdZHj6Z53jRohjqRJwZQhsbQ4vHZWR0r2BTeB6LDtynuDVNYYUDpb3MXU1jHO1vpWOa3oeEIhrwrFM8Oku+WqvQFqeT+N/Tadfn8Z9tvNVfH/O3AAMACcCyb9iaq58AAAAASUVORK5CYII="
  },
  {
    country_id: 263,
    country_code: "AS",
    country_name: "American Samoa",
    currency_default: "USD",
    calling_code: null,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyRDFBRDI0RDE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyRDFBRDI0RTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJEMUFEMjRCMTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJEMUFEMjRDMTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+O7eQxAAAAhJJREFUeNrslD9oE1Ecx7/v7l2TXpLGWNrGioJDO4ogLkJBhA6iFDpUOhc6ODiKBUWcBJ1bKLaCIIJOjl0ypDh1rFDQyUH6R1HitaRpcvfu+X0XHWp6TWkCGdof3D3evR/3+f35vp/AtafrADI4yLQGlEZ+oAdCCGxtedC2ADeNvnYXUv4uCl8LOM/1N/eHmeQz2PDV/FcZaAjx3cP7V1PIppO4OvoCyk0AFh3SXEON45oB7+zL+F82P7frSfem8eRlEUnHRki4m3MhCN4t16CNrzg+eL8FCsKr4NHMbfhBiOezBSwvfWIEiCrw+MEtjFy5iJsTc/BTLKcj2wSmWQRcHsqjsudDVJhZf0/9YL2Etwzi4+o3BC6h0m6p1P+JxILKZ3H3/puo2WIwBxAuux3cm7mD+XcrWCt+Bi71RRVoHxj1kiLhRCLSvgJKZQRlibUvm3CZqXcu2xI0HmyMYgKh3Wzu5PQNmFu0uLBMNSdbVnQdbDvxpzWNih/i2cMxnKXb6w+rCKoBO8B47cZ7XFZ+pMGjCF06QTX+lPqxQoXxqXkkuiSkqkEkLSq/euCwSalqBD1KE0Sx9/p27OTiPdXs88YPD4q5XOg7A2GmmW4sszZC5DvH4Cyuuknecqi20zS64czfcbbnxTuZeOhSshPM2IqCOBT8i47ttmbQaFagQ3YKPhngTCfAZlZvdAL+R4ABAI7lqpHANxKvAAAAAElFTkSuQmCC"
  },
  {
    country_id: 61,
    country_code: "DS",
    country_name: "American Samoa",
    currency_default: "USD",
    calling_code: 1,
    flag: null
  },
  {
    country_id: 6,
    country_code: "AD",
    country_name: "Andorra",
    currency_default: "EUR",
    calling_code: 376,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQUI4NkFBODE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUI4NkFBOTE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRBQjg2QUE2MTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRBQjg2QUE3MTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lPUISQAAAfFJREFUeNrUlFtrE0EUx8/ZS7KXpJLNxiQ0biSt1hTFO4qCvgl+AF98EV/9Nr4UP4ePUuijFLzUait5iDZVm2a3NE22JNntzhx3i0WkWmWCoH+YeZlzfjNz/mcGr8McHBIDyYOJj/wRYI+1CocDZCeM5xX9spxjqBD8TBL8Nf0DaMTv8x9K+S1TTo+IVKBAUndpL4OYwtgLwPHRfLCTlTN9d+vCdrueKzaK9hIfGnp5F0gRRB+4Li0uPaRek5ixrdy2e2ZztYo4eWvqiSTHQSiCxm9X1qPGRu51JX+zf7z9WPmiD9VS/64/DLOm7h9dlV/aKEPSuZute4FvTd8AZ/Zces22vKbdXQ0j/V3jQXIuJRArSLIrDlysnfQ6nzpPYXRFxY4FWS2KdF1eS3zgMgqg+f5SsfwK9qZT7gK2AvVOhswoU+lq2C3lXyQxTJEhEuhrHg9/p45mBUxL0izkplEixgqcKpvupSRZ4mM0X0SD0Fmu3T92tmtonBmSu573PXvy9GJSNAIUQidZ2ann52dSAamfvWtbG/U0X6memNero9rM8oEfXPTUGJy6+CxOn3i/3m5fLVdeOrNvgCOkNKD0uA+d+QVEyTnzwam/JW7wXomAy7nwh4clhN4HEGcDE9EkgiMqIP6pEv13/7WAvgowAA7uuJg3MwVHAAAAAElFTkSuQmCC"
  },
  {
    country_id: 14,
    country_code: "AO",
    country_name: "Angola",
    currency_default: "AOA",
    calling_code: 244,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQUI4NkFBQzE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQUI4NkFBRDE3NkYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRBQjg2QUFBMTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRBQjg2QUFCMTc2RjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HdsdLgAAAZ1JREFUeNpiPCeoxkAbwMRAMzCYjP7/i+H/XwYGRqoazcjM8Pcb45+vTP++Mf7/Tdh0Yo1mZGL4/oZZ0O+X2dfXonE/vn9mIeh2JiLd+/sdEzPb/x+3mF/0csn3fVWf+fHHR5b/PxnxmM5CjNF/PjKyS/2V7f365w3jrRz+d5vYNHZ+lDrx9c1CDiZmkMU4jebHJQnxFyPD99+Mf34wCNr+Y+D9/3Pa3zdneL7M/CNe8v3rfG4uYMQy/sfU9fH/X5DRr/79wWP0v98MfAoMXwX+bjRjV5Jl/v7230+GH9fXMpl5MrMY/H54gZFDAIvR7IzgkAK6Gg8CultFmuXjFXEfA6ATGXhBIoxOeuxPzgurKwNdxoRDF9Fg6Ry+//8lzMyhehrruB9cFaVa7koK4Xh1UjQ2gFOIj/HJRbHidG4qGLptjsCqSfxARrAH+6tTok+PiGydLUA4yRJjdFESV1Mhz49/DH9+/582/9upy79drNjuPPw7Y/l36gSIoRaLkTY0H3CwM66dyt+Yx02Tgk1chCnAlZ1hFBANAAIMABE9jLBld63JAAAAAElFTkSuQmCC"
  },
  {
    country_id: 10,
    country_code: "AI",
    country_name: "Anguilla",
    currency_default: "XCD",
    calling_code: 126,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzYwMTE0QkMxNzcwMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REFCODZBQjAxNzZGMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iOEI3QjgwQ0VBMDNEMDkyMkUxQTdFMDM0NUEwRTZDQzEiIHN0UmVmOmRvY3VtZW50SUQ9IjhCN0I4MENFQTAzRDA5MjJFMUE3RTAzNDVBMEU2Q0MxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/LHIVAAAA2lJREFUeNrsVGtoU2cYfr4kzdWk6QWSpqm1c6K0NnVOizhveNkPnXW0tUzdiMIo24QxW+oNJoj+qbIh+kNRweCFgsNg7RgFNwvtVi0FkzXepjPudK1r056Yk6RpknNOzr5zmq0w9kMq7tcezo/z3Z73ed/n/T4yuG9PyZa1Fx6aD3vuMj23AEfbgUUfXPrsh22t609w4KO55nTTgsShXW9yjvLS3Xe4YZZAh5eAanbrYOOWU++x3b6mkuOtbsfSivCEBBGspM9zmj9fyPqbbS1frDjKVTqPj3HDIYIcvBzIhx97BIt1dUHCbWYM9ZtjRRXMZa/orlOduWgsmzM39hibar3+5Ddnv02FIt91PkvzKUBDD8rxIdAfIAFoqUr6KQllstRSlR2CyEYzTDQjcC9sVn0ynhwXYAUMZk280Mk/H7VrksVv2NIqfdG9VWExl4CyS85SXqsWUiioXjPf/xMjJEasedpAgK6QKWqNr3jZeCgSFlJVtcvzJ0Imdigs6jI3OnM3rHEudzFdfRFHSX/uHCb6R8agE1Q5EKlSSGDdH1UfOeJODPUZTc8nSYPWUuL1ft+w9QpQPMWtWXy3wlX3zt6dSxZUTKY7bp4M5rvmFbpudT6paexZt7VuD1fq73rQHvz0fvVAzAS+T5FMCyLwKRNgN/7enh58YFhRCOviKN0grxI5NK3OmeYlvk3xHQOes+82VX3S3XLAn/QH7DboRga3l+9ftPG057Fh21rHz5ujx3Q/ag1JKWtjTlyg57uTBaszDT2pgBejh8ITdN70t40aa2j0q3PX2yLFPnY2xAjAXu0lv45X/XKbg1H9sLd/V6/v65qa3SsXmnW/qcVJaoEiioxx1Dq9/tF58BzsldBPDA/FaUiiSIYi/n3ay0oidCBnKiENFAGjRDZdJ8mOhxU6OikSpSskpErLdMHgl6qBNhhssFXC8pbL1RwIjBDMyqoGbJSOQK0M6Xm1ootD9l5kFE/yFSVpklVDYWCeBeuPdYztbXnxBBYLHJ72QOA+UDbdfASNmBEkWf6I+dr+WO1Kdf9T9YZ9ac5IYMRfBVETvD0zaqV6mryO/nKeSR3siIV4gLZ8ZnrDjFVPKZOQVJywALOIfD+nocErgbqaI8lu4R+8r049beu/vHx4bfif+r+j/lOAAQAGyVcqpoR/+gAAAABJRU5ErkJggg=="
  },
  {
    country_id: 15,
    country_code: "AQ",
    country_name: "Antarctica",
    currency_default: "NUL",
    calling_code: 672,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjAxMTRCRjE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjAxMTRDMDE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MDExNEJEMTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2MDExNEJFMTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SFAcWAAAAxRJREFUeNqkVutLU2EY/52zc7a5i1te5r2lUFpiYl+CMsjoQ/QPRGYFUZAQ4WfBT0VEn6JPBSFGQZcPCQVS9EGswBAy7GagYuqWTp24zTnnzqXnfb3g1M3D/I2Xc3nfZ7/n/hzhWFu/H0AxrQgMQKCl6iv3ooBM4KT1T1q9wYZrSpglAdPhBOYWEpBNIhaWVDisJpTkWECP0HXj5JLRk4x0aCrGSW6fK4fNbEKQFOgfjeDZpwA/k59tJkVEUkLYUYktxEyAyZiElesaZiMJePOsaL9ehcrirPX3jcc9uFBfgC9DYXT0BDAxuwSJhMtyrSSvp1QgiZjFLKHp5EoFbrsEC1mprQpOhxK4eqooiXQNdfscqPXa0XSiAAN/F/DgnZ97J0sWIaTIA3HjQ5AIj5Q70XK2FCOBGCaCcVJGgErsCmVUdak9pevYOSfFu77KhbvnK7ilcUVLfX7jg0wu+u2PorHeg+62WrLOhl++KL6PR3F0fzb/UyPw5ltQnm9FlJLPUIxdNoksXULz4yE8v3kQ71sPo717ir8/XeOGVRYNEbPkysuWER5R+XW7OCcRM5d66CCz8ill6kWK2ZWGwoyKleVLLK6thGob5i0mOCwmrkDLk2H8mIgiUzy6dgA3zpTAPxeHvlOMGRQiTSg6Th5yo6bMjt2AxTkcUyAaIWZYXFbTZrBRlOSYqSxlJFTdGHGh24y3X4N42TuzK2IrdTdxUyNKS2wngRC56E7nGOajSsbE97t8vP5ZuzVEzOJc4JIRW9bQ8TGQEennPyEM+haR45B2LqekDfJRrlPGvTfj6OybwSUqLYlGEBsKFR4r6qjDsf3qUtu28rdej2FZ1aj2pfW2a4iYHWajjpGwAdH6YpT3XUau0eYklcnlhiJ0NFdukX34YRI/qRT30lDRdIPTafOkYnBT52JrDSxLbRYRTdRaN6Pr2xwNCR/2UDZLIjIjTteVPC4zXlHW99I4ZF4ZGIvyidQ3HOFxZUtR9bS9OrL69RExSszmLfv1DM4jtKjwDyI2YLLMIrnXwi1NQ8q5/gswAJWJHoEWuWKnAAAAAElFTkSuQmCC"
  },
  {
    country_id: 9,
    country_code: "AG",
    country_name: "Antigua and/or Barbuda",
    currency_default: "XCD",
    calling_code: 126,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjAxMTRDMzE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjAxMTRDNDE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MDExNEMxMTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2MDExNEMyMTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VJu1tQAAA/pJREFUeNq8ll1oW2UYx3/nnJyk+W7SjqZZ25VORjvQSSdKLV5UL0ScugsvRKs4FCui6C7aiyHaqw0KMnFgy/BKvRG7KQgiDmGC1SGb7cZWW+0Xa5uadWnXNEvzcT58T9qUpk26gOADL+fwfP3f5/k/73uOdNThn/82vRIGVvl/xPuk3Rthpqol3qQ4TKEoazkdUu4Z8Mlm0C8X6MpZtbJqjgWb43KVZGPAU3fPbUrS+vOxwyqhKpnWB2w80qpS5ZPoeFgt8NlN+r11NMgqtjE9xRN2D33uWnruLpQMOHxQJbZsoCnQ1elCy5pIMrS22Lg2oRGulmkIK1y6li2Zo9cd4hm7j2FtDZuMxJ9airede7ikJTmfXtlRqSmadPlGloEPvERjBm1tdh49aMPQYGRGo0Js5mi7g9c+jBfEbJWn7F66Bca4KNRqjPRH4EBcx/SGRPmWb8edCSb1TEFQ2yGV/XUKlQGJMyf96CkTxW4xJqGLyhWXxPH340SjBpFFg58vF8aHRe6LlfvxiBbNG1kUpFXZMogXIkIRkBT6i/D929UsITXFma41sdUoinsRtFugb7ybUU6/keSAP7UD1JJPRc46AT67DprT2fJGVShyfCsV9Pkb6fH5IJXGoWjsrZH4aVHim2kPbX4b/9w2NgfJammNGLbhWY3vFxI0HTKJ3DJJZUX/nQ5643GOKE5G9HQOIy+2rTvL8/1OZo3f208w+NCL6LFxsmJwkm6ZznGd5K+62OW28RXtrggoNLygoK0Z6IvCp6qZp6+ep3uwh79UkVlRC2fH4tg61HmFLkoJJVcwZIWO179kKnw/RKZzhJQnAjTUQO3tKS5+9hKedIKIO4BSOG3rHG8Vy8FyDCaXGPi6G+4KDt0uMBLCmtx9WT7OCsgk6B/spj4+z5ynejvoRneLiGrojAX38fjCFfp+OAWBPaIQwcqaOD8pvfiybFmRLlhD74U+jtwcYjTYKHJpxS+k7a3Oi7geULUMjtVpZk9/jue9l8lOruYujWJi6ibqfT4SZ8/R0PU8Gc8+0vYKpCLVWq0uCbzOt4yyFKWpyoV/+Beob9yd3liU+IPtTM4togfDosVGKc9Vebc8VqBUHeZGbJ7rz3bec6xGn3uF63OTIqZ+N9DSHBe2MIsr2MKdkSGmu94t6Xfz+AmWhn7EGWjOxdxL5HIOiImBy9XIwtlPiH3x1Q778rnvmPv4FE5ng5gas6xDVxawdT3JTqe4bSqZOvYWqdG/N02ZmXkmX31T2Hziznbv/Dr8J2ALWxwxe/VesvoSE53HNvXWeyYREbb6nE+5Ytv45fGW8+uT53tleIjIyY+QXS6Why7gLpPX/K+PhfWvAAMAKo+tOTpRNSkAAAAASUVORK5CYII="
  },
  {
    country_id: 16,
    country_code: "AR",
    country_name: "Argentina",
    currency_default: "ARS",
    calling_code: 54,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMzA3QTc5QTE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMzA3QTc5QjE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2MDExNEM1MTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2MDExNEM2MTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VveEGAAAASFJREFUeNrklE1OAkEQhV/3DD8ODEQgxBBXwIa4YMUNPIJX4VK4NN6BxM0k7tQYI5FkMgzE4U8ZpttihAN0J9ALqlO9q3zdr+oV6w9evwC4OHHYlA0YCE45NwXGWYFtP9poFbL0oltKSB3wbaeioROHlXEIyOhIiHgFKYTaw6WUkZadxDfwswAuqJSV1BXTAW9mIwTePeLgGZlqB7XuHXK1prKPlSL5XSJ8GyL+fITLX7AYvSMsXKNerMPOF4841ek87borYKXVyb6/4rg/trIOqq0egugDoe8h17hBpd2j37qnGq4psKJSp0y6XaoLN3jy1cGMg5Od/t1MPt6uSe5ETeoHbwLdDcIOYI0NYl+Vs+e1q42CXRPgnY/HJuB/AgwAxP5dJ04ev60AAAAASUVORK5CYII="
  },
  {
    country_id: 12,
    country_code: "AM",
    country_name: "Armenia",
    currency_default: "AMD",
    calling_code: 374,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMzA3QTc5RTE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMzA3QTc5RjE3NzAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMzMDdBNzlDMTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMzMDdBNzlEMTc3MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WDHK5QAAAF9JREFUeNpi/M/A8IlhAAALEPMOhMVMDAMERi2mX+LawmD8ZyAsZmRg2P9vgLLTO8YBsvjvCEtcA2U30GKx/wOSqpcm2/weEIv/b2b4PzBB/Wy0rB7++Zjh80BYDBBgAAfmD594ReJrAAAAAElFTkSuQmCC"
  },
  {
    country_id: 18,
    country_code: "AW",
    country_name: "Aruba",
    currency_default: "AWG",
    calling_code: 297,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzMwN0E3QTMxNzcwMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzMwN0E3QTIxNzcwMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQkNEODUwOUZCREQ1NjMyQTZERjhERDI5ODI4NUUwNUQiIHN0UmVmOmRvY3VtZW50SUQ9IkJDRDg1MDlGQkRENTYzMkE2REY4REQyOTgyODVFMDVEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5hWk3QAAAbxJREFUeNqslM9LVFEUx88597wZZ6wZmRITxBJCUhBahjBtWkgbd23aBEG4EdrpX9D/4M6tuGhhK0FwE+hG3UkUZASRYDTVzJt33497jvclUuuZe7jc5YdzP99zDy6v76lpoIiixAXXjDOICgpDlCIbl7CaptANRHEq92YaFz8SZ3NAHAYtaBCIQAuP/W1dWq28sO+qEl+kvu0MIB/4oL/VEZRs5UZ9iT8tbr9p945Hb9/M0cDQZaYerdydbq1Ge8+31/4cfWvbo/mF8bOJue8/oYICg4lBIi3M/OOXSc7Hyfj51Fw7Odx4+HprdKnXzUCcFz6g8r9o8sKdLb7GIzutJyfP1t5PP/3YrdhUeGDudVE5ZYQTlZS7vzZby7niZBQjoQ7tmq8nESLQ089pjdSE4P6HLl8vdcoAw3D/oa/kI0LAYlUSLbMMCFUfoRKfx3dyvVX+n5BoZu3hwe5is9F3eUgXZLSfRPylc7+WFU4kWHw+NINpinzWeRBZFicA4Rr345sW+GF/dqzZL7KQs2EM9Czzq523Ak1AG7BrH6PRmOsjhZBfq960BEMjsAOuakfKjS0aUklE0L0UYAA5i9TZQeWJxAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 5,
    country_code: "AU",
    country_name: "Australia",
    currency_default: "AUD",
    calling_code: 61,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNTgwMTE3NDA3MjA2ODExODIyQUY5NTY0OTkxRjRDNiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUY3Nzg2NDE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUY3Nzg2MzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDU4MDExNzQwNzIwNjgxMTgyMkFGOTU2NDk5MUY0QzYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDU4MDExNzQwNzIwNjgxMTgyMkFGOTU2NDk5MUY0QzYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4Y+peLAAAD2UlEQVR42uyVW0wcVRjHfzu7s7uwOwgIFLA2VqjKLXKL1fjQ2DaBah9slbSp8qD2ZiSaStTG2AdTTBOrwagvJoZISWp8aDWUCjQ2bYgUGlCC0ECNAi1QspTLwnaX5TI7npkdKJZNQxMTE+OX7J5zvpn9/uf//y5r094tH6Y4V6kZyuZItYex1l4FYafKYnxF377Kzy9+QfFXquHTrTKr17dvfxxaYiHKnkHF758VXol7NcnycVzqm7vOKbtu/qj8/oZXOXq0AGd+HiNBWSGE4rHep9hT0vggs5/RIz72HipQyj3PK9LxBAE6FSFkCIfDSl5eEi6XbJwjArtcboZKyqgez8He08mh5+b4o+EJtmQ7YASeSpf5s0Ll8HvriD74CtWxO7nWNsALzj5kmy6EdkfIABkZ8bS2vkRh4RpxvhUR2KI9yDTzKOJb/MYSIZBp7hgRYzq8T9GvbCXuxod4tXhx8C97URVMneTmJtHdPcbU1IzwLaYjakkB28ym1/CMePHNyzy29XHk8T5xAUHVLxifPAU7tsOmTGjqZCFopzcxh2jvMG67hPqDkHJ+dompCGcE1/Pe3Nwr9tEG4Pr1yQQC83g8PnG2hoETv89RHjlcyvu748lJugIN7VQOZJK7wcEzdadoKS7j0pNFvLX/Fraen+g/PclHvi1cnkgWoA0moExaWiqTk0EmJvxmcD0NC9hsAS5ePEBT0xClpTXCF28AW6s/faf8y+xfHZnt3/HN243srpY4WRfFvoevsm6wjqnkAna8fIWac31EJ6SwJ2OUvbEdPNp9iTPjCuqc4CWI9fe/LiS209j4yxJTCBIKaXR2+jh/fkAwnjVVsWBTrvXx+Sf1fO0vpMu7WaTohngwTFWLhebRzfS1iAAOjYG2bg60XaVy+1YOPr2BVHst0rzO1s3cXIiSkjMMDuo1EGNKP0N+/kNYrVYuXGgXZ5f5CefY4nJ9pvn9etKnjcLQZdNvGt4/gFHahi0WxrTJJtkIHn5PL0q9texmcNUouG3bspFlidra30z/bbOFF7Najdws4BYVHAqppKdbuX49BlXE8flmTMBFRsvbRFvmV801hvr6HnOvrOjnCCNHxWIJUFVVxNmzOzlx4tllCqzGLCbIlKleVMQhIkWaPLGxkhgC97N2rWKsiYm2ewBWcTplCgrSjH7WFYw4uVa6ZLzeIMeOXTZaoKKihbGxgJm/1ZifrKwE2ttL2bgx5Y7h8jddjmsrpVoQ1SiL3AaRJIeR73D+tVUxdrudYlavoavrpiDhv11Kd2f8z1hHh+fu/078S/Y/8H8f+C8BBgBE6FYFFd8qlwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 17,
    country_code: "AT",
    country_name: "Austria",
    currency_default: "EUR",
    calling_code: 43,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUY3Nzg2NzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUY3Nzg2ODE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFRjc3ODY1MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNFRjc3ODY2MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WaOFnwAAAGpJREFUeNpivCHH+pSBgUEKiD8z0AfwAvEzFiiDAYmmi+VMDAMERp7FLL8e/R4Yi4WSAgfEYsb///9/onOKBoHPo6l61GLaZafnBYkDk50uMjAMSHZiYZdjHU1cwzxVQ5s8vHRu+nwGCDAAxfQUXKOTRMkAAAAASUVORK5CYII="
  },
  {
    country_id: 19,
    country_code: "AZ",
    country_name: "Azerbaijan",
    currency_default: "AZN",
    calling_code: 994,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRUY3Nzg2QjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRUY3Nzg2QzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNFRjc3ODY5MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNFRjc3ODZBMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D6YUmwAAAZJJREFUeNrsVb9Lw0AYfXe52qotVYp0clI6SEFUdNBJERRHXdydBAfxLxCdu/iXCCK6lKLFOjj7B0ixSrGJTa32R3rnF+KeS5YgeuQl4fju3vvefXfHcHZvI4ImCKkoiDkian+PWCCbDTZCKcAZkGTSbITXLdZLJf8o5j4C8sOGrNZhTE+CJRJQnU+aYchVE5iYKeSU3oo0CX3g5BRIJIHyHXBxS301wjghmABh8bR/lBzAgYnM1Tn46iKaC1uUeYv0JMFSecimTY4QMWf6xeXQWvmhh3cYM2vgmyuwlvfQfqyga9cQ29/B2NsN4scH6KIOh3h15nOhWR0KTAjv76tDb8PrHo6TZxxsJO7aEshq1uBLvtGKrJZ4RaZ8CZ6fgjm/AVVtg/FRsIk01HOdZnIr0NAmp+Ka0ywu0/sWCpQcEVwXgWKF+p4IGTf9n6w1M94+2tWSyBCDtC3IlwbEbI6sH4K0TG87sRDbCQ+HKkg4JGXV63uHRywWag97J1e1E/LscW11/i+J33A7Aa0oiL8FGAD8Y4eRaTQ3EAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 33,
    country_code: "BS",
    country_name: "Bahamas",
    currency_default: "BSD",
    calling_code: 124,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2Rjk1NzM4NjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2Rjk1NzM4NzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGOTU3Mzg0MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGOTU3Mzg1MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++Dx9hgAAAetJREFUeNq0lv1LU1EYxz9nG0xplxppL5PobZawXsBlIAmOhAgJk0qSJc5NakH5Qj9EFIFY9Jv/hn+I/4S/bJSjaTktF9tiL/fOZ94GCiFTd77wwD2Xe+73nO9znud7FD39aeLvDIJ9sPETNiWcLnRDSVR3np5MwtgruHgVVpJQyMkCnFqJ/0gYOyNvG8TewINn4JFXKVlApQIOh2biOrpuQmQWBh5C8S+spuRLZYdW4jpqxJEZuN4D62vwO9O0/O9PXMfYaxiNg+8SJDYk/6bI/2+2VuIaTvnwxKcZDgc43loilchTrlRRDqWZWNAiMXLXyaePlzkfOiujMnyXM1AjVxqJd+PlhI/5D37a/Sck/zmsnIlyKf3EdUTCHSx8voLXcGHmzYbnHblAt7JlrOrBS+3QtTH6+DTz7/10dp+ETAEzW5RKc+iR2i0xJCX9Ze4C/sEOGYm0a4VDadf4jo8ZuF9M4Y0FWGyzWFnKUypb9onWVk7D4xAWA+m8AV9/QbYkHUxp7Fy9AzA+DbdDQiaE66uyQ2dTevb/pT4nrTEqLjX4FCyRM7lsu2cTfXrvn9wttis9ikL7GfHlhDSnor1LmudMey8C90dsWQNBSH+TBGxpvghcu5Xm+VuDO/cgl4Ufadv4lUIntgUYAIDGhVXvTDlFAAAAAElFTkSuQmCC"
  },
  {
    country_id: 26,
    country_code: "BH",
    country_name: "Bahrain",
    currency_default: "BHD",
    calling_code: 973,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2Rjk1NzM4QTE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2Rjk1NzM4QjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGOTU3Mzg4MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGOTU3Mzg5MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+B1d5vgAAAOJJREFUeNrslbsKwkAQRe/GPCyTTxC/1spaBIuIqKCVlR9gJWovKAhCwCT4SAI+4q6j1tGQRNNk2pmduzOHyzAhxAkRcd1asFsm3M4Q/nIKCSo0owIwBgiONMFIWMQpDGYL2M023O6AHslgspJKWIpbKBs6JJXE4v3ze79Pyct6A6tWx2E0xtlaPRcETadVl2jVnP9wYmp+9wOE+yM4bu9y0kQGQxeMC8YF4zwZsxwYN+hg9IgxlP8yZpqKrCIZYyn9WUzmYxQ+TsbYi0qGO+c1oWP24c0n5CKBsl7NxMcPAQYAXoK9LDclUq4AAAAASUVORK5CYII="
  },
  {
    country_id: 22,
    country_code: "BD",
    country_name: "Bangladesh",
    currency_default: "BDT",
    calling_code: 880,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2Rjk1NzM4RTE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RkMxQjIzMDE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGOTU3MzhDMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGOTU3MzhEMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oE4gsAAAAkNJREFUeNrEVk1r1FAUPS8vmY9M2tJSpG4q6kIYu7LUTXWjG1EQCuJOf4Abf4BuXIi49Q/4A3TRXRfdCK6KCC5Uit1UFxXGQqXTZDL5ep6XpOCAM8lMBnzwXiaZd++59+S+cyPw6O4x/sMwOWfGthKcqjpw8dAgBmeDi+Q1ycEFl5A3fZXtEdME1iBNepQCq50QNw5jnO8liPjoiyOxdcbEjwVG4xM5VKXBzUJQx4BDp68/uLh3EOTOc+9KIWoaeHmhjqeXmxkr/XLg5kh6mWmTjnbed9HuRFBzEl5jcFuLgTz55GG5p/BwzQZiGsbFwMbIf0jvm48u2r8iuKTT+8fuE0sgmDfx4JuPx7s+YMtShTccmBRe+RnizkGIeFZqVocWeGBk7DzbD1A7YbqWqJbx/cMopa0nR782waCCuoE5N8ZNsoP6pMDajvaX3CQ9PqIEdaG2YZAr2kZUoXq8Y1nOYeE+ldX7nm2kWagSEVh6ITtftU2l4iJjbxfN1FkjKRa2Wj+By4re1jaBqgDsJ9g5a+HdkgXzOB7Ke0qOXjyF58s1+LNGJjITA8eZ141VG9/nJVpHcZr5AO387UQKjaMImxfreNGmuvRUxVrQANTk33xnV6/PYOtcDZJ0Osy+xcpNp2aCwbxasbGx1sokNlRT0GoN3k3QsQVurzu4RkG5xXN62iQ+s0lsLpnYW2Rp9fMuVbKsBT8EikM8bYtUs/Qa5UFRUkGqdT1Mvy3+3fi9ZPCAq8kPvQbujq0SFb8+9PgjwAAqQMkwoAhtcwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 21,
    country_code: "BB",
    country_name: "Barbados",
    currency_default: "BBD",
    calling_code: 124,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RkMxQjIzMzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RkMxQjIzNDE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhGQzFCMjMxMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhGQzFCMjMyMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gU/BiQAAAf5JREFUeNq8lj1o1GAcxn/5bLy0l+v1esJpUcshBVcRREEo1MVBBUFcHJS6KAhS6yDYdqkIuhVcHQQXF3Fx8wsEB6WTWpGiRfzolaPtfeSaXhP/uSo4SE1qzj+E/PPy5Hny5H3eN1HYPRYQoRZv3190tlZ1Kh1/xtue4i1Zax1nTzpR+HSiV1oO9S+YICqZGkM4SAgTWzjR2pzwqhhLa+Bo631bhU0FthtgyLlHZ/pdg1dvGtArMdFkrM8EKzpd5HB9mPWoTpc5NJiHLpWR69+p1H1ePuwX9yqP75bodtLJO97TbzI8WebCxDfYovJ+zmPmk9dyee3mPKeuLjCw00xe2NphcmM0y4Mn1db8Dh2wOXywEwoG9x4tMznSjTVgJS+8Ku6OH3XIyZyWnlXJ2hqOpdB4UcPJ6pw5kYHwDSQt7K5IercZFMXh89kV0vIAmbzOU+kLWUl3n0HT9ZMPVyDBRXgH96U4ffEzmS4NX66n7pSZOJ8TJgW/beu41GRob4qx4RyZTo20rTJ+rocj+22Yb4JC8o5btdCkWLS5fKyX13Mz1Go+V6Z2wVsJXKkuAKNNwuEmUlmDr3UKKRU33Di+uLAkY7b0brsc/6qPHrcu5df7MMlKfIrNCQe/pSPs/5twKOoF//R9i3ObkhAmtuPln/hgA1FJGZF+fX4IMABjOotaoebfVQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 37,
    country_code: "BY",
    country_name: "Belarus",
    currency_default: "BYR",
    calling_code: 375,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RkMxQjIzNzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RkMxQjIzODE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhGQzFCMjM1MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhGQzFCMjM2MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bnsnjAAAAapJREFUeNq8lc9KQkEUxr9773i7ev1LKCiVEJggGAW+QLto52P4Ar5K65YteoGibRC0aOGuhPAvpphpps7915mhV5gZOHdzF2e+7/zON8bu42O4fnlJRb4Pp1rF8uEB7+024lB7GB8MSl+3tzAcB2x/H/50CgPqjwnDWJnU1EomwbJZhL+/0HGY6bpg+TyE1d5kAvvgAJEOxZHnIfj5AaJIzpj3enqsFjYLi8lybN/eYJfLWhSzTaeDz+trOeNwvUa8XteimMkPzXjv+BiJRgP+bKYFLtOpVJC+uIBdLCJeqyFYLPRQHZC9/nwOw7bBx2MIyrUoFjSDVglBIMuwLD2NZXhQYpmJBFghj/B7CUveSG0x3u9j/fws12g7GiBnpSNOW52AWrhZxDl23a6kuegUcdc+C2/6CGOu4sZibwutFsLNFsnaJZ5OutbjFbmdU0y1UBxSiRnj/BTu6z0wpT8bxXAZsRisTIZoppG/U2QeHhHdGqgOVit4tL/CatAF+HD4n2fqIzMlX6cgJHu3FCQx6HglmF0qjXLNZiriHil2KTpLFCjqG/8JMADgr5w+bkv5NwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 23,
    country_code: "BE",
    country_name: "Belgium",
    currency_default: "EUR",
    calling_code: 32,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0ZGMzM3RTE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0ZGMzM3RjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhGQzFCMjM5MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhGQzFCMjNBMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dCOj3gAAADpJREFUeNrszTERACAMwMBQS/i3ggVQUJBAJ1iSOXffgE2hPSi1OpmTaJcv+JSwsLCwsLCw8PuOAAMAnCIHFZwXd4kAAAAASUVORK5CYII="
  },
  {
    country_id: 38,
    country_code: "BZ",
    country_name: "Belize",
    currency_default: "BZD",
    calling_code: 501,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0ZGMzM4MjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0ZGMzM4MzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3RkYzMzgwMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3RkYzMzgxMTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0XP2EgAABMBJREFUeNqclmlsVFUYhp9ZO2uX6XSmLXSvlUUKlEiAxMIPSNEYFpuAEUohBjEklVg0BkyI8YeKKIkhyhIkoig1RqIQtBgggIoIItSUsg0dpttA29nuTNvprJ62/PDHzNB6ki+599xzz3vOe77vfY9M0uZ0A/ki/IyjyUREYnFC4ejou1olR6mQE48z3mYU0aNsKFli/E9HYjCBppDLcfb7cbqG0GuVlBRZiMWjdPS58A+Eyc3WkW82ir7YeBZhlFGzX0oFigBkOAT3+9HOncO8pcWsnFOESukToSYSyeDEtQ5+/rGF2JU2KDKBNg2isVTAfhkL308OLCjENwC9wzS+tZotdWYU4bv4w2l4BwbRaNJJV8UYRGKqpYatey/yyc4TkK2CTEMqcL+C4sXbxENawsMcGgY3fLa7ntfWhjhx+SgOXwQpEOCGdJ3Wvht4g0oysfBL29dsq11CbmkJJ4+1gEYsWqVMBhySp6S4a4D1G6rYuDLG3uOHmV1YL/6Qs/tWIx3dNnr+ukTTT69wwXeJ+eVr+fiHj9iwLIsdb66ADs/Y4pNNn/SLO0DejGJ2vVrNodNHWLNiJwU2O9Lh71ho2oC5R4dVZUajkHGqYTuhP+xsEmMONh9g3Qs5TFlQCf3+/wMcpG7ZTJzh38jSVuLe/yWdzctofLmEGRVV2Nqvc+r23xQs38pzUhnHNz7LreNfoddZ8UZaWF5TKvIjPEFgUafodEwrN9Dp6yLDVIhVF0aXbeRq81Hyez1srv2UHYuqWe3T45QkrroHCTp8zCqfg8PdyfzpQhqM2qQJlvj0I2KwUcMkk0YkUpSpBelY6jYTtC1huO8B2jY7GUVtzKoqxNHWTe23e8gvnE/B5Dz6B/p42HsDmSaAwpxFNCiNVce4gBE7HhECkRxGlRaVTDHaay0uwzC5jEBcgV3kZSzagyl+EkPxG2Tn542OkUJCZAL9lKSnjYrJxKhWCqBAkF53GK1axX2XfaysxTxKUUqKaTMZMsymzbmGSOU7IgfUyKKPyBocYrq1hF5/nLhbJJdKMQGq5WKrAwPcc4SZ/aSZm10ebN47nLv2BWqjk32/SmQ+zEOWWcGHbR7qp27BJFvAqoVbuGK7KEqrhDMOoXY+nxCTnMTalFxAZNzudrH9pVpuOc7T4bOTqddgu+cnquhCX3EBq/UmaQGJVls7ZqMJ31BYsOJlSlk1De+dx+UXqqdTJxSQpNKCyYDzmp23D55jT+Mqmk5/T07ZM6x9+nW8D11kZLrRG/R48tSEdQbUFg9/tnzDorlVNB0LcPv3VpiSN1YhCV0umVaPWNKQoKt3kKYDDSxf7KL54ln6I8OUpi1GKc5eJo/Q2n2HwtxhXB4HK6qf5+ylSaxctwssYkqdIDKxVY3DJLyD4PTywa4GNr2oJx5yc6//LvY+G1qlgSdyShmOD1GZv5Sthy6z+11hElkawZg+pUkIW9yX2hZHwEd23v4A3bxK6tbXUJzvo8KcLopOTjiq5/Q/fXx+5AxcbofJGWDQPN4WVz1Vnxp4lHXZaKJ39vlFeCm35grjNwjguHj30OOSyM3SU2BJfyR8j70J+GUenWXCV5+QULZgaKxwNWqFcD85E2ijV59/BRgAi/3kZlc/4VIAAAAASUVORK5CYII="
  },
  {
    country_id: 28,
    country_code: "BJ",
    country_name: "Benin",
    currency_default: "XOF",
    calling_code: 229,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0ZGMzM4NjE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0ZGMzM4NzE3NzExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3RkYzMzg0MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3RkYzMzg1MTc3MTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PY+RygAAALJJREFUeNrslkEKwjAQRf90IqgYFNx5nN7AA/Q8Hs5bCHUluoiLasmkU+hCEKQ1GDf55DMJBF5mQsIQDvsawE7t8EnPGeyywak8YqPR6/pLWfXZDBO8xBSyBf6kDM7gn8mM3hnUpMMKsBLQQxKB+9ooSy4suDOk5Zgqy3iwZhoc4VZtg3UtrnOOSThMztjXhn0T4CkKzJPvuFiLnkG9oPycMjiD334uN3QfLlX30bM6AQYA2ssuTyUvY0AAAAAASUVORK5CYII="
  },
  {
    country_id: 29,
    country_code: "BM",
    country_name: "Bermuda",
    currency_default: "BMD",
    calling_code: 144,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDJFQzM0OUExNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDJFQzM0OTkxNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNEI3RTM0NTcwNkE3OUY4MDY0M0U1Rjc0NzJDRTNGRkEiIHN0UmVmOmRvY3VtZW50SUQ9IjRCN0UzNDU3MDZBNzlGODA2NDNFNUY3NDcyQ0UzRkZBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iROkEwAAAwZJREFUeNpifJaZJBnovvS5ZOPyS7d37GJgEF9RoRM+L393bIfbpK8M/z6JCf7OkXpZGyj3T1nzZEUD67NnjAyMDEQAJtnpXwrCJnnfXH82jre/L17exuD9D0aGvwwfmDnFlHmLVR+djmKszLZq4XHUXfv32/MXfAzEApaQZK83kiJb+D75375QEB2YVhj0YMnaCxMZtJX5j02WU773hyEkbtdb3quTtur+fCnIwvbr9w8ijWb8ryvK8Ov/88//n3z/x/D+vSgP249vv17/YxRg+M/FwfRdWunns+fCv74qqIoyMDOdu/7697//LDDN/xn+/2cAhQ6ERAsolvMSpi+ev/4pwGQQ5cDx7B7328cfmbhfbN8n5OIgbaZ5d8cRRlGdaxLqd54/FWb/x8B0hOXfH6ijgCYyMf3nF2SVEP795uP/9++Z/vz+jxzWRteMm/y7WVZvUciP5LcwnulQdDWxSp3j/4PA1NVJ0yS27dQujv8po1goFubEEPz97z9eBqj2Hwz/hTPSzN69EZEVNX14Xaqr7ytICmE4S121S5LkF/atcyqWn5/6TPrLR97e4p/uIgx7H7+PVWnjcRErC9NPs3mySPb55q1XfnFx/Pr6FRoYDAwcsgoXX93bc/uL4VsGNX42RqhnoID5gOz3L51NO0+/PvWcUfb9Zds/111YH3LcvcX4/z/L25siN9Y82byFlZXXWoLR8urOr09e/fr3DxKm/xgYxGRVbn260PqbSZ5ZyPL0/tdnzjEjmc54HExxMzBIMDCwgdmPGBg+MjDyMPxXAKv6zcDwjIHhMwMDOzD4QK6F6PzPxcBw28zgWoArDzfXizdPtLefMjpz+QuSq1lYwZxfYBPhPuVkAKZshrtITuAAi/9H0gm0huf6lSvSzx/Li4vdemp54y08qUCNxkyOGAzs3I8MDNLf/1fc+3Xlx1P1l//5GdjeMPxmRlZxhrhcixUA0zUwDLmYmL/9+/sT5A/UdM1AAQDGJzAmPv4DxigjE2YZwkAzMGr0qNH4AUCAAQBpbzCLqENWxgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 34,
    country_code: "BT",
    country_name: "Bhutan",
    currency_default: "BTN",
    calling_code: 975,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkVDMzQ5RDE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkVDMzQ5RTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyRUMzNDlCMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyRUMzNDlDMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QtQgBwAABGxJREFUeNq0lm2IlFUUx3/3eZnZmZ2ZnXV3dZ1cV1NTNGWTfEkj+lD5QoJZRBlI0PahD9kHicwPBX7ID0EEkQgZC4UaimVipSAqkpZFZUQIEpqaq+bLuPPyzDPPPM+9nRmF3HxJN7ozl3nmzpzzv+d//ufcq/Lbp54GcjKL/F/DyLTlPUKhL5q0tyXqd2QpffXn9NC8KnmFKBOiVfyadUvWqsgitMawmg3Btxpva0j0h0k7Qw9DNUKxjUcUBQKdxI3OYixx6bQ0gENtY3UmsAc8ypugujcC2Zt9l+I/AEfCXg1ftXE5ORNaekhXD9Ps/wiVU4TFk5h7nqH6y0XCD88Qnk9jD5fNxsRUM1Rgg9JV/NT9BJm5JEfMI5bOEYs/j+cV8YqHaQ8PCMULKH61E109Q3x4GePEG6BXEjEUkiWfEU0EugmVe5xE6zhc28VNSl7joqT+FNbdqyit24a9ZxOxYQqjBsc4pIjrTiy/H6dV8tc+hlqpjHduP8l8QaIei9V/hONr95E4cwwnnYRL57EctyHuv6V3J+pVElHwJ5Z3TD4vCW2iZL+Am27Gbe2m8PlWLi+YRXjiFJlpPWSXr8KkpFjCUEDNECJWok5dQZeOEYx4FpUcjamcwD7+AeFADR7toyU7EffNDQQLe4m8Ctn7ZhDLZKiMn4T+Zh+MnSBUmTsDVgIaRprauDWYCS+jpC6V+IiOLCb4+Sjqwlmc0Z3oHduwusfD7wcprHwJd/RY+O5r1MiuQaC3Dyy0mpZZmCkrMK4Ph3diZafhTF6CO1l8FopIq6C6YzNm1xdSZpJBVcMLApyuMdDc3KD7joClyYlNFd25GF23//gN9Jq3Jb3tNM1fiJ46HefFV6jt3IFavxklDcOM60b5Hk5CDHR0HegtgEVIutTQnhXmG7KoZqdiylL/TQK0dj/eutXU3vsI/cBBatPnYIZ3Yr22nPSDD+NLvVZf7SUmYjSx2A0RnBt3dMlfbBSWKLimE5TufQuGzUQf/xV39lzaurqkPF5n4KfvccIaZtl89IyHME8tI7PgCTJif27Jc0Tr38UaM/52gBWWqMaUT+Bncqg5feiO2Wg5t6xVvQRPLsXb0ie5/AR7Sg92W4d4kJq2Jau7t6MP7CbvbiQzbxGOL4J0YzdN4WBgyYexC4Q9T5PsWsHlQx6qKo1h+zr8jZuwOzpILu3FLuQJ9nyJlUpd4agOMGEyqlSgvOIFKqtbsWpV7LqwtL4F8NXz0mkPKA/kiH57BHfDp6gt7xD5Jfx4gihlk8mNomPiJE4/tojo4F7soIpJXN17JAJKpoQA6VCVUuP5nyU0GFhEp7JCZVrhH3Dxd8n/j64kCKU2R+awrTY56qQ8qj5GWl9FjMK+97HPyxFYr9NrIzLy7LoomVe+3xxYFQ5NK+i8SVc+i/D3aWy7hqo3dcu9ztDUW18sjlUReSeSN6XxNkbRCX7QRW9zmI5OmmL9akLMbWz8ut1a9RuFrOUvQCZ7y2j+ZdRvOsW/BBgAmn3MQYJZCMcAAAAASUVORK5CYII="
  },
  {
    country_id: 31,
    country_code: "BO",
    country_name: "Bolivia",
    currency_default: "BOB",
    calling_code: 591,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0MkVDMzRBMTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0MkVDMzRBMjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQyRUMzNDlGMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQyRUMzNEEwMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QnwfiwAAADFJREFUeNpiPCeoxkAbwMRAMzBq9LAwmvHnNbHRABk1GjdgYV+iPhogo0YPiNEAAQYAm/kD5VlL/agAAAAASUVORK5CYII="
  },
  {
    country_id: 243,
    country_code: "BK",
    country_name: "BONAIRE",
    currency_default: null,
    calling_code: null,
    flag: null
  },
  {
    country_id: 252,
    country_code: "BQ",
    country_name: "Bonaire, Saint Eustatius And Saba",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 20,
    country_code: "BA",
    country_name: "Bosnia and Herzegovina",
    currency_default: "BAM",
    calling_code: 387,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MDZBM0U3RTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MDZBM0U3RjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkwNkEzRTdDMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkwNkEzRTdEMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+PElEFQAAA31JREFUeNqsll1MW2UYx3+cnpZ2fMjYhyJj42PlS4tRRyLbpIVSyaJXM9NsQ72AJe4GF+PXmqi78MpEE73AmEwCiXFT44XxwmWBjYgj2WBRKKWTfTAwhE562roxOGy0x/ccLcY5J7R9knPy5rxv+/T/PL//cyoXFHRc7+7exZo1Flyu40jSfdy6peA/8SnV7iuovgIwxUk2rFtmOdbpZt+rrWzYEBHfrxnP5bVrbTl79nyH2WziyJHt7NhxP591zdPQspHvu9/hsaZfUf2pJb9bSMHgTVR1iVBIobAwW6gu4aUWK7+FVB5/+i38/VuwPjwDMQktjYlls1kiP99GOByno+Nn/H6FvtOTNDXlcEPdSuNzXnq+fB/HzsuogfQpl/VbPK6xfn0OgUCYwcFx7PYiBocOGAe2Vl6nxtPOL30fUl43mbayS4nF0lJMAGYW1zoWFzXOnQsa6kMzfrG7kQrXG4z2Fy+XPS2KE5GRISi0ymRlWUSpv0KWJdoOPEpz8yY+/kTF+ayNvq/fxuGaRh0tQBPKM1JVnIjMTBPB4By3b8eJRMJUV+fj8ZTR9qJE+PcFap7y8lNvKdbqGTJSUC7f+UDvt8ViEj9AFoljdHaOcvFihN7eSZzOXAGcneb9Xvq/eY+KuquoY8n1XP6vDU37E7jh4VnOnAlQUbFZ9L3N2CuvilLZ8AqB0x9RmWTye9YqAZzNto75+TgjI7MGcNNTOnAPUNXwGoGBzVgdq/e5/H8HdOBsNpnsbAv19ccN4A4dqsXtLhTALfDk7ixOfP4u2zxTq7LaiuhIAKeqMRRFoagol8bGUg62WlCiC9Q+c5gx3WoPrdxq8koOJYDTrRYOx+jq8jMxEaWn56qwXS5zi3ah/HV+/PYDqp64sqIJJ68GiL8nnMLZsxcoLn6Q8+dfNvZK7MJ6DX9NuO1Tyz5PqdR3Aqcr1yecppkYGrqGzxdCuXZhecINnyoxJty9fC4nY/4EcHrv6+uPGZ5vb99Gk2eTAZx7by6nvjhMTeM0zEvpUZwIveeh0IKxjkYjlJXl4XIW09oioUTmeGSXF98PJZAXZ+kuyuVkE+v91l+pFotVrGMcPepjfDzCyZMT4s9ElgCuHOfuN5ka8VJTLpRj+lfiG6m8ZRITzuebZWBgDIejVIzXfWRa4tTW3aR250FeeP4SeXnRf3zuDwEGABm+YrFv6121AAAAAElFTkSuQmCC"
  },
  {
    country_id: 36,
    country_code: "BW",
    country_name: "Botswana",
    currency_default: "BWP",
    calling_code: 267,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MDZBM0U4MjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MDZBM0U4MzE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkwNkEzRTgwMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkwNkEzRTgxMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HqOdhgAAAHJJREFUeNpiKV11+ykDA4MUEH9moA/gBeJnLFAGAxJNF8uZGAYIjFpMN8Dy8vOfAbGY8fb3/5/onKJB4DPLvMqMgfExEA+IjwfMYpbsxIiBCeq7A5W4mpffHJh8LMrDPFpkjlpMm8QFbfLw0rnp8xkgwACv5h08wmledAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 35,
    country_code: "BV",
    country_name: "Bouvet Island",
    currency_default: "NUL",
    calling_code: 47,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ4RjhDMEUxNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTA2QTNFODYxNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRjAzOTJFRkE3RkEyQzU4RDMzMjNBNTYxNTJCMDI0MDQiIHN0UmVmOmRvY3VtZW50SUQ9IkYwMzkyRUZBN0ZBMkM1OEQzMzIzQTU2MTUyQjAyNDA0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+71lBoAAAAj1JREFUeNrUlL1rFEEYxp/52FwumlyS8zjJEQl+QQpFCAgiAQlYRLA5sImFYJXCFDba+ScYtTSgIH50FjZiYWllyqvE4rwPuLvEwgT2Zj9mXmfubr1OdosIvizDzrs7v5l55nmHtc9dmlB9CE5wYZrt8q31zqu3px9+7n/b+/Bm4+brx917D/jSeaQPv4+Fk9ILlAwUeILWPqLI83hMDBrCc0kBLZTKgFaKglBCMLtkw8UwSZB2GtDoH7IvzPVIiAxoIYlLjiOLI0MzSNNqmsg3VodBaITY69oPYMy2zKYPDozttRtZwCF4LEsbVa4jxxpGr4frq1ZdFhtY5CFw+WL52lUsnspAjiI9U5CNnZfWD4bGGykCzcY+WdsI3ql9x1q1tVYlyqYGtGF886Mhhj/LtjroGFEIT4IRwtgZ0MuBTOKYNKs28zMT0vzyrcBjQZy3yYHmGLiE0ohieOEIytMde2ggNNv1tcxxbZKsxBxQr7XXn+0GneDp5oXbN5Z/2HzsZk/pVauCJcqVR/cHm02W/XMfq1cKd7YwWUPon11ZLn79VNx+joXKaFAqQWIzfVx2n+x4cR9O14EYoFK9Tne3jPTAiWaBF196796LwdyEdGiLmT8h+eISV8oW+nAQa7dQqgxK27g2Bgqz7pQrZ4C0YKgA5eK/L/TUO/9LSKa1exLDMkTQmjic2Y2rdRjjBLFmTx86Iq1llJsCE+P7Wk4jl9caeWEOc0QWKDxrbMofy6IFx+TU/3ipAr8FGAAsDO04lr0obAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 32,
    country_code: "BR",
    country_name: "Brazil",
    currency_default: "BRL",
    calling_code: 55,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCRDhGOEMxMTE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCRDhGOEMxMjE3NzIxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEOEY4QzBGMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEOEY4QzEwMTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TFbakQAABKdJREFUeNq8ll1sU2UYx3+n7en6uZVa1oGDwtYxnCw0EhiCxjgjH14oiV6Ampj4GRONRpQ4ZZEYvTAhwSxGjRFilO2GDy8gZuEGTAS2xUHmBvuAuVG70U0o++ranq6tz2mHc8YB48KTnL7pec/7/p////k/z3kV6h4ZAJz8v9e4SX4Wz3uZkoGEFWQgL343wE6Djj4vwJTEOpHPA64/qXIPw6Qj90yfmwdjw529N72pDjJlYufybloD52gKnOfDkk55ZpQ55+x3b8dBcjx2yxzrTJJmiFtYt2CIH9adY0VJCq5PY3ggeEXhueY1/HK9SKRPgFnujHJLxnMD64D6YmFpMCX4pOQSNRuvQKeRfYeqaOv2kpa4K/3DvPd0CwQ09p1ZQs3lMhJJG1gnwJCeK4A5gLPmsWSZbiocoK60i/LKGCe/9/HMru1Eki5MJNG3TGLGbR6j/tMjbHmpm76OPN7qXcmxcDGoU6JA7L/Ax41sXVaje3OGpeQr6qTAEqOu7AKf+3vw+KY4edBF9c7XUdIKRWoILX0VG2N4raPEkk72n6ii2tdD4OEIO8xDlNjHOT1ewGS0AEzJHHv+DkCbYayDxkWitIEdi4LsW96F1y4Ri2K4TRxsq+NseDXL3EFsihOTptLRc4X2kyEutPZzjWKqK4Y40XAAY1L2kvgjk0Z29pfz3eDSHKg1epP9DGNFSmKVbYKvy9rZXdKPQ0mTEJWMLujtdPPlkScYutjDxeYQkXCUPNWE11/A5h2VrKpeQrhjkKZujSfX9LO4YpK4mM9pzrCtSMrOHuGikBrWLGRydaSZssOUSrGq0bT6LPYFZB0bE2UMEpySD6FwHocOt4mBY7icZnpbhvkx+SsWye8Kv5fHX72f3Q1bqf8mTGjwOGt0frI2Jua2agi3CJtdzfhbH6JPwHXpc8DGKa6mjGzqWEvtkl62FEawSlrisghpTIWuKL4FThxWG+lUFNVqodCejyqsB4IR9u5qJFDp5/nabWzwecgMhciI2lapQomNU0EXe4KlhISgjqVfhpummjKmODPiYetvVbzSeR/jkmuL9AvxD+WrR6RsBgjd8OB2W9CSKWFkkFvBas9j+T0uLrRbOFa7n4X2ThTJr742LuBvdpXzaNt6fr5RSFI32HSHm+lcmenkSwP49o9Syls30jDozXrCKMO7LzQyGosRDOfjcJjErfHsnZ9vImNeKkG4eefln6BA9BUdj4YXslL2+KJ/hbDWcnv/45pdTjqKHpGAT4gZjg4V0x6zUpUeIfDYCGvdA9QfLyU46mE8qnJtTCUkKtnUNF99cICnXuxhsE/lte4Kai9XMJoSne0T0yxn1bJ2684lchNziIMn2VvWwxsPSu7OW/i4YT0dl4qkYyqU+8LUbG/CsSHG/pZFvN21komEHWzC0JCaZ+f6dwCaCJLIo9ozSP36cxRJUyI83asXwY2r8OzZAI3D94qsydyn8q579Rx9WzoHe3yX+cjfl5367Hcf7/eXSe+UMrHpsqZvBzoP4FlfKjV7CNjoDaHK/1Pig+zXSPrAHQDOOoHc+bFH39gkdaiOcfq6N2cYneXNuXmcQP4SYAD5sNLFPECeSAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 104,
    country_code: "IO",
    country_name: "British lndian Ocean Territory",
    currency_default: "USD",
    calling_code: 246,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ4RjhDMTYxNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkQ4RjhDMTUxNzcyMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMUM0QkU0QUREQkJFMEY0QTBFMUM2MUYzOUU3M0FDOTgiIHN0UmVmOmRvY3VtZW50SUQ9IjFDNEJFNEFEREJCRTBGNEEwRTFDNjFGMzlFNzNBQzk4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+507x4gAABXBJREFUeNrs1OlPk3cAB/Dfw9MLWqAUeggF2nKWq1yFCIgDryGiQ5miTpxTkTDZpmObO5JplmyRxMjUOXRbxBmHyhweGxKCnAWs3AUKT6GU0pY+pS32Pmhpx9+x7M331ff75vPiC6kbfmFsSR4C9Mqn8+PNQoD1bazkHm+7MfBWeW4fDHQmdjjuxzBjCT9I7Rve5x+ZzqF0DS/WPRyWopay7JT33g7jRdG6RIprbQKx2CcnKehUURIrNGRQJINA7uU9RMMfFan+CZG3UGxVO3qd7T77T1377soiCflLIP0un+YJpFQtEH+dtoLRUeDjBj74U/v5adygL64+s2L1ZBYE2winS+P8nfFtwpVeAQIMFgo7GHOiKF6FITXorR8Kp85sST50dbexvcd+zcilktDcSOqyHfA331nwILP9JwLB1faPMXgsDoYUGqvD5XlwjzUpI4mWFbGRmCCPm+yAOr4vxWJcWpPd4/FA3rJi4HQAOzCZ1h1OVxDscbnXrL5kX7sRD7zmkFAfg5EMO0CYn3WdUBF9BBcbM/pKLBlBQYSVlwnTInUB0XMTY9D803zgCgbu1eRUJpdNG5lUQTOXr8llWiuBsCWfR52bAUF4m81j/umu3/5i/3cLQXu/VmcbonMgjZ7LIN4hc59M6SryOGf38fA43M2uthb9nWAfEE9JzWVs3RGfozOYbzyfah2WHSuIw3BHqcxtO65k+VEZNpcv5oKJvjl8vYzUKOAktjIKas/nUtEZXBtyTEJAHdTu6rhLpwsHZ1UFtY9HpGhmpvfwtiqiCtErIo42ClZRwbGdvM/K0mv2Jgtn1VBjU89xph0sKc89Ruq1VIDCTdUR5cL64bQKfoMWMPwqT/JvpUDAZviteerU2NoGHQjAVR/i82Oo99tUHa9XUkkjbgqnZOdODt3TMoC0ds4AjTUkjgpJu/r6H/VainYYqWGxkE1tsmnnVSzRCHvvdieH5dSbBhDUEULeSvcrdqOepASNF7uJiFVqbQqNOTGGLrI47JJ7MbyiQN9oiVieHkfDwD5KvRUPeyB86U0nngTUK/kZoclRlA6hHNHaAJsFpIrtXAqPS++bXJ5bNlndnjU3NjGclBFD6RhcWlYbANk/l6L/BDbw83ye/K0ZAL6dgTzdrJkVTY1gBksX1BCqM9CDAydl6N2O2WFEW5YfVVWcgIEJUrXudqtoUKwtyWHXHsiEgI9MvdrwYmoI0ezJiqzZl4bFYHWil2Nl21e5ZIbUwD3/Oe2DyytG2+3WcaEY3ZPNgQprm/rFmoNbY786nBEfHvKoF/n0Vu+K0Xlgc9TF49mxzBDBtOJcQ69EadybE3WhPDUxPKRjbKnm595ZuftgFnxpl4BCT7Eoxs+1BD+bTSrJDfimPJvLDn7xagE6U9+aEEFt6pt/NSYDZheRQfmoNC2GGfD7S6R7ZBE4XBh/fPU7vCQW9X4n0jO8CKxOmEyqOZDCDQt4/lrtxZP5sJwWF4MPoNjN5g6R8km3BKwYGdE0MDav/EuAaFbfeL3rK0aL02XvnpC1CBCdweT1enRGw0bKVPq214jRavV6vasmy0ZzfE71sGtarjMtmrwt31bPjQsH5fbmrmnNm42VV2s0Gs1mCFdYt2awAAiKT+ckRdE6+5FVpQEQfYHLyU1lprEZ/VMqucoA1l3A443lhiZHBveLllCFGcAwWLOzkjl5tp5eA31pjQGcNgC5IlibmDT/RaUOEsvQOBbl5ejS9ZaR4TndkYL4r49mB5EIfdPL9X8ODc3qdmUxfziZFxLg37Nxby1Do5KVoiz2xffzaIHEzgl53QOhUu8o3xpTW5ZBwOMnZOiV5qE+0fL+vKj/Qf4TIP8KMABGR9CQ7zSDAQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 30,
    country_code: "BN",
    country_name: "Brunei Darussalam",
    currency_default: "BND",
    calling_code: 673,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MzhCMzg3NDE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MzhCMzg3NTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJEOEY4QzE3MTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJEOEY4QzE4MTc3MjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oskd/wAABCtJREFUeNrEVVtoHFUY/mZ2Zncnm002Sc1mczExdFPNbpMm3Sy2+FC89EVKSkEEFUEUH/RF1CpesIIpYvVJHwQfVAQvoGApxUihKRpQm6ZJtrm1m839YpPdNMns2r3M5fjP7BqamLVGLf7wz5xz5sz5vvP/3/kPl5xyy/gfTGCZRSd4anECOL6Q3lajc+uBhbJXwNID0NUImDIB6BrA6ItBhhfBcU7iIW74iamArTjLL71qct62cYzMXEz/jYBHwDLD0E0foP44gUyCabkYEBmOLwBvlyDPCpA8DFIRh/QyjVv+IfBWxvQ1IjIIPd1L7xHoBjHlCuzVMYydKsH0SRH7O5YobA4iWpAL038AvCUZdZZCO46el19E/4nLONK3F7ftHERycSWbIiM0PEeRMVJkz6uXbWeHE2qgogYjZ++C82A1SltOmuOS80eoKz9kU5QJk2bGAVW+gYwlR8aWXefQoQeZ3+9HMBiE3+fHTm9DXtCJnl4sd34Hy5lfcH16ChZRhFTlReb+gyhvfwR1LYXrc/XMEBEYymkmRGkaM8XLtIzJw/ANoa6vr0NbW4A8iObWVrgTKexo9sNzey0WOs+i9/mjqLG7EC+QkEomoceimE7EsPfddxB48nGsRmXMdJ1H08MPbMpRigiM5vQymB36Kz9M/oWngT309BPss/ZHWdcnn7OrpIvuYx3swuvHmWlzMTby2gmz+WGtl33qbWU3sz/teLOVUVC+QgmO4hqC1D9DvlxVgbfXgIbKaswffwEVchr+vhCYfzfCL72K++Rfb6oVy3tvOd/cUWaBQWFVZtC0jROS5I2SC3fwDrTsc6IRVpyei2K/JmI2toTnvv4Szu9Po9y5ho8/+hZ3NrXip+pi8Kk0SlwuWCxCvuNUld3xioaZGQ0XQwp6QyqGLqsIDSuYntbwBirRjRQiiGOm3YvHzi3AJzvMI3FekvHNPg/uGQyjJCrgMF+Ep/Rr5pKeinIEAgFTuLubmrBnTzNqa+uzwMlJN+Pp3FtttOVCcscfRYAhs6BhdFHBQocdw2IKnYk4nu2rwpH6AoTnVaqoDPWlAroX0jgwO4E2qmp32xz4IBnNG+Jdu7zw+XwEPOXeMscC4QsFRKTUqJMqEuMcLj1jx3wPQ10zBxsRNdIz2q9BWhHQpSTxPq7+/Usi3wdVJ08Qp7gGaxnlOkY1oFGDW+PpAmOIzlKNjnKorOEhNGs4dq8dB4pLcernJIaGVVyJqIjL+XWbd8ebbyOJwOFiMAR7fY7aEYGqEwfRr8BWyVDkNmaK2dKQ0LE0p2GACFzoV0gvCkJDKkbHaCF9G8Drp53WFKn8WiRqO5khTUDmoZH0lVR2jqkX0dAKedENNSqmIzKpYSSs4uIlZRvA/8LozoDVTg8nucSv5zh+q4F12loqSQ/Dc7H+XYABAOng97l61jkHAAAAAElFTkSuQmCC"
  },
  {
    country_id: 25,
    country_code: "BG",
    country_name: "Bulgaria",
    currency_default: "BGN",
    calling_code: 359,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MzhCMzg3ODE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MzhCMzg3OTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOEIzODc2MTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYzOEIzODc3MTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+McDtIQAAAD1JREFUeNpi/P///yeGAQCMQIv/D4TFTAwDBEYtpl/iYpiWN5q4Ri0etZg62emamtBodhq1eNRiqgCAAAMAqc4MILa4lBgAAAAASUVORK5CYII="
  },
  {
    country_id: 24,
    country_code: "BF",
    country_name: "Burkina Faso",
    currency_default: "XOF",
    calling_code: 226,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MzhCMzg3QzE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MzhCMzg3RDE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOEIzODdBMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYzOEIzODdCMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uO74RgAAAV5JREFUeNrslr9Lw0AUx793SY6m2h/iVEUQRJfo4KqCc/GfcHJ08B9x6ayTq5uT+lc4qEtBRFsKkmBKY5Im50tSJG6XgnHJg+Nekrv73PflveOYbe28AVih5qIca1B712cOcn0pcI5/sgqsPmvKgJDNvfX5psWznuX8PwOzrJNjjuhJQN/3YBx6iB5F+i4/RsX09lesrjIpvi0fHhdgXQ8wJep3NZgbPvBiAAF91xTBg0XFkRGp9TjEboDm+Qiilm04vBni46oFv2+ALUhaUaqBrZOOeqgpmWzHxPHgFZfWQxqGs+dt9MQ6lk4pAgZBpaJie1lHof/c1HCgTXDfX0UQc+wxD701DruuKUNTMCYF0lIymJqLa6eF29EmQgIfdYZocxfOmAQwWUDDRfezyDnNksUDymQtSkFsSkAjLCI2MVcvWn+SVCegn+ecX53VFfh3OWVXnkbJVx/3W4ABAMUjZvAvTtkOAAAAAElFTkSuQmCC"
  },
  {
    country_id: 27,
    country_code: "BI",
    country_name: "Burundi",
    currency_default: "BIF",
    calling_code: 257,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNkJDNTBFRDE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNkJDNTBFRTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYzOEIzODdFMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE2QkM1MEVDMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+f3jizgAABTpJREFUeNqsVmlsVFUU/t7SmTcztNPOlFraTltIIZqWkoGACHUpFQiQGsQUECWYaGI0hAQRarVCadnREtTE5QcaI5KIQEGWFBAsGLQFbKEsFpRANwp02uns25vreY8wTKdFI3onNy9z77nnO+fc851zOcaYQ3Y4cXPNFnRs3gQZbugSRoKLE8DCYfzXwXE8mByGt+8KeEhIW7IU6RUrwBEwuyfkbvgNraXvo/engxAQD63ZAsZk4L7IvwPlRQRsHQiiD0mTpsKysRLxBRPVPYGVJFQUpjyh/tGkD8PQV16ClDUS7vqzcN9pgSjrwEs6Ao/xnoxhYUYeqW7FAAoIe7zwOP8g49MwvPpDZH9aDW1mRkRGqJtcX7G3qw4Z+mEYFT9CXTRY85Hy6iIwuwfOhlMIem9ClJLBCSKY34+AoxUhnw1hv4u+3TTtEHgDeI2WDAJ8PVcQDvmQuug1jKrZgfinJ0cAj9w6iQX1S8BlHyxg191tgOxDSdYcbBhdhhEGS0TQ9esZtC0vR8/PteDoJ0APU/FsJE4vgiEtHZ6um7AfPQ7b7t2UH04FF4kTCpG5qaofYIe3C6XN67H9+k4KiQhkHpjEFPC0/Y8zfGtmSTWj2eaWz1ns6Ny4hTWOmcB6avZH1sJR+/baH1mTdSJrX7VuwNmPrn7Jhu6zkn4TS/1hPBt+8EnGKcD3rBLJkjv+bjg9nbDSva/NW4EZqc8Mmjgtp4+jYfGbGLthE3ILiweVOXb7FMqaN6Lh9gkYpFQ8IqUgxELqHh8tqCyaNEnITspDY28zZp5YgNfPvoNWMiR2eO09cJ37HV7bnQF7SliXNK1CUd1cNNjOIsuYi2TJHAFVEzDa4+ghcAK8dO9d9kvINltRP6UGKVpzZJ9IBht8SCJuxkWdc8luTDw2BxdvnUAKARpEPWSFkjFDfBAHFWENHwcdJZokaJEYF9/fMJopBBo79IIeOkGCqE9Xv4OB/i1whK70E8l7Da+BwuTztd8BVNEem1ECLcH7abXlyB6EAn7kz3qRFHKqvFJzGB5ceB4ILFCpC4SD8Hk60Kc1wS67yHMdmkoWgnMFkCE/Dy0BEJPRWPIygn0+jAy/AA0ZYw84IHs7EaR7lchgmYX/GVjhKk+gCrdZyI35OYtQmbsMCcIQ1eNxB3aptdfI3b3ZBFIxbv8uyMEAJE6rKjxQsA1Vl7biq2vfkAc6ZBuU0sv6RWAAnXoDdvS6b2CUyUqAb2GepfihG0RN52GUX9iMi91nYDRkwKwx9aeT4qESjmt9lymTvVg5ZiWapx3uB3r7s21oLiiE89jJQUHcv5zGhaeeRVf1J5G12WnTcH5qLdZaq0h/iPRfImBZvUZOqSKtdI9y0IVZlplYl1eKfOOjkcOecxfQVrYa3Ye+VwOlQSKSF8yDcfoUiEOJm7ZeOI7WofvrHQgwm3rGXPQcLOtXwTB+7P2C47yGd6mY7G7bRzVfogvdbmQ5SWOoSr2NuVEeMn8QbeWr0fXBx5Q+DurROdSjKVHcbgR87Uom0NSQMUGaIWi06RCGJFBeBNXeK8CA1MVvwLKhErxBF9G7l8KvVDNuaVMlW5O3nPh3n5M9O/eQl1Vw/tkISUyDaDRSC4zhI1FKbYs8tUSeH9AWZacT3kA7hmTmIWPNe0heOD+qQsr9HwLey1fRuqwMtkO71C6kNWWRN+GHewhQj+aIbn7bDfVVYyoqRmb1eujzc+9uK0+fsMuNW1u/QHvFWgRDNkjxOdRbxf/n6UPRYEEZXsdVopoR6eWlSF2+GH8JMABj3HBuy+V6lgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 114,
    country_code: "KH",
    country_name: "Cambodia",
    currency_default: "KHR",
    calling_code: 855,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNkJDNTBGMTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNkJDNTBGMjE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE2QkM1MEVGMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE2QkM1MEYwMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4kgdbAAAAkRJREFUeNrslUtPE2EUhp+5tbTl0gsyA2podCPRjSuNMV42mBAIJSxYse2OFWEhv4S1MTGGJcGNP0D37pDGGu6lNE0HsC3TGc8MNSwobYwRNj2Tk2/mzJnznvf9zpdR4L3HDZjKDVkX+NpM+UxfRda+KxPkcjnDn0ANQ1ZPnk8J3R6Vlwr17R/SfaxlXhuz9fvYnbuL9QQg7nFFykNd/NabJxAyOFzJEWrWUKLhIM87qXSsqZfaAYrXxJPPX6KEQhTX1pDSVAPgDFosRmnlnfBDuELqxWsUTaO4vi7N/MMee02PT00xODtLQ+7L4tb8PEmJDYyPM5zNUmmqkJBYfHpaJO9sWhbeyhpu9dIvNjQxwcjyMsboKLHhYaLRKObCAmoigVutEk6nMcplrLk54jMzRMbGcDY2sMW1q3Hreruu/M5100QfHKS2uYm5uIi5tER9awunUJAEF8OyuLe6GuTXcjm0VCpophNrvd3++tKe7u9ztruL5zhUhYUPqPb2ng9RrYYjbOvb22jJpHzQwJHc450dnGYN72/2+M9Q9YTDDGUyQXHn6IiGbQegrgD6bBVd+vY81EhEJvmERqlEo1LBnJwkKrFqs1ZLjO9w6Rz73casAe5++QrpB3jFg4CNYo5cDN6JfR7rj1/ECnt4bgPVugN7eXaePcXOH7SS1dYPWgz+mYxV6vErjG8/+fXhE66wCeSR4+Mz9GVGpPd81obR1E6Vc24HSqi9/UQePaQsNQ7zH+W4GZe4K93fYhf4f9lvAQYAwe7UEk4oy7oAAAAASUVORK5CYII="
  },
  {
    country_id: 47,
    country_code: "CM",
    country_name: "Cameroon",
    currency_default: "XAF",
    calling_code: 237,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBNkJDNTBGNTE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBNkJDNTBGNjE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkE2QkM1MEYzMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkE2QkM1MEY0MTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KAzx3QAAAHJJREFUeNpiZKiKY8ANTneexCNreO49HlkmBpqBUaNHjaaO0X/+Mkpmf5cq/vbnL7FaWIhUp9T4VTT2BwMzA6sQw8NqLmq6+sMxFkb5v4xyfz6dZqayq5nZGJ5k8zL8IyFyiDX6/Ta20cQ3avSQMRogwADcmBpIZYNhTQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 39,
    country_code: "CA",
    country_name: "Canada",
    currency_default: "CAD",
    calling_code: 1,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFREI0MDA4MjE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFREI0MDA4MzE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEQjQwMDgwMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVEQjQwMDgxMTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IgrEzAAAAaZJREFUeNrEVktqwlAUPVr/TRXqB0QMHXbSqXsQdCRuQbsBR3bmJBtw7A4cuwyLBQNCKdgOVBCpIv7aUx8PiVZtNCo9cHm5yb3v3E/eTWwEPrEOlwtot4FIBGfBbAbE40C3u3HbsZQb/APslj3LZUDTrDMvS80NcbnIToc7MZkY18JO2K8wHu/2mU7JSIS/eRxHRTmfA6USMBjI3gnkckAoBBQKgNd7oYwFEomt6Hl3t99+T8Z20zdyhWZTrvn8tt3jo1wbjd2+R2fc65HpNFksksEgqWlkv0/a7Zs+7TZZqZCKQj49kckk+fr6Z8bmpY5GN5+nUqTTaeg2mwxuPRi327TUfxMLp3x+u6dmks1KX8vErRbp8x1PLKReP4H4+5us1cjb28MJPR6yWiW/vk7sscD7O3l/b06qqqSuH3ScDj/Hi4XceB+pqMpodIHJdXUFPDwAfj+gqsYWTifw9gaEw8D19QUm12xGDgaG/vJCPj8b+nAobc4yudYhMgsEDF3XpaygKNLmQDgsf9Y+PszH4kWIYzFgsTiJeGjJM5M56Q/kR4ABAHxxYPgLzAdZAAAAAElFTkSuQmCC"
  },
  {
    country_id: 52,
    country_code: "CV",
    country_name: "Cape Verde",
    currency_default: "CVE",
    calling_code: 238,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFREI0MDA4NjE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFREI0MDA4NzE3NzMxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVEQjQwMDg0MTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVEQjQwMDg1MTc3MzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zvajFAAAAj5JREFUeNrsVU1rE1EUPfPmO9OYNEPSplAqmlaoFDcuBBdC9yqCGzddVRA3/gL/g6IbJXahiAtBxY0gLiIIUkEQDNlIija0JUnzMZlMJ3nzZsZpJG1SUhOF4sbHWb1759zDuffd4XDuHo7mEBzZ+U/9b6mJjx0VLRkcjscMXbPhEVgqqLgb+ntqn4MjpGY2db2Opvrk+ourZ3OoRE+d2IjHjCA0OjWP8CLarAsHO0BVvrP8OK7WVzPz7wrHPmanmOWnb66YDZL7NAdi9uT/Dlx48UGPZAYpyVx+Lpa1qLJejTBbFiQmK+3ZeLls6SX7pIQtuBa44fI56vfZ57vPic8qwjURGAdYkNG5LwMhNDT2yBeWAH0UQwQxk9krAzGBrZcAnUiegROw+WI3liRh0DyKz5BIQJmHawxXnTnY1png0sP3QckiQcpH3gcdRTXnv3q9r5qPoXZ/14boLXh1wOupGQItwEgjsgRpFl5zuCHO5Yv9XucJWIM/H7RpDHC7ExrUkVBT3ALIFXDxkVQfmBBfnPQ8kgx9czy5bKmOLfOCK0nOZNi0mGY408QtwWuDG/6MeapcoM12Fw6tNZ1Nend5Jcpvf3hzejy+1jKpXeTSNx4aNfbl/QR1q7RJez45FDxSl6AI+1AJNPyoJVfXU6Y39vb2U14VPucW1mw9W5xuChI0ri//cHAD/jLEgxEG70KzF6a2S2aoWInAViBThFpwR91ogx5VsIzC1q998nWj0zGRQeyMhPsHm/KnAAMAsIUm2hIeMowAAAAASUVORK5CYII="
  },
  {
    country_id: 121,
    country_code: "KY",
    country_name: "Cayman Islands",
    currency_default: "KYD",
    calling_code: 345,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjE0RDFFRjQxNzc0MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RURCNDAwOEExNzczMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNjIxRThDMEVFRkYzODE3N0JCQzk4OEY3MEExNjA3MkQiIHN0UmVmOmRvY3VtZW50SUQ9IjYyMUU4QzBFRUZGMzgxNzdCQkM5ODhGNzBBMTYwNzJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wV3Y3AAAAoRJREFUeNpiZGCYyUAbwMRAM8BCnLL/DAysYARk/GFg+AdGlBoNNIKLgUGAiem1nPQjVmbGh8/5/vzh//cX6N3P+D2Nz2hGhn//GQSYWX6XZy0QEn539oLUh/c8dtbffvxk2XPQ5OVrKQaGV3hMZ2Zg8MXtXkEuzs9r5/Z/+vytfZL5k5ca774J7z8kxsfzaUrPivOXZV+9lmdg+AJyA4lGA0OWbcXMyWfPi9Z1RyWlifX3K0WGCenoMi1cynvlKmd1ye6tOzV//+YGhz4JKQQYXfzB3od/ff/TPDHoxGmNqRMDWb6+un7xVXKSz5evzrcfuR0+IFycs42BgRuXq5lwhjPDt79/fta2mYWGS5mbOPz8xnVkw+q/f7+zcogwM+jW14tNmmd8/gowQD6SajQwNP4oyN1VUD6hrMkG5P/69fPvv3///v77/RskLSMnoqV1Q1b8DAPDT7Bi0rIMC9DZHg6Xfny8CLKKi0tUReXf3z9/wGafPfdFW/2ige4TcNL8T5LRQP3sx88Yy8iyPbm3fvu28xxsfy0cvDQ0NXi4WF48e3Lp+GIx0dcHTumBjf5Nagph+vqFj4fv1fPPDzom3n7z4o24hBIvD/+Gdcc9oyd+/7/D1JB388awT595wWGCPbpm4k4kAooyz7/zbnnx8hbDDwEOIRWm/+zfXp1nEH7OzmEl+NnvxVsBBoZPuKKREW/JBzKdgekXq/DJf4KH/r6RYPjLyCR7kemV49/Xbv//A819DVZDptFABZyMDIyMrO8YGDj+/2NhYP78/5cEOHy/kF+GwJzz7T8D8//fQmDj/jH8FQEXTH8JFsjEFKqM4PLkG4z7FcnWAaoKaGg0QIABAIW9+Bm2LAQNAAAAAElFTkSuQmCC"
  },
  {
    country_id: 41,
    country_code: "CF",
    country_name: "Central African Republic",
    currency_default: "XAF",
    calling_code: 236,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMTREMUVGNzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMTREMUVGODE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNEQxRUY1MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNEQxRUY2MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bmc50gAAAqRJREFUeNrEVktrE1EU/u4jM5OMedJYadBNi2t1Jeqif0FX/QdCURAFQRHE7lz52LiRbtzowr0gqFhXFbQbF4KFQGjEaNsxaZtk5s69nk7SpCjaW1BzhmHOPffx3XPOd07CcGxuBcxMwLAWWj6KfhuMGaxt+EB2AzQHmkMiTh7nG29xv7GIj04uMR0Nm7hWPoE74ycB0i0kS29dJkrMwYXO8lwLF8++huQac0+nAQ6oiJbQ+C9LViYf8khvZDBzZhG3Zl8AKaBay2P+5WnAjfAvRKLZ7oVzjePNUgXvFnw4UmHh/RHgC3k61hqGWtA9u3QRwYYnbOtdBaxvAnHbHtgbyyZx7PiOzh3mOHf3CrTmKE0EZEzB83KDxR03D1l3mQ40g+jZjNKQGcfgUN64XQa2NyYlEJo11jYJAXkpjA62JEIlk81SxCj5EaJ4eJQsZhDMPWDBzetMFqYSmwqWkb96wxRvXzYqII+NsQH+LsvFDN8xFHO757ddcn7ZFaVT+AYD2R8raGQ8yYqUMBTStpHmHCOSkQHLtmrvFOmexerKNCKtGFFokHhGd1damZiyG8Yd2xxrOf1oemflnjtq1N9ml4y4gCnU+rZJeh5+eIx7z56Yymdrh42sBlWxi01/lIYbYr1TJsqVaRT2uih1m2Z3la2sfhVhkLIpp15HKKVL1tds+sTglEdMVgNbTI8nPWT8MkppbgsMGShhDdyJGNrUXMRPRdch21YkEKh9AFfcyJpccTpGTkgW7SIX6dTxYzPuRabicuvOJV8d/2RNLmdSm8bzilhGgXLb68vLpM0crOPSqZoJq9zilD65DrjamlzwCFwaCs3Qr+0wOcIwx4NwXG0LTD83ah9VH/0mIbo/p2ALPMLORW+r/3ek9Z8wE6wfAgwA1dTxt+cD8jYAAAAASUVORK5CYII="
  },
  {
    country_id: 206,
    country_code: "TD",
    country_name: "Chad",
    currency_default: "XAF",
    calling_code: 235,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMTREMUVGQjE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMTREMUVGQzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNEQxRUY5MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNEQxRUZBMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OGKo1gAAADBJREFUeNpiZJAoZMAN/m/rxyN72ckEjywTA83AqNGjRo8aPWr0qNGjRtPOaIAAAwAKxQQ+Km3kBAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 46,
    country_code: "CL",
    country_name: "Chile",
    currency_default: "CLP",
    calling_code: 56,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDUwRENDODE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NDUwRENDOTE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxNEQxRUZEMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNEQxRUZFMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KpHXrgAAAXlJREFUeNrsVrtKA0EUPbOv7CZZNSIqQkCxsrHLR9hY2QuC+A12Pr7DT7ATrAQLbUJKC1tZI2rQVZNsspvMjHd3QxLwgcUONjkwu3fuFGfOfQyXoXJaB7BEq4nv8B4hv+DAO9vA7JSFDODSejAGRurQGdDup7sCHXEJRXCNoRlzdDimHR1Ej7eAA5aGZKMAWvIVEhYR4r6Fnc1l7G2tAvVW6hNqVKeKI4GIcewfVXCwuwbT0OCULByf3AJdrlCxTcqeAlxUn2GZGhiF97LWAPfagGMoVByDCPOU0+3DGoSg9MaFpjDHI+I5G9UbH1fnHhFL5MpFYN4B/FARMSukFikLQpK6aCOOdadHRWWSk5m07GFWMiO2pT9qJ33sJLbpHl1EyAkHMgzIUYQIs4kAu14vf4w9Il8g6UIaiZ1xreQvs+muprEiH38ve4o2p456ueuhL9J9JqF+Ze6fmk4rUZFn3sf/gAnxhFgZjMHI4/44+iiYPmKuTwEGAHthZNcUQvnKAAAAAElFTkSuQmCC"
  },
  {
    country_id: 48,
    country_code: "CN",
    country_name: "China",
    currency_default: "CNY",
    calling_code: 86,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NDUwRENDQzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NDUwRENDRDE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU0NTBEQ0NBMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU0NTBEQ0NCMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+63sBgQAAAXhJREFUeNrslL1OwzAQx322k+ZDpaFSVSQqOsCChGBl5wkY4AGYeQF2NkYQAxI7ElM3nqE7TAgJtkKaUtQPkto+zgUxwZCgMvUmW5Z+/t0/OcPDesRmU/x7BZKZIZgB0IIh0wmv7KbR3rtOgJnCaGCYQfYkvA3lbarsUdCW6OAhhKhioRIODuZFkyFDxZxlbfqwsJ9yn43b0mlo1eXxWWB6UD8aIsfkIhCRIYl8aApBRLhy1Xe3NLXRvNbxqZ/eC8siqkAQrEAmFi0qOLhxxZKp7wxp+9oqvbVK7pq9xqmb55OQZL1VhcqmlA9ty0OiDC5c1ExWDQRoezdsEvPa4Qgcllz6RQIhF6dhRm3ZPfdxAsF25jZt/5MO1zHnAfWFDAsF8umS3kpBvsDSO8nLqHu8ejAWIXaOQ16xPdHXzo+eihPu638sW0dKhpfsOXFllJtrhX+bRhoc9QJoQNaMTaNgID8VaYrFKdL8edBn+IbM0XP0P6M/BBgAWIia6c9dDfMAAAAASUVORK5CYII="
  },
  {
    country_id: 53,
    country_code: "CX",
    country_name: "Christmas Island",
    currency_default: "NUL",
    calling_code: 61,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ1MERDRDExNzc0MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQ1MERDRDAxNzc0MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRjgxOUM0M0NBNkU4M0Q2MkFEMjJGRURBREU5RUVFRTgiIHN0UmVmOmRvY3VtZW50SUQ9IkY4MTlDNDNDQTZFODNENjJBRDIyRkVEQURFOUVFRUU4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BJjG7QAABAlJREFUeNq0VV1oW2UY/n5PTk7+mzRp2tmkpm61c1bxp4K0tZWxDRV/cCIqijdejF3JQEEvhzoRRBBBb9YLYV7ILhRxiEJvxqy1VYarFNqxxiZp0qRNcpKcnHO+H7+sk+DdCt3LufjOOe/3PO/3nOd9D3zosxnAMYAS7HcgcMcC2T+P82pQBi0YagAkgIT7BY0jxstsJS3LYUQ4jm8Db1u6GhQI7IWi3EKTg87rY62LK7q61QlQ+uLEwSmEuSxE+fWUlQ82WcM4UMeGLR0N3AYBgh2UnInnC+TLE9YTKfurP/WQBiEEuHfwKEASeh0OuK/R39c4Yq57OWYkUUHqBA4FEmMEHA7zJtqxoEZuFbUbbQY9VL4/0Qx5wceXtbMTjaVt/e8K9lNJbqVIWKzU3nwl88bzD558teEsH/CPFOjhNTqUI4QXCwGXwWdG3KABFrJwvUr6A4CJDr5irbZwri6/eLq+lMdlQaKE5bboQEpVnTp6swSpe2h1pz3/R7bqmEQT2SWK1jNaK1YVthZqff1s/dSUdexQ+74wuJyn6gQBTWFDBe0h8odVOrukjfejR4btR/tsQuHVMkGU4OJWvVQ2g35PsdJcuFp0XaHr8OwH46NjvuJv8ezsU6dj0ccONlwLn5/zfrpgfDTd9FLedBBXhpLAYiDoRTmT/FVEZgVd2dQ1jBgDZLNkvnNqqm3zz8//2hs1dB2XKpZPp2MjfVcW1x3dTOp0NG6d/sn/7e+hYo18OGlNjZp3z2v5bT3oBQ4TMT9I+Hivl1PCjl0ILxY8ES9LBwRxheiJGrbjMsaEkNzlxyeHrmdrL7x1IRYx+mK+jRxeKXvee6k0EfScmQufma6Alra8g9LJ7QHhh1z4fQAIsLQJr5V8Pg09EHeVUkxCeGT6k81SVZmlrzfEGOdcpAdClbpVqdo6xQiBQlk/NGjOzX6nJXIrDSNm+99+9/jFa0bqyUUtvYEhalQCbRcGdODB6pN1zQMPT5xTkin7KhT1VHE0LVejSCNYyE4aJeLGhn+ov3HyueW7ws43l+75ZX4gExRCtdjwP/TeVZoqKIMJ07jZB91ZBEcnzu2uCEZm09mptpKJgHKyEN0kiuVWzVMq+hREOGIl4y31UrpE1A2oOTizgUfXaCoPOwR+IOAuQcd8u/sbLWc4HTkxk7mxUW+3WadP/gshoa7xaE872mP5DCbVnFGXajTDhgjwfJyvpkQ5AnUXJSrQ4wBHNRXq7q+b7aHByGsvPqw0cV1+W7NDEWCOInWs22wl0/p+xvrxcTebRAELBppdQZTcXEilL4IIYyD3OsChlJzImgEow8Pr5P418r9Zo1B3B5IEYq80ym2Iw4jZWRZ7nUvJO/kr6LLuN/S/AgwAs/Hl9f4h+7IAAAAASUVORK5CYII="
  },
  {
    country_id: 40,
    country_code: "CC",
    country_name: "Cocos (Keeling) Islands",
    currency_default: "AUD",
    calling_code: 61,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzRDMzYwQ0MxNzc0MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzRDMzYwQ0IxNzc0MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMERGMEFEOEU0MzBGNTQzMTkxQTc2NEY1NDFDOTdFQjkiIHN0UmVmOmRvY3VtZW50SUQ9IjBERjBBRDhFNDMwRjU0MzE5MUE3NjRGNTQxQzk3RUI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YY6ZXwAAAxVJREFUeNq0VU1IFVEUPuf+zLz3fE+T/jCy7AczrIgIqQgxEHKVSItwkdQqatEqWrttE1FQ0SbaRLQqMgr6g36wIrAoyFe+Sg01+ns+3xvnzcy9pzvzNFIji/Auhpm593zzne985wxCJ8LcLAZztiJow5sIvjMosPAhy8E1OzR7tAnUBA6BIsDfQpuNHO/YZA0ewoEOfrJFJgSDPMKsUimypdiwJJayBaiZ0CY+y440WBfaQaF98ZXdWiPf7bcRJHjmwB+5u1CXki/2JLcvtsCZvslhK1TO43faWFev3HGJ3XitLnygo5upoOlJn4J4xB0J8gzGGOgoT6MVYil6PMD7Q/Tsi++gCqmYAwInobfA6ip+qI5/U2p1JY1kWRXylrU4WtDX0wSJCCXLGpaLUy1W/SJ72GHZca3dKNrCotJ9w55DGjhflrJsmxc8XVKSgQ3pYfzswJZ17oGNxRMLsLvFW7nCvTKAICDChV1r7CcHhbTw9rsg5xMhq55nL0wICKJKJsOrHOePW8vObEuEyRFFrJtB56g3L9rr0VKs6q0Qzf7lbnnsUQBJBQGLW9arffRygBpP6/6iO+YHDHm6vSwp4VbaM8yAoZFCk84U8e6gP1AMQtEQhakTVsC1Xn/7ebF3Fdo11N3Fzz31wVLAERy9qprBfHX8ph8GlDNQJl994OF4JhdAfKKY6xdbnOOVHhfiGhIIGiNndpZMRibx8DFu3K0hRUbH0LMeS0mZO4wP3lPjWQ2VPsQgFGoMjIPCIpszLu6sKYsJutrnQIwAfpaxCSfcH8MwO04hF5MjRS8FelnVPyoO75TVlexTjgspCh5pi0InlJxpQeZrkP7mY8IwxF/M14RTumtmm9j0/AM9+qjbatnSctn7FUbyAbHJw+bOdKMVZUnTWnXW8VQaA6ORnYyU4ccmUTTEpVVbwTJjKh9Wj/5xPJWUqUAoJ5A4hZ0LtSnRszvZuNCOupGmdmPTXw/VmXJxKgT63pDu+eIVDO5UnuK/5ibHfKBvv3HCyovpWv8fdMlpSYTfzbG5/hXMzfohwAC83jil0Oj5WQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 49,
    country_code: "CO",
    country_name: "Colombia",
    currency_default: "COP",
    calling_code: 57,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNEMzNjBDRjE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNEMzNjBEMDE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM0QzM2MENEMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM0QzM2MENFMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jvkEygAAAC9JREFUeNpi/HNRjIE2gImBZmDU6FGjh6PRjAzac0cDZOhH4zlBtdEAGfJGAwQYAIs9A9bKIFNYAAAAAElFTkSuQmCC"
  },
  {
    country_id: 116,
    country_code: "KM",
    country_name: "Comoros",
    currency_default: "KMF",
    calling_code: 269,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNEMzNjBEMzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNEMzNjBENDE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM0QzM2MEQxMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM0QzM2MEQyMTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8TQxCAAAA4RJREFUeNq0lV9sFFUYxX8zs9PdbnfaZbstpVIsLkotFBGqxCiaDSSmEm3kpREQsCGYSJRGI7E+akx4UKImvmn6oImJJlBoomIwRMU2NaCgtWpjpEjb3aXun85udzu7szPeneqbL+1u7507M/dOJuee853vu9Lz72+Z7t+oa2v8BuRcUJBAXCvdXJ9GqpuHE26OhdI8c3sGfEXIig1YrOgG5Lt9hbRhw4kxP90jDXwXqYYaEzxiA/YKMjZtiYBqOeOqrrL/cpADLfP0CQWCdQI8k4f8QsXZu0q3EjFFVmhUUkzpcd4Y0/g8Ws8LoSSH2pqgqhZSESG/WTlgSVCRZZnJ+J/c5m/hld1H8Kgqb34zwLPfG1yYC9AXfpHt9z26+IeZpBIxUO7oaun/Y3bCvXNDmI97z7C5eSsfjg7Qe/9+PHKBc78PM/Trt8zm0nS2PoTHJTwglz8U74NK//r6kHvw6HncLje73n2AkeuXqPXUEdGn0VQX1YrNhfEznP/lNJpbY9OajvJdncwmOR5+2Zm89dVJrk5dE6y3CNnX4q3yki8aDsuO5nuIz//NsU+OsG/gSa5N/VBejAM19Q5QqV35a5RGLUjRKpLNZykUC04y26KbwlirtSYafI1cmrjIyMwoe7v7eGn9QZoLPoouaRnmkmRnYgkAWRJAtu0Al57/fXPcb1lOVtV0tKMbOpOvvs6NKwOkrWoMdYmM4/NxxiNjrFvVyr1rtzH001lEzFkXaGUqddNh6hZdEZUspUnEV8lsHTc4eBbCPzYxS0r0OPISpZbaXmvRBZD22XMXnYVtJzcKU0Xoat9DLB1lLpPEdruYXq0QTFrsG1pg75cGPtNmuk7GVIRRlpFdUvjtHfrErd+0PZu7ea/nAxJCgRODx3ls0xN88fMgX+vDeH217B42OXw6R3vCJCryPuMVIbKWby7p4VOduiRJ2nVRQDY03MlTnYdEbOGjy+8QUyKE9LvoOWeya3SBgtAzGpQXGZZZQ6Sdp7brwmBaqXol5pMkczFqanQC7hDmwtM03nhESJwnFrQoqOWx/N9aXRSOrdMM/LUerMzjWLHDqLk2on7h3iYTyZYqfUiU3JEWb7fAaKOYOoCd7hJa5IWpJqkSDKuylT+YXZJ6U7NFHtqJo1hzPYJ6QKzOOMAsOUmWAGxld8zYqV7NznYuslYn/wVcOdBS+0eAAQAC6FhYtEMFCwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 42,
    country_code: "CG",
    country_name: "Congo",
    currency_default: "XAF",
    calling_code: 242,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGOTJFRENBNjE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGOTJFRENBNzE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY5MkVEQ0E0MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY5MkVEQ0E1MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aVFAGwAAAdJJREFUeNqklttOwkAQhv+2W0CTBuMNwlMIJirXvpByeAopXvl42kRQ8QajjRoVus70gKW03VI22RuW8GW+mfmDhtuLRwAtui7KHI3ugu6bh8GJietjE/iWWMjE9zwJbc+A0apZ89HkSdBHVvhklYa+S/QZekrQD4J64Vscuk/QZg2v4wleho6lo+xZQT302gKjc4J+SfwucqD2BM99B6JRgb6r3l7bhN2t+JX+/tCTlqKXoHOGDu5hMvRAQOyit9chKFf64aVDV3qnmA0cmEdVGHUBuZRbVhzTe0V67S5BP2U+1NcbVBpB+ejlempi3DWz9e6n642gxcEx6ID1KqF7PnTGUNLLUCzX90vfTi+tzLm6Un9luKcNgtY3oWpwAlpYb/8uWJmDdGg+OAbtbwGNpjcPykcoE6lToXAQaujIT6RgkOr50PSKY5Ve+omUBcUqHLins+G9Um82OLEyN7l6dQ78sKfF9KaDE3rtIj0dRdNbTO8meCPw1XoZOhs6W+ldByf02kq9YTgMORzKQYOpjgK/zXoLTK/9oAyHYhW7Mgz8DCj9rlalSptVzMfBnpbVu1Yx9dS1z0yLoO4GlI+hwTgUVOn0P3vrO0H5n477J8AA8FlP8fwgsDwAAAAASUVORK5CYII="
  },
  {
    country_id: 45,
    country_code: "CK",
    country_name: "Cook Islands",
    currency_default: "NUL",
    calling_code: 682,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkI3NjBDQzgxNzc1MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjkyRURDQUUxNzc0MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQUQyMUNBQzdCMUE3RTk1MkU2N0IwNzVGOTlCQTRCQjIiIHN0UmVmOmRvY3VtZW50SUQ9IkFEMjFDQUM3QjFBN0U5NTJFNjdCMDc1Rjk5QkE0QkIyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+isNl2wAABElJREFUeNq0lWtMHFUUx8+dGZZ5sN1dVpYFpNSwWBQFLJuWEpNaH0hoNDZIVoq08YGmMaaNHzRKiakRtcYq1Ni0poFa8VGigkmh0tY2tdSqRLq0lVJoKY/lsbuzL1h2dnd25nrXB2LiB9uEm8xk7p2c3znnnv89F6G8nbA0g4IlG9T0RqTuLfmo7qG0lZl40In91OEaiyq1fG9Lw5wOz9M8Ba+YRHULE3z9Dp2ex0E5bocQVgErGEMMz4awDPGpisn6P2jzvpntWw9VT/5yoSq54b1HU1ZliRIGhfIgjdbIbzW77Bvohs3WJs5629FEv8OPeJqYYVBBiYFrDmKKJdco6ChwB0CSMfkDf9HpTS/Vz69eK/Os1Td23xNrnq1dr3NOeg81p9RUPVeesyWXSX6qqtucd+zk8C0h16hfUqIYaAp+G7UUZTQ3Vgxcde7dUTrlmn3x+Xt5QXP5iB30AtIwgDHCq0uIfzGEJ0KgeP1pelaal5wqNiqKILABc4bs9KbIs7eu0Cp0kmlunTfGISS98UyxKKvZqcLuz/sETiO6gttqrA5vKDYb+bpn2OsOIZ5j+i157qmgn1UKK1YZfG5enBIRi7/pEspLM4ty0Fm7P8VgT10x7naCoImNMDAbweG5wjVZzR0Xmuq+hex0kKLAaeq2dWSX3d6+5/EvTl+FQBS0AoKSDwvLrK9V5VYa56Lf9TR5kvMthntspUONn409UF5p8Gl6fzh82vH2dX2/qoWf+3jAH7xZ1tJ+/qfOYVhuJOVcqCqEpBSztrai4MvjwyNDInWg5q7zVl/lidaPbW/lN/S/vH9UuThkMjHstOPJB3cVVLd9Mp5sK0qzF3vfD/7IRGJhhvIGJJ7jgaPRgnTJzpJvGSsU3Gkx0JRKhENXr72/a1/nC3b6gMfs8ceAVRgajzrCxxMzf5WQeG64o2uoXW9BmcsTJ0ePXptflmXSJyWcPHs9ihCi6UU6RqChwvOSLxiRItjtDiLQbofUVJAjwGGUwIAiY+Ig2QR+EQkUJCZgVYWpABBhZKSC5Ft5t3l//cM1r3ZOXBGRgV+MxqoCztnOr2rPXBp7Z8cRGnLKgVGQBiEKkbyAJMYxAFFgKURR8UyJkZYFPQtIIeXyXPNM+IO52cZLA05IYOJWC1H7IwXFmZMuX2tbv8xzcR769wGNs/5zkTwxDEHZ9kjBY+ss4PBCKIojMRIPVlRMdDIlbt6Y/7TNOu8IAM3QyLT+/7eFuAMDd6z7cve58daDm2bmgmODbsRS4A0xPPXpQVtPr2PXu6ckHU/iuDE0YRMbci4ULiEvPYnl2cb60oErM3t2btAIFNn4E73jI/ZpMAo3jv6TL2gUOXaqrX8srGKK6rs4mbSM6xsUW3afmQkpKF2HFPyH1m+2X2NSpnAMxADoEiEQBp0WtCwicvp7MDfdjhFpoRoa0pPjE0GIvxdxl/gqWDr07wIMALtx7x8ZU/QIAAAAAElFTkSuQmCC"
  },
  {
    country_id: 50,
    country_code: "CR",
    country_name: "Costa Rica",
    currency_default: "CRC",
    calling_code: 506,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQjc2MENDQjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQjc2MENDQzE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCNzYwQ0M5MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCNzYwQ0NBMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Gc94EgAAADRJREFUeNpiZJAuZaANYGKgGRiaRjP++fxlNECQAMslOaPRABk1ejTLEB8go+U13YwGCDAAKSoIL49OOfsAAAAASUVORK5CYII="
  },
  {
    country_id: 98,
    country_code: "HR",
    country_name: "Croatia (Hrvatska)",
    currency_default: "HRK",
    calling_code: 385,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQkE2MUNDNjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQkE2MUNDNzE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCNzYwQ0QxMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCNzYwQ0QyMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JdsChwAAAshJREFUeNrEVc1rE0EU/83sbr5smtgmbalpTQ+2IehFrSCipE1BRD0qtAUVBG+tIK0H/wK9iQieBPEmiqkIiieLbRWjtaVSP2mRSDCxdTdpmmSz2Q93Nz14ywQPfTDL23lv3szvN2/eI5+C7RvYBuHN4WV1NggBryrQKQe+UrHnVKcTVNeg8g4Qw2DemLI4KTyPFklEz+8MFE8TiCCAd7fCKfjRRVW0NjvQbdp86znzAJQZcV0J5EXMHRkC5/eivLgGyRCwfDUG2UUgTywjJ1FcOC/Cly2gb3oBRa/7/xETVYW3xGHq0gmMP5zEIh9CIS1iPpjCVFRBauwHSodFXJ+YxIPJcyBVB7iqUh+xspat6ySb48DdBF6NjOH1yRj6b71Fz7cOeLKtiHwV0XmqD3ShgsjNeyho61BzZj7UA5QaHqnjQ+Asb6Lsa8NTeNAmZhEOtiMwMwNPtYiN3jiWzXvlQiqOShLKWhWqy10/0YwGRDLdC5E9tr4aDhtftpYXjw8ZK42FMoj1YXpKmoaNxwlUf2WwuTAP/2AcxOGA9PwZmvbug9DVBd/ZMyZBhPFtMopWKNTQJd8Zs+YyNZe3/+dMPZ9I2LpeLjMjboifj5Q3Vgfjtv79YL/xuaPT1lPDo8aShUHXmWPx7EVOh3cgBq57N4rJJFzRKLRQyNa5QADNx2Ko5TI71TLjsHhUjMWk8fKfG5q2aH/yyLBtNR+meGT44v0sG15e85TT7hv7qT94qBelF7PQZBne00OoLK/g8lwpn3P1lCipcizxTF5GGSu7RaGEyK4w7ry/je54FEinIa7mMT5wDW+WPpj2IOqXjq1otOUKe0vhBOh/SiZ8GR1tTgiU4GfG6lICaNBsclqF+Y75hpqoWZXoTgf0CkFGdtfe7A4C6hJMm8KeWA1vXMtGUIe1rLrFAm/PNSoU2yTW0QvbsfFfAQYAfYmMzgM7drcAAAAASUVORK5CYII="
  },
  {
    country_id: 51,
    country_code: "CU",
    country_name: "Cuba",
    currency_default: "CUP",
    calling_code: 53,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQkE2MUNDQTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQkE2MUNDQjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCQTYxQ0M4MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFCQTYxQ0M5MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9/ZNdQAAAztJREFUeNq8ll9oHFUUxn+zM7OT3c3spMlus8kS3RL/RU1JokglJrRaFH3pg2+C+CAICq0PRqigVYrStFhEfBEVXwQRn0RQEESsT2KqjUhrpaR/NFmbpNlsdjO7m/l3PZsWRXxK2PXCMHDnzj33nO/7zne19/v3LxxL77MvWrsgrEK0DsRo99Dcrj61FOvgw877OG4/gGf0QLACymvrAbSZzHClO6rbhXCVH8w8b6cn+CQ1JjHjsPon+EF7Ap/J3FVRYEeS3UBYwYlqfGHdxpv2OBdGHyTyqgSLy6hItTSwsRldHp2Ied2mqHfyUGOOkbVzVO+tkp9+EWdoF76sCV2vtRnL2/5nRiOS7DpUgFG6gjVQIDf1HNahgy3N+D/s0bQYqlymUfdp9N3J8kKF088f4peh+yl9+lmLM9Y0G6WI6g18d5HuRw/gC67rP/2I6WSIWQkaSxdR1Ol55AD51w5zaeQeUrJBd7ghUGnbDBxFNrqOmeuldu5ndp+fYfXzr/jj6Ksk+4fwrhaJmZYQLSAoz+HoXXw9OMEJZx9XzF46RH6m8rckv+usDiM7qJXJPvkEuReepeOOQZGxx9o3p5h/6Q0av81hpJwb4Ogo1yXrXmNZS/BRapS3RIIQv6H9LWCsGTpGMk3xg5O4M2eunygeZ/HYu6zPzkjQrn/9pGLCAymvoxqkow2Z2KacmvhqcgYzuRMVBBSPniQ5Oow1eBPad80lsrOQTiDBX7qAQ5Jvb53geHovZ60BKfWqlLqZbWLrclK+j5HZiZF1KH//JVaiQHJsmNrZ8+jxBN7SvGi5xI49+7n59Zf5fXxy89RZIVds2+Rq6jimoaQ9hmtVjJ4dRG5NMmyCoVGvzZHK303+yBTZZ55qUwOREUlZLRViXruMmcnSe/BpkkcOyxeztS3zb9JIyZo8KXgl1hsuK489Tv8rUxh7douCxbRq/iYfWmoSoSCVEy/uFU8+FS8w3TnO7MjDssLDL15FJNdadzotttipNuxbghK/GhneEVd6T7wZXfpSWWzR89tji2td/aqu6dIIxpi2J1mJ90lNy1LSensvAh/nJhdOpPfas4nbhVXC5LDyv1x9/hJgAIwQQwS2sEaJAAAAAElFTkSuQmCC"
  },
  {
    country_id: 245,
    country_code: "C0",
    country_name: "CURA\xC3\u2021AO",
    currency_default: null,
    calling_code: null,
    flag: null
  },
  {
    country_id: 253,
    country_code: "CW",
    country_name: "Curacao",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 54,
    country_code: "CY",
    country_name: "Cyprus",
    currency_default: "EUR",
    calling_code: 357,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQkE2MUNDRTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQkE2MUNDRjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCQTYxQ0NDMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFCQTYxQ0NEMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+efiilAAAAf5JREFUeNrslU1rE1EUhp+ZZNJJMGm0Wj9IpVWsSsGvpQa6qRR/gBsRN+IPcONG0JXgtgsFFQS17lwU/AALoqApQQwUxVJbBTW2jK10Mp0kk5kkc71pcCFS00JiNp7N5R7uPe9733PuOYoQYpk2mCKBRTuAVdpkLQP27XmEa/87YOEsUXx6nvLsI7nxmwi8WjBRwUldxx49gRII0XHoLIreuWqY4PrLUaX08grVnEMw0Sepa1TnMpQyD1AjcTacvEFwZ7K5VV3JvkHdmMAa6cN7V0LtrkWQj83LRYct1zzp0Jr0naoe1cX3uJk7FJ6MENgekgy8epL8erJEQboMiAwNET31GKTUjayx1GoQ5/ll8mMP0fprIB5Kx6+8QnlGAg5LwNPn8IvGXwtq3VJXshOYV48hypJHpK6mKMrLkra2Z5DomXuosZ7WdC7xZRxl4jZFO4uX/0Y4eQl18160XcnWtkz5WGpNvWtFgpxMUvyPMwu2RUyPoGta8zqXYf7gwuhNbqVTzPu/gxqWyd30Cy6O3cdYNtcUb83/eFsszpFED+mZSUxrgQOJXoYHDjM+Ncnrz7N8t3Irvh2dm5o/nWpHn02/JfVpmt6urQz2D/Dq4xQfjDmO7t7H8f0HCQYCrRuLX5cWCWshonqYgutiu44k0v1/HjcsLrsdwD8FGACqhNA6kzA7CgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 55,
    country_code: "CZ",
    country_name: "Czech Republic",
    currency_default: "CZK",
    calling_code: 420,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzhFNzJCMTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzhFNzJCMjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFCQTYxQ0QwMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3OEU3MkIwMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jrdRWwAAAjdJREFUeNq8lk1o02AYx/95k2aStKDr1s1VaPUgKKs7iuBFbSfDqzsJwtSriFdBp3VszsNwoHgR3MmL280Vdd51qOjBdrCt9aCttVK3Np1NszbxSVhxDFf2kfQJCSFf//f3/p4Xwl0YfJZ+cqO/a48oKGhOeWjPAIErRV/4pvH6/YLRxCqy1qMHkPu5jN7zoxgYmURFqzYFmxlVHV6/F/LBDkw8isHfdwczHxadDzYPek1Hi8ij9VgQ+V8F9Pbfx6WRKagO0rP6iWHQXq2hzaQP+vD04QsEzkXxxiF6tvFCrU7fE7TcR0z3w5PQVmvOBv+jX3N/iNw/jqGr7zao850Nrpfl3kX03QHkcwWcJfeX702hsrp799y+yK3i2qJuPEKeQVU1rMynwfUcwcToAC6GfEBFtWZom6UIW36UGo+JInDiOIxUEomTp1Ho0JDnRNS2Hwxha4tdx5LogS7KiKQ/Yjwzg8Plb5hbMF/naLM5mNEcaoyHIrVDqhRwN/Ec17+/xQovYm6vHzwNiNuhY6EhZQtRumScyX7Gg+RLdJey+Cp58YcJEOj+bkr4PyWDInfCoy4hOj+Nq5lZlJkLcXenNSB+B93UMNj86G9yaYgSwtlPGEu+Qqj0gyjbiNJlTa1dJWyklNRlDMXJZfodSuTyi3u/FWhnqBW8vmPD5HKMXIbIZYpclm1wuWlwXm6Hu1JENDGNa+lZa0rtdLlp8KlcXBlfjHnIpZIilyYl7xDlul8f5a8AAwAi6Fw0Cqzr+gAAAABJRU5ErkJggg=="
  },
  {
    country_id: 246,
    country_code: "CD",
    country_name: "DEMOCRATIC REPUBLIC OF THE CONGO",
    currency_default: null,
    calling_code: null,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGOTJFRENBQTE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGOTJFRENBQjE3NzQxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY5MkVEQ0E4MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY5MkVEQ0E5MTc3NDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ljpEIwAABUxJREFUeNqslWtsk2UYhq/va7v19K3dBmOUwYBxxoBDFw4CQZQs/NCFhBAMKIQgYNgYEASNogElQnQ4YEDEAyD8UCQahYgZBgVEnMiQgbDJOIxtDBiuo13Xc+vTdiZDxRDwTd6kP94+93O4r+fTs+tiI+CQ60aJQDAVVD/oPBDVcf8nCopcXyYErHR/qJItw9dScKJcu/yW9ZpeXmgdDzWCaUy2H6Y20I0Lvt6SgO8+BaWAQFfw2rENOM8buVsoqt0Oiz1U7uiNN2rQVJQghK3QliMP01jVZzUTrFXQIk3wOxKBiNybphKGkNTR2p+krm5en/oKN7qNp2hNGZceN3Fk+wCiRhVzSgg9wXTGpR5hSu/vuR6yk2c9w62uX2E1tGBSvay9PotI2JRo/38Jhi2SvCSa4aQwfx1vejdj21xPw0Y7l1oHYEoOkWIL4r2twxgIoLDjpis9uUHbm7OCCRkHCftS0Rmc8UCza9ex8+Y0EfVK8NBdBCUpTxbY25k+5mPWUkb257/RvMFCdZ0DoyGCwRyJCyrSuWGPXsW8BLfC7hoXgW4aXhtHR41nbNZRmQ/kV5RT3jRJAtbGFDruX4LS+ohBBLPBHCJ/1B5KrBsZeqAC93oDZ85lo6pRjFoEv1slHFEYOrAeW7Gf6oI8lrctduuJir/k5mZ+zSPmahacKmF+xh5mOT6k3DlRVHQdc6Zj1qq0tC/oVfIe28+mzHcZ+d0hfG+rVPzSV17IDO1hgh6Vttt6BjiayChuo2n6QIooZNeR2eC0Shm7LroIpWpPpB9AlQQO1k8jRWvi6YxP+aJlEp5wilQYSOh6paWRZAaOOMymnBImHd9HdD1UHsrGTxJmW4iQT6Hdr6ePvZmei5y4ZvZgpbmQjRVz4XoXsDRJ0m3uhLAS0tRQCtGwRjS5QZyZKuMzQ3Kj1KpLsBi04hh6knVDyph5djeUhajam4ULExYtJAYUwXY9DpOTnDnNBOamU9JjDqt+Xoi/LjaSWxDzTmI3dAjHWVY6tbQD/kCXOIvW/jWsyd3MossfwVYP1TszaY6kYLEE43/ztBlIl/0zZKZUU2hmW/9nWXGqmNaawWBslQKaJaTa2SedhTs5NWiXaF3RZzeycmQZL938gKT3b3FpWxcahHWLKYSqj+IRi2j4GF5QD8Uqe4Y9w9LqYhqr8iBJNp9REon+zZj/EI6jEVsk3aHbHxSP2cZrnvdI21lH4xZhsSUjzqLOGBU09CQTZMTEKyiL4ZvRBSytW8T5ypgZxQ+m+o7uqXcjX1KOCUaM8lOcavMybfI2SvSlZO05z60SCz/UyxbSR9DsQXytOkL+CLkPX8S0LEJl/jgW3VjCsS+niC9EyHI50bE72/rvO4etUfFHWMsf/Qmltg0M2ncCV0kSZ6t7oRMWk1OERZdKKMZi/3rsy/xceCqX4ralHDg+HcRQWOqkuGCH4D0dtzK6ar/rncxSbczBbwmUKvx6ojdhcbLJFibQruAP6hjY4xoZsuAbpg7iZbWQ3T8+J7tcbGEVAnTe+/mKuZXIPpMrstGrnT6YjTfGoizwcEDQ8AmLacLiQifOGb1YnTKf0p+ehyb56liuC4vuB/lsupUqY5bL7TNppjiLYuZ2A44kJ/3mNROen8razHmsqlhI8EpPEbyDxQc5buWktU/c1TEWuwiLg2cJAgtMbO03m1dPL6SlZqi4VFhMar4n09yrsN7fphPTRxlb8DtKkbCYO4MXq4u4+tlIqa5dnF6bYPHBq7zT1TV5PRtzlt92HHtytPuFi8s5d3JiYjfHWeT/qrDziS2ra38KMABPHyYU69kw6AAAAABJRU5ErkJggg=="
  },
  {
    country_id: 58,
    country_code: "DK",
    country_name: "Denmark",
    currency_default: "DKK",
    calling_code: 45,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzhFNzJCNTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzhFNzJCNjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU3OEU3MkIzMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3OEU3MkI0MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YilnMAAAAFRJREFUeNpivMBj/J+BSKD/+cxnEH2R14SXgULAQqJ6ii2EASaGAQKjFo9aPPwsZvwPBCPKxyzA4o9oxcAikwFaZI4mrlGLRy0euhZ/hmKKAUCAAQC4DxA6JMoNqgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 57,
    country_code: "DJ",
    country_name: "Djibouti",
    currency_default: "DJF",
    calling_code: 253,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFNzhFNzJCOTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFNzhFNzJCQTE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU3OEU3MkI3MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU3OEU3MkI4MTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LIWFKAAAAkdJREFUeNq0ls9PE0EYhp/dbtllbUtLREmtCSYmvfAncdeoJy8aDImejB6MHDxhTJADGBIDJCaSeICEeBAL2ipGEBCbVqgabBf6g3Z3mMXUgyi04L7JHibZmed7v3lnMsrSj0rmUSIfncuWrA5TI9KqYgu8VFB+WUUIUXAHU6tFhpN50vka0aCG6Ve8LMD6DXZHlZrg6YLF2AeLUtUhFvLjU8ERHoPrym3VGHyTZ1p2wfSrnA74EBIuvAbXlVyvMCQLSG2UORXQCBs+7P9j/2BwXZNL2zxJFdiQnTgT0tA15bjtbwzsqlgVjCQLPFu09qBuABWFvS3wFFxXplBlcD7PzFqJNkPlpHmk/f8D7K7g2piehs5OiMf/OXM2U+KxLGB1s0ZXKIzh0+Txc47heHwcenqguxtGRyEWO3CFhTT0z2VF2SkKQ9MagcoDSn7/n7oOW1uws3Mo1FVCGWC0+kDYjiJMoTfqWOx3vLIik1SElpZfYNP868znX6e48voGy7mX6KEOWjRDhs7xLlyft9NclMDJT0PgDxAJnkOV2RDNxatxcNmucD11h/7UPahaBNvi6KrWjMvmwQPLI1ybv8nmz48YoS4C/pAE2t5dIDPfZrmU6CWVfoFqdhAxozIWdrNtbRycLeW4PNfH2OJDGX6dcPA88pY8alsPB9ekm1vv73P77V3sco5AOE6rBNvHa+vB4OEvE1xN9LH+PSmPx1mCejuOU/PuITC/+S5zYbY3+mptwlKMdiInYiiypQLPnh97T59dAQYAfWNBGb6d818AAAAASUVORK5CYII="
  },
  {
    country_id: 59,
    country_code: "DM",
    country_name: "Dominica",
    currency_default: "XCD",
    calling_code: 767,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUE5QkY3MDE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUE5QkY3MTE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQTlCRjZFMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQTlCRjZGMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yQnKJAAAAtZJREFUeNrElUtIVGEUx3/3znXGmbIZUxAdH4mJaWkUYdCDoCijFj2IgjYt2gQVREURWVCWPSAoqE27iIqKatE7aBEmUYFEadlz0pSkdLRGZ5xx5n6daVp774DkgbO49xzO//v/v/Odo3FuyW/sWngiB6vaODTnEwUV0GdWEf3Vxtn3t9l+bQfklNouZYhnMQ6mM06WPrASz4CQBjEt9UtT6QMbtjPNJKhOqHgEsqEwmrzjFGKoPE/iI6kcfSyBkwVd4vkxqi9LSzwrpXGCVxhLYHk9lQscUJEPQ5ITsQeucXK1siXvlBH2XQtS+0hREvIw6B/CzBrE1d5Lt5HJ57pS9m7yQIczlW/F+GjNa2vQEvBe9bD1RhaXppj05/WQHS3H1+4lkP+KaKaTPXdjTKzqY2Cz0A78pTQ6Y/Xd4nzJy8gVX1nE8dYy9nRG0B1h1q+voK9rOo+bmiQYpKHEywF/JzwOpOSOWjBODoJRCcv1uaXIxXg2NX5F0IgxKZ7L1DfVXF/TzOvWCNMGDOrCCd4/m8za7ABBUVyLWwD3mdNGz0iAU9fxxHTyeoeJa7qoOMDSd5kcW5XHhdpvnHqYhanHGZHkfn0GwWjcUmqUXdtwWNX7fWqYeUpRpe7MnK24OF/tXDxLvueqI8U5Kla3y3Y54/znB9Yt6NZx1Zo0XPVyT+Tuz3CyzB3gVrODl/3F3CvS2d85gSubDH73PEIbMm08p4Yy6+Z3im6FOZy+4KboaYTcsIdEgcmwyOvv+sJHRwY9iyrZtln2TfdPaSxlA/jcYmVrgLgF3Ovi0pMuNjaFufnTJ08iwZrChdxf5GTFrGYBlK4alHIOW7Naw9J1LfVEOlw83/ILXn6iMdjC7l75+eIMLSfWwZfu1ORy2KgnbqS1TpSJ76tsiCJ46zaJmKnZ6PvwQ2JGWivHSHutJA88LGCiaOLfJSntf6zFMbIk49B4AP8RYABEcEyuCxX37QAAAABJRU5ErkJggg=="
  },
  {
    country_id: 60,
    country_code: "DO",
    country_name: "Dominican Republic",
    currency_default: "DOP",
    calling_code: 809,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUE5QkY3NDE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUE5QkY3NTE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQTlCRjcyMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQTlCRjczMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bJEP0QAAAXtJREFUeNrslM8rw2Ecx1/f72ZjG7MNw3yxidlhuRE5qFH8D1yknJUiBwc5OTiSUi6O7i4yNxxGEYWy/GhfTZvJj8nM15oc5PJMmcve9dSnp3fP63me9/N5JPzDGvCAiMIq/YN9rC+OfZu+HJ4iurKEsdyDoEr1XwV5lsw/qQDOm/TcxMXdj7e83302QPIlSfJdw24ykX6655U4csIsDm7p8AmbL2+cNPqa2NkOcXB1jYU0VR43fo8Xu7MTWakRXkvSMsrlimKJOIGxGVprXUw83zF3dMjI8jyB+ua/zfj0LUa1IjEQTxKVKth1QSiy/4uMc9SbycqFekzViZk1o5WwdojX2fD34LZUCaNKO6pRxa+TGaeX7uLGnMHSWc+QcMapSBRLoAtlYZonLQ2ZYZYNTM6usry5h9tpEz/x/daGsPkFFb3bka3Nki6zbV22Pg9HiAWDxGyKONhQ7hI2a4kURRbHzxdqLwNTNdRVFr7MAvhHHz/kmVv6IcAA7rhthUQGtAoAAAAASUVORK5CYII="
  },
  {
    country_id: 215,
    country_code: "TP",
    country_name: "East Timor",
    currency_default: "USD",
    calling_code: 670,
    flag: null
  },
  {
    country_id: 63,
    country_code: "EC",
    country_name: "Ecuador",
    currency_default: "USD",
    calling_code: 593,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUE5QkY3ODE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QkM4MTQwQzE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQTlCRjc2MTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQTlCRjc3MTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oj8tnwAAAr1JREFUeNrUlU9IFGEYxn/fzOy66667urrrCusfyOgSWoc0KihLOllEXQsiiIgOdTG6dK1OdalTBxEpI+pi9IfoYBjZIaICpTAzJF1bXbdVd51d50+fa+dmRWHpY2aYj2+G533e93neVxifIguUYGnyrigFsEKJlraur21Q3fLhMkFX5VYgPPLdUDBzArndZMb2X9CIBR6JsxwAv4WotLB0nzyQV9Rew7U3EViReVEDWZ49Ndh/KkbkYB1PXtbS06ehtijsOB6iv99AqciiuFaRnakLqep/xiiEXSChqyEGXsUQ+TGGRxKk9ZPUhBYQ+kN2NjeQczVy4nASnzqLsOQ/trJRxjK9wmQq2UFTSKN5e5zWPStYK3GOtOe5cdWLHpqkOawxs9iJbSmSr+XM2B4LOFfFb6D/CPFx3OLaA6+MpYuGA9W4ZHF/vR/n7WQvPecjdLTKFNekYVl1VvXygs+5xrrANH4TqA3hmt5G+74Y0WPnuPl8Hl/mBZ3lcaL1X9GzM4hUECtfhJ2arlwsQtVu1KUMvZcesaXKJpEYwj8ZJpZapFx8ptHv5fucn0O3L2O6gjLSnDNwYipShK7dMG3ijSdpbGtl4p6XvsoBaqvc1A8ZZI66iWTSxEfrISz9JooAJpApAliHXBXj71a40D3M45k25r99IRCupHrrCme6Jhh5Iz1XUQbB1dZvOIuLvXedxSWbU1m1j2B6lLP+16R2ecgOZqVtBN4uP3UfdO783M1idQuZZGbNxg5WFp62W47AwrSkZ20WTB/p8Uqo0+mevo9mG1yPnZZl8OJrmiNaniE+q2Apzi4VgzUtdlEdUzYFS9pH1WyMvErQWCqcpTU/mtvANiWYbcqGIwpNx4my1phPrW+sGGuhLLs8hYDCZkJKQBSiK8AVOSi0lOrd0HjLqeX/3zxeLAXwHwEGAOXk99HjIQVFAAAAAElFTkSuQmCC"
  },
  {
    country_id: 65,
    country_code: "EG",
    country_name: "Egypt",
    currency_default: "EGP",
    calling_code: 20,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QkM4MTQwRjE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QkM4MTQxMDE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCQzgxNDBEMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCQzgxNDBFMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4WJtkQAAAL5JREFUeNpiPCeo9p9hAAATwwCBUYtHLaYZYPz///9HIM0HxCRmqw9AzALEPCTbCcSfWKAMBiQaP/j1iIHhxwkGBg5NiFt/3GRgYDcEYhWSLGchOYz+/WD4eyucgVEsg4GBmZvh//NeBiati0S6GgFItvj/v+9AXXwMjBwaQHczMfxn5gUK/iTZ/SRbzPjvEwOzZBGQ8Qsc1MzSpcBQ+EivxPUDiK9BtegAMTvJiYuR9NQ8WoCMWjxqMXYAEGAAUBIvbfhWcKoAAAAASUVORK5CYII="
  },
  {
    country_id: 202,
    country_code: "SV",
    country_name: "El Salvador",
    currency_default: "SVC",
    calling_code: 503,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QkM4MTQxMzE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QkM4MTQxNDE3NzYxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCQzgxNDExMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCQzgxNDEyMTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/anEfAAAALNJREFUeNpiZFCYz0AbwMRAMzBqNP2MZvz//z+NjGYhWuU3Bob3YPV8DAycVHT1j2ePTlx/LG8ox3Tt6TdFydfS8voMDPxUCOt/f59VzLxy+ehCIbbpR46eqph2+O+fO9QJkP8MrB+/Xnom8H7FZd4bP39/+gkMHGHqpBBmZvHsENlzL0RW7bJ5/uZVdog8M4sMFVPInwfPNp299N1Ij1dRypOBgXUgEx/jaMk3ajReABBgAAmeREpJl5cdAAAAAElFTkSuQmCC"
  },
  {
    country_id: 88,
    country_code: "GQ",
    country_name: "Equatorial Guinea",
    currency_default: "XAF",
    calling_code: 240,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkMzOEFFNDE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkMzOEFFNTE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCQzgxNDE1MTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCQzgxNDE2MTc3NjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Tw5JAwAAAphJREFUeNq8lktPE1EUx/935jKlb0BCCYagEGJCdKE7ExMXfgE/gHFlaFwoK9mwUcQmbFyYmlA3xrgw0W9AQkI0xhijRNGqUay1D7AIQkceHTpzPXdaISMPKdje5Exm7pw7v/M/95yZYR2RcOZoe6xtuQC9aAKModrDT5blycwteYJj7TH/UgGoFVyB9hXJdBSTqTC8LoCrgBBVB0OBmgdcXwh+G5Pp2sEVCKLY8CkkU1J5b03g3D6uw0vKFQXoOXgHn2eBJYOclL9WUQ0oZDIuOzixV7ADnkAicZNgbtF3+onI6QewsGxCtUkW+bjBeT2stax9zbQ2WMUihPmLAlJ3l2XA4o4pG75I8BV8+jDAxMlGXDvjdIEoQCy+BuPNFLYPMCgAbzet81YimCmbpiTcRT3lSeNSdIJFxuZYKbllYy42/0NjV0cfsLMP+9irqRQjqNNnZ9sGLAdlFG7yaVEwEI2j99E3x+281oRnb8fx9N0o5uo8+yiubXeD4KbASsFyTHsCAVxuPQ9f8QKOd5yCYRrQVK3CdtpyB8gMgs0YuHLxCO6fO7R+KzOdRTz+EaveNWS1WUzE32BmOvcfFMvKNWmfeSv6+1vE8AlnpTaFWhGq96Cxuwsq56ij3mv2VVZYksI3QTntWX0bwu+jYvjuS8u414iFpaLdTpZlQXNp6AkE8T2Xox4WCIVC0PN5zBYK1P/KbsCqs50kVBZKsBPhFxGMjA2y+TzUuS3SIue0MiNhbZRqBUPlG0rdBO1C7/MhjIxfR97vh94cgFuYOz5B2/Mr8096GzoJegMxCfX58dMVgPoP6P4+ElJpg1QaIeggKfVVHVoCBw+XlRLUR1AtWHWonWpSqsceD/kpvXotlJZ/ffTfAgwAojL4tK6cs5UAAAAASUVORK5CYII="
  },
  {
    country_id: 67,
    country_code: "ER",
    country_name: "Eritrea",
    currency_default: "ERN",
    calling_code: 291,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkMzOEFFODE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkMzOEFFOTE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGQzM4QUU2MTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGQzM4QUU3MTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Jln83QAABGBJREFUeNqcVstvG0Uc/mb26XWcOHHjhDSv5l2prcojFKkHkHpCnLhwiTgjxAWJG/wBiBtcKnFBHAD1wAFRKAcEQhyQEDRNLYU0TkAN0KaJm4cdr73enZ3lN7tpsfOGlVZ+jX/fN99jbDZ3evre99NhZm4ixK3xEIuDEn5nBHAAOwxtFQYrwJEXa34R4dhLrWcCz0VajBJhS5e4Myxxc5JITIWYJTKFUQmZjZKBVYYU3TYRYeothv91qVFsXb9UoccMk4AjGZwm/hV689akxG0i8CsRmVOKDJAiuSihvUsk1UheRv8B/DHwvg9oih1ytMVqJDw36V7oF7h9kYgoa4jUnYEQXj56xBRONbGGRXs9OA6YFkcBQ0iARlbAfCaALHPIFY72oRD6LxaSAEjscImFIYmfLhCJieRuyQiRSB+SkVZgApUEyo0IxrMC2fcrCIo6vM9t6JMC9owH/1sT229noHlAir6SborXo4zMUkZmVUbImsJYa0ZiRfy9wORzKGlnr7uwX2rAvW7D/8qE86qH2ic2WFeEttdcMM7gfpiCN2dC02SMe1xGbk7ttmY3Iy3AoeCwzvvovFFG7V0Hm1fb4Qw3CLgO8/kAGy9mY0V6ChsQSxq2ZjogPVJI3x8r5XEqJKmbiGwTyfkRCVVdvrdh5nkBSUMrV9MweYCua2XotFABaX30CB31j1LQL5Fx0eE5VlWrEaESyb9O9wblwSQil5d0vPG11QQsk+QaTxFwUaNnDBHJvvMeidcWwf/RQLhF4BQ7/2cduKfBeFLE605yYNAouE1EeHOrGUs2oU0H0BjJ4UgEBR3hXxp0IqT0U0CsgxY5EbReeXRnjiDCW046HkE+4GCUQuURp+FdyyWEqxyNGxaMESW1BkvJPErPF7WTHxu0zBRkndhCt1j5F5ipGeRB/RvqKQUmS96KhxSgl3Mwzgp0fFyOq9V2sQ7rzRoaHzgIlg1wLg/FMoRATmwS0F10h3/ChIel7hF8+fQre+pErEI6rVIv+Oj4bhPBNQtrM93IXHbBqQaRy9D+xTbCH0yUrnQlkhky2bTaURjQSbdDmlTj0FA/sNwzisWhCarRBBaGp7DSO4zV3BMHnFw0R0iSc8KH81YdvEzDzwmE8zoiEkPMa6h/moKscti0gwwB8RiIUowcVvKDWO4fw29nzmJpYJxOskmsdfYg0HSkvRoytR3Yvnf4Wa06LYl76lwdzjs1+J9ZaFw3YyAL2zFDF3nc7R3EUv84Fs5MoUi7+v30CNazeXimDcerI1vdjoFO/COReKSkq1Jz3VhLGoOV7kEUSboi7aYwegF/9I2glD0F37CQrruPd8QjeWTV9JbUHeDRYn48BlocbPXI102SzkW7W0Hfw1VwSUCMNY07uma6I2qZNErx0hpOoZgf2+fRA/JIaAZJpzxSQPepbq01kjEoO+bvSRPwWmf+fmH0SqbZo5LyyLDpB75GHpUxsP73PqCD50cH/904YN0/AgwA07gejJviOMwAAAAASUVORK5CYII="
  },
  {
    country_id: 64,
    country_code: "EE",
    country_name: "Estonia",
    currency_default: "EUR",
    calling_code: 372,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRkMzOEFFQzE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRkMzOEFFRDE3NzgxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGQzM4QUVBMTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGQzM4QUVCMTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+r3fpugAAACxJREFUeNpitCo9wkAbwMRAMzBqNP2MHgWjYMAA4////0dz46jRA2I0QIABABDSBIkzwazwAAAAAElFTkSuQmCC"
  },
  {
    country_id: 69,
    country_code: "ET",
    country_name: "Ethiopia",
    currency_default: "ETB",
    calling_code: 251,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozRjMwQjczRDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozRjMwQjczRTE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGQzM4QUVFMTc3ODExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNGMzBCNzNDMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yFhTVwAAAsBJREFUeNrUlU1oE0EYhp/t7rbJJv1JMaVJbUuLP4XowVapIGIv/hzUIh4VqScRUQ+CevDkwYMHL4qg0oJXUSiK4E3QQ0V78eK/TdVG20hjbX43ye74xYDgpRsRKQ4MzM7Mzvu97/fONxrHti2yDM2Q3rgcwHUsUzP+/BcNVBkcW8YKdJ9MGdXxPwHWRBzlQi4hOpngj1aDKHyuBuGPyLxR3VMTcKrBe5eqgBbA9wmiO6Frr4x7ZEEHewpmHki/C/kOicWS7g1u7BqY9zaC5tDizjCujqPWnCTvNLOuYQKrzuZpdoeQ34IKRdjvXuRb3UpcpXsLqJIh5ZlTf4p3ySFWTzyU73mR6SsH2x4Q1HPcmN2HTYvIHWFy824GovclHa2eOdeceFh5saU+xeDkPRLpGH1Nk4TMFBsCbyQkxYt8D3OFCG8z6/H5Znk5uB1KAWFtLi112dWW3FBv5MhmozxL99Em3LY0PyNipLie3EfZNTnSfodF/zTvJIBXmbXMpntpt95TLrX+/T1WYqKAyLpQCnNzdj9p16okgIKwyrv1jM4N86XQJV7L4lSMWMPVMrygXWURDCSIBeK8tcPkZe51vpuj7bdlTeNpJoYtZmrSCnRZH4gE4ygn6EnJ0MOOB1s5wXI51z/KnsfDdBpxOsw5LsyMUBbGI+FxLMNmRu/k0sYz1HUUcHKNotHS52rJsz2erta1Eq12ghP+81weOgVFqVbFuKzJ4cYqCBQ5/OgqY4unpCx0iNymt6unemOeCVEiZdDJ0BZMcGXTYcb6D/BxRYhKmYim0hx6fovTT64x/z3Md6MZTXO87/HHrX01FVlH02lwikQWPpHzNRIP9Qonje6FaRpz35hrWUne9KG7Tm0VuFbgX+w1DV+5iFXM/XR2zvQLYINUIvVvX6cKgK2b2P7m3+b+q/c4vRzAPwQYAEGjBC1vMOsHAAAAAElFTkSuQmCC"
  },
  {
    country_id: 72,
    country_code: "FK",
    country_name: "Falkland Islands (Malvinas)",
    currency_default: "FKP",
    calling_code: 500,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0YzMEI3NDIxNzc5MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0YzMEI3NDExNzc5MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQ0YxMEIyNURBNzM0NDZBNUFDQ0ZCMDM0M0E2RUFGQjkiIHN0UmVmOmRvY3VtZW50SUQ9IkNGMTBCMjVEQTczNDQ2QTVBQ0NGQjAzNDNBNkVBRkI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oe8x+wAAA+dJREFUeNq0VV1MHFUYvffOnZnd2Z2dnYVdWaBAC8rWsqBESa0KbdKSRh+agqYJ6YNGjWmsTeShryb6ZOKzaW2JiSTGB6Ox2iaIP6VQK9BCKa2lrMDS/SngQrvL7s7uzNx7vVvbmvhiQuQ+zCSTfOc793znfANf6OkHm3MQ2LSD3vfMDh+Q+955OtTRFL1Hx+8K74alM1/0frjdWi6rjmJdF+FxT3y4KXriJS/S1FzB/k9QyBlTgI+sPb6zL9L7zO0Tu0I/HQufjOJiYaEILEvXnnSpe6+P9jSr6+66D1xN30TyMH5NVWXKiyEgNrNsBh/CMcawiDCGjD34go/tDqY9rTNyTpsc63xO7nyrfearxDTIbpHo6TDRJS/oPjC+Klhnr74qk599SiZvy2KpXhAAhZQwgBGklGKuAOIN+PsBNpzV64MFkizSGBVtwJwgzwAxUQDTFQEgpteYd5crQK7BJSTlwNudvSnZo1qFtdX883vKu3dXZrIkRaCEBV9AHRmK/vBdzOtzQQgZb5Y41BNZzueQ2NyxA49PaBLJCK7pU6fqD3aFXmyeuzCZtmG8sSX55x0sYlAUBdPkWpqmrXqdtdsCtVhxerxAkFfIvZHfFm2LPlIcH3XuCh9pP7zVajRurevSl9XPNgr5+k8/znYfPPfK/r2vrTZOjJ2ZWu8vfyrqrsCXxlykyEUVuLOoEMmSRCzS8ERdYjG6Rk1ZVBGC/0AfDzu6lr6VJ2OfTRe/15vODi3018bbgX05uvjm0YFmD3l9T9Whmvl9yanPR4f67BqKJQkwi1JdEht09+nBQfyH4lXdlUFNhEEkSAzy2ZYaYBiLf/LLld/DbcNqGY3Ew35zOCUvtr6RWpZDYnH+avK9K7cHuto6/DUW+tFJCgZ280HZFHLiTgZfbtmHjby2NaRWakuzFw3L1ID4N2thytE5WtW6tJINmBldlSTbml6jI6GdkTuGy8jqulLukWevLQ5cTk64ql0Skhi57wDBZMQfyOKc5dT8C3PzkuYZvJBKxtcVRSyx5l6p9kq2vY4ULh6ilHEHlTlBWXoJOHi9SGgJx+9T/CXrGoDwKHBPA0VzzNzMJi6mHwumzg9EK30gY9DJacOjKxDQjQedo2cLsGtLdHvs11tzat22HbnyNufJj1punjNVD4Fo49AMQAcrpCzfiLuFIKWmeT/K0CkQJMEgNgz4KI0bWmnUpeDz6YriitVUxRa+vpTLgBuVhwXEfGb6fvaFDUKXNKGsXC4CGSZTbC5BJdlRJmcgYbQ0CAA3zPrhPio9HBJwSKX8cJnYvy5HkYSY9f9uasY7oU39FWwe9F8CDAAMDrLSTxhgUgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 74,
    country_code: "FO",
    country_name: "Faroe Islands",
    currency_default: "DKK",
    calling_code: 298,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0YzMEI3NDYxNzc5MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0YzMEI3NDUxNzc5MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQTQwRERENTE2RDdEODBFM0EwRTg2QkI4NUIwMjMxMTQiIHN0UmVmOmRvY3VtZW50SUQ9IkE0MERERDUxNkQ3RDgwRTNBMEU4NkJCODVCMDIzMTE0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qirpigAAAaZJREFUeNrsVM8rRFEUPufcNzOM8bMhiiEL/gAxUmxkQzayUChFSvkr/AMWUrKwkJI9O5ONhRT5uWChNKWxGIOeR71373EfjSbewlU2cu7m3Hfu+d65537ng1wux0E2tnQ82DR9AvEzqBpunBqaP2RDI/g1+4f+DC1EMDoict5nBtTLFLq0NBwYiAhSkvPQygoZV22NLx4RFTOqgqqQUKZy0c5EnZXWHOKS+prtx8jE8gGz8K/wTWh3YfXZdgWJwq8KVVd9befdlYNFui8d2Wtva+M+fUMmZMVTTCi+JwgXFqM7S+A5EHugqAKoUE4MbAkWAxv0OuQflp9y8lv59h9WvoNGuH5D5lr6bcezyILCTIZIQ3Uye5m83CWF+y3de/FWJ32LJjSxvNnREooyqA9onS8Qdh7L5OZ638U2gdyPN6cGRnorbcXff0WwNmbbAIu/BiZXzjPXNxJIc/opnekpf1mbaTfjtW27gQHXU0Tv92dEIV3zkfGkCgxoVfzorHZM3/DvKZ+eGvYFCt+o+CN5CoeD5YlFCJRWRY/02GueCGEK/SrAAFuW4Upd7P7AAAAAAElFTkSuQmCC"
  },
  {
    country_id: 71,
    country_code: "FJ",
    country_name: "Fiji",
    currency_default: "FJD",
    calling_code: 679,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjUyMkUxMDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjUyMkUxMTE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTIyRTBFMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyNTIyRTBGMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+scF2nwAAA6lJREFUeNrslH9oG2UYx9/3fiW55C7X/Lok7dKuxNqljii6abVzdXNQhqNanUzrwGq7yVxRJwMdgyEqYzgGKipDNgs6qdCOFf/QualU0ZVBdO2SJgWrTVuXn5fkkkvuktzlvLLgxL/GxvzLh+ePLy/v++HL8zzvA/s/mgC3JhBwywJ7I7XU2LXmi4z57bG5hTNTwGL9dLi997P3vt6++8mxNCiWHYyy31PZ3dMst3pfiFVKBYHE0Oty7X1/8ZXh8Sfiwcs7nUeP9TkeWJMpA70oFXA97WIOekuhZ5v29q87VGxlTyQT0aSVIq7TNXzqpVHJ1PAwU9kFlrHersKqtuWx7+DzA+DjE0bKsApkwUPdI8HSxAdnER2gOh1VBEBFRRVFNJJ5ikEkFUAtgYKitJgjhaIm6mhx7UbNY7YgRyWo8gWbHqkqtYzBxAh5PY5wNlZNcI1o1e4wAIYZGtybpBlKKsmkgV6I2hfiFRON6AGEKiZWUqw712jBpWq91vPdW7JRTgCIb0OHJZ0wFXlOBKmRUfrpPkdnu/lCKFWBl1gPcyVGspSKY2i1oj1LQcP6jLTvz7dkfzkV1VtliZgGH/r3jPmG3NJiHX1XiL1327YDj9/uoTh1cvpYjPa30neOfz7T88jE+q6hQYUKXgqfjw7zTRer9KMV0ULIkgKwfBH6nDNre2uZpDvI/eghSls43msjufK1CTm62bXHHsVGfjgyHn5nUc/JtlNDrBVDhYuRXc9885rf9vqOO15lsU2Ni+/+nPipbZ2I6CCoGgtFfoPr1H07LReUF49/O39466RfuT/kQ05PAbvxKho9vP+5X85PHSwyJ+kWxEq03GNpbmN4koy0ty21WAQ+fS4Sn7nb7+ju8BpLEYiVUAxT1YyV8k///vKhUfu5QCH1hy8obD8dn8vxgWYnVZXrrveFs7XOjYws9ZMQw91Akady8tnHdlDZ9OZNFOhxK7Va7Mrym5Oqjl3tEEukrNQgxBGcy8eiOrUBejgxXasmjeJshR+AqB4AqY52GwhQLGhKWKnSSotoLVMJTeSyCgAr7TbhhAnXbgia1rgrJ/F0oP22niMHOgAorh5s+cQhNdkuT/SScwFA6+roG/vEhAmVsvDLr0Jmq+yCSzPf+46bH/xtftZl1ikquCk0UGGDCQ+EZ8OK0jHQF0k3F7Koyyhqn+nahNzw9tF64DQQEoS/NjmNecFZK/+Te1Poq3XXFoqFz//dg/9oqf6P/lf8JcAAQ7yON3YEhEoAAAAASUVORK5CYII="
  },
  {
    country_id: 70,
    country_code: "FI",
    country_name: "Finland",
    currency_default: "EUR",
    calling_code: 358,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjUyMkUxNDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjUyMkUxNTE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTIyRTEyMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyNTIyRTEzMTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+FFmzagAAAQ5JREFUeNpi/A8EDAwMnxlwAJO4WQxn915jYJAWhAg8eMPgE2PFsLkvkoESwAKleRnoDJgYBgiMWjx4LGZkZMQiRrnFjIFlK/9jk2BmYmRgYmJi2HXiDsOHV8DcxskKkfj2k0FCVpjB2UyJ4fvPPwyQ3EiGxQwi2dh1ggwEycgIMTBwszMw/PkLEWdlZmD4+J2B4ek7oOuYQSaQabFpw/8RlbhYQEUg/qAGFpVcaEH9CRTUH0AJgeygZnELN2fAlbhAKfrIxUcMn959YWBghyYuoKWikgIMlu66DD9//SU/cf0noNM0fjbDmT1XUSoJ31grhk29kbSNY2zu+v9/OJdcoxZTLx9DwGd6WwwQYAA8jFV5xASNJwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 75,
    country_code: "FR",
    country_name: "France",
    currency_default: "EUR",
    calling_code: 33,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjUyMkUxODE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQjc4RjdFMDE3NzkxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyNTIyRTE2MTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyNTIyRTE3MTc3OTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NYcTvAAAADBJREFUeNpiZFCYz4Ab/L+fgEf2q7YTHlkmBpqBUaNHjR41etToUaNHjaad0QABBgAMOgSHJZqdhAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 76,
    country_code: "FX",
    country_name: "France, Metropolitan",
    currency_default: "EUR",
    calling_code: 33,
    flag: null
  },
  {
    country_id: 81,
    country_code: "GF",
    country_name: "French Guiana",
    currency_default: "NUL",
    calling_code: 594,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0I3OEY3RTQxNzc5MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0I3OEY3RTMxNzc5MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMjY3OTAwMERCQTAxMEQwMDE2NDFDQTA2NzVDNjFGODUiIHN0UmVmOmRvY3VtZW50SUQ9IjI2NzkwMDBEQkEwMTBEMDAxNjQxQ0EwNjc1QzYxRjg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CztmBAAAAiFJREFUeNqsVc9rE0EU/t7sbrKbuBsPLdQf4EVwYz0UehO86922ChYxqOAfIZ48F6EePVRyKCheihQUKWi9KFFbxXOFagINWnVrsjM7O042JARrQ7fJx+zCMjvfe/u9977FlffutnCUMpRCsmhYi5U3d/zVuPzNATIYKhjcuBaGsxVe+mDV+SGAAJWsQUFY0TdCrBDQSD47X6SZIxIQCTsNlrWG1liTeKrOm5cq8trHzI/ITrbUwFn3PCGGTn80n5n3remjOvews4FOJEqTdRdtDTy1FYYz7/jsulUXdld9CSuClVKQf6B5ckCelzcC/yWe1HRtW4zisRGVzU6RVUpBdsflQMOak5mbZ2GUwDa59TyKvzKcATPj9Fl3EYM5oDHxbJn/HIfxNLLWJD9phUt5oWx1EEF6waFCLN8Vd6aaZqukZNyyndvNrNWEov6ymP2ZY0paPKCJLXoxadZdHP/EP/8yb3hExAfQuhP9cGCcf2MsXpBw1bmH7NWEcXHcXDilcqb+DrlXO+6DmmBKikZ0PVWLp0CoKeywY54959PUmGaP9Eu7Z3cf1P+Jlejc0JzG1RPOvaIsmCIZtriXnx1gglX70l6Zkwsbf/xVPKpmk7JRmg7pH0Gf9rRxNqbf8utr2W3RNc7WNhvUOjWP9gJXPPgSnH7NF6t2x/cZG4LntytYUNVmeLkiS+v2d+EkTr0yvP8KJa34m0a9zP0i+yvAAIf0Al7jyOdLAAAAAElFTkSuQmCC"
  },
  {
    country_id: 170,
    country_code: "PF",
    country_name: "French Polynesia",
    currency_default: "XPF",
    calling_code: 689,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0I3OEY3RTgxNzc5MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0I3OEY3RTcxNzc5MTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNjlGNzM1RDc4ODNGRUI1QUNGNDFCRDA4MDk5RUM0M0EiIHN0UmVmOmRvY3VtZW50SUQ9IjY5RjczNUQ3ODgzRkVCNUFDRjQxQkQwODA5OUVDNDNBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++fOASwAAAW5JREFUeNpi3MugzEAbwMRAMzBqNBpg/P//PxHKbjMwrDyd8VIyVkDGWpiBwYOBQYOwpp+/fv3HC37/Wv3jn+S3vxK7mCXPx6r/+S/17af4r98LCej6/YeJAa+r//y5/fNHPzOjKAeTyf+/Ak8Xv2dgUOZgk/j1vfff3ztgJbi0/8cX1kBLWVjWcfOe+nmX59lZCY1+SZlkvWeXFV+fEefmvczEvIoBb1iy4I0IhgtXJFgFi9gPfn/z3IC/Opmb4e/DpZ8E7+7+p2b587O8vPR/kCIyjAZq2nHE6twT5xDRhzK7Jq75o/BbTclv9aIr3Cp7F2faSX8i32ggCPfl5zt0//5Pdg5LO3aGtx/ec/ww0n/HLy/Dcd3GRAWPuSCX/fr5k5WNDY+K42dvH7v08reIOP/fz5oinBvvfhNk/G0ozuHrboBH198/f4hK108ZGBZsf7j/1D1+Hk4uLs6SBH19TiKyzGjJN2o0XgAQYACA4seGjOuQWAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 207,
    country_code: "TF",
    country_name: "French Southern Territories",
    currency_default: "NUL",
    calling_code: 596,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlDMzYzNUQxNzdBMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlDMzYzNUMxNzdBMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQUM2MDVGNjUzNTBDNUY0RTBEMjExQjAzNDdFNDlDNjIiIHN0UmVmOmRvY3VtZW50SUQ9IkFDNjA1RjY1MzUwQzVGNEUwRDIxMUIwMzQ3RTQ5QzYyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sbAVIgAAAuNJREFUeNrsVF9IU1EYP+fec+9256Zijvmngtm0CTIhp6VQkCVGPkiEL0FSkYEQSfQSPQRRVA89KCEh/REfSsSXShPNBlFGiFg9hDqidG5T57aubrvusuu9p3M306QXb9Fb3z3cc+453/19v8P3+z4ICxsAADi6osswTL9uz80xg6R9qW8MP+/RpW23WdJb7JWdEyHIQOIItmwU+Gf2H1orNMQQ/hk0woKozjFRYWgCtH6gF0UDSOiFZVMEU1gB2gOg4uIdZIrExCyTjkYb2pKseZK5iM7NTeRkypweSAmM2DV4CLEkg9VVNR5MKlIBgKEhogHeQIC7DzWvrQCWZeKFU9QxhQhV8rCIWQyEeD4GGCJs9ZyiKZaGIh/FigLIgBTN0GxGuihJm1i7J/0pImpAIZ50VRFAmgEwSP2UFUiQOFZd0zTmo3LAe+Jy04Nb56e9c/6FEEJsQYHlZEvby65nIH8nNHHkFwJJwxwHZBEk1yHvND00cmtDhyCi1H0dAogigdWrCnFHmc3qsI+MTro+uBmaOV5b5Q+GW7sGe/vf7a+pItfhgzxESKP4CHZ4ubbKcffGOX7WN3z/TnfHE7Id4Jced/Qqvvm262cqS23EJ9UPNECrCcsz3+t2le9rOnKwYnBkqNBR7J6aefSwb6C/dZfdVlF94alrHFiyU0qDqfa0VXSKUoJhktnx4bY9JVaPL7S0JEiy4iwtGng1Wld3EWzLgulGNStaqxEns3q4Zu/HCU95/ZWYkCgtsc2HI876S9+FSEmNE0hKClcz6yRxoIiSCcKoZ+5oQ/WLnps2Z+PXiRnOnBln9RQF8U9pa+4hiozBfPj2tdNjnzsH+t5A7sC0d8E709t89hjwBPCvJaOVtdpV4mKBzcLSaFlYKXMUvn0/Zc3PDkWivtkg5HR/0/kwKYpvbt+Ua7TcYW+/espo5D4Njfk9i9Bk2KwozazXU4r1NKWDICbLMqR+714/BBgAETMoHoqT0acAAAAASUVORK5CYII="
  },
  {
    country_id: 77,
    country_code: "GA",
    country_name: "Gabon",
    currency_default: "XAF",
    calling_code: 241,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOUMzNjM2MDE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOUMzNjM2MTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5QzM2MzVFMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5QzM2MzVGMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XUVjwgAAADFJREFUeNpiZJiXwEAbwMRAMzBq9LAwmvHPRbHRABk1ekCMZrFbsm40QEaNxg0AAgwAqCcEmp2Ti78AAAAASUVORK5CYII="
  },
  {
    country_id: 85,
    country_code: "GM",
    country_name: "Gambia",
    currency_default: "GMD",
    calling_code: 220,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozOUMzNjM2NDE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozOUMzNjM2NTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5QzM2MzYyMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM5QzM2MzYzMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I9VNdgAAAKpJREFUeNpiPCeo9pSBgUEKiD8z0AfwAvEzFiiDAYmmi+VMDAMERp7FLD/e3x0Qixn/11R/ANL8QPyPjqH8kfHsy//vgAxBIP5Dr1AG4veMDLxtA+JjFlZOZqYBSGhMLExMjAOTqn+++fEfyv5PrwQNsovx5tV/74EMASD+SyeLmYH4A8vZb50Dk48lE1g+0bmCAIHPLIriKqOVxDCvnaBNHl46N30+AwQYACKRKLCtBsdeAAAAAElFTkSuQmCC"
  },
  {
    country_id: 80,
    country_code: "GE",
    country_name: "Georgia",
    currency_default: "GEL",
    calling_code: 995,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RjU5RkIzNTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RjU5RkIzNjE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM5QzM2MzY2MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGNTlGQjM0MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+6i4DLgAAAqBJREFUeNqkVllPE1EYPXfu1ASwIqEErCBRQ2Ki8UXjg5IQE/UJWfQXuP0+EzHGWPRF9MEHDRXColIBbbSWFlptO53l85uFhulMZVpPMpm7nu/ebzm5goi+A0jyV0YEULWG/IWbMDYy3JOQQwNILKWg9PchIuL8ZVWvgQN/wLIA0wQUhbklOoJpgZhD2PulEjCuhO75uo38lSkYq1/QKcxvWeyM34WxvhE6HzCspRZQuH0P+soSijMPoT1JtW1Ue/EahUnmWE6jOP0A2tz84Yah66BKDUJIJ56k6e1flzlQqULA46iHcHBylagJxqcM5c5dJ/3javMUWZUq5c6MUxYn+TtFP4cukZkvBNYZmS36dfEW6cvrFIKSGnZgeXYUA5ypEMrhtxMidFiODiPx/lnLeTXgBiInm0VMBRmc2brZ2CyOxFy32WvYkc44t6luuFv3uXwcPKcbgQOI3NhEyVdKh92OS80q7LrlZvfZgNJ3nK8g3TKMhrLIIhndMMhxv9LLYqFIt28fZI8PQkZorrYyrNrqEx10gJyaikN13R8Rqhw+Ed3ufky53Bpu5TGZHHRVjig6lbVb8rva4s0xCdHTDfpTdRND8ZKrNw7rRx47V2dgZDZ5gLV6MIH+t48hT4+A9sp+jm7mqPg5Gq62yUKK2zXU0xXMxt6j3hi567gtjsUbB/OFxQrnQKtsMDPb2Lk8CWPlc4SwU1O8PY5N1uprszDWomr1/BsUpu+jvryI4p1HrLMv21bM+vwCilPMkf6A4izr/dNXEW5cY23d+83eiTl/W2vbBdU0J97/5Gip1WMTpKdXOtfqjS3Knb9B+tJaG1rNGZpYfO5IXqeQI0kk3s05Mhtax96TJ+57+vCrQXRJ/BdYQoUqWz19yn8FGABqxdXVw6EGDQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 56,
    country_code: "DE",
    country_name: "Germany",
    currency_default: "EUR",
    calling_code: 49,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RjU5RkIzOTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RjU5RkIzQTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGNTlGQjM3MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGNTlGQjM4MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aBEH3AAAAChJREFUeNpiYBgFo2CAAOMNmhnNxDBq9KjReBPf/3OjATJqNB4AEGAA+2UCvgLMJf0AAAAASUVORK5CYII="
  },
  {
    country_id: 82,
    country_code: "GH",
    country_name: "Ghana",
    currency_default: "GHS",
    calling_code: 233,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2RjU5RkIzRDE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2RjU5RkIzRTE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZGNTlGQjNCMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjZGNTlGQjNDMTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+nJIV5AAAAbxJREFUeNrsVstOwkAUPdMOCEJ5BEwMiS4wwbhRP8GNxGj8AF240K07FyZ+gq78A42J8RP8CMJKdia68MECQcqzls542xBkowzEoIk2venttDPn3Dl37gzLxzOPAFJkNYznMsieeNdB33Ms4Bp+6Pp7wNyq6EN3EmQBjXl+W8iR2POp9bbT9Z1hOvp8BEy3/SaHxXQjdZgsJqvkRMi+HkF2hdEJLaHj4qwBm6ju7oWAF3Ioco86Gwjs/mFyUdJYX8PnyUCgrYaEbjD4ExyX5xZMUxJwFHZZwCb6kyEGIZSiZlyqTnCQeDWBrf0qcoUOylUBh0BmU89YzOi4Oo6S8AyyJr83qwVFG0wynByEEY8w1JsSrbZEKABqMxCe1iHq6nprrmQq5jEsS6TXgshuBHoDrKwGsLAZpG8CmlQbyzWOSC8tB9MlDZsFC9V8A/fXYRj0fnhURymnI5mmZFWbZjeXJNs5Xa6QE1NZThN+hrsHB4kYw9I899pubjsolgTmZjgstaXlLqdXhu2sqbxBeJWDCBMBmOKj3NsESHoPUUlqHHFrtJqX6PP9rgz/m8Rv3Z26Rx5jzEef2rsAAwA2l4mM8iP6VQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 83,
    country_code: "GI",
    country_name: "Gibraltar",
    currency_default: "GIP",
    calling_code: 350,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDdFMDYwMzMxNzdBMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdFMDYwMzIxNzdBMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iREFEM0ZBNDBFM0ZFNjU4NDVGNUVEQUQwMDAxODNFNEIiIHN0UmVmOmRvY3VtZW50SUQ9IkRBRDNGQTQwRTNGRTY1ODQ1RjVFREFEMDAwMTgzRTRCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XVIZMQAAAslJREFUeNq0VGtLFGEUPu9lZnfVHXddXV1NvKQZmeEG2QWMoiyIoCT/gFkGUZ/7Af4CwQ8JRRH2pT5I9SFSAqFPSTco8pK7Re6uu7q6V2dvM+/bpG142VnF7OEwDMOZ55z3Oed9kMfjEUWRMQa7B40wFApRs9ksSRLsNhKJBEYIwX8AIQRvJ4/viJ1uJyng/v5yoJ9Yik3U2Hn7libiv1IvuN3vHj2ke6pJkfT8ydP3Xt/Rg831h5rl+YBvYvr89V7LvsZ83NFolOsg4PO1mwxlAMNDj59dvnQH4MXV7qHBuw6AY5IUm1/g+vD7/fm0NtlLL9oqbmpax8Ihl3s/gPzTUyIIPQCdVVVKWenKGHQHgbSuzbm0UwEGz52tHn1dSIxjdmvNsnw4nnhbbPaKuH0hQlh6/IizZ+yNvaAw93gCAV2tCcA3Ig4D1FDsWgx+QuwjEWbkeCSu+ESDL5m2M9DjXUU+QTpOntKeCldqAUsMLYNq49AEFHElA9DVeWXnG+L5MH4BIAJ0XMAtCmpUYNJAFc4aM6xG031qMj81RpD7NgZmpmZHXu0FaEonS5fj9Uq6vpCZ5ThLyAeUVC2Aa3Qk6pnVJUaIKouLEAwqjK+phnBlhXfwfofZWtB2nKqqk6ElY8LbEO/6XJIhVHMyK0F1Xyfm+gekvj51bo6vdzdqEJRYFLmudZN7DzZskHYQYrGgcoeqKhxYUZK5HeJEHXa6UZU/GTdirSmEMfMHIBLe/K+mcrD3BgXGtGVQNpkGC4eRFtnsghBFYFCnZTXK0RoWPS/mXMEEGdFKEl4fqwX4yrsMwkKlYGmgjihKZL/z7IZtiD9sRMAcbeFrJu10BvzljERsmAHb0oL/JlCiZmi2VE5o19KWSp0YCsgVv1NEfRHWbjTKpGjM2Qo/ToO9XM+WtT4FBtYlZhCFUBtHKtvSvkk4lGpp/SXAACbxTzWqruOZAAAAAElFTkSuQmCC"
  },
  {
    country_id: 89,
    country_code: "GR",
    country_name: "Greece",
    currency_default: "EUR",
    calling_code: 30,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEN0UwNjAzNjE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEN0UwNjAzNzE3N0ExMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ3RTA2MDM0MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkQ3RTA2MDM1MTc3QTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KGW0OAAAAblJREFUeNrEVL9LAmEYfj79UgqtiCQoHIUobHAwiBrdG8JBqKUpAgkaoq1F/4aG9E8wxLHJVqmla8ghaDB/QA13lVh6X+99d6lIRHRH98DDvd9x3PM+74+PASc1APNEDWgim03h+HgdxeIdNjdP6fUk0QMTOlHAJoLER24FGHp+A2YJtondoUT+Ls5/992HFM/nU1hdXUCz+WpXGNwo7wA1CGH+VNc7RkUslx/SZTw+h6WlkKRdsEzmUv0qc6v1imRyGWtrYVSrT8jlrhEM+uH1MkqIUmh30evpYIzZ1dWYEEL9ub8DRKOHUJQrimw71nipVO2fVLVD5VxAJDKDRuMF5fIDxsc5fD6vdByLbSAUWkEg4IMDOCDHB8JkUmQyF8JAoXBD5x1imrhH3BeKUhcOQeXmnn6hTf3zy8jjMQZ+2trjnpzqev0Ni4sCtZrqxFR3R9ZGl5EwaivPg71NJM7gFLh5OQxfFMPwWO/YSGLM/jrd3rb6U93pdBEOT2F2dgKa9o77+2dw7oX97bG5Tk4K8+3tc7gBKuKWO47T6V13HLvW40rl0a0eH7njGBjTLGHtn0Sl1qcAAwDRS+VdNgkmcAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 84,
    country_code: "GL",
    country_name: "Greenland",
    currency_default: "NUL",
    calling_code: 299,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDcxODhGMUMxNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDdFMDYwM0ExNzdBMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNTkxNDkxNjg0Qzg2MzI5QzUyMjkyQjk5NEQ3QkI1QkQiIHN0UmVmOmRvY3VtZW50SUQ9IjU5MTQ5MTY4NEM4NjMyOUM1MjI5MkI5OTREN0JCNUJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jNGGgQAAAtNJREFUeNq0VU1rE1EUve9jkkltmqS2IU2tQhXB0FoVArYLQbDFgi1uFP0B4lYEl+KfEBHc66IFhRYbUYTqQkEpLdovTDc6adO0NWY6MZP5eM83KU1tkknjwsswi3fnnXfuufe8QZxz+D+B3RK89FQEq7XoFtQtIVCMrYw2+Vyfm8VaDlqaaW/cP3y1Kdy+ezQ6AJvXCsOylAf3lo/65hEsEfjmhUUMCwDJrubU/btmURff2IzXD1SttWUUlSsX9dcfpKhMggEhmvMNEgE8m9VXde+lgY7JNz6vrz73SmgbQBkd1icS3p4OZCPmCPNXiQgwRsbXNenyhWNT0/if2ph99LAwkfCcCnMHlVURAbEuxcJG4t3Wk8e7ojcGrU2OU1lgUHAbSkccQn3we+yZWTrOVRDRjHKysJJU4ieJ2NwkH9B7vQgFiHz+cijW4zp8hmFIQnDMEZHzqylb9uDWECdS/blCzDIz6WJ6VY71ILtYXSFjiK4NxR0NkW0rGc/gSLeyzVUNbPMAaEIh2Jq5cyt7+ybu7KyQxZGMc2osLhBHE8Y2uBX5RLGEg6EG/cZmZ1nyJ+SyFdAOUwSUtLUR7nTe49fNlWVtbqal71wjuNr8nJlcJN0B8PoqWomckzjeGx/ZZ6eLhZcvGqS8PfaUpfJY9ruNCErGIjusS0w00+Ltifeh02fdfCY8RQDUpYX1wX4CJvIHa42249z9cx0KIDW/eWM0n0m5cRG4+bSyfm2Y/1Jx6HBNy/CyZfaSpi2dOCKtKD/6z2y+nareZAHkpl+tD8Rh+bt0vJNbVm0pyoJgxzS8XIloLVM2zJxBh877R657e/u4P0BVtTA/o02Mm4mPJCiRrjAYtvvd7QiyX+tyOZhgy7DSm5bKIYC4j+CCDTlO/YCibUC9yLbq3tcONC1z3VcOY4ApjUZoVKhgIsZ4M4YOygGLPWCzOr+nHcuI1x8BBgBBy38D0GVnSQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 79,
    country_code: "GD",
    country_name: "Grenada",
    currency_default: "XCD",
    calling_code: 147,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowNzE4OEYxRjE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowNzE4OEYyMDE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA3MTg4RjFEMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA3MTg4RjFFMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RYghnAAAA/BJREFUeNrUVVtsFGUU/v6ZnZ2ZvU13S+n26gJ7aQPYEhKJtOqDIU0IJPhEY0I0RhMNRkHwmhh5UNPYENQ+qvHBRHwzPlCiiWhskAQJbi2l28u2DWxLd7tAd7ezO7M7M7//LKWm3PSFB0+yD3N2/u985zvff4Zc9EfxcILDQwsH+1V4ElTLZoksQAIoZRlw0bfynAvjx3wOWPgPGWKjkXpogkSveZyCSQkTRNKseIsn1KM+7svk8+4l3ckKsH4IB2pWCbBzFh6UoURxVhTf8vli3dSP3m2zBU3ibNahUunD1o2ndrV+1PjnwS1TPjEN3YOlagEX/afDEmGJOzOMbk0F0jLK8pej4bcXtndPzD0zlklIbhvaAmk2tdyw+9XBrhONkaOPTrzcPg1PDjmPmRZA6L21tAjvNODLIyV9dXlL/0h0PFWPJkeroVG7qarW7ChTBi4NtcVkVnnldPdnI+F3Osafa5vhvSpyXrPMw0H5AOMA8waHCuEFE7UFaM6T8VjfcOyvKw0QKwjk4JYZFF0dIwuRs6ALyHvAsLzFxGLg+cEnT1yKvNuZ2B+b4f0mJE9hSKAG8T1VRlmFRr4fDX8cj12YbYJgoDZnN8f4UbLGISzSmtiy/npEKZyZbIZUsgtQMjxf13s1OHB505u7E12fqJnvJOae+n3c+cOB/tNtv061gKM207tA10BPFlzdLelvHzvz+c87Xh/qgKzbx5RlWNzZTOjssXXxX37b+vVNyJh6VtmT3Ukjfig3wHq9F+iaKyPyVsYjYhAdo0toKjPElf8ZI55C5wydcH6Lq7NMA1Tl4LDuO947WLf51IF4eN/i7p/m/WikECx7uAU3ykJHaP7Ie2MbupYv7a1lgrQcVU8+fe74UPuFZFVlJt0tQe4H7XaYyAk/qI+gQYNuoOhi029rzhzZOvFiexI1Opq9pJ7AQM2uSq883RtIfTO+sX84OpIKwlmxC6Dq+ruhK8z5oglnETkZRW9zQ5aZ7+DmJNxF291zMjOfv0e3zZfhkK3hReNAZ+JAbOaLsU198dj03Hq4dPtlshaaPfKsqaKIRSlYn31jZ/y1zUlRKTAvmln/itwUZvr2AHhqGjyu1/DOykvbR1+Izg6Mho+PRFIL6yBzDIqsQrM1cNUhuTu193uGmQIOKQfLjZsKZMq7jOouqs579aKvZorsqMIH9UNtFw/tnfx0JPzB4rYr5ySuKo29nmTN+iPkC+1Rn1CuacuubEmCxZhWr6llc7SBTPKgDEcCku7yqr8XgpOnPDuS+ZLE2dC3lqpVwgLkqjPshRk5XOBEOt7nE26v0H/NEJAGaA7JmveIK0v1//eV+VuAAQAuXtAy981G1AAAAABJRU5ErkJggg=="
  },
  {
    country_id: 87,
    country_code: "GP",
    country_name: "Guadeloupe",
    currency_default: "NUL",
    calling_code: 590,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDcxODhGMjQxNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDcxODhGMjMxNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRTRBREQyMDlFRjgxQ0Y2N0ZGMkQyMjRCRTVGNDc5OUMiIHN0UmVmOmRvY3VtZW50SUQ9IkU0QUREMjA5RUY4MUNGNjdGRjJEMjI0QkU1RjQ3OTlDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1p/tyAAABCRJREFUeNqMVWtoXFUQnjn3tXt3NzbZJtm43WY3auqj9JE2qW0SpZAUqQiloAjSIpXmh5QiCioUsVgEtVBQmlL0j4gUEvSHiEWsadPWhkZoKjTU1iIhidlk83KTfd3XOcezd5tHN0nN/NnLzsx3Z775Zi4CdMN9IwDq/tbLN+9WDwzFAHKwYAgQaG28Zjtyd++zADPwgKl+f+rVvV2dP++enS0BcAB4AS6fiWgDRAEqvv/lvYMv/QrQACADUNcrXAGAredOnTj70UmALQB+909hDFDEbF7jS3/V8VlN1Xg+MQ/FhE8CeN2FLju4/9yBfd+F1BS1tK2bevr6I4ZZ5kIE6zf2tb32dSg4lJwJRKJ3ZpN8bPIJACNfGfrePdx+6JXzRloNl07v2n61q2ebC8sKVXPO17Y29b5zpPP3G0/HoiNtB77VPaIvxfWW1NYMHnvrdDIVNqnv2NHPa6Nxtw/Id8b9Lc2XWp67Gb9bvW9P797dF4D7XGiOc1xLBJWAf7rjiw9+vNTU/k0bQBLALDBGZBGnnz3+ieXA0RPvIxqOAy6hHFHl3Lch1t9x+vjbH795sWcPkBngJnAiI6xzoSnjwZkU5rIbExN1AKLfYXSnIVpjjg5QlTFilHoobXBdRuGtIoZD5fg0GU1sGh7ZLgaGPO66EAl+OqcCQYteXT6QMbwTqbUIdgGa5TsTodL6qlHTkhJTVQBZBILIXeUUyvI8tj6emHgkY2hzBS3WFy48kyLX/V+pMqiGypckwvKGi5/UMpQiqmiEDdhmkiIR9aDXp257Clt2qRtiTiRMB/5ROn/C7l4wrbRlcVjZFkOjvk6Xd0q2zWCM4Ag1VcmXxpcb1SNv0M1NZn6JBEnMe++OcuZL+OEyj0+aZi63ErT0wGssoAkGXk5q0K6S/B7+4gueDw/ZTzakYNyEWQ4ZDtQOPm431sEft5SxKUynrdVAA3MoyaAiy1wTc+fhEnL4ed68IwtTNp9HcABTTIsxv6lc6ZOmpi0x/WWhiwYGDrHNIYtdZ8pfWKbJkQpHlCm6WWCuoIAkbai3ayNCKNJKgyyG5gwcx7aytjHsVKaVCr8l1MeX5lKhZ+JFmdGVBLIEep4ZJ8umB21nVmEaKc4Wx0eDeI5OIFf9WJDA/3BdBJCxaTSk72gW2+MscMIBNQEtne/Xu4bx3zSopYockEipJJabm3w10IRzsXtyfa0eqnVQccT5FMSiOKiPajeu6qfa1Xt/UlNzZLG5QVDFQkwqTooWLurDoZExNpGUBodJuEQOBri2BsDrMZLKxS7t5Bn87Up2JmESm6GMUrns3LaNoRyfw33Ili7ULkl63TPazi0YDfPRSTYyJt+6Tf8eMQ07w2g+X5YUJaSZ4zlq09UcgKIYoqoKoiyWb+7rw+YbR4Blhf2fAAMAfojFQGvOh1sAAAAASUVORK5CYII="
  },
  {
    country_id: 92,
    country_code: "GU",
    country_name: "Guam",
    currency_default: "NUL",
    calling_code: 167,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjBFNzZFM0QxNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjBFNzZFM0MxNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iODAwMDg1MDRFMkQxOTdFNEIwOTkxMTdCQ0ZCNzg0NTYiIHN0UmVmOmRvY3VtZW50SUQ9IjgwMDA4NTA0RTJEMTk3RTRCMDk5MTE3QkNGQjc4NDU2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wSFE3QAAAhxJREFUeNq0lU1rE1EUhs+9dyaZTjqZVFPTRChElEJUqAGhHyAuqrSgLsSFiCsXXblwqSJuXApu3PgTRKU7Feqi+NVNQaulC0tqbUhqOyGTmSRNM8nce5z4AzKBSc/6npfnvLznXLI6eTUprGHXBiJDP4oI15SG8rIuJUX1fXh8RT9FxX5fpAVTM87W9cZP6Zgw3w2MvTo6D+2CTxMSIOivLSen7Nfz+58pHFpJAqS4Z0W7SNp7Xd4xABcUIEChiV3RETHBay0i9USNFFyMnK5tTlrrgqvIeqP2EQUPE9GNpO3c3dmBmBp1F9ZWtDMgH4Cf7bQHZEWvGLezjZfn+KOTpVsTzXStgHTQt9FHmnjITbiQsNjl878No174m5+bmRltQbWJQQ0hFOzy2LgepfEbViYWj0RF1BwN0dyuGEwA8gCGIBA1vJUvHthGJtYq/dgofMszuyQpUmekINSdKA2NbPz6nvn0cDGcWvxSuTmxWS7OutpFgnvBvPbIWvWdI5fSiuHw5WdPPr6YW1uqXRHoIIigCSHQKEfYvaXnD064d2K700/fbNMklY3AhvzfRCJK1ePJx1/vi7e4zM4S7Q9yifSckK7b6+2fvPOhkQVZZqFtzqkvckeaomt6+Q+lwHe9FE/Oi9uIN0bXy5cymMYIP8zLV2HRaSfnmAuU2336CrRsc90iKlmdujbMq7pbBSL1CZfXacRg+j8BBgALAtvzf7DSbgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 91,
    country_code: "GT",
    country_name: "Guatemala",
    currency_default: "GTQ",
    calling_code: 502,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjBFNzZFNDExNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjBFNzZFNDAxNzdCMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iODBCNDU1NDY3QzIxOTc2OTNGMUNENjM0NTMwOTgyQkUiIHN0UmVmOmRvY3VtZW50SUQ9IjgwQjQ1NTQ2N0MyMTk3NjkzRjFDRDYzNDUzMDk4MkJFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+T8VYKgAAAklJREFUeNpidF77kOn/v3+MjAxIgJHh/4Mv/0NV2NuspBhwgwNPPubsfyPKxcKMohuk/T8jAxMDw/9/jOh6/jMwMjH8Y/zPQAgwMv7/hykK1sfI8p/xL+N/JigXSRYizUAYMGLoBbv6P9Bx/4nRTxqAWMVEnNPQtREDiDL6719QgG44dfjAtQuMIO7ff//+EWE0I06zmZiAFjPMWbdg5rqFQMbreydyasN+/GO4cuNK7ZQ2oAg7GxvuGPjPhMeD3JxcDAx/lu5YziMg//nutFSbXU1RgqktZb+ZWLcf33rn8hFhQQ5cMQsMORY8PhLg4T1yYjMjK3OcqxMDg+L7PTeC+NRYnKR+Mf8y1TPbcmZXqK4NIyMuPzMy4UlTrMwMT9+95OBgBXLffeR49/URw+vp3N9WfvnBqqes++Hjhx+/GMgxGhhQ337+NVE1ev/u06tPv15dufiem+uvX8H5Z5yvXt05deWMopj0f0IpBCf4+OWTsqqRpqqGk7vKdyY+E5dlX9lSv/7VntVb8+rZs/io/C/fGPAkFXzR+P3nDyDZGFpw7+7j6CqPR88eHjq3a9LksitnrqT7xjEwcHz4+gmPy1gIpmpZVfWTp64s37r0zbt37H8ZC7IbjLVMvay9COYfFqb/wFKIQBbTVdDWzW6DsF2tXYnN6P9JyLqkAWA0/qOd0bQCLH8YmZmwlat/gaUQIYv/MTL9YWD5x8CMWYAApVg4GX4zMvz7j27Kf47//9gYWAi4699vTsZvrIwcLKgRBjQaCAECDAAobt+WaLkKAQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 254,
    country_code: "GG",
    country_name: "Guernsey",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 86,
    country_code: "GN",
    country_name: "Guinea",
    currency_default: "GNF",
    calling_code: 224,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2MEU3NkU0NDE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo2MEU3NkU0NTE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwRTc2RTQyMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjYwRTc2RTQzMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+S1dzKQAAAJpJREFUeNpiPCeo9pSBgUEKiD8zYAF/PzIyskr8+6u55tN/Nql/LED+f2zqmFl+M375xfFX4ZQjw9tvPMwMrL+wqgMCXiB+xgJlMCDR2MA/KM3EgB/8h2JC6ngJKUA3lBpqiPIBzcCoxaMWj1o8avGoxaMWD22LGamkBgxYoE0eXlxNH6hhf6GVPAueyh6mDtwSwqMObBdAgAEADjElH4U24o0AAAAASUVORK5CYII="
  },
  {
    country_id: 93,
    country_code: "GW",
    country_name: "Guinea-Bissau",
    currency_default: "XOF",
    calling_code: 245,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQTVBODZCRDE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQTVBODZCRTE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYwRTc2RTQ2MTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFBNUE4NkJDMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+NfA1TgAAAaZJREFUeNrslbtKA0EUhv+5uLlq1ChewBvElD6AhfgOvoKFjZVvYClYpLDVh7AQC59ASGOh4CUiGIKGBI2S7GVmPLMSBCvjbtTCA2f3LMPwzX8us6w8UrwHMIgvmNGA/8RNYfdF5dfbUt0KfNck+TR+wTh5q8c9hjyIA4zfUvx3wDaXCcYgwML4x8C8S6dH38E6bHGGHBOY5w72Ow3cKA8LwkGK8XA9TpPdIEmpfdQBKkpjgkuU2nV4pLcoE7hULgo8AZe+NR0uyzWDDCCkiQ62aodJbanziCOvRfNisEfwY4q3M5ME4/C0orobNJRQOc8x2hMsMrhlFEaZxMHQLJabVzhXnTC9O5kprDpZXFPabV3mSPfm3Yw5OR02rOZHV2w72Cc1FQLY90Yqj0P3GWd0gBVkYaVZd2it6juy0U4LdNzo4Hc4cEH13EqPE3gMa84zykEbdf1xUSnCDwllMEBqZRAP+In+AksyGdb61H9FQSSwSM1VI7AD1p+u7s6WZwweTBA2W5Pqbgc5buj/Xf3j4MEe97DPvfHd5qr2CDfhVEWEvwkwALDLl6s6AZ8RAAAAAElFTkSuQmCC"
  },
  {
    country_id: 94,
    country_code: "GY",
    country_name: "Guyana",
    currency_default: "GYD",
    calling_code: 592,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQTVBODZDMTE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQTVBODZDMjE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFBNUE4NkJGMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFBNUE4NkMwMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+jfKcDAAABN5JREFUeNq0ln1o1HUcx1+/e9jtbnO33eaUXDl1DqVRmYqohSZWKqhFBCb9WZhgiQhJkA+RFEmBf1RahBFSQU8gtc25ypGz6XyYJGqKc5t7OG+7290ebw939+v9u5umsZalfeEHP+73+X4/78/78/68v2e8XLW321nkYd+xQ0SazgLD4M4G1ziw2cE0+T+WMTuv2Hxqx2bWrp1Ng2eYvbX1VLXUEgydhIEQpGelgNiddxWE8R055hbCMCOP/btWM2/lE/p5GuVX0ygLtFLeWkO9vwb6m8GZLiAC4XRbW/X8dyBGMK/EdMQTvB1u5F36mb8cvt3pI//hlfq8BLqmUt2bxsFgN4faznEiIBDh8/oWFxO5akmmTjH+NRvGiZzppgsbxXYXl6PDbO4LUGF0sn4TfLhRERN1cMdcyFiqSmfRMHgPlZ0xfmi9wM8tR+gL1kGsR0x4U225zZYYp3OKk1Ex0Tbe5qDAcPK1qtvENcyZA7y/w82zKyS4SAz8CvQ9CLkrlGQBweh4fgwnKA34OdJ2kqaOWuhtgTQPeHwC4frbdtxIzEiI9Uy1p2GKyXfCIXYRYP7TsH+rj2mz0uBikFhoCIdeySwQkMfExiLMxAx+7fNS1h6ivLmWOv9RtemykttS4kzLUDbbDTZuSXx9xZXeraDpQnyub5AN/dc4nt7Fq1vdvPWCKM3SmF0aIhaLYiR6sSe0yZ2RApG9TKeWcLbHTXlogAr/RY5dO05/8Ixo7VNcTrIloya+viz6J9qcTDAcI/T7MUsG+eyNbFasVqKWOLFgAsNpiWtQGyIYYspmseGdAzmPSxdz6RiezE8RO6X+K1RerSQggY6Z2FqJkcEpFP02HbonHGG7ACxabOfjnV4KC+wkuhI3d08gpIdEt7xoGLvIIWNiCohbInUu4eJQgeT8T+ob6btVvUf0e7Fb3kZXl0nC+jDaCdZ4WTuNEeRxqX44qJeoeu3GJ1d0jJXUSpYnmieJ7tLOXjYl/HQVRfny9SzWPCdLDcSJt+vkJNWCE5cRxUzs1qneB0T1Ys35PDqHJlPTO47yej8VjV9w2V89emILpFNwZzhcNA/EWNXTTIXc7aXXXOzZMAHytO3SMLGhAUV1YwyocJdKz31EAtOoOebQGM2jIhilzF/P4dbP6QlJXEPh1B0gld+S2EwmNZksdbjF4e6OcLKfxUsTnN6Ry6yFssz6CLFTfTjUO0eGFOpbDePkcEjJ0XzKW3r1nKGq9RM53IURh1NchswlM+fGXN9iID7RWijnKQv1sVG0Bu/r573tbl58RmIZEJVNCswuUmXy84zFRCWSqoiNUs3u4bY6zgeOQ7c1u6rHkzumpzssWq2ySxzptIjWtZ1tfEWQNevgU9lm+hQh7pinl0fh/jmifhJHe1yUXmqgsvkbAu1yq8FgyrMt2/RN+Uui0YfGca+EkylUuzua2KZ+zVwIDbvSKVyg2wL5c08Jvzm9VAS6KG37neq2A9LQuT/NwGNRmHWTP9/eZWEctOWbWxLthAuz+OjN5Sx7/kn9XER1a5ZupAhlupvr2n4RhVdIDqXlwUkKbXd2LZZ4CsxV2zazft0SAt4Ye0828n19DYHOUxo7fyqJlUwKv6t/BF45+EF3zkP57Ks9RPMV64rrTVGY/OvjuKOqxlp/CDAALJ7xfKNmRxYAAAAASUVORK5CYII="
  },
  {
    country_id: 99,
    country_code: "HT",
    country_name: "Haiti",
    currency_default: "HTG",
    calling_code: 509,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBQTVBODZDNTE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBQTVBODZDNjE3N0IxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFBNUE4NkMzMTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFBNUE4NkM0MTc3QjExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vIrdngAAAb5JREFUeNrslT1IHFEQx39vbzeunkYvIRH8QgJBBAXNR5EQkIASREhlomArVulSWVjY2CmiWKuVBLGwEYuASIrAhigkhSFgkDsQDWjirbruebfrrFZW9wTJEXDgLcwyzO/NvP+8p6ifTlMAM2WVFQJsUCC7Af9TcenbrRikXPD8yBFZ3oUj8YNDsMWvE51mgmsGh7L2PF501dP4MMGRf8LaxjrVVbU8uN/Ez19/Wf2YglLZgNIBK1sTLOS9E971t9DzqgqP7/SOOiy875QkjSyu7LL6ISngIgHnJ5vxQPP+CKKSXexYluTWDjPz20wMDDI55fL29Q6WkSNO1PYoOD9YfU48D/XAAd5BkpfOMrPZewy39fOlO82juVJGnGn6rD+stHZQXF4jks2vWbNas2IlYJMMm1vbpN/8oH3MYWg9Tue4y+FTh9RSggZ8crkDiY7lz/et4olWxUqibnsBy88q+NpsURnG8Q0TK8yyrzweb4S0f/qNaytCjTPWBkeWMxQl+8fY5xK3pAMGWTnUUDrhyde/U4YRhNc/xzFJmikv5vTy3/NNRDhd6NUvkGiq1MVI39zV/9Uj4RYCfCbAAH4eks60LgqAAAAAAElFTkSuQmCC"
  },
  {
    country_id: 96,
    country_code: "HM",
    country_name: "Heard and Mc Donald Islands",
    currency_default: "NUL",
    calling_code: 672,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUZDNzdDNzMxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUZDNzdDNzIxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQUJFNDBERDA5OTRENzczODNGRTM3NEUxRkQ4MzI3NEUiIHN0UmVmOmRvY3VtZW50SUQ9IkFCRTQwREQwOTk0RDc3MzgzRkUzNzRFMUZEODMyNzRFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8znuKgAABHNJREFUeNrsU1tsFFUYPre57M7sZbZ76x3aQtGiiCAFDCYqilVLbSASbomKKMQHL2iCmkjCgz7pi5JgMMRo+mKCmgKJEjDFWiOptQLlEqy0lLK07HZ3Z3e7cz/j2ZaiENEn3/zmTPKf+c/8/3/+7/thzwtvL396ZY9ctuurs8c6jgPM7312wfN793Wta98wiK+N5eaEuZel4ktNgcuza9o7L49fmghIPJgCxqio62PXJmNhn+zlbYdOf6cu4jiDbO5zVv1yePeGe44+Mbfjvrqdhwcd18UaRUjwVIRfc4pvNEditZFP7OCeX7PjI7pf9Fsumg5RmHQiZYHWllkn+hOXRzMekUAA3FJoDjoYtTy1wHiu7YAUyv08sHF+4Mz+9Y+vaBxRr1bOina9+cD76xrjr6w5+tjDvROFxVw+XsaZtoWgPb3UXH5eQ+CDXe1N9f5crkAdQzd0CCwMLQwoHF/0ZDRpG9Qe1ZGWycX9PDswXrQUgjyE5KqqzFQmVswptYqNhAdDC89zcpia01Xbtuvzk/oaZfBiZtJwqENN3RRFDhOBgzpe2/yISqVeV1Bal8crQ74yGcyflzk34GteHHtxtXFhuKgEflu8SEWiGg52Up9KkQhd12UXd3keFYr2wPkUJiiVyj+zYckXH2888v2FwaGMz4tIm12jrGnesbJhddQEJ85+hpUaSVxy4OvTq+7/ceeWta9vinf/dKbr93dSTYOcKPefCzkmEvnkRD6XN6orFZHH5VGJdRgRNJbInDw/ppkWz+ESyW9t3bav0bNsaOC7/cd39KvvHRtZSrPLLpy6Wlv36LvdR3pHYnNr2+vkLUIucHKwJ2UZBKvZ/PrWBds2L/2hb7io2RxBrguVgHdoNL1nf7djA1nyImCj2ZPq0Q8PbfnmSlsq2Hk2HdWLAxP2PrG+M4Maw1Lv4b7WrZ+v6dUPxeuCvKtQywawkLea5lW0tdyJS+0uCY7JzsPjJfdWV8SChGBKmUwAjDS9mhSisqPHeeCRBEMzhxJZPKfaHB6rkogSCZimlUhkVdPxVEeqOcBRapd+dCBEjgMJAa47TaoLIbOZLl1KiYB1UhHz+zXKSGXOfNGsLJerapW7myqTdyijVzJDo6pX5MorguVTo8AepzQpUNMBS+n38S6ArHDM6ofAcQBG1/MwlEQOZza27VxN5js+2rR0YUMyra7b/mmhYLLQ4Gaw+wo8ZgshpOnWeFINh3x+WbRs56/H0A2rJCcKYmU+2y5tGT9+ryB5yHTj/hYT6WJdTbDn4PaVK+YmxtVbvOSGBQGUJP7icPbLQyfZyB789lT/6YQkC+7tQzuUSZuUR/xMbKzvU0MOwcwL73po96TGM1ZLWwgMwwmFPEOX0rGoD071EcLbRQYIQd2yclnNK3lkr0CpM9MxIiKTcFBjKTG8XprsgemJtCIDU8sLAiEI/ANYUg92kR/xxGJC/rMIhDAySMHwQRZ75tKMZV4Qrtsu+BdMHSAc44hVepNHozwC/xn+D30L/hBgAKvpBE5JTVQ7AAAAAElFTkSuQmCC"
  },
  {
    country_id: 97,
    country_code: "HN",
    country_name: "Honduras",
    currency_default: "HNL",
    calling_code: 504,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxRkM3N0M3QTE3N0MxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NEM5MDFFMjE3N0MxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFGQzc3Qzc4MTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjFGQzc3Qzc5MTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++ppqvgAAALNJREFUeNpiZHDfxUAbwMRAMzBqNP2MZvz///8AuPrS1Q/4NV+98RGf9H8c4Pj1D3J+e68++IxLwdM3P+T9924+8QqXAnwB8vXvf25mRji3ZuGd7z/+9qSpM8LEvvz5z83CyIhDOwseDyGbC3TA1x9/P3/7C3QIXJSHhZGcADlz66NmxMEbj7/iUvDi3U/tqIM7z77BpQCn0UCw4/Tr/3jB9lP4FNAw8TGOlnyjRuMFAAEGAEq7Jwn/ToVjAAAAAElFTkSuQmCC"
  },
  {
    country_id: 95,
    country_code: "HK",
    country_name: "Hong Kong",
    currency_default: "HKD",
    calling_code: 852,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTRDOTAxRTYxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTRDOTAxRTUxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iOEM1NEUwNEVGRUE1NkNERDAwQzk2MEExNjM3RDQ2OTEiIHN0UmVmOmRvY3VtZW50SUQ9IjhDNTRFMDRFRkVBNTZDREQwMEM5NjBBMTYzN0Q0NjkxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OzkpswAAAc9JREFUeNrEVUlLw0AUnknatGqhShGKIErVizfBsygVL+JFRFC8uJw9KOJycbnpz3ABF9qKeKwe3ZeT2NbisQoqNmm2mkyeY7RQEJO6FIePxzCZfPPlzfdesIGKNZiiMSNH4VtxbgJ/q5ry0tTpNJaUIoz/klpDSO3rVUOhjMdD8r7AahhfA3KgYuWuTgkgQ1FTTcxFww5Wz3QTYErOJm6Ex0cRQGtroSskd7bF64zFjand3dmJcb2jQ+c4cp9ifT60vS073crWpnZyLA6NaNaZsThWGRyWAUReyKys8fML4u5OOtgmAPA0Lbyo0ri6rDMM/EA1ioQILxDOhQf6iaJoo6Pg4F4mp1yRCJZlfWODRKPgdH7P1+/OdabTEGzFm1vg9RqNjcZ9qozBantQiSVKpmfYeMxtSoMfmI9FyH1+ydTVG3OzXp53rK3rTc0efxU3PQkNAWxu+JX5VH+llExKD09v5ltaVI4OhNSdfHur2znEhlqpKBfOz+hlPgNIh4fZQEDa36MWVOJxW2q7HsKy6PTCkRGMqysYH2NUjfT0osQ1Gw7/qhrzC4d8zBnqZamu9sXlsi1IbBTQmCAvFt787JsqfIr//ysoIvWrAAMA7mZQmc9OmukAAAAASUVORK5CYII="
  },
  {
    country_id: 100,
    country_code: "HU",
    country_name: "Hungary",
    currency_default: "HUF",
    calling_code: 36,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NEM5MDFFOTE3N0MxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NEM5MDFFQTE3N0MxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0QzkwMUU3MTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk0QzkwMUU4MTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+JU411wAAAFRJREFUeNpivKSs84lhAAALEPMOhMVMDAMERp7FjKcZuP4PiMX3kzMHxuL/QDBq8ajFw8pilvgd3QNTgDBUqQ+MjxmE5UcrieFtMagF8nkgLAYIMACetyMUbe9cBgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 107,
    country_code: "IS",
    country_name: "Iceland",
    currency_default: "ISK",
    calling_code: 354,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwODE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwOTE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk0QzkwMUVCMTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk0QzkwMUVDMTc3QzExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EtSEQQAAAU1JREFUeNpiZLCYzoAG/jMwPHg/dWtBFuup8/oOAqbGiqfOuNcd2TXnCIO8AAPRgImBZmDUaPoZzcJw5y2WFPL2zdvv/xi4mYE8RkaQ2P2XXxmev2L4/ZcEo8tmxWMx+t03dxvuv1fZgcy//0BiFXkuN82VGAQ5iTea8f/Hh1iEWZkZHr19uXH3i4ZaDlU1menTuBVEGAS5SXI14xURERxS/xnZOZgFBf///v3n7VtGMsL63/dvOEwGhjITMxMonv9///7/P5BPmtGM/1/cwBADB8jDty+27n/Z3sKhrCzd18ejKMogyMXwi5RorD7Nj0X43ffAOHNDNpZnNZUs7Kw8zs4LbzHc2vqAQYCHBKPbEudiTXwcSi0mot+BHmAGh0NLz847s3cyiAiTkq5VhLEYzcIkzMnE8BPkfWAgA4GSBPcdSbHRkm/kGQ0QYAC5z2/IQnQq8QAAAABJRU5ErkJggg=="
  },
  {
    country_id: 103,
    country_code: "IN",
    country_name: "India",
    currency_default: "INR",
    calling_code: 91,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 1,
    country_code: "ID",
    country_name: "Indonesia",
    currency_default: "IDR",
    calling_code: 62,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkxMDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkxMTE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBFMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBGMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+D76wCAAAAG9JREFUeNpiPCeo9pSBgUEKiD8z0AfwAvEzFiiDAYmmi+VMDAMERi0etZhmgOXP+w8DYzGbtOQ/KPsfHUP5H+Of9x/fAxkCQPyXThYzA/EHFmYBPmYkAXoB5tHsNGrxqMXUK7mgTR5eOjd9PgMEGACLNBM7Kx9mIgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 106,
    country_code: "IR",
    country_name: "Iran (Islamic Republic of)",
    currency_default: "IRR",
    calling_code: 98,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Mzc5RDMzQjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Mzc5RDMzQzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTEyMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzNzlEMzNBMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bVy5sQAAAL5JREFUeNrslDEOgkAQRf+QLUSUwsZ7eAoaOo7Aoew5AyWcwwNAsa0IWZRdnC3sXaPZxOxPJltN3uyfn6HD+bTCgyJ4UgD/P5hWlg+w4Bq49m93zA9AE5a65neByHP2zQDxxoU72B9fXcATA3XfQ1ujjIGIt6BdgqQonMDOO1YMVeMI0hpkDbjPUF33+3ClWQbB4LFtcWsaRFIitXZ/EC4nq1+SZYmVBzhWFUgI1/bBX6ovROFyBXAAf0VPAQYAymNH2XVfIfsAAAAASUVORK5CYII="
  },
  {
    country_id: 105,
    country_code: "IQ",
    country_name: "Iraq",
    currency_default: "IQD",
    calling_code: 964,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Mzc5RDMzRjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Mzc5RDM0MDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzNzlEMzNEMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzNzlEMzNFMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+A6ksKQAAANtJREFUeNpiPCeo9p9hAAATwwCBUYuHv8WM/4FgxAX1Z1I0LLizh+HJ1zdgNnJQPf76mmHDo+MMb39+IsaYzyT5+Oirawxy3KIMMtwiDOsfHmO4++k5XG7vs4sMxYf7GNbfP0yUWSzEWrrp0QmGzsurGTxkzRj6rqxjEPz7i8HOthgs13tpFcOWWzsZxJhZGR69vUu9OE4/0s9QdXYhAxcLB8OWhycYWJiYGTh4JRgufnoKlj/97h7DJzZuBlMFW4aPLOwM1z88Hk3VmD5GS5yjReaoxUPfYoAAAwDKmktuMenkLgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 101,
    country_code: "IE",
    country_name: "Ireland",
    currency_default: "EUR",
    calling_code: 353,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0Mzc5RDM0MzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0Mzc5RDM0NDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzNzlEMzQxMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQzNzlEMzQyMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fGQZ6wAAADBJREFUeNpiZJiVzIAb/E+dg0eWodkOjyQTA83AqNGjRo8aPWr0qNGjRtPOaIAAAwDApAPmE9cHWgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 255,
    country_code: "IM",
    country_name: "Isle Of Man",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 102,
    country_code: "IL",
    country_name: "Israel",
    currency_default: "ILS",
    calling_code: 972,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzVCNDMxQzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzVCNDMxRDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNUI0MzFBMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNUI0MzFCMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5PxNOAAAAaFJREFUeNrEVjtIA0EUnD3vEj9IiIlooSJYCmK0UAloIdhouhSinZBKIZ2dqIi1hZWFQRFBsJWUghaCkPhBBBsl0SIBTUhyBM391r0oClaXTcwNLHss3A0z8/a9I5QBNkDsm7uU2d5aZ15ZfLrLwxbFyKl8b5LvnTMosraXKPBY3eGWQAhBOqtwWU1YbXERKxqFrlM0OQUuYoE3I//SNQYWYlVkbBG6QRGJpiGpBk4fZMTYAlMcXL1HYMiNIss6NNMJSbSmxbLV5m0fXbxC7CIDV08zlme70egQsHHwjGyyiH6fG7e7w2gQiCWrYRJTi1BUg3qnzunW8cvPWSSaom2TZ/RD0WkFKFSUsSQSaKyoBPKrSmBf0JjlTkn4n4xNq8fDN8i9lrB5mCwTmlavRBIovJXgC8UR3xli56S2xAZjDk60Y97vKRdXePsRBiu46TEPAixvmT3rxpcDNS2uvxhkCnOyhsTRSH0bSL6oQWV5e10S35BY309yNQCzZZp5pjIKX69G1wmX4iqHhCzC47BnLHp7W2whJu8l3ZZfn08BBgBy6AUOH3COZgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 108,
    country_code: "IT",
    country_name: "Italy",
    currency_default: "EUR",
    calling_code: 39,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzVCNDMyMDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMzVCNDMyMTE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNUI0MzFFMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNUI0MzFGMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oQE2+QAAAJNJREFUeNpiZJjk9pSBgUEKiD8zYAM/PjHy8Ir9fZK47D8/OzcLUOQ/A3bA+O/nz79Xnf0Yftx7wMwiJIhLHS8QP2OBMhiQaGzgH5RmYsAP/kMxIXW8hBSgG0oNNUT5gGZg1OJRi0ctHrV41OJRi4e2xYxUUgMGLNAmDy/Opg/EsL/QSh5v0weqDgSY8agD2wUQYAAUKyFbP8LJRAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 44,
    country_code: "CI",
    country_name: "Ivory Coast",
    currency_default: "XOF",
    calling_code: 225,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQjc2MENDRjE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQjc2MENEMDE3NzUxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCNzYwQ0NEMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCNzYwQ0NFMTc3NTExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qvgkAAAAAGxJREFUeNpi/F7P8JSBgUEKiD8zYAH/vzMwMPJxMbAXPWZg5BRiwAd+/P3NILuqmOHNe6CRnHy4lPEC8TMWKIMBiaYH4GViGCAwavGoxaMWj1o8avGoxaMWD7zFLNAmDy+upg8tWh8guwACDACJtBIpqc7c2AAAAABJRU5ErkJggg=="
  },
  {
    country_id: 109,
    country_code: "JM",
    country_name: "Jamaica",
    currency_default: "JMD",
    calling_code: 876,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMzVCNDMyNDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREQ2NTU2ODE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEzNUI0MzIyMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEzNUI0MzIzMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KsC74wAAA+VJREFUeNqsVttPk2cY/30tVAVKC1SRo3jAAjswnXFL3NwfsFvNlgXn1OjFoomJxgsvjInxZtNh1HnIZHPOw1iyLWEXS1y2zIsly2KiMcZjQRGwA1pBaEsp7ffs9/b9KhQ/AhPf5Pf1OzzP+zzP7zm8NdYe8Q/905sPt8tEVUECAkDU5SUuQ4GXx9FcDIw6sWJ+DIb5EHLhfglabpXgr2ABiuakUJE/lpaerQMZg8FYLkIjOVhdGsGm+jA2LA/DkACD9ALmMPDtvRKcu+PD3/9qBirzE2lF8386oHTUUhEOMsKVjHBjXRib/CG4PNzsKWUYlaCHUnHCQyMR4GKgGGdv+9IMFLo0AzNxQMkYGKd0dWk0bbCpNow5hVQe4sdcogpwLl6A/W808qGSGKAiWX69ZgQfLwmjujCB7qgL10N5iKcc8DINMOwpdShKafBRxIWG4jj2rgriyJourFocQ84oBUyiRsu3XtQ6Uu8Hdn0KbGniUzHxHAP2NaAq0S6HdhEqes9fAr44CVy78Uxdr9fq6cAOYON6PvgUZ8QIMbkG2AUqeochCNOgXQ7hsljkfeuPwKFjwNXr2UzJZDT4IWeOsqj7CNaAdBMsQumHpB5AvrtcLG8frpM3P2+Qr371SbzdSH+TduKRpfOEcqcgKxqf3z8T7FQfpK4WcvZLbVBtlgpYDtCh6B1Dnt52aOc6IMn7lsFByPctkMZXp953WsMZFBVB9uyADCkDjGj0Lg081FD3Y52QCO/37YaULph+P4WcmfTlAKt9mEUmhi7hZ+5OaCP1GIkCofDM+31KrxZVQpoPktZOi2pGLPc01Qn+xu5adUCakwEtk3wMOXUYUrvkBaiuKIMcOsDNe6y89Y4blC5I2xWPrG32y1sssB9+LxLptOpA5TmodUzqHP8MsrTG3nBWO1WV63ba+hGQV80XvdC9yHYCh8DPAS++5kT7s8eNeTlmemgMJ5x4p3wYm+tC+GA5czKPsoNEPlEGJINASyvb6SgQeJA9dKRiIbCTA2T7J8Bc1ex9lkGPNtjW4eUA8eG3rkLMdZqo5inmdOgN1Bjt4rSKjTnwXgUdaAhh/VI6kJftQIoOnDwHNHOAdHTSsMrhtiYrwn5L2Ksn10/tXnyjIux2I9cJLHKPpqOcPLMz79S4jCcdWFMWweb6ED6sfTLuQAGxUDtw5lLmkOjTEyZD6S8dHpy+OR9/dDNCUlrtZoQzOCQyDigGomTg3fIItr3Sj3UTGbAcMFTR2OXQ5ZQ0pY4XOBYzOuqAUSmwqwFDjcO2dvscmrP8IzCRgawaWDYA4/0Ty4auTJPD2S67GvhPgAEAIEVx8Ck6yuQAAAAASUVORK5CYII="
  },
  {
    country_id: 111,
    country_code: "JP",
    country_name: "Japan",
    currency_default: "JPY",
    calling_code: 81,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREQ2NTU2QjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREQ2NTU2QzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJERDY1NTY5MTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJERDY1NTZBMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sXSjEQAAAbhJREFUeNrklt8rg1EYx79n3k2WrWGY363EkgtJSVntgguJi5UbbuTSrf/CHTeukDulUVJKCRciGVIYiYvNhqZmm9H2eo/nfWlcbW9sk5zT89TpfTqf59c552Wc8xsAlSQR5GYYSPyMwOGPRS5H5O+BeUKUNZhWmxtwYHqBxIWn00vicugbrbAMO1E1OpgdsBR9wYFjCF73IuQYtSghzZDAAwlHVVMPWrfmIZiNmQXvdfbBt72CIjTQSiO78vGFKTqEc1haHOg43FAF1qix8k7Nwp+E4gtUqbYiJjTi9mgT1+OTqnKtCny3sAyBImNpzHVkdb+0mhnw6/MTYsfXtKmZ4pJS9TnVvRgvF36IsejPwVyenCdrmf6cJdXPwEJBIfTNdYgjmMZc7vAQ8ustEPSGzNS4zNkLUUkzT4Fl5Fwcpf3dqhKj+jjttHXh1r1OnW1T0v/pBFNmCB6Ybe3oPNlVE476cywGw9i3D8DvWUM+de97s0G5QOKky2vtaNt2QVddmvkrk0sSfBNzCMy4EDu7oqaToG+wooKuzJqxETAhL/uPhPgYlT2BYDLiGyPyP9/jX/n1eRNgAFs4yk+Ai07FAAAAAElFTkSuQmCC"
  },
  {
    country_id: 256,
    country_code: "JE",
    country_name: "Jersey",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 110,
    country_code: "JO",
    country_name: "Jordan",
    currency_default: "JOD",
    calling_code: 962,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCREQ2NTU2RjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCREQ2NTU3MDE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJERDY1NTZEMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJERDY1NTZFMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+QGsVzQAAApVJREFUeNq8lM1rE1EUxc97M5mZhExNG6F2oTRtzKapdVWJICIuVCguigtB/AMKUlz0X9FaqQtB6S6IYkMKIoJIRRDUhSt14UcVTWLSNsl8ZJ53Mk7aGLtoMu2FSZj3ePzOOfe+YXf1w1/nawV91a5iP4uVDqaFJQRyZgUL9SJeWJv7A37Vn6pojOkJrqAqHDwkAYv1AlatvU2AvSYw/esN+tHAkJA8AcvmelPA8z1KoAX2F3wBwyTAoBY8MstYqFECAc9AB/h/AmqUQNAzsCO4TQCjFvydgaWNNeRiGpSp85AjGswva3AMY9dguVMKg1OtQdg2JD0Kid7dqX/fMJoJXNHiuEwidDWO8OwMkEwE5NgBBDljnEGYFpim0YKzdYJzcNOGsf4JHCoGpqcxNHcN4cyJXYH59hdhWbCqvzBy7wbGP7yEejQB6/f39hOOA0fmUOIp8MggfmTv483J03g7NonCUrY7MCUJAXKpKpAH+sEkyVvcqSROuzKFZMAuFCHqhhtXF1FTP4VlkhwJ8oE+2MUSWEj18m+doKhtQlU+NnXHzl7Aoesz6Js618NwkVquaGhsbMAof4YcixFIuDHAIeMy8YdKm2SUI3rxKtS5WeDU8a6Gq2OqhdOg3oWbjzdrAjKBEyW72ZdsMoTlM0egXJqAEn4H60EeTr0ewHXy7y85VMjhCAHdepLUsDgZRW6CuiLT7X58E6Br1211gP1IXaA7JvmUhjsEXBmL0JeEPBctwKad6CA96B28HejW01ENtzJR5McJqNBmiVxWGt6Qs94/mbIP9HuYT4WbDvNp6rFKm8WG5zAgYOty/OSjIuSIrR4ei3hA16ElAoW1OX42rH67nYnqK2m/hxR1OXiH/9YfAQYA1jgMxWJoPhoAAAAASUVORK5CYII="
  },
  {
    country_id: 122,
    country_code: "KZ",
    country_name: "Kazakhstan",
    currency_default: "KZT",
    calling_code: 7,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMzkyMjdBRTE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMzkyMjdBRjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJERDY1NTcxMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJERDY1NTcyMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+44EnowAAAkpJREFUeNq0lc9rE1EQx2fee7ub3cSyjbXWIgFFS7A9FC+iVEWk9KQI9qIYPHjyJBQE/wSxh4J48qpQwSL2UFA8tPESUC/tRVotKCX+SO2WpMlu9ufzvRybZCOYDLuw7M77MPOdH4vwugC9MQI9M4lWIKAQAWCX0SaxF9OPcsZ7CNPdRTMKYZYVB7ACnLV348A14AmZGdbl9Q8psjpX37rjG8GRxoGWFgE3EOvDrKRAWAxNn6cA7Y50ZqB3mFiDtALIG968KWLDJJWriUJOX2Hov3AuvnQuWJEJ6HRAB0Bdrnqt1RDx6hDpp7TV+8nFMUO26VFS3giGlp3zQKIGvW2PEZdLdFXoyGlTyFQTiRNH4EeVLeAIkXpC+d5HPPFSlVwa1yEGumfV9WO0JJtwn4XpW0b+wYH5Vf/4G3dcKCNYy+7pT97ITGrhhp6HsD++jNpH/+S38BBA0PSVOpxeS3x4WJ2+V75T8LIKBvPOxK8oedtYeVybAq7GoRmKYeE6eoDB/jKSnQV7aoT+vptcemZfmq1eN9G2eCKn59+5Y6/sSaBWHFoBPynUFOhmQ9+LUk9qV86omxPqepZtbQaZc+qazbW5vZu74UGg2zFyM+FXCs3tqK9V5xEg1p9wYMkZ7ic7GfpzVP3sAz63LxeDDLAfjcq3j1pDf1Jb+yJGJtKBlJvlBlID2NvlxtPqNJAqhINyXjpxJZoDfg2GLDlgftwWk/PtygfZS7wjV8op9nUS6wEwlystRvF/1pO4a3LvQHe5vf8V9Mj+CjAATRXoTFoxM8YAAAAASUVORK5CYII="
  },
  {
    country_id: 112,
    country_code: "KE",
    country_name: "Kenya",
    currency_default: "KES",
    calling_code: 254,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGMzkyMjdCMjE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGMzkyMjdCMzE3ODAxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkYzOTIyN0IwMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkYzOTIyN0IxMTc4MDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+4JAoOgAAAoJJREFUeNq8Vs9LG1EQ/jb74o8kdWOktWuKSamUtoqnekmRQA71UKjkIJSeEqgtmEIv/hXBgz2mpRcRkh6D1IMVSi7iIVBBPFRarIamIsWsRpq4yeY5m24llZa89JCFb9/MvmG+nXkzOysB+EYYIBTRnusSIS/R7dhS2nkVhYllWYYkSahWq3/dZ4zV13/tXySGRcybQVVVHolEznXJwm89Go1yv9/PRXxZnGLEJlKpFH8+O1uXX4+N8cVA4BdpLMbT6bQoaZ2Y9fp8TfNipvgwl8PbpSU8mJnB1NwcnoyPA4qCd2truBsOI5VM1m09fj845019si/r60LVYLfbodE5VohohPRdtxvM48ELki8XCng4P49X8Tgqui7kj+WDQeFSdBD56v4+nCSrNhsljWOP5I/T0wh5vTimwhKJtk68u70tFrG1viQ8JgQyGVTpRfIkv9E0eAkOkk8Fg2AdLXT9AWGL8J3QPzwM3tmJ/PIyNkk3CC6rcoSIW+l63rDaKFpOZ95IJLXgi1UEDU8I3YRb5vmaUWezqBG5+a29Y0Vg2oj6Y1f7BoTf0ikzxH4eQTk5ghwKwd7TA3VlBc8cLlx3eaAbVfGIb25lhQxtkozqlV5Mvf+AnfsTdKYcEqV6kPaCiwtwhSchH/xAjRtixLcXJoQMy0YZ1xQfPN4R3PAAiRwltmBDnKpus7aKYiKBr4ef4WAOIX8SHglOpzIwOjiKQtcpcjufkCzdg6PGMNmdgTo0hP6SCxt7G0CX6HR6Kj4WFUlBSS9Bd+tgGj2o0TTqox4v2OHscELjWgtjsQXi894x+0a2ZOPCc0Hilvr4D8fGfzZwwwekaEXczl+f4pkAAwBDiPf/eEPUkQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 115,
    country_code: "KI",
    country_name: "Kiribati",
    currency_default: "AUD",
    calling_code: 686,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzJDQkU2RjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzJDQkU3MDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MkNCRTZEMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3MkNCRTZFMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pmFxjgAAAoFJREFUeNrslE9IFFEcx3+/N292dmf/NLppIWJpCoKVCcUWIltqVlAQdOlWdOkWnQsEr12DLnXp0rlDkl7yH5HQHxLLKNTWrDZaXXd219kdZ957vbFT2k6HrVtfHrzffHjf7/B+82NwtP6QzhyoJI6izsGAgEXNtRVCXPWgwyOMpxX8roIiKvksRaV1jgU+cpBxR+yzw5eyIUaJwcsWL00GWUojLgBWjA5zh64TVW4VowOCpjRnSYUa0K9Y67O0cD+CMzoJcukGXtEnY3Eq3uEXjd7CnGIz4tINcEEFqmrCy5USftEU/CXNBeIYjnG1oHe5XhNfq/m7EbpCweD+1j9Fl9EJ8NpBs/6irRYpEOEmLbWRrd7YQUsKBIVfdDk3rzJKtbh8cO0sg6IsFAj/JGXbpG1mrBeUrxBSorI7VjYfTcJKc8Z6FQsyQ7Zru0uSsuJg/vYdnHiaGpkQnO852RM72weEFB+PeYTxxp5kzWA3dDuwNg7fxkBw2J2E2l6YCZo3ny2PjQvY5trMwb4eHBpdGGg1jmoFEOKFExtNFTmHgeZIYpO85NGRNyU7jWcS+rH9puz983fG8HSJxNmpTj1Bi791STIyb2L/9QeLmXUwDDkILLfW0RAjBN9+Nn8hiLMLeYY13sjwtQMtUe/MF9PH1bJTp9cuHG5uMBY/ZzkXrU3xdKYghGioj1VJltImdl2+B1y0743L1859XKEK8b6Dy6sk3v3ml1dLtjs980lwkehs2lUbljSTs6okekhFo//W6e628yfaEfHR5IeHT+bkjc4db6+SDE+9RzgyBGYJyhvelGvyX6F7Ra5qYugU9IC3tij0FwiBf6b/0Vv0Q4ABABynxPRdAJihAAAAAElFTkSuQmCC"
  },
  {
    country_id: 236,
    country_code: "XK",
    country_name: "Kosovo",
    currency_default: "EUR",
    calling_code: 383,
    flag: null
  },
  {
    country_id: 120,
    country_code: "KW",
    country_name: "Kuwait",
    currency_default: "KWD",
    calling_code: 965,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUZGOTk4RTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUZGOTk4RjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1RkY5OThDMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU1RkY5OThEMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rNTKhQAAAX1JREFUeNrElktLw0AUhc8kadMmBhcttN1Y3IkguBC1goKPRRHxN4jiThR0r4KI/82NOxdaEZWKD9Qi9pXX9aatIhQhixm9cDfJJGc+zpnLGJgcrWJz1UExD9w+Al4AaAKqK1IgWClgfQVYngHqTeC5BuiaUmGdew+eb+L0HLh5AEaKwHAB+OAN+EwvhDLid27n+4mVBjaYvjwNNNvA05sS+n7hryqNdTcwlFPi/e/CUdk978sl4KoCNFrdL5QL90qbG8fS/q5vhiAKQvFnwiZ3q1YnDFoEScyxUkPJJF7dhuitFzI6dlx9CqWmWsM/VXxhyWfZiLPIDT1QJkud8SopXLGEF3UH4dpOcGcmKSBSf5wMfn1g57CVyqD6UuGFnvrJtZAYwJGdx1TCwkXQRp1TrUOo8zj6eSQYUbbZ0jO/yQkUUkX7hOeZ8phFJ5jykikbkin7LgIR0SF7uZ3O8qAgXIduh1LlPcSYTdj3J3bBmepQuuxloIzyZ30KMABBFnf5qa4SdQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 113,
    country_code: "KG",
    country_name: "Kyrgyzstan",
    currency_default: "KGS",
    calling_code: 996,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUZGOTk5MjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUZGOTk5MzE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1RkY5OTkwMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU1RkY5OTkxMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZagutAAAAeJJREFUeNq0lc1qFEEUhb/bVT1Dz2gkShZRUQP+LDRushNXvoDuBcGFa0EXbnwIX0BcKAr6Ej6AgpsoYiAoKgnqxskkM9PVdb3V4nKmZwan6UUXRZ976px7bsnO8jqLefyxpTWR7L/jqkafZX4RlI2uN/ipWFcwEgRyxU3Huqk6BBgIVv2QEmFfUplCyUnLCVo34I4MWjhesV7KpWDf+t7z0fPVpQJtReeDDjXu+SA3DzgV+OGsmFwu2XH6vOCDp5wEMFFlE3e1klv7xk5fdBiKFdNXhekgt/ucrChlLkHsvKbmxcBh5YuTtaBPO0SVa0N6wopi9O0cYSzGeNZRjKxcKPnsWFZOV3QjS8pq5Gjkk5eNkiJSyeystX5bqTH0ZcFKJQ97tNFHXXYzuT5INkht9cxaZ5r6wZrhXGAAW16ujGRjyHdHL+Ns0HeefobT2VnbzgG8zblayt2+Pu7ogyMJqFC50+enYzNPxnZ0rg6x4O06fVaYb3J/j1aKjNzbM4f1SZFauzUpMxLO3Bgb9L+RMaNO1JGxbjHpN72+yfnmUtzHR6Yp6PZbG8rUfIalrzUVMxHKGjRnQhSb0kg9JYxdN1maJgn/ljTgJuhph7VX/IxDNcawqKvg1+/tBV1gfwQYAP8yvkoLLzQ/AAAAAElFTkSuQmCC"
  },
  {
    country_id: 123,
    country_code: "LA",
    country_name: "Lao People's Democratic Republic",
    currency_default: "LAK",
    calling_code: 856,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTY0MkY2OTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTY0MkY2QTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU1RkY5OTk0MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxNjQyRjY4MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vPM0fwAAAXBJREFUeNpiPCeoxkAbwMRAMzBqNBpgMRJ3AlKC/35hlWZkZGBgZv7w+M2/bz8ltOUYmZieX33IxMYqIC/K8Pfv///o6t8zsSGMhgqx8OCwmpnhznN+LZX2niR/aw0mRobtJ++Ulc57c/4ug6o0w5+/6OqRnMjIoJGB00tANz99q6Ald3l/Kw8Hwjm//v7Tc66+efYOg5wow7//ZIU10FF//zaVByObCwRszEwd1eEMzEwMv/6QG43ffjDLiztZamDKOJir8ShLMnz5Qa7R/0FBwgiKSoygYmIEif//T67R3Bx/Hr4+fPoWpsyRM3c+33vBwMNJrtHA5MHA0NCz7g+G66o71jD8/M3AzkKE0UysWBAjC4OS9I2T92TtalafffAFGPgMDJsvP5F3rr944DqDigwo7aJpQQ40SOLj/P8XR/Jj/M/M9P3BS4a//yUNlZiYGJ9euAdMcByK4kz//v/H8M13RmaE3tFCdTgYDRBgAIXydkRRgS1WAAAAAElFTkSuQmCC"
  },
  {
    country_id: 132,
    country_code: "LV",
    country_name: "Latvia",
    currency_default: "LVL",
    calling_code: 371,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTY0MkY2RDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTY0MkY2RTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxNjQyRjZCMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxNjQyRjZDMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+92Hw/QAAAF1JREFUeNpibBNT/sQwAIAFiHkHwmImhgECoxbTL3F9f/d+YCzml5MZEIsZf37+8n9ALP4PBCMrcf368nVgLJ6sbzUwFn989GRgLOYUEhwtMkctplkL5PNAWAwQYABbtBShZM+mNQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 124,
    country_code: "LB",
    country_name: "Lebanon",
    currency_default: "LBP",
    calling_code: 961,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5MTY0MkY3MTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5MTY0MkY3MjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxNjQyRjZGMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxNjQyRjcwMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KNMpfwAAAapJREFUeNrsVd0rg1EY/x2bNWab0aLEBWIkn+XChVJSSv4AKXfyH7hyq5SvcqeUK5I7VzIpLnxESzOTYhOab5t3693hffc+TnPP+5Zxs1+dntM5T8/v+TjPc1iqpZTwD8jBPyFL/GdgWvRFEtKuT53AcnIBmwNjO1OotpVgqH0QkDmIx0UYJr28cRCRRAbhjZ4RFlsJS13U65uhGKlGTUiGUx1O3GF0exJ19gaUMSe8vlWEX68yX+MJ/xIu4xHcJO5FtjR4imsxf74GRVMN2TEbUQ5Ew0ioHLL6DpclX5TUgsBTEIHbAzS6qjDi6c8M8fLFOnyPpyjKKwQXDihKEg6rExXuepzEQuCpD1iFM79K7I9eQjFb8fB0BkkQVJd3ICSiJVIR4G+wiztJkX+feP8xCL8gne6ZwLGQs3uzcLjrMN42nK65U6R+M3KEgcpunZ2ps504aRQiOb2fu9ogzHsIC00UlK7TZymxDpMRklSuq50YJeWfB4h4vRARwcSwFd7FM4+hs7QZ06crqCgowXBNHywWx1ePKBzQhD5j3w4Qlv0Ws8SZwqcAAwBwcmoqHHZSowAAAABJRU5ErkJggg=="
  },
  {
    country_id: 129,
    country_code: "LS",
    country_name: "Lesotho",
    currency_default: "LSL",
    calling_code: 266,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMDVDQzk4MDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMDVDQzk4MTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNUNDOTdFMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwNUNDOTdGMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0nsttgAAARhJREFUeNrslc9Kw0AQxr9Nd/uHNFSQHEqoKCrWIsV3EHydPEz1Fih4EfIMOXnOQTA3D1FQ6ik2K0hJ6o6rB8/ZHCyUfDDsZWd+sx+zuxz7c8IGZGFDasDbD2ZLWUi9OlUThBBotYDZ7ApluYbv+2CMoShKE+4HHzjCuNvnp0ck93dQSmHxconDowl6HbM6vI5Nijg+V9An/tKedWpZXQvseR7iOEae53Bd9/+GKwxDpGmKLMsQBEG96SIiSQaKoog45z/P7F/oRshQ0gi8zN7pYDgip92j6fGEzk/OaKfbpz13SG+vCyMwL9S6kjNti0PYXQS3N0iSB0gpYel7Zds2Tsdj9HcHv/uq1mO4vmh+pwa8XeBvAQYA1mkQ97LOB/MAAAAASUVORK5CYII="
  },
  {
    country_id: 128,
    country_code: "LR",
    country_name: "Liberia",
    currency_default: "LRD",
    calling_code: 231,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMDVDQzk4NDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMDVDQzk4NTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNUNDOTgyMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwNUNDOTgzMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+G0pyRwAAAdFJREFUeNrklM9LVFEUxz/3vZlyZnyKNNXkGIhDmZtEaKEEZuBiFJfSJpyCgpYGEW1cuHLTP1ETCOqiGYJxIUgMtBpoIUVgPxQdTcksnljjNPOeZ17TIghqcfEtOnDfu++eCx/O93zPU5wf2gAsfkWlAqYJSv1cEpnVIgMHJdYx0BUBWa3ergZxHCiVIdQgGYFU5VuOw73dBIIBGl1XI1ipPUzDYn0LvpVI3btJemYeVopw5qTcMOl4niYilyOgEVytova/k7yWpL0txsMHt+hKnGXp5Rtmc3lJO3xJZ6nEopS0gkVLt/yDyqddJqbuEhGZ798eZezOJG5N2tBxPtxIkcDmPUobWNE5bAvBYvk1T7KP6O/p4m1xi8ErKYi2iL4hXlwf4VJLE3saK1bialsMZUVbTzHY183cTI7kyFWBb7OcL4AAV9YWaUdvKOIDtjwtz9UfdzxpPWefaJZsbXxcFnovcjncwGetPT4WrG+ln22nwaiNVX1sTMM7tp/mKIu1dnX2+J29b//2A/lDxF0HmWwcnVKLc/8Kpg41dEr9Sl3AjwhYQ/2+gP9Zau0Vf32c8afiAsqfis9NP/vPerw2Om75UvESiU15Nx41+FCAAQBN8o5alKABbgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 133,
    country_code: "LY",
    country_name: "Libyan Arab Jamahiriya",
    currency_default: "NUL",
    calling_code: 218,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMDVDQzk4ODE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDA0MjA0QzE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwNUNDOTg2MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwNUNDOTg3MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oNTByAAAACVJREFUeNpiZJhqwEAbwMRAMzBq9KjRo0aPGj1q9KjRtDMaIMAADHgA7Vx8bugAAAAASUVORK5CYII="
  },
  {
    country_id: 126,
    country_code: "LI",
    country_name: "Liechtenstein",
    currency_default: "CHF",
    calling_code: 423,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMDA0MjA0RjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDA0MjA1MDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwMDQyMDREMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUwMDQyMDRFMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aIartAAAARBJREFUeNpiZNCuZ6ANYGKgGYAZzfSP4Q8bww9mhq+MdkrXpXlfMXxgZ/jOwcD8n2yjWaD0T0525k+V/ruEuL5fvv/fQuqfig/TpP12V+6oMPB8pczor1yqGje89e79ZBD4+e27vBSHjdb7C4+uX7mswcDDyMDwnwKjmX5+/iIgIi4kJ8umqcbHzsbA+e/7p1985BmKajTf94dvZIsX60lwXn736jsXN5OEpMrWG6YMPD/INp0RmviY2RiYWBieMTF8+szA9JvhPyMDGx+DNBsD2zeGv6Snon8/Ea7m/vOV4f9/BhFmBjE2BkZWoMj/f98Y/n1k/MVIhnu/gk1gPCeoNnSzzKjRo0aPGk0UAAgwAEdbUI8xqJtmAAAAAElFTkSuQmCC"
  },
  {
    country_id: 130,
    country_code: "LT",
    country_name: "Lithuania",
    currency_default: "LTL",
    calling_code: 370,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMDA0MjA1MzE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMDA0MjA1NDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwMDQyMDUxMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUwMDQyMDUyMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dE0CWQAAADFJREFUeNpi/LtTmIE2gImBZmDU6GFhNAvzRsPRABk1GjdgPKiuOxogo0YPiNEAAQYAG3sD7LiMQpYAAAAASUVORK5CYII="
  },
  {
    country_id: 131,
    country_code: "LU",
    country_name: "Luxembourg",
    currency_default: "EUR",
    calling_code: 352,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMDQ3NDU2MjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMDQ3NDU2MzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUwMDQyMDU1MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUwMDQyMDU2MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+HeS18gAAADFJREFUeNpifK+ty0AbwMRAMzBq9LAwmvH///+jATJqNG7Awrjk3miAjBo9IEYDBBgAMnEF8ALV3YIAAAAASUVORK5CYII="
  },
  {
    country_id: 144,
    country_code: "MO",
    country_name: "Macau",
    currency_default: "NUL",
    calling_code: 853,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjA0NzQ1NjcxNzgyMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjA0NzQ1NjYxNzgyMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMDExNThCNDE1MTY2Nzc5NUQ5Rjc0M0UxN0MxOUIxM0MiIHN0UmVmOmRvY3VtZW50SUQ9IjAxMTU4QjQxNTE2Njc3OTVEOUY3NDNFMTdDMTlCMTNDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bj2DXgAAApBJREFUeNq0lU9IFFEcx3/vzZuZnWXXdQtX1z/bWuimGIFU0EZUqEVgEFRQF0+JVws6ZRGBBUGnTh0CIfJQhzynsUFiKFaHrBC2XDVXd7F1c2dnZ3fnzeuNXoIabc0ec3j8ePP5fX+/933vIXgI/2ngklajtW+70RypA8uVgMebEw2AAoApHKmTzza6JBAhb0UQ+ke0AbVueb/PCau4p4k8Og6CIda55NZKGaiwVTQXxQBW4bBP7GmSABe7RrI1A6qW0tqCuLtZYRmTJ+bakS3AziEMnKIUcpHZLNPyBYbJxd3dPjnwePp+Bv2g1Ah6iF6ks2oRBGCsJNVF8Mv4VqsIOKenaW/TlYH2B/eOXnvSPuhV/HrS6G0Wz9c7mQbMBkBs0RLMZPVLEV3LWxVUlFWuh/eWh5a1BP/v6ptMgffCBXZse9UMkCntlEI3DtwO14fHFycoozw8Gh+tFqpuHrt+wn/O0B2WTxgqsdcatPhaJi5MKKKiF9WR2Ku2+g6FyC++vAy66xp9jXxJ31jfndF+Vl6qahGW1KVoaoZPHaKrs6ETMXNRTZzc07bOBRM+rk4xe4AAZ2y9g4G8TYxLTFIM1wpNDX0dGpkb3qGU0wKdTIz3T96NxCMqVu3k2W+jCV63J+RuGFt4/W7+/TJOz2SiyGQfUp8DjhqCCE8ccOxK5hImYn/cSbJBPXF1YcWbOVV1mtK8pMa8gseK4kKtw18h+6ez0dlczARm5xC0yaWqwUFfa1fwcrj6UJnTKSCcz9Op75+ex54Ozj3jibhHeX1bQq/RwQHtNR37KppFQuZXvg3HI8vppAUltqb+OzR3LTd0du0KZFZLQAGQN4Ju1utfzo7lAfdvwe19ZUoaPwUYAKgQ8M86ceGrAAAAAElFTkSuQmCC"
  },
  {
    country_id: 140,
    country_code: "MK",
    country_name: "Macedonia",
    currency_default: "MKD",
    calling_code: 389,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyMDQ3NDU2QTE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyMDQ3NDU2QjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwNDc0NTY4MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwNDc0NTY5MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+x/HZMgAABhZJREFUeNpsVmtsFFUYPXdmdmdn9tHdblsoj7KFgkL5QSQRYggmihhNDCIgGAjgKyo/1BiRP5pGEzRKMPERNeIPgWCCIcZAsDwSEowxMSYkgElNoRRoaaGlu9t9zaMzc/3unW0owqQ3nex9fN853znfHebdaC4VTujofyeFiXEFRrsH+XDc8wQ2A+hvwY9FJJZOgE8Adr+K3q0ZeEUGNXGfTWILDeuKCtXgyH1WQnatA03NBMmmF2uIL5mQwQtndejNPrQUB/fvPkPROZxBFTYdklzpgtG8fUmDe0OB1hTcG1MF/CqDfVNFwzIXcz8vwVzuAg6DUiS0KDMYDzlY1J1H27tleHkF9jVVbhQZT81eJCNQyt8jdMZ1Fb7FwrVTUWo0N6jAvalg5hsVLD4xBvMRmzYzlM5Eofy7MYPeLWkUDpsAUTF7TwGdx/OItfuo9mmSTqbcjcIilLxCp9NcrVf7Hy1hcrXLGiItARYeKSD3TQFIByj+YuLStjR61megRVt8jB2LIX88hswhG9NetpBeU8WSXgd9W9O4ddCElggQnR6AU/kVk8MdIJTEkkrsOldVKEZYW4FyYpRQklZa1lmYf5gCqj7KJ03c3GcifzSGgJLVZwRg53IPcoEoENRT/cTmzGoHs3ZVEF9pYbzbxOXtaTgjqhRe4FAEj2HxmTy0TIALK7LwK6Gw7H4NWkOAju+LyDxfRe3vGAY/TqDQrdM+BfpMX+qEU8KSJ/EiAhpzfVrAkP9Nl4uzGyzM7ipjyflRXN2Vwq0DJgRD7oiCYncUapLLegtKLQravN5Cbm9JlqdvWxa3fzLgE0sxQqgYniwBr2tQs4kqgVjUjkW5zEjSSotGfzYxdsTAtNeqmP56FakVLga6EogmAwQW7Z5g0LOUrM/Q8dU4Eg+7GPqCaP06Dt9VEG0id5AABUteSQEnUJPBWf+OHPfpR2+cwRuj/wUFQY3BpyEWeiUGi4iJIMCMrVUwlyO7zkbDs1QbOqByJoKRgwZ4hGF4vwkXVBJ4kg0BQmhCpaFlaGQDWQqVrMp4JctpHbgbBgvIGqJRcFK+sIlfVGS2Xp7hNqFvWE7131uG26PJwNHOCQx9kET+RAxNL9iINNLBxIiov2KQGGM8HCRANc4lq5QbQam7gSmUEb37NFiEI9CY9CljgfRlYCtQxKZJawWT9WJhqWhONSgoIdLSPEQsg0IGFUOcO+l/bYCy9cdDSj2BbiykXdAtkAvbWI5G6zla19bgUlMok7CST7myrdZ+j8DuU6UuenZkKB9quxGiOlVHTAEFvZJmkZB4F1T/iU7O6sYXyhZZMj30pTsatqPmDTW0vklBqUtd3Zmk7gPMfK9KaXMM7Q2FlNtD7XChj+FvTYwcoJpTqkJc0qoEQLhFqF0ky2losdydhiwWiSbhUIMQk5knbLR9WIaxwMPAR0nc+DIhD3PzKvmevEv02sMkvOYAvS+l0fpKDblPS5jxdgXXu1LIH9PlufpsH5HIHSvVcdYDBuENYhMqYZtFvxaw8NRtOXdhWRMGKajR5pFSSVBkocbnbGQ3OdDbQlQGARj+IY7zS5tlr3/g6Cg6T+aRftyh8qjybGGlyfarCZEILwty06sctGyxkN1WlaK59lYaQxRQ0QPEOzzJhk/XX4zeVWrtispl4Oq5iKylSb+7wwourmoi9FW07ysitdqS98AIWa1wUpcABQOaQNjwqIuW7RaaNtdIcR5qfxm4/GoDShejMFp96UNev6aF5fRZvhQPIz3E5vgo/REVQpVrhMg0m2pP6MfPRtHxXQmZjVUaNvKHDFn/4mkd2oL9RTQ+7YA1CTMrGNqdxuDuhBREYq4naz31XhaHG/OJ3nhoLVH/qY+kk2ofn+fRva3hnycbMWtnFLO6KmjcXJWxCqd0KNlNFgUNqCFE0bsmg/73UyGSeX4ohqkfFTxsreLKlI+4adp8WfepwkE9WbFOo+vw2idJ9DyTgXMhSooNkFlLvdAfVcuCqiv09WEPqTDneLKzcO8+nz5kCaHgGKHhtdAeMUIfpVtHXpPxuz99xBmiPZoJD4XTMVx8LIJ2sl16tYv/BBgAT2nbpDC92HAAAAAASUVORK5CYII="
  },
  {
    country_id: 138,
    country_code: "MG",
    country_name: "Madagascar",
    currency_default: "MGA",
    calling_code: 261,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTdFNEQ0RjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTdFNEQ1MDE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIwNDc0NTZDMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5N0U0RDRFMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9rDjCQAAAKdJREFUeNpi/P///1MGBgYpIP7MgAP8+/6D4YqOHcPPe/cZWASFGCgEvED8jAXKYECi6QF4mRgGCIxaPGoxzQALMYoYgZjv61+G30DI/OUP/Sz+D8RvBFgZvr9hZ2AVYqOfxT+AqkLa9Rgefpdg4GfjpaOPgWH9SYKDgeE3F8NHFk46xjEorD//ZmD4CcSsv0ez06jFoxbjzE6foa2Pz/RqfYDsAggwAPr+KDn2/fllAAAAAElFTkSuQmCC"
  },
  {
    country_id: 152,
    country_code: "MW",
    country_name: "Malawi",
    currency_default: "MWK",
    calling_code: 265,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTdFNEQ1MzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTdFNEQ1NDE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5N0U0RDUxMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5N0U0RDUyMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+taggYQAAAP1JREFUeNpiZCAO8DAy8TEy/2dg+Pr/36f/f4nRwkhQhTATix8bnz4LpxAjM1D1x///Lv75vuHXx9f//lBktAELZz2X+Jv/f+f9ePvm318mBgZ+JuYEdiE5Jtamby9P/fnGQB5QZ2Y/IKCcwCEEZNuzcldziQORCxsvkBvOLnBYQAXoFTKNns8rW8olCmTM4JX5L6r/V0T/j4j+fzGDhXxyQMFsTpElfHLMuLXjlLJm5ZZlYm389rKESzSfU+zwn693//26/+/Xg7+/XFl52RmZur+9Mmbh/MfAABTEHtYXBdUZaAOYGGgGRo0eFkazJPXyjQbIqNEDYjRAgAEAy3xInECTax0AAAAASUVORK5CYII="
  },
  {
    country_id: 4,
    country_code: "MY",
    country_name: "Malaysia",
    currency_default: "MYR",
    calling_code: 60,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1OTdFNEQ1NzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1OTdFNEQ1ODE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU5N0U0RDU1MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjU5N0U0RDU2MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WpzGZAAAA1RJREFUeNrElF1oW2UYx38n5zTn5Lvt+pE13XLhoNPNaZirUqc4BTdBBcdAwSlMFId3YxdjoHgnCIpXohcieDFwYAteCFZFhcKYFVfHKhq3Nfsg6dIk2CZtkybnY8/JWTtEbaMIeeDl5YX3ff7P//9/3kdhz2gWiLAaiuPthT5YNiC0DB0mBGX3r4Dt429DixJayfP9ucMk5Vhk/dBkDaydfBZUgzC7mYf3j/PC41+RySa4cCnJmfQOSgtdUkRdwFXvriYFOYr3tlxG6QyQOD1GTDcxmqnXB66sMW7owrSfd06+xfEXR3n/1DNMnr+HuapOh18AFRvqOnpkgYalYdcCYIgSjqhQX0HRQkQOPo1fsvpbYHxb4twgrz3/IcePjXLgyBuMnzoCW6+CXqezN8/Ijinu7JtlXlS5kE1yrRinVvd7zHt6sCtzpEM6SbNOUVkfWBGPy03GKwY+8c/6/Am++3Enj748BtunhaRKv17l/rt/5s0nT5O6N0P64gDvffkU354b5nKpF9sFXrIIb1KZeXuQLt3GRG2R8XKIgaFfoBc+ndwLAZHQ50rrJxRuMLItTWp3BsTaoVSOAzemODu1Rwq71WyOg6IoqLEYPkPBh69FYK3B4lK4mTgZK4jfHZ6nmsV8OcaVolS0JPc20dwz+T6KlRiolve+qwt7Kc/MzqFmVxdoVWq38hsJfvjgWYZFTmVkQpKKUX15DEslLt6+8tDXPLj9N9K5BB9PPMavV7ZRNqVAVaReaBCJG1z/7BGiQdUVoEVgt7lKPXR3Fyl9cYjpmTj7jn5EMS9M++cIR+expQAVm55IhcJilFrNEC8VrzHFmXAnXDwRoNtv0djAYwEe84BxvMqlWwe3/M4nr79Lh1Zl/OxeJi9tYfraHczO9XtDxFGb1jStaA4cAVfDBBsFJtKvstVapLQh8ANnymv/2E3ieuYCLMs3ue8nEvEC2esyY/Kbb/u5etddqwPkD/nngwEq3wwTZuNQTvTuL/9pZN5KaonnC9LplqkSDlYxhKniMvsn72om/qjO0Zd2o8kE8bG+yYqzb+ivwP8l3EY0bWYyFWzb2Zix4zj/D/C/DC13+DnaEZqZy7UFuH1SZ3bd1R6p9VQq0i6ps+2Q+qYAAwAlKDesr1W8UQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 151,
    country_code: "MV",
    country_name: "Maldives",
    currency_default: "MVR",
    calling_code: 960,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjMyMTNFRTE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NjMyMTNFRjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MzIxM0VDMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2MzIxM0VEMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+25GwywAAAhZJREFUeNrEVktL41AU/u7tIzdarUU6oGNFRBlm5cafIAriQmRWs5jVLCoMzNI/ITO7wY24E0Hc6x9wXXQjiCBi1YKPtEmbdGqSOdemjG3iow/rgZvk3pyc757vnHtO2MHAdBbAMA0d3ZE+Ghdh7wGP7l0B53gnCT+euAxgLtBfBrhTnbcj0pZDNnSF7rw6DwSuvbjpIUU575B3Ubse1AcsPb0m0C9fIzhNAAkz2FCIh2BYRVjGLZRYAjERg+PYPr0CeZosAjubFaQ0QFOf8VjSqyXokuS4K7oBqBGi5AzqYBxzC8vInGaQuzoGIsKvS0CapJkxcLeeQx4UF2bSRYKWGoZJH15cYlCM4OjnHhbjn3CdPad1+HVLng3T23xD3JrLavseuLew+30NN8U7LP/5BruUpyCq7WX1i2LmMTQ6hemPn7G08QMQvURnnLh0mgZu+hxzVuXMfkim1vO+OWC1H9mzAxzmTrAyk6Y4UqqWDcLnbwwsM5qHMb+exuSHcfxOb1B86fxVrPaBH6qVeGIoFMuhYZxrx5j4NYv9cg4jqbHqunD9+jLnlJrhV5RMQeyBnFMDC0gFLDoK47aA7a1VhPqS6FF64Vr+AmJWyIbxvz7UHVtqi4VaZ2LexvQo89XWVsT1KI39dRtrv17nsSzonLRTBaejTSIv2MtNQr7TRKfag78BtXyOO9mPdS/G3fz10f8JMABK7r8EsRKWRQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 141,
    country_code: "ML",
    country_name: "Mali",
    currency_default: "XOF",
    calling_code: 223,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjMyMTNGMjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo5NjMyMTNGMzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MzIxM0YwMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2MzIxM0YxMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uyeEmgAAAJtJREFUeNpiFNlq9ZSBgUEKiD8zYAHv/jEzyjL//nte8sF/QZbfLH//Mf/Hpo6Z7z/j79dMf6+H8jH8fMjEzCL4H6s6IOAF4mcsUAYDEo0N/IPSTAz4wX8oJqSOl5ACdEOpoYYoH9AMjFo8avGoxaMWj1o8avHQtpiRSmrAgAXa5OHF1fSBGvYXWsmz4KnsYerALSE86sB2AQQYAKnHJTCzkNpyAAAAAElFTkSuQmCC"
  },
  {
    country_id: 149,
    country_code: "MT",
    country_name: "Malta",
    currency_default: "EUR",
    calling_code: 356,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo5NjMyMTNGNjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRTVFRUNEODE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjk2MzIxM0Y0MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjk2MzIxM0Y1MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uPhVmAAAAQVJREFUeNrs1s9LwmAYwPHv5hvI3AvqZrrK6AcFDSSoTpWHIqi/OegQQYcOHaK/QNtWastY6jJ0Zeg5OmwR7AsvPLcPL7y8PEoURQ6wMArDoO94aFaZjKbxU+O3Hve1Y4YNB1HM84vk13HFdGDQ8eXd5RV2/YDCxjoxJ9Vx+M7Hs0/Te8DJqjy+vjB8ajPqD2KVRc91uT2/oGNIGq0mypzAu75h5+SIvL0VH6xVyuyeneL4bSJFYXNxibW9fbJmMdYbq5OHpK9UsYwSZqtL1ZhHX11GSD1eeDbkTIPt+iHSqpBEYjZkchqFmk1SqfxRKZzCKZzC/w+e/NXBdAsJEjK/rU8BBgBwJ0VJGmmDwgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 139,
    country_code: "MH",
    country_name: "Marshall Islands",
    currency_default: "USD",
    calling_code: 692,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRTVFRUNEQjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRTVFRUNEQzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFNUVFQ0Q5MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFNUVFQ0RBMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YGjCSQAAA6FJREFUeNrUlV1MW2UYx/+nfenHac8ppT0TLVAEZoWxwZKB4OayGJnL6p2axa9NEtggMcZEvV6yxBsvduONMTF6MdR4sSg6wleaxUFhDM1wLMDQ0CHQjkJp6ddpT885vgcKsjijI9mFb87Ved/3d57n/3+e5zBo+gSPZunwyNb9aAZQVO3ZzVLBKMhaEC81M/pzZUPkvt10zsgbZVnJiTkU6B8CS6EZHqKD5Rc7q75uc/c9zUV3oHP0m/KeQnMyk4usZ6DXQc9A/S9QDqKTQjuqutop1BaNR3DjjnELLcnEROr2F59sdgdXUlf8gWAornEp/d+gZn6ps6rrbHmvxxKLBnF7ASYX6zz+GtH0TUk05PoDj19898hz9U+kxFxlCf/RF+OJpXXYTA+I/S/oYuferray3uqCWCSIqTAsnnpXw2nu0OspYieQVZ43VdjN3iY35dKLrIm8+nzVyMj8TaILJrKSrEDH/D3Sjr1ftZd0VyupSBizhcR69JT7mTNsdUv+ZCqrCSIrqijJsVRWpSZvQNaTUiKTy0iymg+YbqibRm1AL7UJ39bIiCUQKK3hT5x5suENYndtZ5VKS4PDAULzTaal6XVRGg7UewRvs3s1Jn72/eS1O2FpLQ2rAXoKtSFjt/CL7RVfvs1drjMhwWLpqVdsTa3l+05uE4P3Er6x+Z6hwMD4H+HZVSbfjTRrhhEc7LGDruW19OhkKJPOgjDIUmgRZ5s/J3x32jq434FsWWmy7h370VYYhE3irZmVfv8cdX54IpSdX9MqzWmhJm1VCNHRV+G5yFVa3FSKaAJEoJparb+fdX7a6hytrQRqvDjygaHkmGHjxk+/hPquzfb4796cDIGWEy02hwXlRZoxqiYj2W4lrZCthtV4WhE55IotBVPtRRfbKm7ta7Tj8AUceA/gMkDfUKjHd7v/+t256WVQxTgjHCw8ezRE3pd8PZEdbUpf2ZUwVffnTqH7/WcXSl9qRPPHICeWgX5fpLu31zcWWP1thTYt7GYUsXiMy4PUB7QW2YAC2ULEDCbZ/2HN2IWXC/CiF8KbU9HawYH4Dz39V6/PSIGIdpwG6LJp+f0zccdAOvg5wlIxP3H+hZUOL4/K2plkyzfTxVd8kzf8E1iMwKjXbLEYtAgeZnAxDcfPv3VYbKnVKWzZ5YVDl0akmdEJhEIay8li0+ddjULS0sguGcpP/ej6dfwelgdg1Wk6eoStlHc/r5n/5V/mTwEGALOVkZrh0WmoAAAAAElFTkSuQmCC"
  },
  {
    country_id: 146,
    country_code: "MQ",
    country_name: "Martinique",
    currency_default: "NUL",
    calling_code: 596,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUU1RUVDRTAxNzgyMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUU1RUVDREYxNzgyMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNTRCRUExODlCNURCQzJGNENDOTYxREZBNTlDMDM2RUQiIHN0UmVmOmRvY3VtZW50SUQ9IjU0QkVBMTg5QjVEQkMyRjRDQzk2MURGQTU5QzAzNkVEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Ni1GggAABOVJREFUeNqkVXtsU1UcPufe29vH+ljbPdoO3NYyBuPhxjBluuwBm0HlFVCRYEKE8YdGA4FpFOQPFEg0DiVGTVSIBLMgiyNBeQ03V1DeiuMxRgvbunVruz7W9+P2nh5PVwUH2x/E89d9fOc73/nO9/sdqF/4KRgbEMNQlNPmSufOyHJ5IldvOCUihqYp8qe3373trZrdmxcRWNOBzsYP2gyGXAhwlOchgGUlGrlU+OetEafbr84UIwQBwARJpXkxxkmI5TKm2qgrK855t6Hys/frHa5wEmMwyYihpEgomDNDVWucUjFbe2Tf8idnal2eaJr3ATWRRkFA08yx9t6eAV+v1dN5eSDBIwFDT8hLZjMQCmh4o3v0lGkwGOXbz5utNh8jEEIIxlGTd6LP64tGIvHtr1fqtHKbzTWzSBWOcnAS1RQNuRhvG/RWPDV1S8OCbosnSykUsTiZBA+pJvSAFdLOoeCrm1r9odiJA2u3vlYxPByYzBOYBAwjoGTsJ990fvTV+caGiraDa7JUIl8gngYw96FJHof9kcNfvlRWrLlrdbUc7z56xpypkMDUDh+RjjHFMLZh34v103a/WWVzBm9bvM0/93j9cZGEuq+aiMLhaCJTLlq7bNbqF0qnF6p7eu2JKDq4Z5lxntbpDgKA8AOXUyshlIzzfHlpTuO6+dMMU/yh+J0ex/pVpTs3V9kdZKMpINPb7x3TjJ0jgZv3Ro523Hv5uRKlXGK2hzua2k6ftYAwAsPeEVcgTe3xhoDVbqVogHi7W2Rcc3hJdUH5bC1R+e0PV460dQNvrJ/3prK8fW/7mM+QrIQQdnqCiURCpczgeOTzxZ/QKcSswOHyL64pXFE3mwDP/Ha79cRtdbaSApDHiGTD5Q6o5CJWKHCPBqQiVper5BIolQw8eXL/56AeB/x4Ipim/aZ08lKGJ6HHH0rwXIKDYiGbp5GRqiGEHl+41lhQXzmTYM5eMZ/stKjV0pQoTIUiCV8oDCkUj+GpWqWQpdC/R840ftiWDlOqbHi+ula/cIF+yBHuuGC+dXkQSNnUslaHc9uS+soSAjzeaf74nR9Bfh5IIkBhZbZ0w8o5iKdsDt8X319NnTn7TwEzekP2WEAADaFEBBUSWSiEt79R1W12PL+xJT9PQVGwl6Y02Yr0hBy1FORrDYYcDiGREOtyxZ4QXzO/cNfb1Us2tP5x00mqZpzXNCl0gO2ueMfFvnUrSvoGPZv2nMIJJBDQExpNwCxDIY4ynR6QZYiX1xVt2dnx6+8WlgUCmh5HjcfylyGjOZTce/DiKVPf5zuW7t1RN2gfnSxC5DvDQmGW1HSxf993lwwFmnMt6wvyMt2+yHjVNAxzvHUgYJyr0apls4oVhVPEQ+5QLMgxzAQpSrc321BQqRSVz9EoFMKn52WRM7e7QgxNjaMOR3iVgn1lseFs88ZdW+u4KDp07C9djrjqGb3XF3uUmudTe9Hny5ublu7fvbK0SH3uguXGHeeyZ0vi8cS4q4A8MwxkMwQtJ6939QyRtltjnLFhVTkpKY5DE6rmUTJXpzBd6uvqtoaicKoud+Pq+WXF2aTzJf/b+TIkjGeUaz5mOdTaXbvAUFKUZbpqa3jvJ18gqs2RBYORh6iJgRSgrnWNtP9y90Dr9UUV0+UZgq9bu67dHNLnq9Ji/xZgAN6EQ6guk6ahAAAAAElFTkSuQmCC"
  },
  {
    country_id: 147,
    country_code: "MR",
    country_name: "Mauritania",
    currency_default: "MRO",
    calling_code: 222,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUYxOTgxNjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUYxOTgxNzE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkFFNUVFQ0UxMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkFFNUVFQ0UyMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I0M3dwAAAo9JREFUeNrEVjtvE0EQ/vZednx2/CDGcQiJLYMQ1EggRMkPQKKiA1FQIaVKRUWDxA9BNKRAogWEoKCFIgoSBixix1GwZRs/78W3xyGFxmcfyKw0utHu7Hwz3+7Mnth4fmUfwBqlh8WMFKWuBQqOfRcCrkTZpQkPA09BnyL1KGMuYEFxJU+2jrxio0DZp+7M62gWey8QOSxPICVcZBUHd5bbuJtuIUc9o7gYe+KPPaGshWUowVTSKSO0KR1XxfZyC1vZQxp4MFyBh90TsGhtENLm1yFyjGte1IwnBD2tWTCF54Mm+K07OnZGJtPiVq4/GydQs2JIkgnXt3FR4h4bIjrVMruL8QHW6KhLXWZgktoi5cbBJq7Xy8gyGFO1fVBpIwO9vNRH21GiUz1wFZzVx1in45c/0sgziJO8UK9HCbSDQOR5F1T7V6CWgavpIxQJPuA6VCdaxrJU3pDWe5kjnIkNUZ3E/YPXOS/BVilGUE7VSQxFBrlF27cMTA0ps6nABUb+tJfBnqVjb3PXp/EznR44GvpkQ0qTepVzeWb3sbSLBjN93M1xrx0dWJcGiodbjTIUOq5V3uNBrokLzEyyIeWcPsF9zh1WPiBJ/XajBFfe9pCiEuzV3WntUjqXNF4i1a/WPyGeoDlvcn8cp2uBpDEE4kN4wySufavgBY+mrI/YVKbe6p4WVugOS6ZsjPFusoRTX85jm5fnptnFhjHyz7vOIJ60VvGos4KmraFEUDeklGbK+Hjm33meHTo3eX4llS2D/r+yZfY4t8y5FV422xOzdMzwjH8P6TAt26PhYES9xkbi1zUbRo6MeIHNzA/NvK+KBJDtMCacuXrzX71O/3L8N2At+OVJLfjXp/dTgAEAlE8F1+TZHx0AAAAASUVORK5CYII="
  },
  {
    country_id: 150,
    country_code: "MU",
    country_name: "Mauritius",
    currency_default: "MUR",
    calling_code: 230,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFMUYxOTgxQTE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFMUYxOTgxQjE3ODIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxRjE5ODE4MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkUxRjE5ODE5MTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+lva3PQAAALZJREFUeNrEVsEKwjAMTduIbjIcO6h48CO865/4j36QCB704BBHq4iMNWbQQ78gefBo6OX1JSENntfbGwBsmAFkUDHvmALIThFxC0rABf10hB+mjCmOQppjliMe6qOO4yc2NnuJFCya+NVxTL7QEZ4vvUpzmfayenFQMwchYcfsDPUTLzy1RgQculKnxm7a6wj7z0xncu1Oe0oXJGiY8PouXNZtUnDYKNVY7z9OK08lvPqEvwADAH3qLsG8TnJFAAAAAElFTkSuQmCC"
  },
  {
    country_id: 220,
    country_code: "TY",
    country_name: "Mayotte",
    currency_default: "EUR",
    calling_code: 262,
    flag: null
  },
  {
    country_id: 153,
    country_code: "MX",
    country_name: "Mexico",
    currency_default: "MXN",
    calling_code: 52,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOUI5NTczNTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOUI5NTczNjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkUxRjE5ODIwMTc4MjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5Qjk1NzM0MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0LwZHQAAAaBJREFUeNpiZMhw/8SAD7x4zODm6M+wM6+NgVjwKKeS4enUTgYOQVWcaliAmJdhAAATwwCBUYtJAv///aOfxf+B+Pev7wzPr51g2NwWydDkb8Rw5dQR2lvMCMTvX19guLWrleHW+bMMBw6cZygPtGV4fvsyLSz+D2f9/PWK4T87N4OgmgvD1TuvGBz8XRnEeRgYVk1sRKj+/5+giSxE+ZKJGUy/fHmLgecfJwPTh6sMHB9PM/z5+oXh4zdWBo+CLoZf/9kYnr+6zSAupsrAwsJKLR8zgskvnx8xHHv0jGHJ+a8MD8UcGFyqehg+Pj/J8OXjdwZbHy+GJ88voain2OL///6CaW4ucQZx9tsM/zS9GJZ8MWa4zf6HQaK0kYHZ0ovh8/MzDCJCsmAD//z9Rd3EJSGlyyDCI8WgzXKZIUDoFoPj48MM7L/5GYT5XzJwCIkxKMqaQf3LSJ04RgaSKk4M/C/OMdz8+53ht0kOgz/7WwZhEXEGaRkTksxhISc7cUsYMRgBMcM/YOplYhyAIpNMS0crCboCUOL6PBAWAwQYAIwVfZVkoDrqAAAAAElFTkSuQmCC"
  },
  {
    country_id: 73,
    country_code: "FM",
    country_name: "Micronesia, Federated States of",
    currency_default: "USD",
    calling_code: 691,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOUI5NTczOTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOUI5NTczQTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5Qjk1NzM3MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5Qjk1NzM4MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pVbFKwAAAjtJREFUeNq0Vt2KEzEU/jJJptMfu3+u7ML6i+zdXop4JSi+hyD4ArLghe8h+Bi+g/gCXgkFvXGFdi1ut9NpM5N4Tqq0CGmbcQ1th+lM8p3vfN85iTh937tAjeHc/CoEag1F32uxkxJCy8vKg7dTCfsnipg1YidIAj3PDW5uN3B3N0N/PINMRC3GUWM0q3BvL8PLR4dQBPj2wzd8HU6R6QTifwJbS2mlz1Y2n8psZ5VDU8etI8hcUQKVBNwl0FY6ZzgxFsO8hJbialPNUS0vyQCjosT3C+vvOYCGErAuPCcamI10SZqya1OZICUANjCnt5vJRfodOx2Ylo7Sbr3r2xSQdTWAk9/uPb7RxNQ4VIT4c1IGHcw677U0qMjQbUh87k/oqujObV5O/OrYVLhD5fL8wQFOnxwhUwnGMxtkUJDWEA6vHh/hxcMD3L+eITcVQiWerBKXyWn64TTP/1rvwyaVlab3kzUtLehqnjig5nBy2IYhsQpK9w9KvQqk2lCq9zvaS8H6fjrLvfsRCDaoMRtqv5OiNyi8ftwgON2h9tigZ/1Lg6K0PrjtplrZSle6uiKmvGCmF8EwYWbH9cuDA0ql8M+41LSUXtd1/XttHf8tFbPfIjY7rcUuNSS3L0uwyY4VvUlMjfWsXz+9hTfPbnvG+Qq3X1mvFoSqiBKnm9kyOUUp3qRb/RNwh/bfL8MC7z6e+c7GjWKXGkfsnhy/OxEAO7Y3mHiWOy1V6yDAwKM6xx52+/IRKHb8EmAAirfmzWzPA+cAAAAASUVORK5CYII="
  },
  {
    country_id: 136,
    country_code: "MD",
    country_name: "Moldova, Republic of",
    currency_default: "MDL",
    calling_code: 373,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxOUI5NTczRDE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxOUI5NTczRTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE5Qjk1NzNCMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE5Qjk1NzNDMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+UdXXEwAAAipJREFUeNrUlctrE2EQwH/7SDbbmI3m0SpF2iJRaPEQ8FJE8OJFD55ETx5U0EMFEfInWBEFEfXmQfAmCFqhFKHSg+2lBsFSNAj2UFqatNQ8TLN57ToxBy89rCUxODDsx+zs/Ha+mfk+Bd4W2VVU0YM8u5fiauo99jc8iXYYKq985G+EUKOOGHb300VD9EBUeiR7AquKqPoPwS2gT4pTrYN/PwQi4Dptm6J0C9wQmCG9cghqsn76MMT8bAgzKjb5AUPeuY0ugI04pD/5uH39AEGBf8+FWVi2KLtwU2xfMhpGtAtgRbJa/Kzx6EUfM48tEopNJGsz9SDMk5cm6SVNxsc7WPfsuQPhqM7l8T5G5n5S2qgTUFwSQzoXT5lYluRQ9Z6KN7A0jr0Nc2mNuGUwGxvm+KUVlKbD/Md+Brc01nMqTkECxju81a0uNnwFPuQd7gYusDwcZHpglInCLcqObPs+G0UazHE6CZYGUiVo8ohJrlbi2sgb1jMx1paCXBmdweovELH8KH5oNrswTlZYJ7xR5Ky2SKigcsK/xmTiNdsrVfJV7XdJvM6z5+aqb8Lp8RLJ5zD1TmNhuohhNomdV5lIlRkccqhvieNAh8ENG6KW6BicsRxWs3l0SfLkOZejSanFqtxKO94DegYrArFlXNwMjB1zuX/nR/u8NgX4Vd7rbZ+uXRKt4JWsPKV7Hal7ZbMN/VvZwycCap0VtT/r/+o+bmVc6gX4lwADANw8m6+4QijQAAAAAElFTkSuQmCC"
  },
  {
    country_id: 135,
    country_code: "MC",
    country_name: "Monaco",
    currency_default: "EUR",
    calling_code: 377,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QjA3RTdDNjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QjA3RTdDNzE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCMDdFN0M0MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCMDdFN0M1MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+o1HuEwAAAEdJREFUeNpiPCeo9omBgYGXgb7gMxPDAIFRi0ctHn4Ws/x5/35gLGaXlRkQixn/fP4yICUXCzMP92iqHrV41OJRi8kCAAEGAK++Cy3NEBqaAAAAAElFTkSuQmCC"
  },
  {
    country_id: 143,
    country_code: "MN",
    country_name: "Mongolia",
    currency_default: "MNT",
    calling_code: 976,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QjA3RTdDQTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QjA3RTdDQjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRCMDdFN0M4MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRCMDdFN0M5MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XDrqKwAAAkFJREFUeNq8VT1vE0EQfbO7vrv44jgKiZ1YQRb5ATRRJCiQkKADGn5BaKho6egogQ7xExBlJBoKUDpEgyhQCiJSxBKREcaJ4yS272OXub1EwiYFEnuMtPJ5NLo3b/a9OfpaX/4GoILJMHxoPCW0xnynjacPn2Dj7jqW9lr4m2gvLuPG2w08evwAB9U5aCmhON8YqzoFS/cJImCwaQOTwnkIPv3JpO4Rpq4lUBc19DEKCTGZSH+SBVx6eYLwVoykJ/4PsPAZvEM42VSItiRInldVBOMYKF/nMddTTN1MIEO+40HRwCwiMyKEdxIGH6F6L2JxaZsrBphy+yQdATVrkHYJgw8+hh9Z9iv8f0Aw0Z/2+pdQv3tWNTIVE+JtbqAuuAE+P1hs8xpU4prYMWN9SCDfoPmpj9qzAQ5feWwpgT7/qkWNlS89q/C4Kxwz1nkLqqYRrKUIriR23N7lFF5TQ8zxmeUy7W7cY3esE8JoS0BWDfzVFIYnEW0LW2CGTq/4lPHZeh7xy3lNVu9HKDVThLdj6CNyq6pz7cSsM7ZJSyBpSwRXU4jMx0UDizJbmTf3/gsf8Q7h4LmH4zeKYbVz4DE7kTBQC8A0j1g1mCmryVzK2ZJX4ALRvKHiXcLRa+6HDIbvJQbvJEwCKy7njMWMsWuxtVaxGyreEfi+HtovVfY93l2dsb4uXeCRd90BVyxvfmfEVspGKhd4TbKVbEPMNvqs+FlDBW4Z7/GYK9m4M8CzhSLK+XO2KmUtF5dxqLFfAgwALQ/bbU/KwEgAAAAASUVORK5CYII="
  },
  {
    country_id: 137,
    country_code: "ME",
    country_name: "Montenegro",
    currency_default: "EUR",
    calling_code: 382,
    flag: null
  },
  {
    country_id: 148,
    country_code: "MS",
    country_name: "Montserrat",
    currency_default: "XCD",
    calling_code: 166,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRGM0JBODYxNzgzMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEIwN0U3Q0UxNzgzMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRDk0NjlGNUJGQkI2MjlGQjlENTFEMUY4NDU0Q0QwMkQiIHN0UmVmOmRvY3VtZW50SUQ9IkQ5NDY5RjVCRkJCNjI5RkI5RDUxRDFGODQ1NENEMDJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+w2IgWQAAA5FJREFUeNrsVG1sU1UYfs69l7WzWxlt1466spISNs02ZLgExpeogAmbGwEyg59hQKiO4PwIKmqm4JQQ1MVERhxkGfiDRBf/YACDQBgyzDbiGMOMwcCytdCt++rXbW/v8dzjiIs/jJnun0/uj3vved/nvO/zPueQ3u0vOzesrOtMrm7suNvSDJg/r3DtOPH+qZJdq4+KCA6KYugVu79225wxZ57jjc4Rb4AgCX8LCogihNlfeDY99el63/mOyozde56dkZvjG45DVgdUMXmG/gXbrbYK/d7qJ/YLRZlf0RFfgGXhn4CClD5TLxuMi/WDbsst83NPe7MW9dZ/Pb3y+ciez6jTVRjrxtqNje3xYwePR70DzRf6Y0qc/MlOqFZiAhAIBF7u/aoFtvbITISj92TBM0rjQwGHxaBEYr+FFDOoIUUYy3DJXl+6MjZrdroqiA/++rhPTSeI8Hy2wTAQBh4AotBUMhGobIVTE6nVmD0QGR6IhnJLltgTY0l3ro+y0HMt+kcLZi3Nv/lDc9DhaDG7bof9ZJoUI9MAhVfGeP1Wi2l3zebs/NyermsfvPetp+8OkMGb4B1h+uvOskU7X1ywLT8uN538qFOX87D1yaqyK2/W3ly7udziN176vq6p95MbabcVC9ovExoDJIqRh1ymtw+/GxGtKf4O0V4gRwP73R92dPURmJlKTBBx7ztVDUtjRT0/1lUdeqnR1/STtDpzZFnf6XtZ88sqznzT0p06x7Vlvt5t8iVdvXxhCImEntcVOHJoq3NZXs0Bf/jSzvPXjavW5a9faKtvOAOwAEEgVHIEB7989ViD39olZ4MGWc7JX5TQ0LxrbTGkSj0Xf950sX1fcfGO5UW2tL6kRCQGA9fEVLTYebYfqXYb1dkDROftx4rCmYAFiEMbKSFAGZDJvxUCiVVEtUwrk5Joium4BwJ87HYWRqBwH/hPn6qe+5jdXX7YYDkuFWx8a01p/G6woHAXYGTUbIxsGssZHdFUF8bV10Ykcz+xF8qXkqE9bG/Ky2H/5Lar5LXS4XKdu3VUKMnrXpKRWryl1+u5QbS2CBOExW3FZCBSDM7NmfdxZZhEznqiC498l9badoXABKjjvp4s9R+HZRSwpRj0wVAIGGIG5w2NHxkJkwTlkzBShDkvuA4Tt9YcSvCvQO4fbooJVFSlEhsl/huQiTefIFBJVVVMARLquOGmBP9T/wW/CzAAKWlmnQeZkEoAAAAASUVORK5CYII="
  },
  {
    country_id: 134,
    country_code: "MA",
    country_name: "Morocco",
    currency_default: "MAD",
    calling_code: 212,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NEYzQkE4OTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NEYzQkE4QTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0RjNCQTg3MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc0RjNCQTg4MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+AgxteQAAAiBJREFUeNrEVktr1FAU/m5uMppOY9up2rEVVCgtFEU3iooVdNWFe3euXAiCf0DsTty5E6VbN+5EBdGFuFGLG3Ezm/rAQseBthJppm1y8/JLTEREnHScmV445Obcc853njcRDQzXAYySHPRmWaSverbBb8+egGvYptUWcEjaCZFS2Caw3o5SHwGXjQhaDFQCAdWLiImFIardP+biwREPFciU13XgXOHRGYVnJ3/GKrqR6ogkSbsJKVMIDctmgG9eBE8JNGWMaqinuQhIq9SICzjTEtikCZ+mbhxdhz0cY6oh8WKSHFre1GNcnlnDqUUDtWqAUZ5dq5mpE+p/gUMaSWq6x9Zw62oT1opA+ZPA9GcDygBejvl4clZhoxzj3k0Lu+ioXaDqgjfX2r8ujzxtVfq4YPq4cs7Bmwkf9bkRfDcjjF9awYX3Jdx9bWG/kmhkA9Yi1U7LiHMDdVZwYtPAbK0fM+M2Lp63UwjLFZhd6CeonsrITs9x3s2vRhSEJvB2yodO5Dggb6/C8bq+pREpLGtkPf5w2oN7MMb87UE8vzOI5mSMx6e99FR2A7hC0adDjPYj8OF6BYeDEk64Jbzj3lsE5vsUBrYw0S2bK187aPRLKWSTSexTGpZY4QRmjO9L5K9GEQ4EEl6xe8wpXOMNGjzErpVpo4W/miPZD/AiKfMkkel4cyUG3Swa+Qd//S/8rnwWO7H07JfH6vGvj/NDgAEAfcqvgcMO6pAAAAAASUVORK5CYII="
  },
  {
    country_id: 154,
    country_code: "MZ",
    country_name: "Mozambique",
    currency_default: "MZN",
    calling_code: 258,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NEYzQkE4RDE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NEYzQkE4RTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0RjNCQThCMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc0RjNCQThDMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9o9/QQAAAvpJREFUeNq0lt1rFFcYxn9nZnez3x8xGpMl6xpMNCaglCiliAqKYEVbCQriBwreFEuhsVAU71oopRRv2hu19QNBBEVQLxTxoqEgGsvWoIwSFzdo/EjiZjOzu2YzOzOeXan/QGcHZm5mzvmd55n3fc4RP36yafzYlmXteFWDt2VQBA2+IvJ+KRx69BvJRGTv9l6mkjGYKoFlg2joAgzlQSLMxvECmVPDrPlnHOYFIeAF22mobEVxHEaaQzRJlUOX/uW7axr4PZAINBQuRuL9es13S1obNi2WFMtcSs/nwJe9FFvDMGE0wnrjIxg5r20J7DmFFbM6z8J+dm3tZXhlEkomVKV699iGp/a0cFjgeGkKCp63ldBex+gtV7h8YYi//AOMHvycuWmdRXgxccd+cT/Ur6dVf+Se/g5t5WsGj5tktqW4ZZT4DJU1/hAPkgEGDI2sWWSpJ4QiB9r/V3FHK/xdKrBTH+XrxRXuyBn/CE7QZXTS0T0PTa+Qzs5xWoTZ40zwhJI7VZ1IOAz1P+ToL61sWNXP+v0ptvw8wPeFCuGDj6nM+Hgqq7wvsZCxlnUcCaTcAWsZL7/mekg8DbL75lp++PZPXnWfYPhMH85PUayKQAQsqvV/KwgJ1RWwpyUOhx4VuGsFuX6lg84Wg7F3xzm5Y4p9083Mj1dpKwuy1jTrqqNocgmugHXTpll20/nfX7Fs7AhPNiX59HYWezDK5OGldM3EuOrz8lVVo0hUDgm5U9WZwCo93a5EnNVTjF2OY8358KVKtPaYvLmp0jbYQ+6bzUzmDTodX731HNcCRBAxdR+epiqqv4qRj6N6qnSfzBDbL5NL9i+Wu8lVD5CaBF+sgl1RKOajxJdP0nnxMb4+E/ulfD0rk0t1N6vrYKE4mLJtTKuJ9l05Os7mPoh8Vqv7/75yGSyk3Nl8UO7/Fl2/jZA4lKeWEdbzxgA/gsuFMOH0jLRWw79a2v1GWltuLLQOXvDFCyN1LhtRohhWjg87kNpQZu3oY7wXYABi1iBcy/DE+QAAAABJRU5ErkJggg=="
  },
  {
    country_id: 142,
    country_code: "MM",
    country_name: "Myanmar",
    currency_default: "NUL",
    calling_code: 95,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMEI3N0VBQTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMEI3N0VBQjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc0RjNCQThGMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc0RjNCQTkwMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hqhQlQAAAbNJREFUeNrskrtuE0EUhudy7L3E9q7XlxDZEgbFCRApQkQgykjpeAFqyrS0afIGKdLTIB4gj0BKBEWaSFEig41jiPBtvbb3Mrt7MpZF7zWiifJLoznSGX3z6z+H7uweT6nCGXUmAjg1c4ppqI4T2I4vwljTwCZaKbI/9I/Wov6I6WRhQY/l5OV5oZnP7WyVp17ouaJSMDdXUp+/XA8FumnFpWkkhBIkScQ09BGJ50fP1q0VDfZeVw72X77aLjNG6zXTdUOyrJg8cYxFS7vpuiVLf/umvvk4//7d8yePTCFiXQPZXR6NBKVHy1DqD43u0G91HBn9Rs20TCWXSUfRP6Ald2h7ugqN9ohR8mKr1Po1Pv3aUdJ8NA5kdzk0yPEwxnyBV61R3lA/nlwYWaX9exKE+L3t2OMgVchiuAwdfkJxQlUosW+NcROw+oD/uB5UVzN92+tcMlirOah7CLF0QOJk6EP7U0j4rNLp4DwQZ1G5oP85d+c7HvXQp6CjrxExpWoiNPWfptjfhaWzkc4WRuY7r6U4ieXfLSgLwnkS49CE1QWf8oSBMPLfdI++R99F9K0AAwBXEavacm2ESgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 155,
    country_code: "NA",
    country_name: "Namibia",
    currency_default: "NAD",
    calling_code: 264,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMEI3N0VBRTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMEI3N0VBRjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQjc3RUFDMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEwQjc3RUFEMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rnH82gAABORJREFUeNqslmtsU3UYxn+n7dq1o2Mb7OJUBGZEjck22ECHiW4EI4iiDEb8IoPAMHFsA+/6xS9+YAheEgNjDBkDhiSKSKJhExmg8cKQXbgMAxHGGDCB9bKu69qe+vb0UBiXgOhJTtOe9LzP//c+z/89RyH3g7NAupxu/uthNMBgANo6Medn8dX2cmYca6HjpTIGunowJtjD/wp/dJv0L5ELSkhujIEBCyhyxeKDmMCdiZqM0HlRlu/j+XXlfDkvC+tHqzn45ttSKxHLiPsIBQfBYCA06LebojeGRd1xWG0D5GZ2EAopNJ+8H2+/FWze21O2nCK2IJuNG19jTqAb58TptBxowGZ9FKPVpokqhhh8jm5M+IkIiyZBI0mpl5iVfYzJGZ0EVAPj7u1hZ9tDXHDERxYWPm9G6RxgxtoythVnY/24isPL3sGDGXtCLiElqAmE/EHcnhZGpzxO+qYqXTjcV6GdOqmNwuyj5IzuxmIKMirJiddvYnNDHsR7hlL6hPKQUE7JpraulKLBszgmzaDl911C+QhxYUo1IJVNeC+fIQYHefNXEqoqY7Fnpy4cMGIa4cTljJUAKIzM6dcux/QKjMOKZaQDn0dabvGLqE7Z59Mo6+dnM+yzao6Uv0WfRplzHWUrGSlPkLppPfunplO0+1XO7/5aFzYGCfTGk5joJeRScRyK1YhVZ4ikxH58l6XV8RK0gCqUp7HkZ7Jp8xJm+4UyZxq/HGzUvIxSKtdSroD15Szq+551y6dJHqS7o7J1YUNIC1DD0QyS4rz0uIcRCCr80ZnODx0ZIipt7boErgFeqC7TEhu7cjWH33iffilvTxRK1EhcdC81yq117M1PZnbDQi42fQtp42C4DdQgV1Mt2+ZidzK1eyZy/NxfsnIDv50Yg7vXDKc6sDydRe3GUuaqkljx8pDupS1MGQpe46WTvGKhrKlgsXcXayufEcqQRomqaqJaLqPCsn0Y3ifb0EzjgcdkIRKg8+clRC6eW1PKtvkTsH0qXlbcxMvBMGUbY5MnkVa/gZ+npDOroYSepu1C+bB0zBYVjG6IIb/C4lZpq0H8bD+DpSCTzfWVFHo7xcvptGpeXp/YLqG8TN6CMGUZC13fUVM5TaccP4Ty1sJX9qXLx0wpsuWVLGyr1nDk9feEUrxMmCBrU4cmNlW8rP+JpvwRzG1YJJQ7IHXcTSlvFJYxhl9IW09jfiqTOklskXoOR65Mn+YGIdQTG/VSp5y3HDYspcSzi+rKJWILN3h5a+Ew5RmhdMj0qVoSnT5Hlr2rUcZHp4+e2L7WiJdb97G/II1C8fLvpm8iib0N5VDh5pNYp4zXKAs9p3FqlLqXtuunTy95C1dBdelVL33qHVNeeygza5pddQsm2O2fCOXSCGVcwliNUlEUVBmNfZ52xoqXaVs2sK8ghaLGpVz4UU+sxfavBPXDrYT+POG69HKp/bgkNu7Kk0QKKYarXmYVfwhfVFAi06f687LI9EkeE6EkdDdPbrfSbh3t8np9dmviA1LiCqVfEtvOgyl5ktha9hYkM7exggt7dkS8NN8V5RBhk6rEE5sUG/HSGMOgq4eAv4vJxZLY9ctY5JEZu+JZeTm4Oy9vGS7FbHZLsfBbiDvodGKxJzG+ah2/znmSFxtLIl7eI17abf+LoP7G4/5HgAEAvGpSdeM9fnwAAAAASUVORK5CYII="
  },
  {
    country_id: 164,
    country_code: "NR",
    country_name: "Nauru",
    currency_default: "AUD",
    calling_code: 674,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMEI3N0VCMjE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMEI3N0VCMzE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQjc3RUIwMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEwQjc3RUIxMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zsfIiwAAAWVJREFUeNpiZNCuZ6ANYGKgGRg1elgYzcLwm5l2RrMw/KeJ0Yy3N2jzsP/BJsP49+8/oKUszEwM/8mxnEWQ+xcvx290YWbmb5++f//3l4mRke0/Izc/J8PffyS7mkGtCU0A6E6GJ+8ZhLhs7dT//f9/9PAtho/fGST4QaaT4npmBkFnhv+MKOjTT14hntQU+wmV3iFuOv/Z2K7fev3z408GFhZ0lXgRCwM7amj8/cfC8N3PX6+n0JqDHZQ0uwusvnx8u3je0Z/M/0AeIj9d//vPyM7y9+cfDnYWaGwwM/3+9YeRjYXh33/Ksgwb8+8//44cu7dh3w2IwLYjtw8cvPXj9x8GmGVEh7WYA3rMcrN/eflp34XH7Gwsxy8+Lu/e9ezxO0Zh3v9//4MimYQUgrUqAKblD99AzmRiZPj2G5haGH7/I8lc3GUIMJ3xcjAAnQk0kY+D4Q/J5oIzOh7AyUpJRgcIMACUJouaxkAcBAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 163,
    country_code: "NP",
    country_name: "Nepal",
    currency_default: "NPR",
    calling_code: 977,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRkNCMjg2OTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRkNCMjg2QTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQjc3RUI0MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGQ0IyODY4MTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8vLQDwAAA4RJREFUeNq0lXtoU3cUx7+/+2rSR9L04SNWbdX6RuhGcW51uKp0FXVsQ9gfUphTBO0/goj/iCCICBNREJyzjk7ErlPEirZqnYiPWtOVRTYb1zZVY9NIjbFpk97eR+5OkmL/atLXfnC53PO793zO+Z3vOZcZhoHRFvvspyoIGYeh9rlhaFELxrOMpspR97hEH64JPt9W4Wt0QbL9ADGTPEUwVSshOFcLBard1eKZzqqzOcq7eqTOKgQnTkkACcG9fDoXSMnBtrfNuOc68eXWHspezNgHshF9+PofwDwiUBkHp9kOy1AYZzuquQvtp4/OD79ugtm+ErxpwtlzSQWi62DBPnjkMJwaj83eJtx5dvyT3a/rHoNLOQLT9GEfxtSBmSTG7xyHxbUXUHj5N/xjzoNuMJzw3cB118n9RUFXG8wzyyCkjSv7hGDF0430VcVY7LgJ25ZNsH2zASue1EP9Yi1a5AhKBrrQ8O+phQde1jQQ9GcKwBJ3aUwOzEkSQm1/Qw8GP7gy+19hZmsj5qtBqLwAW2QIh15cgufpwe3be267UxmrABOTgoWEm9NyoTv9cH1ejuklJXiZYsPvjjeYwS+AlF9M9ddAp04SZChQAigP/JXdLlmr71kWVULX95CLhxMCG6pKgysTgibg7YMbyCDb/SV7jdb8DUcQ6q4lsp0UwIaFQBHQ+2pQhBbOp2dpwhmDRBVRFOjyIDTzXGTrg2hs+5F9F5G/vZW37ijCXmdMUGxklGpMmHyNoxnrggJL6RosvVmD7DvXECndiFrPuUXrfX8EqJU+Hu65uKJjqh5bWyXMWH9HvmfnY9r5UxDsM2I2ueZX9K0vx0XnSW4LJzbdzfm0GIM9zmilx/MT4ZINDzFv9gdodJlybQgULEc/xXyl4xdxtb/5MbXRsrG20dgmF9VY83mhv+kdqaE/AL3bDS9vRYhG5tWOc6ZVfkczwRfGMzYmDxaybJC7OvGiYjcGHjlil3vrLoSfP4OJ1N4tWSDT36qusyqtONDaQvCCscKFZANEVHj037qN/gdPYj71UD+ktEwwQYBAovISfI7yHvXtZzLKCne2/Jm5ogiy79WkwCZtyJrDwuBS06GG/fFg0mgmkw3KSFYq42FXgmhpO5b11YIdXXVZHxVBHXg6YbAjNc/z9bzvrTITjGSHF4XPpcxVQ7dS49dSdKVk9o72/n8CDABnj2XIyb5lqQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 161,
    country_code: "NL",
    country_name: "Netherlands",
    currency_default: "EUR",
    calling_code: 31,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRkNCMjg2RDE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRkNCMjg2RTE3ODMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGQ0IyODZCMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGQ0IyODZDMTc4MzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dLNUtgAAAEBJREFUeNpiXCej8Z9hAAATwwCBUYtHLaYZYPz///8nIM1LZ3s/j8bxqMU0AyxK7j28A2Av72gcj1o8/CwGCDAAa10IGBJ1C8IAAAAASUVORK5CYII="
  },
  {
    country_id: 13,
    country_code: "AN",
    country_name: "Netherlands Antilles",
    currency_default: "ANG",
    calling_code: 599,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0ZDQjI4NzIxNzgzMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0ZDQjI4NzExNzgzMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQkE2REE0NTQ3MzVGMzJGMUI0MjQ3MkQxOUFBQTIyNDciIHN0UmVmOmRvY3VtZW50SUQ9IkJBNkRBNDU0NzM1RjMyRjFCNDI0NzJEMTlBQUEyMjQ3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZDn+FAAAAexJREFUeNrkVM9P1EAY/aad7UK72RZkNSgmROFiOHEyZoUQIgkJRw/Gm4khMfHf8KxnxRMQTsqJAyEEDv6InkiAhUAWVrbID3cL2y67225nPmd7U9L2ZGL061ya7703r+/rDEFEiCxndcUcGVOuXAVKW++cez/M7tk54/GjaKIEf6z+VWkinl8LW4vEEmksItWj9YKflG1GBBglCj5A8loiXnpxaSu8i1SmF2vfTuQ7tKmf2S5y7OhUuXSSWS5pZIdxH5CEfy48i9y7KXwDyQBWHj4fNvS2qReLQNKAFkA1yJNEBGKEWRbMtKE4VQ/9BoDf+G5VLIFngC5Au6aptRpHZGEDkwGGgp1/Wy1pVU3OTI8XCo5ZPBbed7b2c+tFgDRA/fatztdvRj9/PD6vXAT+LisQIX0/JCjCGG6sl/O7tuuKyQnjqpgfgC1seq68mSvl9yqMkbBMhHQ2dIjIT0/LrusamY7BwZvFogPgZYf6GCbKJevo6IyxmKyt2H9f7e+dmBz49GFB4B88yb57v3d4kA9a9agDMfX2S0Rblmgtt119+SqRUj1seaSSz85t7emkeu8u580oSxhb+1+Ft3pKwes63tAbeltNsFbnY3nxp9EpVE2gSrILWABWuAdm92HD+F9vvr9R+qcAAwDK6wIXIkUhaQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 156,
    country_code: "NC",
    country_name: "New Caledonia",
    currency_default: "XPF",
    calling_code: 687,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTc4OUU5MjExNzg0MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTc4OUU5MjAxNzg0MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iOUZFRTg5QjJBOTY4REI3QkY3NEIwMDg0OEVCRkM5N0YiIHN0UmVmOmRvY3VtZW50SUQ9IjlGRUU4OUIyQTk2OERCN0JGNzRCMDA4NDhFQkZDOTdGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xxyn+wAAA1BJREFUeNq0VVtoE0sY/ueW7CZNm9oY0jRFihjFC2K9HUWOCoceUEShL17w9tAXwSfx8qA+iFpQq0/KkUKtep4UER884PH0CK36oIiXIN5trVirrYk1SbOzu7PjpFU0wS2t4DK7MP/MfP83///9/yKoPQ+/5sEjLyOJ1OfrTjQmaDoisCOxDp/KIYOACHAYBDnoSXDEaNy4QTvACPTFoO9jxZS26TN6YxH+wdDb2uPWqxkwAYGvH8TwVeSYoB3EvPJlZdm4jsYjf69dfr+sCrc0+X5flGE7/cdb5xxu3gQlUyDSBaYDkrqhI5h1tdjGMHSXxSMX2s41xiapeajpoDx5CrVdZtXxDED6yqXQsi0HHd9cCPYpGm686RKSKAwEeDPBlKez9ezR2CRqvAlpYR7w04aN/up4LterUaL/ufL9X6nGE1t3RoKOQXIgkYsEZtYWSWbwCX2yq3PWngx/V8I0WxBt+w5obkmdaQ7VrxU8aTEvNkvTD+pD865XQtR2ZZ21yfdzv0UeBQ36h9oecKTEHpRNsbsJ6S3130ug+vytsJEFX6kOdfaryzI6npl544+gOS6A1kw2WGWGK3E+RQh4mgTCvK6Odb/1rVihfHEpdIStfOhqaM84EpWYEzTKkkFCSRjL4QhKxZ5AqDyn00w0DGBr6h2SBFJHBUIjyBsTKQsGE1ovzfWrbAqFThmy0vb9BDAvu9YhgFCJkMx7leS1E05KC8lihK+DlqVFgS/pzO+mL/4hUMsVYRpw+ru91/7nj5+nb9wMrl/nMKrOgQmi5KIWNxBkLN2tZDbUVxUgI0m5N/ks0PL0VkWc2ykWmkj279UPHIHD+5iTNiQGFrT+veJp8kyr3qZZwKWbQs4uCBbbNAxdFatbjasNd2iNOud52ulEInrimblwKcKQftnONv9X27OqCkqMoei76BpOrim2KRo+Am99s82uQ4sfntndc7r9y8qFY7rvt8jqi1MHYtW0NCW4Sqhr7/wR9DC64s4D0DUAt5/T7ABYlk08EK2E+TUQooAHwRJIVZx7C3TpfEpUXOnvI0zWYMFcAIEt6WHYNAGSWRCG0h3kFfrz/RojzmUvtxH+cpV8mkdiOmrofG0MNbZvIkBy1H+ZzwIMAI1PbW2aWDCwAAAAAElFTkSuQmCC"
  },
  {
    country_id: 166,
    country_code: "NZ",
    country_name: "New Zealand",
    currency_default: "NZD",
    calling_code: 64,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzg5RTkyNDE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNzg5RTkyNTE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3ODlFOTIyMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE3ODlFOTIzMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ycsmVwAAAzVJREFUeNrslF9IU1Ecx3/nnHu3uc3p5lbOWDk1VDQj+muQgVREUJGFqEQPSf8IqYeIiAyKngojCiItqLCIrIewsH8WQf8gJNK0P6LRTJ0619y/u927e+7pbgn9hR7cY7+n8/L7nO/5nPM7qOvA8ezyOS0e87EbvZ9bX0CatXlv/vqWE/c21FVe84EgTk+T9zmFHRW5gs05++ib4LAXjFr4uWQFCAYEvxVX0jS6/XZfw+5Fm7c7GldVHm/3BBlNpVI0xZiRjepI3561OUa77fCg+dSdkYhrFMz6H90YQFS5KUCjoEGg/IJGm3ZcVczWckt0G3Fp1pUFHYUDN9uhtgqfv2owpcxEXli+4lJXpLXpoRIT27rHYkERNGSyO0qdDmN9CW7opj0DAmjxL+hA8Xw143hQdkUw8wesOhxTmFdnNIf8Wh5/tdrZmCeLSPaZJgnrbdFVAaYHJE12h2L5eemnl/D7X0mdH/zx4OquBAFLoF/vqg+6v4YYKSorNntHTILPI6Dei1dyayozSwv8L3s8Ev40bVbG+Agy6JY/5UICAx5AkOP9elUxiQuRIxwHBoM2HJZkVX3CO2nka/pXVyzbV72gNIuX0UnNPFi6qOjO5Xd1hx6Vbly6ZaUlP+PdGDvod9ZHciXXICgxjEnBrNQZthT1rEymQEUIxwqzTTfWpD8fUzxu1UzcGLmwv+5MUWB2x+NzR25Xt7ivPwlUO0Jzh54N2udWbG278vijwWKtylVqU93W7rftblAYxkh3dhlf6UDN/RyNicATwChCWV+AdY9EJIXFnajoDQtX3G1s29lBLg1ZfN4wpAND0PtFfIDsnTHk6+htbX1/U++UM7N499DdL1GFaJgidQnk/jAb9gnAJa6Ox5JI+11hSWWqur+7Bt0esGQAjYAeAc8BlWFChvRpMOEBEwYNr+aEoQlQby7TBnoKLKEymHCdyn2n/LUQ5NXDFEuicSd/jAyeElTtlhQwpAFlyUYLSrHTdKtcXuw0QpQlFS1RHY9zTDyvPgmR/v6HTAltJB0DoZJxEwhBMOKkpiYE1JHxjoMsx9fJTM2YOiyg5SbXyUz9r+fzH/1zfRNgANDBXQHER7G8AAAAAElFTkSuQmCC"
  },
  {
    country_id: 160,
    country_code: "NI",
    country_name: "Nicaragua",
    currency_default: "NIO",
    calling_code: 505,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzg5RTkyODE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjI4OEFCQTE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjE3ODlFOTI2MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjE3ODlFOTI3MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KfyaKgAAALBJREFUeNpiDG7/8p9hAAATwwCBUYtHLaYZYPwPBANhMQsQfwFiHuK1vGFg+PWD4d/rBwwM//4yMIkrMzCwcQLFhUmx9wsoqEny8ZdX74AW8TDEPbjBEPrgHsN/NkGGb+++kOrh/yyk6uDiE2Y4de0Jw+VbXxn+MTIxHBN8wGCtJklWUDOSlBo5WBjkud8wnHQMB2v8zHwbGAIkW8w4cIkrpOPraAEyavGoxVQBAAEGAHrPMKYO1i6mAAAAAElFTkSuQmCC"
  },
  {
    country_id: 157,
    country_code: "NE",
    country_name: "Niger",
    currency_default: "XOF",
    calling_code: 227,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RjI4OEFCRDE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjI4OEFCRTE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRGMjg4QUJCMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRGMjg4QUJDMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+d5ixUwAAAKxJREFUeNpifBDExkAbwMRAMzBqNP2MZvz//z+NjGYhUt2HZV0/b1xmU9EUjKsi1uz/RIBnpWbXFRjuWDFcV2J4mqfz/+8fYnQRDusfl/Z92XuKw4CRRZKNU5/p68Er385spVI0/vvLAI8ORgYQ+98/6hjNoevEZ6v76/z//y9//Tz/j8dSmcvYk3opBKhkaj3DrSsMShoMOa1Exj0tEx/fRp3RjD5qNG4AEGAANauB5CbwRkAAAAAASUVORK5CYII="
  },
  {
    country_id: 159,
    country_code: "NG",
    country_name: "Nigeria",
    currency_default: "NGN",
    calling_code: 234,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0RjI4OEFDMTE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0RjI4OEFDMjE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRGMjg4QUJGMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRGMjg4QUMwMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qCpo0QAAADBJREFUeNpiZGgPZMAN/leswyPL2BGER5aJgWZg1OhRo0eNHjV61OhRo2lnNECAAQBu1gQALTkVbAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 165,
    country_code: "NU",
    country_name: "Niue",
    currency_default: "NZD",
    calling_code: 683,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUQwRkFFMkIxNzg0MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUQwRkFFMkExNzg0MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMERFNDlDRUIyNzJFMTE3MjI0MzM4RjQ4QTlENUY2QzEiIHN0UmVmOmRvY3VtZW50SUQ9IjBERTQ5Q0VCMjcyRTExNzIyNDMzOEY0OEE5RDVGNkMxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+gBm+VQAAAyhJREFUeNq0U2tIk1EYfs/Z59znbbPZ5qU0nZp4qbRES41IMLooVn+meIkuNLtQGlhmhFj9iDAoyh8VlYRgJSVeEiSzmxgZeUMWbqNsOi9r07Xp9rnLSabkj5xp5MNzOJzDeR7e87znoJ8tje7RUXUjdMO1xkCRJ8eNHbxBmDCstLT2qtMT36qwVWtUDE66Ra3JovpC+FZ9Aq37oWBhDgCC+UHYbNP4WBDV1SxNrH+Wmp5WyQs7V1wDtnbxqaLdfk/gUcVXj5uSu1MwpKZZzve314Yci+odjaC1+UF+nfA3GI3ZuGwgAJWN1Z8or4p7JW/ayRWljkoZSAa4DIyZABYWxUxO3rCIT2/LrIuIzGhX9CpgEWCBK7Up1rdGJjkVI7B8kaav7x+SH9IBp3VPXU8DbK5ap/wYumpEYIpOyW9knn5u9t0WG7A2EKDbLncYiH0gpHv80KPtjdXMGV8ppPgarmK4xyn+okZGeXb7f08tW6MiwXyNwcBuH/UI8AaCLccrkb+S5dB31lo1kAdjOdnEvrLyQVsKxAtKISDj+nYFWZcUnKwGMO8H3VmYOTNN5h3bTJwIQY4J0xxUHqVMGQe0kfF9Cj0d4R0pDoGg94W84NyrfTEFbfdK072yrkBzE+Pr+5bn6mMyrFjBdREVs0EGC1VtDwsRXFRv5BcajgjETkdyWSpzm9yjevWuCpFcCbWBNHWLHwc5kpUT0KpiQhvDvC64dI6i37deyJqFscGGd2TG9oi/hd8tKcms3lLSX3mp2zkPu5eDeVx3klsWmtIm9Usq2mt95/3cVd+hMbIW7OFc4NRtiUgg/dBypjPjpf+IRQgg4/Jp+IThDqA0N/ARyt40hSf2557f+aBgg2Frl9ZtAhYHNNFx0MV6/wUdrelThQucGBsIRTyR+gd0D+uTRVI1sJipMY1RPqBJ2ZcSxGNs+tfABTxf1YTYQ0a26Wl4SAI6/eGZnv5B5GAfFngeNtusakgloYAgx9khWCIQmpNiQmA5QGwE/0Npi7NGeFmM7YlgWDYsozUFaGoxH3fpeTDUhCEc440WC///9ZNw6HGTKfSXAAMAWGmKZjQmfUsAAAAASUVORK5CYII="
  },
  {
    country_id: 158,
    country_code: "NF",
    country_name: "Norfork Island",
    currency_default: "NUL",
    calling_code: 672,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUQwRkFFMkYxNzg0MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUQwRkFFMkUxNzg0MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNUQwMEJDNTYzNEI1QTgxNDEyM0M0MDY2NUYyMzkzNUIiIHN0UmVmOmRvY3VtZW50SUQ9IjVEMDBCQzU2MzRCNUE4MTQxMjNDNDA2NjVGMjM5MzVCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+7DZ3KwAAASZJREFUeNpiZExnZMAB/s34x0AIMGUw4ZRioBkYHEa//fLu3tv7NDF636VdnWs7aWD0/3+7r+zddGn9yTvHqGz0+jMbbry+xc3FveTIMiobfePlrb//fisKK7Iys1LZ6CdvH3/89oGdlePKy6sP3zykmtE/fv44cP0QIxPD5WdXdp/fffrOGaoZ/f8/gxAf/9UXN7hZuAQE+M88OkE1o4/fO8bDzivBL3X93a2fDL+4WLipZvS8A7N2HN3x4vNzhq//fn35s+3qjv1X9xLUxUJQxdN3z378/q2tpfvyy3MWXmZ1cfXfv/88+fCcCkaL8AovzlrKycqx6PCiE/dOTIufBgz6X39+UsFodlZ2aDr5/fPj149ABiMjQhAPYBwtr+lmNECAAQAuen74A2fWoQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 118,
    country_code: "KP",
    country_name: "North Korea",
    currency_default: "KPW",
    calling_code: 850,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNzJDQkU3MzE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNzJDQkU3NDE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MkNCRTcxMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3MkNCRTcyMTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uqrYYwAAAdNJREFUeNrUVc9LVFEU/s69982bH82QzUjOiDjpNoSgraNIuGhR2apVG6GNJEJBLtxIiP4jA26CLCFwM/4KESlaWLTIhVIKJjX2Zkbfu+/d2xsJsnHz1N7Cs7hwDvd+97uc7zuXcGsa4QRDaCF4VIL0/wfWJLwDERbrxz1Jk5+gTf61gCvrq2H8SQOHv932NJULhSScfw4KgUoFW1+RvQrG8G0Hba1IJuG6waEtRMSv9U1P2cf6yrS1r2Q18eSZ6ClAK3dltTY1QSxKTVfgeQHRq8wU2qejIn9rnlI/tlMvXpr379ozs6hW45PPjb7ecn8/NyKIB22M9qEbSur7rjnwgF/LV4ZG5PwSlJJvV6KPBqMPB+1ikeVaz65rLS3RdZ2aLntfNuSn9/LzB3f9I11KiJs3tFc7l2WIxeTiMs+3x8dGCQaBx4aHeGeHLC34/T0XNGvJOaWSM/OaDCP9czdTs1hzxnkz57ya5S1tp9M1LEsfVwjnxMX+vTuJ8QmzOaNB7tq7ytMRIKalg8ODwJwdKnd3+7pGo64tbO8gna6ne3vIZZFKQbrBKdd1PXV71BQnhwhBa9hHrzFN0OnsWHejqym8oRrq5Ds0Lt5XECL0bwEGAHp0quOMFme/AAAAAElFTkSuQmCC"
  },
  {
    country_id: 247,
    country_code: "NY",
    country_name: "NORTHERN CYPRUS",
    currency_default: null,
    calling_code: null,
    flag: null
  },
  {
    country_id: 145,
    country_code: "MP",
    country_name: "Northern Mariana Islands",
    currency_default: "NUL",
    calling_code: 670,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUQwRkFFMzMxNzg0MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUQwRkFFMzIxNzg0MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNUVGNjQ4M0M4QUNDQjhENUNFRjMxODFCREQzNUFCMDMiIHN0UmVmOmRvY3VtZW50SUQ9IjVFRjY0ODNDOEFDQ0I4RDVDRUYzMTgxQkREMzVBQjAzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8++R9VmgAAAxxJREFUeNrElV1IU2EYx5/3nG1nX7rtTOfH3PxqFplgH1pmRsaILvpSiYToA6qLIIhuveyioKKorhIyC8NEKkyCAkspjKJyRYZWOtfcMbe57Zx9n52zc5rV5cwZSM/NC8/D++Pl//yf50Vw5hksT2CwbCH5WxEBJAHiciDVJimjmqVzSEWc1LyjJeBmQRUGKQIB/QMaAceDqsCq/bE3fKmpkuQshY+mvA2qIIXxPUWHuiZNEPKBGkBMfx+HuiPpdWKFbMzQFps9T15u3C6Mq7YMSNb0fsfyDGTrqmBz5F5RYUF/yAxhFmRoKWgexySJjprkSfZqrL74uOdC+3MmOmorFvmnocp+OJCn4VqUQ7q8xifOJIhC2pYtgA4kju6oOCFe7AwKpwJnhx7PyIXxmy351Sb1tWH3yISuj9iKfC+aYw7aZP3o9IBMkplDBIQUWbv4Yczvvc7sHxudhYL49Ewov6pOX7XV6+YgN0HbHTeCzVPI14A7gCCW0EaklbM2r7+0zC23rNLOtB9dQ6oqSHMBCaKt4zAdiZy89dmFVgDOV2qHteQu2keDLJNXI0Csn9NUs+XH4lHPl4DyxjOnMUf3y4yYWa9uH3B+Cag4YHIte/32EohHUrpmJogIUqW+l7qNy+3bykvEJHa3j+qxzf4udr93d/fPiEhcX2R2Ibbz9VscV6fFpM/FI9hYQiOLfD29MRc8THZd8Z4Vsvtddx50dzWvVOhqjOCN7ysMrxbc+Q2bmUBwKeZjo1mGtY15aMfKxChR9uGtnXC+iHuogM/z1OYYnJA37a64UmVPZpWesxspigEFljFaipg5cTSmtsq/HaxgCb2JcjpK9QSB4yM0YW3cdLN2MsFxLYO6VyN+yCFAFDNGp4KAH17soUuxU0+1WuZcriDNy4I8vkEbbasPjrnYlsH8l58SoJcsNOlokaUalZYUa2pDA+uSjnJjYYryYXruo8zyRlrjnWZAgxbcIIujMQTh1NxLyrIpM07zIv5JMDIRHWARUGILYxddqvOTKYIydXB2MNiThj9JVWzeRuL/+wqWEf1TgAEAg8xMLtJFnKQAAAAASUVORK5CYII="
  },
  {
    country_id: 162,
    country_code: "NO",
    country_name: "Norway",
    currency_default: "NOK",
    calling_code: 47,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDZFOEY0MzE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDZFOEY0NDE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlEMEZBRTM0MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0NkU4RjQyMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+9564bgAAAchJREFUeNrslc9LG0EUxz872Wm226baJKKHSNNTwVbJQRC9xmsvvfgHePEmiH9Jj14KCgrtzUtBsIdcpLRioVINliIKkkMTxehisma3M/lBG9hoXUEP+mDZmfnOmy/v+97jGYcvB32CrFrFdxye/tzg7VqJ6ewMPLJY3nzHaydPaSSLSKVACMKY9ipz81YW3JLdPWKT8/NgRJ+3MMP4e67XvqpH123gIYvL9IrFYKRSwT89VSRe++ORCNRcvDMHtG9Y4vjWl2BEE9bU97CHXreg9ipCV5KqnsDgKMn9PFhRLUE44qWCFYxoSQ2B93Wdj6vr0NUFUcn8wgo/Rl4h0v1wpFPhhyI2sN4cq3/swltPbOjrBk+RHJTAqVy7j1Vx1S6/5nlNBfyG/P/jc1nEc5/3giNuSf1rl9XcNz4s5uCBZGpynMzwAOJZf7PqQ0ldNvxiB2KvWVy9z3n/aZOJ7KzKsc3G9hyZdFJJvqP20fZWu4rUpRfDF7ZT4uSAgqlybEiQEfblYzLf1/g9NIaIJ8O3k0gk6DidbLsudz36ltVUfiMSYdnUfcMSY5qdC6qF+f/kUa+1vFI28GuMxfvpdGPEsVvgjf0RYAA4FZnydWrl6wAAAABJRU5ErkJggg=="
  },
  {
    country_id: 167,
    country_code: "OM",
    country_name: "Oman",
    currency_default: "OMR",
    calling_code: 968,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDZFOEY0NzE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDZFOEY0ODE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0NkU4RjQ1MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0NkU4RjQ2MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oZcAewAAAahJREFUeNrUlbtKA0EUhr/ZS7yu5iIWIoKN2FioYCPBS2NloRaKlY/hY/gSVhFUlGChWATEQhFLK61EEhW8JMRks+OZbDotLDYJHhhmlx32O2f+/8woPz11B/SitaZUhP44WDa8vkB3F5RKmkTSsveyPWYmonBkjPFVhpFRUPLmxgQs//c86BTwzRUCJOoQsPog1uFxew3La5LGOOgAHu7hICOJuLJERQ62CGpQqcDKOvT1w/QMLC6hh4ZhcyuEVqtNAJtiip8QF23nFtFeH/ryAnWahfwT2KK31YyKjZE6OuFoHyWVqcwuKncGs/OQOzfmEkHcyHV2CILQTOkF9OEemGF0TaZgdQMkEbPV+uRYvC+GQ0cCVn568h3b9erb+VxotJMVtlNC4DFJoiyuL+SpJxkR2Kn3UM0Xg/mhuUwYQDwBfjV0uDFYaiDqdmqE7fz8aoz123Mk5mpTOH/OULcaLPIqgaqiaB3o8FhtBdiqaiquYjvdw1u3Lb0etAas5EStyb2xMyEXRkqWl4IWbrVMg+818qbXy8H/dnVbwV67+vixHfBvAQYAQ9x1aPT3zwwAAAAASUVORK5CYII="
  },
  {
    country_id: 173,
    country_code: "PK",
    country_name: "Pakistan",
    currency_default: "PKR",
    calling_code: 92,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNDZFOEY0QjE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNDZFOEY0QzE3ODQxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY0NkU4RjQ5MTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY0NkU4RjRBMTc4NDExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+95KRfwAAAndJREFUeNrElj9IW1EUxn8vRqpNrS8xoKnW0qBQzOTgpHZQoXTp5OBUOogIlcbQTScHpVAdhEKGDI4OUsSp4CLS0rFdirqorTXSanxIbXwxMXm9793bJhUpSB72wOG+c+6f751zvnO5mmVZSeCW0GPOydSbKcZfjUMTbkqN0D2v+qBkvAqp8fCfxFPWzh+gmRqaV7sCYE3t2oHOe530dvRi/bTAUv6c0IxaW1DrXQG2d3yB/gf9zI3Msb67DnkFIEB1XSfoCaKlNKp8VXKubGD78H1oibSw8GyBmcUZkh9FU9xU8ycQrguzPLHM2OMxcpmcS8AFGVX8SdwxE+8SEEIefiZU9EhXSxftze0MdQ+Rt/LSf4F4LwWcBv9dP32RPrb2tiiYhWITVsgwEm8T1FbXsp3aplFvJJlJugBsQmtDazHtXpWFCmULzZ5lnRKcGCLvdcLn48J0ey5PaknTcChMW6gNjL9PyRfynGgCtEEYlbhUY0HSzf1NzKzpmLFHMaeX7Uz8OUlTgPZ4SpHxZQHfgNRWiqUPS445eH+Q4aFh+GzfvkKzimRp2XLNgWYC/oDs7bKAPbKeE4sTorQFxxUfiDP/cp6mtqYi6HWYfj5N9GEU49BwgVz27VQPG5826JnsYWV8xan5QMeAo0fmEZWeSnzXfKx9W6N7stvpbXS1t6ybyw70Nqy+X6V+pJ7Z1Vl2jB1nSq/WMXMm0ddRIk8jGN8NyWyr3Ih/R22T5Q4cHBww+mKUWChGIBggk82Q3k3LKBskGd25QErBbbb6ZRqtU4vDr4cyf3ZagyVrcBO49Adsuab0vJ9/Ax+r18fxVb0+bKxfAgwAbIbG6d67HZUAAAAASUVORK5CYII="
  },
  {
    country_id: 179,
    country_code: "PW",
    country_name: "Palau",
    currency_default: "USD",
    calling_code: 680,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNDdFNkQ0RTE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNDdFNkQ0RjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI0N0U2RDRDMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI0N0U2RDREMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ffmgGQAAAhdJREFUeNrElc9rE1EQx+f92GR3ze7G2pi0sVKrJ5tLEVSE3kRD8eDRixcP6kVEEHrx4v/gpdCDB0EQxaMHBQNtb1FUMFpbwYrWxJhks5ts3J/PtwpSaLNhK8HhsYd5vM+b2e/MPDT3qALDMQxDMxqxh4Dxr+WnOr7KGBKJpdA2hoDxnX9BU+S2vZGanT8orc+kVijyq3Z+rVMQSW8s+dlndOAFtB/3mz0hIPfm1Hwx8yCf3OAc09WW28W7n268tY5Nye84PRqNtsvIU255o4zhhem5Qq4MNoAH4b8hACL8tKTLr5+86pyclD5E03eQMQDccPffPnylMFYGE8AJXSGaX2CCKPXuHD2fFhqGl45dIT+c3Cnt2ensY+juoCx3qqp+IbtQdSZiow0/fVwrgQDg9zkUwAntuYy7ASNx6xqptBUVTwB7hfoeYvgQG806nhadqu7uswIF982rD1oh7bI5G4pG+h56Ycx2/RRBMdGjiepSq7j0vQjy9nyAO3umfL92NZv4GltGHkuaNm99XFyrT4MCoZ7o9+JJKBA45Pr7h3VnXKPN2OiA4Uxik4+OS2+e3lu/1nQyYc9ScIJkafPcxZelFf3MIWl1N934t9d5Tzac7BG5MimvEuTV7AMVc4Zgfzy5wctulzOEm8cEleiqpOveyHLzLAMs4W5O/ELBGxjv4KH6J64UMfjaOgb+/1MwRPQvAQYAH8/QWrO3BXUAAAAASUVORK5CYII="
  },
  {
    country_id: 258,
    country_code: "PS",
    country_name: "Palestinian Territory",
    currency_default: "USD",
    calling_code: null,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ3RTZENTMxNzg1MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ3RTZENTIxNzg1MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMDdFNzEzNzU3NjNERjUyQjNBQTU3RjQ5QTU4OTk1RTciIHN0UmVmOmRvY3VtZW50SUQ9IjA3RTcxMzc1NzYzREY1MkIzQUE1N0Y0OUE1ODk5NUU3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0ETvLAAAAYtJREFUeNq0lT1PAkEQht/Z2zvDHSCgiYbOwsrGvyCJhbGw0tbWCDQGEwtbC/+A/gBLeyu1ozBWGgsrGhI9SbRQlBC8G3fv8APouHUzuWQvm2dm3/lY1DJZSIF/WFadqGM7dWaEoWE2k83S3vUyEKZjb0uHlQPb2XEzsKRJ9LtGk6Y7TjmdhrCMo4WmS6eqlJGWSXQIEcR0x9ny0kaUIYV2P3uK3t9DebFO1tcmanuu/xQEgYGoY+vHPp3ny3NOtobRsSn6G/BweNDpdsfjhmE4LIiudFBU4UET8J5fCoX8OO3CPNwmqiNjbis7mbq5HY8b5YxGtY5qfHGZXxNKzXLQlba7HB3tFzPNY2o2OPrzRy7+Pjhwe4wcIDVBfrRm0um7n8JShXw3QCPhbIL8jZdxPYtSBe1cgEdgJglYgIUU3N9dFalUpQ8vgK9mbeJWhJoXekrzxRxWttFLMXzWJUJJJ7X6SJtxNi9WyxZI6RDqeImMPATydIE2NpU0EC1iy9IZ5uTPi772lwADAA1uTobZeCdSAAAAAElFTkSuQmCC"
  },
  {
    country_id: 168,
    country_code: "PA",
    country_name: "Panama",
    currency_default: "PAB",
    calling_code: 507,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNDdFNkQ1NjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzM3RkFEODE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI0N0U2RDU0MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI0N0U2RDU1MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+IRlRqwAAAbFJREFUeNq8lksvA1EUx//3TqcPtCpSz5BYioUNESxJvGJBmlhZS3wCH8CChYhY+QhsfQQJCemiC+xKUDSNKtOhNXPnOvWKhZFcOj3JyZ3JzcnvvO65l0kp0wDaSA0oiFMwcdo9BesqDS0aVTENk177Pj7wba2GhLnbjiTNmTaEIz0hu4ILRYHl3UtkDevLEc/BRxcmxjdOsL5zjunNU+yfFcCqAe7vrEV7OcTDLJop1UNddRVPtc9tY3S4CTMjrSiUBCQ5wVgVwJaQmB+IIeTnKFoObIpa15j34DLkExTUuWvbi4cH2MgDeXWnfM8Ukapo5IxlUxZaYpQeG1pDvTq4YymhbJR7EuiM6kjubaOeVkH/yuC722f1AtHZzllB8EgECGjQAn+pcVhXtyq3eB3Z/VJakX+EFqZjqHG1yfVnoaZzDBOZ1S3Y2Tu4jb2Kg58Sx0hNL+BmZQ2p2UWYB8kfM1NxcE1fD1hrCPfIgDUFUDvYqza5/iMNY5NojMfpzqbGLd9unHkPli8WonMT4KEgnGIJUthgXPcezPw6lfQdxIOBX0em8fH6MFAdeWO9CjAAKGmKMiin+isAAAAASUVORK5CYII="
  },
  {
    country_id: 171,
    country_code: "PG",
    country_name: "Papua New Guinea",
    currency_default: "PGK",
    calling_code: 675,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzM3RkFEQjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzM3RkFEQzE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDMzdGQUQ5MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDMzdGQURBMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+A8tj8QAAA/9JREFUeNqcVUtoXGUU/u5z5t7x9s5MpjNgbLEzNYyEJkwqCBJTG5AiLUJXCbgRpBBSQrPpQhSSjeuARVG0rq24UOJCu5AuJAsfCRFja5OGpLE2tslknjdzn7/n3ljJZGbMJAd+uPd/fed83znn5wCwrBDCp9oxvCipWHBqcGiSx8GNEwB7gwNHh8U4A3Nb7/XvL99xTZwpLOF6LY9uMYwY3eCAHQyUbrIINNzpQe1x4Brc/20v/xeY79xI+U+MVh5AJ+A0sdAuuB+ZU+YgdjBkvysift6CYVD4/nGudcR19sn2Jl4rLuO+a6FXUII5ryXiDr28DFQsCUdesCF1m3CK5AQtOiUOrXxvKuVPjoGXifobZgG9RL1GPDZE799JU8aGgPAJF+lLFYSf88DWJCTfMJH7IQ+1y4W5JQQyNEhDo0RDaxXUmKjjvehxGMzDqmdBesIdgVoFAR2vmtDOWtBOOVBPu3D/5iDotPisi+2bMhYu6gFlgsqaa7zXRFHE0+kTuMaV8DpRv+k56BHCAe3+FWaBR+J8DSdv5pF6uwy124X3iAP5B2bRhg0eyrkaOscMWCbfQHlL4KGhITy4t4yxy1dwy64G1H9rlZEj6hWKmoUYBI0h/5mKtdEoqr+K4LMuhCiDuSZg68sQaj/K4DhigFDZHmCxFfDi4iLm5+dx9/bt4D9PqXuxtIJJNYWrahJR3cXKFzLWP1dgkf/F701kuxyIzzvgH/O4O6rh6AUTCO0g8gLqwPfVuJldkI/gmtaJDvL7jmNC5Hy9eYRiHrQzNtLvV7B6NYK/bijIvFPBw+sKvAqBSW1ovNdCoRAEQQi+v7FKeKVwD7+4BvpkBSLv17ALe4vD+lcKFgajMB8KiPdbCFGSKWkXToVvrnEkEsHk5CSmpqaQSqXqNvn/c3NzmJmZQSwWC+ZWqc7PEvgH2xvwW26ckWoUsRpzUF2izkdOiJTJhVsypKNeQznXuTEyMoLx8XHIsly3ybIs0oeB5/nge7ddoU53iTpehIr1JL/T7STdg7nCw/iD0opkri6IEBXWuo4zmQwSiQRmZ2dh23bLMnMcp2G+V1Tw8VPP4LSk4DebHhrCUY97sB9zsDd5iHrdo1HeN7kGBwcDGaanp/fPAyqdDwn8zXAcy/TwbBoeJIFeKz+zGdprIE9M13Ukk8m2EtAkOd4qr2Gc6O/gRGQiEhzZa9qvD1VO7dhLUgQfUfRdlHi/u7Wg4/HtRJzL5TAxMYH+/v5DAc9QtxsoLuFrq4ge0t9PPndX6C2B+/r6gvIaGBg4dNQFz8VQaRXvVtdxjJfQScPeBV76t+/XDU3T2PDwMKMsZ83WDzrOyRpbjGdZNXGK/RzrKv0jwACqn6gx8GMIaAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 180,
    country_code: "PY",
    country_name: "Paraguay",
    currency_default: "PYG",
    calling_code: 595,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0QzM3RkFERjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0QzM3RkFFMDE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDMzdGQUREMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDMzdGQURFMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+8tTVLQAAAOtJREFUeNpiPCeo9p9hAAATwwCBUYtHLaYZYPzz+csnIM1LtEsZGRj+cHMzfL10ieHn928MAmYWDOxA+u8/knLlZxZmHm6SXPoXiJ8d3s7w/OAJBl5uPobv314yyDj6M7DQPKhfvmQ4MLebYfqfNwyb5UQYLqxbwvDz6jXax/G/X78Z2L7yMjAKcDPc+v6I4ddbUHyRXvgx/v//n6Q4BoFPGzYy3Nm7k+Hn/98MqrZODCLhkaTa+5nx09dfJCYuJoafnMwMXw5fYGD8/ZeBy8mYgePHP4Z///6SZjGDxYrRSmLU4lGLqQIAAgwAPdxSxGn7ZuUAAAAASUVORK5CYII="
  },
  {
    country_id: 169,
    country_code: "PE",
    country_name: "Peru",
    currency_default: "PEN",
    calling_code: 51,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QjRGQkQxQTE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QjRGQkQxQjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjRDMzdGQUUxMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjRDMzdGQUUyMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+b8OOOwAAAGlJREFUeNpiPMPA8JSBgUEKiD8zYAF/gJiNi4tB7/FjBmYhIQZ84N+PHwyXZWUZvr95w8CKWxkvED9jgTIYkGh6AF4mhgECoxaPWjxq8ajFoxaPWjxq8cBbzAJt8vDiavrQovUBsgsgwABVWxD3afjyOwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 172,
    country_code: "PH",
    country_name: "Philippines",
    currency_default: "PHP",
    calling_code: 63,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QjRGQkQxRTE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QjRGQkQxRjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCNEZCRDFDMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjdCNEZCRDFEMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RLn3GgAAAxpJREFUeNq0VUtME1EUPTOt0JYpnwJCVBQh0agLZWsgMXErGze60R0uNDGiK6IICiqkAgFjRFjgl5AQDX5CMEDih0QSNBiDIJRfpOVTSqG00EKZ97ydwWKEhXx6k5np3PfmnXPP/VRo+Dhmy7k7YOz50APEi0CiEZAZwBFSEzgZYEfZEzvy7vfB3T0OpEQBxm1EIHToInw/3ehPQ/ZZD3rfncS5S2mAZxHocarAGiFEEfsnZ5mr2Sga04GwJMXZ0TWF/IpvaGwYIB/JvydSlZ7zLZV6lp7GtRbrGodxvbwTlnaSP8GgXksshMDcTyvawLLyWlTVhYKH3zFvmQFSKf8Rm8//CjCbp4wbFCcbuQDoj0CMywputE16ca3kKx7V9VEN+FUCWkoD4xssrj9BLgxB7s0A99HBsosoieDOWrCh04FV7IzXo6YoHZ9fZeJ4Ziow6AFG3HQCqSIIm5OaT5jBHNUETAcKeiB8N8Qd+RCkY6s+rG2WcbX4DYY7xqj94oFI2i/L6wT2WYzMUakIwO0l5A2nIvIB0mGIUSfAtTEQt2cvC0TSOosBkwcMhShr9cJc0MScjikmSvr/Dl2rRApZjRKBitWo0gWO4Ax8yakS+dvkOboZFBpXlt4iw1rMZ20urpGkDUo9eQ9sopTwvQonQZcKMalcKbR/baalG7aci3B9aUWcGA1dVCT4uqUmYO7tBhs+A01yDZidwKSjJDcV2VwbxJSXwQ98vRZYc+/AXv9UEUUXnaoWGF9ff2uDDMJ2QbP/03JLMQhsEULCZfp9Xm2xOS+seYWYqKjCot8BfcReiDod4ckbmmhrDxCZBoVGCvKyVz/GaKEZnl8/oBMToY0xEeDSpgaIdk2vJlp5uJpaYLtRjOn2FtooQYo9SMHJmwZVgf2jlNNKCKZT1LqH1Dz2D8KWfxv25zXKuyFqH5ERtwRwBZjNQVh4TaBZYD4G280CjJc+wOLCBPSGZIh6/XIe2Rb/LXK1MhzPXsCWdwvuwU7ohARoTbFbGuGqiN1tHaPWXLNx+n09jQ4DJNMBGigspKAB+y3AAHmPY4VHbneXAAAAAElFTkSuQmCC"
  },
  {
    country_id: 176,
    country_code: "PN",
    country_name: "Pitcairn",
    currency_default: "NZD",
    calling_code: 870,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0I0RkJEMjMxNzg1MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0I0RkJEMjIxNzg1MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMDAxQ0NCOTM1MjkzODNFQzU2REU1MTU0ODY4MzQwMkMiIHN0UmVmOmRvY3VtZW50SUQ9IjAwMUNDQjkzNTI5MzgzRUM1NkRFNTE1NDg2ODM0MDJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Q37dSAAABJRJREFUeNqsVGtMU2cYfs/p15bTy2lLKQUL46ZcHBlIXbEo6hwE2QZ/lhFcFsMuWWK2OTez6eIyl2X3zR8z8bIoW+YSF9wCGeiUjdFNRRJH8YroqEIr0AKFXml7ei7fTlGj/Jibxuff9+XNk+d9n+d9Cd8JmzaFHllY8t33f7oHXabMtIoSQ6HHEdWl2nnlhcHJgFpnlseqmLGMesvvw1y/3amh5XBXROI4P0OJdrUMkCf7N766siAgbXWT579oebFp6f7er4Yrqt6asF7/pXttBrO+4RFUuODzA1ff/7ov6nCDmro7NYTCL2woQyP5pc0OOtIb2FqT3thk7fzomYBn6lr7jrjG+M4667I1kSWNyx1S07tdUz+1n4yyDJh0IEXzmQgAPO8ZFSS0ihj97Etiz8GxtFzExpDTubi6JBbhLnbaZZkpi42qqAT5MvLGTg+ohFhpjrp+orAjaAQUu80jkMDLgOQBxQETNz9HQy+/YSYxoFnMeZ3XWI2Srlnpd3pCvhDISJJlpcVF4TiesPViUxqj13AYGIIUyQBh8FMwrQaxTj0t154xcJOIwBCXQpgGjIBINIG2+TMOlG3ZvbWqtpCDK0PNnS65dcljTQ2B6scPfvLpCta/LDzc3372wzOsTWryey8B64W4urLSiaQx29FSbb5v1cNUkk/dZqc4SUS7aCToNQiYFPWTT5Sn/7FWtcF94ueNuy2Nh17afu744XOmDEk2JWxqaM4p372tbeahTH1rrWpPuCct6geSAg5bF81kF9shdXCBlqlbFWAMPl4Oe7f0VK7oERg/sErAGOn4+K/fdG2a4s5CFgRJ0ET/GvK/HTIHLyEQYnB94uPNLTvXmJ+vy7XoUgwSj4enZMmRFqcriiSg9utkKveoZ4S5UL3cUmMJa/9W9+nk7mEBE1gioyt3dox5KCPgKKgJQiWbHJrugWz7OBf1emGBGpLp+MjU6bZzbQ48JVeClAdM+mK8CuSvr55dmtvrHqx7rmrq2NBo8+GyJ82xI71ZITdeWmkgJfokkEiAEkBGiA5hDgsaOaAgiCapKGAx8AJokiDPAHrRc060kffJFkuz9j09Ubga2+hXYjnEt2PvaYrMPsn5+s0Lx90qoHgxjuRcIolb8bwjm/jOsN543MovoyooP2UL2Ndvf63PtaG2fuAKm3Zx/M2mErRvx2HLo1chqhCLyXmE/xN09LducySYWmAO1uR/IHinny3ZFQk6HTFmxptz+XKmuOoiNYL7gIRhQroieYXCcMQb7jrUF9fn9ZlJoq27oONoMhemQBEU2yNvdE/8F25PSoRCYL2K/a1F3tGAy6W1LmMuXDSaaOdTBQbOsxCUs4kVFVcGJ2Yo3JtqHkNyZJwRMidyBpzFqYrj9mMV6aUzWB5ObPxN88SlnHMIYzz/xPwr5ipFSdxMmDp6ihZz9ePOdaCd/eGInkQCke7HrMgpiEUoEZLEWPC9CRcvEeKBToQMjLGEyiSRjwCR9xYVeUew7g/E3DGaoyPm6UNCgAEuAC4EDxCsTwhEUEl5+qqwxZisfIDM0wGmuNT0jwADAIjDExM8WLDuAAAAAElFTkSuQmCC"
  },
  {
    country_id: 174,
    country_code: "PL",
    country_name: "Poland",
    currency_default: "PLN",
    calling_code: 48,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCODVEM0U5RjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCODVEM0VBMDE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjdCNEZCRDI0MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI4NUQzRTlFMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2uLYNgAAACtJREFUeNpi/P//PwNtABMDzcCo0aNGD0ejWe6K2o4GyKjRo0YPBqMBAgwACfQEVtJhm9QAAAAASUVORK5CYII="
  },
  {
    country_id: 178,
    country_code: "PT",
    country_name: "Portugal",
    currency_default: "EUR",
    calling_code: 351,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCODVEM0VBMzE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCODVEM0VBNDE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkI4NUQzRUExMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkI4NUQzRUEyMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bRhArwAAAq9JREFUeNrElslPU1EUxn9voo+W2jIUKjiEIYpaNQRMVDYuHBIT3JqwIU5/gDsS18SlJG78A3TDBldiDEFNZHDHQjTBGMCWUQZpSynv9b3rrcXEBaCFoie5ue++m5fvne98Z1C43TwNVMuVYCczVHxph6GRZQ7JfUWed2l+uWb0zQd+2/+F+VX+k/09sADF1lDSKoorz8p+Aisit8c9IMEqA+vYNRaOoqDO6rnrXXKm7wiakdcplabILL4qm9MVKcpr1/g+6UGT8lAGAihBcEw3x0JhPJZcxlXaIws8OqtTM1DJen8Ja699JN9W8aWjjOTdNcSyQHUKSfWSSdu5aZ51zLHWB92jLl1OA/FjTaD5SfRpJG9tkLyxLL038o65vp2QMFxawkkocWkcmCHc1cPgtevYNpxv60drv4lDEC20RCYsXzr5xXtrYEcjUJYiXJzm8fMQja3fiFlTDL5bRQgX24qiX7IJWbDRso4ynMEbK8LxunukWmQLlYumC17NBfGO+ilfMLA8DrbpYEYNDk95SJQI+SOSZXWTpT3HWHdZTJm8j5aSCWaIJi1OuaNcbS3jSmsFJ+0xVsqS1N6LY370YUwbUtmiADHOplLCZHG1mCdtn+h+0MDxF0+50DtPrKSYNwdeEu4sRzszjZ6sQIlJcTVYeXm9fR4H0/SOhTkaSHG5+SsP6yLULw9zZzLFichBMtZnJu/7CfYcQK2zcfOkWpHdKb5lg8h6LUskaYOLdYsUSbHVR1J0Tkilj3iwl7yYg/Izv/NTVHkWkMT2HguZmIbMEU0wNB6S9TLNUixF/EMxR6IqiRkPojKDMETeVWtnqn+BZz0vTctarTEx78cYt9CQ1FbbuZi6+9mdRI56YUoPfQ5CspBv+uy+LRbY9M2Rx//H0aeA00cW64cAAwDqlwCQvzogDAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 177,
    country_code: "PR",
    country_name: "Puerto Rico",
    currency_default: "NUL",
    calling_code: 787,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qjg1RDNFQTgxNzg1MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qjg1RDNFQTcxNzg1MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iOTc1NDI0M0UxMTY0OUU1MTE4RDY2RTdCMTg3MDk0QkQiIHN0UmVmOmRvY3VtZW50SUQ9Ijk3NTQyNDNFMTE2NDlFNTExOEQ2NkU3QjE4NzA5NEJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+giI5EAAAAmdJREFUeNqslU1oE1EQx2d2Nx9NyKE9tLb42WNFW8SP2mJPUigKCl4EIyhetD2kJgQrgopoRCliFUE8eyh4sBXFgwcvSig9CS0UayqpFcGmSUiyyTa7mfHtpmnwtmQz/GG/3vvNvJl5b3G/Mv+Axkfg6y+AFIEMiNAckxbp8Fn4ElZimuTrQYFmQmRoAl/ESIwmchck7mLoPH3IVGANTDY7RAuChBVAInaBBGf4dbR9cqBvPZF0qyo7RNP/jxDYAQ9vp8eueQA8xFKFqg4acUOWRHoNgE0LYWpgmL/9YCdWR6NIC2gApS1PpvITNzbUYoHZaACNNZCZDb+/HAppsZhIhWJJvDd279FfTBmnh5aAlBLtRERJlJ3tlVHUsLNTLxakvkP650+wr5vVkiI+pDbclm+B0U4FPk5wtJdWVthbRkWywa7OpCPH85OP4UCPr7UN11PleFyLRtzfl32i8a1loaXCFbgfgUeiIGUbNVQsPs/HfcELajIpZvk1lS9fktNpL4oPpmOpNtgL4JJrfmyhLQC2tXozmc3ZGbW/nxRZxCtzfVnGyZb3t4zxo7S6BIoOKNvcMtbVGB3N/vntejvTEryo5nLud7P+amt2dRWfPTXODS5AhYu8V5JQst3kVvMhWQk0qjFa9zqAej2czec0ZnLS19u9vKXBYX1uQW/SljFjFzlnXwe/fJVlLldHVExRA8IaV3SwOKthBKdvtk+dOPY38dNTLFacnIC1mQp04No9CAfpjThUV7fPKgemmAAZrsKTMbrTzYVlFhVEd1P+MgeVuWl56DlHAlRYJNS5vkMc2j8BBgDaEDAtyJBdYwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 181,
    country_code: "QA",
    country_name: "Qatar",
    currency_default: "QAR",
    calling_code: 974,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGN0NFMTgzRTE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGN0NFMTgzRjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY3Q0UxODNDMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY3Q0UxODNEMTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+iEFoawAAAcBJREFUeNq8Vs0vA0Ecfbs7uy1toyIiIvFxIiTiIOFIxN3VwdUf4eLiRBwcfJYEoU1VNUpCGjS+Qor0UPER0lJNQxUJJYLumm45UEezv8wmM3uYt+/93rxZTlGUR3wVnSN0cIjI8Tn8i16cbO5BEAl4QcB/F6GP6XvBcRxKaipTExx5d9UPoYNJkd8vfLNL8AxOI34ZhZSlBytkTlEyd36IxrAybIV3zKECE53EnvH6uBMLPRbEw1GY8sxqfxUGrP9k/Jp4gaOzD1tTLhBJUg3GnPHKkA1b1nncXkQg6nTgiaBNj18Tz7g+u8Ta2Ax8zmUIhGjD+GzHD9+cB8H9AAUUwfM8E8YZu2bnmFBYXob80qJ0qMiyNsDGvFyYC/KhM2SnUEEjRJsAuQqcYtvmpn2+AEdl5rSSuralGW29HahsqMPH2zvkjyR7xnJShmdgCpuTLtwEw9AbDenjpFWAJO4eMNfVTyVfAKHO1uQ4rY3a4e4ewWPsHgazSdvIjFGZVy12bEy4qLk4Gpsie8YpebetbtyGIvRWEsGqMlxd1ViPpvZWFFdXqK5WkjIzVz/9dHYSol5SfwLU1BLYXBKfAgwAZJi4vg1/oSQAAAAASUVORK5CYII="
  },
  {
    country_id: 182,
    country_code: "RE",
    country_name: "Reunion",
    currency_default: "NUL",
    calling_code: 262,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjdDRTE4NDMxNzg1MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjdDRTE4NDIxNzg1MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iOTg3RkEzNzQyMTUxRDFERTcyRTlFRDRFRjVGM0VEQzQiIHN0UmVmOmRvY3VtZW50SUQ9Ijk4N0ZBMzc0MjE1MUQxREU3MkU5RUQ0RUY1RjNFREM0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+w8A3BwAAA3NJREFUeNqUVV2MU0UUPmfu9La9LWv/KIsFQUB0FQk/0aBxNwFMDLAqkZiYrFljoglBFwOa+CZISHzyQQk+aDA+uEB4ImRFRQgQXH9YeABlN0tWYZdtC5GWdtvt7f2ZM87dTQjSgu1J7n2Yc+abc77znRl8ctXedLb07devrluzoPDOe5EvPj/49KZ/no/0xPqEGS25MxAJQUJzpnYQu2tB/csU2PrXWx9c7da4EwncwGkPYKOo0vtwJrBaX4xPAJ/89NqmjuGtWTveYlzj6ErZGDqB9AOLSzFC7O5CAITUQLPCxtiZW8vaBneeya00gtmQVhb/C02SKf4MsPtdcYhY/SCJyhE30kWXd1z+cNdYF/eXovpNqU4F9IxcmMzDZA6FDV6sVxPGGXPROey6JwgMZPfKQE4lkdCLPl9xx9jLG4a3F5wZD4QynBznxogo5yC5CGa1OZUJygwhmtosTY5Jc78th4DHOOiS379EIVkLqziGdTS34olqqnf2lx10TrR3a8+97Us9zhRx1y+JgYNwap/zR1mcj0qLMIGSpEqNN9AYZEjRcCZTmbm6v+vXndtWvdB522vMXgIv7S6yJfbGzdqDQYzqasO0sQb1hMQhd3Xdi4/diXubunDna/73eyg7OiWkZqCV2a6AgG/b+vl1x8Nr7iudMhbXqnbT0KZF0Zj/0VSw/uwpZhY9ore2ulalaWhEECRduk9PhCDh6bIpaAQ0gmwiLS8MWnVlqkw7e0H7e1SGQoTNQEskvZSAQPWT0a8ArFo68gAHhvqCFTtR5sRYY9DqolGxuaSVzPA3jw3o+14//Vlt1I6ze7rm/rxx97NVHyXTthpElTu/NwnqXELTYFWjuvR8pf04BUzML+sd7v09P/jR8jdWRhcrYfxZvLLr4v6L4/0Qm/vD2vDiefqRvZnll8rlVp3XH3JUx6K/EEfmTKz9vrp0AMwA5uOqCBZZOFK43P3TdjCSXqR5EzQdYw97lF8xx1OBFR8/tOeb6+/23eJ1WqISlj6ej1MiXVpz1J4zDsUIupoaGy9CCjSSUhKQ7YWGU4iaWp1mF7OOjLKeLanfFoZ5jRYAHA6FFqftl1L7jyJUxlxi6l4Td9zX0tOY5v+vRqaFAlqBqAK9G2I1WUtgarieOTn51HdQ9Xm4TDT1ygilDIfYqPWvAAMACcVzuqlUzzkAAAAASUVORK5CYII="
  },
  {
    country_id: 183,
    country_code: "RO",
    country_name: "Romania",
    currency_default: "RON",
    calling_code: 40,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGN0NFMTg0NjE3ODUxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQTJGMDNGODE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY3Q0UxODQ0MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY3Q0UxODQ1MTc4NTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vo6AZQAAADBJREFUeNpiZNCuZ8AN/iybjkf2koMAHlkmBpqBUaNHjR41etToUaNHjaad0QABBgCcdAQtf60IKgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 185,
    country_code: "RU",
    country_name: "Russian Federation",
    currency_default: "NUL",
    calling_code: 7,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQTJGMDNGQjE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQTJGMDNGQzE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMkYwM0Y5MTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNBMkYwM0ZBMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+I9CATwAAAEhJREFUeNpi/P///1MGBgYpIP7MQB/AC8TPWKAMBiSaLpYzMQwQGLWYboCRgeH//9GgHrV41GKqZCdgXhrNTqMWj1pMFQAQYAD5egotBoZoiQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 186,
    country_code: "RW",
    country_name: "Rwanda",
    currency_default: "RWF",
    calling_code: 250,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQTJGMDNGRjE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQTJGMDQwMDE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMkYwM0ZEMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNBMkYwM0ZFMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2RPnbwAAAbJJREFUeNrEVstKw0AUPZNMm0QN1hZq8QE+FoILdSeCoHt3bty680f6B/6BH6AbN4Lg1iqC4EZRQcH6wNLGvmxeM96OFdzoKmlOuJnkznDPzL3nwjAUS2UAY2QNRAZJpkGTKWWM/rtPwHyABTZNPnN62b3VdnTEOnHrGNQbWDAfkNXquHKn8eAVyJ8ics/miAMiDZtXsZPbx2bmhLYR4s6dwG5lC6etJUUePbGkkExgfegC29lD5LiDtjAxazzRaOHGnULNz1MhIiemNFMtF61bCAof0kZmzBc0wwFMpt+Q0x1axGIgZlIN9944BRfgLMBjZxSDWgfvQQYdaaj5GIhJucLAUWMFBx9rqATD+KRUn7XnsVfbwJNf6IqLzlws1aNVdO88lPIREtiydY08r+H8cw7XVF+pVO02ODw7BllL1VKOO4zj1qzqY9H1kuhURmCAD1gV8dME0dMTpdSUmHQiNb4pug7BXi9navSRIQvRH5Ds4fBRu6z/cvQLOveoDkmApw0/GeJqy4xNXH/3GgSfPliVv3qgX5C83rSSERcSqrGGhMB7Vx472qvPv1BcXwIMAIuEkzMvcwIMAAAAAElFTkSuQmCC"
  },
  {
    country_id: 244,
    country_code: "BL",
    country_name: "SAINT BARTHELEMY",
    currency_default: null,
    calling_code: null,
    flag: null
  },
  {
    country_id: 117,
    country_code: "KN",
    country_name: "Saint Kitts and Nevis",
    currency_default: "XCD",
    calling_code: 186,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzUxRjY5MzUxNzg2MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzUxRjY5MzQxNzg2MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQ0ExRTQ3OThCOEZFNzE1NzlBNEFEMTBGOTU1MEQ0QkEiIHN0UmVmOmRvY3VtZW50SUQ9IkNBMUU0Nzk4QjhGRTcxNTc5QTRBRDEwRjk1NTBENEJBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xg9gqQAAA/lJREFUeNqcVXtsU1UYP+fe03vX23v73EOnEgWWbUpwEFcSJQooooCEaNDAZkKs8mjCgAjGkMEY+AcdoJskYxAjc8FNIYEoWaTRTEMgmcNkKS5sMnoHbZmk7drdzrbr497jadctc2ug+CX35Nyc3/nle/y+78DV3370D4ggQIFHMAgBoCBOJKm/glxlhbxv0d99re7PjiUhk2RRBoQc4VtBGFYBFQA4V2ICpWRplIN6qmb96GKXeHi91Nk1E4byaS1F0YzC5kBNOAEN8WgUeWOqjStDWwo8vY2evV9EvPEsaDR156FGQTkuQ2eQe+5Z+eQyT+wHp9Ua6JeyYzNfLhmgIRRDyE+zR6q9p+f22t+7/rG1SIyXFhUazWbzLGZ04JTwcGpE4cC46laAffvleNeGgafP976z6N7pTpA/B4mDXTf7Bw0GwzQ4vXA1c8PH1j+jRQ/wlOggoUDnfXX5gnjba25T9926pcHLDhoAhQC2bt1S/EQx2SwxL7Hb7WTDFOU1tLE7F/LSh+pLF1Uoa60gkQAEosTILPrc4l2bFM9u9x5qldOAFK9Op7PZbGTl1Oz3310FwPR6zcjZw7qCdvXVNZpAktKC2GxqBVGKL8IGwszGV6V9C9zuDs+6vdEBH5yUUGqV0lZ3wOYbHh9jnWeucJsNT91dxl/ohQJICGnQf6hpCGIKdnrV5fOT595yPn7DXb8idO7aBN1saSJxaKDqEP21pZA5qv25kY0BxQRkDDBOh44ms4AhhLeDeTAveXTzSDU3dGbXcG0zVFKM1ESXTK8CCa7sTfqrRv6lPr6vXHM7BLUgoQFYyZxO6pqGyug44w8xG1b4G8yu4YuudXuE66IJgBGTyRSJRKLR6DRnMZ1P1X6pry3TSjvZzssqBii6dAFm9AdKytQdLz9vbvxHqzjP5flkpfTNL8TB0PHjDURVDoejqalp8lpKqcu3MydrhNLz2u5NjA9gPkU6ka6ZfYe8CdWR913biu/8ZAu8sZ8KJVKBm80vWCwWIoCWlpYpZ4VSVcMxbhurvfeu+sKfgHgqAAVnSLP0M/rtg0Hlj5urXsG/O8lvZhYYjcaenp6Kiucj0fHHCsrv+/qrDnK2VYaiU/yvrSgKFCNIklrhBw4JuGOT8UR7IJ10gpSnDiorzSXzy9o72uYs1zTXc2v6+b7drBgh5SKeKrmMHajTGSUpkH3E6OndB1V1JfqkTei+QjNAJhVTcptl6QlB4dkdTrS1uBqcqBJetBd274J+APh0QLnzpqgxnkGNuSfp/Z9q9rCC38pdGiIaiGtBBgQf5SlCPM+PjY2p1WpyOxzGS9eyzTv0JR2aa62MBBSNgGWcJ4P/Y/8KMAA88JPiKZPG5QAAAABJRU5ErkJggg=="
  },
  {
    country_id: 125,
    country_code: "LC",
    country_name: "Saint Lucia",
    currency_default: "XCD",
    calling_code: 175,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NTFGNjkzODE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NTFGNjkzOTE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc1MUY2OTM2MTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc1MUY2OTM3MTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+RRKY5AAAAg9JREFUeNpi5A5cyEAbwMRAM0Cs0UwsTN++/fr29SeQQaQWFmIUMTIw/Pj0Q1FaAMh+9OQDBw/b//9UcvV/JsbfD95OzHGcV+r+5+Hb/yC7qGT092+/xMx12d9d5nh3Ud7e6PuXH9QxmpGR8d/zT+lh1stndk5oLcsIsfj38gtQkApG/waGq4ioFvfrAwf279hzXJHpMbOc7K+//yg1Gui2n68/+/pbMzw9cv/1zw+/GP48OhAZaPnr5SeC7mYiGIEMX/6FmQiuWbKclZGBh5Vh0bwlvjocDH9Y/hEym4DR37/+VHUw+vnw4todu06s5jq/jXfXkeMvLp7QcTH+/vkH+UYzASPwxedQe60tK9bFOTIYBQupuPDn+DHsXLs+xErt/6svTEyMZBr9698/Jmmpb/efmkuvWbiE/f+t3/+v/548l8NZY/O3e0/YFeR//vlLjtGgCHzzUc/QMdLkUkH4MwYmgb9f///98Z/ht0BG4Ksw4+Omxk6/Xn7EE+A4M/pfYJr7IV5ifdHMtpThFdCeVyzi4Nz9h4FLk8FYtLz0t9SRzTJ//+IMFpxG//nLyCbF9+3Vyh3b2f5+c2L4j5yQmZg573/+tJJTJuL3r2/sTNgLFEY85TUT858vn5kZfggxsGBo/sPEwPGOl/f3379swCRKcsn37y8LFxcDA9d7nIH2lxWXuYOjKiADAAQYACDo1+pXfbuqAAAAAElFTkSuQmCC"
  },
  {
    country_id: 248,
    country_code: "SF",
    country_name: "SAINT MARTEEN",
    currency_default: null,
    calling_code: null,
    flag: null
  },
  {
    country_id: 257,
    country_code: "MF",
    country_name: "Saint Martin",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 228,
    country_code: "VC",
    country_name: "Saint Vincent and the Grenadines",
    currency_default: "XCD",
    calling_code: 178,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkE1QjFENjAxNzg2MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkE1QjFENUYxNzg2MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMzVDMjYxQ0FGM0Y5RUZGMzgyRDc3QzgwMjZFRDA0OUMiIHN0UmVmOmRvY3VtZW50SUQ9IjM1QzI2MUNBRjNGOUVGRjM4MkQ3N0M4MDI2RUQwNDlDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/PJycgAAAulJREFUeNqcVU1IlEEYnplvvp9ddRcx/zK33MyfkDJajaA8FNFB7BZBFF0iIYgu1UGNrCCoQ0cJOgR1EsJLUhelOiVaoVmYmGu7LWYqW667334/O9/bfLumtuou+l5mmHfeZ573mfedwUfOPkP/mz/kudnadelMtxrNwQhQRnM49bsDe2+/r/K6Y8uLCcScINO1uwFAoIwISJIslBkaAxH5TgbWOk66foQl8sGy8PJK2umrlwHW+JNGNuCTCrYAiCIySvgEkot8BJmAIlpWFqk2hF46wEGtOBMxBuEfL0rAABxNKE6a5SIyQUsi45m2vGgcnCmQcjTOGwCLTq3vR0FLbz2SmETZpqFTFImUeDLm6R/2PhzZxTPgQPZhSOgarXgzWt7ztZTI5no3kRE6lWggvK1zyOvePvvcX9jzpUJQTEHWn36qeBksyi2Ktg1Wzy26Ns1awDZ4+4A3OJ9X5tIIJh0fvVwOpst3hnZLYsLjjo9P598bqEpyhs2wBjvHE2XzSNZjCcliuKk4gjAWZONocdgwScSkolM/tmN206xTHXBhv/987Vwg5Pa41UfHR15NeF4HSh6fHC7K1UMz7st1Uy21waR6eAvFhzobxpGoPTg8jgTjXF/Nxf59VDQ7Dkwh0Whv+Ja5+GgGnxFzePMXe08PNldOd32oCUdcYQLdn3ddaZjc6VIL8+Kmqog52kaPQSZoXmiGRporQyM/C66/21OSrwOzWt/W+UoWTlUHtKgTMIhbaxlsi27ruBB3qAkqEVMQkMqE33HZdmLAGLbc6LbxrJu8oRv134N/8qYj9NbBSV/5LyMmZw3MDp3g7x8T2hrHZIdamqdf800gRhhkD6RZd2CM9bjkzo3fPzSZIzJZ1rnKmaVYhiZpAvOfQKS2xIoCK1XOHFd9fnvOZEWxlkoZ2y5Kk2E4/TGhAGZatwhYU6NsMYI0VVj5HIA/T7zMBIORVZSp4kBqDBHMPxpYrkKLTwD9FWAAxwI1PaSIg8UAAAAASUVORK5CYII="
  },
  {
    country_id: 197,
    country_code: "SM",
    country_name: "San Marino",
    currency_default: "EUR",
    calling_code: 378,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzM1RkUxMDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMzM1RkUxMTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzMzVGRTBFMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMzVGRTBGMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+pmAcAgAAAlxJREFUeNrUVU1PE1EUPW86hGk7tbVAoaDpByGG1EBMVEyMceHGnQtNXLjTH+BKf4BxZ1g10Z0LY1ITjW6MCwPBqCHBFghpLTRAS0EoQqX0ezrTzniBLm0thtpwkzsvk7n3nbnn3Xse08jQAuPIsy3AzXJokR1HYLXq/xk4PPsWQf+rfwbmD5sgFVJYXFrAejQAoa2CcNgFx+kBGE2dzQXmdWYUtz7CZppEdK2A5K8SBvtHm0v158UZTO9u46Syg+zyF4jZaZwxSgiVJDwY8yJdzBx9xTllA775T7iq+DEfD+K9NAqLWYcriZfgx+8iEBeQv3AbZv2JxoCfTG6Xaa2Q11AwHfGi4uvKBJuYGmceV5zzi48xlr6M9mQFCasD9/AMdsWheQNPtQ79TVVjA7RbTV1i5GX+oS+mq0s5M9DUJMkjgKwiJnbRGUdxKiOjT1TgNpQRyRvh+1ZmWF2n+JAOmkCJqXoF63jYBFb9ixrA9KnSC07OgVttw+aSAfazL/D6h4Tv0SLO9QKzK3ZA3w9YrzHwF6sqLNQDZlxDbUBUa9wynLZ2BEPDkGIenHf/xJAzj0yiG1O7fehyfoDAZihebKhnG2guOn6tBE25Dt7ejTs3hjCSXoPbb4Bn0AVTxyXIOxa8i7yBzHooVqZ6tCMA1hTaiNrAdAsLqSK8cyoyhgx8GyMYZkb0SMDzzU5i5D7F5ajYLcr5+7YMj+b2hs/U8NTL9ChQitlMMkaoCjEiEr1sjxnWqH5n+UPfCzwBWKwHLwJ1vKAdsLIPqjVPMvcHQJX/MJrH5D7+LcAAowvZ8JHN4kgAAAAASUVORK5CYII="
  },
  {
    country_id: 201,
    country_code: "ST",
    country_name: "Sao Tome and Principe",
    currency_default: "STD",
    calling_code: 239,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzM1RkUxNDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMzM1RkUxNTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzMzVGRTEyMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMzVGRTEzMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+A/jZ9wAAAoxJREFUeNq8lk1rE1EYhc98mGRSo0UkJSmiUJtFFwri2rUIgtiiuFGwiMtiili02A/caG2wC8WVUPeCf8B/oCBFVKzWhtgmTalpk2Yyk3ZmPJeZ0GASm4WTC2/mfk2e99x77k2k5I3TK6mRakTLSegqS7BldKSoj+eDcThAarQKrKBjcDkdskszr4NIzgZQ6XVQDrPT7oDiEkHLko2nhIuSSgrlMrp0+KpcVaiuqAFLsCGUKxIwc6eKSpqJbJOs+AQWHwJeInyZ8Ml5DUGuwMLDHLRMgAPwBS4tdJ8t8hkRDYsCA7qMo4aK6Ogi8GQd+In24LuMbvGNjN+MA/uYq74hlFthC7mQhQ+zA9hIxoBjHKAPUBWZ/RUCtuPBeoDsN9rjM+sxr2/Hm2M1RqN9bAlyeBdqyMD3uQTy9+IuXPNecuoCrrLCGlCmJcZfAiMpwGB9I1en2mmMpr51CFcID2kVLD1L4NfwCTgHORBsMpn9WRO4chV49RZ48w64eAlIb9U2sI2lbjCA7DA5GVZJcZeuWdkEBs4Bt8/vdV1j+8wFVgr7uLoZ0DIUGHoYx4cXEU9lgFUOmC1S5ZkvMO5eB0JclQq3xNlunWuDq901oEpCTQG9+QPRF4RmXGVNnS25e5bN01OnXCn5j0D0iDffaUOxuKkUQqO6ip5bX4HnOVdpmRFqkbpnllg/n2JfeTKifd47tcT+BRbQsEED8xzPDZbxacyG9r6Xayi12JD/cHPVoH2EPhoyMHGfh/YLj9Gmj1emgGo0TT+hk4NVTD0wEVyTcEjfgaX5+COhUWmC0OnLe9BISYKlwNcin9TliIBOjJsIrBNa7MwfAXV6qLo6NWZGBPTwlv9Ka+WPAAMAQOHt/oOWjtwAAAAASUVORK5CYII="
  },
  {
    country_id: 187,
    country_code: "SA",
    country_name: "Saudi Arabia",
    currency_default: "SAR",
    calling_code: 966,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzM1RkUxODE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMEE2MkM3MDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjEzMzVGRTE2MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjEzMzVGRTE3MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VDw2aQAAAwhJREFUeNrEVttOE1EUXdNO72ALvQqIQYSIxIA+GCMvPJEYLzH+gN/hZ/jAL2jiB/jkgw+YeEkkgsRE4w0UrLTFdnqbzrTj2jNtANMpwgOc5uScM3PmrL3X2nufKlic/QlgiF3D8bR+9k21PcGe8VjAPTihprq/UgCrxd505h7aaFm771qGM/WoznOl8017v8L9Hu+eb/a3Hh5btMpCgABqUwcaZfg9Ps4b8BpVhAOnEPH64eNaFfCWCbXVhMfUoXBUXAAP9pgHRoJR3Bu7jbA/grWdLyjUS0jzWc2oYDw6iunkFFa2P6CglxBUQ9DNOm6dncPH4g+8+LWC19+eA+HEIT02ahiLnsGNsXlcy8wgrgbxieDJSBLzo3McU1gmqBCr09tUMIYdsjLcfxpR7m1aZk+PvbiZecAx0O1lhbTlawUk6eVkfBJb5SyGQgMo8blFzWPU8XtxHWkaoelFvM2uYSSSQCw4gDfZVfyu5YnQ9eiGu8fUrUFP8vUixPY4NVWocZ36DYfjWBi+iqnUNLZqO8hW8gj7wrgzsYD10iY+k5nxwXOUyzyCxtQrfWoE9y/eRZJePnz3CDOJCVyKn8er7HtkqN3S1jIKZg0+o4y52BV4yMCzjZcwabBXIlpReuTM4mypa/FgWvhJk3gnducqOVtfP5nIlTaQolGbpD5AT0MEqdE7g9RqzIQ0dS5UttFQvG64mjuw5CEtR0Nz8tnfb7Ng5y9ph87nDCJ7n53vlpO3AiZ7mGr2HF3TSnPXWA6TQxko8Pc5oLKWYDEbzihgYpwcLmCyR+Zkwd4L6yiVq6O1jkFG6mhfBnXOmzTIah+oyI86tmhAjMaVzSq+Mrh0Fhi7oh2tZLZbi4WElF5nLkuFMuiZAEmXIJL1H+bvODW/nLiAp+tLeLL6GAgNol1HDxlce7UWD4RG0a1TqxXsats0oNC4EAPRSwY00V/pef9oB3ssh0sQSf+3/nYuBoJZjOpqNedQrAZcL4f/p3ofkAt1nYj2hHfXB7QTvY+1tsbH+ddH+yvAAIKJO5Z5g0J2AAAAAElFTkSuQmCC"
  },
  {
    country_id: 198,
    country_code: "SN",
    country_name: "Senegal",
    currency_default: "XOF",
    calling_code: 221,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozMEE2MkM3MzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozMEE2MkM3NDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwQTYyQzcxMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMwQTYyQzcyMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MP7aXAAAAYNJREFUeNrkVjFLw1AQ/u7loRUMtS6Ck7v+AcGiIrjo4i/wH7j6C1xcBAf/gJM4irvgoiLqIAgOHUpbqCgKWm1pX85L8opFYptAgogH93K8fLkvd7m7PMLWfBXApOgroqQJGnVhyusOF/LQ3gc4CqbyisyDMfWlCjqltqPGnUiciCta09ZAzzVKvK5/9Be2OgjnDgJ8d5oGJlYEmckfI5aEkhNq/OSmQKwIaAlhy9rZEtvIVE6WMeDgnrF/x4Ed7CFZ9LGJtQqb6qzMQccf3grxdWify15H7jlOBsTkp3SEcFEXe9fguMQ4rTJox+BERpB2Mkp12/gLY6NI2CvKYzWJtsLYnlXYXAzdGBOfWMdG0tf8unxiLMwpDEuUVy92WDGFmNSJLXnjEVibIizPEIY04ejGw7OkvzCRLNXJiCXinES5Mk0gv5eajFV5Ae8teT/rpP3nFxm/9/A0bOFlOkDot0fmfyGmND+Gtkce98ejT+jM2LrVfeq3i/Ol338r4PoUYABXBXI3FKW/6wAAAABJRU5ErkJggg=="
  },
  {
    country_id: 184,
    country_code: "RS",
    country_name: "Serbia",
    currency_default: "RSD",
    calling_code: 381,
    flag: null
  },
  {
    country_id: 189,
    country_code: "SC",
    country_name: "Seychelles",
    currency_default: "SCR",
    calling_code: 248,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzkxOEIzNDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NzkxOEIzNTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjMwQTYyQzc5MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjMwQTYyQzdBMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+1AigIAAABGRJREFUeNqMlUlsW0Ucxr+ZeXa8hjgRJSCo1BQlQFUkoGqkSlGqJBWkjYTUqooEh1QVSBygNBHbtb30wqlCHOglEkUtqBfOSJQzByBpk7jO5nirlySO7Sz283sz/J+XbHbijDSW5Tf2N99vvvnM0HsnCsCLRoMrYMUOuExz/u4EOl7bEmbGdvB6qcBsHPx1J/SJdSM8NovNqXWh+WzMeqzRfAVHGQYH1mwYH51Dx+ks5KK7vJm6axVEK23qZTsy9+OIfDMHI2ugqcMJVSx/h34NuYaighaHnOgbTBgjw1GlYg4oVkfU+sgkURKAW8jY2Gxx4dq0lLpC04kd0arjxoiX7eDtBfnoi3mGLc5kQdS63Ubrgv5fzggR2uzjtEaCTLgElLF3vXYkxGm7undzRvq61jUZ8JQJ7EfbRmjb7SrzS9wMfz3HjOWicL7pLoMwa+loDREH3Ri4GDevD0e4ChOu3U5V2WkJbVHJ6JcBmfwxyrUWjTu6XDUujyZcQYxjefnQQlzgXOZ3IbbQ2gntSUI7uW6ERgntn6viILRHF7YQZ2xq/NaMbOskxLO7EFfRvkRofya03xHa1OFoa3wdluL+wYQ5shtxNbUnSqk1Y2MBY/HaNFe6Ehba0vNGmpwTDaOO40pRsPaC+dvnhHhT8FKKIXdSS4UQuhlA9q+05iC0vBFaS6xQgJFKwcxmIZqbZa2wQcWyalc/3ZpWrZUUKyWhVVP7IGFGKLV6Uj8crSWWz5fFcjkIn0+6zpyRnt5eeAcG9jmupPjCpbj5yXBEKMItLVErtbo0K6kVVmqd9VLLGJSubzvT2tqkq7tbevv64KHp7u5mleNlWm2KC/LXalEYGrRTDuhPNozQjWcltDWptZxZYolE2VlLi+VMeXp6VPPQEOh9Sagy66S63MVq/DYVxYmchlUfRKdNUdcakW/neNEqhLcIrSJX1izqe86s6szb3w/X2bOWiNgvVitcQuyyutgcuRIR0Frp/4pZXWsm7oatfxTueMMDubEFI1n/zNznzm1jPCTT1dwrbbuLj+XNR6MLHB4vK/yTN8JfzSL3eE2zvaoxtbGMrcnMQWcmDhMIp58jmI6r6WQQfpoL6Rj8yyFybHCGlA33fgjC12WyzP1NKvgpnk9FOD2E2iBn77ynms+fVy9+eJnh7VP7EUrrJZlbkf7kEuZXImx2NaqexOfVVGKRLa3FudxYo8zkGEy6MhrdDruLhBedeP9GFtcvhxD7aFJGHwRFC2vFyatXTdfAIPDBReB423bZxIs5Ob3kJ4GoekY7f5pYRHA1xpYySZZfSzDk13cEmigTTVQsrhfo6Fr37Jc1X7qjMp/9ATzMwHzaCfFxD4q972LldBdiTgdmkgFMTP2N+egC/KklBFIhGJkUXa9NajGDUkI3wU7XrYmmzUHbE6Vr1Wiw729/GhhCuv33bIcev3CcRbx2zMTmecD/L9NTz4HNDCW+yCE0S4DBQZ1tJwFG4TiCwEHjfwEGABOHZsLQl4B/AAAAAElFTkSuQmCC"
  },
  {
    country_id: 196,
    country_code: "SL",
    country_name: "Sierra Leone",
    currency_default: "SLL",
    calling_code: 232,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzkxOEIzODE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NzkxOEIzOTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3OTE4QjM2MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3OTE4QjM3MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+GrndcAAAAE9JREFUeNpilNtq9Z9hAAATwwCBUYtHLaYZYPz///9HIM0HxPTKVoxA/IkFymBAouli+WjiohtgQUpU9Exc/xkZio6NVhKjFo9aTBUAEGAANLMNXBNFuocAAAAASUVORK5CYII="
  },
  {
    country_id: 3,
    country_code: "SG",
    country_name: "Singapore",
    currency_default: "SGD",
    calling_code: 65,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3NzkxOEIzQzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3NzkxOEIzRDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3OTE4QjNBMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc3OTE4QjNCMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+k5fIFwAAAflJREFUeNrslk1rE1EUhp97Z5Jp0dTEL7S0GEFcKK4CLgouunARQcEK4kKqtTsVi8WFFUS6EDdiUXDvX9CFgkJXirjQoggiKoqSGIuYtpOk6SRzxzMTK/0BlwrSA5d5mYF5zrnnPXdG1fYMloBeHO3TDjEfv0CXh96Vh6AFLVmOA0phKTKyym4itIb6YsZ8LZEeG8U9WiS4fodw5m0CVZl1Hbgx1uA6uYRSaWUWb+oa3s2rmDfvaD16gNq2la57t1D5fsz7T7C01EnAQiRgU6qQOnyQ9PkRwulnNMcnSZ86g9qUJXw4DY1FUieHUH3bE20NTL2BPrA/ke37j1Ebs6TODic9DqbuEs3+JHX6OFrAkV+3AnaXhVo2T896onKZ5vCYtMCg9+6TLQ5ojl6ClIvanLNYcXc34fOXnUwGBzBUcAYKeLcnJYkfeDcu4544gvn23Zq7nStbdk6Ia73wxQxazOQOFVGu9PbJU6jVBVYmdn0kjo9+VVHptA1uoPzewoK8OENdIFWp7uIF3GOHaJ6bIHz9Cr1jN1Gl0gHmZJvbbRtgX9UKxTkRG2RMDEGA+fBZ3JxD5/uIag2bB8fK9s4rM79QFZGNp/nvIzEVMS+e2SiyDY4PgjlX9WScFTdWKxzNP4o18Br4/wPHXyf/z++Iv0rMhPVbgAEAAN6l96444okAAAAASUVORK5CYII="
  },
  {
    country_id: 260,
    country_code: "SX",
    country_name: "Sint Maarten",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 195,
    country_code: "SK",
    country_name: "Slovakia",
    currency_default: "EUR",
    calling_code: 421,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkIxODFBMzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkIxODFBNDE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc3OTE4QjNFMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyQjE4MUEyMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YhjhIwAAApRJREFUeNrclktME0EYgL9l221LW/oAIlWBg4oXUUPkZGLwhIpBIDFBjeFoOPg6GfXqTSPxqDdNDEZJwMDBgB5MTJQLCWoPBhrwwSNAC7TUdvvYcQoESuRiq2icZLL//+/MfjOz/2MUIcQEsF32CFvTnLJPmlYFsp5bAi/gL7V/CyySSURcX5b1wDj6yNiKXdpEIvnnwIHWCwy59zCo2JnuuM/Mg0fL8pC3ipGmtt8CNvW+mVxTYiYr5W6VYv8HEvpXbNv24Wk+gaJphDq7iU0MY3y0M/h+hs+6BZsezR3ceP7FuhYU1DeW0el1yNhyUHatHVvVbkQ6je/mRSauXsdX7ODGnXd0Pw+CV+QOprRwXTMXYHZrGKEg9gOHSIcixEcDoKokp+aw19RiTI1gdpnBJ6OvKJUHWFXWNVUQFQUkYgm0ihI8p+rRXE6UAgVT0zGS/k+kxvxyjCq9Q+42e+4vgze4WpovKTtL+2so6eskNtDFwu0OsFjRLrXLw5d+cLyFb4aUxFxmpfmAs1ZtVQjMqMzu2MuYdRcvi2vp6naiq2Zad56jbvot5fLdcNACtsy83HescKQ/vJYuM98JGTQ1eIkuCgZef5eAWbk7aY+XUHfYRqnPzLMe6VgeZcWeW4sotypPh7PzdCqeoFBT8LW1cGX6IMFXfjAMHEeruVfhZ/7hUyKxNJrNkgdXghcL3RvAqqKwFA1T5HEweuYyZ23NJKQzPU72Uv3kLguz8zjsLtJC5JM/IsqQpyr8U2WS4aOHI1Qm57A0nETIf5zq62FccaO5PZBO5Zu4IqZNzTJhWBx2Jg07Wl9/JkuTcFWgZUbnD90knDZUCoEMX1KestWkLo/W+A/Komn1yuPc4qtP5IcAAwBoBOOwBg9d5gAAAABJRU5ErkJggg=="
  },
  {
    country_id: 193,
    country_code: "SI",
    country_name: "Slovenia",
    currency_default: "EUR",
    calling_code: 386,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkIxODFBNzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkIxODFBODE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyQjE4MUE1MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyQjE4MUE2MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ioEsVAAAAYNJREFUeNpi/P///1MGBgZeBjoDRqDF/xkGADAB8eeBsJgFn+STp78Z1h/4wHDnzi8GULgoKrMw+NkKMSgrMEPdTAEAhvSn/zjA9IZTQOtu/GcQ2f+fQXQ3kP3gf03+OaDMr/+UArzOtlT/DST/MgjpqDBIG6qCnMlgrgYSY6U8qLcd/ok91TExMZw48JfByYuZYdYsGQYONgaGlIx7DHuP/WBg0fvF8I/CNMnIIPr4E9bs9IeHgeHbaYbnV/QY+BXFGf78Bcbq+9cMihonGV7/t2ZgYPtKYeISZcYV+wycb8QYpjScYwju9GT4D1S2u+E8ww82CQYGEVAMMVPoY71n2H0MtBjka/531xkWlfxg4GJnZIjrYmF4zqXFwMD+DayVRhZDPfWHm4Hh7l2gO4BhraQGtPQ7UOwfNfIxnoT9F+Q0oO9UlaCBAGT/YaQ8D4MtZhMnQTk/9UquhS+jB6LEBFYSbAyfBqJ2Agb1gHiYCqlkKFrMOxAWg+rjZwNhOUCAAQDa9c0WhSA2hQAAAABJRU5ErkJggg=="
  },
  {
    country_id: 188,
    country_code: "SB",
    country_name: "Solomon Islands",
    currency_default: "SBD",
    calling_code: 677,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMkIxODFBQjE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMkIxODFBQzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyQjE4MUE5MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyQjE4MUFBMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+3IS9UAAAA4NJREFUeNqslV9sU3UUxz+99+52bVe37i90bMbIDGFCiBjiZDGaDGEwBYXwYGJ8JD7og0+GxBB8kswnX0x88wVdsOqDIWRMFDXTkUzkj2iQZLCwrltHh2u3/r33cn53g6YPdmvnSZrm3tN7Pr9zvt9z6+HI+SmS+SAFG19zLemJJLQHQPOA4+DGZIq6rnpSiSxYci9kQmElV2V42HvWaW/z8fYrj7N7SwOffTfJN+NxMhlLsh5qDA8Htzdy7PUnuD6Z5JPIbSaiSxAw1gXWBJ3MxtIc7mnlxadDPNvdgBVbWkk72DNpureG6BP40ec3kJ7LqOOug2iDrWEQqGFOih379C9e6A7x9W8z5HVteaS2g+XVOX1xmnze5tKtf4mlC1BvqjNVOFsFlCnFNrnPenhteEEz9aA9L/rdl09HHdzLsFm6NGXMNy7fA5GCOyloMDGaaim4MlQC1CHeLkAPPdtGOf7yl7hC2Tkp5JOkzw9ygF6Bnj65k1pT440T44xcS0DY79ZZM1QBLSk/t8kd7e4dP3F8zxn27zsvHCh1iBqvGCoqxTvE4Sqi7shZdrEuRJ3yY1YaFqRsvMO97Nn+C+/3RXj1wDmQkn9ebOHjC20CVmsj+qG6VgVlhe7L9ZZ3RuXSIZHMr/hMknnHHRem7upfTsNe1WHfGfr3jbgdXvmhlcHv24hc8ZNJK3NlLR6T1dghrn3uqXqGLkS5I7DE7eRyQem8M+zj6J4OWacUY9cTzC+JwWq0Ug1nO0s0HDggI/WqDlv5aKSVod8D5HMaG5vyBEIFAUt3gbTFqTe7XLCqN/j5P+SUc9VkF3Ic6n+Swbe6uHF3kb3vjjKvpmNSVsNrP7ZxaqSFyB8BMlmNsAD9ZgFLSW8rjaXbaSn47aVZGutquDyRIqcc3hl0xbSk+6uS/3tqkcivM9yNL0KT5GLtZTX8YjxANiMdNkuHjUVg8c11aHjB8GpBQ3TJLBYIy+pE1UtC9zwy3MZmL9MzAvRJ5Xkxjfyu95mfy2roAk2nBFb6ypQ9lu+g0vqRW/1G0TzqRErueNjVcNfOMT7oH2Jg//B/a1gG+DCK6+TVi3cV9OEeRsPLGu6qTMPVwqh2D1fTcO3gCvewWmARXOUeVgssgmdlpJZe8R6uN4yerWPB9176iiMDZ6Hu/9Nw1f8Q55ZvipZ08ObVFj48t2HNe7jeeCDAAKYZ9xEESrmkAAAAAElFTkSuQmCC"
  },
  {
    country_id: 199,
    country_code: "SO",
    country_name: "Somalia",
    currency_default: "SOS",
    calling_code: 252,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzVGOTkxRTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzVGOTkxRjE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3NUY5OTFDMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3NUY5OTFEMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aPgnNwAAAXBJREFUeNrslr9Lw0AUx7+XXBLbJB0ULLi4+QsR3F1UEAUR/CecXRwcxal/gbOL4OCgo0v/AcFFcKpooS0SWmmitqbXxLujYsactHHpg0ceL5d87uX9yJH1UqUGYIZrgGzE5VqnAwOJayZwDf8kY3C6hwjQ68dShZ0ZOIoBkrBHChagmEMYJ1VbITaXHGwvu3huhtIXJzYzVDD/qsiZBIQQ1N8Ytjh0b7UAz2cSmjc1uSat0LQLO2EEk+o43S9ivmihkNOh8W1XSgt48kKcXL/KNbalDTdi8cLWB8NZuYngK5LRW5Sgy2Lp8wKGvKWNprgmbYqbex+3D7/Ttfz4jqu7trynkmOqAvY7fWwsOlibs3FwXsMnj/x4dxo7Ky5emj04ChErgQ2dIGdoOLpsyLyKojq8qPNodZi6WkMrgUVOG+0eQp7X2SlD+oJuXxbVhEGUepqqDg4RtdAfiGijvwyS8U8iM6GDI4+b8dEn+BZgAN1qgUfVZqa9AAAAAElFTkSuQmCC"
  },
  {
    country_id: 239,
    country_code: "ZA",
    country_name: "South Africa",
    currency_default: "ZAR",
    calling_code: 27,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNzVGOTkyMjE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNzVGOTkyMzE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM3NUY5OTIwMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM3NUY5OTIxMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CE4TZgAAA8tJREFUeNqsln9MlHUcx1/Pj/vJ3WEMPBERMrDagkVba4I5BzihtCyZzsoxurVm65fVwgp1/eGMmrLlP7VYFvzjDJS00T8dUUmba9NqqDAwMDpQzBz3CHdwcPS5O9yOudbu4Lt992x3z/O8P6/P+/P5fB+Fuh0+YDlTQQPdROPWXXgeWg8Xu/F5thDovYz5vjwUiwVmZliE5ZQ9rPCWx491womugTEGN65SWlrFiZ1vkyp33DrwDiMNH6CnOTGtyGE2Ij47u1BxQ63MGpKLCyZ0cEgwWavo6GhhyZtP0HSlB8d7B8nvOIc5w03wt24IhUDVFoyttlf8TEvZLxAWijEJQJGX5twL0yGq656h9FgDRmERWV19uHfXEuzpZ3r4TxRdAlWUpIUVT4nub6yXvC/NpPxUAd4rK8EWlD0p4mHwDaCkZ/LlywfZmXM//H4e365tBC71L8R7IxKy32FRnR37FR6uttF6fjVVnQ+IqE1Sb4Cmws3r8M8oZZurObHtNVxR7/dw9Ug9iiRKsZqSE56rNGqKNT4/JD+lLaP8dGEc/ZR4K1TDA/Kfm6ZX62P0Z7uY+apJAnQk6vt84ciymVS8Qr/meRtt5/J5qrNQ6K1x9H/LHmV95bO07XgjWvlJNNmdwreXZ61G4yGVcIqbdacK6bqWDfYJMIvMtOxRH/b05SxZukLqcHLxhG+vY6+rbPeY+P5CLhsvFEk3iZ/6tBgr9IFxZPBImtWEhfX/u2MsILFpYVwiphIZHHEtFBGMeJu4MP8pvLVIo6VBRNwZPP5NAe2+XLAKnVkGiHQZo0OYXHeRkplNODS1GMIq7XsUKl+x0Hkpj/KjhcxMStU6xBFdAvHL9foIxaWb+K7mXWxYkhog84S3PKhx8rC8PDeDqtYCWvvvBovQpI7FKIeknexOmvd+zHOrS/j17A0+a+qSbjKhaUriwpp49G2twoaXLHh78qj4tIDpoNSb04jd4Rfh0RHWbXiSH6rrIk9QW3eGDw+cnmsmc+LEUS8/kmhXCeVJoewTSms85aCkOZXmfUeilL3dBmVPH8XXN4A5fRnWFDPhmXDis3r2ot3vHcpzbvTGeylV6r8plMOUlG3mTM2+OcqfhPJrecqGIztNHg4ne0Ia+nbvGo5fvgdMoTlKedPQH+Kli+b9QpkfofQL5RdCORg9Hq32GOVCTmX9+KCkNuVWrGInAnDtLx5ZW8GPL+wV58xzXrZFhimOldlRymRSe2dx2caN6OQKyqePpnP4xffZXfwYA73jPLrpE3z9871c8LdHbEoa/wowALUrYLIw4iaVAAAAAElFTkSuQmCC"
  },
  {
    country_id: 90,
    country_code: "GS",
    country_name: "South Georgia South Sandwich Islands",
    currency_default: "GBP",
    calling_code: 500,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjVFN0M1MDIxNzg3MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzc1Rjk5MjYxNzg3MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQUFCNDk5RkE5MUYzQzIwNzI2QzhGMkI3RTUyMjlFNTQiIHN0UmVmOmRvY3VtZW50SUQ9IkFBQjQ5OUZBOTFGM0MyMDcyNkM4RjJCN0U1MjI5RTU0Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0RH86wAAA/tJREFUeNrsVH9MG2UYfr/rHW1Z21V+lUKp0HUQkDLWMg3CSmDEmUzH5uZIZG5qdMkWo8G5+OMP42JMhv6xaGJCFpc1m7IYk5FNGIskMEWXYSfbrHN0Qmk7RsrRru21lF7vvp7X61Ci/2H8zyfNXfMm7/M97/O89yH/W91lHVtO3VYddUz4xkYA9F+9a93jODi6t6ftOANcVKNiD1cn3ntxPVNSYzw0Hp0LIpDDMggZwpgEAssA4zRC8BcIY4//QMcnT4XGbrxR9nHPC6WbakMJDAKEITfPoH7NErr5ZvGRbvsHTJ3hIzo6RyOg/mwWAMlzYJt9qrqawWk1AkFYQY32vuzAa7Ut+Yv71HeVu5+OF9fMfHkO9u8ie7/IqTCui7lh2+5z19mvT3yTpMNDl2ZYjkVASr0yAZLi64lK14aC+2duNgYWxbqAIBcgnaEW6vXApYMx3sek+Ui4eK2CXUzSPHoIBKWajBcYuLl5HZk0mHScTK5ztYSxFkmMAqRM5UXNrZXnzwx0lg6Ox9Yb7K8EA9Hxqz7pbERO6G0LdDSC2fqdTXnxkCLkD6cVwoVLmvbWsqbamdGfIqWGa5oyH0MLSoonSMDcCj/Yulqb5/HYLLAoWFVZ1fT75EimnjUEdO9YdjW//ZL1uWouNTDyqUdlqdRt2L95+lifr23PM3pGcWP47IXpD13KW3E1XHUiEKlJiVh8BgCsTU3trY2f/eh8fvQ7b77KkcC2pSXRNJD1Hj1yspm1TI2dOHxyn8N/djD1bNWibeYiXbHpyc7z/WMuTZmxq05+SB9U3fn1Ms1hLmd5DXhzlWbLVhQJOlm5l4ndtdsInX58ypuLedE0LOuqbx463vfqIPe5uyCUSAFgkkz7piLf4vKfaWHB80v/gKs/bpaVlFP+O8OeJR4r0PLIRpNSp6Wja8KajRcLTUq77eCp044Yk0JQA5AUFewEKAEpGWmxOCEzcjHAPAICQC5k4r4vOagXD0bAZ8IHUMhxZ5c25Pu+cOvrjzY73E5r3zGOInoDgc0Yb0QQkQG0SA2ERCS2EJKVrOgVApm0TOKRSsisFJb0Zv0gqZzEw+b5AiGWr2QXirYXElZzLlVv0V5xsoKgEhWI/baVn5Ck/cHvn8WVBZ4nc9PTiFpyD08Ohb3rHqvaYWqg77mvXE/xnChUIGGV4BGokx5dW63rmkZnjM3d6nmfqlDlReQ82wCQAmn8VULMwM8XdTzi2V597/IPO7yTjd0NE7A0y2EqO6F4oRxYLTlCcqq96PZsWP1b3AwoYc/3zCXXTMd1kIn6X1GLl5GoTiMuFYK4kMlcI0Udy5qxaq+zskQw2atqxf8HJhPwn+F/6r/hDwEGAJECp0W5qSuvAAAAAElFTkSuQmCC"
  },
  {
    country_id: 119,
    country_code: "KR",
    country_name: "South Korea",
    currency_default: "KRW",
    calling_code: 82,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1NUZGOTk4QTE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1NUZGOTk4QjE3ODExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI3MkNCRTc1MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI3MkNCRTc2MTc4MTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+kIg3fgAAA81JREFUeNrEVl1IW2cYfvJjMPGvIbhhJZ2tZaWFlqZgKEOHGtGZqtALcVR703mhRGk7dTBEhsz/UmVsYOl2IXOghYpFWmnNxYyKOkMXfy4EZTil/katTZqaH0/efefYZbgYPN5sL7wJ3/ne873f87x/R0JEywBOMnXiv5EopisS5tjxfhEkbrcbYWFhkMlkxzrZ7/fD6/UiPDw8lIlTGmpnfHwcRUVFsFqt8Hg8op3ytlNTUygsLITZbA5tyCOmQyQ/P5+0Wi3l5ORQY2Mjra2t0VGys7NDra2tlJmZSXFxcVRWVhbK1HEo1c3Nzejp6YFer8fExAQUCgVGRkYOXpjj2A8gkR8MQ1paGra2tpCcnCxQnZiYCJPJdDTVPE1dXV1Qq9VYWVmBUqlEW1tbYP/tyG+Yz72JmUQ90yTMffY5nL/+cymGGIwlcOxiQ0NDwnpsbCyI6SDHKpUKeXl5iIyMFOJsMBiQlJQk7G3c/xGTKVex8fQXeBb/hGdpCZsvHmEqPQWr334n2Oh0OgHlwMAAEhISUFBQgJiYGHEx9vl81NfXR4wiYhkqPNt8YaFhZm6VxJJNc55eqs/R7+qPaTEmgRYRTaNsb7PnaeCM8vJy6u7uZhHhxMf437LLdOJGKaK7HoA0F+AnDuF+DvFeJ2ZUsXgrV+LimhXSDCPizc/EJL9TLsZqgenjPzjUs3+77x3CaN/p16dScU+bwgImx3VZPO7bJoEtO6CJPfJMqRjHWq8fP39wGVUaA6I4D+Tkx+2PDLh39hogU/Apjt7TmXjwoY4V8htR9S4KcZRCiuQzGjycuYrn5/TgSIrlKNZl3TsA52XOWUm92sDrTxj6k2dFOQ6JmM/KioqKwPrW9UvAOweWSIPl6DiGjLV2v2/fqYt1ttdvkHojNWBfVVWF3t5e8Z1rYWGBmpqaiJUUsdKilpaWwN5XP1kIahMh/i5B9w3hClPtl4QTpWT63hyw6+joIFZClJubS/X19TQ/Px+U1UGIt7e30dnZCalUisrKSvT392N6enq/o33xKfqe3cEV4yXI1SrITqhwMeMCHj+5jR/KMgSb2dlZzM3Noa6uDg6HA+3t7VhfXw8CfGg5VVdXw2azobi4GA0NDUL3Gh4ePvCiy+3j2UKkUnHgeXp6Oux2O2pra8GQClOqpqYmqJxCDgl+OPB0ZWVlEXuRVldXRQ0JnlrmXAhTSUlJyCER0rHFYiGj0UiDg4O0u7tLYoXNcBodHaXs7Gyh+x1rOv0tDAEiIiKEj4HjyN7eHlwu1+E9+j3Vkv/r0+cvAQYAGzcZMFujiqgAAAAASUVORK5CYII="
  },
  {
    country_id: 259,
    country_code: "SS",
    country_name: "South Sudan",
    currency_default: "USD",
    calling_code: null,
    flag: null
  },
  {
    country_id: 68,
    country_code: "ES",
    country_name: "Spain",
    currency_default: "EUR",
    calling_code: 34,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUU3QzUwNTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNUU3QzUwNjE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RTdDNTAzMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1RTdDNTA0MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hN0M3QAAAeBJREFUeNrElk2L00AYx3+TTCw1adndLlS2KLv4Ug+CeBCk4s1v4cWLn8WLNz+B38GbXrysKOxBVFwRXRXStbiktcFmW5IZn5qCwgYRUpqBITPPPOT/vP5n1K5/LgS2ZMasZjRk9vViwV/flYA7VDR0+rMabH1qLasEWM0eO+N/5Ve7FqXztU0hzdQycGPt7ZjiIzs3S+YGRFENK/vW5hQvkoVZnJUJNcMC6Tz66zCdOTx/EDA4qpElE9rNjN49Qz0Q5CPRccsAF40AwvfimGeoZSkfXkoAOgHtbo1RGBEJbmdb9I6XDSyF/v30NpOPdYb9dzSCLa7dvs+ZXsynw0fo7CsdPSgV6pO9NM/dDPzxBeyry7wRz/eabQ5HG0y/XWXy+Qr+8LzkoVyedSGwmBMLIGdnXBcj9t9anr1+yCX3AJ8uyXHjT/HZZQHPfyQ5NBcNU0+RSLPdaod44QGD8Q/8uzs4616uZ8t43CyQ1mG01hfPXHo34UW3ixvVudF6wm7rC9YRezdFLylBINlTdZJAxBPl5iFXvpIeFg8dIRI3xY7lMFUYI3tVgkD27nSKq07lLJFZB+2kv2WpcXFVHmNjy3G8Tgb6P9TcpXO19nxTySVR3X28ePI0Vvz0iX8JMADE1p16B3U5CwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 127,
    country_code: "LK",
    country_name: "Sri Lanka",
    currency_default: "LKR",
    calling_code: 94,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpGNUU3QzUwOTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpGNUU3QzUwQTE3ODcxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RTdDNTA3MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1RTdDNTA4MTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ynHuxQAABGdJREFUeNqklttvVFUUxn/7XOYO03Zm2g6XDhbE1ghEMURRY2IUwpuX8OSbiW8++KwvmhhN/A+M0USJygOJMSYEH1CUBGICUgpUCW3ppNDaMlPauZ3OmXNxndML470tO1mz55yz91r7W+tba23lX+Qmm+jGwMXnn4cmYovURbaIGCL/tva/RqBnEZ0pZpV7mfrPU4lEsWFi6p7oU8TwOKxqmCvKXZGkyFa4caoXa84kXWjguWpNB1BqaS7fTJHbVaHv2bmG0YxjvXc+nzg51gEpgeUbxFWLKTVCh+/JLtlRFRmE+Xic4lAnrbrByQ/2EDUdlLYGy37gMIP9r0xQvR0j81TdMnR5GYk7YlQk6YaLUspBU8vuXJlj4DU10n0WDzxdYuJsNkSiGR5aoES12ZFH31Ph+2CNXdfJdNd4/LUi107k8Wwlx1hRrvwlkReaalOkWP2/Kb/I8FfbufRpgXiXjWPp6KaEx1ehcutuBDPhrlp3bJ1krokZd8M1nx09yJY98zyRHQ9psvYhng8U12ejaEKAAG2mv8b4uRzJTptHXy0yO7KZTdss+p+7w9T5TkZ/6EaLeHIwA6eiY2puiGRdhv1lopgJJ3yIJCUkgvjhw1PsPjRDZneNymQ8nH872Ut+34Kscbn67RY04UK4Ty2FwmCDwxP0yYyN72jEuiwyO2vMDKWpzMQY/zGLbypGTnXSf6BEz2CF6eGOv2XWukfIN08T9EKegFi+xi1hezLbpFaKcv74TloNnR0HS3QN1IkKcZ2W+pOODSH2Q+755PcssFgxufRlHy+8ew2z02Hg0DRPvjGGmZNYZmVtE26ezoiL2ljKfbjatTVSwvJI2uGhI9MMvj6NKvn3/Bjk/oKY6obOvkaYXu0ptzFXiwK3qVO+kWLb3rs8//4IqipG55eYT0oq47RkagKalsnomZ6QhO3FRtsoYmUEiqAlB2jNGDTGIpLoYqhscP2LXqG+YlJcXLkSoy75HeT7fZMr3Cik8gXB5KUuPnnpGc59tIvaTJSv33yM428doFqNM/TNdhYnTAoHyzhywPa6bqyXzcFPEN9ousXETznshrS1hkbhSImqFP6JoSyFQhnDcNj38iTd+ytcOLEDT9LOXWa2WrdhQRgYciSVUlEvZHTLMshJni78muC61OFE0iYtlWvo8wKxtE3xYpbyWIp03mKhFMf29DANjdUm0CZ+e6lqm635CL2DC+x9e5Lv3nkkRBHvsMXFMc58OIAhzaajx+L3q2nGz+ZW3RRNtsg+WOXFj3/hyrGt1OaiGI58aAoKKpElRkpbrAptvfbuFKRGAykCGobU6prU6lIphW556PPmUsyFbJ58n7uVXPXOyrBrBsUrOS4f245Tl8JjSOFxh6l/X0wlRmuR1YtAQnkcpYK5AlVKLJvlHFsVo6e7aZQjgrR1r2X+b4z8sOjMyUWgZ6BC/+E7DeVfkKvPZrn6ROSe4f21I7Rxv7l89clvhB3LewI9llx9bjP7hwADADpQzQBjYpxJAAAAAElFTkSuQmCC"
  },
  {
    country_id: 192,
    country_code: "SH",
    country_name: "St. Helena",
    currency_default: "SHP",
    calling_code: 290,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzUxRjY5MzExNzg2MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzUxRjY5MzAxNzg2MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQjhGRTA5QUQ4QjRBNEYyMzI0MkY0NERCMDRFREYzQ0YiIHN0UmVmOmRvY3VtZW50SUQ9IkI4RkUwOUFEOEI0QTRGMjMyNDJGNDREQjA0RURGM0NGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bql65wAAAzxJREFUeNrsk1tIFGEUx8+3s7dZXWlHV921NFJLlCJMKrx0U2rdxC5GEfWWGERSUPSQRagVvnQheolACtSkMjQfTExDhcpiJUTLLrZe1zX35u6669x2mhldC32RpJfoMAzffPOd3/mfy4d+XC7VGrOeDitLH7zvbXoJoKkr232wsaIp+6Sx4htg1Bqd9GxKoPhQgle3Tl/U4rHYEShhCYbd7tA5W98UJmGnjImxWalfphWb9fjGvs7upEyTDc4lue8fX5uxI/mmI/pY9Yj9wyeRi5aCRkcLH8qjNUZ9IJ8dVRYYQBdvbnzlPrBXVfVYExsVMTkIBkPLd6rqboNjyNb8wsywFIBU9OU44S0RIwVgUUDEZe8Ekhl30WM+4ByOiDAl6aOcJKtGAYVaSUbHUBZrBFCxa8MpCR7ZGTfFKBAwAhhYgBU8QS7zUrRapLtF+lwIqSk8aXzcRqq5jQVblS57qM3i5eT2R43hh/fqUhP7W99DlLaHWDkwOYIUOIMwmOMiTIJfutKXscXjcam0uon29piysniaoea1I9BfyDi+reREem6MH168rrQo1iVGrzmWZ75R6dlj3EP4oKP1eZv5+iesa1IKr7uRoA7jQBoSins9N3hEU50+t8DCLwhNsdPFE8k51bXlOUfiJfD2SU11151+rMtKNJen6DYQXwfMBv3pzLz480dT9+2Ky08YvVf/9YyKJn1yURepQHR779UQQuXCLZ19GKvUYNIRAH+wE4AdTN7eVFFzsc1762PImN0LbECKocF+RxupNQ1Rw5+7a5/1tKMEf5iW+TzQ8n2aCcyiJSwdWGU1ObnsmdVnx+mcgdHMjkfPSWoagSJYENgPEAXA9x0hkAGwHMzwyQE4EcgBZGK7bOIkRIoO7GytASJKsq4R6fAxvD50onVqiKypV1PMFBJOiqoBtokOWHCL9xEC8HmJOxwSQoYAqMQ1F2ySsPAECHna+oYwjZW1mxps026ZqC94ZRBsWjiPwWfx5m+fPMJndRPDjrTI9CjbW9z+zg1AI0Fr8AyCIvhTE1OgccD8Qg3x2Szn/0pgGSbmIfMLhVrIhflBWR4d+5XDbyaBv2b/0f8E+qcAAwB+l0HjpzOhQgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 175,
    country_code: "PM",
    country_name: "St. Pierre and Miquelon",
    currency_default: "NUL",
    calling_code: 508,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkE1QjFENUMxNzg2MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkE1QjFENUIxNzg2MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRTZGREUxMUI1NDA0MDcyNDExMDA2MDlERjhFMDQ1RTMiIHN0UmVmOmRvY3VtZW50SUQ9IkU2RkRFMTFCNTQwNDA3MjQxMTAwNjA5REY4RTA0NUUzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vSLwPQAABrFJREFUeNokUwlQlEcWfv0fczuHM9wMOMMhoKAcZjk1RghJWIOJ6GLMGjVG19LdlEllixC1ykSMJBWzu26tRrNaaq3ZmNVdssYNQUk8gCCCAoNyyTEwAnMxHPPPzP/P//f+E7u7Xr1+/d7Xr/u9D61uqqY7u/+xr0X/0SFm7w5lYu7FIvmRPyQTZ5NZi5bUcDQlOD0K26SalvOJxmkKcT5WwviQSsHQNCYpiW1K7pqULdD5jBHzBEEKAjE7zy1epKZeq/r6rdyhzDx8h3PHc5Jq/f2Ps6Sv1zYP/fCbZvUzANMwJzVm9O2q7J9285curwBXdGSKZffWpgXK4OlzmT2t+UVrr29/u0UtZ2v+VNhxKxfCZmGGRV6W2qEuKnqU8EpVZGNm4TYZ3DhX/dHt0f1Ox0vmeOB4IGUgqIoLHAe2Wb6/ueDS12tAq/Ar1A33VjJur9UpB41UHSYLcMmNHeTohAGMclD5gSaQToI8Pr8GSUGAoBwHMaYQQc0DqKDkzYvXL7aBSQ8yDk2o8aQJiJ7MsiGKJNsexoEjEab7aL0/PIuafKDnHSkAfWrTCGXUuCdkwPjjkrWEZu3WrvKVcT9uPGtrkLHEip/fqT69HrJWSu+0QXwMIIBZBZYIhRv+137rxN7KzvtdZug3gWKq8NX2xroLuZETvEOv+1XT+4ev1J+v0xLz4JUCEsMATr+QBrsgtRAcR45iJ390GQUfQGU5vGjcCSnHIe0wSE7WHivGGHoeR4D0C5Cd+N2BslGLQbR8+0M66D+7fCkbB0HcfvZlAcAZQGcAjplW1cLyS2/tbajqkqicRz7HGI/qTPVVmzNvb4OcXWA8BuZaiPq492EIKGfN7wEu3rlpEvWnK2F59cYdrz/VBy16UP9VmX7w+MnV+w7mLS05APfu3hcR7/U+6hsbE5WWhw9FiQOzCatqwLAfwj+Pzd8nRjIOEuAvpVveCAHNSbEAT/p1EFPz7+/Tn0LX1pYC1L26e72ot/yki8n7lMhYllb336tLTAmIYa5du5abmlrfUO902bMzl8K8Fzg6Id7V3mL+8pscAHbbK12hT2SRWINHA+HAU2lGO/wyfuoLFzv1Sl0+Cjua9+wGWiJQgtgVBEJYIEiSpmnRSUwPAQYeAUeBebq1Jy6/pApTU8gUyE61hWAQFoWHUQDl18j9IUuAGBwMh6Th9OSpgNc/PBoMCCqqvb29rKysu7tbJpOVlJSI2+KSUsx5e/ovgE4Cj/XLytt3v/vNz/e06nC1Vk2GgHQBUWhUDBCYFaiQRSowPtmqxdYLNWdVFOw5XvzVDQ0xNDwsHg0OD4+NhzLqHRgQ5YiNCfqsHx5sUOhnepsXmcyOE39uLUgZnp5BHrvmyj+XAQuZOePR4cy4W//GnrL39hcsNzvzs6zGDGCkuq/qs9SaGfD52Z6RUZbj7DMei9UqlrDXZvPhwLNbripTNzQ2xqkSa55bu1cszpMhfcmmTRB+CuBwXPbWaZduz8GXd/5xgyHmHYDz636782k9Syu3A/wtfs2nlOPw/if/uqHLTJ/DHudjj6do+cytttkYHXav9A4VTjoH5wY+sPYvhDlZlMn14vOjDZdDdLC2r/l1ZVhkgrX1RrrT7TXm3f3kUJ1oP/P33PorKyDCjgUluXnEEROwtIVZJhcPJAesnXxzdNyYpq3/3EDMuNl8+VT2lBc2V3ZCkICANDd9qKjgwQyFPQpiYEIj+PjsZwa3rGs7deS7WOMca5e8tmuHe04LGrtGp6BoZdi0oV/xpp4YoVxJgWQ36VQicswvm1IAwYDJf/KTirEnC69eOA8C97hTuyR98j+l3wan69ta1SlLOV2sx+UiBZHcDJaE+55fd3fgi2JgZWIbkdvTzCNWe4ZFim+Rs9cJeRvyfkfr2GAdnTYiiUDIC3rvwI9pNrfs5Zd6Fkb5aY4UW5VawMUavTKtX2CkSjWv1LIsSwTc8vJyy21L5HBzvHaRQL5tiA0TxjpWG7ybuFRNcLSCiMxgwib4s2NLbCo9YD8iWVAzHTeTPHNkU7u54v2K7p6I1UvtFKb3HHph+4dlKCBJNsy/W1tUUbW+oytueFzrcpPaSAI9iMn0Ge/731P5biNdIhdjB9ssirrJb36wsSl6CWAPIAJCDKLArgRBCiQPPKAIN9BBPB7xC4M4oFkACYiOflJ8JXCeuCQDxeeYYGY++ZTS3UPNG7FgC8olJBHFR+VH0LQmGhMYkQgEhHlhcQgFhW7iZ2YNPJZoknwU4CBPcUGJhBL5LKYgToVnjo42af4vwABodCN1ZcPdpwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 190,
    country_code: "SD",
    country_name: "Sudan",
    currency_default: "SDG",
    calling_code: 249,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjc2Q0MxMjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjc2Q0MxMzE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkY1RTdDNTBCMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkY1RTdDNTBDMTc4NzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+dsEThQAAAfVJREFUeNq8lT9oE1Ecxz/v3ZmkMae2xdbuiqRiqaugKDo5WFGQOiiimy5aR6dOOrhYHRx0qQoVaQOCbgpO/oHatTrVhCYNtIlJbWJJ7p6/C7aiVhfv5Qf3jrt33Of9vt/f7z118sTe+TvPE15XQzHbGaABZbAeihu7zc6sw71MB0cWXGY9n28uOJbhDgM910q9QXx8oEFnVXMsu6mVcSVuF64lZ1jUrYcrp2sMD9XwBbinpPFlzihb4LVxRQhlzdP9qxy6sMKbHT6DZYdYk9YCovd4JF2Vu7f+JpS3O4BVuPUiydXpBPMUKLLc+tweOAzhkpIVxJsMv1bm/rZTfrK7y2QrBWUi8t39qwGh9HWHiX1l9bF/znl8/rpJk1LReryxFiK7I0MPMy8nVf+lXfrhh2fqx8x/X/rf6xJdfR/60tAMOHdziMNjZyguL1rM+I+OF1caUKpXpd2MJY9/BxY/QSzJ3ZFxLh84a7G41toq3MJ0haMHj5tHFx+Y3giLa2NwIMDNMpWSje1V0WzJav/2zKjJfVlQgQksgUPo9oT4KYBMHvO+rKaYcKPeuX7+MCwYR2qtrwPmvsJUDgp1a4eE+4u0W2PwVlplMmv9PHbXpZU+5clnmF6iHeGKtB65mkgrWebrtCtc3i3lyeQ8jKGd8V2AAQDj9qv7QrTRKwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 200,
    country_code: "SR",
    country_name: "Suriname",
    currency_default: "SRD",
    calling_code: 597,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNjc2Q0MxNjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNjc2Q0MxNzE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NzZDQzE0MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2NzZDQzE1MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZGHpRwAAAa9JREFUeNrsVbtKA1EQPXf3buIa17xMNCqKaGyECJZW9v6An2BroSD+g5W1v2KhKNjYGBAMPglJCslmY9TNPsYxJGClNyAK6oXDDrNz98zcmbNXYD1H+IGl4YfW3yMWDlGdnwlG8E2cOsOWFnWMnkMxXcZj1x5i9D+euixOr/S2KW8PnzVExt1OAu3yADSzr8N6S5ukd18W7xwfE/JIEIc9I4rZtTtoEcLl7jRMuOwlfhsqk0s9kfg8jM+CSMDMufAdCaoMIrnqQh8KYO5aiGYMGGkP7UpEsQRAqqYYMKFRaCK/X4SIcWUhf10Qls6OQa7A7fYcni5ikHHvC+XEHHLYh32UwvXGPIKWhJgIIcYIoafjZjOP+kEauuUrVdufjnWCYbVRO52AfZYCsuwbAxrnSVQPJ2HEPG6c+njLwG4qB3swkJotIblYw9VyFuGLhpm9KkYWSmgULRgtT51YZpLKchLc5+gUcLNTwMNJptMDsZWFkQsQKSWgcztU5STI8Rw2LLU0OTeHu/PEGO1qt8b/HZOHLc7whWrBTeET2WzEOzL9vvuhIf7v419P/CrAALDtiSyIepCqAAAAAElFTkSuQmCC"
  },
  {
    country_id: 194,
    country_code: "SJ",
    country_name: "Svalbarn and Jan Mayen Islands",
    currency_default: "NUL",
    calling_code: 47,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzY3NkNDMUIxNzg4MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzY3NkNDMUExNzg4MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iMTZFRUEwNDBGQTBGQUFDMTU0NTE1NkMxNzg3NzIyQzUiIHN0UmVmOmRvY3VtZW50SUQ9IjE2RUVBMDQwRkEwRkFBQzE1NDUxNTZDMTc4NzcyMkM1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Ec+VdgAAAaJJREFUeNrslLtKA0EUhs+Z2c3mIhiLmASFFIKiKSRBIYVg8A1E7CzsLW18Dgt9Bi+FaCUoahNvoCQIAQsbxYhoTLy7M7vHWVHB9bYpBIuc8p/Dd5jz/zN4leyGj0VCQPW66XBrqvA4lh0Hg8/uTQ8b55epAR6LAufgrRj8WdXRrtLQstyaZaF8EfFNQQQi1flF8w9o8/TUrZnCfrxptCVy7VVRqZDSvClz2/KeEC2yu+LWbBuECeFEsyiCJUFgXN5BRyq2n4OA4dzAI3pJS7hzjUh+xtcLy8s70NgAGlucW6/0p+1E0tkVkUc0QmjomyOChiCLhNWO6awK90812wj34ttDwySOaGv0JOBBANWGxsnV4uebIGPspLSWy8/PbANnoyN9vT1d1BKzVUI8D0C6PftkIznuhVsXNg4GsxOg8838ZKYzAeVj8PkAPS/koj3jnmaa8roSPS+W9BBwXaFPtCAcFUptaV80Tu+J/BWtB/1u+3TOpTKAE0nHTPVanCWgEQjxYKCGXJNhuNGMgRLRYb5JBAxVp9Nc/1T/IfpZgAEASgSdGXymLpUAAAAASUVORK5CYII="
  },
  {
    country_id: 204,
    country_code: "SZ",
    country_name: "Swaziland",
    currency_default: "SZL",
    calling_code: 268,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkM2NTlENTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkM2NTlENjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM2NzZDQzFDMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyQzY1OUQ0MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+wwOMbAAAA4hJREFUeNrslV1sFGUUhp/52Znu7uy6u0DLFlYMaREDgaiRBFAJhlATa2JSNMQLuVBDYiTGK1PU6IWJF6a3XuAP0Sv/wdAmuoEKSpoULanahtaK2Cpt12Jpmf2bnd0Zz+5WS0wM5YpEnck788038533nPOd94yyqm3M5wYcKjfo+O8RK/4UV+Qeua5VhmBeMC6wBI2CBoG3ZAu28vnNoWsSV+2pisJqxSdr5+nLQzkZZ/vdW3F+ucDM6XNorhhJikcNBn7lmh7Y+vyE9k/JoFrulYWgUoJuinxg3clAYYBnH3mKra++QlEIM6e+Y+iFg1zo7yEqbmqywpdTk7GDLXddEJaZRYd00/Kv5kKRd15OQUlU8EOQkCCaFJVnztt8pie444HnuXXsLL9nZmpLGgKwZtcmQTfjH3/CyT0dxCNzGBGT3yYd1ux9lOLEz+T6+tAta5H4T0LfV9BsX7aqQLFJJd+is6zRI2woPJbOMdKyjv0PdWC5WexoKx8dfYuH90zRefAlfhgdxdd0Nu28n/v6j3Fi34MYsQrLnn6ZYGobdL0oVoWjLAEZfm3v6lVdloEqpJuLXLotjHdvgOaNLqq49cTJEv2XYV08Tsi1Gfz2EMNDbxMOBjhytIfh4WFC4TCFrM3syCCpLe3c88YRKjGTVGuO+UP7uHiuH2u7iZFw8QrKopxU3ydYzHJ8w2662t8k7XQQ+qaMOqpRytRroFwuUXDKLF+5ivUb1uKVy1iSOtM00XW9Bk2rf2s4TVhDOWYff42RcIyu547xzl0HJD4Xs+JepWOJTJeo7dM645fX4p73mBuQjHyvczgSZKN8MqmqKMEgAVWjkHewIhE6OztJJpNkpqdxPY9QayvTX33JqV3b8H4V46KXS2diZCYbmRhshikPNVSvKeVTy6rJyfAruFLCZ5o3s372J5Y7c+Q0gxUio4SQHsjn+cJ1F+tQ5k709rJzx46/5i6m0xxva5P6BTMalUL1MEp5vk7eTsyxxe4YWcOq6sVWPiRSI/bk0RDxJMhJR2mQq1mTQ1VON8m7lYJuSdXrIpCp2ixs2b2X9989zGqnRO+T+5lIv0fVbEBEVZWOVxtX5CknKwNiNyQp9uoNpGdFeEkNpLp7KYmyIJk6K9n5UQQ8bLu035KkJSf7OXOFaNRACZlLaiCKP36dLVP5G2YWvIovdJultsz//8f/euI/BBgABhdR5PJe/UIAAAAASUVORK5CYII="
  },
  {
    country_id: 191,
    country_code: "SE",
    country_name: "Sweden",
    currency_default: "SEK",
    calling_code: 46,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkM2NTlEOTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkM2NTlEQTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyQzY1OUQ3MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyQzY1OUQ4MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cif6DQAAADdJREFUeNpi5A7oZMANvhSUQxg8E/ApwwqYGGgGRo0eNRo/YPx/YDRAUAJkNKOPGj1qNCkAIMAAQwkJrW14Lx4AAAAASUVORK5CYII="
  },
  {
    country_id: 43,
    country_code: "CH",
    country_name: "Switzerland",
    currency_default: "CHF",
    calling_code: 41,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MkM2NTlERDE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MkM2NTlERTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgyQzY1OURCMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgyQzY1OURDMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hqToNQAAAfxJREFUeNq0Vb1uE0EQnp87/4iE8w+BCIxFAWVegD5lJCoKXiRdel6CDiFKKKHnBWiQoECRCVbC2Tmc4LP3ZpdZO44jkvPZBFan0+7c7jd733wzg5/aISwz8MLcLXUigOWGM3buJaB/BM0IJjMHc+hSy0EYgLjrQSPaJONmdP/Vc44aapCkd7i3K3FC6wG4RehYwDWhdMfhw3uPPnbObZ+3WubLN94sgV0ETQtAPRX61h9zIsfx1OwnTrzxfMNqhBDYn2OXKtEgJ0BxH2x29slmEvfVCDgCASwDRSHY5aEzy40Iy2t6S+oPw7u3gXjmlcNWG+iQ61X17Ma/3HBw5d0vcY1eZ+a7tF+/WN956tIUJAMOOaprSCcydJL0QQwwY6V68u7t/pNnwR3CMv+h96tvrZHnWpMqN0CfS5rhWmN+vrGRJxOC/zaCHDV7Jdj0tJCQrHeEuJKurcXK2jSMMgnjg/cfuHZrIr4fX7cfm4PiMOYoJCDpJS5NvPgG6ikFKzOvYjr7pjuyg+SvxGeBbpYgmlADI27WL4pPl/a0yxtlH26NYU5O5teQ6QENs1EHPGXDFyudIHujbliY6EXlyQFW0Y2HgzcvKWp6j0msSzUWVm0sbgXKhCZR56yGKkFhiyEkkOvXa4UgCjbdrLtoSSrGXaHL+DxesYH9FmAAtnngpsgiSsEAAAAASUVORK5CYII="
  },
  {
    country_id: 203,
    country_code: "SY",
    country_name: "Syrian Arab Republic",
    currency_default: "NUL",
    calling_code: 963,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjMyNzg5MDE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRjMyNzg5MTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGMzI3ODhFMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGMzI3ODhGMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bS4JXwAAAKdJREFUeNpiOSeo9p9hAAATwwCBUYtHLaYZYPz///8nIM2LSwEsrzESaSCR6j/j9PE/KL396WWGzU8uoIhRQz0DyMf/cYCdz2/8F5kT+19gVtT/jU+v/CcESFD/iQWfo5Q5eBje/vjE8P/3dwYFFg6CwUyKerxx/ODLG4Y3v74C4+0/gwArJ4Mqrzhew0hQ/5lg4qIR+MyIlBDpm51GLR61eNhZDBBgAHqosVFFWSaxAAAAAElFTkSuQmCC"
  },
  {
    country_id: 219,
    country_code: "TW",
    country_name: "Taiwan",
    currency_default: "TWD",
    calling_code: 886,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjMyNzg5NDE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRjMyNzg5NTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGMzI3ODkyMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGMzI3ODkzMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+yLbMqgAAAZxJREFUeNrsVstKAlEY/maawNtgmQtvRC0ENy7Etbhz68KH6SV8gV5CFy7b5EJxUZCIuBBMvJTS4G2svMyl32nCaValhhB+8HH+c85wvv92hsMA110APqIIDQxR/jShEFndPiKquu0ADwFdXNE4wy/BE5843cB6lGG3c1DVOTyeEwjCBIpyjOlUMjixNXju+3wV7RzRqBvBoBudjohE4hy1Wh/5/CoxNkPU28EkPEMg4EIk4kMqdYlw2IVyeYBslkO7vUCjIdA3ll0Lq1rEoZALyeQFYjGvthqPe8FShuv1EQkP9LpvD9YsLEmKRiNkWcVyqe6yxsaTWK2xGo0xcrkWisU+NRhQKPSQyTTRbI5pX9K7e+c1tqDVGqFS6WE+l5BOP8Dvd6Ba7VOqv+q7s+aywyxeul+gdPcIj9eJm9sXSvXKP6chWgfxTb8FGwpbMTRdKAZLUdaOfK4PqZUYbdVGoqoe7TsWsGK0VfSMAPvE8BP5EVRyhCWXTskFZjNxkTvDK/YBFnvCQfgg/P+EOf3Jw6+fPn8OTetDgAEAPv6K9CaVVcEAAAAASUVORK5CYII="
  },
  {
    country_id: 210,
    country_code: "TJ",
    country_name: "Tajikistan",
    currency_default: "TJS",
    calling_code: 992,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRjMyNzg5ODE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQUIyQzc0RTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNGMzI3ODk2MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNGMzI3ODk3MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+YTHlPgAAAVFJREFUeNrklT9OwzAUxr8mdpM2bVJ1QELqUsRAB3qALhyAuRyEAzBwCa7AwAh34AKILkgUKEJi6J8AberY5jWJmHHV4oEnPSn/7N+X58/PpRHvzWAhGGXdBtiBpbAGZqkY2gEHxyep2ZASpYbDatm1Sj+KR9psFq21WkexBAGh4CJc649XYCOpy+QB4vMR5do+tJIQiye4vAk/6G4PPB/fEkzA4RGUmOTuZA0oGWdlrzZ723G14wbglRb8sIvZ6ArT0SX8qItydY/eVYwbyK8iXbxBiim88DC7D1t9MlRuD+bvQsyfKV8yYRsFlxxOIEmsBEk8QPx6s1ooKnUEr94hU6f0TXl75kq/hngfnGExucvW1YsOsNM5B6u2/2Y7/YQutrZpA7m4P5WmDcTlDSqrm3NJt1yOCwUGsxxdG47YVMtsBW0b3P94LFLGNsDfAgwA/Id16/aLV8UAAAAASUVORK5CYII="
  },
  {
    country_id: 221,
    country_code: "TZ",
    country_name: "Tanzania, United Republic of",
    currency_default: "TZS",
    calling_code: 255,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQUIyQzc1MTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQUIyQzc1MjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVBQjJDNzRGMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVBQjJDNzUwMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+A+PQqgAAAytJREFUeNqsll1IU2EYx/9nHnVTpjMoQSuiNGeaXWmo0BddqFdFF12YQSVFVgpiObWbAlMhP/NO7SItIsOvUOhLQoouYxemiaVSGvtK3YebW/r2HOdsS8/RaQ8ctou9589vv+d5zuF296ZNAoiiy4ItVAAYbEwG/Xww1HI7Bo7osX3ejII8Kxqe2b1/qqRril/+Aq9Pv4qjS8YxjLmCACeHyv1GFCcZMNlpxp6rDkzoFtY6puT/C6VDjniifHXcgJ0uIypzbChpc0melW2WMoAox38HQW8PQkWMCZ+zxhHc/xMx8eZ1QjlcP835HyxQ2hmHMbsC8YFO/Mj4Dk30BCpyTNhxyoav+kXRsxGhHLRNDA/aIzcevOSSQscESkcgKolyMHMc8jdTiDtoRmmbU5oyA/g1wrA3Ox0JXR3g/etYX5cV5+ZQ+tgpeVal4PC+kSHhogLVWg2KXpTQDQOlgz2UgkvmkqEq1oRbSXrouszYd8WObxJ/q1D5WUB9C8NMWDri2msxYkwGQvQAPyMe7E2pXqbc5TKh6rwVmlbpjo0I4TBQz5CYq0CtthiF3QIljVvYKED9AcavDvbM5TjNJXPKUEGUmkN6mLrNiCXKUZ005TVy2fiQwapKRfzzOgwbUlYohUBP8WJzqVbY8faEAVHksjzbhttPpClVRPmRXKovyHFfW4qbPRq6Ie9D6V28h5LzcWkklwboOmYRm+dYh5JDQRZDXTO5DE8nylqiTF6T0ifY22UcuXx9jFwuCC5t5FK6Y8PlWOrYxEtycqlBYU+Zm1I56sZh4r3LTxDlopdLA7mMuWyXXARC3cgEGlqA2fA0qInyi4hL0eADtH1eCi6dJtzLtqJsHZfbaPt8aCCXS3NZgqKe4lUdu6GFxBajzVOd08qjG3CZn8lQ30yUEelI7a3BkJ+UXmWRleeaEH1mTjI0nLbPIC2C+j45qg13oHr0DkMzKW7KAIu/oStjaxZ/Fv+lnFERZV+N6Fz6WRbRh4QyhMenJoGSXBruIqK1H8PTKe6O3STlv3NsWSZeefU5ezIIT5s5OCJTaC6JUn8YCN0ypferj+WPAAMAfeh+JFKb/jQAAAAASUVORK5CYII="
  },
  {
    country_id: 209,
    country_code: "TH",
    country_name: "Thailand",
    currency_default: "THB",
    calling_code: 66,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFQUIyQzc1NTE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFQUIyQzc1NjE3ODgxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVBQjJDNzUzMTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVBQjJDNzU0MTc4ODExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MpuROAAAADdJREFUeNpivMcrykAbwMRAMzA0jWb8////aIAgBwiDSu1ogIwaPZpliAYs9/nERgOEPkYDBBgAYAkIxbRv61QAAAAASUVORK5CYII="
  },
  {
    country_id: 208,
    country_code: "TG",
    country_name: "Togo",
    currency_default: "XOF",
    calling_code: 228,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQkUyNkYyMDE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQkUyNkYyMTE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCRTI2RjFFMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJCRTI2RjFGMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+DvPYywAAAaZJREFUeNrslM9LG0EUxz+zP2ISsxitmlTxIghCKVSx0EKP1pZAWuiltwQvKir6H3jw0D+iB/8DLwXx4KmHXnppEaSFEEwhAaFhS9JCks1mt7MrLPEmOPGUL7yZebxhvvO+8+aJ8/RKDbDoh++DEJGbcP1wXijM3tx3BxjSZiIvIJOkvUYTLZVCmMb1JQYATdrfG8k6XUafL0viJHS96D59AijLGKGbMssGbbeESZa5ow9cvt3mz9UXkizgWQ/wPRd/45Na4u6/OtaLZ2Rf76LFk8QX53l4uEf6cg3nW5X68Sm6YSmXWsqo0alVSCw9Ymq/GAbS73OM5/K0K+XwnQVCPbExOo5TqvLj1SpO9SoK/nySp/n1M/rIJN4giP2eKw/ukHm3Jd9bp1zYpFP6RfZgR0Z1TOEQ0z31xRVAj1t4rRbll+vYFye0zi5IPn1MLDVDgl5Y1uLjG2XE4nxspRk0kKCyXdvGxyU2kaVr/5brHubENPGOc91AirPqMm43En3udDi6djBmorUm5VYN4X9nMK3pNsU1JL4PGCq/yFDqIXE//gswALMxeaDVbAFMAAAAAElFTkSuQmCC"
  },
  {
    country_id: 211,
    country_code: "TK",
    country_name: "Tokelau",
    currency_default: "NUL",
    calling_code: 690,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkJFMjZGMjUxNzg5MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkJFMjZGMjQxNzg5MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRTFENzgyRDE4MTQzRDBERDc2RTIzOEJBMjNFMThGQkEiIHN0UmVmOmRvY3VtZW50SUQ9IkUxRDc4MkQxODE0M0QwREQ3NkUyMzhCQTIzRTE4RkJBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xugOwgAAAy9JREFUeNrsVFtIVFEUXfvMjNY0zaMEa8zINLEHViCTX2EQFGSYElHRk6h+il4/fQS9IAjsJ0IoKqLCCOyNFQ5o9uNPDyYwKxWVCjPLfF1nRmfOaZ87auPY66e/9sdcmLvPWvustfYlIXZBl5ByEBgAJgshAIU/lJLSBjiAwc3r6nPTvp24kNdnQAg52iFiDymDOTneYydLbDbNodTvQbnfAyQXrWioq7h99ab/VZO7z3AJEY3vs5rzGsBQMBT53D7Ah4CgUlai8bNrRiUnAROX+hqPH3pWsKIVLrTcdV57kAP0ARTfLZQMz5ufnpWd0db6vqzsvtNlP3p0TWqqw9QnvqSUViVT3A7j4umHtfcrCla2ohnohv95OpMBkYTbCYX+kuJFqwvnA2HAEwpHntY2G/1hIstYESYDzo2FgXc15Tv2BfAVeEP6VgKd3XbAQpQonFUIz6lTfn4jaAqIDCNc8+Q1YBfCYgrCoHxoShIZl85Ubdpdjy4gwIgETc3oykLyp56w1iRlRGqZFBQnxCmEIwZqisAx8OTntl4/+zgzvwtvgVAMNHYZDe1NYZWHlCKiMd5or4Rg05A2w1O0ZoktSSkVGcF1Aq5DO+rqHpVnLujSww7G4eqhFZu3bHEH0G9OiQTomPehGV7n1i15E5JsSkWl5NikuO2hO+dvlZ6r0XFv0npinKAserqvx7fgCzApIVE0sjJ6SCAqyCpVMg+73Pf26tmq6Qt70cDmC+33T0sqZKPy8pzCg8VAj4hrE6McsV+p3IDtyJ5qf2XF9IxeBCyQOvq/XCAGaMOqbY0Fi98AKYAcD8368rDeubM/1d64dbK0TiehhWCVJiv9ejlJGxvEvSv+ae52llEp+UMQrQSSs2YOnNj/YsOBl/rvLpNe4G9rCEgFOql4/dq71bxBQV56q5S8SJwwmjb1Y2d35PBOX8+XCcKitPvDtgjWSSeL4wUdchCNvCIzgOYjAm+24Z3KaUnj5eRAU37u2r3bG7yucEeH9UO7Qw4fIhNn9Dh/PXgxhjfO5DDbNDuPQFHSlGoIHk8wY1aoszfpQnkmN+3CvymBf1b/oRPquwADAFZsVbvbw0XNAAAAAElFTkSuQmCC"
  },
  {
    country_id: 214,
    country_code: "TO",
    country_name: "Tonga",
    currency_default: "NUL",
    calling_code: 676,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4M0I5RDdCNzE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0I5RDdCODE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJCRTI2RjI2MTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgzQjlEN0I2MTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+hRrzKAAAAQ9JREFUeNpi/Pn0KTMvLwMM/Pn06e/372yCgoxsbHDBx52dN1pbuRhIA0xsUlJAo+HoYV3dbi2t3+/eIQsysbP/ZyAZsPz9/BniaqDzf7548fXq1X+/f7/bvZv/yxdubW1kt5NsNJx1r7DwwurV4gwMQHQuO5uRgcH5zh1OZWUqGC3g6qry8eOfixe/vXwpaWLCLizMwsfHQAFggrMkU1NNd+7k0tB4wsCgPn267o4drKKilBjNgsZX6u3lPXeO18QEWZBNQuIfGUY/7ukBJgA4n11GRlBE5OnEiX+/foWIMDIxfdi7l510oxm3MzAQTFisDAwcDAykOpyFyIzwj5JopDoYNXrU6FGjSQIAAQYAmalRzsgP/4UAAAAASUVORK5CYII="
  },
  {
    country_id: 217,
    country_code: "TT",
    country_name: "Trinidad and Tobago",
    currency_default: "TTD",
    calling_code: 868,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4M0I5RDdCQjE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0I5RDdCQzE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQjlEN0I5MTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgzQjlEN0JBMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+K4UpOgAAA9dJREFUeNqslX9M1HUYx193YMovAe8uajKwgXCA8cO4TCejBUUGo2mDwmprLSFD0yBmtWajVWoTSjR0qeuPiiVmw5FsAbnGUFJAwQkcIqUEDPHu8E4PSO7u2+cOYavvlQI9f7+fez1397yej2JCkizrc1/j6MHD/LO0UVHUNzSweNBIc1wCdiQWqMOQ7BPMtRTDb26TNHt2sumD9/niw49lgUCNml8u6YmVvGlbspRRywDeqhgkx9zgyq6yXfSnZ7Ov+CM+P1IhC4xcNxAXqKa6v5t4cz+qKB03jR0oUIqxFbMH+wVEcqXmKD2PJLMlO4fKM6fdBjNjEzhUU01k51lCnnyWmyN6sNkFXDk7sHNwX1U0w+cauBAURtYyHc3Ga3gt9JOFN6Rn8k7pbkJrq4jOe4tblss4xscE22MWYEkS/5cNH3UM1uE+Wnw1JBrH0ZstPKSNlDXsKizi5c35qA6UovvkM8ZGr2KzjKDw8Jwh+E45N9VLHYldDNIUEUrIiZNc7tLzWMoTsqZv9pWTlJbG/He3srq6jtsTQ/xpGBDweTMHT8Hnqxfj6RnEqYwU7GVf0lT/M8+9+oqssbG2lqiEeIYyUlnV2oGHkG3M0HPPcNlmSHYb8/wXscArhF+35GF6422+P/wV20o+lTV3t7UTHhBAW/gDJFqM+KgexGoQG6/0vOvGu11JyWFH6e2N78JwLu4vYWDti+wsKKLk269lWavZTIK/ihNXu4g1XHHpdsvYKT5E8Z/wf3fB4QBPD/wCtfxWVYE+egUF61/ieFur23jGw/HsqfwOrdBtibgL07oplTMEu766JKaW8BO6mbrOckETRmZ4LM2mYXz8/WXxrc/n8J7QLfjHIyzbWDip2+ioW93ubv8d3byduhn6afYNJPGPEXpv3CAsOkoW3yF0yxa3f1H5blaU7GdsrA+b2STT7Z7PzqRuS3GIlqa4SIJqTqLv6GRlaoos63xwkp5O476C11l9rIYJ2zVuGwb/tvEzuneTugW7dGtMT0EqLed0XT05G/Pkuv1US3hMNIPr1rBS/7u47U7dLk3DZ3xop3TzcupWmI8pv4iK8gMU7JC/bL2dXWhVKlo0Pugs1/HVBE/rpjgXGCHN7sqLmSdsrgUKSc0ktO44B8Ujkivuubv6ofUMa5c/Ss/yJIbON84B7HrNFS5frUKd+2NXEdF+iqrzLQKgcxvfe6ySTeuy6Hsma47gKb746aziaPj4BxPf10u7zUxyhBaz0STLbi7eTtn2YhfYwv9QzqUZN/SKm+2B7mIbfRo/nkp+nG69XpZ9IXcDfwkwAKswgUQLQuTdAAAAAElFTkSuQmCC"
  },
  {
    country_id: 213,
    country_code: "TN",
    country_name: "Tunisia",
    currency_default: "TND",
    calling_code: 216,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4M0I5RDdCRjE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4M0I5RDdDMDE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgzQjlEN0JEMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgzQjlEN0JFMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+2pqf5gAAAmNJREFUeNrkVktrE1EU/u7MNBk6mTws+IgiqRUpdFXUjaAiXYkbFyoSFSxiddMGsRUFsfgoYlcipYhIMAURQXDnT1BXSt3YlmJQ21iU5tHbvOfhmZtZuLKJjXHhgXOHy9w53znfPY9h39CxCCBMytEa0UlTjIBX3E0rhUv4R6I0/gkjrcLCqthJ0Gj1kNp/C9ghpwIDOQGteMPCCaOcIkibDAVo7yU167ZW1zEbRQGqHT6BcDqHTaVF0gVs/vIV2tEz4p0tWJCaCWxQHKsI3r6H0KvnqL6fxvKePuT6B2EtfUfo5RRC4/fpTEGw0iRgohMZaMdOwXf9CrKnzyPVdwBSZBu0qzEwvw47k4U2EoN28qyIvJYH6wauCjP62E1UXr9F+uljdNy6i9CLBMzZeTDVC4vXEk0b6BcGbZTXD2whD0XdCmVXF/ITkyJ/fbFBmDPzSEejWIpshzmXFGfb9u6GHOgkYN6MiKlMmEud6WasxGAXy7ArTln9wqzzZKw5dyzBB6O4ADP5Ge0XB0TqFB4+gtLbgw2JJ9jycRZyV6R2Ke+mYWY/Eb6vGRG3idbAR+/Ae+gggkeO48fIJeTODcGzfx8kXQcL+MXJQjwhGGBQ17QqD6P9mlv5v/HOg9KHN5CDGxF4MA61pxfF+DMYM3OQd0SgdO8kFuLIjY1CprbPaF1DKnUOCaeB5EWd6tELCExNkss1sqzlDPjlG+CJCYJTCdRfT/fiDUwnJ4oS1ekKuSFDCXYSpxKMTJLorVLLdADVelsm/4OxKAkHLLdknESq3WlDQ4L/n/OYuxG38teH/xRgALiVytS9zUFxAAAAAElFTkSuQmCC"
  },
  {
    country_id: 216,
    country_code: "TR",
    country_name: "Turkey",
    currency_default: "TRY",
    calling_code: 90,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMDRBRjkyRTE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMDRBRjkyRjE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNEFGOTJDMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIwNEFGOTJEMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ZWWjjQAAAsJJREFUeNrEVktoE1EUPW/eTGaaZPpJ0w9N60K6ENxVRIhIUdz4wSJYEFy40EXpzoILcSWoCxFddFVc6KKr4qKC4kJt6aoqCOIHoehCbGsNrZq8NMnMvJnxZtKSVmuJNaRvGN68Tzj33HvuvWFfwm1zADroFajNMOmdV1c+sGauCbiCbRrqpqeMAbYDz8kGS0WNAHoI8P3/Bt6YscIB14VcXoB0lsDNOLSubvi8tAcpS3eqCswU+NYyHGsR4YPHkHj3AYnMLNreP0fL+H00DA6Rn1T42XTJI1UDJjbSSSN25RpaJx5C270L2ZG7SPUeQebqDTBNg967n2aDDMzDl1Zg7L8ORumUKSuawcktIHqiHy0PxoKd1OHjyDx7BC04VeDRo8V3kIHEVmHw3BxkOgWuhsH1Jgq/rARXrBOX79iBC8yB86XTkTsQBGqE4oCmBqJSyL2+KEBaKYT29qC+bxD5sXHw1mYUnk6A1UUqCoGyHjgHXt8BbU9PsLYmp0oXVkBLl3x4VhZaezcaBi6g4fJFtL+agptaJF/kKo77BsFh5d9ukjZMUYidUU47KbcuLkZxcjNzsF+/Cdb6gSSxKArOKzOhWTFM2PMz+HH7OsStYRLeUfDOBJlcV3GObygus/8M4mOjwc635CGI6UkSF6dTlQyxoDVRafdoHdLheZR6S19JXBESV2PF4uJDWvRSkdzqDoeB/NsXUM0Y9OQ+RM+dhaqb8D7NQ+3sQuTkKbD6RsiZj/DyZLMtwetiYLyoe69ST9u/MS6S5vALggqXQLTvNJqGb4J3JeBlBOzplyg8foLle6Pw0j/BIuZWy6f4E3i1ZDoFql7fSQQqtLadUOIxyNnPlLPk1lAjuTlMBN2tFq6/AK9pEn7Bgu8WW7VPzjDBDKMaTUJs3p0IgFE3Ymhet1eNsa39WKy4upZ/fcQvAQYAj5ICkAs+H68AAAAASUVORK5CYII="
  },
  {
    country_id: 212,
    country_code: "TM",
    country_name: "Turkmenistan",
    currency_default: "TMT",
    calling_code: 993,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMDRBRjkzMjE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMDRBRjkzMzE3ODkxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIwNEFGOTMwMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIwNEFGOTMxMTc4OTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rBlHvAAAAuFJREFUeNqklEtIVFEYx79zzr137rzfvsFMExEqaVQyULLc9bKEWlU7DRfhql3bdm1atQqCqF27AqEQkRIsSMkHPlAZx5nRcZyZq6P3dc7pTthrEcw4H4dzdr/zPz++7yAYvg5WybYr6cTjjzvp6rN+1wad24rVuod6ahRmA0rB0EEQASEADoCguMJHp8jyy2pFQ5urv2esJaR0HwbzRFMIYI4QqgxXE11DpmnthWswLgYtHJ2IM+Z1Cusz+eg6Pd0beaBFx5mqglMCndZ4fPW+4Pa+EhCl+c111XoHQkWn1om3iSprm63vY4PZg+rReFZLCn4Osre+si6eSVNG15MbkYaW2119kEmVkpqD4DBspjOzGogfTvkXaWUHMTCSRKnWFxQl6dvyLKzM2Tt7m040F5yU4Fpi5pr81eXKD+Q8F/ji1cBsLuA7lHRl5/PidDSdyqUS+GTLw5v3LSGASSmpC7ot4QCmpRFhho7eIopcMzZ3kgOX+0cu3Xg7Nf7y3RsIVZWC1jGuV7vm92ZG/Qd15vkV4C27qtsHFAERKEZxJTP06tn89y8QCAMhwFjxHQJYJVkM82Bup3inkHdS6Si7IJjUnLSgVlXUFHqjCO7frilPOiY0WIlAU6Rqos5YTUviAQHCgf8cE4ersAqSeIkjQzF49WaMgjEaTSuNWVvYYVKJASt29v4vxEA0oLWJDC2RuE+J7KJUu2FYaAplo0XuSAifZOfrPgkEMpsirXuafIDydjg2/RcaczmHluy28VbZaxhxv1gxxURrMuy87NQ6Vk7RWx/S8tONLY+vXXe7z+Ty3kA5rvHv5mOamdWg487g8L2GsGsxs08QHJ/7T/Ntzxjha92hJxcn/fTc83bVXqMljELzlYvWiadOcvLp7Iu7UnX7nm8kVJXkjJaT+s9/je12Gl3IzHiROxaDRx53wpSbC39KuakFlt21xbfD9jBWF8YEIbmy1kgEs5zUPwQYADj4QuUGyU1HAAAAAElFTkSuQmCC"
  },
  {
    country_id: 205,
    country_code: "TC",
    country_name: "Turks and Caicos Islands",
    currency_default: "USD",
    calling_code: 649,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkFDQjQzOTYxNzhBMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjA0QUY5MzYxNzg5MTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNTI1QjE1RURFM0E2MkU5MzlCRDM2MzZFMjczNThGQkQiIHN0UmVmOmRvY3VtZW50SUQ9IjUyNUIxNUVERTNBNjJFOTM5QkQzNjM2RTI3MzU4RkJEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+vPd/igAAA8RJREFUeNrsVFtMXFUU3efcN/NkykNmYmSoCrYROgG0TUVNY1qtVavYppoyWrVNbAI24COpiT9qNY3BH/RPawxNCVg7pNJIEUzmo9rXWKYYZLQ1zAwiXIZ5z9zX3OMdsE2NMTZ8GnfOxz7ZO+usvbL2QdEPD7se8HyTrurs/u7yoB94x5GD657/9qOx5tYnh3BqNlm1ihyozrzeVpNd3WDZ2Ac3Hbjl8JU99/V4vv96+NnK/Qe2A2dfmBbh58n0TCwl5lryVwfuJ6/s9hyJ3VHXGSKQI6AR0P/hkGtJ3oBG3o6+Kwl2h1t62bnI7nh4pnT1/MDpsp1bxEM99MZ76xOT8Hjr8FX94/dOJn6JXApEMpkCx1FEJ7KMCFAA5BpLhJBRIghwXpKQcU23PmL+MZRC1mhaU36bdddUSOlsdC5ZbuOtAhMrc8kLSUcudctaRxb4mmDTvMxzlIKAsjgo2iqqGRNW7ZZKncIo+bsej0sIgSwbDUDP2KtTSIpk1bVb17tBtiXmCjIpDPpwwz321oeU46OyuXS81ClmY1CkhIEUZJlYyk3+T4N1OJOyi0rJQmjU5iyPz3DNm7xNci62PAXdct6Zd2/qeefBWg8Hw6M9E9StlcLmwYGzzZtH2rr2dHRVBMaCR8c7glwoZWLUAI9VqYCoknQZYeDM+9b1Z3KrusKfzcsCCPvmWDuj5NCSSgi/9WJTtMP2XPRU/5bONU+fbH/VLwYmhDobm5h9wdXubOju/QHv2nbn1DOFd5mLqqxJRX2BKCbFIkLFhBqq5mnWdDsLTrDeJmg5WMYtsnaTVO9rX34+Zz63aActDUgaGc9A3HPxJwoE62zwXNtL5z/Y/sSbj9W7SsM2nEgaZAFSoiXNLcLevVmfq9erNW6zNa5RLiMiJfRl3CL0/u7RcNgEwFJ0nhU4IPpx/3Q/3oDOxnmKoJIqTSXjvqGdvgKgKp4zC0jXEFZV7ULAWds86ftVbPcLx3brGx6FC91mA5Fjkaws+ToSNl6heR4zNCZGAGJonsMZlqaNlOg6RRGed3BcOcdqYHjWcBxl8Mr0D94FYB0YMWD0U6eTAGV9J+425sH4TzMaXY1F8jR1fRBYytBfVwsVjXrjNT85VVGiu9bVToSnFe9T/NBXuz456mDZJEJY0wpGL4YVBU0biotvvO2KzLWNfVF/acp78FAlxgsURd3IZl9RIJ75G9F/CYSJpuiqZuUFs5RPMkyOLkpaLEnS0sos98mSujL6COJyPm4AaWrxXNcTVizITf18/0P/F6D/EGAAAySvSKv5fokAAAAASUVORK5CYII="
  },
  {
    country_id: 218,
    country_code: "TV",
    country_name: "Tuvalu",
    currency_default: "AUD",
    calling_code: 688,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUNCNDM5OTE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUNCNDM5QTE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQ0I0Mzk3MTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQ0I0Mzk4MTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uL136QAABDBJREFUeNrslHtMW1Ucx++5jz4ube/tg3ZreYXwHEwGgSEEQomasQQyMpUEZqIYJlsGRmNwRmO2mCyZic5kajTRGJxmzoxNFo1xcWMP2SQuk+LKuk1hFFg7aEvfvbf3dTwEXSLDhH/8z99fJ/fmfu73fL/fc8Afb33gaCj9eok5NHR7ZngMM5m/6C/Z8eXRH57u7RgKYsm0lZUHcoTellwpv2CPX0jFEzRJYGsNDhRe1qRlDVpryRRx1F0eujzxUinV1+QwP7rJJdM1Jqzu+qVr1c6LIXzAFDjWkddQX/Bm0NbxXcCkitmtGZIE10TzihZg2GtlB+rMo6PBZrKzq2pBZ/ycE164eefFHQ3d3fXzQyO35n01WbrxvZnZGIs1OwfdqTunz7ZoMb3NmhIU8E8ixAAFxJjELPAbcmivQzsXE1iAQcBtbtJwfDgueXkAo3GLBhdlZUmrYxMxDYWHLDa4EHIQYqZVi7Hs7p6+RQOr51MPHJAh4eccBJBrTaPFhptXgk4fl6XG08gQcsr5RNgbSmD4psYyU3BBl4yGOCwweMLQtdNaV8L8PBkQgMuWw/r8tE0PKZIQhQd6E5LOpr7fWTz4vb+9ynhtZ8lXN65smZKLNASnQJysnLTVtrW9/mRxjj4EL00c8Rsq8g1bTh3/raX1zNaG3T2y3u3ynPP2R7N+EQ3tAmdSSbz8F1qQNQYq0lpwGseUE3PPumLVQcHKqMIrGyLe6+n90B4pvjDy9v5v2o/NDp8NbGOitTdG3abirmeG3/92ktAyz1mlXeKczuWeKdhIZGiArKygkbq4xPzkf8wTK18SLPdS2RJUoSQUDIcQJw4PPP/rubE3kuxnhlzcTOVVG3OL2BhNe0qK5vKMiejSj7f8rqoKq7OsMCPlAWQKJ9VAEhR1RDSh9Chcus/ZRUWNA8jJGehnhypebrBcPL+wHTQfOalYzIzEb6QBSZGYJM1GpagpUx8O5ulxTEXJCvTdi0RETG0zW7kULslpqNISnF0z5+OzOZkmcRH1QUfGkdiYwBwo35+QDIc9B8Guj8483FDUW4CtPahqi7yt3XFyX+U7n070HZ/tZlXhqMgeLHu1MXvklbGPr4drGSpipJaIR1o7H/7+37grL5FkCZLTscKpeJECCajgIqRUuMintePhrRKkaGK5nWuj10ZikJfppKRD6cdE42LC5klsLjW4363Zo8djg3f3Xg01aYkUKjUAy8cVXycX+YAE5tB3662XkaeNmecHH3+qzX5qJpnvTzvQETerAxs0Poi68fee160agkDatt0+vK/yyHSo6Pd4qQzJ+UTudLLwgm/b7UQZQ0VX2Uiu1w2w3IGrQWd8nPFyed5U/ieefhUpZKoXU6gkQIJwdUDrRaOhySRqArrS0NqiXlx5iPJU4cKKY6vvWOw/m//Rq+ZPAQYAm+jfAfBELj0AAAAASUVORK5CYII="
  },
  {
    country_id: 223,
    country_code: "UG",
    country_name: "Uganda",
    currency_default: "UGX",
    calling_code: 256,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyQUNCNDM5RDE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyQUNCNDM5RTE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQ0I0MzlCMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQ0I0MzlDMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+TD5l0QAAAL5JREFUeNpiYBgFKIDx/39aGc1EO1cPTaNZbilz4lfx/9P3P6zsqnMOLTi0UEFL31nR/kaUCcu3L4wCnJS6mpeHQW7uIjYvs+t/BMT1bZht1SXmLOIVoEaAfNFS4PUMO3v99tnLJ/nYQelJ2D3wi7YydULtPxikFJUqcjHdCjH7/+Uj1SJk/fqNQKN37d43ceKU/zdP71i6hKgsQ1zG4umfsFpYiF9RQe7lT6YQbwOGn69Gc+OQyo0jLEAAAgwAGc1CiUqK1KwAAAAASUVORK5CYII="
  },
  {
    country_id: 222,
    country_code: "UA",
    country_name: "Ukraine",
    currency_default: "UAH",
    calling_code: 380,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjExNEYxODE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjExNEYxOTE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjJBQ0I0MzlGMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJBQ0I0M0EwMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LuVcRwAAACtJREFUeNpitCo9wkAbwMRAMzBq9KjRw9Foxp93xUYDZNToUaMHg9EAAQYArtQDhtrhiMcAAAAASUVORK5CYII="
  },
  {
    country_id: 7,
    country_code: "AE",
    country_name: "United Arab Emirates",
    currency_default: "AED",
    calling_code: 971,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBMjExNEYxQzE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBMjExNEYxRDE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMTE0RjFBMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkEyMTE0RjFCMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VISheQAAAGRJREFUeNpiPCeo9p+BCGDUeYuBmoCJYYDAqMWjFtMMsBCr8H/c/98M7AzMQCYjfX38/QsjVD0jNTDRFv/592eEJS5mZuaBSVyM/LygMv0ftRIX8RYzMrKOFiCjFo9ajA8ABBgAlQMOS8Um6UkAAAAASUVORK5CYII="
  },
  {
    country_id: 249,
    country_code: "UK",
    country_name: "United Kingdom",
    currency_default: null,
    calling_code: 44,
    flag: null
  },
  {
    country_id: 2,
    country_code: "US",
    country_name: "United States",
    currency_default: "USD",
    calling_code: 1,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERTc5MkI3RjE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERTc5MkI4MDE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkEyMTE0RjIyMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFNzkyQjdFMTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+60cYSwAAAyhJREFUeNrElN1PU3cYxz/tOQUBD/aNymtbUAq2IOiUWXmZA40Iy2BzcW53y7JlyZLtZuE/8NaY7Gbe7WJbdJnTDOdQCbLKrERUotgCSodQ7AsFpK28yKT7rfsL2gv7JCcn+eV3zpPv5/l+H9X2xp65SqtJGfr1Fg3vNPD02SIhfwRniwP3pdvsOVxPaCHGs7+DOA/VJs8crXXEs3P48OfTfMIcU+SRaqlMzm8SNut2VuefIxvyydZIxFbWyX35iviLNZRiPZJaxdLyCkoiQUyc6cwFTPvC9FRkcbJMy7JaTrmxHIuvxaZm5xW7+Jl3NkKRaRt5OVlMjvuoqa9gwr9AgS4PvTYP78hjdtVVEAw9J+Kdxv7Td+hL8tGTeslGg8Jeexk3/riLs62O+cU441NBDjbZGbg+SlNbPYvRF9zzzHCoycFA/yhvCtRqnZbr5a1YEjGm5S2po1ZXfRHVaCTlWLODq24v1eWFGPVbuXH5Dh3vORm88xhziR5zoZ5rl9y0dx/ggS/EzGSQs5Ua3s39h7CUlbri0mKdUGzmijBXqzBXYH4Z931fsmlf7zBvd+wjIigMDI/TcbyRvt+GOSgUZ62uU3S2h8IdRgrTQK1S2T6PyhpZ+aB9LxcF2hpbCUUF27hy4S+Of/wWfUMeykuNVIin9/xNuj9qYWR8juknIc5szNC1voA/DdSypayAhlor57/vp/NEC7OBRfpveek+0cwvP/7JsfedhEWcLg8+pOtkMxfOuTjc5WSrSc+S6ymSQYtGyk5dsVT9/4zbhZmu3Z5IztggXOwSZjvSuZ+hUR9mEan/KAz+PkJb5z7GngSYdXu46T9Ho3EL6ZSKnZ9Fax0W5aFrDNuB6mROA6El7BYTnns+bPt3srK2gV+QcIjIPRLzrxL3ZkLLfB0c40udRCAd1EfFNioxaSG+Sl2NmchSnCKjwh6HBWlzk/rd1uTyMOTn8MbuctRiieyqLKbKbqXs4gSvQmFephOnRCIRFW+F11yyp/3TtD/eSKjYTM4rjcZh110yUZlDPfnVqcwovkppRhRnDrX/2x+UjKDuJXcuE4r/FWAAjBMttNdoYOEAAAAASUVORK5CYII="
  },
  {
    country_id: 224,
    country_code: "UM",
    country_name: "United States minor outlying islands",
    currency_default: "NUL",
    calling_code: 1,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REU3OTJCODQxNzhBMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REU3OTJCODMxNzhBMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iRDlFRDQ5RDY4NDg3RDhBMTZFQTNCOTM5RjMyNEY1QzIiIHN0UmVmOmRvY3VtZW50SUQ9IkQ5RUQ0OUQ2ODQ4N0Q4QTE2RUEzQjkzOUYzMjRGNUMyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MuFAFgAAAwpJREFUeNq0kt1PUnEYx5/fOQdQ4BxeEjLLFBzqQJFCM98oTXPqNMXM1nW3tmxtXbS11nX/QFtr1SzzZc3WWisz06gww3fN0nwrXwYCKno4B4ET/QWcLvheP/vs+3yeBzXU3tTqkro6B8srTKF9bqBv5lxTnv3zDykp1uuTerrt1XV5Ho9vamrFUl/qttnqP7UJAe1DHEQLqq26mZwq3/GxMlKKY9zWNh1gAwlqJYbh7k0Px4UoUorhBO33exlWwgRulWlFQpwJclHRBL1HLy+Ej6YoXU43ISAUCmp0dkOllgdY9s+y25Cdsr7uIaUSKYWPO1ayTOkZVy4DvxAypTRTn9L3ZuREQSZw4eGhnycL9YsLaxJxfI5ZaxuYtJQafTv+mam1gpqSLbuj55AhDkMshkcXUlx4NbL12epjDvtivEhgNGsfPei9eOnU3i7zrneksbnYNjCtTpRpNIntL0YMCvy6YhsDjgEUHd1kvZ1zTPv0cW9lVX5k/s3rIev508P27yQl0WUmdz/rtzYVuzd3J0bncgvS2RC6f+8aTyGoOL8lGAyeqTSNOuZFItxo0j199MF6oYim/f3vxhrOF322zahUyhSNsuv1ZLYcb413EgAsj9ZE0pEDWTmajvb3FZVmDPAX3fbG5pKJyXmSFNfU5Xd1DNZZLV6vd6B/uraxxPXp697KqohAAcTD9amiFoIQmnLTfs39ERBCjeZQ39sxS7nBz/jHh5eKLMbp6UW5XKxOpF69/JZfkNXWdoOvkDJLa5ouaWHOeTQ1ASPQ8uK6TCbBBSJCgO8zAZfTo0k7HA7BpssDFEW4Nu/kUXFCgtdfq1RkQoLky0enLkMdDofWV93HzdrhoTkpKdGlH5wYm80ypno9u84N74ncjG3XyuTdJyIM9nFR9NYBjtvjQI5gl/t3GgmCHQ6kCEIADAckAh8HkbvFI9gCoAAw4Bu00d7JczQCDQHGIDziAkF0IeghiIF/EfiPIJamITYh6KXfsUI/1xtihEZux3is0OFwMFZCXiabY4T+K8AADkw4XY7JKsMAAAAASUVORK5CYII="
  },
  {
    country_id: 225,
    country_code: "UY",
    country_name: "Uruguay",
    currency_default: "UYU",
    calling_code: 598,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpERTc5MkI4NzE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpERTc5MkI4ODE3OEExMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkRFNzkyQjg1MTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRFNzkyQjg2MTc4QTExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+/+foYgAAAXJJREFUeNrsls9KAlEUxn93nCadUbISM03BWraofbRq07JV79GL5KZdqx6h1wjaBBkGQVCNWmo1M47jn7xdw4L2ji7qg3M5Bw5897sf53KElPIJyKpwmQ4SKmyhiJ1xgec6CE2jPxB0uwGWGSUet0Jh178TvxNwU74kqnuqEjTqt+SKu6zmN0nEzXCIh0NJq+XQ9yr41RM8547l1DrNh4CXxhs7u3uqS0OI0sSItdHheH1atQsM54ymfU3SUortMv3aKaZu0+tp4Sg25g26gUf98YpCPoKlfDVNQbV6z4IcMJCqR/VJeTRZxSMIITFiabr+B+22j+/6JJJ5Ws0HXpvP4SienxtlGaKZQ4bOOXajghVbwUgekCrsk8umx5crTZY4onQXN7Z5X87xVltHT/sMpWSgrVEoboUyTr/mOOi0CYLO1xwjA3Q9wuJSJgxed0QsmQE0ZgT1psd/TPG/x3/C458PZIpw9fHKk5jy6uN+CjAArpeUjQlCP/MAAAAASUVORK5CYII="
  },
  {
    country_id: 226,
    country_code: "UZ",
    country_name: "Uzbekistan",
    currency_default: "UZS",
    calling_code: 998,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjFFMjIwNDE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjFFMjIwNTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MUUyMjAyMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2MUUyMjAzMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5O2LbgAAAeRJREFUeNrkkz1rFEEYx3/7fhd3c+EE0XAE0UZrG/E7JGhjZWHnZ0jhd7ARsbS2sRGLFIrfQBBBMIJwigkhyb14+zI7Oz4zFwSxWpHbwgdmZ/YZZn7z/z8zHk9ffgUyAh8mP6Afs33lEvvzgg8HJxAGuGgMF84lTKuaNcktak0WhZxWCqUNeLSKUNqmG81yRsOMvdu3GC9Kdl+/czC3odJLcC+h0g3DJEIbw7AXMVM1ioa2ZAueYUxGqXixfZNrGynXn+2BKEPGiLIt6a2y8aKgEPCJzJWi8rhQ7gB4LeVK+O5rcJbeOL/O97yE45mY3xdo7cBpFBD5HoM4JJGS2D4OPDZEeWChFt4yAnbu7YpLCUXFkWxw9+om87UeH8dHrA9SPIFMKu0U1jKfi+W1OJuLcqt2Ib3D2gO0aCG5WvoUxzx+8563k5w7ly/SDDIOrN1WdRKDrikCuWi2pmGEqRVTyeuqdLm2docPDz/LKrRdWDcNn17t8yX0eZD2hanFYp9K8tZqJWrjs3/bF1q7Gx78RY09M5+cuue0rDS/au728n5L/8vwjDFyk0hZcVjw9Ezx/wPuyOqF+fNyrSDCJ4/um1VDl+/l+VYnVoejdLRytQ7sN3QSPnQHzjqxWtq3LuA/BRgAxkzb8HD3VjsAAAAASUVORK5CYII="
  },
  {
    country_id: 233,
    country_code: "VU",
    country_name: "Vanuatu",
    currency_default: "VUV",
    calling_code: 678,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjFFMjIwODE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo0NjFFMjIwOTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MUUyMjA2MTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2MUUyMjA3MTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+q4FzLAAAA2xJREFUeNq0lX9o1HUYx1/f7/2au7vdbdMLl2KzmT+oTUaQVjAhFbYKQ6SRqF3gwLKLCkKNsKyhYv/4h2RETlAQRAZO/+gHVlrLAn/NBvkjHJOam7Rzeafb/fw+Pd+7TpT+kDu3B54P932+3++9n+f9vJ/na1RRMbDTNd3/ckUVaRH6rQRZBBODiTRj2Uqk6wDMpZptZTUs9QY1AUsTSCo8msDEmLl/A/GrZ6GmNcpLiV4WRC/w89gtHnd4mW56cuAyEcCVDdDZBUe3wvkfwdk8TMvYeZ6LXqI3Oco8RzlTTTeWwo9nAmZWj3e3QNVs6FbgX3ZDTzcMNg2x6PY5mqOX6UsnqHf6CJmucUvgTgsTGVj/AZQ9osCnoXcfHDsCF54cYkG8h5XDVxjMpHnC4aPacOYEKOMBbJuvzKByioPw2xB4DEauwZ+H4esjFt/O+4vG2DnWRPuIWRbzNYGgJmCr312C2zMTU/eHl3loW11GygmZm8KSV+M5Wc1WBj7bAc8+pVo4AeHNkOp3E6GGSDDEZKV/TKySqo8tbHDK4HdBeeVFjzxT75Tfjgblp70VBUHnvGEu8sMhRK4hX3ypsYAdd4uPgDjwiVmk5yreGin3T/LAJ7vHaGly030mTU9ngNqWfxiJ3VtL3QzY8T48vwQOfgMDN3QSStg1Tvs48FWSjo98LF6U5ftTaT58bRKWyj2V/v8LN0ZUiAmt1Q+zVCFTkrqFHKUJzO6xNM5xSvt75bJrk1ckHpK9W7z3UD1rBnK4A0n3I8f2II868lRDUN1ftN8RVyGLoROVnLycZXlbLHc9tRp2bYflzTrjOueRCJyJKlFNM6FVea9wQTJb/K6+G9il/2eYJqmUhc3e56rmcCv88Tu8tV7nuk8fb1SZr6lVngMQVc5HtR+mxg2j+B4XLJ2xT4udusnWrYa+i7DiBejq1XC9An6qPieoqab05s08mI2XldLEVdgkH29QKsMQV6W2rYL9JzVYOw3atcIG5fyWVnc1/t8LD/bZzAFv1k218U3dVMPwzuvQcVyD0x7WTGbmAe19WgAcp8+0cf1XYi4P/u3tOp+dGqkOwVoFfPohFY0Ff4+qpqXoHt4XeFMrsu2g/vJOhjfqYGEoP0BDtycE8C5VBwZYV+dncU2+b9e1woz1wD28n/0rwAB0+lOwpXHd2QAAAABJRU5ErkJggg=="
  },
  {
    country_id: 227,
    country_code: "VA",
    country_name: "Vatican City State",
    currency_default: "EUR",
    calling_code: 379,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MUZDNzdDNzcxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MUZDNzdDNzYxNzdDMTFFMjg2N0NBQTkxQkM5RjY5Q0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iODY0MDczNUVBM0I5QTUyOTc2RUZFMTAzNDJBQjczRUMiIHN0UmVmOmRvY3VtZW50SUQ9Ijg2NDA3MzVFQTNCOUE1Mjk3NkVGRTEwMzQyQUI3M0VDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+oPgNXQAAAghJREFUeNrkVL9v00AUvvNvO44dbFNBkjYllIWUASbEQAeQEBszjP0D+B9g4p9ghY2VlQEhIdQGRwyIItFUSUOSJnbqn3dnH05IUISEVEdCDLzh3d17T989fXrfg0n/HjizQev12YsZ8NfsP4GmMKN8es7ZhxTCFIIULOIQAoxRduPyQs8R4NSlCfFOByhyOUEq6hWG5X/G4cznhqY06wsmJIzjKHCP0Ml77B8yohlbNwtaVZJlVjiXJJTj8kO7w/bgqIkRUo2yLMaR84mMba5Q5tXK9xC4E5SmqXVhc2N9MzfX7R77rjn8aH9wRrZAfdI1nINt9/hqyhjIt6Ovz5RvjxTn+SqEAMgyUh2yZpCWhrjcr103as2yekAg1hhHO+9I2IdsNC3Mq8ZsQlAKEAIFCcSj/darx5/3WmL1wa2HT6q1dQgmAMgk4Vkmf9coCMPhWxq2sDai3omR4iJ/3yV32oPjfjwCHtZ1zTLXdL2UGzoJulHvTeJ/mRwOQrLlmk/rOyWR7w77nV6HUgBPXZZn8SrQTLHOrt0lndCdXAzINVkkPOdlw6YSL85oUouXNkzLklfhOhMMXDzD8dh++aK3t29uXbmxu6tY5mzw59n8klloMjNBUS7f3qk0tkVNE9XCb5Xcaqtn1hplBMFqNH6plNLlf1eFXtb9n1L51xNd3lT/aF//EGAA9B/iH5xEuF4AAAAASUVORK5CYII="
  },
  {
    country_id: 229,
    country_code: "VE",
    country_name: "Venezuela",
    currency_default: "VEF",
    calling_code: 58,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo0NjFFMjIwQzE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ODRDOUJGQTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MUUyMjBBMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ2MUUyMjBCMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+suiZXgAAATpJREFUeNpi/H5RnIE2gImBZmDUaPoZzcigsJdGRrMQ8hUjw/ufDO9/+VTov33x/cfPv/LKfBvaLzDwsjAIcjAw/AdCEl0t+IGBhZHh02+Gm+9rpzt8/vHnz+9/v379+/HrrxA/2++//2XEOCsT9jGoCjAIsDG85iPFaOF3DF9+yyrxOZuLs7Iyffz2Z9X0KwyinCBPPP8WmqktxMf648ffo+ff3LnxgeGXOCkBwsLE8OkXz/c/Ho5SmblH3j/5yqDEx/AP7HkV/tVzr3MIsM2f5XDl9GuGDz8ZuEgKEOYX5rZSif6KWVUn/v3/z8DDxvD/P7Imhm9/GX7+ndRuvnbv04M7f5PiambBd//57rMIMIuI//vwi4EZQxnrXwZe5kdsQm/+fWZgeEvvxMd4XkR7NKOPGo0bAAQYAF2fdeRLtEqSAAAAAElFTkSuQmCC"
  },
  {
    country_id: 232,
    country_code: "VN",
    country_name: "Vietnam",
    currency_default: "VND",
    calling_code: 84,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3ODRDOUJGRDE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3ODRDOUJGRTE3OEIxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjc4NEM5QkZCMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjc4NEM5QkZDMTc4QjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+MKjEOwAAAg1JREFUeNrMVTtrFVEQnvPae3fvPryPRLmInQn2WkhMIYggGEHs0gqC2FhraSE2grW9VgF/hZWPQmMqCZFAQhTxZu8jZ3fPjLPXRiSsm5iAU83Oznz7zTdzzop37Tk4HpNwbFYXWkjATKAVojYZXTPPTYSZRXbyHSkbdHSsBWRj2b1lZ5YtO/x4dNAlXUgu5+2rVgBB8S+C8BcLKHZLHOZYkGh2XDDnZIj+aTfa1Ebgr1c6phIDa7OmDKRPyaXcn3deH7m2s5TJHkJI7GggDvpnkRNki8geiDWK4ocIL9j+wzGMIVvXqoO4JZlp/97k5LL1zjhIcPtJkL4xzH3aXT3Wokmc/uVpsH47IgPeYianrWBWFngLOYS4cTfaeNxiTO7vIGNEkAE1Ytx65b+f76YvmqLLIRAK2BmueBzcfOmbCFWL9hW6ckOwVCtoF+lA735gj9QsqlPITrpm0m+6lThhgPBwy8drloq4k8/csBDT6K0ZvTYQY++ajXpFMdxX4dp7nRcyvpJ5F+3gub96Pfl4M/n+LDDn7Yklm7m/nJ0qaG5WAbUX851H4eqdhIGkorX7yfaDqL2QG4mUVx7hiku1hA5JJ5R+MiZwKiglwj2wIxWdy3EoioHgwR7meuIyHInJV+nxxJi/mwYb0NRu77NSAQkNFXLr6jGyCOV6wW8QVKr4Z/A//RUcwn4KMAD6MNV+pBmzeAAAAABJRU5ErkJggg=="
  },
  {
    country_id: 230,
    country_code: "VG",
    country_name: "Virgin Islands (British)",
    currency_default: "USD",
    calling_code: 128,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REM0MjcxOTMxNzhCMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REM0MjcxOTIxNzhCMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNDJDQ0E1MjFCMkQxQkRBQkYxM0U2NTQ3REJCRjE4NjkiIHN0UmVmOmRvY3VtZW50SUQ9IjQyQ0NBNTIxQjJEMUJEQUJGMTNFNjU0N0RCQkYxODY5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+SkUFawAAA8xJREFUeNq8k21sU1UYx59z7kvftnZtx7rSgbME5qgbhA1JlBEcUaOxiGxTDMOJCSaKgZjMEPniJ/lishjjDGriy8QPkCFbFGM2FhMgy2S4bN0kMma2du267qXre2/vPecebxkTv4jEOP+5H07uOc/v/J9z/gfNtLU5d9f0JO2tbf2j3VdBZ+t4Z9uhy5/21e5rvEhi4bjDht5ySyeaN6Y3PFS85zzct7gLI+uHT/cedsNLu9ZnytzXx6KPldFHBy/6ijd+5aM704HPvEUNXk9HtLSh7WZ0aoIQlRBK7ilKGCUUtRw7OxHHjeX0qDMmND0RtLkjnT0lTc/On/qIr6utjt6Cvc/1TOba3/s+9vvMyNB0MqWIIocQyDKjlMOgqoA1iwCU44goIsZQTlI01yi1v8F0YzwJ5lCKyDPhcrcjm8xMR+IOs7HQyC3ZndJCwpZNODz2FBLdI575nKjjCZXUdR5RWCsoOYDcIhb0yGBWwiT8q4REkHOyhuaD1nUJSE+nieeZR8qBmOMRIgHr7sZba4r21yvn+6TCgmFLrTMTZ3oeNLeMsrxPk7leqj44cCW8pj5ayPG3oh747VwVN2aiLLN81rjuWtHj7pZE95mKT06Yn9/Vvr3hauMhD8jj23d/8fKxNZc7Kz8+vrS5olHYuTVeF5NBj0m+WeDjSYnM+g1ziaNPf7jD+WRiajSbUvIz+e82+t0jO0LHS14JXjr31Nuepgtvtv40NzRqrCzmY5FXXW84t3zwzS/ogHfT+EF2SvApsiIBr5UxUDnAkso/bKioNtv1SExQkTKMtZkV8Q+qqTOtXR1zpmsLBUBTgJRLw2k1WjF0E8BgmfUNNh+5/v6+vSe9lS6r34KzccY0WwKwOBPGlJLD5qWQLA0sTFp4IfIXbh79eltvICBo9jleEg06YGrnlamz3DY0sKTXgmB0EoWNdP3wYpeKkEMnmgxYVVWmADbJOSsJBHn3A1Z9tcs95F/MyFpaAKM7G/DTAc2ECFqGiMp4LUZI4LX7ygAv5BtXVY4DjrOx/HqqLdUGGloFssXowNj+c0arhTKbRfKbN+idw5CllN55Mghq7rbAc8uDu3exIi0aaOWXLBuaX4h++3VvdrzqO7+rfaK3xxdr0ds+P9k3P1vcP2hHIP0t+t4iBDDWpWZze1zBA5XZItuN1k0zVXTx9Jeuvv61oRBFoCy7ee3PGp1evB80QiwnI5VaS0uTzd4Jd0EmLAkdP272TxZiHNXpVSlD/iX6H5WTbr9GWAUtW8SwalpFNP9fne//6noV0X8IMAASR8khb/BRHwAAAABJRU5ErkJggg=="
  },
  {
    country_id: 231,
    country_code: "VI",
    country_name: "Virgin Islands (U.S.)",
    currency_default: "USD",
    calling_code: 134,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6REM0MjcxOTcxNzhCMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6REM0MjcxOTYxNzhCMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iNjE4QUQ1Njc1ODU2QTk1QjU5NTgzQTRGRDNBMTc2RDAiIHN0UmVmOmRvY3VtZW50SUQ9IjYxOEFENTY3NTg1NkE5NUI1OTU4M0E0RkQzQTE3NkQwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uuR1EwAABFVJREFUeNrMVWtMHFUUvrOP2R1mHzP7Ynd5LYFCYBVKwSImWBvTYIGYCkbTGu0fk0agUdtqiI2KWmOqxhgfbdPWRGhII0nRUjV9YNtAK0HAtVhWaCndJ8s+YHeHnZ3d2Xk4VAQaQ2lMTPySm5xz5ztfvrn3zBmI53nw30D0r6ruxw0vWknn1qIn2Tsc/l7EpWeSpXxm8igX6ZNoNsvxTSieL73bQjJBOexfQuFvdEV7cfN2aLFo2VmCBbHgME1eTYYGFdl79KaKRWmBmqAitKsTCnW6UkoU36rSlkvQKllalgK3wGIomSACrvOF8hE+sCeu247CwluKKJpLzHuS5DgVuUIG+lnqsgIGSQrIMl4X3EBL15hKsU77gYSjTaYC4QBQIsCUA4K+NBG2Ke/hHwUC6XoJ1RwBbiRinMZwDPC/2882qBAPhiXGJgAqBTIUxGmJ1nranFsrglZIL+LmZ1Oel6EkIJJYaUmEocD0NHChNp0+pp6pvuW3oBChL37FzzUl3Hut6nYsHVCE6NoEYtKTDKs2FfWmZVQsnoQgPeYPnHJ79xcXXiGZ4QjUwP2sIT7xes7DaSB/I+RwNuXuKAKEDTUB0mEFmoBKGyAG9I89n3np8PcgcO7aKDDIACWrx0uOzcqNI56bDbkWKSxduAeVDH771sx4nPrU6ztNRHLX1Xw0uRWxHI7GMmfsvIY/Y4FHAJ1Pzq1T6gJSDiY8GUCCVBr7ATsybgOyWPYlrOuH9B5ca+z0OZ4bd4tFf3dIFoY980DBQeeMmANfWM2Hu1vf7zpIP9vxakWH21aXmne1V7rMpjoGC8aGXICMiwzaFFyGFB+bHAjFoeIzhuOHgpm7FY543JAuVxXguEgiXv5kmnXqE7dnCDpVkiaG1dlADr66uMtFZ5fV31CUfw6v36yi5owaVIcgegTNhTG9eJIva1Favp4s7HqPQnni127fdIJNaeUSaKHdoGXpR1UIkMIaTC3E9RuezkvPYlDmZN/HEiSzpLSFVvQ6Y93xuD7KiBKcNJiAb0Mfpqn59MKdIrWFdQwL51qTZdYosbFw1B6e5VhG0BG3tbWxPGB4Vp6i6nBFvloph+XuKddl58BvsevkXEEOsU/F90qqm+YnrFjAyXgj0UeeyHgxEOs/ZNA82OwpjSTc9i1VT+aYBbNsMp7PM5UaXAoLnc/zHMczwlrEQjBkH8reWWhoAc1vAk9f5uzU/tD84HfttT1P7eioXd97cR/Dh9jBbeQFpPV4zXV/iL8bf2lBq00+rz/ERkf7hl6DC95ofKjR3qOJ0OEwhcoRgKVIiWHX2ewj3159txX7pXHbKQBk/1SA7j1UQ0lwoKt1Y96Wx9V/TNl2V1WD+TnguiGmc05sCJaDGPRWifEdq3KV2bcWWIaeDvmEYNz2gfMnMHkB93sHhPSF3j5w9OQ5r3e1wjWluZWJzzscjU7f2eV4khh1TJE0vVol9H/7y9wX/hRgAAzpo5Xw0k2XAAAAAElFTkSuQmCC"
  },
  {
    country_id: 234,
    country_code: "WF",
    country_name: "Wallis and Futuna Islands",
    currency_default: "XPF",
    calling_code: 681,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAxJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzU5MkY0Q0MxNzhDMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzU5MkY0Q0IxNzhDMTFFMkE3MTQ5QzRBQkZDRDc3NjYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiBNYWNpbnRvc2giPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0iQTQyMEE3MkQyMkZFM0NBMzRDNzNGM0VCOTZCQjUzQ0UiIHN0UmVmOmRvY3VtZW50SUQ9IkE0MjBBNzJEMjJGRTNDQTM0QzczRjNFQjk2QkI1M0NFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+5wahWgAAAsdJREFUeNrEVUtrE1EUPudOMpOkNcmExsRgGyr1USRYUOrKFFTQhXWl0YUoLizWhdS0ttBCpdWuqhY3RRFUFBSh+heUdm9pKbopupPYR5o0j2YmmXu8k1RR6bSlULwMw33M+e53vvudO9jcPDo7m+zrOxaPR3lRS504TTNfjKZDmE5KuQIxhK02BtvWbLSpz/7hTuVng4Rsmg7ZAtcr9O12KBWpUCBuAK4mRPkciCERYAWLSMjEGLpcwJg5bwUt+1VXFmyqRwxKYoMaP9u9y3B7MLUMRpEkBRr2wlyCUwkJyzCEaMdAEObnQOwqK1boOB1tNTj3uBXV6+Ai+Pt3k2MRWWqRGGifZ5Thh96uWzQ/DwYvS4MU3Jkde1+IXZL21IEiowVvpPoQSGwlo2czmsgY/TUk2SRuGGKxvl6KthSGH1S9eeluPfM7ZmVqZunwEbmny/71m/FxglTv2g5ZdNQs2n15X5CFw1gXBmcVygp3OKFk8MQP952+Hc8ep8+2pl+8qgRkxicWmiJKb7d36B5mMlzXLbUun/Va6YgUdN1IJKpjMZ5Mpa9eJr9qqw1nWqKu2z2+wUERZiwvmydpDW3ZSNhA00THfb0NQsH8xSs8n3PeH1E7O8QkL+ogSeuZbwND06p5WeNByiYFkhSJ/L2ytWoUrpJMgOyH8fS+BsfII+fYu+ypkxXd0WYDzrfCGjlJiFRbm5+cTh1vccY71Y6bZhWOjgrd0eV0x84xRTas0W3rCA2hUP7125W2a9X9/Z6BgUq9e9rbWZUzd+E85Z5DIGBytyK30BixwAaQHaXpKezt9g3dFSpzXjIvDiYxwKWnT7QbcXn/ATD0XxfA5qFR2EMn4nC0GZJJphXIhKCKyhQI8E+TmNfA5bAsdEvosrfNdzJJxeIf95zocBS28/lEGQOnLZmvQkdVLW3G6f/8CrYR+qcAAwC0wiFWD6ebGgAAAABJRU5ErkJggg=="
  },
  {
    country_id: 66,
    country_code: "EH",
    country_name: "Western Sahara",
    currency_default: "NUL",
    calling_code: 212,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNTkyRjRDRjE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNTkyRjREMDE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM1OTJGNENEMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM1OTJGNENFMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+f+9yRAAAAhJJREFUeNrElEFIlEEYht8Z/zWyRNiU2EoQIqJdyUjEkxcDD1qEBHaIwFMRRGQH9RIR1LFA8Fi0bODFi4fyWLGnCJMWkgo2aFeWbNEOq8uu/us/vaNjsLm7/cbu3wfPDDMM837zzseHMUDhf5DjMEvavBZ+wyFDvpLzHgpLyXGB+MgUeQhvQutuiX4nCTJKXpBWL4R11JE8mSc95DW5WEvhBmB1ZyFMAp9IPQlrB6RUDFQbWSoby1ifJLeVEpnBQQdra07FgonHFSIR98VVzgr9cpssMbuFmRn53u+XmelpYYwpIheNio/d3cLu6hJIpUqe+RP5t7/Qz9ynk7BtxIaG8KWvD3Y6XXQmMT6OAwMDyCWTeNfRgfTEBJx83l1xuanCTZ1AKgUUCsXJZbPYHwyisLyMnysrWE8kIHy+iveJOYD9A41lD5B1Mx9/9Bgtd0Z2nVl9OYtvw8NoC4dRHzgCq6UZda3H/k3YMf98mDSdPqcOTj1XCAVE2ZtefQDi7H/XLrly0Cq1qY08RAJkMiTw+b5/81koYFW8qffMNi5DRFnaDWahzD+eIBvkbj/wRDfwG6rqDeS3sGNaZ5C8bQJuXQFiZ7lIm5Ymqyts7VjbTI6Sp6eAm1eZiN5Y3Gvt70FYi7abR12/AET6zWLRVFeNQmRp9Xzj9itjndz5URtrdwk/OAl17zKLSpfxEjyLXwIMABpOQfz9h5ChAAAAAElFTkSuQmCC"
  },
  {
    country_id: 235,
    country_code: "WS",
    country_name: "Western Samoa",
    currency_default: "WST",
    calling_code: 685,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQTVCMUQ2MzE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQTVCMUQ2NDE3ODYxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkJBNUIxRDYxMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkJBNUIxRDYyMTc4NjExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mJryLAAAAXxJREFUeNrskEtLAlEUx8+9M97rjOMMGPaGHvQgWkW0MKI27iJo0ap2QVB9ABH8Rm2jhVAQ1CYisIU7kTLsoYk6ckWdmTs5pCVBMCnt/HEWh/v4nT8HBZeiVSzCFw1T1uTwytRV4qmYKwHxgIDABhCIbFRPHy9HjGpZIOACnBe9DItOEcqYybK67ZPW1xawKjPdYCYwkXw+aCZojkDgFuzjZqstVEKrs4eRzfdM4Sh6krlJx2Jbe9vL8FyCruhYhcFVhY4P+p1kVAwEg7fJ7EtOB4X2rB5W4+fJ+FkCVAne9LnQzMXdg/VahiENTKs3tclBpiDgQEDZCC9e32esSg0GlO68zq6B+oGqrfKqYNLy2OhBZKcxOQF18n1FNUb8HJBg2y7V6Hh6t4Fwx4kNCGk+WmZ14E7fziAQy9gvplRu1JDgSl2V5jF0BMHIMrler/sJET2CY2+P5AiniWIg7DK4mGou5AceAAnyv3xwvxAM/0Zf3Vf31X/iQ4ABAIPdhjTlJ084AAAAAElFTkSuQmCC"
  },
  {
    country_id: 237,
    country_code: "YE",
    country_name: "Yemen",
    currency_default: "YER",
    calling_code: 967,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozNTkyRjREMzE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozNTkyRjRENDE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjM1OTJGNEQxMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM1OTJGNEQyMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+ACJHhgAAAE1JREFUeNpifK+t+59hAAATwwCBUYtHLaYZYPz///9HIM0HxPTKVoxA/IkFymBAouli+WjiohtgQUpU9Exc/xnpaOFoyTVq8TC3GCDAAFQ1DF5mtiLSAAAAAElFTkSuQmCC"
  },
  {
    country_id: 238,
    country_code: "YU",
    country_name: "Yugoslavia",
    currency_default: "YUM",
    calling_code: 381,
    flag: null
  },
  {
    country_id: 241,
    country_code: "ZR",
    country_name: "Zaire",
    currency_default: "CDF",
    calling_code: 243,
    flag: null
  },
  {
    country_id: 240,
    country_code: "ZM",
    country_name: "Zambia",
    currency_default: "ZMW",
    calling_code: 260,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAIAAAAVyRqTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MTY2NjI2QzE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MTY2NjI2RDE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxNjY2MjZBMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgxNjY2MjZCMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+b9h8+AAAAXJJREFUeNrslLtKA0EUhr+ZzW7MbYkmMQoqVhZWilrb+Q4i2PgGPoCVlbVoY20r+AQigoKFlWDnhaAYMCYm0d3s7oyzwScYsBEPpzicA9/8/GdmxOQeFiE0sUMgySa4GgWRxFOI4TR00iKDVSQOhZCy4j5H5EGMH9F3CYa8fEAttkV3XGotDhrgc1CimmehzX6JCcFSl/V3jnK2aH/AY4U9wc4rh02KRaI6Kw3q79QLXPmc1RB2Xkvjr+TFZWTA8gfzfTZiyh+cCk5nufYpCFvVWpAIKgmhx8UUlyHVWx7GOZ7B7LQUpSu1RJsbEjnp0kyRj6gKTuZo5Sgq4oBEEtipNpKfS2yfZzdust1R/Rqrrebnkznkjc1Vdte4b/FliTbpMd/MLN5lGVNvStH5TLsw2WJaMx3RE0gbN0gNbeeMqapdVs++0uJnFBqeQ0emKfm1+Ef/o/8i2v57Gjj0PN139ZfUYgSRpP04Q2/44vvwLcAAr1qGyCgX8xUAAAAASUVORK5CYII="
  },
  {
    country_id: 242,
    country_code: "ZW",
    country_name: "Zimbabwe",
    currency_default: "USD",
    calling_code: 263,
    flag: "iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4MTY2NjI3MDE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4MTY2NjI3MTE3OEMxMUUyQTcxNDlDNEFCRkNENzc2NiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjgxNjY2MjZFMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjgxNjY2MjZGMTc4QzExRTJBNzE0OUM0QUJGQ0Q3NzY2Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WOc8GAAAAtBJREFUeNq0lmtIk1EYx/+7b7pJ2LxfKv1QqZVBEERfEsKCyi5ghqldmEk1urAuUBGYSRCChMrQkqAsM8IuokVRUeAFBmVhsVa6OWeba7rNy9bedzudN9KK+ra9f3jOC88D7++c55zzPEfQ2NBkO3xLo5LnAzmZcvjGAAjBuwSEyvCkH2U1xfiwcAC5eSK4RqUIBrkov2Av/aoCowQ7daXo9N1ESRngD8gwNUEjIp7Bs47a6mtwWzU4UU4QvYg6LPzA/wFzau924JV+PTQF75G1gzqmqUU49X+Bpz1vIXZFQ2a2YiAnD/pLB5Dtb0TFMhqMkWEyEIJYEGGwj7EjOJiLQAeBVTeGFY6vYOMTcf7cdbir9uMIQkifp4aZJRAREjlwiA6M8SRC1ssY0gJy0UZk9DykETHajGZ0bivA9o/vsCVVCchk4YOD7nHvtzM6lffuY4jzY5BS6YJEIoK92gnv/QVQSGVIqzwKY3E59BoN/M1XkaoUQiSXh0cmLOud6nxAPsVnEstmEGYwmcz0JRH/SAKx6UCMq5PITPdrMiv90+cEsXFcrsMzLtXcD1lqjrYUMv1SSkx31GS4PZ74ekEmnGdJiPxWi+ENgTohbLB4buXUFEvT4DTYwEg89PqEYDUBCUnZP2/RMLX6Q1qMNdThVBS92rGKsDI9B2bNk2BeuKFcIoGSxNEt8CDoFiImvQhdQ3a0FG7FJkMfipIpNUoRuVPNWkfhHzFBvmoxnQ3tEhIp4BHjYs0jWC5ocRAuZCnn4wvLFTLCT+XiZB4H6uprkWg5Bl0GdagV8DDBiFXP/4I7uj7jWWspCtf1YE0JdQS4veC5VjdfuQdL/y6crmDoYeOW/qs/C/gC03HPcS1u2+uwdx/XkaTwOgV/HD8eHgKm3iGUVO1GX2w3cjYAEw4FmAC/LxFB6402W0VTmcq/1oeVy2X4bheCCAn41g8BBgCi8X7r2R04cwAAAABJRU5ErkJggg=="
  }
], $A = { id: "modal-window-mobile" }, Ai = ["onClick"], ii = { class: "modal-window-mobile__body" }, NA = /* @__PURE__ */ w({
  __name: "ModalWindow",
  emits: ["close"],
  setup(A, { emit: M }) {
    const E = () => {
      M("close");
    };
    F(() => {
      document.addEventListener("keydown", N);
    }), cA(() => {
      document.removeEventListener("keydown", N);
    });
    const N = (G) => {
      G.keyCode === 27 && E();
    };
    return (G, Y) => (e(), y(O, { name: "slide-up" }, {
      default: g(() => [
        i("div", $A, [
          t(AA, null, {
            left: g(() => [
              i("button", {
                type: "button",
                class: "btn btn-header",
                onClick: q(E, ["self"])
              }, null, 8, Ai)
            ]),
            default: g(() => [
              z(G.$slots, "header")
            ]),
            _: 3
          }),
          i("div", ii, [
            z(G.$slots, "default")
          ]),
          t(O, { name: "slide-up" }, {
            default: g(() => [
              G.$slots.footer ? (e(), y(iA, {
                key: 0,
                onClick: E
              }, {
                default: g(() => [
                  z(G.$slots, "footer")
                ]),
                _: 3
              })) : d("", !0)
            ]),
            _: 3
          })
        ])
      ]),
      _: 3
    }));
  }
}), Ni = { class: "form-country__input" }, li = { class: "form-input" }, ei = /* @__PURE__ */ i("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 18 18",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ i("path", {
    d: "M12.5879 11.0881C12.5316 11.0317 12.4552 11 12.3756 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.3756C11 12.4552 11.0317 12.5316 11.0881 12.5879L15.2929 16.7843C15.6835 17.1742 16.3162 17.1738 16.7064 16.7836L16.7836 16.7064C17.1738 16.3162 17.1742 15.6835 16.7843 15.2929L12.5879 11.0881ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z",
    fill: "#424242"
  })
], -1), ci = ["placeholder"], Zi = { class: "form-country__list" }, Ii = ["onClick"], Ri = { class: "form-country__item-text" }, Gi = ["src", "alt"], bi = { key: 0 }, Mi = {
  key: 0,
  width: "18",
  height: "13",
  viewBox: "0 0 18 13",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, Di = /* @__PURE__ */ i("path", {
  d: "M5.99991 10.17L2.53492 6.705C2.14515 6.31524 1.51356 6.31412 1.12242 6.70251C0.729321 7.09284 0.728198 7.72829 1.11992 8.12L5.29281 12.2929C5.68333 12.6834 6.31649 12.6834 6.70702 12.2929L17.2947 1.70517C17.6842 1.31571 17.6842 0.684286 17.2947 0.294834C16.9054 -0.0944891 16.2743 -0.094638 15.8847 0.294501L5.99991 10.17Z",
  fill: "#323C9F"
}, null, -1), di = [
  Di
], Yi = /* @__PURE__ */ w({
  __name: "CountryCode",
  props: {
    countries: null,
    value: null,
    withCountryCode: { type: Boolean },
    t: null
  },
  emits: ["close", "select"],
  setup(A, { emit: M }) {
    const { countries: E, value: N, withCountryCode: G, t: Y } = A, n = S(""), U = W(() => n.value ? E.filter((I) => {
      const c = I.country_name.toLowerCase(), Z = I.calling_code ? I.calling_code.toString() : "";
      return c.includes(n.value) || Z.includes(n.value);
    }) : E);
    return (I, c) => (e(), y(NA, {
      onClose: c[1] || (c[1] = (Z) => M("close"))
    }, {
      header: g(() => [
        k(l(A.t("select_country")), 1)
      ]),
      default: g(() => [
        i("div", Ni, [
          i("div", li, [
            ei,
            V(i("input", {
              type: "text",
              "onUpdate:modelValue": c[0] || (c[0] = (Z) => n.value = Z),
              placeholder: A.t("enter_country_name")
            }, null, 8, ci), [
              [
                _,
                n.value,
                void 0,
                { trim: !0 }
              ]
            ])
          ])
        ]),
        i("div", Zi, [
          (e(!0), b(o, null, B(R(U), (Z) => (e(), b("div", {
            key: Z.country_id
          }, [
            Z.calling_code && Z.flag ? (e(), b("div", {
              key: 0,
              onClick: (J) => M("select", Z),
              class: "form-country__item"
            }, [
              i("div", Ri, [
                i("img", {
                  src: `data:image.png;base64,${Z.flag}`,
                  alt: Z.country_name
                }, null, 8, Gi),
                i("span", null, l(Z.country_name), 1),
                A.withCountryCode ? (e(), b("span", bi, "(+" + l(Z.calling_code) + ")", 1)) : d("", !0)
              ]),
              Z === A.value ? (e(), b("svg", Mi, di)) : d("", !0)
            ], 8, Ii)) : d("", !0)
          ]))), 128))
        ])
      ]),
      _: 1
    }));
  }
}), Ei = { class: "form form-phone" }, ni = {
  key: 0,
  class: "form-phone__code"
}, Ui = { class: "form-input" }, ji = { class: "form-input__title" }, gi = ["src", "alt"], Ji = ["value"], yi = /* @__PURE__ */ i("svg", {
  width: "22",
  height: "7",
  viewBox: "0 0 12 7",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ i("path", {
    d: "M11.2946 0.294581C10.9053 -0.0946914 10.2743 -0.0950353 9.88462 0.293813L6 4.16997L2.11538 0.293812C1.72569 -0.0950355 1.09466 -0.0946913 0.705384 0.294581C0.315811 0.684154 0.315811 1.31578 0.705384 1.70535L5.29289 6.29286C5.68342 6.68338 6.31658 6.68338 6.70711 6.29286L11.2946 1.70535C11.6842 1.31578 11.6842 0.684154 11.2946 0.294581Z",
    fill: "#424242"
  })
], -1), ti = {
  key: 1,
  class: "form-phone__number"
}, wi = { class: "form-input" }, mi = { class: "form-input__title" }, Wi = { class: "form-input__control" }, oi = {
  key: 2,
  class: "form-phone__citizenship"
}, Si = { class: "form-input" }, zi = { class: "form-input__title" }, Bi = ["value"], ki = /* @__PURE__ */ i("svg", {
  width: "22",
  height: "7",
  viewBox: "0 0 12 7",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ i("path", {
    d: "M11.2946 0.294581C10.9053 -0.0946914 10.2743 -0.0950353 9.88462 0.293813L6 4.16997L2.11538 0.293812C1.72569 -0.0950355 1.09466 -0.0946913 0.705384 0.294581C0.315811 0.684154 0.315811 1.31578 0.705384 1.70535L5.29289 6.29286C5.68342 6.68338 6.31658 6.68338 6.70711 6.29286L11.2946 1.70535C11.6842 1.31578 11.6842 0.684154 11.2946 0.294581Z",
    fill: "#424242"
  })
], -1), Q = /* @__PURE__ */ w({
  __name: "FormPhone",
  props: {
    title: null,
    type: null,
    code: null,
    number: null,
    t: null
  },
  emits: ["select-country", "input"],
  setup(A, { emit: M }) {
    const { title: E, type: N, code: G, number: Y, t: n } = A, U = S(), I = (j) => {
      const D = s.find((m) => {
        if (!j)
          return !1;
        const u = m.country_code, T = m.calling_code ? m.calling_code.toString() : "";
        return u.includes(j) || T.includes(j);
      });
      return D === void 0 ? null : D;
    };
    F(() => {
      const j = I(G);
      U.value = j;
    });
    const c = S(!1), Z = W(() => N === "contact"), J = (j) => {
      U.value = j, c.value = !1;
      const D = N === "contact" ? j.calling_code.toString() : j.country_code;
      M("select-country", D);
    };
    return (j, D) => {
      var m, u, T, a;
      return e(), b("div", Ei, [
        A.type === "contact" ? (e(), b("div", ni, [
          i("div", Ui, [
            i("div", ji, l(A.title), 1),
            i("div", {
              class: "form-input__control",
              onClick: D[0] || (D[0] = (v) => c.value = !0)
            }, [
              U.value ? (e(), b("img", {
                key: 0,
                src: `data:image.png;base64,${(m = U.value) == null ? void 0 : m.flag}`,
                alt: (u = U.value) == null ? void 0 : u.country_name
              }, null, 8, gi)) : d("", !0),
              i("input", {
                type: "text",
                value: `+ ${(T = U.value) == null ? void 0 : T.calling_code}`
              }, null, 8, Ji),
              yi
            ])
          ])
        ])) : d("", !0),
        A.type === "contact" ? (e(), b("div", ti, [
          i("div", wi, [
            i("div", mi, l(A.t("phone_number")), 1),
            i("div", Wi, [
              V(i("input", {
                type: "number",
                "onUpdate:modelValue": D[1] || (D[1] = (v) => K(Y) ? Y.value = v : null),
                onInput: D[2] || (D[2] = (v) => {
                  var X;
                  return M("input", (X = A.number) == null ? void 0 : X.toString());
                })
              }, null, 544), [
                [_, A.number]
              ])
            ])
          ])
        ])) : d("", !0),
        A.type !== "contact" ? (e(), b("div", oi, [
          i("div", Si, [
            i("div", zi, l(A.title), 1),
            i("div", {
              class: "form-input__control",
              onClick: D[4] || (D[4] = (v) => c.value = !0)
            }, [
              i("input", {
                type: "text",
                value: (a = U.value) == null ? void 0 : a.country_name,
                onInput: D[3] || (D[3] = (v) => M("input", A.code))
              }, null, 40, Bi),
              ki
            ])
          ])
        ])) : d("", !0),
        c.value ? (e(), y(Yi, {
          key: 3,
          countries: R(s),
          value: U.value,
          "with-country-code": R(Z),
          t: A.t,
          onSelect: J,
          onClose: D[5] || (D[5] = (v) => c.value = !1)
        }, null, 8, ["countries", "value", "with-country-code", "t"])) : d("", !0)
      ]);
    };
  }
}), ui = { class: "form form-dob" }, Ti = { class: "form-input" }, vi = { class: "form-input__title" }, hi = /* @__PURE__ */ ZA('<svg class="calendar" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 18.125C18 19.1602 17.1362 20 16.0714 20H1.92857C0.863839 20 0 19.1602 0 18.125V4.375C0 3.33984 0.863839 2.5 1.92857 2.5H3.85714V0.46875C3.85714 0.210938 4.07411 0 4.33929 0H5.94643C6.21161 0 6.42857 0.210938 6.42857 0.46875V2.5H11.5714V0.46875C11.5714 0.210938 11.7884 0 12.0536 0H13.6607C13.9259 0 14.1429 0.210938 14.1429 0.46875V2.5H16.0714C17.1362 2.5 18 3.33984 18 4.375V18.125ZM4.33908 11.25H5.94622C6.2114 11.25 6.42836 11.0391 6.42836 10.7812V9.21875C6.42836 8.96094 6.2114 8.75 5.94622 8.75H4.33908C4.0739 8.75 3.85693 8.96094 3.85693 9.21875V10.7812C3.85693 11.0391 4.0739 11.25 4.33908 11.25ZM10.2858 9.21875V10.7812C10.2858 11.0391 10.0688 11.25 9.80364 11.25H8.1965C7.93132 11.25 7.71436 11.0391 7.71436 10.7812V9.21875C7.71436 8.96094 7.93132 8.75 8.1965 8.75H9.80364C10.0688 8.75 10.2858 8.96094 10.2858 9.21875ZM14.1427 10.7812V9.21875C14.1427 8.96094 13.9258 8.75 13.6606 8.75H12.0534C11.7883 8.75 11.5713 8.96094 11.5713 9.21875V10.7812C11.5713 11.0391 11.7883 11.25 12.0534 11.25H13.6606C13.9258 11.25 14.1427 11.0391 14.1427 10.7812ZM10.2858 12.9687V14.5312C10.2858 14.7891 10.0688 15 9.80364 15H8.1965C7.93132 15 7.71436 14.7891 7.71436 14.5312V12.9687C7.71436 12.7109 7.93132 12.5 8.1965 12.5H9.80364C10.0688 12.5 10.2858 12.7109 10.2858 12.9687ZM6.42836 14.5312V12.9687C6.42836 12.7109 6.2114 12.5 5.94622 12.5H4.33908C4.0739 12.5 3.85693 12.7109 3.85693 12.9687V14.5312C3.85693 14.7891 4.0739 15 4.33908 15H5.94622C6.2114 15 6.42836 14.7891 6.42836 14.5312ZM14.1427 12.9687V14.5312C14.1427 14.7891 13.9258 15 13.6606 15H12.0534C11.7883 15 11.5713 14.7891 11.5713 14.5312V12.9687C11.5713 12.7109 11.7883 12.5 12.0534 12.5H13.6606C13.9258 12.5 14.1427 12.7109 14.1427 12.9687ZM16.0716 6.25V17.8906C16.0716 18.0195 15.9631 18.125 15.8305 18.125H2.16978C2.03719 18.125 1.92871 18.0195 1.92871 17.8906V6.25H16.0716Z" fill="#424242"></path></svg><input type="text" value="12 April 1996"><svg width="22" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.2946 0.294581C10.9053 -0.0946914 10.2743 -0.0950353 9.88462 0.293813L6 4.16997L2.11538 0.293812C1.72569 -0.0950355 1.09466 -0.0946913 0.705384 0.294581C0.315811 0.684154 0.315811 1.31578 0.705384 1.70535L5.29289 6.29286C5.68342 6.68338 6.31658 6.68338 6.70711 6.29286L11.2946 1.70535C11.6842 1.31578 11.6842 0.684154 11.2946 0.294581Z" fill="#424242"></path></svg>', 3), ai = [
  hi
], pi = {
  key: 0,
  class: "form__error"
}, Fi = {
  key: 1,
  class: "form__info"
}, p = /* @__PURE__ */ w({
  __name: "FormDate",
  props: {
    title: null,
    value: null,
    error: null,
    info: null
  },
  emits: ["input"],
  setup(A, { emit: M }) {
    const E = S(!1);
    return (N, G) => (e(), b("div", ui, [
      i("div", Ti, [
        i("div", vi, l(A.title), 1),
        i("div", {
          class: "form-input__control",
          onClick: G[0] || (G[0] = (Y) => E.value = !0)
        }, ai)
      ]),
      A.error ? (e(), b("div", pi, l(A.error), 1)) : d("", !0),
      A.info ? (e(), b("div", Fi, l(A.info), 1)) : d("", !0)
    ]));
  }
}), Qi = { id: "passenger-form" }, Li = /* @__PURE__ */ w({
  __name: "passenger-form",
  props: {
    type: null,
    passenger: null,
    t: null
  },
  setup(A) {
    const { type: M, passenger: E, t: N } = A, G = W(() => ({
      contact: N("customer_data"),
      adult: `${N("passenger_data")} - ${N("adult")}`,
      child: `${N("passenger_data")} - ${N("child")}`,
      infant: `${N("passenger_data")} - ${N("infant")}`
    })[M]), Y = W(() => {
      const I = [
        { value: "mr", label: N("mr") },
        { value: "mrs", label: N("mrs") },
        { value: "ms", label: N("ms") }
      ], c = [
        { value: "mr", label: N("mr") },
        { value: "ms", label: N("ms") }
      ];
      return {
        contact: I,
        adult: I,
        child: c,
        infant: c
      }[M];
    }), n = W(() => [
      { value: "NIK", label: N("nik") },
      { value: "Passport", label: N("passport") }
    ]), U = W(() => ({
      NIK: N("identity_number"),
      Passport: N("passport_number")
    })[E.idType]);
    return (I, c) => (e(), b("div", Qi, [
      i("h3", null, l(R(G)), 1),
      t(H, {
        title: A.t("title"),
        value: A.passenger.title,
        options: R(Y),
        t: A.t,
        onInput: c[0] || (c[0] = (Z) => A.passenger.title = Z)
      }, null, 8, ["title", "value", "options", "t"]),
      t(h, {
        type: "text",
        title: A.t("first_name"),
        value: A.passenger.firstName,
        onInput: c[1] || (c[1] = (Z) => A.passenger.firstName = Z)
      }, {
        info: g(() => [
          t(P, {
            type: "Name",
            t: A.t
          }, null, 8, ["t"])
        ]),
        _: 1
      }, 8, ["title", "value"]),
      t(h, {
        type: "text",
        title: A.t("middle_name"),
        value: A.passenger.middleName,
        onInput: c[2] || (c[2] = (Z) => A.passenger.middleName = Z)
      }, null, 8, ["title", "value"]),
      t(h, {
        type: "text",
        title: A.t("last_name"),
        value: A.passenger.lastName,
        onInput: c[3] || (c[3] = (Z) => A.passenger.lastName = Z)
      }, null, 8, ["title", "value"]),
      A.type === "contact" ? (e(), y(h, {
        key: 0,
        type: "email",
        title: A.t("email"),
        value: A.passenger.email,
        onInput: c[4] || (c[4] = (Z) => A.passenger.email = Z)
      }, null, 8, ["title", "value"])) : d("", !0),
      A.type === "contact" ? (e(), y(Q, {
        key: 1,
        title: A.t("country_code"),
        type: A.type,
        code: A.passenger.phoneCode,
        number: A.passenger.phoneNumber,
        t: A.t,
        onInput: c[5] || (c[5] = (Z) => A.passenger.phoneNumber = Z),
        onSelectCountry: c[6] || (c[6] = (Z) => A.passenger.phoneCode = Z)
      }, null, 8, ["title", "type", "code", "number", "t"])) : d("", !0),
      A.type !== "contact" ? (e(), y(Q, {
        key: 2,
        title: A.t("citizenship"),
        type: A.type,
        code: A.passenger.nationality,
        t: A.t,
        onSelectCountry: c[7] || (c[7] = (Z) => A.passenger.nationality = Z)
      }, null, 8, ["title", "type", "code", "t"])) : d("", !0),
      A.type === "adult" ? (e(), y(p, {
        key: 3,
        title: A.t("date_of_birth"),
        value: A.passenger.dob,
        onInput: c[8] || (c[8] = (Z) => A.passenger.phoneCode = Z)
      }, null, 8, ["title", "value"])) : d("", !0),
      A.type === "child" ? (e(), y(p, {
        key: 4,
        title: A.t("date_of_birth"),
        value: A.passenger.dob,
        info: A.t("passenger_child_info"),
        onInput: c[9] || (c[9] = (Z) => A.passenger.phoneCode = Z)
      }, null, 8, ["title", "value", "info"])) : d("", !0),
      A.type === "infant" ? (e(), y(p, {
        key: 5,
        title: A.t("date_of_birth"),
        value: A.passenger.dob,
        info: A.t("passenger_infant_info"),
        onInput: c[10] || (c[10] = (Z) => A.passenger.phoneCode = Z)
      }, null, 8, ["title", "value", "info"])) : d("", !0),
      A.type !== "contact" ? (e(), y(H, {
        key: 6,
        title: A.t("indentity_type"),
        value: A.passenger.idType,
        options: R(n),
        t: A.t,
        onInput: c[11] || (c[11] = (Z) => A.passenger.idType = Z)
      }, null, 8, ["title", "value", "options", "t"])) : d("", !0),
      A.passenger.idType === "NIK" ? (e(), y(h, {
        key: 7,
        type: "number",
        title: R(U),
        value: A.passenger.idNo,
        info: A.t("identity_number_child")
      }, null, 8, ["title", "value", "info"])) : d("", !0),
      A.passenger.idType === "Passport" ? (e(), y(h, {
        key: 8,
        type: "number",
        title: R(U),
        value: A.passenger.idNo
      }, {
        info: g(() => [
          t(P, {
            type: "Passport",
            t: A.t
          }, null, 8, ["t"])
        ]),
        _: 1
      }, 8, ["title", "value"])) : d("", !0),
      A.passenger.idType === "Passport" ? (e(), y(p, {
        key: 9,
        title: A.t("passport_expiration_date"),
        value: A.passenger.idExpiry,
        info: A.t("passport_expiration_info"),
        onInput: c[12] || (c[12] = (Z) => A.passenger.idExpiry = Z)
      }, null, 8, ["title", "value", "info"])) : d("", !0),
      A.passenger.idType === "Passport" ? (e(), y(Q, {
        key: 10,
        title: A.t("passport_issuing_country"),
        type: A.type,
        code: A.passenger.idOrigin,
        t: A.t,
        onSelectCountry: c[13] || (c[13] = (Z) => A.passenger.idOrigin = Z)
      }, null, 8, ["title", "type", "code", "t"])) : d("", !0)
    ]));
  }
}), Vi = { class: "booking-detail__passenger" }, Xi = /* @__PURE__ */ i("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ i("path", {
    d: "M13.8 4.66667C14.0667 4.4 14.0667 4 13.8 3.73333L12.2667 2.2C12.1333 2.06667 11.9333 2 11.8 2C11.6667 2 11.4 2.06667 11.3333 2.2L10.1333 3.4L12.6 5.93333L13.8 4.66667Z",
    fill: "#323C9F"
  }),
  /* @__PURE__ */ i("path", {
    d: "M2 11.4667V14H4.53333L11.8667 6.6L9.4 4.13333L2 11.4667Z",
    fill: "#323C9F"
  })
], -1), Oi = { class: "btn btn-primary" }, f = /* @__PURE__ */ w({
  __name: "booking-detail-passenger-mobile",
  props: {
    type: null,
    passenger: null,
    placeholder: null,
    t: null
  },
  setup(A) {
    const M = S(!1);
    return (E, N) => (e(), b("div", Vi, [
      i("div", {
        class: "booking-detail__passenger-empty",
        onClick: N[0] || (N[0] = (G) => M.value = !0)
      }, [
        Xi,
        k(" " + l(A.placeholder), 1)
      ]),
      t($, {
        show: M.value,
        "onUpdate:show": N[2] || (N[2] = (G) => M.value = G),
        onClose: N[3] || (N[3] = (G) => M.value = !1)
      }, {
        footer: g(() => [
          i("button", {
            class: "btn btn-primary-outline",
            onClick: N[1] || (N[1] = (G) => M.value = !1)
          }, l(A.t("cancel")), 1),
          i("button", Oi, l(A.t("save")), 1)
        ]),
        default: g(() => [
          t(Li, {
            type: A.type,
            passenger: A.passenger,
            t: A.t
          }, null, 8, ["type", "passenger", "t"])
        ]),
        _: 1
      }, 8, ["show"])
    ]));
  }
}), xi = { id: "mobile-banner-login" }, ri = { class: "mobile-banner-login__text" }, Ci = /* @__PURE__ */ w({
  __name: "mobile-banner-login",
  props: {
    t: null
  },
  setup(A) {
    const M = () => {
    };
    return (E, N) => (e(), b("div", xi, [
      i("div", ri, l(A.t("want_to_save")), 1),
      i("button", {
        class: "mobile-banner-login__button",
        onClick: M
      }, l(A.t("login ")), 1)
    ]));
  }
}), Hi = {
  en: {
    booking_details: "Booking Details",
    traveler_details: "Traveler Details",
    transit_in: "{time} transit in {place} ({code})",
    price_departure: "Depature Price",
    price_return: "Return Price",
    next: "Next",
    want_to_save: "Want to save even more? Don't forget to log in.",
    login: "Login",
    passenger_info: "Attention: the passenger's name must be the same as the passport (international flights), or KTP/SIM (domestic flights). Passenger data cannot be changed after this page.",
    enter_details: "Enter details",
    direct: "Direct",
    transit: "{total}x Transit",
    departure: "Departure",
    return: "Return",
    see_detail: "See Detail",
    failed_to_order: "Order could not be processed Sorry! There was a problem in processing your order. Please select an airline or other available date.",
    let_continue: "Continue",
    continue: "Continue",
    check_again: "Check Again",
    close: "Close",
    order_process_title: "Whoos, don't go anywhere!",
    order_process_text: "Your order is being processed. I promise, it won't be long. Just a few minutes, really.",
    order_confirmation_text: "Make sure your data is correct before continuing",
    customer_data: "Customer Data",
    passenger_data: "Passenger Data",
    adult: "Adult",
    child: "Child",
    infant: "Infant",
    mr: "Mr.",
    mrs: "Mrs.",
    ms: "Ms.",
    mstr: "Mstr.",
    save: "Save",
    cancel: "Cancel",
    name_instruction_title: "Name Writing Instructions",
    name_instruction_desc: '<ul> <li> <b>For Indonesian Citizens</b>, name and NIK must be the same as registered. For foreigners, use the name and number listed on the passport. <b>For foreigners</b>, use the name and number listed on the passport. </li> <li> If you do not have a "middle name" <b>(example: Ari Wibowo)</b>, leave the middle name blank and only fill in the first name <b>(example: Ari)</b> and last name <b>(example: Wibowo)</b> </li> <li> If you only have one name <b>(example: Kartini)</b>, please leave middle name blank and fill last name with first name <b>(example: Kartini Kartini)</b>. </li> </ul>',
    understand: "Understand",
    passport_info: "Hubungi Personal Assistant jika kamu belum memiliki paspor",
    title: "Title",
    first_name: "First Name",
    middle_name: "Middle Name",
    last_name: "Last Name",
    email: "Email",
    country_code: "Country Code",
    phone_number: "Phone Number",
    citizenship: "Citizenship",
    date_of_birth: "Date of birth",
    indentity_type: "Identity Type",
    nik: "NIK",
    passport: "Passport",
    identity_number: "Identity Number",
    passport_number: "Passport Number",
    passport_expiration_date: "Expiration Date",
    passport_expiration_info: "Important: passport valid for at least 6 months from the date of arrival at the destination.",
    passport_issuing_country: "Issuing Country",
    passenger_child_info: "Child Passengers (2 - 12 years old)",
    passenger_infant_info: "Infant Passengers (< 2 years)",
    identity_number_child: "For child and infant passengers, enter the number shown on the Family Card.",
    select_country: "Select Country",
    enter_country_name: "Enter Country Name"
  },
  id: {
    booking_details: "Detail Pemesanan",
    traveler_details: "Detail Penumpang",
    transit_in: "Transit {time} di {place} ({code})",
    price_departure: "Harga Keberangkatan",
    price_return: "Harga Kepulangan",
    next: "Selanjutnya",
    want_to_save: "Mau lebih hemat? Jangan lupa log in, ya.",
    login: "Login",
    passenger_info: "Perhatian: nama penumpang harus sama dengan paspor (penerbangan internasional), atau KTP/SIM (penerbangan domestik). Data penumpang tidak dapat diubah setelah halaman ini.",
    enter_details: "Isi detail",
    direct: "Langsung",
    transit: "{total}x Transit",
    departure: "Keberangkatan",
    return: "Kepulangan",
    see_detail: "Lihat Detail",
    failed_to_order: "Pemesanan tidak dapat diproses Mohon maaf! Ada kendala dalam pemrosesan pemesanan kamu. Silakan pilih maskapai atau tanggal lainnya yang tersedia.",
    let_continue: "Lanjutkan",
    continue: "Lanjut",
    check_again: "Cek Lagi",
    close: "Tutup",
    order_process_title: "Eits, jangan kemana-mana!",
    order_process_text: "Pemesanan kamu sedang diproses. Janji, deh, gak akan lama. Cuma beberapa menit aja, kok.",
    order_confirmation_text: "Pastikan data kamu sudah benar sebelum melanjutkan",
    customer_data: "Data Pemesan",
    passenger_data: "Data Penumpang",
    adult: "Dewasa",
    child: "Anak",
    infant: "Bayi",
    mr: "Tuan",
    mrs: "Nyonya",
    ms: "Nona",
    mstr: "Tuan",
    save: "Simpan",
    cancel: "Batal",
    name_instruction_title: "Instruksi Penulisan Nama",
    name_instruction_desc: '<ul> <li> <b>Untuk WNI</b>, nama dan NIK harus sama dengan yang terdaftar. Untuk WNA, gunakan nama dan nomor yang tercantum di paspor. <b>Untuk WNA</b>, gunakan nama dan nomor vang tercantum di paspor. </li> <li> Jika kamu tidak memiliki "nama tengah" <b>(contoh: Ari Wibowo)</b>, kosongkan bagian nama tengah dan hanya isi nama depan <b>(contoh: Ari)</b> dan nama akhir <b>(contoh: Wibowo)</b> </li> <li> Jika kamu hanya memiliki satu nama <b>(contoh: Kartini)</b>, harap kosongkan nama tengah dan mengisi nama belakang dengan nama depan <b>(contoh: Kartini Kartini)</b>. </li> </ul>',
    understand: "Mengerti",
    passport_info: "Contact the Personal Assistant if you don't have a passport yet",
    title: "Title",
    first_name: "Nama Depan",
    middle_name: "Nama Tengah",
    last_name: "Nama Belakang",
    email: "Email",
    country_code: "Kode Negara",
    phone_number: "Nomor Telepon",
    citizenship: "Kewarganegaraan",
    date_of_birth: "Tanggal Lahir",
    indentity_type: "Identity Type",
    nik: "NIK",
    passport: "Passpor",
    identity_number: "No. Identitas",
    passport_number: "No. Paspor",
    passport_expiration_date: "Tanggal Habis Berlaku",
    passport_expiration_info: "Penting: paspor berlaku minimal 6 bulan dari tanggal kedatangan di destinasi tujuan.",
    passport_issuing_country: "Negara yang Mengeluarkan",
    passenger_child_info: "Penumpang Anak (2 - 12 tahun)",
    passenger_infant_info: "Penumpang Bayi (< 2 tahun)",
    identity_number_child: "Untuk penumpang anak dan bayi, masukkan nomor yang tertera di Kartu Keluarga.",
    select_country: "Pilih Negara",
    enter_country_name: "Ketik Nama Negara"
  }
}, Pi = "/modal-detail/estimat.svg", si = "/modal-detail/luggage.svg", fi = { class: "flight-detail" }, Ki = {
  key: 0,
  class: "title"
}, qi = {
  key: 1,
  class: "transit"
}, _i = { class: "airlines" }, $i = { class: "img-airline" }, AN = ["src"], iN = { class: "name-airline" }, NN = { class: "schedule" }, lN = /* @__PURE__ */ i("div", { class: "icon" }, [
  /* @__PURE__ */ i("img", { src: Pi })
], -1), eN = { class: "time-airport" }, cN = { class: "takeoff" }, ZN = { class: "time-date" }, IN = { class: "time" }, RN = { class: "date" }, GN = { class: "airport" }, bN = { class: "city" }, MN = { class: "place" }, DN = { class: "estimation" }, dN = { class: "landing" }, YN = { class: "time-date" }, EN = { class: "time" }, nN = { class: "date" }, UN = { class: "airport" }, jN = { class: "city" }, gN = { class: "place" }, JN = { class: "luggage" }, yN = /* @__PURE__ */ i("div", { class: "icon" }, [
  /* @__PURE__ */ i("img", { src: si })
], -1), tN = { class: "capacity" }, wN = { class: "price__title" }, mN = { class: "price__content" }, WN = { class: "total" }, oN = /* @__PURE__ */ i("div", { class: "total__title" }, "Total", -1), SN = { class: "total__price" }, zN = /* @__PURE__ */ w({
  __name: "booking-detail-flight-detail-mobile",
  props: {
    flightSegments: null,
    t: null
  },
  setup(A) {
    const { flightSegments: M, t: E } = A, N = W(() => {
      const [G, Y] = M;
      return Y ? G.FareDetail.Total + Y.FareDetail.Total : G.FareDetail.Total;
    });
    return (G, Y) => (e(), b("div", fi, [
      (e(!0), b(o, null, B(A.flightSegments, (n, U) => (e(), b("div", {
        key: `flight-${U}`,
        class: "border-bottom"
      }, [
        (e(!0), b(o, null, B(n.Segments.Departure, (I, c) => (e(), b("section", {
          key: `segment-${c}`,
          class: "departure"
        }, [
          c === 0 ? (e(), b("div", Ki, l(U === 0 ? A.t("departure") : A.t("return")), 1)) : d("", !0),
          c !== 0 ? (e(), b("div", qi, l(A.t("transit_in", {
            time: I.TransitTime,
            place: I.OriginCityName,
            code: I.Origin
          })), 1)) : d("", !0),
          i("div", _i, [
            i("div", $i, [
              i("img", {
                src: I.AirlineImageUrl
              }, null, 8, AN)
            ]),
            i("div", iN, [
              i("div", null, l(I.AirlineName), 1),
              i("span", null, l(I.ClassCategory) + " (Subclass " + l(I.ClassCode) + ") ", 1)
            ])
          ]),
          i("div", NN, [
            lN,
            i("div", eN, [
              i("div", cN, [
                i("div", ZN, [
                  i("div", IN, l(I.DepartTime), 1),
                  i("div", RN, l(R(L)(I.DepartDate)), 1)
                ]),
                i("div", GN, [
                  i("div", bN, l(I.OriginCityName) + " (" + l(I.Origin) + ") ", 1),
                  i("span", MN, l(I.OriginName), 1)
                ])
              ]),
              i("div", DN, l(I.FlightTime), 1),
              i("div", dN, [
                i("div", YN, [
                  i("div", EN, l(I.ArriveTime), 1),
                  i("div", nN, l(R(L)(I.ArriveDate)), 1)
                ]),
                i("div", UN, [
                  i("div", jN, l(I.DestinationCityName) + " (" + l(I.Destination) + ") ", 1),
                  i("span", gN, l(I.DestinationName), 1)
                ])
              ])
            ])
          ]),
          i("div", JN, [
            yN,
            i("div", tN, l(I.BaggageWording), 1)
          ])
        ]))), 128))
      ]))), 128)),
      (e(!0), b(o, null, B(A.flightSegments, (n, U) => (e(), b("section", {
        key: `flight-${U}`,
        class: "price border-bottom"
      }, [
        i("div", wN, l(U === 0 ? A.t("price_departure") : A.t("price_return")), 1),
        (e(!0), b(o, null, B(n.FareDetail.Details, (I, c) => (e(), b("div", mN, [
          i("div", null, l(I.Text), 1),
          i("div", null, l(R(r)(I.ForeignAmount)), 1)
        ]))), 256))
      ]))), 128)),
      i("section", WN, [
        oN,
        i("div", SN, l(R(r)(R(N))), 1)
      ])
    ]));
  }
}), BN = { id: "booking-detail-mobile" }, kN = { class: "booking-detail__contact" }, uN = { class: "booking-detail__traveler pt-0" }, TN = { class: "booking-detail__info" }, vN = /* @__PURE__ */ w({
  __name: "booking-detail-mobile.ce",
  props: {
    data: {
      type: String,
      required: !0
    }
  },
  setup(A) {
    const M = A, E = S(!1), { t: N } = GA({
      messages: Hi
    }), G = x(M.data ? JSON.parse(M.data) : null), Y = W(() => {
      const J = G.segment1 ? JSON.parse(G.segment1) : null, j = G.segment2 ? JSON.parse(G.segment2) : null;
      return [J, j];
    }), n = x({
      contact: {
        title: "mr",
        firstName: "",
        middleName: "",
        lastName: "",
        phoneCode: "62",
        phoneNumber: "",
        email: ""
      },
      passengers: {
        adult: [],
        child: [],
        infant: []
      }
    }), U = (J) => ({
      title: {
        adult: "mr",
        child: "mstr",
        infant: "mstr"
      }[J],
      firstName: "",
      middleName: "",
      lastName: "",
      nationality: "ID",
      dob: "",
      idType: "NIK",
      idNo: "",
      idExpiry: "",
      idOrigin: "ID"
    }), I = () => [
      ...Array.from(Array(+G.adult), () => "adult"),
      ...Array.from(Array(+G.child), () => "child"),
      ...Array.from(Array(+G.infant), () => "infant")
    ], c = () => {
      const J = I(), j = {
        adult: [],
        child: [],
        infant: []
      };
      J.forEach((D) => {
        j[D].push(U(D));
      }), n.passengers = j;
    };
    F(() => {
      c();
    });
    const Z = () => {
      console.log("passenger: ", n);
    };
    return (J, j) => (e(), b("div", BN, [
      t(AA, null, {
        default: g(() => [
          k(l(R(N)("booking_details")), 1)
        ]),
        _: 1
      }),
      t(C, {
        title: R(N)("departure"),
        segment: R(Y)[0],
        t: R(N),
        "has-detail-button": !0,
        onShowDetail: j[0] || (j[0] = (D) => E.value = !0)
      }, null, 8, ["title", "segment", "t"]),
      t(C, {
        class: "pt-0",
        title: R(N)("return"),
        segment: R(Y)[1],
        t: R(N),
        "has-detail-button": !1
      }, null, 8, ["title", "segment", "t"]),
      t(Ci, { t: R(N) }, null, 8, ["t"]),
      i("section", kN, [
        i("h2", null, l(R(N)("booking_details")), 1),
        t(f, {
          type: "contact",
          passenger: n.contact,
          placeholder: R(N)("enter_details"),
          t: R(N)
        }, null, 8, ["passenger", "placeholder", "t"])
      ]),
      i("section", uN, [
        i("h2", null, l(R(N)("traveler_details")), 1),
        (e(!0), b(o, null, B(n.passengers, (D, m, u) => (e(), b("div", { key: u }, [
          (e(!0), b(o, null, B(D, (T, a) => (e(), y(f, {
            key: a,
            type: m,
            passenger: T,
            placeholder: R(N)("enter_details"),
            t: R(N)
          }, null, 8, ["type", "passenger", "placeholder", "t"]))), 128))
        ]))), 128))
      ]),
      i("section", TN, [
        i("p", null, l(R(N)("passenger_info")), 1)
      ]),
      t(iA, { onNext: Z }, {
        default: g(() => [
          k(l(R(N)("next")), 1)
        ]),
        _: 1
      }),
      E.value ? (e(), y(NA, {
        key: 0,
        onClose: j[1] || (j[1] = (D) => E.value = !1)
      }, {
        header: g(() => [
          k(l(R(N)("booking_details")), 1)
        ]),
        footer: g(() => [
          k(l(R(N)("close")), 1)
        ]),
        default: g(() => [
          t(zN, {
            "flight-segments": R(Y),
            t: R(N)
          }, null, 8, ["flight-segments", "t"])
        ]),
        _: 1
      })) : d("", !0)
    ]));
  }
}), hN = `@charset "UTF-8";:root{--el-color-primary: $primary-1}.form{margin-bottom:1rem}.form__error{margin-top:4px;color:#c62828;font-weight:500;font-size:10px}.form__info{margin-top:1rem;color:#9e9e9e;font-size:10px;font-weight:500}.form .form-input{border-bottom:2px solid #657085}.form .form-input .form-input__title{color:#657085}.form .form-input .form-input__control{display:flex;justify-content:space-between;align-items:center;margin-right:5px}.form .form-input input{border:none;font-size:16px;padding:6px 0;outline:none;width:100%}.form .form-select .form-select__title{padding:1rem 0;font-size:.875rem;font-weight:600}.form .form-select .form-select__item{display:flex;justify-content:space-between;padding:1rem 0;border-bottom:1px solid #C5CAD3;font-size:.875rem;font-weight:600;color:#2f4095}.form .form-select .form-select__item:last-child{border:none;padding-bottom:0}.form .form-info__description{margin:1rem 0;text-align:left}.form .form-info__description ul{padding-inline-start:1rem}.form .form-info__description ul li{margin-bottom:.5rem}.form.form-phone{display:flex;gap:1rem}.form.form-phone .form-phone__code{width:35%}.form.form-phone .form-phone__number{width:65%}.form.form-phone .form-input__control img{margin-right:1rem}.form.form-phone .form-phone__citizenship{width:100%!important}.form .form-country__input{padding:1rem;border:1px solid #C5CAD3}.form .form-country__input .form-input{display:flex;align-items:center;padding:0 .75rem;background:#DFE2E7;border-radius:8px}.form .form-country__input .form-input svg{margin-right:1rem}.form .form-country__input .form-input input{background:#DFE2E7;height:45px}.form .form-country__list .form-country__item{display:flex;justify-content:space-between;padding:1rem;border-bottom:1px solid #C5CAD3}.form .form-country__list .form-country__item-text{display:flex;align-items:center;gap:1rem}.form.form-dob .form-input__control .calendar{margin-right:.5rem}#mobile-header{position:relative;display:flex;justify-content:space-between;align-items:center;height:56px;width:100%;background:#2F4095;color:#fff}#mobile-header>div{display:flex;align-items:center;justify-content:center;height:100%;width:100%;text-align:center;font-size:1.25rem}#mobile-header .header-left{position:absolute;width:4rem;z-index:3}#mobile-header .header-middle{width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:1.125rem;font-weight:500}#mobile-header .header-middle h1{margin-bottom:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:1.25rem;line-height:56px}#mobile-header .btn-header{min-width:0;height:100%;width:100%;padding:1rem;background-color:transparent;border:none;cursor:pointer}#mobile-footer{z-index:900;position:fixed;right:0;bottom:0;left:0;padding:1rem;background:#fefefe;border-top:1px solid #e0e0e0}#mobile-footer button{margin:auto;padding:.75rem 0;width:100%;min-width:calc(50% - .75rem);background-color:#dd2c00;color:#fefefe;border:none;border-radius:4px;font-size:.875rem;font-weight:600;text-transform:uppercase;cursor:pointer}#mobile-banner-login{padding:1.25rem 1rem;display:flex;justify-content:space-between;align-items:center;background-color:#eef5ff}#mobile-banner-login .mobile-banner-login__text{font-weight:500;font-size:12px;line-height:16px}#mobile-banner-login .mobile-banner-login__button{background:#26a69a;border:1px solid #26a69a;border-radius:4px;color:#fefefe;padding:.5rem 1rem;text-transform:uppercase;font-weight:500}#modal-window-mobile{position:fixed;height:100vh;width:100vw;top:0;left:0;background-color:#fefefe;z-index:1200}#modal-window-mobile .modal-window-mobile__body{height:calc(100vh - 56px);overflow-y:auto}.modal-peek-mobile__wrapper{width:100%;height:auto;overflow-y:auto;border-radius:.5rem .5rem 0 0;background-color:#fff}.modal-peek-mobile__body{padding:1rem 1.5rem}.modal-peek-mobile__footer{padding:16px 24px;gap:24px;position:sticky;bottom:0;display:flex;justify-content:space-between;align-items:center;background-color:#fff;border-top:1px solid #DFE2E7;border-radius:0}.modal-peek-mobile__footer>*{width:100%!important;margin:0}.modal-peek-mobile__footer .btn{gap:24px}#modal-base-mobile{position:fixed;left:0px;top:0px;display:flex;align-content:center;justify-content:center;width:100%;height:100%;z-index:9999;background:rgba(0,0,0,.3)}#modal-base-mobile .modal-base-mobile__body{position:absolute;z-index:1000;overflow:hidden;top:50%;transform:translateY(-50%);vertical-align:bottom;padding:1rem;background:#fefefe;border-radius:.5rem;font-size:.75rem;text-align:center}#modal-base-mobile .modal-base-mobile__image{margin-bottom:1rem;text-align:center}#modal-base-mobile .modal-base-mobile__title{margin-bottom:.5rem;font-weight:600;font-size:16px;line-height:24px;text-align:center;color:#424242}#modal-base-mobile .modal-base-mobile__footer{margin-top:.5rem}.flight-detail section{padding:16px}.flight-detail .border-bottom{border-bottom:1px solid #DFE2E7}.flight-detail .title{font-weight:600;font-size:16px;line-height:24px;color:#424242}.flight-detail .airlines{margin-top:16px;display:grid;grid-template-columns:20% 80%}.flight-detail .airlines .img-airline{align-self:center}.flight-detail .airlines .img-airline img{width:36px;height:24px}.flight-detail .airlines .name-airline div{font-weight:600;font-size:14px;line-height:24px;color:#424242}.flight-detail .airlines .name-airline span{font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e}.flight-detail .schedule{display:grid;grid-template-columns:10% 90%;margin-top:16px}.flight-detail .schedule .time-airport{display:grid;grid-template-columns:repeat(1,1fr);gap:16px}.flight-detail .schedule .time-airport .takeoff{display:grid;grid-template-columns:20% 80%}.flight-detail .schedule .time-airport .takeoff .time-date .time{font-weight:600;font-size:14px;line-height:16px;color:#424242}.flight-detail .schedule .time-airport .takeoff .time-date .date{margin-top:4px;font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e}.flight-detail .schedule .time-airport .takeoff .airport .city{font-weight:600;font-size:14px;line-height:16px;color:#424242}.flight-detail .schedule .time-airport .takeoff .airport .place{font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e}.flight-detail .schedule .time-airport .estimation{font-weight:500;font-size:10px;line-height:16px;color:#9e9e9e}.flight-detail .schedule .time-airport .landing{display:grid;grid-template-columns:20% 80%}.flight-detail .schedule .time-airport .landing .time-date .time{font-weight:600;font-size:14px;line-height:16px;color:#424242}.flight-detail .schedule .time-airport .landing .time-date .date{margin-top:4px;font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e}.flight-detail .schedule .time-airport .landing .airport .city{font-weight:600;font-size:14px;line-height:16px;color:#424242}.flight-detail .schedule .time-airport .landing .airport .place{font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e}.flight-detail .luggage{margin-top:16px;display:flex}.flight-detail .luggage .capacity{margin-left:7px;font-weight:500;font-size:12px;line-height:16px;color:#424242}.flight-detail .transit{margin-top:-16px;text-align:center;background:#eef5ff;border-radius:4px;padding:8px;font-weight:500;font-size:10px;line-height:16px;margin-bottom:16px}.flight-detail .price{padding:16px}.flight-detail .price .price__title{font-weight:600;font-size:16px;line-height:24px;color:#424242}.flight-detail .price .price__content{display:flex;justify-content:space-between;font-weight:500;font-size:12px;line-height:16px;color:#9e9e9e;margin-top:20px}.flight-detail .total{padding:16px;display:flex;justify-content:space-between;margin-bottom:70px}.flight-detail .total .total__title{font-weight:600;font-size:16px;line-height:24px;color:#424242}.flight-detail .total .total__price{font-weight:600;font-size:16px;line-height:24px;color:#dd2c00}#passenger-form h3{margin-bottom:1rem;font-size:1rem;font-weight:600;line-height:24px}.btn{width:100%;padding:.5rem 0;border-radius:4px;font-weight:600;font-size:14px;line-height:24px;text-align:center}.btn-primary{color:#fefefe;background-color:#dd2c00;border:1px solid #dd2c00}.btn-primary-outline{color:#dd2c00;background-color:#fefefe;border:1px solid #dd2c00}.m-0{margin:0!important}.p-0{padding:0!important}.pt-0{padding-top:0!important}section{padding:1rem;font-size:12px}section h2{margin:0 0 .5rem;font-size:1rem;font-weight:600;line-height:24px}section .btn-link{font-weight:600;font-size:12px;color:#323c9f;cursor:pointer}#booking-detail-mobile{margin-bottom:75px}@media (min-width: 769px){#booking-detail-mobile{display:none}}.booking-detail__flight-item .flight-item__title{display:flex;justify-content:space-between}.booking-detail__flight-item .flight-item__info{display:flex;align-items:center;margin-bottom:.875rem}.booking-detail__flight-item .flight-item__info img{height:24px}.booking-detail__flight-item .flight-item__info .flight-item__info-description{margin-left:1rem}.booking-detail__flight-item .flight-item__info .flight-item__info--title{font-weight:600;font-size:14px;line-height:24px;color:#212121}.booking-detail__flight-item .flight-item__info .flight-item__info--subtitle{font-weight:500;color:#9e9e9e}.booking-detail__flight-item .flight-item__route{padding:1rem;background:#fefefe;border:1px solid #e0e0e0;border-radius:8px}.booking-detail__flight-item .flight-item__route .flight-item__route-name{display:flex;align-items:center}.booking-detail__flight-item .flight-item__route .flight-item__route--airport{font-weight:500;line-height:24px;color:#212121}.booking-detail__flight-item .flight-item__route .flight-item__route--arrow{margin:0 .5rem}.booking-detail__flight-item .flight-item__route .flight-item__route-time span{font-weight:500;line-height:16px;color:#9e9e9e}.booking-detail__flight-item .flight-item__route .flight-item__route-time span:not(:last-child):after{content:" \\2219";margin-right:.15rem}.booking-detail__passenger{padding:1rem 0;border-bottom:1px solid #DFE2E7}.booking-detail__passenger .booking-detail__passenger-empty{display:flex;align-items:center;color:#323c9f;font-weight:600;font-size:12px;line-height:24px}.booking-detail__passenger .booking-detail__passenger-empty svg{margin-right:.5rem}.booking-detail__info p{color:#dd2c00;font-weight:500;font-size:10px;line-height:16px}.booking-detail__modal-flight{padding:1rem 1rem 6.25rem;display:flex;flex-direction:column;gap:1.5rem}.title-passanger{text-transform:capitalize}
`, aN = /* @__PURE__ */ bA(vN, [["styles", [hN]]]), pN = IA(aN);
function rN() {
  customElements.define("ma-booking-detail-mobile", pN);
}
export {
  rN as register
};
