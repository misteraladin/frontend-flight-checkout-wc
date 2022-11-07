import { defineComponent as r, openBlock as n, createElementBlock as s, normalizeClass as g, renderSlot as o, createCommentVNode as h, toDisplayString as i, createElementVNode as e, Fragment as d, renderList as _, createBlock as f } from "vue";
const z = (t) => t.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
  currencyDisplay: "code",
  maximumFractionDigits: 0
}), K = (t, a) => new Date(t).toLocaleDateString(a, {
  day: "2-digit",
  month: "long",
  year: "numeric"
}), u = {
  key: 0,
  class: "card__header"
}, M = /* @__PURE__ */ r({
  __name: "card",
  props: {
    alternate: { type: Boolean }
  },
  setup(t) {
    return (a, l) => (n(), s("section", {
      class: g(["card", { "card-alternate": t.alternate }])
    }, [
      a.$slots.header ? (n(), s("div", u, [
        o(a.$slots, "header")
      ])) : h("", !0),
      o(a.$slots, "default")
    ], 2));
  }
}), D = { class: "flight-card-item" }, y = {
  key: 0,
  class: "flight-card-item__transit"
}, v = { class: "flight-card-item__header" }, C = ["src", "alt"], N = { class: "flight-card-item__airline-name" }, S = { class: "flight-card-item__airline-class" }, $ = { class: "airline-timeline" }, T = { class: "airline-timeline__time" }, k = { class: "airline-timeline__date" }, I = { class: "airline-timeline__city" }, A = { class: "airline-timeline__airport" }, L = { class: "airline-timeline__flight-time" }, O = { class: "airline-timeline__time airline-timeline__time--end" }, w = { class: "airline-timeline__date" }, B = { class: "airline-timeline__city" }, F = { class: "airline-timeline__airport" }, b = /* @__PURE__ */ r({
  __name: "flight-card-item",
  props: {
    flight: null
  },
  setup(t) {
    const a = (l) => new Date(l).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short"
    });
    return (l, m) => (n(), s("div", D, [
      t.flight.TransitTime ? (n(), s("div", y, " Transit " + i(t.flight.TransitTime) + " di " + i(t.flight.OriginCityName) + " (" + i(t.flight.Origin) + ") ", 1)) : h("", !0),
      e("div", v, [
        e("img", {
          src: t.flight.AirlineImageUrl,
          alt: t.flight.AirlineName
        }, null, 8, C),
        e("span", N, i(t.flight.AirlineName), 1),
        e("span", S, i(t.flight.ClassCategory) + " Subclass(" + i(t.flight.ClassCode) + ") ", 1)
      ]),
      e("div", $, [
        e("div", null, [
          e("span", T, i(t.flight.DepartTime), 1),
          e("span", k, i(a(t.flight.DepartDate)), 1)
        ]),
        e("div", null, [
          e("span", I, i(t.flight.OriginCityName) + " (" + i(t.flight.Origin) + ") ", 1),
          e("span", A, i(t.flight.OriginName), 1)
        ]),
        e("span", L, i(t.flight.FlightTime), 1),
        e("div", null, [
          e("span", O, i(t.flight.ArriveTime), 1),
          e("span", w, i(a(t.flight.ArriveDate)), 1)
        ]),
        e("div", null, [
          e("span", B, i(t.flight.DestinationCityName) + " (" + i(t.flight.Destination) + ") ", 1),
          e("span", F, i(t.flight.DestinationName), 1)
        ])
      ])
    ]));
  }
}), x = { class: "flight-card" }, E = { class: "flight-card__heading" }, R = { class: "flight-card__time" }, U = /* @__PURE__ */ r({
  __name: "flight-card",
  props: {
    segment: null,
    header: null
  },
  setup(t) {
    const a = (l) => new Date(l).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      weekday: "long"
    });
    return (l, m) => (n(), s(d, null, [
      e("div", x, [
        e("span", E, i(t.header), 1),
        e("small", R, i(a(t.segment.Departure[0].DepartDate)), 1)
      ]),
      (n(!0), s(d, null, _(t.segment.Departure, (c) => (n(), f(b, {
        key: c.SegmentSellKey,
        flight: c
      }, null, 8, ["flight"]))), 128))
    ], 64));
  }
});
export {
  M as _,
  U as a,
  z as b,
  K as t
};
