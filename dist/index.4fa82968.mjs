import { defineComponent as p, computed as k, openBlock as n, createElementBlock as l, normalizeClass as d, unref as a, renderSlot as o, createCommentVNode as c, createElementVNode as u, defineCustomElement as w } from "vue";
import { _ as y } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const x = {
  key: 0,
  viewBox: "0 0 7 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, B = /* @__PURE__ */ u("path", { d: "M1.70547 0.705384C1.3159 0.315811 0.684276 0.315811 0.294703 0.705384C-0.0945693 1.09466 -0.0949132 1.72569 0.293935 2.11538L4.17009 6L0.293934 9.88462C-0.0949135 10.2743 -0.0945692 10.9053 0.294703 11.2946C0.684276 11.6842 1.3159 11.6842 1.70547 11.2946L6.29298 6.70711C6.68351 6.31658 6.68351 5.68342 6.29298 5.29289L1.70547 0.705384Z" }, null, -1), F = [
  B
], L = ["href", "title"], $ = ["href", "title"], E = ["href", "title"], z = {
  key: 4,
  viewBox: "0 0 7 12",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
}, M = /* @__PURE__ */ u("path", { d: "M1.70547 0.705384C1.3159 0.315811 0.684276 0.315811 0.294703 0.705384C-0.0945693 1.09466 -0.0949132 1.72569 0.293935 2.11538L4.17009 6L0.293934 9.88462C-0.0949135 10.2743 -0.0945692 10.9053 0.294703 11.2946C0.684276 11.6842 1.3159 11.6842 1.70547 11.2946L6.29298 6.70711C6.68351 6.31658 6.68351 5.68342 6.29298 5.29289L1.70547 0.705384Z" }, null, -1), N = [
  M
], V = /* @__PURE__ */ p({
  __name: "link.ce",
  props: {
    variant: null,
    arrow: { type: Boolean },
    disabled: { type: Boolean },
    expanded: { type: Boolean },
    external: { type: Boolean },
    openCurrent: { type: Boolean },
    to: null,
    title: null
  },
  setup(e) {
    const {
      variant: f,
      disabled: b,
      expanded: h,
      external: g,
      openCurrent: v,
      to: _
    } = e, i = k(() => [
      "ma-link",
      `ma-link__${f}`,
      { disabled: b, expanded: h }
    ]), C = (t) => ["https", "tel:", "mailto:"].some((m) => t.includes(m)), s = k(() => g ? !0 : v ? !1 : C(_));
    return (t, r) => (n(), l("div", {
      class: d(a(i))
    }, [
      e.to ? a(s) ? (n(), l("a", {
        key: 1,
        href: e.to,
        title: e.title,
        target: "_blank",
        rel: "noopener",
        class: d(a(i))
      }, [
        o(t.$slots, "default")
      ], 10, L)) : !a(s) && e.openCurrent ? (n(), l("a", {
        key: 2,
        href: e.to,
        title: e.title
      }, [
        o(t.$slots, "default")
      ], 8, $)) : (n(), l("a", {
        key: 3,
        href: e.to,
        title: e.title,
        class: d(a(i))
      }, [
        o(t.$slots, "default")
      ], 10, E)) : (n(), l("button", {
        key: 0,
        type: "button",
        onClick: r[0] || (r[0] = (m) => t.$emit("click"))
      }, [
        o(t.$slots, "default"),
        e.arrow && !e.to ? (n(), l("svg", x, F)) : c("", !0)
      ])),
      e.arrow && e.to ? (n(), l("svg", z, N)) : c("", !0)
    ], 2));
  }
}), Z = `:root{--el-color-primary: $primary-1;color:#3d4151}.ma-link{display:inline-block;cursor:pointer}.ma-link button,.ma-link a{padding:4px 8px;font-size:.875rem;line-height:1.5rem;color:#2f4095}.ma-link button{background-color:transparent;border-color:transparent;font-weight:inherit;cursor:inherit}.ma-link a{text-decoration:none}.ma-link svg{height:.625rem;margin-left:5px;fill:#2f4095}.ma-link:active a,.ma-link:active button,.ma-link:hover a,.ma-link:hover button{color:#1f2a61}.ma-link:active svg,.ma-link:hover svg{fill:#1f2a61}.ma-link.ma-link__badge button,.ma-link.ma-link__badge a{background-color:#f5f7ff;border:1px solid #F5F7FF;border-radius:.5rem}.ma-link.ma-link__badge button:active,.ma-link.ma-link__badge button:hover,.ma-link.ma-link__badge a:active,.ma-link.ma-link__badge a:hover{background-color:#f5f7ff;border:1px solid #F5F7FF}.ma-link.ma-link__badge button:hover,.ma-link.ma-link__badge a:hover{box-shadow:#1f2a61}.ma-link.ma-link__default a,.ma-link.ma-link__default button{color:#a3301a}.ma-link.ma-link__default svg{fill:#a3301a}.ma-link.disabled{opacity:.5}.ma-link.disabled a,.ma-link.disabled button{cursor:not-allowed;color:#a3301a}.ma-link.disabled svg{cursor:not-allowed;fill:#a3301a}.ma-link.disabled.ma-link__badge button,.ma-link.disabled.ma-link__badge a{background-color:#fdece9;border:1px solid #FDECE9}.ma-link.expanded{min-width:100%}
`, D = /* @__PURE__ */ y(V, [["styles", [Z]]]), S = w(D);
function q() {
  customElements.define("ma-link", S);
}
export {
  q as register
};
