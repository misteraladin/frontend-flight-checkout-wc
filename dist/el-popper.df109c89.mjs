import { getCurrentInstance as $n, computed as k, watch as F, onMounted as ke, onBeforeUnmount as he, onBeforeMount as Mn, unref as b, provide as le, ref as R, defineComponent as te, renderSlot as U, inject as ue, openBlock as K, createElementBlock as $e, normalizeClass as Xe, withDirectives as on, cloneVNode as Fn, Fragment as Dn, Text as jn, Comment as xn, createVNode as Me, createBlock as ge, mergeProps as pt, withCtx as X, createCommentVNode as se, nextTick as _t, toRefs as Hn, normalizeStyle as Kn, resolveComponent as Te, Teleport as Wn, Transition as Un, vShow as Vn, toRef as at, readonly as zn, onDeactivated as qn, toDisplayString as st, createTextVNode as Jn } from "vue";
import { b as rn, h as _, x as Ue, s as ve, y as qe, z as Zn, g as H, u as Yn, _ as Z, i as Re, N as lt, d as Je, t as Gn, A as an, B as Ze, p as ct, n as Xn, c as Lt, w as ft, C as Qn, D as eo, j as $t, e as to, m as no, k as oo, E as ro } from "./plugin-vue_export-helper.60902f82.mjs";
const oe = (e, t, { checkForDefaultPrevented: n = !0 } = {}) => (r) => {
  const i = e == null ? void 0 : e(r);
  if (n === !1 || !i)
    return t == null ? void 0 : t(r);
}, Ye = {
  tab: "Tab",
  enter: "Enter",
  space: "Space",
  left: "ArrowLeft",
  up: "ArrowUp",
  right: "ArrowRight",
  down: "ArrowDown",
  esc: "Escape",
  delete: "Delete",
  backspace: "Backspace",
  numpadEnter: "NumpadEnter",
  pageUp: "PageUp",
  pageDown: "PageDown",
  home: "Home",
  end: "End"
}, io = () => Math.floor(Math.random() * 1e4), dt = Symbol("popper"), sn = Symbol("popperContent"), ao = rn({
  type: _(Boolean),
  default: null
}), so = rn({
  type: _(Function)
}), lo = (e) => {
  const t = `update:${e}`, n = `onUpdate:${e}`, o = [t], r = {
    [e]: ao,
    [n]: so
  };
  return {
    useModelToggle: ({
      indicator: a,
      toggleReason: s,
      shouldHideWhenRouteChanges: l,
      shouldProceed: u,
      onShow: f,
      onHide: m
    }) => {
      const g = $n(), { emit: p } = g, d = g.props, v = k(() => Ue(d[n])), h = k(() => d[e] === null), c = (w) => {
        a.value !== !0 && (a.value = !0, s && (s.value = w), Ue(f) && f(w));
      }, y = (w) => {
        a.value !== !1 && (a.value = !1, s && (s.value = w), Ue(m) && m(w));
      }, T = (w) => {
        if (d.disabled === !0 || Ue(u) && !u())
          return;
        const A = v.value && ve;
        A && p(t, !0), (h.value || !A) && c(w);
      }, E = (w) => {
        if (d.disabled === !0 || !ve)
          return;
        const A = v.value && ve;
        A && p(t, !1), (h.value || !A) && y(w);
      }, S = (w) => {
        !qe(w) || (d.disabled && w ? v.value && p(t, !1) : a.value !== w && (w ? c() : y()));
      }, C = () => {
        a.value ? E() : T();
      };
      return F(() => d[e], S), l && g.appContext.config.globalProperties.$route !== void 0 && F(() => ({
        ...g.proxy.$route
      }), () => {
        l.value && a.value && E();
      }), ke(() => {
        S(d[e]);
      }), {
        hide: E,
        show: T,
        toggle: C,
        hasUpdateHandler: v
      };
    },
    useModelToggleProps: r,
    useModelToggleEmits: o
  };
};
function uo() {
  let e;
  const t = (o, r) => {
    n(), e = window.setTimeout(o, r);
  }, n = () => window.clearTimeout(e);
  return Zn(() => n()), {
    registerTimeout: t,
    cancelTimeout: n
  };
}
let Oe = [];
const Mt = (e) => {
  const t = e;
  t.key === Ye.esc && Oe.forEach((n) => n(t));
}, po = (e) => {
  ke(() => {
    Oe.length === 0 && document.addEventListener("keydown", Mt), ve && Oe.push(e);
  }), he(() => {
    Oe = Oe.filter((t) => t !== e), Oe.length === 0 && ve && document.removeEventListener("keydown", Mt);
  });
};
let Ft;
const ln = `el-popper-container-${io()}`, un = `#${ln}`, co = () => {
  const e = document.createElement("div");
  return e.id = ln, document.body.appendChild(e), e;
}, fo = () => {
  Mn(() => {
    !ve || (process.env.NODE_ENV === "test" || !Ft || !document.body.querySelector(un)) && (Ft = co());
  });
}, vo = H({
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  }
}), mo = ({
  showAfter: e,
  hideAfter: t,
  open: n,
  close: o
}) => {
  const { registerTimeout: r } = uo();
  return {
    onOpen: (s) => {
      r(() => {
        n(s);
      }, b(e));
    },
    onClose: (s) => {
      r(() => {
        o(s);
      }, b(t));
    }
  };
}, pn = Symbol("elForwardRef"), go = (e) => {
  le(pn, {
    setForwardRef: (n) => {
      e.value = n;
    }
  });
}, ho = (e) => ({
  mounted(t) {
    e(t);
  },
  updated(t) {
    e(t);
  },
  unmounted() {
    e(null);
  }
}), Dt = R(0), bo = () => {
  const e = Yn("zIndex", 2e3), t = k(() => e.value + Dt.value);
  return {
    initialZIndex: e,
    currentZIndex: t,
    nextZIndex: () => (Dt.value++, t.value)
  };
}, yo = [
  "dialog",
  "grid",
  "listbox",
  "menu",
  "tooltip",
  "tree"
], cn = H({
  role: {
    type: String,
    values: yo,
    default: "tooltip"
  }
}), wo = {
  name: "ElPopperRoot",
  inheritAttrs: !1
}, Eo = /* @__PURE__ */ te({
  ...wo,
  props: cn,
  setup(e, { expose: t }) {
    const n = e, o = R(), r = R(), i = R(), a = R(), s = k(() => n.role), l = {
      triggerRef: o,
      popperInstanceRef: r,
      contentRef: i,
      referenceRef: a,
      role: s
    };
    return t(l), le(dt, l), (u, f) => U(u.$slots, "default");
  }
});
var Oo = /* @__PURE__ */ Z(Eo, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/popper.vue"]]);
const fn = H({
  arrowOffset: {
    type: Number,
    default: 5
  }
}), To = {
  name: "ElPopperArrow",
  inheritAttrs: !1
}, Co = /* @__PURE__ */ te({
  ...To,
  props: fn,
  setup(e, { expose: t }) {
    const n = e, o = Re("popper"), { arrowOffset: r, arrowRef: i } = ue(sn, void 0);
    return F(() => n.arrowOffset, (a) => {
      r.value = a;
    }), he(() => {
      i.value = void 0;
    }), t({
      arrowRef: i
    }), (a, s) => (K(), $e("span", {
      ref_key: "arrowRef",
      ref: i,
      class: Xe(b(o).e("arrow")),
      "data-popper-arrow": ""
    }, null, 2));
  }
});
var Ao = /* @__PURE__ */ Z(Co, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/arrow.vue"]]);
const nt = "ElOnlyChild", So = te({
  name: nt,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    var o;
    const r = ue(pn), i = ho((o = r == null ? void 0 : r.setForwardRef) != null ? o : lt);
    return () => {
      var a;
      const s = (a = t.default) == null ? void 0 : a.call(t, n);
      if (!s)
        return null;
      if (s.length > 1)
        return Je(nt, "requires exact only one valid child."), null;
      const l = dn(s);
      return l ? on(Fn(l, n), [[i]]) : (Je(nt, "no valid child node found"), null);
    };
  }
});
function dn(e) {
  if (!e)
    return null;
  const t = e;
  for (const n of t) {
    if (Gn(n))
      switch (n.type) {
        case xn:
          continue;
        case jn:
        case "svg":
          return jt(n);
        case Dn:
          return dn(n.children);
        default:
          return n;
      }
    return jt(n);
  }
  return null;
}
function jt(e) {
  const t = Re("only-child");
  return Me("span", {
    class: t.e("content")
  }, [e]);
}
const vn = H({
  virtualRef: {
    type: _(Object)
  },
  virtualTriggering: Boolean,
  onMouseenter: Function,
  onMouseleave: Function,
  onClick: Function,
  onKeydown: Function,
  onFocus: Function,
  onBlur: Function,
  onContextmenu: Function,
  id: String,
  open: Boolean
}), Po = {
  name: "ElPopperTrigger",
  inheritAttrs: !1
}, Io = /* @__PURE__ */ te({
  ...Po,
  props: vn,
  setup(e, { expose: t }) {
    const n = e, { role: o, triggerRef: r } = ue(dt, void 0);
    go(r);
    const i = k(() => s.value ? n.id : void 0), a = k(() => {
      if (o && o.value === "tooltip")
        return n.open && n.id ? n.id : void 0;
    }), s = k(() => {
      if (o && o.value !== "tooltip")
        return o.value;
    }), l = k(() => s.value ? `${n.open}` : void 0);
    let u;
    return ke(() => {
      F(() => n.virtualRef, (f) => {
        f && (r.value = an(f));
      }, {
        immediate: !0
      }), F(() => r.value, (f, m) => {
        u == null || u(), u = void 0, Ze(f) && ([
          "onMouseenter",
          "onMouseleave",
          "onClick",
          "onKeydown",
          "onFocus",
          "onBlur",
          "onContextmenu"
        ].forEach((g) => {
          var p;
          const d = n[g];
          d && (f.addEventListener(g.slice(2).toLowerCase(), d), (p = m == null ? void 0 : m.removeEventListener) == null || p.call(m, g.slice(2).toLowerCase(), d));
        }), u = F([i, a, s, l], (g) => {
          [
            "aria-controls",
            "aria-describedby",
            "aria-haspopup",
            "aria-expanded"
          ].forEach((p, d) => {
            ct(g[d]) ? f.removeAttribute(p) : f.setAttribute(p, g[d]);
          });
        }, { immediate: !0 })), Ze(m) && [
          "aria-controls",
          "aria-describedby",
          "aria-haspopup",
          "aria-expanded"
        ].forEach((g) => m.removeAttribute(g));
      }, {
        immediate: !0
      });
    }), he(() => {
      u == null || u(), u = void 0;
    }), t({
      triggerRef: r
    }), (f, m) => f.virtualTriggering ? se("v-if", !0) : (K(), ge(b(So), pt({ key: 0 }, f.$attrs, {
      "aria-controls": b(i),
      "aria-describedby": b(a),
      "aria-expanded": b(l),
      "aria-haspopup": b(s)
    }), {
      default: X(() => [
        U(f.$slots, "default")
      ]),
      _: 3
    }, 16, ["aria-controls", "aria-describedby", "aria-expanded", "aria-haspopup"]));
  }
});
var ko = /* @__PURE__ */ Z(Io, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/trigger.vue"]]), j = "top", V = "bottom", z = "right", x = "left", vt = "auto", xe = [j, V, z, x], Ce = "start", Fe = "end", Ro = "clippingParents", mn = "viewport", Be = "popper", No = "reference", xt = xe.reduce(function(e, t) {
  return e.concat([t + "-" + Ce, t + "-" + Fe]);
}, []), mt = [].concat(xe, [vt]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Ce, t + "-" + Fe]);
}, []), Bo = "beforeRead", _o = "read", Lo = "afterRead", $o = "beforeMain", Mo = "main", Fo = "afterMain", Do = "beforeWrite", jo = "write", xo = "afterWrite", Ho = [Bo, _o, Lo, $o, Mo, Fo, Do, jo, xo];
function ee(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function Y(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Ae(e) {
  var t = Y(e).Element;
  return e instanceof t || e instanceof Element;
}
function W(e) {
  var t = Y(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function gt(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = Y(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function Ko(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var o = t.styles[n] || {}, r = t.attributes[n] || {}, i = t.elements[n];
    !W(i) || !ee(i) || (Object.assign(i.style, o), Object.keys(r).forEach(function(a) {
      var s = r[a];
      s === !1 ? i.removeAttribute(a) : i.setAttribute(a, s === !0 ? "" : s);
    }));
  });
}
function Wo(e) {
  var t = e.state, n = { popper: { position: t.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(o) {
      var r = t.elements[o], i = t.attributes[o] || {}, a = Object.keys(t.styles.hasOwnProperty(o) ? t.styles[o] : n[o]), s = a.reduce(function(l, u) {
        return l[u] = "", l;
      }, {});
      !W(r) || !ee(r) || (Object.assign(r.style, s), Object.keys(i).forEach(function(l) {
        r.removeAttribute(l);
      }));
    });
  };
}
var gn = { name: "applyStyles", enabled: !0, phase: "write", fn: Ko, effect: Wo, requires: ["computeStyles"] };
function Q(e) {
  return e.split("-")[0];
}
var me = Math.max, Ge = Math.min, Se = Math.round;
function Pe(e, t) {
  t === void 0 && (t = !1);
  var n = e.getBoundingClientRect(), o = 1, r = 1;
  if (W(e) && t) {
    var i = e.offsetHeight, a = e.offsetWidth;
    a > 0 && (o = Se(n.width) / a || 1), i > 0 && (r = Se(n.height) / i || 1);
  }
  return { width: n.width / o, height: n.height / r, top: n.top / r, right: n.right / o, bottom: n.bottom / r, left: n.left / o, x: n.left / o, y: n.top / r };
}
function ht(e) {
  var t = Pe(e), n = e.offsetWidth, o = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - o) <= 1 && (o = t.height), { x: e.offsetLeft, y: e.offsetTop, width: n, height: o };
}
function hn(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && gt(n)) {
    var o = t;
    do {
      if (o && e.isSameNode(o))
        return !0;
      o = o.parentNode || o.host;
    } while (o);
  }
  return !1;
}
function re(e) {
  return Y(e).getComputedStyle(e);
}
function Uo(e) {
  return ["table", "td", "th"].indexOf(ee(e)) >= 0;
}
function pe(e) {
  return ((Ae(e) ? e.ownerDocument : e.document) || window.document).documentElement;
}
function Qe(e) {
  return ee(e) === "html" ? e : e.assignedSlot || e.parentNode || (gt(e) ? e.host : null) || pe(e);
}
function Ht(e) {
  return !W(e) || re(e).position === "fixed" ? null : e.offsetParent;
}
function Vo(e) {
  var t = navigator.userAgent.toLowerCase().indexOf("firefox") !== -1, n = navigator.userAgent.indexOf("Trident") !== -1;
  if (n && W(e)) {
    var o = re(e);
    if (o.position === "fixed")
      return null;
  }
  var r = Qe(e);
  for (gt(r) && (r = r.host); W(r) && ["html", "body"].indexOf(ee(r)) < 0; ) {
    var i = re(r);
    if (i.transform !== "none" || i.perspective !== "none" || i.contain === "paint" || ["transform", "perspective"].indexOf(i.willChange) !== -1 || t && i.willChange === "filter" || t && i.filter && i.filter !== "none")
      return r;
    r = r.parentNode;
  }
  return null;
}
function He(e) {
  for (var t = Y(e), n = Ht(e); n && Uo(n) && re(n).position === "static"; )
    n = Ht(n);
  return n && (ee(n) === "html" || ee(n) === "body" && re(n).position === "static") ? t : n || Vo(e) || t;
}
function bt(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function _e(e, t, n) {
  return me(e, Ge(t, n));
}
function zo(e, t, n) {
  var o = _e(e, t, n);
  return o > n ? n : o;
}
function bn() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function yn(e) {
  return Object.assign({}, bn(), e);
}
function wn(e, t) {
  return t.reduce(function(n, o) {
    return n[o] = e, n;
  }, {});
}
var qo = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, { placement: t.placement })) : e, yn(typeof e != "number" ? e : wn(e, xe));
};
function Jo(e) {
  var t, n = e.state, o = e.name, r = e.options, i = n.elements.arrow, a = n.modifiersData.popperOffsets, s = Q(n.placement), l = bt(s), u = [x, z].indexOf(s) >= 0, f = u ? "height" : "width";
  if (!(!i || !a)) {
    var m = qo(r.padding, n), g = ht(i), p = l === "y" ? j : x, d = l === "y" ? V : z, v = n.rects.reference[f] + n.rects.reference[l] - a[l] - n.rects.popper[f], h = a[l] - n.rects.reference[l], c = He(i), y = c ? l === "y" ? c.clientHeight || 0 : c.clientWidth || 0 : 0, T = v / 2 - h / 2, E = m[p], S = y - g[f] - m[d], C = y / 2 - g[f] / 2 + T, w = _e(E, C, S), A = l;
    n.modifiersData[o] = (t = {}, t[A] = w, t.centerOffset = w - C, t);
  }
}
function Zo(e) {
  var t = e.state, n = e.options, o = n.element, r = o === void 0 ? "[data-popper-arrow]" : o;
  r != null && (typeof r == "string" && (r = t.elements.popper.querySelector(r), !r) || !hn(t.elements.popper, r) || (t.elements.arrow = r));
}
var Yo = { name: "arrow", enabled: !0, phase: "main", fn: Jo, effect: Zo, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
function Ie(e) {
  return e.split("-")[1];
}
var Go = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function Xo(e) {
  var t = e.x, n = e.y, o = window, r = o.devicePixelRatio || 1;
  return { x: Se(t * r) / r || 0, y: Se(n * r) / r || 0 };
}
function Kt(e) {
  var t, n = e.popper, o = e.popperRect, r = e.placement, i = e.variation, a = e.offsets, s = e.position, l = e.gpuAcceleration, u = e.adaptive, f = e.roundOffsets, m = e.isFixed, g = a.x, p = g === void 0 ? 0 : g, d = a.y, v = d === void 0 ? 0 : d, h = typeof f == "function" ? f({ x: p, y: v }) : { x: p, y: v };
  p = h.x, v = h.y;
  var c = a.hasOwnProperty("x"), y = a.hasOwnProperty("y"), T = x, E = j, S = window;
  if (u) {
    var C = He(n), w = "clientHeight", A = "clientWidth";
    if (C === Y(n) && (C = pe(n), re(C).position !== "static" && s === "absolute" && (w = "scrollHeight", A = "scrollWidth")), C = C, r === j || (r === x || r === z) && i === Fe) {
      E = V;
      var B = m && C === S && S.visualViewport ? S.visualViewport.height : C[w];
      v -= B - o.height, v *= l ? 1 : -1;
    }
    if (r === x || (r === j || r === V) && i === Fe) {
      T = z;
      var $ = m && C === S && S.visualViewport ? S.visualViewport.width : C[A];
      p -= $ - o.width, p *= l ? 1 : -1;
    }
  }
  var L = Object.assign({ position: s }, u && Go), D = f === !0 ? Xo({ x: p, y: v }) : { x: p, y: v };
  if (p = D.x, v = D.y, l) {
    var M;
    return Object.assign({}, L, (M = {}, M[E] = y ? "0" : "", M[T] = c ? "0" : "", M.transform = (S.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + v + "px)" : "translate3d(" + p + "px, " + v + "px, 0)", M));
  }
  return Object.assign({}, L, (t = {}, t[E] = y ? v + "px" : "", t[T] = c ? p + "px" : "", t.transform = "", t));
}
function Qo(e) {
  var t = e.state, n = e.options, o = n.gpuAcceleration, r = o === void 0 ? !0 : o, i = n.adaptive, a = i === void 0 ? !0 : i, s = n.roundOffsets, l = s === void 0 ? !0 : s, u = { placement: Q(t.placement), variation: Ie(t.placement), popper: t.elements.popper, popperRect: t.rects.popper, gpuAcceleration: r, isFixed: t.options.strategy === "fixed" };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Kt(Object.assign({}, u, { offsets: t.modifiersData.popperOffsets, position: t.options.strategy, adaptive: a, roundOffsets: l })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Kt(Object.assign({}, u, { offsets: t.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: l })))), t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-placement": t.placement });
}
var En = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: Qo, data: {} }, Ve = { passive: !0 };
function er(e) {
  var t = e.state, n = e.instance, o = e.options, r = o.scroll, i = r === void 0 ? !0 : r, a = o.resize, s = a === void 0 ? !0 : a, l = Y(t.elements.popper), u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return i && u.forEach(function(f) {
    f.addEventListener("scroll", n.update, Ve);
  }), s && l.addEventListener("resize", n.update, Ve), function() {
    i && u.forEach(function(f) {
      f.removeEventListener("scroll", n.update, Ve);
    }), s && l.removeEventListener("resize", n.update, Ve);
  };
}
var On = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
}, effect: er, data: {} }, tr = { left: "right", right: "left", bottom: "top", top: "bottom" };
function ze(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return tr[t];
  });
}
var nr = { start: "end", end: "start" };
function Wt(e) {
  return e.replace(/start|end/g, function(t) {
    return nr[t];
  });
}
function yt(e) {
  var t = Y(e), n = t.pageXOffset, o = t.pageYOffset;
  return { scrollLeft: n, scrollTop: o };
}
function wt(e) {
  return Pe(pe(e)).left + yt(e).scrollLeft;
}
function or(e) {
  var t = Y(e), n = pe(e), o = t.visualViewport, r = n.clientWidth, i = n.clientHeight, a = 0, s = 0;
  return o && (r = o.width, i = o.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = o.offsetLeft, s = o.offsetTop)), { width: r, height: i, x: a + wt(e), y: s };
}
function rr(e) {
  var t, n = pe(e), o = yt(e), r = (t = e.ownerDocument) == null ? void 0 : t.body, i = me(n.scrollWidth, n.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0), a = me(n.scrollHeight, n.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0), s = -o.scrollLeft + wt(e), l = -o.scrollTop;
  return re(r || n).direction === "rtl" && (s += me(n.clientWidth, r ? r.clientWidth : 0) - i), { width: i, height: a, x: s, y: l };
}
function Et(e) {
  var t = re(e), n = t.overflow, o = t.overflowX, r = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + r + o);
}
function Tn(e) {
  return ["html", "body", "#document"].indexOf(ee(e)) >= 0 ? e.ownerDocument.body : W(e) && Et(e) ? e : Tn(Qe(e));
}
function Le(e, t) {
  var n;
  t === void 0 && (t = []);
  var o = Tn(e), r = o === ((n = e.ownerDocument) == null ? void 0 : n.body), i = Y(o), a = r ? [i].concat(i.visualViewport || [], Et(o) ? o : []) : o, s = t.concat(a);
  return r ? s : s.concat(Le(Qe(a)));
}
function ut(e) {
  return Object.assign({}, e, { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function ir(e) {
  var t = Pe(e);
  return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Ut(e, t) {
  return t === mn ? ut(or(e)) : Ae(t) ? ir(t) : ut(rr(pe(e)));
}
function ar(e) {
  var t = Le(Qe(e)), n = ["absolute", "fixed"].indexOf(re(e).position) >= 0, o = n && W(e) ? He(e) : e;
  return Ae(o) ? t.filter(function(r) {
    return Ae(r) && hn(r, o) && ee(r) !== "body";
  }) : [];
}
function sr(e, t, n) {
  var o = t === "clippingParents" ? ar(e) : [].concat(t), r = [].concat(o, [n]), i = r[0], a = r.reduce(function(s, l) {
    var u = Ut(e, l);
    return s.top = me(u.top, s.top), s.right = Ge(u.right, s.right), s.bottom = Ge(u.bottom, s.bottom), s.left = me(u.left, s.left), s;
  }, Ut(e, i));
  return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a;
}
function Cn(e) {
  var t = e.reference, n = e.element, o = e.placement, r = o ? Q(o) : null, i = o ? Ie(o) : null, a = t.x + t.width / 2 - n.width / 2, s = t.y + t.height / 2 - n.height / 2, l;
  switch (r) {
    case j:
      l = { x: a, y: t.y - n.height };
      break;
    case V:
      l = { x: a, y: t.y + t.height };
      break;
    case z:
      l = { x: t.x + t.width, y: s };
      break;
    case x:
      l = { x: t.x - n.width, y: s };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var u = r ? bt(r) : null;
  if (u != null) {
    var f = u === "y" ? "height" : "width";
    switch (i) {
      case Ce:
        l[u] = l[u] - (t[f] / 2 - n[f] / 2);
        break;
      case Fe:
        l[u] = l[u] + (t[f] / 2 - n[f] / 2);
        break;
    }
  }
  return l;
}
function De(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = o === void 0 ? e.placement : o, i = n.boundary, a = i === void 0 ? Ro : i, s = n.rootBoundary, l = s === void 0 ? mn : s, u = n.elementContext, f = u === void 0 ? Be : u, m = n.altBoundary, g = m === void 0 ? !1 : m, p = n.padding, d = p === void 0 ? 0 : p, v = yn(typeof d != "number" ? d : wn(d, xe)), h = f === Be ? No : Be, c = e.rects.popper, y = e.elements[g ? h : f], T = sr(Ae(y) ? y : y.contextElement || pe(e.elements.popper), a, l), E = Pe(e.elements.reference), S = Cn({ reference: E, element: c, strategy: "absolute", placement: r }), C = ut(Object.assign({}, c, S)), w = f === Be ? C : E, A = { top: T.top - w.top + v.top, bottom: w.bottom - T.bottom + v.bottom, left: T.left - w.left + v.left, right: w.right - T.right + v.right }, B = e.modifiersData.offset;
  if (f === Be && B) {
    var $ = B[r];
    Object.keys(A).forEach(function(L) {
      var D = [z, V].indexOf(L) >= 0 ? 1 : -1, M = [j, V].indexOf(L) >= 0 ? "y" : "x";
      A[L] += $[M] * D;
    });
  }
  return A;
}
function lr(e, t) {
  t === void 0 && (t = {});
  var n = t, o = n.placement, r = n.boundary, i = n.rootBoundary, a = n.padding, s = n.flipVariations, l = n.allowedAutoPlacements, u = l === void 0 ? mt : l, f = Ie(o), m = f ? s ? xt : xt.filter(function(d) {
    return Ie(d) === f;
  }) : xe, g = m.filter(function(d) {
    return u.indexOf(d) >= 0;
  });
  g.length === 0 && (g = m);
  var p = g.reduce(function(d, v) {
    return d[v] = De(e, { placement: v, boundary: r, rootBoundary: i, padding: a })[Q(v)], d;
  }, {});
  return Object.keys(p).sort(function(d, v) {
    return p[d] - p[v];
  });
}
function ur(e) {
  if (Q(e) === vt)
    return [];
  var t = ze(e);
  return [Wt(e), t, Wt(t)];
}
function pr(e) {
  var t = e.state, n = e.options, o = e.name;
  if (!t.modifiersData[o]._skip) {
    for (var r = n.mainAxis, i = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !0 : a, l = n.fallbackPlacements, u = n.padding, f = n.boundary, m = n.rootBoundary, g = n.altBoundary, p = n.flipVariations, d = p === void 0 ? !0 : p, v = n.allowedAutoPlacements, h = t.options.placement, c = Q(h), y = c === h, T = l || (y || !d ? [ze(h)] : ur(h)), E = [h].concat(T).reduce(function(fe, ne) {
      return fe.concat(Q(ne) === vt ? lr(t, { placement: ne, boundary: f, rootBoundary: m, padding: u, flipVariations: d, allowedAutoPlacements: v }) : ne);
    }, []), S = t.rects.reference, C = t.rects.popper, w = /* @__PURE__ */ new Map(), A = !0, B = E[0], $ = 0; $ < E.length; $++) {
      var L = E[$], D = Q(L), M = Ie(L) === Ce, O = [j, V].indexOf(D) >= 0, P = O ? "width" : "height", I = De(t, { placement: L, boundary: f, rootBoundary: m, altBoundary: g, padding: u }), N = O ? M ? z : x : M ? V : j;
      S[P] > C[P] && (N = ze(N));
      var G = ze(N), q = [];
      if (i && q.push(I[D] <= 0), s && q.push(I[N] <= 0, I[G] <= 0), q.every(function(fe) {
        return fe;
      })) {
        B = L, A = !1;
        break;
      }
      w.set(L, q);
    }
    if (A)
      for (var be = d ? 3 : 1, ye = function(fe) {
        var ne = E.find(function(Ke) {
          var Ne = w.get(Ke);
          if (Ne)
            return Ne.slice(0, fe).every(function(we) {
              return we;
            });
        });
        if (ne)
          return B = ne, "break";
      }, ie = be; ie > 0; ie--) {
        var ce = ye(ie);
        if (ce === "break")
          break;
      }
    t.placement !== B && (t.modifiersData[o]._skip = !0, t.placement = B, t.reset = !0);
  }
}
var cr = { name: "flip", enabled: !0, phase: "main", fn: pr, requiresIfExists: ["offset"], data: { _skip: !1 } };
function Vt(e, t, n) {
  return n === void 0 && (n = { x: 0, y: 0 }), { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function zt(e) {
  return [j, z, V, x].some(function(t) {
    return e[t] >= 0;
  });
}
function fr(e) {
  var t = e.state, n = e.name, o = t.rects.reference, r = t.rects.popper, i = t.modifiersData.preventOverflow, a = De(t, { elementContext: "reference" }), s = De(t, { altBoundary: !0 }), l = Vt(a, o), u = Vt(s, r, i), f = zt(l), m = zt(u);
  t.modifiersData[n] = { referenceClippingOffsets: l, popperEscapeOffsets: u, isReferenceHidden: f, hasPopperEscaped: m }, t.attributes.popper = Object.assign({}, t.attributes.popper, { "data-popper-reference-hidden": f, "data-popper-escaped": m });
}
var dr = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: fr };
function vr(e, t, n) {
  var o = Q(e), r = [x, j].indexOf(o) >= 0 ? -1 : 1, i = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n, a = i[0], s = i[1];
  return a = a || 0, s = (s || 0) * r, [x, z].indexOf(o) >= 0 ? { x: s, y: a } : { x: a, y: s };
}
function mr(e) {
  var t = e.state, n = e.options, o = e.name, r = n.offset, i = r === void 0 ? [0, 0] : r, a = mt.reduce(function(f, m) {
    return f[m] = vr(m, t.rects, i), f;
  }, {}), s = a[t.placement], l = s.x, u = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += u), t.modifiersData[o] = a;
}
var gr = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: mr };
function hr(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = Cn({ reference: t.rects.reference, element: t.rects.popper, strategy: "absolute", placement: t.placement });
}
var An = { name: "popperOffsets", enabled: !0, phase: "read", fn: hr, data: {} };
function br(e) {
  return e === "x" ? "y" : "x";
}
function yr(e) {
  var t = e.state, n = e.options, o = e.name, r = n.mainAxis, i = r === void 0 ? !0 : r, a = n.altAxis, s = a === void 0 ? !1 : a, l = n.boundary, u = n.rootBoundary, f = n.altBoundary, m = n.padding, g = n.tether, p = g === void 0 ? !0 : g, d = n.tetherOffset, v = d === void 0 ? 0 : d, h = De(t, { boundary: l, rootBoundary: u, padding: m, altBoundary: f }), c = Q(t.placement), y = Ie(t.placement), T = !y, E = bt(c), S = br(E), C = t.modifiersData.popperOffsets, w = t.rects.reference, A = t.rects.popper, B = typeof v == "function" ? v(Object.assign({}, t.rects, { placement: t.placement })) : v, $ = typeof B == "number" ? { mainAxis: B, altAxis: B } : Object.assign({ mainAxis: 0, altAxis: 0 }, B), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, D = { x: 0, y: 0 };
  if (C) {
    if (i) {
      var M, O = E === "y" ? j : x, P = E === "y" ? V : z, I = E === "y" ? "height" : "width", N = C[E], G = N + h[O], q = N - h[P], be = p ? -A[I] / 2 : 0, ye = y === Ce ? w[I] : A[I], ie = y === Ce ? -A[I] : -w[I], ce = t.elements.arrow, fe = p && ce ? ht(ce) : { width: 0, height: 0 }, ne = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : bn(), Ke = ne[O], Ne = ne[P], we = _e(0, w[I], fe[I]), In = T ? w[I] / 2 - be - we - Ke - $.mainAxis : ye - we - Ke - $.mainAxis, kn = T ? -w[I] / 2 + be + we + Ne + $.mainAxis : ie + we + Ne + $.mainAxis, et = t.elements.arrow && He(t.elements.arrow), Rn = et ? E === "y" ? et.clientTop || 0 : et.clientLeft || 0 : 0, Ct = (M = L == null ? void 0 : L[E]) != null ? M : 0, Nn = N + In - Ct - Rn, Bn = N + kn - Ct, At = _e(p ? Ge(G, Nn) : G, N, p ? me(q, Bn) : q);
      C[E] = At, D[E] = At - N;
    }
    if (s) {
      var St, _n = E === "x" ? j : x, Ln = E === "x" ? V : z, de = C[S], We = S === "y" ? "height" : "width", Pt = de + h[_n], It = de - h[Ln], tt = [j, x].indexOf(c) !== -1, kt = (St = L == null ? void 0 : L[S]) != null ? St : 0, Rt = tt ? Pt : de - w[We] - A[We] - kt + $.altAxis, Nt = tt ? de + w[We] + A[We] - kt - $.altAxis : It, Bt = p && tt ? zo(Rt, de, Nt) : _e(p ? Rt : Pt, de, p ? Nt : It);
      C[S] = Bt, D[S] = Bt - de;
    }
    t.modifiersData[o] = D;
  }
}
var wr = { name: "preventOverflow", enabled: !0, phase: "main", fn: yr, requiresIfExists: ["offset"] };
function Er(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Or(e) {
  return e === Y(e) || !W(e) ? yt(e) : Er(e);
}
function Tr(e) {
  var t = e.getBoundingClientRect(), n = Se(t.width) / e.offsetWidth || 1, o = Se(t.height) / e.offsetHeight || 1;
  return n !== 1 || o !== 1;
}
function Cr(e, t, n) {
  n === void 0 && (n = !1);
  var o = W(t), r = W(t) && Tr(t), i = pe(t), a = Pe(e, r), s = { scrollLeft: 0, scrollTop: 0 }, l = { x: 0, y: 0 };
  return (o || !o && !n) && ((ee(t) !== "body" || Et(i)) && (s = Or(t)), W(t) ? (l = Pe(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : i && (l.x = wt(i))), { x: a.left + s.scrollLeft - l.x, y: a.top + s.scrollTop - l.y, width: a.width, height: a.height };
}
function Ar(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), o = [];
  e.forEach(function(i) {
    t.set(i.name, i);
  });
  function r(i) {
    n.add(i.name);
    var a = [].concat(i.requires || [], i.requiresIfExists || []);
    a.forEach(function(s) {
      if (!n.has(s)) {
        var l = t.get(s);
        l && r(l);
      }
    }), o.push(i);
  }
  return e.forEach(function(i) {
    n.has(i.name) || r(i);
  }), o;
}
function Sr(e) {
  var t = Ar(e);
  return Ho.reduce(function(n, o) {
    return n.concat(t.filter(function(r) {
      return r.phase === o;
    }));
  }, []);
}
function Pr(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Ir(e) {
  var t = e.reduce(function(n, o) {
    var r = n[o.name];
    return n[o.name] = r ? Object.assign({}, r, o, { options: Object.assign({}, r.options, o.options), data: Object.assign({}, r.data, o.data) }) : o, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var qt = { placement: "bottom", modifiers: [], strategy: "absolute" };
function Jt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(o) {
    return !(o && typeof o.getBoundingClientRect == "function");
  });
}
function Ot(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, o = n === void 0 ? [] : n, r = t.defaultOptions, i = r === void 0 ? qt : r;
  return function(a, s, l) {
    l === void 0 && (l = i);
    var u = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, qt, i), modifiersData: {}, elements: { reference: a, popper: s }, attributes: {}, styles: {} }, f = [], m = !1, g = { state: u, setOptions: function(v) {
      var h = typeof v == "function" ? v(u.options) : v;
      d(), u.options = Object.assign({}, i, u.options, h), u.scrollParents = { reference: Ae(a) ? Le(a) : a.contextElement ? Le(a.contextElement) : [], popper: Le(s) };
      var c = Sr(Ir([].concat(o, u.options.modifiers)));
      return u.orderedModifiers = c.filter(function(y) {
        return y.enabled;
      }), p(), g.update();
    }, forceUpdate: function() {
      if (!m) {
        var v = u.elements, h = v.reference, c = v.popper;
        if (Jt(h, c)) {
          u.rects = { reference: Cr(h, He(c), u.options.strategy === "fixed"), popper: ht(c) }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function(A) {
            return u.modifiersData[A.name] = Object.assign({}, A.data);
          });
          for (var y = 0; y < u.orderedModifiers.length; y++) {
            if (u.reset === !0) {
              u.reset = !1, y = -1;
              continue;
            }
            var T = u.orderedModifiers[y], E = T.fn, S = T.options, C = S === void 0 ? {} : S, w = T.name;
            typeof E == "function" && (u = E({ state: u, options: C, name: w, instance: g }) || u);
          }
        }
      }
    }, update: Pr(function() {
      return new Promise(function(v) {
        g.forceUpdate(), v(u);
      });
    }), destroy: function() {
      d(), m = !0;
    } };
    if (!Jt(a, s))
      return g;
    g.setOptions(l).then(function(v) {
      !m && l.onFirstUpdate && l.onFirstUpdate(v);
    });
    function p() {
      u.orderedModifiers.forEach(function(v) {
        var h = v.name, c = v.options, y = c === void 0 ? {} : c, T = v.effect;
        if (typeof T == "function") {
          var E = T({ state: u, name: h, instance: g, options: y }), S = function() {
          };
          f.push(E || S);
        }
      });
    }
    function d() {
      f.forEach(function(v) {
        return v();
      }), f = [];
    }
    return g;
  };
}
Ot();
var kr = [On, An, En, gn];
Ot({ defaultModifiers: kr });
var Rr = [On, An, En, gn, gr, cr, wr, Yo, dr], Nr = Ot({ defaultModifiers: Rr });
const Sn = (e) => {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (o) => {
      const r = o.tagName === "INPUT" && o.type === "hidden";
      return o.disabled || o.hidden || r ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 || o === document.activeElement ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}, Zt = (e, t) => {
  for (const n of e)
    if (!Br(n, t))
      return n;
}, Br = (e, t) => {
  if (process.env.NODE_ENV === "test")
    return !1;
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}, _r = (e) => {
  const t = Sn(e), n = Zt(t, e), o = Zt(t.reverse(), e);
  return [n, o];
}, Lr = (e) => e instanceof HTMLInputElement && "select" in e, ae = (e, t) => {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Lr(e) && t && e.select();
  }
};
function Yt(e, t) {
  const n = [...e], o = e.indexOf(t);
  return o !== -1 && n.splice(o, 1), n;
}
const $r = () => {
  let e = [];
  return {
    push: (o) => {
      const r = e[0];
      r && o !== r && r.pause(), e = Yt(e, o), e.unshift(o);
    },
    remove: (o) => {
      var r, i;
      e = Yt(e, o), (i = (r = e[0]) == null ? void 0 : r.resume) == null || i.call(r);
    }
  };
}, Mr = (e, t = !1) => {
  const n = document.activeElement;
  for (const o of e)
    if (ae(o, t), document.activeElement !== n)
      return;
}, Gt = $r(), ot = "focus-trap.focus-after-trapped", rt = "focus-trap.focus-after-released", Xt = {
  cancelable: !0,
  bubbles: !1
}, Qt = "focusAfterTrapped", en = "focusAfterReleased", Fr = Symbol("elFocusTrap"), Dr = te({
  name: "ElFocusTrap",
  inheritAttrs: !1,
  props: {
    loop: Boolean,
    trapped: Boolean,
    focusTrapEl: Object,
    focusStartEl: {
      type: [Object, String],
      default: "first"
    }
  },
  emits: [
    Qt,
    en,
    "focusin",
    "focusout",
    "focusout-prevented",
    "release-requested"
  ],
  setup(e, { emit: t }) {
    const n = R();
    let o, r;
    po((p) => {
      e.trapped && !i.paused && t("release-requested", p);
    });
    const i = {
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    }, a = (p) => {
      if (!e.loop && !e.trapped || i.paused)
        return;
      const { key: d, altKey: v, ctrlKey: h, metaKey: c, currentTarget: y, shiftKey: T } = p, { loop: E } = e, S = d === Ye.tab && !v && !h && !c, C = document.activeElement;
      if (S && C) {
        const w = y, [A, B] = _r(w);
        A && B ? !T && C === B ? (p.preventDefault(), E && ae(A, !0), t("focusout-prevented")) : T && [A, w].includes(C) && (p.preventDefault(), E && ae(B, !0), t("focusout-prevented")) : C === w && (p.preventDefault(), t("focusout-prevented"));
      }
    };
    le(Fr, {
      focusTrapRef: n,
      onKeydown: a
    }), F(() => e.focusTrapEl, (p) => {
      p && (n.value = p);
    }, { immediate: !0 }), F([n], ([p], [d]) => {
      p && (p.addEventListener("keydown", a), p.addEventListener("focusin", u), p.addEventListener("focusout", f)), d && (d.removeEventListener("keydown", a), d.removeEventListener("focusin", u), d.removeEventListener("focusout", f));
    });
    const s = (p) => {
      t(Qt, p);
    }, l = (p) => t(en, p), u = (p) => {
      const d = b(n);
      if (!d)
        return;
      const v = p.target, h = v && d.contains(v);
      h && t("focusin", p), !i.paused && e.trapped && (h ? r = v : ae(r, !0));
    }, f = (p) => {
      const d = b(n);
      if (!(i.paused || !d))
        if (e.trapped) {
          const v = p.relatedTarget;
          !ct(v) && !d.contains(v) && setTimeout(() => {
            !i.paused && e.trapped && ae(r, !0);
          }, 0);
        } else {
          const v = p.target;
          v && d.contains(v) || t("focusout", p);
        }
    };
    async function m() {
      await _t();
      const p = b(n);
      if (p) {
        Gt.push(i);
        const d = document.activeElement;
        if (o = d, !p.contains(d)) {
          const h = new Event(ot, Xt);
          p.addEventListener(ot, s), p.dispatchEvent(h), h.defaultPrevented || _t(() => {
            let c = e.focusStartEl;
            Xn(c) || (ae(c), document.activeElement !== c && (c = "first")), c === "first" && Mr(Sn(p), !0), (document.activeElement === d || c === "container") && ae(p);
          });
        }
      }
    }
    function g() {
      const p = b(n);
      if (p) {
        p.removeEventListener(ot, s);
        const d = new Event(rt, Xt);
        p.addEventListener(rt, l), p.dispatchEvent(d), d.defaultPrevented || ae(o != null ? o : document.body, !0), p.removeEventListener(rt, s), Gt.remove(i);
      }
    }
    return ke(() => {
      e.trapped && m(), F(() => e.trapped, (p) => {
        p ? m() : g();
      });
    }), he(() => {
      e.trapped && g();
    }), {
      onKeydown: a
    };
  }
});
function jr(e, t, n, o, r, i) {
  return U(e.$slots, "default", { handleKeydown: e.onKeydown });
}
var xr = /* @__PURE__ */ Z(Dr, [["render", jr], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);
const Hr = ["fixed", "absolute"], Kr = H({
  boundariesPadding: {
    type: Number,
    default: 0
  },
  fallbackPlacements: {
    type: _(Array),
    default: () => []
  },
  gpuAcceleration: {
    type: Boolean,
    default: !0
  },
  offset: {
    type: Number,
    default: 12
  },
  placement: {
    type: String,
    values: mt,
    default: "bottom"
  },
  popperOptions: {
    type: _(Object),
    default: () => ({})
  },
  strategy: {
    type: String,
    values: Hr,
    default: "absolute"
  }
}), Pn = H({
  ...Kr,
  id: String,
  style: { type: _([String, Array, Object]) },
  className: { type: _([String, Array, Object]) },
  effect: {
    type: String,
    default: "dark"
  },
  visible: Boolean,
  enterable: {
    type: Boolean,
    default: !0
  },
  pure: Boolean,
  focusOnShow: {
    type: Boolean,
    default: !1
  },
  trapping: {
    type: Boolean,
    default: !1
  },
  popperClass: {
    type: _([String, Array, Object])
  },
  popperStyle: {
    type: _([String, Array, Object])
  },
  referenceEl: {
    type: _(Object)
  },
  triggerTargetEl: {
    type: _(Object)
  },
  stopPopperMouseEvent: {
    type: Boolean,
    default: !0
  },
  ariaLabel: {
    type: String,
    default: void 0
  },
  virtualTriggering: Boolean,
  zIndex: Number
}), Wr = [
  "mouseenter",
  "mouseleave",
  "focus",
  "blur",
  "close"
], tn = (e, t) => {
  const { placement: n, strategy: o, popperOptions: r } = e, i = {
    placement: n,
    strategy: o,
    ...r,
    modifiers: Vr(e)
  };
  return zr(i, t), qr(i, r == null ? void 0 : r.modifiers), i;
}, Ur = (e) => {
  if (!!ve)
    return an(e);
};
function Vr(e) {
  const { offset: t, gpuAcceleration: n, fallbackPlacements: o } = e;
  return [
    {
      name: "offset",
      options: {
        offset: [0, t != null ? t : 12]
      }
    },
    {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    },
    {
      name: "flip",
      options: {
        padding: 5,
        fallbackPlacements: o != null ? o : []
      }
    },
    {
      name: "computeStyles",
      options: {
        gpuAcceleration: n,
        adaptive: n
      }
    }
  ];
}
function zr(e, { arrowEl: t, arrowOffset: n }) {
  e.modifiers.push({
    name: "arrow",
    options: {
      element: t,
      padding: n != null ? n : 5
    }
  });
}
function qr(e, t) {
  t && (e.modifiers = [...e.modifiers, ...t != null ? t : []]);
}
const Jr = {
  name: "ElPopperContent"
}, Zr = /* @__PURE__ */ te({
  ...Jr,
  props: Pn,
  emits: Wr,
  setup(e, { expose: t, emit: n }) {
    const o = e, { popperInstanceRef: r, contentRef: i, triggerRef: a, role: s } = ue(dt, void 0), l = ue(Lt, void 0), { nextZIndex: u } = bo(), f = Re("popper"), m = R(), g = R("first"), p = R(), d = R();
    le(sn, {
      arrowRef: p,
      arrowOffset: d
    }), l && (l.addInputId || l.removeInputId) && le(Lt, {
      ...l,
      addInputId: lt,
      removeInputId: lt
    });
    const v = R(o.zIndex || u()), h = R(!1);
    let c;
    const y = k(() => Ur(o.referenceEl) || b(a)), T = k(() => [{ zIndex: b(v) }, o.popperStyle]), E = k(() => [
      f.b(),
      f.is("pure", o.pure),
      f.is(o.effect),
      o.popperClass
    ]), S = k(() => s && s.value === "dialog" ? "false" : void 0), C = ({ referenceEl: O, popperContentEl: P, arrowEl: I }) => {
      const N = tn(o, {
        arrowEl: I,
        arrowOffset: b(d)
      });
      return Nr(O, P, N);
    }, w = (O = !0) => {
      var P;
      (P = b(r)) == null || P.update(), O && (v.value = o.zIndex || u());
    }, A = () => {
      var O, P;
      const I = { name: "eventListeners", enabled: o.visible };
      (P = (O = b(r)) == null ? void 0 : O.setOptions) == null || P.call(O, (N) => ({
        ...N,
        modifiers: [...N.modifiers || [], I]
      })), w(!1), o.visible && o.focusOnShow ? h.value = !0 : o.visible === !1 && (h.value = !1);
    }, B = () => {
      n("focus");
    }, $ = () => {
      g.value = "first", n("blur");
    }, L = (O) => {
      var P;
      o.visible && !h.value && (O.target && (g.value = O.target), h.value = !0, O.relatedTarget && ((P = O.relatedTarget) == null || P.focus()));
    }, D = () => {
      o.trapping || (h.value = !1);
    }, M = () => {
      h.value = !1, n("close");
    };
    return ke(() => {
      let O;
      F(y, (P) => {
        var I;
        O == null || O();
        const N = b(r);
        if ((I = N == null ? void 0 : N.destroy) == null || I.call(N), P) {
          const G = b(m);
          i.value = G, r.value = C({
            referenceEl: P,
            popperContentEl: G,
            arrowEl: b(p)
          }), O = F(() => P.getBoundingClientRect(), () => w(), {
            immediate: !0
          });
        } else
          r.value = void 0;
      }, {
        immediate: !0
      }), F(() => o.triggerTargetEl, (P, I) => {
        c == null || c(), c = void 0;
        const N = b(P || m.value), G = b(I || m.value);
        if (Ze(N)) {
          const { ariaLabel: q, id: be } = Hn(o);
          c = F([s, q, S, be], (ye) => {
            ["role", "aria-label", "aria-modal", "id"].forEach((ie, ce) => {
              ct(ye[ce]) ? N.removeAttribute(ie) : N.setAttribute(ie, ye[ce]);
            });
          }, { immediate: !0 });
        }
        Ze(G) && ["role", "aria-label", "aria-modal", "id"].forEach((q) => {
          G.removeAttribute(q);
        });
      }, { immediate: !0 }), F(() => o.visible, A, { immediate: !0 }), F(() => tn(o, {
        arrowEl: b(p),
        arrowOffset: b(d)
      }), (P) => {
        var I;
        return (I = r.value) == null ? void 0 : I.setOptions(P);
      });
    }), he(() => {
      c == null || c(), c = void 0;
    }), t({
      popperContentRef: m,
      popperInstanceRef: r,
      updatePopper: w,
      contentStyle: T
    }), (O, P) => (K(), $e("div", {
      ref_key: "popperContentRef",
      ref: m,
      style: Kn(b(T)),
      class: Xe(b(E)),
      tabindex: "-1",
      onMouseenter: P[0] || (P[0] = (I) => O.$emit("mouseenter", I)),
      onMouseleave: P[1] || (P[1] = (I) => O.$emit("mouseleave", I))
    }, [
      Me(b(xr), {
        trapped: h.value,
        "trap-on-focus-in": !0,
        "focus-trap-el": m.value,
        "focus-start-el": g.value,
        onFocusAfterTrapped: B,
        onFocusAfterReleased: $,
        onFocusin: L,
        onFocusoutPrevented: D,
        onReleaseRequested: M
      }, {
        default: X(() => [
          U(O.$slots, "default")
        ]),
        _: 3
      }, 8, ["trapped", "focus-trap-el", "focus-start-el"])
    ], 38));
  }
});
var Yr = /* @__PURE__ */ Z(Zr, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popper/src/content.vue"]]);
const Gr = ft(Oo), Xr = Re("tooltip"), J = H({
  ...vo,
  ...Pn,
  appendTo: {
    type: _([String, Object]),
    default: un
  },
  content: {
    type: String,
    default: ""
  },
  rawContent: {
    type: Boolean,
    default: !1
  },
  persistent: Boolean,
  ariaLabel: String,
  visible: {
    type: _(Boolean),
    default: null
  },
  transition: {
    type: String,
    default: `${Xr.namespace.value}-fade-in-linear`
  },
  teleported: {
    type: Boolean,
    default: !0
  },
  disabled: {
    type: Boolean
  }
}), je = H({
  ...vn,
  disabled: Boolean,
  trigger: {
    type: _([String, Array]),
    default: "hover"
  },
  triggerKeys: {
    type: _(Array),
    default: () => [Ye.enter, Ye.space]
  }
}), Qr = H({
  openDelay: {
    type: Number
  },
  visibleArrow: {
    type: Boolean,
    default: void 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  showArrow: {
    type: Boolean,
    default: !0
  }
}), Tt = Symbol("elTooltip"), ei = te({
  name: "ElTooltipContent",
  components: {
    ElPopperContent: Yr
  },
  inheritAttrs: !1,
  props: J,
  setup(e) {
    const t = R(null), n = R(!1), o = R(!1), r = R(!1), i = R(!1), {
      controlled: a,
      id: s,
      open: l,
      trigger: u,
      onClose: f,
      onOpen: m,
      onShow: g,
      onHide: p,
      onBeforeShow: d,
      onBeforeHide: v
    } = ue(Tt, void 0), h = k(() => process.env.NODE_ENV === "test" ? !0 : e.persistent);
    he(() => {
      i.value = !0;
    });
    const c = k(() => b(h) ? !0 : b(l)), y = k(() => e.disabled ? !1 : b(l)), T = k(() => {
      var O;
      return (O = e.style) != null ? O : {};
    }), E = k(() => !b(l)), S = () => {
      p();
    }, C = () => {
      if (b(a))
        return !0;
    }, w = oe(C, () => {
      e.enterable && b(u) === "hover" && m();
    }), A = oe(C, () => {
      b(u) === "hover" && f();
    }), B = () => {
      var O, P;
      (P = (O = t.value) == null ? void 0 : O.updatePopper) == null || P.call(O), d == null || d();
    }, $ = () => {
      v == null || v();
    }, L = () => {
      g(), M = Qn(k(() => {
        var O;
        return (O = t.value) == null ? void 0 : O.popperContentRef;
      }), () => {
        if (b(a))
          return;
        b(u) !== "hover" && f();
      });
    }, D = () => {
      e.virtualTriggering || f();
    };
    let M;
    return F(() => b(l), (O) => {
      O || M == null || M();
    }, {
      flush: "post"
    }), {
      ariaHidden: E,
      entering: o,
      leaving: r,
      id: s,
      intermediateOpen: n,
      contentStyle: T,
      contentRef: t,
      destroyed: i,
      shouldRender: c,
      shouldShow: y,
      onClose: f,
      open: l,
      onAfterShow: L,
      onBeforeEnter: B,
      onBeforeLeave: $,
      onContentEnter: w,
      onContentLeave: A,
      onTransitionLeave: S,
      onBlur: D
    };
  }
});
function ti(e, t, n, o, r, i) {
  const a = Te("el-popper-content");
  return K(), ge(Wn, {
    disabled: !e.teleported,
    to: e.appendTo
  }, [
    Me(Un, {
      name: e.transition,
      onAfterLeave: e.onTransitionLeave,
      onBeforeEnter: e.onBeforeEnter,
      onAfterEnter: e.onAfterShow,
      onBeforeLeave: e.onBeforeLeave
    }, {
      default: X(() => [
        e.shouldRender ? on((K(), ge(a, pt({
          key: 0,
          id: e.id,
          ref: "contentRef"
        }, e.$attrs, {
          "aria-label": e.ariaLabel,
          "aria-hidden": e.ariaHidden,
          "boundaries-padding": e.boundariesPadding,
          "fallback-placements": e.fallbackPlacements,
          "gpu-acceleration": e.gpuAcceleration,
          offset: e.offset,
          placement: e.placement,
          "popper-options": e.popperOptions,
          strategy: e.strategy,
          effect: e.effect,
          enterable: e.enterable,
          pure: e.pure,
          "popper-class": e.popperClass,
          "popper-style": [e.popperStyle, e.contentStyle],
          "reference-el": e.referenceEl,
          "trigger-target-el": e.triggerTargetEl,
          visible: e.shouldShow,
          "z-index": e.zIndex,
          onMouseenter: e.onContentEnter,
          onMouseleave: e.onContentLeave,
          onBlur: e.onBlur,
          onClose: e.onClose
        }), {
          default: X(() => [
            se(" Workaround bug #6378 "),
            e.destroyed ? se("v-if", !0) : U(e.$slots, "default", { key: 0 })
          ]),
          _: 3
        }, 16, ["id", "aria-label", "aria-hidden", "boundaries-padding", "fallback-placements", "gpu-acceleration", "offset", "placement", "popper-options", "strategy", "effect", "enterable", "pure", "popper-class", "popper-style", "reference-el", "trigger-target-el", "visible", "z-index", "onMouseenter", "onMouseleave", "onBlur", "onClose"])), [
          [Vn, e.shouldShow]
        ]) : se("v-if", !0)
      ]),
      _: 3
    }, 8, ["name", "onAfterLeave", "onBeforeEnter", "onAfterEnter", "onBeforeLeave"])
  ], 8, ["disabled", "to"]);
}
var ni = /* @__PURE__ */ Z(ei, [["render", ti], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/content.vue"]]);
const oi = (e, t) => eo(e) ? e.includes(t) : e === t, Ee = (e, t, n) => (o) => {
  oi(b(e), t) && n(o);
}, ri = te({
  name: "ElTooltipTrigger",
  components: {
    ElPopperTrigger: ko
  },
  props: je,
  setup(e) {
    const t = Re("tooltip"), { controlled: n, id: o, open: r, onOpen: i, onClose: a, onToggle: s } = ue(Tt, void 0), l = R(null), u = () => {
      if (b(n) || e.disabled)
        return !0;
    }, f = at(e, "trigger"), m = oe(u, Ee(f, "hover", i)), g = oe(u, Ee(f, "hover", a)), p = oe(u, Ee(f, "click", (y) => {
      y.button === 0 && s(y);
    })), d = oe(u, Ee(f, "focus", i)), v = oe(u, Ee(f, "focus", a)), h = oe(u, Ee(f, "contextmenu", (y) => {
      y.preventDefault(), s(y);
    })), c = oe(u, (y) => {
      const { code: T } = y;
      e.triggerKeys.includes(T) && (y.preventDefault(), s(y));
    });
    return {
      onBlur: v,
      onContextMenu: h,
      onFocus: d,
      onMouseenter: m,
      onMouseleave: g,
      onClick: p,
      onKeydown: c,
      open: r,
      id: o,
      triggerRef: l,
      ns: t
    };
  }
});
function ii(e, t, n, o, r, i) {
  const a = Te("el-popper-trigger");
  return K(), ge(a, {
    id: e.id,
    "virtual-ref": e.virtualRef,
    open: e.open,
    "virtual-triggering": e.virtualTriggering,
    class: Xe(e.ns.e("trigger")),
    onBlur: e.onBlur,
    onClick: e.onClick,
    onContextmenu: e.onContextMenu,
    onFocus: e.onFocus,
    onMouseenter: e.onMouseenter,
    onMouseleave: e.onMouseleave,
    onKeydown: e.onKeydown
  }, {
    default: X(() => [
      U(e.$slots, "default")
    ]),
    _: 3
  }, 8, ["id", "virtual-ref", "open", "virtual-triggering", "class", "onBlur", "onClick", "onContextmenu", "onFocus", "onMouseenter", "onMouseleave", "onKeydown"]);
}
var ai = /* @__PURE__ */ Z(ri, [["render", ii], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/trigger.vue"]]);
const { useModelToggleProps: si, useModelToggle: li, useModelToggleEmits: ui } = lo("visible"), pi = te({
  name: "ElTooltip",
  components: {
    ElPopper: Gr,
    ElPopperArrow: Ao,
    ElTooltipContent: ni,
    ElTooltipTrigger: ai
  },
  props: {
    ...cn,
    ...si,
    ...J,
    ...je,
    ...fn,
    ...Qr
  },
  emits: [
    ...ui,
    "before-show",
    "before-hide",
    "show",
    "hide",
    "open",
    "close"
  ],
  setup(e, { emit: t }) {
    fo();
    const n = k(() => ($t(e.openDelay) || Je("ElTooltip", "open-delay is about to be deprecated in the next major version, please use `show-after` instead"), e.openDelay || e.showAfter)), o = k(() => ($t(e.visibleArrow) || Je("ElTooltip", "`visible-arrow` is about to be deprecated in the next major version, please use `show-arrow` instead"), qe(e.visibleArrow) ? e.visibleArrow : e.showArrow)), r = to(), i = R(null), a = R(null), s = () => {
      var c;
      const y = b(i);
      y && ((c = y.popperInstanceRef) == null || c.update());
    }, l = R(!1), u = R(void 0), { show: f, hide: m, hasUpdateHandler: g } = li({
      indicator: l,
      toggleReason: u
    }), { onOpen: p, onClose: d } = mo({
      showAfter: n,
      hideAfter: at(e, "hideAfter"),
      open: f,
      close: m
    }), v = k(() => qe(e.visible) && !g.value);
    le(Tt, {
      controlled: v,
      id: r,
      open: zn(l),
      trigger: at(e, "trigger"),
      onOpen: (c) => {
        p(c);
      },
      onClose: (c) => {
        d(c);
      },
      onToggle: (c) => {
        b(l) ? d(c) : p(c);
      },
      onShow: () => {
        t("show", u.value);
      },
      onHide: () => {
        t("hide", u.value);
      },
      onBeforeShow: () => {
        t("before-show", u.value);
      },
      onBeforeHide: () => {
        t("before-hide", u.value);
      },
      updatePopper: s
    }), F(() => e.disabled, (c) => {
      c && l.value && (l.value = !1);
    });
    const h = () => {
      var c, y;
      const T = (y = (c = a.value) == null ? void 0 : c.contentRef) == null ? void 0 : y.popperContentRef;
      return T && T.contains(document.activeElement);
    };
    return qn(() => l.value && m()), {
      compatShowAfter: n,
      compatShowArrow: o,
      popperRef: i,
      contentRef: a,
      open: l,
      hide: m,
      isFocusInsideContent: h,
      updatePopper: s,
      onOpen: p,
      onClose: d
    };
  }
}), ci = ["innerHTML"], fi = { key: 1 };
function di(e, t, n, o, r, i) {
  const a = Te("el-tooltip-trigger"), s = Te("el-popper-arrow"), l = Te("el-tooltip-content"), u = Te("el-popper");
  return K(), ge(u, {
    ref: "popperRef",
    role: e.role
  }, {
    default: X(() => [
      Me(a, {
        disabled: e.disabled,
        trigger: e.trigger,
        "trigger-keys": e.triggerKeys,
        "virtual-ref": e.virtualRef,
        "virtual-triggering": e.virtualTriggering
      }, {
        default: X(() => [
          e.$slots.default ? U(e.$slots, "default", { key: 0 }) : se("v-if", !0)
        ]),
        _: 3
      }, 8, ["disabled", "trigger", "trigger-keys", "virtual-ref", "virtual-triggering"]),
      Me(l, {
        ref: "contentRef",
        "aria-label": e.ariaLabel,
        "boundaries-padding": e.boundariesPadding,
        content: e.content,
        disabled: e.disabled,
        effect: e.effect,
        enterable: e.enterable,
        "fallback-placements": e.fallbackPlacements,
        "hide-after": e.hideAfter,
        "gpu-acceleration": e.gpuAcceleration,
        offset: e.offset,
        persistent: e.persistent,
        "popper-class": e.popperClass,
        "popper-style": e.popperStyle,
        placement: e.placement,
        "popper-options": e.popperOptions,
        pure: e.pure,
        "raw-content": e.rawContent,
        "reference-el": e.referenceEl,
        "trigger-target-el": e.triggerTargetEl,
        "show-after": e.compatShowAfter,
        strategy: e.strategy,
        teleported: e.teleported,
        transition: e.transition,
        "virtual-triggering": e.virtualTriggering,
        "z-index": e.zIndex,
        "append-to": e.appendTo
      }, {
        default: X(() => [
          U(e.$slots, "content", {}, () => [
            e.rawContent ? (K(), $e("span", {
              key: 0,
              innerHTML: e.content
            }, null, 8, ci)) : (K(), $e("span", fi, st(e.content), 1))
          ]),
          e.compatShowArrow ? (K(), ge(s, {
            key: 0,
            "arrow-offset": e.arrowOffset
          }, null, 8, ["arrow-offset"])) : se("v-if", !0)
        ]),
        _: 3
      }, 8, ["aria-label", "boundaries-padding", "content", "disabled", "effect", "enterable", "fallback-placements", "hide-after", "gpu-acceleration", "offset", "persistent", "popper-class", "popper-style", "placement", "popper-options", "pure", "raw-content", "reference-el", "trigger-target-el", "show-after", "strategy", "teleported", "transition", "virtual-triggering", "z-index", "append-to"])
    ]),
    _: 3
  }, 8, ["role"]);
}
var vi = /* @__PURE__ */ Z(pi, [["render", di], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/tooltip/src/tooltip.vue"]]);
const mi = ft(vi), gi = {
  inheritAttrs: !1
};
function hi(e, t, n, o, r, i) {
  return U(e.$slots, "default");
}
var bi = /* @__PURE__ */ Z(gi, [["render", hi], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);
const yi = {
  name: "ElCollectionItem",
  inheritAttrs: !1
};
function wi(e, t, n, o, r, i) {
  return U(e.$slots, "default");
}
var Ei = /* @__PURE__ */ Z(yi, [["render", wi], ["__file", "/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);
const Oi = "data-el-collection-item", Ti = (e) => {
  const t = `El${e}Collection`, n = `${t}Item`, o = Symbol(t), r = Symbol(n), i = {
    ...bi,
    name: t,
    setup() {
      const s = R(null), l = /* @__PURE__ */ new Map();
      le(o, {
        itemMap: l,
        getItems: () => {
          const f = b(s);
          if (!f)
            return [];
          const m = Array.from(f.querySelectorAll(`[${Oi}]`));
          return [...l.values()].sort((p, d) => m.indexOf(p.ref) - m.indexOf(d.ref));
        },
        collectionRef: s
      });
    }
  }, a = {
    ...Ei,
    name: n,
    setup(s, { attrs: l }) {
      const u = R(null), f = ue(o, void 0);
      le(r, {
        collectionItemRef: u
      }), ke(() => {
        const m = b(u);
        m && f.itemMap.set(m, {
          ref: m,
          ...l
        });
      }), he(() => {
        const m = b(u);
        f.itemMap.delete(m);
      });
    }
  };
  return {
    COLLECTION_INJECTION_KEY: o,
    COLLECTION_ITEM_INJECTION_KEY: r,
    ElCollection: i,
    ElCollectionItem: a
  };
}, it = H({
  trigger: je.trigger,
  effect: {
    ...J.effect,
    default: "light"
  },
  type: {
    type: _(String)
  },
  placement: {
    type: _(String),
    default: "bottom"
  },
  popperOptions: {
    type: _(Object),
    default: () => ({})
  },
  id: String,
  size: {
    type: String,
    default: ""
  },
  splitButton: Boolean,
  hideOnClick: {
    type: Boolean,
    default: !0
  },
  loop: {
    type: Boolean,
    default: !0
  },
  showTimeout: {
    type: Number,
    default: 150
  },
  hideTimeout: {
    type: Number,
    default: 150
  },
  tabindex: {
    type: _([Number, String]),
    default: 0
  },
  maxHeight: {
    type: _([Number, String]),
    default: ""
  },
  popperClass: {
    type: String,
    default: ""
  },
  disabled: {
    type: Boolean,
    default: !1
  },
  role: {
    type: String,
    default: "menu"
  },
  buttonProps: {
    type: _(Object)
  }
});
H({
  command: {
    type: [Object, String, Number],
    default: () => ({})
  },
  disabled: Boolean,
  divided: Boolean,
  textValue: String,
  icon: {
    type: no
  }
});
H({
  onKeydown: { type: _(Function) }
});
Ti("Dropdown");
const Ci = H({
  trigger: je.trigger,
  placement: it.placement,
  disabled: je.disabled,
  visible: J.visible,
  transition: J.transition,
  popperOptions: it.popperOptions,
  tabindex: it.tabindex,
  content: J.content,
  popperStyle: J.popperStyle,
  popperClass: J.popperClass,
  enterable: {
    ...J.enterable,
    default: !0
  },
  effect: {
    ...J.effect,
    default: "light"
  },
  teleported: J.teleported,
  title: String,
  width: {
    type: [String, Number],
    default: 150
  },
  offset: {
    type: Number,
    default: void 0
  },
  showAfter: {
    type: Number,
    default: 0
  },
  hideAfter: {
    type: Number,
    default: 200
  },
  autoClose: {
    type: Number,
    default: 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  persistent: {
    type: Boolean,
    default: !0
  },
  "onUpdate:visible": {
    type: Function
  }
}), Ai = {
  "update:visible": (e) => qe(e),
  "before-enter": () => !0,
  "before-leave": () => !0,
  "after-enter": () => !0,
  "after-leave": () => !0
}, Si = {
  name: "ElPopover"
}, Pi = /* @__PURE__ */ te({
  ...Si,
  props: Ci,
  emits: Ai,
  setup(e, { expose: t, emit: n }) {
    const o = e, r = "onUpdate:visible", i = k(() => o[r]), a = Re("popover"), s = R(), l = k(() => {
      var c;
      return (c = b(s)) == null ? void 0 : c.popperRef;
    }), u = k(() => [
      {
        width: oo(o.width)
      },
      o.popperStyle
    ]), f = k(() => [a.b(), o.popperClass, { [a.m("plain")]: !!o.content }]), m = k(() => o.transition === `${a.namespace.value}-fade-in-linear`), g = () => {
      var c;
      (c = s.value) == null || c.hide();
    }, p = () => {
      n("before-enter");
    }, d = () => {
      n("before-leave");
    }, v = () => {
      n("after-enter");
    }, h = () => {
      n("update:visible", !1), n("after-leave");
    };
    return t({
      popperRef: l,
      hide: g
    }), (c, y) => (K(), ge(b(mi), pt({
      ref_key: "tooltipRef",
      ref: s
    }, c.$attrs, {
      trigger: c.trigger,
      placement: c.placement,
      disabled: c.disabled,
      visible: c.visible,
      transition: c.transition,
      "popper-options": c.popperOptions,
      tabindex: c.tabindex,
      content: c.content,
      offset: c.offset,
      "show-after": c.showAfter,
      "hide-after": c.hideAfter,
      "auto-close": c.autoClose,
      "show-arrow": c.showArrow,
      "aria-label": c.title,
      effect: c.effect,
      enterable: c.enterable,
      "popper-class": b(f),
      "popper-style": b(u),
      teleported: c.teleported,
      persistent: c.persistent,
      "gpu-acceleration": b(m),
      "onUpdate:visible": b(i),
      onBeforeShow: p,
      onBeforeHide: d,
      onShow: v,
      onHide: h
    }), {
      content: X(() => [
        c.title ? (K(), $e("div", {
          key: 0,
          class: Xe(b(a).e("title")),
          role: "title"
        }, st(c.title), 3)) : se("v-if", !0),
        U(c.$slots, "default", {}, () => [
          Jn(st(c.content), 1)
        ])
      ]),
      default: X(() => [
        c.$slots.reference ? U(c.$slots, "reference", { key: 0 }) : se("v-if", !0)
      ]),
      _: 3
    }, 16, ["trigger", "placement", "disabled", "visible", "transition", "popper-options", "tabindex", "content", "offset", "show-after", "hide-after", "auto-close", "show-arrow", "aria-label", "effect", "enterable", "popper-class", "popper-style", "teleported", "persistent", "gpu-acceleration", "onUpdate:visible"]));
  }
});
var Ii = /* @__PURE__ */ Z(Pi, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/popover/src/popover.vue"]]);
const nn = (e, t) => {
  const n = t.arg || t.value, o = n == null ? void 0 : n.popperRef;
  o && (o.triggerRef = e);
};
var ki = {
  mounted(e, t) {
    nn(e, t);
  },
  updated(e, t) {
    nn(e, t);
  }
};
const Ri = "popover", Ni = ro(ki, Ri), Li = ft(Ii, {
  directive: Ni
});
export {
  Li as E,
  Tt as T,
  mi as a,
  Ye as b,
  xr as c,
  bo as d,
  J as u
};
