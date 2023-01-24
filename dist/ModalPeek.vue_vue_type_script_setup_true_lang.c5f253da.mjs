import { openBlock as l, createElementBlock as d, createElementVNode as e, renderSlot as n, defineComponent as r, withModifiers as a } from "vue";
import { _ as c } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const m = {}, f = { id: "mobile-header" }, p = { class: "header-left" }, b = { class: "header-middle" };
function u(t, o) {
  return l(), d("header", f, [
    e("div", p, [
      n(t.$slots, "left", {}, () => [
        e("button", {
          type: "button",
          class: "btn btn-header",
          onClick: o[0] || (o[0] = (i) => t.$emit("back"))
        })
      ])
    ]),
    e("div", b, [
      n(t.$slots, "default")
    ])
  ]);
}
const B = /* @__PURE__ */ c(m, [["render", u]]), $ = { id: "mobile-footer" }, E = /* @__PURE__ */ r({
  __name: "mobile-footer",
  emits: ["next"],
  setup(t, { emit: o }) {
    return (i, s) => (l(), d("div", $, [
      e("button", {
        onClick: s[0] || (s[0] = (_) => o("next"))
      }, [
        n(i.$slots, "default")
      ])
    ]));
  }
}), h = ["onClick"], k = { class: "modal-peek-mobile__wrapper" }, v = { class: "modal-peek-mobile__body" }, C = { class: "modal-peek-mobile__footer" }, H = /* @__PURE__ */ r({
  __name: "ModalPeek",
  emits: ["close"],
  setup(t, { emit: o }) {
    const i = () => {
      o("close");
    };
    return (s, _) => (l(), d("div", {
      id: "modal-peek-mobile",
      onClick: a(i, ["self"])
    }, [
      e("div", k, [
        e("div", v, [
          n(s.$slots, "default")
        ]),
        e("div", C, [
          n(s.$slots, "footer")
        ])
      ])
    ], 8, h));
  }
});
export {
  B as H,
  H as _,
  E as a
};
