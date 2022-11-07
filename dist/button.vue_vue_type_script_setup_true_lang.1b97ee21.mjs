import { defineComponent as g, ref as l, computed as d, openBlock as o, createElementBlock as a, normalizeClass as f, unref as c, renderSlot as r, createCommentVNode as i } from "vue";
const h = ["type", "disabled"], k = {
  key: 0,
  class: "btn-icon"
}, B = {
  key: 1,
  ref: "slot",
  class: "btn-text"
}, L = ["variant"], C = /* @__PURE__ */ g({
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
  setup(n, { emit: u }) {
    const e = n, b = l(!0), s = l(!1), p = d(() => [
      "btn",
      {
        "btn-outline": e.outline,
        "btn-rounded": e.rounded,
        "btn-fullwidth": e.expanded,
        "btn-icon": s,
        loading: e.isLoading != null && e.isLoading,
        btn_warning: e.variant === "warning"
      }
    ]), y = d(
      () => e.outline ? "primary" : "secondary"
    ), m = (t) => {
      u("click", t);
    };
    return (t, v) => (o(), a("button", {
      type: n.type,
      class: f(c(p)),
      disabled: n.disabled || n.isLoading,
      onClick: m
    }, [
      s.value && !n.isLoading ? (o(), a("span", k, [
        r(t.$slots, "icon")
      ])) : i("", !0),
      b.value && !n.isLoading ? (o(), a("span", B, [
        r(t.$slots, "default")
      ], 512)) : i("", !0),
      n.isLoading ? (o(), a("ma-spinner", {
        key: 2,
        variant: c(y)
      }, null, 8, L)) : i("", !0)
    ], 10, h));
  }
});
export {
  C as _
};
