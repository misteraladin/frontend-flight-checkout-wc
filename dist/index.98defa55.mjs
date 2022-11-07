import { computed as d, getCurrentInstance as re, ref as w, inject as T, unref as t, onMounted as Te, watch as q, toRef as Ae, onUnmounted as Qe, defineComponent as Ge, useAttrs as et, useSlots as tt, shallowRef as oe, nextTick as P, onUpdated as ot, withDirectives as nt, openBlock as f, createElementBlock as x, mergeProps as ne, createCommentVNode as m, Fragment as ae, normalizeClass as b, renderSlot as U, createElementVNode as V, createBlock as S, withCtx as M, resolveDynamicComponent as W, withModifiers as at, createVNode as st, toDisplayString as Y, normalizeStyle as lt, vShow as rt } from "vue";
import { j as X, l as it, k as ut, m as Fe, f as B, n as ct, o as dt, p as Le, q as Oe, r as pt, i as ze, b as ft, e as se, u as $e, v as vt, s as mt, a as yt, E as _, N as ht, _ as bt, t as ke, w as gt } from "./index.fd5cbe3d.mjs";
function xt(o) {
  return o == null;
}
const Ne = X([
  String,
  Object,
  Function
]), wt = {
  validating: it,
  success: ut,
  error: Fe
}, le = "update:modelValue", It = ["", "default", "small", "large"], St = (o) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o), Et = (o) => o, Ct = ["class", "style"], zt = /^on[A-Z]/, $t = (o = {}) => {
  const { excludeListeners: a = !1, excludeKeys: s } = o, n = d(() => ((s == null ? void 0 : s.value) || []).concat(Ct)), r = re();
  return r ? d(() => {
    var c;
    return ct(Object.entries((c = r.proxy) == null ? void 0 : c.$attrs).filter(([u]) => !n.value.includes(u) && !(a && zt.test(u))));
  }) : (B("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), d(() => ({})));
}, ie = Symbol("formContextKey"), Re = Symbol("formItemContextKey"), Me = (o) => {
  const a = re();
  return d(() => {
    var s, n;
    return (n = ((s = a.proxy) == null ? void 0 : s.$props)[o]) != null ? n : void 0;
  });
}, kt = dt({
  type: String,
  values: It,
  required: !1
}), Nt = (o, a = {}) => {
  const s = w(void 0), n = a.prop ? s : Me("size"), r = a.global ? s : Le("size"), c = a.form ? { size: void 0 } : T(ie, void 0), u = a.formItem ? { size: void 0 } : T(Re, void 0);
  return d(() => n.value || t(o) || (u == null ? void 0 : u.size) || (c == null ? void 0 : c.size) || r.value || "");
}, Pt = (o) => {
  const a = Me("disabled"), s = T(ie, void 0);
  return d(() => a.value || t(o) || (s == null ? void 0 : s.disabled) || !1);
}, Pe = {
  prefix: Math.floor(Math.random() * 1e4),
  current: 0
}, Vt = Symbol("elIdInjection"), Tt = (o) => {
  const a = T(Vt, Pe);
  !Oe && a === Pe && B("IdInjection", `Looks like you are using server rendering, you must provide a id provider to ensure the hydration process to be succeed
usage: app.provide(ID_INJECTION_KEY, {
  prefix: number,
  current: number,
})`);
  const s = Le("namespace", pt);
  return d(() => t(o) || `${s.value}-id-${a.prefix}-${a.current++}`);
}, At = () => {
  const o = T(ie, void 0), a = T(Re, void 0);
  return {
    form: o,
    formItem: a
  };
}, Ft = (o, {
  formItemContext: a,
  disableIdGeneration: s,
  disableIdManagement: n
}) => {
  s || (s = w(!1)), n || (n = w(!1));
  const r = w();
  let c;
  const u = d(() => {
    var h;
    return !!(!o.label && a && a.inputIds && ((h = a.inputIds) == null ? void 0 : h.length) <= 1);
  });
  return Te(() => {
    c = q([Ae(o, "id"), s], ([h, p]) => {
      const y = h != null ? h : p ? void 0 : Tt().value;
      y !== r.value && (a != null && a.removeInputId && (r.value && a.removeInputId(r.value), !(n != null && n.value) && !p && y && a.addInputId(y)), r.value = y);
    }, { immediate: !0 });
  }), Qe(() => {
    c && c(), a != null && a.removeInputId && r.value && a.removeInputId(r.value);
  }), {
    isLabeledByFormItem: u,
    inputId: r
  };
};
function Lt(o) {
  const a = w();
  function s() {
    if (o.value == null)
      return;
    const { selectionStart: r, selectionEnd: c, value: u } = o.value;
    if (r == null || c == null)
      return;
    const h = u.slice(0, Math.max(0, r)), p = u.slice(Math.max(0, c));
    a.value = {
      selectionStart: r,
      selectionEnd: c,
      value: u,
      beforeTxt: h,
      afterTxt: p
    };
  }
  function n() {
    if (o.value == null || a.value == null)
      return;
    const { value: r } = o.value, { beforeTxt: c, afterTxt: u, selectionStart: h } = a.value;
    if (c == null || u == null || h == null)
      return;
    let p = r.length;
    if (r.endsWith(u))
      p = r.length - u.length;
    else if (r.startsWith(c))
      p = c.length;
    else {
      const y = c[h - 1], E = r.indexOf(y, h - 1);
      E !== -1 && (p = E + 1);
    }
    o.value.setSelectionRange(p, p);
  }
  return [s, n];
}
let g;
const Ot = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Rt = [
  "letter-spacing",
  "line-height",
  "padding-top",
  "padding-bottom",
  "font-family",
  "font-weight",
  "font-size",
  "text-rendering",
  "text-transform",
  "width",
  "text-indent",
  "padding-left",
  "padding-right",
  "border-width",
  "box-sizing"
];
function Mt(o) {
  const a = window.getComputedStyle(o), s = a.getPropertyValue("box-sizing"), n = Number.parseFloat(a.getPropertyValue("padding-bottom")) + Number.parseFloat(a.getPropertyValue("padding-top")), r = Number.parseFloat(a.getPropertyValue("border-bottom-width")) + Number.parseFloat(a.getPropertyValue("border-top-width"));
  return { contextStyle: Rt.map((u) => `${u}:${a.getPropertyValue(u)}`).join(";"), paddingSize: n, borderSize: r, boxSizing: s };
}
function Ve(o, a = 1, s) {
  var n;
  g || (g = document.createElement("textarea"), document.body.appendChild(g));
  const { paddingSize: r, borderSize: c, boxSizing: u, contextStyle: h } = Mt(o);
  g.setAttribute("style", `${h};${Ot}`), g.value = o.value || o.placeholder || "";
  let p = g.scrollHeight;
  const y = {};
  u === "border-box" ? p = p + c : u === "content-box" && (p = p - r), g.value = "";
  const E = g.scrollHeight - r;
  if (ze(a)) {
    let v = E * a;
    u === "border-box" && (v = v + r + c), p = Math.max(v, p), y.minHeight = `${v}px`;
  }
  if (ze(s)) {
    let v = E * s;
    u === "border-box" && (v = v + r + c), p = Math.min(v, p);
  }
  return y.height = `${p}px`, (n = g.parentNode) == null || n.removeChild(g), g = void 0, y;
}
const _t = ft({
  id: {
    type: String,
    default: void 0
  },
  size: kt,
  disabled: Boolean,
  modelValue: {
    type: X([
      String,
      Number,
      Object
    ]),
    default: ""
  },
  type: {
    type: String,
    default: "text"
  },
  resize: {
    type: String,
    values: ["none", "both", "horizontal", "vertical"]
  },
  autosize: {
    type: X([Boolean, Object]),
    default: !1
  },
  autocomplete: {
    type: String,
    default: "off"
  },
  formatter: {
    type: Function
  },
  parser: {
    type: Function
  },
  placeholder: {
    type: String
  },
  form: {
    type: String,
    default: ""
  },
  readonly: {
    type: Boolean,
    default: !1
  },
  clearable: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showWordLimit: {
    type: Boolean,
    default: !1
  },
  suffixIcon: {
    type: Ne
  },
  prefixIcon: {
    type: Ne
  },
  containerRole: {
    type: String,
    default: void 0
  },
  label: {
    type: String,
    default: void 0
  },
  tabindex: {
    type: [String, Number],
    default: 0
  },
  validateEvent: {
    type: Boolean,
    default: !0
  },
  inputStyle: {
    type: X([Object, Array, String]),
    default: () => Et({})
  }
}), Bt = {
  [le]: (o) => se(o),
  input: (o) => se(o),
  change: (o) => se(o),
  focus: (o) => o instanceof FocusEvent,
  blur: (o) => o instanceof FocusEvent,
  clear: () => !0,
  mouseleave: (o) => o instanceof MouseEvent,
  mouseenter: (o) => o instanceof MouseEvent,
  keydown: (o) => o instanceof Event,
  compositionstart: (o) => o instanceof CompositionEvent,
  compositionupdate: (o) => o instanceof CompositionEvent,
  compositionend: (o) => o instanceof CompositionEvent
}, Dt = ["role"], jt = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"], Kt = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"], Ht = {
  name: "ElInput",
  inheritAttrs: !1
}, Ut = /* @__PURE__ */ Ge({
  ...Ht,
  props: _t,
  emits: Bt,
  setup(o, { expose: a, emit: s }) {
    const n = o, r = {
      suffix: "append",
      prefix: "prepend"
    }, c = re(), u = et(), h = tt(), p = d(() => {
      const e = {};
      return n.containerRole === "combobox" && (e["aria-haspopup"] = u["aria-haspopup"], e["aria-owns"] = u["aria-owns"], e["aria-expanded"] = u["aria-expanded"]), e;
    }), y = $t({
      excludeKeys: d(() => Object.keys(p.value))
    }), { form: E, formItem: v } = At(), { inputId: ue } = Ft(n, {
      formItemContext: v
    }), _e = Nt(), $ = Pt(), l = $e("input"), ce = $e("textarea"), D = oe(), k = oe(), A = w(!1), J = w(!1), F = w(!1), j = w(!1), de = w(), Z = oe(n.inputStyle), L = d(() => D.value || k.value), pe = d(() => {
      var e;
      return (e = E == null ? void 0 : E.statusIcon) != null ? e : !1;
    }), O = d(() => (v == null ? void 0 : v.validateState) || ""), fe = d(() => O.value && wt[O.value]), Be = d(() => j.value ? vt : mt), De = d(() => [
      u.style,
      n.inputStyle
    ]), ve = d(() => [
      n.inputStyle,
      Z.value,
      { resize: n.resize }
    ]), C = d(() => xt(n.modelValue) ? "" : String(n.modelValue)), K = d(() => n.clearable && !$.value && !n.readonly && !!C.value && (A.value || J.value)), Q = d(() => n.showPassword && !$.value && !n.readonly && !!C.value && (!!C.value || A.value)), N = d(() => n.showWordLimit && !!y.value.maxlength && (n.type === "text" || n.type === "textarea") && !$.value && !n.readonly && !n.showPassword), G = d(() => Array.from(C.value).length), je = d(() => !!N.value && G.value > Number(y.value.maxlength)), Ke = d(() => !!h.suffix || !!n.suffixIcon || K.value || n.showPassword || N.value || !!O.value && pe.value), [He, Ue] = Lt(D);
    yt(k, (e) => {
      if (!N.value || n.resize !== "both")
        return;
      const i = e[0], { width: I } = i.contentRect;
      de.value = {
        right: `calc(100% - ${I + 15 + 6}px)`
      };
    });
    const H = () => {
      const { type: e, autosize: i } = n;
      if (!(!Oe || e !== "textarea"))
        if (i) {
          const I = ke(i) ? i.minRows : void 0, z = ke(i) ? i.maxRows : void 0;
          Z.value = {
            ...Ve(k.value, I, z)
          };
        } else
          Z.value = {
            minHeight: Ve(k.value).minHeight
          };
    }, R = () => {
      const e = L.value;
      !e || e.value === C.value || (e.value = C.value);
    }, me = (e) => {
      const { el: i } = c.vnode;
      if (!i)
        return;
      const z = Array.from(i.querySelectorAll(`.${l.e(e)}`)).find((Ze) => Ze.parentNode === i);
      if (!z)
        return;
      const Ce = r[e];
      h[Ce] ? z.style.transform = `translateX(${e === "suffix" ? "-" : ""}${i.querySelector(`.${l.be("group", Ce)}`).offsetWidth}px)` : z.removeAttribute("style");
    }, ee = () => {
      me("prefix"), me("suffix");
    }, te = async (e) => {
      He();
      let { value: i } = e.target;
      if (n.formatter && (i = n.parser ? n.parser(i) : i, i = n.formatter(i)), !F.value) {
        if (i === C.value) {
          R();
          return;
        }
        s(le, i), s("input", i), await P(), R(), Ue();
      }
    }, ye = (e) => {
      s("change", e.target.value);
    }, he = (e) => {
      s("compositionstart", e), F.value = !0;
    }, be = (e) => {
      var i;
      s("compositionupdate", e);
      const I = (i = e.target) == null ? void 0 : i.value, z = I[I.length - 1] || "";
      F.value = !St(z);
    }, ge = (e) => {
      s("compositionend", e), F.value && (F.value = !1, te(e));
    }, We = () => {
      j.value = !j.value, xe();
    }, xe = async () => {
      var e;
      await P(), (e = L.value) == null || e.focus();
    }, Ye = () => {
      var e;
      return (e = L.value) == null ? void 0 : e.blur();
    }, we = (e) => {
      A.value = !0, s("focus", e);
    }, Ie = (e) => {
      var i;
      A.value = !1, s("blur", e), n.validateEvent && ((i = v == null ? void 0 : v.validate) == null || i.call(v, "blur").catch((I) => B(I)));
    }, qe = (e) => {
      J.value = !1, s("mouseleave", e);
    }, Xe = (e) => {
      J.value = !0, s("mouseenter", e);
    }, Se = (e) => {
      s("keydown", e);
    }, Je = () => {
      var e;
      (e = L.value) == null || e.select();
    }, Ee = () => {
      s(le, ""), s("change", ""), s("clear"), s("input", "");
    };
    return q(() => n.modelValue, () => {
      var e;
      P(() => H()), n.validateEvent && ((e = v == null ? void 0 : v.validate) == null || e.call(v, "change").catch((i) => B(i)));
    }), q(C, () => R()), q(() => n.type, async () => {
      await P(), R(), H(), ee();
    }), Te(async () => {
      !n.formatter && n.parser && B("ElInput", "If you set the parser, you also need to set the formatter."), R(), ee(), await P(), H();
    }), ot(async () => {
      await P(), ee();
    }), a({
      input: D,
      textarea: k,
      ref: L,
      textareaStyle: ve,
      autosize: Ae(n, "autosize"),
      focus: xe,
      blur: Ye,
      select: Je,
      clear: Ee,
      resizeTextarea: H
    }), (e, i) => nt((f(), x("div", ne(t(p), {
      class: [
        e.type === "textarea" ? t(ce).b() : t(l).b(),
        t(l).m(t(_e)),
        t(l).is("disabled", t($)),
        t(l).is("exceed", t(je)),
        {
          [t(l).b("group")]: e.$slots.prepend || e.$slots.append,
          [t(l).bm("group", "append")]: e.$slots.append,
          [t(l).bm("group", "prepend")]: e.$slots.prepend,
          [t(l).m("prefix")]: e.$slots.prefix || e.prefixIcon,
          [t(l).m("suffix")]: e.$slots.suffix || e.suffixIcon || e.clearable || e.showPassword,
          [t(l).bm("suffix", "password-clear")]: t(K) && t(Q)
        },
        e.$attrs.class
      ],
      style: t(De),
      role: e.containerRole,
      onMouseenter: Xe,
      onMouseleave: qe
    }), [
      m(" input "),
      e.type !== "textarea" ? (f(), x(ae, { key: 0 }, [
        m(" prepend slot "),
        e.$slots.prepend ? (f(), x("div", {
          key: 0,
          class: b(t(l).be("group", "prepend"))
        }, [
          U(e.$slots, "prepend")
        ], 2)) : m("v-if", !0),
        V("div", {
          class: b([t(l).e("wrapper"), t(l).is("focus", A.value)])
        }, [
          m(" prefix slot "),
          e.$slots.prefix || e.prefixIcon ? (f(), x("span", {
            key: 0,
            class: b(t(l).e("prefix"))
          }, [
            V("span", {
              class: b(t(l).e("prefix-inner"))
            }, [
              U(e.$slots, "prefix"),
              e.prefixIcon ? (f(), S(t(_), {
                key: 0,
                class: b(t(l).e("icon"))
              }, {
                default: M(() => [
                  (f(), S(W(e.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0)
            ], 2)
          ], 2)) : m("v-if", !0),
          V("input", ne({
            id: t(ue),
            ref_key: "input",
            ref: D,
            class: t(l).e("inner")
          }, t(y), {
            type: e.showPassword ? j.value ? "text" : "password" : e.type,
            disabled: t($),
            formatter: e.formatter,
            parser: e.parser,
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            tabindex: e.tabindex,
            "aria-label": e.label,
            placeholder: e.placeholder,
            style: e.inputStyle,
            onCompositionstart: he,
            onCompositionupdate: be,
            onCompositionend: ge,
            onInput: te,
            onFocus: we,
            onBlur: Ie,
            onChange: ye,
            onKeydown: Se
          }), null, 16, jt),
          m(" suffix slot "),
          t(Ke) ? (f(), x("span", {
            key: 1,
            class: b(t(l).e("suffix"))
          }, [
            V("span", {
              class: b(t(l).e("suffix-inner"))
            }, [
              !t(K) || !t(Q) || !t(N) ? (f(), x(ae, { key: 0 }, [
                U(e.$slots, "suffix"),
                e.suffixIcon ? (f(), S(t(_), {
                  key: 0,
                  class: b(t(l).e("icon"))
                }, {
                  default: M(() => [
                    (f(), S(W(e.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : m("v-if", !0)
              ], 64)) : m("v-if", !0),
              t(K) ? (f(), S(t(_), {
                key: 1,
                class: b([t(l).e("icon"), t(l).e("clear")]),
                onMousedown: at(t(ht), ["prevent"]),
                onClick: Ee
              }, {
                default: M(() => [
                  st(t(Fe))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : m("v-if", !0),
              t(Q) ? (f(), S(t(_), {
                key: 2,
                class: b([t(l).e("icon"), t(l).e("password")]),
                onClick: We
              }, {
                default: M(() => [
                  (f(), S(W(t(Be))))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0),
              t(N) ? (f(), x("span", {
                key: 3,
                class: b(t(l).e("count"))
              }, [
                V("span", {
                  class: b(t(l).e("count-inner"))
                }, Y(t(G)) + " / " + Y(t(y).maxlength), 3)
              ], 2)) : m("v-if", !0),
              t(O) && t(fe) && t(pe) ? (f(), S(t(_), {
                key: 4,
                class: b([
                  t(l).e("icon"),
                  t(l).e("validateIcon"),
                  t(l).is("loading", t(O) === "validating")
                ])
              }, {
                default: M(() => [
                  (f(), S(W(t(fe))))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0)
            ], 2)
          ], 2)) : m("v-if", !0)
        ], 2),
        m(" append slot "),
        e.$slots.append ? (f(), x("div", {
          key: 1,
          class: b(t(l).be("group", "append"))
        }, [
          U(e.$slots, "append")
        ], 2)) : m("v-if", !0)
      ], 64)) : (f(), x(ae, { key: 1 }, [
        m(" textarea "),
        V("textarea", ne({
          id: t(ue),
          ref_key: "textarea",
          ref: k,
          class: t(ce).e("inner")
        }, t(y), {
          tabindex: e.tabindex,
          disabled: t($),
          readonly: e.readonly,
          autocomplete: e.autocomplete,
          style: t(ve),
          "aria-label": e.label,
          placeholder: e.placeholder,
          onCompositionstart: he,
          onCompositionupdate: be,
          onCompositionend: ge,
          onInput: te,
          onFocus: we,
          onBlur: Ie,
          onChange: ye,
          onKeydown: Se
        }), null, 16, Kt),
        t(N) ? (f(), x("span", {
          key: 0,
          style: lt(de.value),
          class: b(t(l).e("count"))
        }, Y(t(G)) + " / " + Y(t(y).maxlength), 7)) : m("v-if", !0)
      ], 64))
    ], 16, Dt)), [
      [rt, e.type !== "hidden"]
    ]);
  }
});
var Wt = /* @__PURE__ */ bt(Ut, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Xt = gt(Wt);
export {
  Xt as E,
  kt as a,
  Ne as b,
  Pt as c,
  At as d,
  Nt as e,
  Re as f,
  xt as i,
  Tt as u
};
