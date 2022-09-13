import { defineComponent as h, openBlock as a, createElementBlock as s, normalizeClass as y, renderSlot as d, createCommentVNode as c, toDisplayString as i, createElementVNode as e, Fragment as g, renderList as $, createBlock as k, ref as u, computed as _, unref as f } from "vue";
const Q = (t) => t.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
  currencyDisplay: "code",
  maximumFractionDigits: 0
}), C = {
  key: 0,
  class: "card__header"
}, X = /* @__PURE__ */ h({
  __name: "card",
  props: {
    alternate: { type: Boolean }
  },
  setup(t) {
    return (l, n) => (a(), s("section", {
      class: y(["card", { "card-alternate": t.alternate }])
    }, [
      l.$slots.header ? (a(), s("div", C, [
        d(l.$slots, "header")
      ])) : c("", !0),
      d(l.$slots, "default")
    ], 2));
  }
}), L = { class: "flight-card-item" }, S = {
  key: 0,
  class: "flight-card-item__transit"
}, B = { class: "flight-card-item__header" }, N = ["src", "alt"], w = { class: "flight-card-item__airline-name" }, T = { class: "flight-card-item__airline-class" }, I = { class: "airline-timeline" }, A = { class: "airline-timeline__time" }, O = { class: "airline-timeline__date" }, x = { class: "airline-timeline__city" }, p = { class: "airline-timeline__airport" }, F = { class: "airline-timeline__flight-time" }, V = { class: "airline-timeline__time airline-timeline__time--end" }, E = { class: "airline-timeline__date" }, R = { class: "airline-timeline__city" }, z = { class: "airline-timeline__airport" }, K = /* @__PURE__ */ h({
  __name: "flight-card-item",
  props: {
    flight: null
  },
  setup(t) {
    const l = (n) => new Date(n).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short"
    });
    return (n, m) => (a(), s("div", L, [
      t.flight.TransitTime ? (a(), s("div", S, " Transit " + i(t.flight.TransitTime) + " di " + i(t.flight.OriginCityName) + " (" + i(t.flight.Origin) + ") ", 1)) : c("", !0),
      e("div", B, [
        e("img", {
          src: t.flight.AirlineImageUrl,
          alt: t.flight.AirlineName
        }, null, 8, N),
        e("span", w, i(t.flight.AirlineName), 1),
        e("span", T, i(t.flight.ClassCategory) + " Subclass(" + i(t.flight.ClassCode) + ") ", 1)
      ]),
      e("div", I, [
        e("div", null, [
          e("span", A, i(t.flight.DepartTime), 1),
          e("span", O, i(l(t.flight.DepartDate)), 1)
        ]),
        e("div", null, [
          e("span", x, i(t.flight.OriginCityName) + " (" + i(t.flight.Origin) + ") ", 1),
          e("span", p, i(t.flight.OriginName), 1)
        ]),
        e("span", F, i(t.flight.FlightTime), 1),
        e("div", null, [
          e("span", V, i(t.flight.ArriveTime), 1),
          e("span", E, i(l(t.flight.ArriveDate)), 1)
        ]),
        e("div", null, [
          e("span", R, i(t.flight.DestinationCityName) + " (" + i(t.flight.Destination) + ") ", 1),
          e("span", z, i(t.flight.DestinationName), 1)
        ])
      ])
    ]));
  }
}), M = { class: "flight-card" }, U = { class: "flight-card__heading" }, W = { class: "flight-card__time" }, Y = /* @__PURE__ */ h({
  __name: "flight-card",
  props: {
    segment: null,
    header: null
  },
  setup(t) {
    const l = (n) => new Date(n).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "long"
    });
    return (n, m) => (a(), s(g, null, [
      e("div", M, [
        e("span", U, i(t.header), 1),
        e("small", W, i(l(t.segment.Departure[0].DepartDate)), 1)
      ]),
      (a(!0), s(g, null, $(t.segment.Departure, (o) => (a(), k(K, {
        key: o.SegmentSellKey,
        flight: o
      }, null, 8, ["flight"]))), 128))
    ], 64));
  }
}), j = ["type", "disabled"], q = {
  key: 0,
  class: "btn-icon"
}, G = {
  key: 1,
  ref: "slot",
  class: "btn-text"
}, H = ["variant"], Z = /* @__PURE__ */ h({
  __name: "button",
  props: {
    variant: null,
    outline: { type: Boolean },
    rounded: { type: Boolean },
    expanded: { type: Boolean },
    disabled: { type: Boolean },
    isLoading: { type: Boolean },
    type: null
  },
  emits: ["click"],
  setup(t, { emit: l }) {
    const n = t, m = u(!0), o = u(!1), D = _(() => [
      "btn",
      {
        "btn-outline": n.outline,
        "btn-rounded": n.rounded,
        "btn-fullwidth": n.expanded,
        "btn-icon": o,
        loading: n.isLoading != null && n.isLoading,
        btn_warning: n.variant === "warning"
      }
    ]), v = _(
      () => n.outline ? "primary" : "secondary"
    ), b = (r) => {
      l("click", r);
    };
    return (r, J) => (a(), s("button", {
      type: t.type,
      class: y(f(D)),
      disabled: t.disabled || t.isLoading,
      onClick: b
    }, [
      o.value && !t.isLoading ? (a(), s("span", q, [
        d(r.$slots, "icon")
      ])) : c("", !0),
      m.value && !t.isLoading ? (a(), s("span", G, [
        d(r.$slots, "default")
      ], 512)) : c("", !0),
      t.isLoading ? (a(), s("ma-spinner", {
        key: 2,
        variant: f(v)
      }, null, 8, H)) : c("", !0)
    ], 10, j));
  }
});
export {
  X as _,
  Y as a,
  Z as b,
  Q as t
};
