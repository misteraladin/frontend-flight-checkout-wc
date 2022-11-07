import { getCurrentScope as q, onScopeDispose as F, unref as C, getCurrentInstance as H, onMounted as K, nextTick as Z, watch as k, ref as P, openBlock as f, createElementBlock as p, createElementVNode as c, warn as G, inject as J, computed as D, defineComponent as X, mergeProps as Y, renderSlot as ee } from "vue";
function te(e) {
  for (var t = -1, n = e == null ? 0 : e.length, r = {}; ++t < n; ) {
    var o = e[t];
    r[o[0]] = o[1];
  }
  return r;
}
var B;
const b = typeof window < "u", r0 = (e) => typeof e == "boolean", ne = (e) => typeof e == "number", re = (e) => typeof e == "string", z = () => {
};
b && ((B = window == null ? void 0 : window.navigator) == null ? void 0 : B.userAgent) && /iP(ad|hone|od)/.test(window.navigator.userAgent);
function oe(e) {
  return typeof e == "function" ? e() : C(e);
}
function se(e) {
  return e;
}
function Q(e) {
  return q() ? (F(e), !0) : !1;
}
function ae(e, t = !0) {
  H() ? K(e) : t ? e() : Z(e);
}
function y(e) {
  var t;
  const n = oe(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const I = b ? window : void 0;
b && window.document;
b && window.navigator;
b && window.location;
function x(...e) {
  let t, n, r, o;
  if (re(e[0]) ? ([n, r, o] = e, t = I) : [t, n, r, o] = e, !t)
    return z;
  let a = z;
  const _ = k(() => y(t), (v) => {
    a(), v && (v.addEventListener(n, r, o), a = () => {
      v.removeEventListener(n, r, o), a = z;
    });
  }, { immediate: !0, flush: "post" }), m = () => {
    _(), a();
  };
  return Q(m), m;
}
function o0(e, t, n = {}) {
  const { window: r = I, ignore: o, capture: a = !0, detectIframe: _ = !1 } = n;
  if (!r)
    return;
  const m = P(!0);
  let v;
  const $ = (l) => {
    r.clearTimeout(v);
    const d = y(e), s = l.composedPath();
    !d || d === l.target || s.includes(d) || !m.value || o && o.length > 0 && o.some((i) => {
      const u = y(i);
      return u && (l.target === u || s.includes(u));
    }) || t(l);
  }, w = [
    x(r, "click", $, { passive: !0, capture: a }),
    x(r, "pointerdown", (l) => {
      const d = y(e);
      m.value = !!d && !l.composedPath().includes(d);
    }, { passive: !0 }),
    x(r, "pointerup", (l) => {
      if (l.button === 0) {
        const d = l.composedPath();
        l.composedPath = () => d, v = r.setTimeout(() => $(l), 50);
      }
    }, { passive: !0 }),
    _ && x(r, "blur", (l) => {
      var d;
      const s = y(e);
      ((d = document.activeElement) == null ? void 0 : d.tagName) === "IFRAME" && !(s != null && s.contains(document.activeElement)) && t(l);
    })
  ].filter(Boolean);
  return () => w.forEach((l) => l());
}
function ie(e, t = !1) {
  const n = P(), r = () => n.value = Boolean(e());
  return r(), ae(r, t), n;
}
const E = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, L = "__vueuse_ssr_handlers__";
E[L] = E[L] || {};
E[L];
var V = Object.getOwnPropertySymbols, le = Object.prototype.hasOwnProperty, ce = Object.prototype.propertyIsEnumerable, ue = (e, t) => {
  var n = {};
  for (var r in e)
    le.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && V)
    for (var r of V(e))
      t.indexOf(r) < 0 && ce.call(e, r) && (n[r] = e[r]);
  return n;
};
function s0(e, t, n = {}) {
  const r = n, { window: o = I } = r, a = ue(r, ["window"]);
  let _;
  const m = ie(() => o && "ResizeObserver" in o), v = () => {
    _ && (_.disconnect(), _ = void 0);
  }, $ = k(() => y(e), (g) => {
    v(), m.value && o && g && (_ = new ResizeObserver(t), _.observe(g, a));
  }, { immediate: !0, flush: "post" }), w = () => {
    v(), $();
  };
  return Q(w), {
    isSupported: m,
    stop: w
  };
}
var M;
(function(e) {
  e.UP = "UP", e.RIGHT = "RIGHT", e.DOWN = "DOWN", e.LEFT = "LEFT", e.NONE = "NONE";
})(M || (M = {}));
var _e = Object.defineProperty, S = Object.getOwnPropertySymbols, de = Object.prototype.hasOwnProperty, fe = Object.prototype.propertyIsEnumerable, j = (e, t, n) => t in e ? _e(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, pe = (e, t) => {
  for (var n in t || (t = {}))
    de.call(t, n) && j(e, n, t[n]);
  if (S)
    for (var n of S(t))
      fe.call(t, n) && j(e, n, t[n]);
  return e;
};
const ve = {
  easeInSine: [0.12, 0, 0.39, 0],
  easeOutSine: [0.61, 1, 0.88, 1],
  easeInOutSine: [0.37, 0, 0.63, 1],
  easeInQuad: [0.11, 0, 0.5, 0],
  easeOutQuad: [0.5, 1, 0.89, 1],
  easeInOutQuad: [0.45, 0, 0.55, 1],
  easeInCubic: [0.32, 0, 0.67, 0],
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeInQuart: [0.5, 0, 0.75, 0],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeInQuint: [0.64, 0, 0.78, 0],
  easeOutQuint: [0.22, 1, 0.36, 1],
  easeInOutQuint: [0.83, 0, 0.17, 1],
  easeInExpo: [0.7, 0, 0.84, 0],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
  easeInCirc: [0.55, 0, 1, 0.45],
  easeOutCirc: [0, 0.55, 0.45, 1],
  easeInOutCirc: [0.85, 0, 0.15, 1],
  easeInBack: [0.36, 0, 0.66, -0.56],
  easeOutBack: [0.34, 1.56, 0.64, 1],
  easeInOutBack: [0.68, -0.6, 0.32, 1.6]
};
pe({
  linear: se
}, ve);
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const he = () => {
}, we = Object.prototype.hasOwnProperty, A = (e, t) => we.call(e, t), me = Array.isArray, a0 = (e) => $e(e) === "[object Date]", i0 = (e) => typeof e == "function", R = (e) => typeof e == "string", N = (e) => e !== null && typeof e == "object", ge = Object.prototype.toString, $e = (e) => ge.call(e), Oe = (e) => e === void 0, l0 = (e) => !e && e !== 0 || me(e) && e.length === 0 || N(e) && !Object.keys(e).length, c0 = (e) => typeof Element > "u" ? !1 : e instanceof Element;
class U extends Error {
  constructor(t) {
    super(t), this.name = "ElementPlusError";
  }
}
function u0(e, t) {
  throw new U(`[${e}] ${t}`);
}
function ye(e, t) {
  if (process.env.NODE_ENV !== "production") {
    const n = R(e) ? new U(`[${e}] ${t}`) : e;
    console.warn(n);
  }
}
const be = "utils/dom/style", _0 = (e, t) => {
  if (!e || !t)
    return !1;
  if (t.includes(" "))
    throw new Error("className should not contain space.");
  return e.classList.contains(t);
};
function xe(e, t = "px") {
  if (!e)
    return "";
  if (R(e))
    return e;
  if (ne(e))
    return `${e}${t}`;
  ye(be, "binding value must be a string or number");
}
/*! Element Plus Icons Vue v2.0.9 */
var h = (e, t) => {
  let n = e.__vccOpts || e;
  for (let [r, o] of t)
    n[r] = o;
  return n;
}, ze = {
  name: "ArrowDown"
}, Ce = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ee = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M831.872 340.864 512 652.672 192.128 340.864a30.592 30.592 0 0 0-42.752 0 29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728 30.592 30.592 0 0 0-42.752 0z"
}, null, -1), Le = [
  Ee
];
function Pe(e, t, n, r, o, a) {
  return f(), p("svg", Ce, Le);
}
var d0 = /* @__PURE__ */ h(ze, [["render", Pe], ["__file", "arrow-down.vue"]]), Ie = {
  name: "ArrowLeft"
}, Ne = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Be = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Ve = [
  Be
];
function Me(e, t, n, r, o, a) {
  return f(), p("svg", Ne, Ve);
}
var f0 = /* @__PURE__ */ h(Ie, [["render", Me], ["__file", "arrow-left.vue"]]), Se = {
  name: "ArrowRight"
}, je = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Ae = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M340.864 149.312a30.592 30.592 0 0 0 0 42.752L652.736 512 340.864 831.872a30.592 30.592 0 0 0 0 42.752 29.12 29.12 0 0 0 41.728 0L714.24 534.336a32 32 0 0 0 0-44.672L382.592 149.376a29.12 29.12 0 0 0-41.728 0z"
}, null, -1), Te = [
  Ae
];
function He(e, t, n, r, o, a) {
  return f(), p("svg", je, Te);
}
var p0 = /* @__PURE__ */ h(Se, [["render", He], ["__file", "arrow-right.vue"]]), ke = {
  name: "ArrowUp"
}, De = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Qe = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m488.832 344.32-339.84 356.672a32 32 0 0 0 0 44.16l.384.384a29.44 29.44 0 0 0 42.688 0l320-335.872 319.872 335.872a29.44 29.44 0 0 0 42.688 0l.384-.384a32 32 0 0 0 0-44.16L535.168 344.32a32 32 0 0 0-46.336 0z"
}, null, -1), Re = [
  Qe
];
function Ue(e, t, n, r, o, a) {
  return f(), p("svg", De, Re);
}
var v0 = /* @__PURE__ */ h(ke, [["render", Ue], ["__file", "arrow-up.vue"]]), We = {
  name: "Calendar"
}, qe = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Fe = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"
}, null, -1), Ke = [
  Fe
];
function Ze(e, t, n, r, o, a) {
  return f(), p("svg", qe, Ke);
}
var h0 = /* @__PURE__ */ h(We, [["render", Ze], ["__file", "calendar.vue"]]), Ge = {
  name: "CircleCheck"
}, Je = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, Xe = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), Ye = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M745.344 361.344a32 32 0 0 1 45.312 45.312l-288 288a32 32 0 0 1-45.312 0l-160-160a32 32 0 1 1 45.312-45.312L480 626.752l265.344-265.408z"
}, null, -1), e2 = [
  Xe,
  Ye
];
function t2(e, t, n, r, o, a) {
  return f(), p("svg", Je, e2);
}
var w0 = /* @__PURE__ */ h(Ge, [["render", t2], ["__file", "circle-check.vue"]]), n2 = {
  name: "CircleClose"
}, r2 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, o2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "m466.752 512-90.496-90.496a32 32 0 0 1 45.248-45.248L512 466.752l90.496-90.496a32 32 0 1 1 45.248 45.248L557.248 512l90.496 90.496a32 32 0 1 1-45.248 45.248L512 557.248l-90.496 90.496a32 32 0 0 1-45.248-45.248L466.752 512z"
}, null, -1), s2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), a2 = [
  o2,
  s2
];
function i2(e, t, n, r, o, a) {
  return f(), p("svg", r2, a2);
}
var m0 = /* @__PURE__ */ h(n2, [["render", i2], ["__file", "circle-close.vue"]]), l2 = {
  name: "Clock"
}, c2 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, u2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 896a384 384 0 1 0 0-768 384 384 0 0 0 0 768zm0 64a448 448 0 1 1 0-896 448 448 0 0 1 0 896z"
}, null, -1), _2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32z"
}, null, -1), d2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32z"
}, null, -1), f2 = [
  u2,
  _2,
  d2
];
function p2(e, t, n, r, o, a) {
  return f(), p("svg", c2, f2);
}
var g0 = /* @__PURE__ */ h(l2, [["render", p2], ["__file", "clock.vue"]]), v2 = {
  name: "DArrowLeft"
}, h2 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, w2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M529.408 149.376a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L259.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L197.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224zm256 0a29.12 29.12 0 0 1 41.728 0 30.592 30.592 0 0 1 0 42.688L515.264 511.936l311.872 319.936a30.592 30.592 0 0 1-.512 43.264 29.12 29.12 0 0 1-41.216-.512L453.76 534.272a32 32 0 0 1 0-44.672l331.648-340.224z"
}, null, -1), m2 = [
  w2
];
function g2(e, t, n, r, o, a) {
  return f(), p("svg", h2, m2);
}
var $0 = /* @__PURE__ */ h(v2, [["render", g2], ["__file", "d-arrow-left.vue"]]), $2 = {
  name: "DArrowRight"
}, O2 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, y2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M452.864 149.312a29.12 29.12 0 0 1 41.728.064L826.24 489.664a32 32 0 0 1 0 44.672L494.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L764.736 512 452.864 192a30.592 30.592 0 0 1 0-42.688zm-256 0a29.12 29.12 0 0 1 41.728.064L570.24 489.664a32 32 0 0 1 0 44.672L238.592 874.624a29.12 29.12 0 0 1-41.728 0 30.592 30.592 0 0 1 0-42.752L508.736 512 196.864 192a30.592 30.592 0 0 1 0-42.688z"
}, null, -1), b2 = [
  y2
];
function x2(e, t, n, r, o, a) {
  return f(), p("svg", O2, b2);
}
var O0 = /* @__PURE__ */ h($2, [["render", x2], ["__file", "d-arrow-right.vue"]]), z2 = {
  name: "Hide"
}, C2 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, E2 = /* @__PURE__ */ c("path", {
  d: "M876.8 156.8c0-9.6-3.2-16-9.6-22.4-6.4-6.4-12.8-9.6-22.4-9.6-9.6 0-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8-160 16-288 73.6-377.6 176C44.8 438.4 0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4 0 9.6 3.2 16 9.6 22.4 6.4 6.4 12.8 9.6 22.4 9.6 9.6 0 16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4Zm-646.4 528c-76.8-70.4-128-128-153.6-172.8 28.8-48 80-105.6 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4C598.4 300.8 560 288 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4Zm140.8-96c-12.8-22.4-19.2-48-19.2-76.8 0-44.8 16-83.2 48-112 32-28.8 67.2-48 112-48 28.8 0 54.4 6.4 73.6 19.2L371.2 588.8ZM889.599 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6-28.8 48-80 105.6-153.6 172.8-73.6 67.2-172.8 108.8-284.8 115.2-51.2-3.2-99.2-12.8-140.8-28.8l-48 48c57.6 22.4 118.4 38.4 188.8 44.8 160-16 288-73.6 377.6-176C979.199 585.6 1024 528 1024 512s-48.001-73.6-134.401-176Z",
  fill: "currentColor"
}, null, -1), L2 = /* @__PURE__ */ c("path", {
  d: "M511.998 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2c28.8 12.8 57.6 19.2 89.6 19.2 64 0 115.2-22.4 160-64 41.6-41.6 64-96 64-160 0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4 0 44.8-16 83.2-48 112-32 28.8-67.2 48-112 48Z",
  fill: "currentColor"
}, null, -1), P2 = [
  E2,
  L2
];
function I2(e, t, n, r, o, a) {
  return f(), p("svg", C2, P2);
}
var y0 = /* @__PURE__ */ h(z2, [["render", I2], ["__file", "hide.vue"]]), N2 = {
  name: "Loading"
}, B2 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, V2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
}, null, -1), M2 = [
  V2
];
function S2(e, t, n, r, o, a) {
  return f(), p("svg", B2, M2);
}
var b0 = /* @__PURE__ */ h(N2, [["render", S2], ["__file", "loading.vue"]]), j2 = {
  name: "View"
}, A2 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, T2 = /* @__PURE__ */ c("path", {
  fill: "currentColor",
  d: "M512 160c320 0 512 352 512 352S832 864 512 864 0 512 0 512s192-352 512-352zm0 64c-225.28 0-384.128 208.064-436.8 288 52.608 79.872 211.456 288 436.8 288 225.28 0 384.128-208.064 436.8-288-52.608-79.872-211.456-288-436.8-288zm0 64a224 224 0 1 1 0 448 224 224 0 0 1 0-448zm0 64a160.192 160.192 0 0 0-160 160c0 88.192 71.744 160 160 160s160-71.808 160-160-71.744-160-160-160z"
}, null, -1), H2 = [
  T2
];
function k2(e, t, n, r, o, a) {
  return f(), p("svg", A2, H2);
}
var x0 = /* @__PURE__ */ h(j2, [["render", k2], ["__file", "view.vue"]]);
const W = "__epPropKey", D2 = (e) => e, Q2 = (e) => N(e) && !!e[W], R2 = (e, t) => {
  if (!N(e) || Q2(e))
    return e;
  const { values: n, required: r, default: o, type: a, validator: _ } = e, v = {
    type: a,
    required: !!r,
    validator: n || _ ? ($) => {
      let w = !1, g = [];
      if (n && (g = Array.from(n), A(e, "default") && g.push(o), w || (w = g.includes($))), _ && (w || (w = _($))), !w && g.length > 0) {
        const l = [...new Set(g)].map((d) => JSON.stringify(d)).join(", ");
        G(`Invalid prop: validation failed${t ? ` for prop "${t}"` : ""}. Expected one of [${l}], got value ${JSON.stringify($)}.`);
      }
      return w;
    } : void 0,
    [W]: !0
  };
  return A(e, "default") && (v.default = o), v;
}, U2 = (e) => te(Object.entries(e).map(([t, n]) => [
  t,
  R2(n, t)
])), W2 = (e, t) => {
  if (e.install = (n) => {
    for (const r of [e, ...Object.values(t != null ? t : {})])
      n.component(r.name, r);
  }, t)
    for (const [n, r] of Object.entries(t))
      e[n] = r;
  return e;
}, z0 = (e) => (e.install = he, e), q2 = Symbol(), T = P();
function F2(e, t = void 0) {
  const n = H() ? J(q2, T) : T;
  return e ? D(() => {
    var r, o;
    return (o = (r = n.value) == null ? void 0 : r[e]) != null ? o : t;
  }) : n;
}
const K2 = "el", Z2 = "is-", O = (e, t, n, r, o) => {
  let a = `${e}-${t}`;
  return n && (a += `-${n}`), r && (a += `__${r}`), o && (a += `--${o}`), a;
}, G2 = (e) => {
  const t = F2("namespace", K2);
  return {
    namespace: t,
    b: (s = "") => O(t.value, e, s, "", ""),
    e: (s) => s ? O(t.value, e, "", s, "") : "",
    m: (s) => s ? O(t.value, e, "", "", s) : "",
    be: (s, i) => s && i ? O(t.value, e, s, i, "") : "",
    em: (s, i) => s && i ? O(t.value, e, "", s, i) : "",
    bm: (s, i) => s && i ? O(t.value, e, s, "", i) : "",
    bem: (s, i, u) => s && i && u ? O(t.value, e, s, i, u) : "",
    is: (s, ...i) => {
      const u = i.length >= 1 ? i[0] : !0;
      return s && u ? `${Z2}${s}` : "";
    },
    cssVar: (s) => {
      const i = {};
      for (const u in s)
        s[u] && (i[`--${t.value}-${u}`] = s[u]);
      return i;
    },
    cssVarName: (s) => `--${t.value}-${s}`,
    cssVarBlock: (s) => {
      const i = {};
      for (const u in s)
        s[u] && (i[`--${t.value}-${e}-${u}`] = s[u]);
      return i;
    },
    cssVarBlockName: (s) => `--${t.value}-${e}-${s}`
  };
};
var J2 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [r, o] of t)
    n[r] = o;
  return n;
};
const X2 = U2({
  size: {
    type: D2([Number, String])
  },
  color: {
    type: String
  }
}), Y2 = {
  name: "ElIcon",
  inheritAttrs: !1
}, e0 = /* @__PURE__ */ X({
  ...Y2,
  props: X2,
  setup(e) {
    const t = e, n = G2("icon"), r = D(() => {
      const { size: o, color: a } = t;
      return !o && !a ? {} : {
        fontSize: Oe(o) ? void 0 : xe(o),
        "--color": a
      };
    });
    return (o, a) => (f(), p("i", Y({
      class: C(n).b(),
      style: C(r)
    }, o.$attrs), [
      ee(o.$slots, "default")
    ], 16));
  }
});
var t0 = /* @__PURE__ */ J2(e0, [["__file", "/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);
const C0 = W2(t0);
export {
  u0 as A,
  x as B,
  xe as C,
  y as D,
  C0 as E,
  c0 as F,
  o0 as G,
  me as H,
  l0 as I,
  a0 as J,
  g0 as K,
  h0 as L,
  v0 as M,
  he as N,
  d0 as O,
  _0 as P,
  $0 as Q,
  O0 as R,
  J2 as _,
  s0 as a,
  U2 as b,
  f0 as c,
  p0 as d,
  R as e,
  ye as f,
  Oe as g,
  z0 as h,
  ne as i,
  D2 as j,
  w0 as k,
  b0 as l,
  m0 as m,
  te as n,
  R2 as o,
  F2 as p,
  b as q,
  K2 as r,
  y0 as s,
  N as t,
  G2 as u,
  x0 as v,
  W2 as w,
  i0 as x,
  r0 as y,
  Q as z
};
