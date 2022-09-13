import { defineComponent as r, openBlock as n, createElementBlock as i, normalizeClass as o, defineCustomElement as t } from "vue";
import { _ as s } from "./_plugin-vue_export-helper.9d74fd37.js";
const a = r({
  props: {
    variant: {
      type: String,
      default: "secondary",
      validator: (e) => ["primary", "secondary"].includes(e)
    }
  },
  computed: {
    classes() {
      return ["spinner", `spinner__${this.variant}`];
    }
  }
}), p = `:root{--el-color-primary: $primary-1}.spinner{display:inline-block;width:.9375rem;height:15px;border:3px solid rgba(255,255,255,.3);border-radius:50%;border-top-color:#fefefe;animation:spinner 1s ease-in-out infinite;-webkit-animation:spinner 1s ease-in-out infinite}.spinner.spinner__primary{border:3px solid var(--color-primary-lightest);border-top-color:var(--color-primary)}@keyframes spinner{to{-webkit-transform:rotate(360deg)}}@-webkit-keyframes spinner{to{-webkit-transform:rotate(360deg)}}
`;
function l(e, d, f, u, y, _) {
  return n(), i("div", {
    class: o(e.classes)
  }, null, 2);
}
const c = /* @__PURE__ */ s(a, [["render", l], ["styles", [p]]]), m = t(c);
function g() {
  customElements.define("ma-spinner", m);
}
export {
  g as register
};
