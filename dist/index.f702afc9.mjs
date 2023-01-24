import { computed as d, getCurrentInstance as ie, ref as x, inject as O, unref as t, onMounted as Ve, watch as q, toRef as Ae, onUnmounted as Qe, defineComponent as Te, openBlock as f, createElementBlock as w, mergeProps as X, renderSlot as R, useAttrs as Ge, useSlots as et, shallowRef as ne, nextTick as N, onUpdated as tt, withDirectives as ot, createCommentVNode as m, Fragment as ae, normalizeClass as b, createElementVNode as V, createBlock as I, withCtx as B, resolveDynamicComponent as j, withModifiers as nt, createVNode as at, toDisplayString as W, normalizeStyle as st, vShow as lt } from "vue";
import { d as Y, f as rt, b as it, u as ut, a as ue, c as Fe, e as ct, g as _e, h as Z, i as le, j as dt, k as pt, _ as Le, w as Be, l as $e, m as Pe, n as se, V as ft, v as vt, o as mt, p as yt, q as ht, N as bt, r as gt, s as wt, t as ke } from "./plugin-vue_export-helper.60902f82.mjs";
const re = "update:modelValue", Zt = "change", xt = ["", "default", "small", "large"], Jt = {
  large: 40,
  default: 32,
  small: 24
}, St = (o) => /([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(o), It = (o) => o, Et = ["class", "style"], Ct = /^on[A-Z]/, zt = (o = {}) => {
  const { excludeListeners: a = !1, excludeKeys: s } = o, n = d(() => ((s == null ? void 0 : s.value) || []).concat(Et)), l = ie();
  return l ? d(() => {
    var u;
    return rt(Object.entries((u = l.proxy) == null ? void 0 : u.$attrs).filter(([c]) => !n.value.includes(c) && !(a && Ct.test(c))));
  }) : (Y("use-attrs", "getCurrentInstance() returned null. useAttrs() must be called at the top of a setup function"), d(() => ({})));
}, Me = (o) => {
  const a = ie();
  return d(() => {
    var s, n;
    return (n = ((s = a.proxy) == null ? void 0 : s.$props)[o]) != null ? n : void 0;
  });
}, $t = it({
  type: String,
  values: xt,
  required: !1
}), Pt = (o, a = {}) => {
  const s = x(void 0), n = a.prop ? s : Me("size"), l = a.global ? s : ut("size"), u = a.form ? { size: void 0 } : O(ue, void 0), c = a.formItem ? { size: void 0 } : O(Fe, void 0);
  return d(() => n.value || t(o) || (c == null ? void 0 : c.size) || (u == null ? void 0 : u.size) || l.value || "");
}, kt = (o) => {
  const a = Me("disabled"), s = O(ue, void 0);
  return d(() => a.value || t(o) || (s == null ? void 0 : s.disabled) || !1);
}, Nt = () => {
  const o = O(ue, void 0), a = O(Fe, void 0);
  return {
    form: o,
    formItem: a
  };
}, Vt = (o, {
  formItemContext: a,
  disableIdGeneration: s,
  disableIdManagement: n
}) => {
  s || (s = x(!1)), n || (n = x(!1));
  const l = x();
  let u;
  const c = d(() => {
    var h;
    return !!(!o.label && a && a.inputIds && ((h = a.inputIds) == null ? void 0 : h.length) <= 1);
  });
  return Ve(() => {
    u = q([Ae(o, "id"), s], ([h, p]) => {
      const y = h != null ? h : p ? void 0 : ct().value;
      y !== l.value && (a != null && a.removeInputId && (l.value && a.removeInputId(l.value), !(n != null && n.value) && !p && y && a.addInputId(y)), l.value = y);
    }, { immediate: !0 });
  }), Qe(() => {
    u && u(), a != null && a.removeInputId && l.value && a.removeInputId(l.value);
  }), {
    isLabeledByFormItem: c,
    inputId: l
  };
};
function At(o) {
  const a = x();
  function s() {
    if (o.value == null)
      return;
    const { selectionStart: l, selectionEnd: u, value: c } = o.value;
    if (l == null || u == null)
      return;
    const h = c.slice(0, Math.max(0, l)), p = c.slice(Math.max(0, u));
    a.value = {
      selectionStart: l,
      selectionEnd: u,
      value: c,
      beforeTxt: h,
      afterTxt: p
    };
  }
  function n() {
    if (o.value == null || a.value == null)
      return;
    const { value: l } = o.value, { beforeTxt: u, afterTxt: c, selectionStart: h } = a.value;
    if (u == null || c == null || h == null)
      return;
    let p = l.length;
    if (l.endsWith(c))
      p = l.length - c.length;
    else if (l.startsWith(u))
      p = u.length;
    else {
      const y = u[h - 1], E = l.indexOf(y, h - 1);
      E !== -1 && (p = E + 1);
    }
    o.value.setSelectionRange(p, p);
  }
  return [s, n];
}
const Tt = _e({
  size: {
    type: Z([Number, String])
  },
  color: {
    type: String
  }
}), Ft = {
  name: "ElIcon",
  inheritAttrs: !1
}, _t = /* @__PURE__ */ Te({
  ...Ft,
  props: Tt,
  setup(o) {
    const a = o, s = le("icon"), n = d(() => {
      const { size: l, color: u } = a;
      return !l && !u ? {} : {
        fontSize: dt(l) ? void 0 : pt(l),
        "--color": u
      };
    });
    return (l, u) => (f(), w("i", X({
      class: t(s).b(),
      style: t(n)
    }, l.$attrs), [
      R(l.$slots, "default")
    ], 16));
  }
});
var Lt = /* @__PURE__ */ Le(_t, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const M = Be(Lt);
let g;
const Bt = `
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`, Mt = [
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
function Rt(o) {
  const a = window.getComputedStyle(o), s = a.getPropertyValue("box-sizing"), n = Number.parseFloat(a.getPropertyValue("padding-bottom")) + Number.parseFloat(a.getPropertyValue("padding-top")), l = Number.parseFloat(a.getPropertyValue("border-bottom-width")) + Number.parseFloat(a.getPropertyValue("border-top-width"));
  return { contextStyle: Mt.map((c) => `${c}:${a.getPropertyValue(c)}`).join(";"), paddingSize: n, borderSize: l, boxSizing: s };
}
function Ne(o, a = 1, s) {
  var n;
  g || (g = document.createElement("textarea"), document.body.appendChild(g));
  const { paddingSize: l, borderSize: u, boxSizing: c, contextStyle: h } = Rt(o);
  g.setAttribute("style", `${h};${Bt}`), g.value = o.value || o.placeholder || "";
  let p = g.scrollHeight;
  const y = {};
  c === "border-box" ? p = p + u : c === "content-box" && (p = p - l), g.value = "";
  const E = g.scrollHeight - l;
  if ($e(a)) {
    let v = E * a;
    c === "border-box" && (v = v + l + u), p = Math.max(v, p), y.minHeight = `${v}px`;
  }
  if ($e(s)) {
    let v = E * s;
    c === "border-box" && (v = v + l + u), p = Math.min(v, p);
  }
  return y.height = `${p}px`, (n = g.parentNode) == null || n.removeChild(g), g = void 0, y;
}
const Ot = _e({
  id: {
    type: String,
    default: void 0
  },
  size: $t,
  disabled: Boolean,
  modelValue: {
    type: Z([
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
    type: Z([Boolean, Object]),
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
    type: Pe
  },
  prefixIcon: {
    type: Pe
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
    type: Z([Object, Array, String]),
    default: () => It({})
  }
}), Dt = {
  [re]: (o) => se(o),
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
}, Ht = ["role"], Kt = ["id", "type", "disabled", "formatter", "parser", "readonly", "autocomplete", "tabindex", "aria-label", "placeholder"], Ut = ["id", "tabindex", "disabled", "readonly", "autocomplete", "aria-label", "placeholder"], jt = {
  name: "ElInput",
  inheritAttrs: !1
}, Wt = /* @__PURE__ */ Te({
  ...jt,
  props: Ot,
  emits: Dt,
  setup(o, { expose: a, emit: s }) {
    const n = o, l = {
      suffix: "append",
      prefix: "prepend"
    }, u = ie(), c = Ge(), h = et(), p = d(() => {
      const e = {};
      return n.containerRole === "combobox" && (e["aria-haspopup"] = c["aria-haspopup"], e["aria-owns"] = c["aria-owns"], e["aria-expanded"] = c["aria-expanded"]), e;
    }), y = zt({
      excludeKeys: d(() => Object.keys(p.value))
    }), { form: E, formItem: v } = Nt(), { inputId: ce } = Vt(n, {
      formItemContext: v
    }), Re = Pt(), $ = kt(), r = le("input"), de = le("textarea"), D = ne(), P = ne(), A = x(!1), J = x(!1), T = x(!1), H = x(!1), pe = x(), Q = ne(n.inputStyle), F = d(() => D.value || P.value), fe = d(() => {
      var e;
      return (e = E == null ? void 0 : E.statusIcon) != null ? e : !1;
    }), _ = d(() => (v == null ? void 0 : v.validateState) || ""), ve = d(() => _.value && ft[_.value]), Oe = d(() => H.value ? vt : mt), De = d(() => [
      c.style,
      n.inputStyle
    ]), me = d(() => [
      n.inputStyle,
      Q.value,
      { resize: n.resize }
    ]), C = d(() => yt(n.modelValue) ? "" : String(n.modelValue)), K = d(() => n.clearable && !$.value && !n.readonly && !!C.value && (A.value || J.value)), G = d(() => n.showPassword && !$.value && !n.readonly && !!C.value && (!!C.value || A.value)), k = d(() => n.showWordLimit && !!y.value.maxlength && (n.type === "text" || n.type === "textarea") && !$.value && !n.readonly && !n.showPassword), ee = d(() => Array.from(C.value).length), He = d(() => !!k.value && ee.value > Number(y.value.maxlength)), Ke = d(() => !!h.suffix || !!n.suffixIcon || K.value || n.showPassword || k.value || !!_.value && fe.value), [Ue, je] = At(D);
    ht(P, (e) => {
      if (!k.value || n.resize !== "both")
        return;
      const i = e[0], { width: S } = i.contentRect;
      pe.value = {
        right: `calc(100% - ${S + 15 + 6}px)`
      };
    });
    const U = () => {
      const { type: e, autosize: i } = n;
      if (!(!wt || e !== "textarea"))
        if (i) {
          const S = ke(i) ? i.minRows : void 0, z = ke(i) ? i.maxRows : void 0;
          Q.value = {
            ...Ne(P.value, S, z)
          };
        } else
          Q.value = {
            minHeight: Ne(P.value).minHeight
          };
    }, L = () => {
      const e = F.value;
      !e || e.value === C.value || (e.value = C.value);
    }, ye = (e) => {
      const { el: i } = u.vnode;
      if (!i)
        return;
      const z = Array.from(i.querySelectorAll(`.${r.e(e)}`)).find((Je) => Je.parentNode === i);
      if (!z)
        return;
      const ze = l[e];
      h[ze] ? z.style.transform = `translateX(${e === "suffix" ? "-" : ""}${i.querySelector(`.${r.be("group", ze)}`).offsetWidth}px)` : z.removeAttribute("style");
    }, te = () => {
      ye("prefix"), ye("suffix");
    }, oe = async (e) => {
      Ue();
      let { value: i } = e.target;
      if (n.formatter && (i = n.parser ? n.parser(i) : i, i = n.formatter(i)), !T.value) {
        if (i === C.value) {
          L();
          return;
        }
        s(re, i), s("input", i), await N(), L(), je();
      }
    }, he = (e) => {
      s("change", e.target.value);
    }, be = (e) => {
      s("compositionstart", e), T.value = !0;
    }, ge = (e) => {
      var i;
      s("compositionupdate", e);
      const S = (i = e.target) == null ? void 0 : i.value, z = S[S.length - 1] || "";
      T.value = !St(z);
    }, we = (e) => {
      s("compositionend", e), T.value && (T.value = !1, oe(e));
    }, We = () => {
      H.value = !H.value, xe();
    }, xe = async () => {
      var e;
      await N(), (e = F.value) == null || e.focus();
    }, qe = () => {
      var e;
      return (e = F.value) == null ? void 0 : e.blur();
    }, Se = (e) => {
      A.value = !0, s("focus", e);
    }, Ie = (e) => {
      var i;
      A.value = !1, s("blur", e), n.validateEvent && ((i = v == null ? void 0 : v.validate) == null || i.call(v, "blur").catch((S) => Y(S)));
    }, Xe = (e) => {
      J.value = !1, s("mouseleave", e);
    }, Ye = (e) => {
      J.value = !0, s("mouseenter", e);
    }, Ee = (e) => {
      s("keydown", e);
    }, Ze = () => {
      var e;
      (e = F.value) == null || e.select();
    }, Ce = () => {
      s(re, ""), s("change", ""), s("clear"), s("input", "");
    };
    return q(() => n.modelValue, () => {
      var e;
      N(() => U()), n.validateEvent && ((e = v == null ? void 0 : v.validate) == null || e.call(v, "change").catch((i) => Y(i)));
    }), q(C, () => L()), q(() => n.type, async () => {
      await N(), L(), U(), te();
    }), Ve(async () => {
      !n.formatter && n.parser && Y("ElInput", "If you set the parser, you also need to set the formatter."), L(), te(), await N(), U();
    }), tt(async () => {
      await N(), te();
    }), a({
      input: D,
      textarea: P,
      ref: F,
      textareaStyle: me,
      autosize: Ae(n, "autosize"),
      focus: xe,
      blur: qe,
      select: Ze,
      clear: Ce,
      resizeTextarea: U
    }), (e, i) => ot((f(), w("div", X(t(p), {
      class: [
        e.type === "textarea" ? t(de).b() : t(r).b(),
        t(r).m(t(Re)),
        t(r).is("disabled", t($)),
        t(r).is("exceed", t(He)),
        {
          [t(r).b("group")]: e.$slots.prepend || e.$slots.append,
          [t(r).bm("group", "append")]: e.$slots.append,
          [t(r).bm("group", "prepend")]: e.$slots.prepend,
          [t(r).m("prefix")]: e.$slots.prefix || e.prefixIcon,
          [t(r).m("suffix")]: e.$slots.suffix || e.suffixIcon || e.clearable || e.showPassword,
          [t(r).bm("suffix", "password-clear")]: t(K) && t(G)
        },
        e.$attrs.class
      ],
      style: t(De),
      role: e.containerRole,
      onMouseenter: Ye,
      onMouseleave: Xe
    }), [
      m(" input "),
      e.type !== "textarea" ? (f(), w(ae, { key: 0 }, [
        m(" prepend slot "),
        e.$slots.prepend ? (f(), w("div", {
          key: 0,
          class: b(t(r).be("group", "prepend"))
        }, [
          R(e.$slots, "prepend")
        ], 2)) : m("v-if", !0),
        V("div", {
          class: b([t(r).e("wrapper"), t(r).is("focus", A.value)])
        }, [
          m(" prefix slot "),
          e.$slots.prefix || e.prefixIcon ? (f(), w("span", {
            key: 0,
            class: b(t(r).e("prefix"))
          }, [
            V("span", {
              class: b(t(r).e("prefix-inner"))
            }, [
              R(e.$slots, "prefix"),
              e.prefixIcon ? (f(), I(t(M), {
                key: 0,
                class: b(t(r).e("icon"))
              }, {
                default: B(() => [
                  (f(), I(j(e.prefixIcon)))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0)
            ], 2)
          ], 2)) : m("v-if", !0),
          V("input", X({
            id: t(ce),
            ref_key: "input",
            ref: D,
            class: t(r).e("inner")
          }, t(y), {
            type: e.showPassword ? H.value ? "text" : "password" : e.type,
            disabled: t($),
            formatter: e.formatter,
            parser: e.parser,
            readonly: e.readonly,
            autocomplete: e.autocomplete,
            tabindex: e.tabindex,
            "aria-label": e.label,
            placeholder: e.placeholder,
            style: e.inputStyle,
            onCompositionstart: be,
            onCompositionupdate: ge,
            onCompositionend: we,
            onInput: oe,
            onFocus: Se,
            onBlur: Ie,
            onChange: he,
            onKeydown: Ee
          }), null, 16, Kt),
          m(" suffix slot "),
          t(Ke) ? (f(), w("span", {
            key: 1,
            class: b(t(r).e("suffix"))
          }, [
            V("span", {
              class: b(t(r).e("suffix-inner"))
            }, [
              !t(K) || !t(G) || !t(k) ? (f(), w(ae, { key: 0 }, [
                R(e.$slots, "suffix"),
                e.suffixIcon ? (f(), I(t(M), {
                  key: 0,
                  class: b(t(r).e("icon"))
                }, {
                  default: B(() => [
                    (f(), I(j(e.suffixIcon)))
                  ]),
                  _: 1
                }, 8, ["class"])) : m("v-if", !0)
              ], 64)) : m("v-if", !0),
              t(K) ? (f(), I(t(M), {
                key: 1,
                class: b([t(r).e("icon"), t(r).e("clear")]),
                onMousedown: nt(t(bt), ["prevent"]),
                onClick: Ce
              }, {
                default: B(() => [
                  at(t(gt))
                ]),
                _: 1
              }, 8, ["class", "onMousedown"])) : m("v-if", !0),
              t(G) ? (f(), I(t(M), {
                key: 2,
                class: b([t(r).e("icon"), t(r).e("password")]),
                onClick: We
              }, {
                default: B(() => [
                  (f(), I(j(t(Oe))))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0),
              t(k) ? (f(), w("span", {
                key: 3,
                class: b(t(r).e("count"))
              }, [
                V("span", {
                  class: b(t(r).e("count-inner"))
                }, W(t(ee)) + " / " + W(t(y).maxlength), 3)
              ], 2)) : m("v-if", !0),
              t(_) && t(ve) && t(fe) ? (f(), I(t(M), {
                key: 4,
                class: b([
                  t(r).e("icon"),
                  t(r).e("validateIcon"),
                  t(r).is("loading", t(_) === "validating")
                ])
              }, {
                default: B(() => [
                  (f(), I(j(t(ve))))
                ]),
                _: 1
              }, 8, ["class"])) : m("v-if", !0)
            ], 2)
          ], 2)) : m("v-if", !0)
        ], 2),
        m(" append slot "),
        e.$slots.append ? (f(), w("div", {
          key: 1,
          class: b(t(r).be("group", "append"))
        }, [
          R(e.$slots, "append")
        ], 2)) : m("v-if", !0)
      ], 64)) : (f(), w(ae, { key: 1 }, [
        m(" textarea "),
        V("textarea", X({
          id: t(ce),
          ref_key: "textarea",
          ref: P,
          class: t(de).e("inner")
        }, t(y), {
          tabindex: e.tabindex,
          disabled: t($),
          readonly: e.readonly,
          autocomplete: e.autocomplete,
          style: t(me),
          "aria-label": e.label,
          placeholder: e.placeholder,
          onCompositionstart: be,
          onCompositionupdate: ge,
          onCompositionend: we,
          onInput: oe,
          onFocus: Se,
          onBlur: Ie,
          onChange: he,
          onKeydown: Ee
        }), null, 16, Ut),
        t(k) ? (f(), w("span", {
          key: 0,
          style: st(pe.value),
          class: b(t(r).e("count"))
        }, W(t(ee)) + " / " + W(t(y).maxlength), 7)) : m("v-if", !0)
      ], 64))
    ], 16, Ht)), [
      [lt, e.type !== "hidden"]
    ]);
  }
});
var qt = /* @__PURE__ */ Le(Wt, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);
const Qt = Be(qt);
export {
  Zt as C,
  Qt as E,
  re as U,
  M as a,
  xt as b,
  Jt as c,
  kt as d,
  Nt as e,
  Pt as f,
  St as i,
  $t as u
};
