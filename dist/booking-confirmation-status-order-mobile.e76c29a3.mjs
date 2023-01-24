import { defineComponent as i, openBlock as n, createElementBlock as a, createElementVNode as t, toDisplayString as e, unref as c, pushScopeId as d, popScopeId as r } from "vue";
import { a as l } from "./index.ba6cd7a3.mjs";
import { _ } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const o = (s) => (d("data-v-cc16efeb"), s = s(), r(), s), m = { class: "status-order" }, p = { class: "booking-id" }, v = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "title" }, "Booking ID", -1)), h = { class: "content-booking" }, u = { class: "status" }, f = /* @__PURE__ */ o(() => /* @__PURE__ */ t("div", { class: "title" }, "Status", -1)), S = { class: "content-status" }, b = { class: "limit" }, g = { class: "title" }, k = { class: "content-limit" }, I = /* @__PURE__ */ i({
  __name: "booking-confirmation-status-order-mobile",
  props: {
    reservation: null,
    t: null
  },
  setup(s) {
    return (y, D) => (n(), a("div", m, [
      t("div", p, [
        v,
        t("span", h, e(s.reservation.ReservationCode), 1)
      ]),
      t("div", u, [
        f,
        t("span", S, e(s.reservation.ReservationStatusDetail), 1)
      ]),
      t("div", b, [
        t("div", g, e(s.t("PTL")), 1),
        t("span", k, e(c(l)(s.reservation.TimeLimitPayment)), 1)
      ])
    ]));
  }
}), x = `h1[data-v-cc16efeb]{padding:16px}
`, E = /* @__PURE__ */ _(I, [["styles", [x]], ["__scopeId", "data-v-cc16efeb"]]);
export {
  E as S
};
