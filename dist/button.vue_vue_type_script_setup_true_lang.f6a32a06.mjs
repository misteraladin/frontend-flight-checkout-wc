import { defineComponent as h, openBlock as l, createElementBlock as s, normalizeClass as y, renderSlot as d, createCommentVNode as c, toDisplayString as i, createElementVNode as e, Fragment as g, renderList as $, createBlock as k, ref as u, computed as _, unref as f } from "vue";
const Q = (t) => t.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
  currencyDisplay: "code",
  maximumFractionDigits: 0
}), X = (t, a) => new Date(t).toLocaleDateString(a, {
  day: "2-digit",
  month: "long",
  year: "numeric"
}), C = {
  key: 0,
  class: "card__header"
}, Y = /* @__PURE__ */ h({
  __name: "card",
  props: {
    alternate: { type: Boolean }
  },
  setup(t) {
    return (a, n) => (l(), s("section", {
      class: y(["card", { "card-alternate": t.alternate }])
    }, [
      a.$slots.header ? (l(), s("div", C, [
        d(a.$slots, "header")
      ])) : c("", !0),
      d(a.$slots, "default")
    ], 2));
  }
}), L = { class: "flight-card-item" }, S = {
  key: 0,
  class: "flight-card-item__transit"
}, w = { class: "flight-card-item__header" }, B = ["src", "alt"], N = { class: "flight-card-item__airline-name" }, T = { class: "flight-card-item__airline-class" }, I = { class: "airline-timeline" }, A = { class: "airline-timeline__time" }, O = { class: "airline-timeline__date" }, x = { class: "airline-timeline__city" }, p = { class: "airline-timeline__airport" }, F = { class: "airline-timeline__flight-time" }, V = { class: "airline-timeline__time airline-timeline__time--end" }, E = { class: "airline-timeline__date" }, R = { class: "airline-timeline__city" }, z = { class: "airline-timeline__airport" }, K = /* @__PURE__ */ h({
  __name: "flight-card-item",
  props: {
    flight: null
  },
  setup(t) {
    const a = (n) => new Date(n).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short"
    });
    return (n, m) => (l(), s("div", L, [
      t.flight.TransitTime ? (l(), s("div", S, " Transit " + i(t.flight.TransitTime) + " di " + i(t.flight.OriginCityName) + " (" + i(t.flight.Origin) + ") ", 1)) : c("", !0),
      e("div", w, [
        e("img", {
          src: t.flight.AirlineImageUrl,
          alt: t.flight.AirlineName
        }, null, 8, B),
        e("span", N, i(t.flight.AirlineName), 1),
        e("span", T, i(t.flight.ClassCategory) + " Subclass(" + i(t.flight.ClassCode) + ") ", 1)
      ]),
      e("div", I, [
        e("div", null, [
          e("span", A, i(t.flight.DepartTime), 1),
          e("span", O, i(a(t.flight.DepartDate)), 1)
        ]),
        e("div", null, [
          e("span", x, i(t.flight.OriginCityName) + " (" + i(t.flight.Origin) + ") ", 1),
          e("span", p, i(t.flight.OriginName), 1)
        ]),
        e("span", F, i(t.flight.FlightTime), 1),
        e("div", null, [
          e("span", V, i(t.flight.ArriveTime), 1),
          e("span", E, i(a(t.flight.ArriveDate)), 1)
        ]),
        e("div", null, [
          e("span", R, i(t.flight.DestinationCityName) + " (" + i(t.flight.Destination) + ") ", 1),
          e("span", z, i(t.flight.DestinationName), 1)
        ])
      ])
    ]));
  }
}), M = { class: "flight-card" }, U = { class: "flight-card__heading" }, W = { class: "flight-card__time" }, Z = /* @__PURE__ */ h({
  __name: "flight-card",
  props: {
    segment: null,
    header: null
  },
  setup(t) {
    const a = (n) => new Date(n).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "long"
    });
    return (n, m) => (l(), s(g, null, [
      e("div", M, [
        e("span", U, i(t.header), 1),
        e("small", W, i(a(t.segment.Departure[0].DepartDate)), 1)
      ]),
      (l(!0), s(g, null, $(t.segment.Departure, (o) => (l(), k(K, {
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
}, H = ["variant"], tt = /* @__PURE__ */ h({
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
  setup(t, { emit: a }) {
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
      a("click", r);
    };
    return (r, J) => (l(), s("button", {
      type: t.type,
      class: y(f(D)),
      disabled: t.disabled || t.isLoading,
      onClick: b
    }, [
      o.value && !t.isLoading ? (l(), s("span", q, [
        d(r.$slots, "icon")
      ])) : c("", !0),
      m.value && !t.isLoading ? (l(), s("span", G, [
        d(r.$slots, "default")
      ], 512)) : c("", !0),
      t.isLoading ? (l(), s("ma-spinner", {
        key: 2,
        variant: f(v)
      }, null, 8, H)) : c("", !0)
    ], 10, j));
  }
});
export {
  Y as _,
  Z as a,
  Q as b,
  tt as c,
  X as t
};
