import { h as _n, getCurrentInstance as Qe, effectScope as xn, inject as Gn, onMounted as Yn, onUnmounted as Bn, shallowRef as Xn, ref as ue, computed as fe, onBeforeMount as Kn, watch as mt, Fragment as jn, isRef as Qn, createVNode as Jn, Text as qn } from "vue";
/*!
  * shared v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const _e = typeof window < "u";
let te, Ae;
if (process.env.NODE_ENV !== "production") {
  const e = _e && window.performance;
  e && e.mark && e.measure && e.clearMarks && e.clearMeasures && (te = (t) => e.mark(t), Ae = (t, n, l) => {
    e.measure(t, n, l), e.clearMarks(n), e.clearMarks(l);
  });
}
const Zn = /\{([0-9a-zA-Z]+)\}/g;
function at(e, ...t) {
  return t.length === 1 && W(t[0]) && (t = t[0]), (!t || !t.hasOwnProperty) && (t = {}), e.replace(Zn, (n, l) => t.hasOwnProperty(l) ? t[l] : "");
}
const zn = typeof Symbol == "function" && typeof Symbol.toStringTag == "symbol", me = (e) => zn ? Symbol(e) : e, ea = (e, t, n) => ta({ l: e, k: t, s: n }), ta = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), B = (e) => typeof e == "number" && isFinite(e), na = (e) => At(e) === "[object Date]", Le = (e) => At(e) === "[object RegExp]", rt = (e) => R(e) && Object.keys(e).length === 0;
function z(e, t) {
  typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
const K = Object.assign;
let Mt;
const Ke = () => Mt || (Mt = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ut(e) {
  return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
const aa = Object.prototype.hasOwnProperty;
function ht(e, t) {
  return aa.call(e, t);
}
const $ = Array.isArray, x = (e) => typeof e == "function", I = (e) => typeof e == "string", F = (e) => typeof e == "boolean", W = (e) => e !== null && typeof e == "object", mn = Object.prototype.toString, At = (e) => mn.call(e), R = (e) => At(e) === "[object Object]", ra = (e) => e == null ? "" : $(e) || R(e) && e.toString === mn ? JSON.stringify(e, null, 2) : String(e), Vt = 2;
function la(e, t = 0, n = e.length) {
  const l = e.split(/\r?\n/);
  let r = 0;
  const a = [];
  for (let s = 0; s < l.length; s++)
    if (r += l[s].length + 1, r >= t) {
      for (let c = s - Vt; c <= s + Vt || n > r; c++) {
        if (c < 0 || c >= l.length)
          continue;
        const u = c + 1;
        a.push(`${u}${" ".repeat(3 - String(u).length)}|  ${l[c]}`);
        const m = l[c].length;
        if (c === s) {
          const L = t - (r - m) + 1, T = Math.max(1, n > r ? m - L : n - t);
          a.push("   |  " + " ".repeat(L) + "^".repeat(T));
        } else if (c > s) {
          if (n > r) {
            const L = Math.max(Math.min(n - r, m), 1);
            a.push("   |  " + "^".repeat(L));
          }
          r += m + 1;
        }
      }
      break;
    }
  return a.join(`
`);
}
function Ct() {
  const e = /* @__PURE__ */ new Map();
  return {
    events: e,
    on(n, l) {
      const r = e.get(n);
      r && r.push(l) || e.set(n, [l]);
    },
    off(n, l) {
      const r = e.get(n);
      r && r.splice(r.indexOf(l) >>> 0, 1);
    },
    emit(n, l) {
      (e.get(n) || []).slice().map((r) => r(l)), (e.get("*") || []).slice().map((r) => r(n, l));
    }
  };
}
/*!
  * message-compiler v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const S = {
  EXPECTED_TOKEN: 1,
  INVALID_TOKEN_IN_PLACEHOLDER: 2,
  UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
  UNKNOWN_ESCAPE_SEQUENCE: 4,
  INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
  UNBALANCED_CLOSING_BRACE: 6,
  UNTERMINATED_CLOSING_BRACE: 7,
  EMPTY_PLACEHOLDER: 8,
  NOT_ALLOW_NEST_PLACEHOLDER: 9,
  INVALID_LINKED_FORMAT: 10,
  MUST_HAVE_MESSAGES_IN_PLURAL: 11,
  UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
  UNEXPECTED_EMPTY_LINKED_KEY: 13,
  UNEXPECTED_LEXICAL_ANALYSIS: 14,
  __EXTEND_POINT__: 15
}, sa = {
  [S.EXPECTED_TOKEN]: "Expected token: '{0}'",
  [S.INVALID_TOKEN_IN_PLACEHOLDER]: "Invalid token in placeholder: '{0}'",
  [S.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER]: "Unterminated single quote in placeholder",
  [S.UNKNOWN_ESCAPE_SEQUENCE]: "Unknown escape sequence: \\{0}",
  [S.INVALID_UNICODE_ESCAPE_SEQUENCE]: "Invalid unicode escape sequence: {0}",
  [S.UNBALANCED_CLOSING_BRACE]: "Unbalanced closing brace",
  [S.UNTERMINATED_CLOSING_BRACE]: "Unterminated closing brace",
  [S.EMPTY_PLACEHOLDER]: "Empty placeholder",
  [S.NOT_ALLOW_NEST_PLACEHOLDER]: "Not allowed nest placeholder",
  [S.INVALID_LINKED_FORMAT]: "Invalid linked format",
  [S.MUST_HAVE_MESSAGES_IN_PLURAL]: "Plural must have messages",
  [S.UNEXPECTED_EMPTY_LINKED_MODIFIER]: "Unexpected empty linked modifier",
  [S.UNEXPECTED_EMPTY_LINKED_KEY]: "Unexpected empty linked key",
  [S.UNEXPECTED_LEXICAL_ANALYSIS]: "Unexpected lexical analysis in token: '{0}'"
};
function lt(e, t, n = {}) {
  const { domain: l, messages: r, args: a } = n, s = process.env.NODE_ENV !== "production" ? at((r || sa)[e] || "", ...a || []) : e, c = new SyntaxError(String(s));
  return c.code = e, t && (c.location = t), c.domain = l, c;
}
function oa(e) {
  throw e;
}
function ia(e, t, n) {
  return { line: e, column: t, offset: n };
}
function dt(e, t, n) {
  const l = { start: e, end: t };
  return n != null && (l.source = n), l;
}
const Ee = " ", ca = "\r", J = `
`, ua = String.fromCharCode(8232), fa = String.fromCharCode(8233);
function _a(e) {
  const t = e;
  let n = 0, l = 1, r = 1, a = 0;
  const s = (h) => t[h] === ca && t[h + 1] === J, c = (h) => t[h] === J, u = (h) => t[h] === fa, m = (h) => t[h] === ua, L = (h) => s(h) || c(h) || u(h) || m(h), T = () => n, p = () => l, O = () => r, P = () => a, k = (h) => s(h) || u(h) || m(h) ? J : t[h], D = () => k(n), f = () => k(n + a);
  function d() {
    return a = 0, L(n) && (l++, r = 0), s(n) && n++, n++, r++, t[n];
  }
  function v() {
    return s(n + a) && a++, a++, t[n + a];
  }
  function N() {
    n = 0, l = 1, r = 1, a = 0;
  }
  function g(h = 0) {
    a = h;
  }
  function A() {
    const h = n + a;
    for (; h !== n; )
      d();
    a = 0;
  }
  return {
    index: T,
    line: p,
    column: O,
    peekOffset: P,
    charAt: k,
    currentChar: D,
    currentPeek: f,
    next: d,
    peek: v,
    reset: N,
    resetPeek: g,
    skipToPeek: A
  };
}
const pe = void 0, wt = "'", ma = "tokenizer";
function da(e, t = {}) {
  const n = t.location !== !1, l = _a(e), r = () => l.index(), a = () => ia(l.line(), l.column(), l.index()), s = a(), c = r(), u = {
    currentType: 14,
    offset: c,
    startLoc: s,
    endLoc: s,
    lastType: 14,
    lastOffset: c,
    lastStartLoc: s,
    lastEndLoc: s,
    braceNest: 0,
    inLinked: !1,
    text: ""
  }, m = () => u, { onError: L } = t;
  function T(i, o, _, ...C) {
    const y = m();
    if (o.column += _, o.offset += _, L) {
      const w = dt(y.startLoc, o), oe = lt(i, w, {
        domain: ma,
        args: C
      });
      L(oe);
    }
  }
  function p(i, o, _) {
    i.endLoc = a(), i.currentType = o;
    const C = { type: o };
    return n && (C.loc = dt(i.startLoc, i.endLoc)), _ != null && (C.value = _), C;
  }
  const O = (i) => p(i, 14);
  function P(i, o) {
    return i.currentChar() === o ? (i.next(), o) : (T(S.EXPECTED_TOKEN, a(), 0, o), "");
  }
  function k(i) {
    let o = "";
    for (; i.currentPeek() === Ee || i.currentPeek() === J; )
      o += i.currentPeek(), i.peek();
    return o;
  }
  function D(i) {
    const o = k(i);
    return i.skipToPeek(), o;
  }
  function f(i) {
    if (i === pe)
      return !1;
    const o = i.charCodeAt(0);
    return o >= 97 && o <= 122 || o >= 65 && o <= 90 || o === 95;
  }
  function d(i) {
    if (i === pe)
      return !1;
    const o = i.charCodeAt(0);
    return o >= 48 && o <= 57;
  }
  function v(i, o) {
    const { currentType: _ } = o;
    if (_ !== 2)
      return !1;
    k(i);
    const C = f(i.currentPeek());
    return i.resetPeek(), C;
  }
  function N(i, o) {
    const { currentType: _ } = o;
    if (_ !== 2)
      return !1;
    k(i);
    const C = i.currentPeek() === "-" ? i.peek() : i.currentPeek(), y = d(C);
    return i.resetPeek(), y;
  }
  function g(i, o) {
    const { currentType: _ } = o;
    if (_ !== 2)
      return !1;
    k(i);
    const C = i.currentPeek() === wt;
    return i.resetPeek(), C;
  }
  function A(i, o) {
    const { currentType: _ } = o;
    if (_ !== 8)
      return !1;
    k(i);
    const C = i.currentPeek() === ".";
    return i.resetPeek(), C;
  }
  function h(i, o) {
    const { currentType: _ } = o;
    if (_ !== 9)
      return !1;
    k(i);
    const C = f(i.currentPeek());
    return i.resetPeek(), C;
  }
  function V(i, o) {
    const { currentType: _ } = o;
    if (!(_ === 8 || _ === 12))
      return !1;
    k(i);
    const C = i.currentPeek() === ":";
    return i.resetPeek(), C;
  }
  function U(i, o) {
    const { currentType: _ } = o;
    if (_ !== 10)
      return !1;
    const C = () => {
      const w = i.currentPeek();
      return w === "{" ? f(i.peek()) : w === "@" || w === "%" || w === "|" || w === ":" || w === "." || w === Ee || !w ? !1 : w === J ? (i.peek(), C()) : f(w);
    }, y = C();
    return i.resetPeek(), y;
  }
  function H(i) {
    k(i);
    const o = i.currentPeek() === "|";
    return i.resetPeek(), o;
  }
  function j(i) {
    const o = k(i), _ = i.currentPeek() === "%" && i.peek() === "{";
    return i.resetPeek(), {
      isModulo: _,
      hasSpace: o.length > 0
    };
  }
  function re(i, o = !0) {
    const _ = (y = !1, w = "", oe = !1) => {
      const de = i.currentPeek();
      return de === "{" ? w === "%" ? !1 : y : de === "@" || !de ? w === "%" ? !0 : y : de === "%" ? (i.peek(), _(y, "%", !0)) : de === "|" ? w === "%" || oe ? !0 : !(w === Ee || w === J) : de === Ee ? (i.peek(), _(!0, Ee, oe)) : de === J ? (i.peek(), _(!0, J, oe)) : !0;
    }, C = _();
    return o && i.resetPeek(), C;
  }
  function ne(i, o) {
    const _ = i.currentChar();
    return _ === pe ? pe : o(_) ? (i.next(), _) : null;
  }
  function ke(i) {
    return ne(i, (_) => {
      const C = _.charCodeAt(0);
      return C >= 97 && C <= 122 || C >= 65 && C <= 90 || C >= 48 && C <= 57 || C === 95 || C === 36;
    });
  }
  function Ue(i) {
    return ne(i, (_) => {
      const C = _.charCodeAt(0);
      return C >= 48 && C <= 57;
    });
  }
  function le(i) {
    return ne(i, (_) => {
      const C = _.charCodeAt(0);
      return C >= 48 && C <= 57 || C >= 65 && C <= 70 || C >= 97 && C <= 102;
    });
  }
  function De(i) {
    let o = "", _ = "";
    for (; o = Ue(i); )
      _ += o;
    return _;
  }
  function se(i) {
    D(i);
    const o = i.currentChar();
    return o !== "%" && T(S.EXPECTED_TOKEN, a(), 0, o), i.next(), "%";
  }
  function ve(i) {
    let o = "";
    for (; ; ) {
      const _ = i.currentChar();
      if (_ === "{" || _ === "}" || _ === "@" || _ === "|" || !_)
        break;
      if (_ === "%")
        if (re(i))
          o += _, i.next();
        else
          break;
      else if (_ === Ee || _ === J)
        if (re(i))
          o += _, i.next();
        else {
          if (H(i))
            break;
          o += _, i.next();
        }
      else
        o += _, i.next();
    }
    return o;
  }
  function Ve(i) {
    D(i);
    let o = "", _ = "";
    for (; o = ke(i); )
      _ += o;
    return i.currentChar() === pe && T(S.UNTERMINATED_CLOSING_BRACE, a(), 0), _;
  }
  function we(i) {
    D(i);
    let o = "";
    return i.currentChar() === "-" ? (i.next(), o += `-${De(i)}`) : o += De(i), i.currentChar() === pe && T(S.UNTERMINATED_CLOSING_BRACE, a(), 0), o;
  }
  function We(i) {
    D(i), P(i, "'");
    let o = "", _ = "";
    const C = (w) => w !== wt && w !== J;
    for (; o = ne(i, C); )
      o === "\\" ? _ += $e(i) : _ += o;
    const y = i.currentChar();
    return y === J || y === pe ? (T(S.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), y === J && (i.next(), P(i, "'")), _) : (P(i, "'"), _);
  }
  function $e(i) {
    const o = i.currentChar();
    switch (o) {
      case "\\":
      case "'":
        return i.next(), `\\${o}`;
      case "u":
        return He(i, o, 4);
      case "U":
        return He(i, o, 6);
      default:
        return T(S.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, o), "";
    }
  }
  function He(i, o, _) {
    P(i, o);
    let C = "";
    for (let y = 0; y < _; y++) {
      const w = le(i);
      if (!w) {
        T(S.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${o}${C}${i.currentChar()}`);
        break;
      }
      C += w;
    }
    return `\\${o}${C}`;
  }
  function xe(i) {
    D(i);
    let o = "", _ = "";
    const C = (y) => y !== "{" && y !== "}" && y !== Ee && y !== J;
    for (; o = ne(i, C); )
      _ += o;
    return _;
  }
  function Ge(i) {
    let o = "", _ = "";
    for (; o = ke(i); )
      _ += o;
    return _;
  }
  function Ye(i) {
    const o = (_ = !1, C) => {
      const y = i.currentChar();
      return y === "{" || y === "%" || y === "@" || y === "|" || !y || y === Ee ? C : y === J ? (C += y, i.next(), o(_, C)) : (C += y, i.next(), o(!0, C));
    };
    return o(!1, "");
  }
  function be(i) {
    D(i);
    const o = P(i, "|");
    return D(i), o;
  }
  function Ie(i, o) {
    let _ = null;
    switch (i.currentChar()) {
      case "{":
        return o.braceNest >= 1 && T(S.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), i.next(), _ = p(o, 2, "{"), D(i), o.braceNest++, _;
      case "}":
        return o.braceNest > 0 && o.currentType === 2 && T(S.EMPTY_PLACEHOLDER, a(), 0), i.next(), _ = p(o, 3, "}"), o.braceNest--, o.braceNest > 0 && D(i), o.inLinked && o.braceNest === 0 && (o.inLinked = !1), _;
      case "@":
        return o.braceNest > 0 && T(S.UNTERMINATED_CLOSING_BRACE, a(), 0), _ = Ne(i, o) || O(o), o.braceNest = 0, _;
      default:
        let y = !0, w = !0, oe = !0;
        if (H(i))
          return o.braceNest > 0 && T(S.UNTERMINATED_CLOSING_BRACE, a(), 0), _ = p(o, 1, be(i)), o.braceNest = 0, o.inLinked = !1, _;
        if (o.braceNest > 0 && (o.currentType === 5 || o.currentType === 6 || o.currentType === 7))
          return T(S.UNTERMINATED_CLOSING_BRACE, a(), 0), o.braceNest = 0, Oe(i, o);
        if (y = v(i, o))
          return _ = p(o, 5, Ve(i)), D(i), _;
        if (w = N(i, o))
          return _ = p(o, 6, we(i)), D(i), _;
        if (oe = g(i, o))
          return _ = p(o, 7, We(i)), D(i), _;
        if (!y && !w && !oe)
          return _ = p(o, 13, xe(i)), T(S.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, _.value), D(i), _;
        break;
    }
    return _;
  }
  function Ne(i, o) {
    const { currentType: _ } = o;
    let C = null;
    const y = i.currentChar();
    switch ((_ === 8 || _ === 9 || _ === 12 || _ === 10) && (y === J || y === Ee) && T(S.INVALID_LINKED_FORMAT, a(), 0), y) {
      case "@":
        return i.next(), C = p(o, 8, "@"), o.inLinked = !0, C;
      case ".":
        return D(i), i.next(), p(o, 9, ".");
      case ":":
        return D(i), i.next(), p(o, 10, ":");
      default:
        return H(i) ? (C = p(o, 1, be(i)), o.braceNest = 0, o.inLinked = !1, C) : A(i, o) || V(i, o) ? (D(i), Ne(i, o)) : h(i, o) ? (D(i), p(o, 12, Ge(i))) : U(i, o) ? (D(i), y === "{" ? Ie(i, o) || C : p(o, 11, Ye(i))) : (_ === 8 && T(S.INVALID_LINKED_FORMAT, a(), 0), o.braceNest = 0, o.inLinked = !1, Oe(i, o));
    }
  }
  function Oe(i, o) {
    let _ = { type: 14 };
    if (o.braceNest > 0)
      return Ie(i, o) || O(o);
    if (o.inLinked)
      return Ne(i, o) || O(o);
    switch (i.currentChar()) {
      case "{":
        return Ie(i, o) || O(o);
      case "}":
        return T(S.UNBALANCED_CLOSING_BRACE, a(), 0), i.next(), p(o, 3, "}");
      case "@":
        return Ne(i, o) || O(o);
      default:
        if (H(i))
          return _ = p(o, 1, be(i)), o.braceNest = 0, o.inLinked = !1, _;
        const { isModulo: y, hasSpace: w } = j(i);
        if (y)
          return w ? p(o, 0, ve(i)) : p(o, 4, se(i));
        if (re(i))
          return p(o, 0, ve(i));
        break;
    }
    return _;
  }
  function Be() {
    const { currentType: i, offset: o, startLoc: _, endLoc: C } = u;
    return u.lastType = i, u.lastOffset = o, u.lastStartLoc = _, u.lastEndLoc = C, u.offset = r(), u.startLoc = a(), l.currentChar() === pe ? p(u, 14) : Oe(l, u);
  }
  return {
    nextToken: Be,
    currentOffset: r,
    currentPosition: a,
    context: m
  };
}
const Ea = "parser", ga = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g;
function Na(e, t, n) {
  switch (e) {
    case "\\\\":
      return "\\";
    case "\\'":
      return "'";
    default: {
      const l = parseInt(t || n, 16);
      return l <= 55295 || l >= 57344 ? String.fromCodePoint(l) : "\uFFFD";
    }
  }
}
function pa(e = {}) {
  const t = e.location !== !1, { onError: n } = e;
  function l(f, d, v, N, ...g) {
    const A = f.currentPosition();
    if (A.offset += N, A.column += N, n) {
      const h = dt(v, A), V = lt(d, h, {
        domain: Ea,
        args: g
      });
      n(V);
    }
  }
  function r(f, d, v) {
    const N = {
      type: f,
      start: d,
      end: d
    };
    return t && (N.loc = { start: v, end: v }), N;
  }
  function a(f, d, v, N) {
    f.end = d, N && (f.type = N), t && f.loc && (f.loc.end = v);
  }
  function s(f, d) {
    const v = f.context(), N = r(3, v.offset, v.startLoc);
    return N.value = d, a(N, f.currentOffset(), f.currentPosition()), N;
  }
  function c(f, d) {
    const v = f.context(), { lastOffset: N, lastStartLoc: g } = v, A = r(5, N, g);
    return A.index = parseInt(d, 10), f.nextToken(), a(A, f.currentOffset(), f.currentPosition()), A;
  }
  function u(f, d) {
    const v = f.context(), { lastOffset: N, lastStartLoc: g } = v, A = r(4, N, g);
    return A.key = d, f.nextToken(), a(A, f.currentOffset(), f.currentPosition()), A;
  }
  function m(f, d) {
    const v = f.context(), { lastOffset: N, lastStartLoc: g } = v, A = r(9, N, g);
    return A.value = d.replace(ga, Na), f.nextToken(), a(A, f.currentOffset(), f.currentPosition()), A;
  }
  function L(f) {
    const d = f.nextToken(), v = f.context(), { lastOffset: N, lastStartLoc: g } = v, A = r(8, N, g);
    return d.type !== 12 ? (l(f, S.UNEXPECTED_EMPTY_LINKED_MODIFIER, v.lastStartLoc, 0), A.value = "", a(A, N, g), {
      nextConsumeToken: d,
      node: A
    }) : (d.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, ie(d)), A.value = d.value || "", a(A, f.currentOffset(), f.currentPosition()), {
      node: A
    });
  }
  function T(f, d) {
    const v = f.context(), N = r(7, v.offset, v.startLoc);
    return N.value = d, a(N, f.currentOffset(), f.currentPosition()), N;
  }
  function p(f) {
    const d = f.context(), v = r(6, d.offset, d.startLoc);
    let N = f.nextToken();
    if (N.type === 9) {
      const g = L(f);
      v.modifier = g.node, N = g.nextConsumeToken || f.nextToken();
    }
    switch (N.type !== 10 && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(N)), N = f.nextToken(), N.type === 2 && (N = f.nextToken()), N.type) {
      case 11:
        N.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(N)), v.key = T(f, N.value || "");
        break;
      case 5:
        N.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(N)), v.key = u(f, N.value || "");
        break;
      case 6:
        N.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(N)), v.key = c(f, N.value || "");
        break;
      case 7:
        N.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(N)), v.key = m(f, N.value || "");
        break;
      default:
        l(f, S.UNEXPECTED_EMPTY_LINKED_KEY, d.lastStartLoc, 0);
        const g = f.context(), A = r(7, g.offset, g.startLoc);
        return A.value = "", a(A, g.offset, g.startLoc), v.key = A, a(v, g.offset, g.startLoc), {
          nextConsumeToken: N,
          node: v
        };
    }
    return a(v, f.currentOffset(), f.currentPosition()), {
      node: v
    };
  }
  function O(f) {
    const d = f.context(), v = d.currentType === 1 ? f.currentOffset() : d.offset, N = d.currentType === 1 ? d.endLoc : d.startLoc, g = r(2, v, N);
    g.items = [];
    let A = null;
    do {
      const U = A || f.nextToken();
      switch (A = null, U.type) {
        case 0:
          U.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(U)), g.items.push(s(f, U.value || ""));
          break;
        case 6:
          U.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(U)), g.items.push(c(f, U.value || ""));
          break;
        case 5:
          U.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(U)), g.items.push(u(f, U.value || ""));
          break;
        case 7:
          U.value == null && l(f, S.UNEXPECTED_LEXICAL_ANALYSIS, d.lastStartLoc, 0, ie(U)), g.items.push(m(f, U.value || ""));
          break;
        case 8:
          const H = p(f);
          g.items.push(H.node), A = H.nextConsumeToken || null;
          break;
      }
    } while (d.currentType !== 14 && d.currentType !== 1);
    const h = d.currentType === 1 ? d.lastOffset : f.currentOffset(), V = d.currentType === 1 ? d.lastEndLoc : f.currentPosition();
    return a(g, h, V), g;
  }
  function P(f, d, v, N) {
    const g = f.context();
    let A = N.items.length === 0;
    const h = r(1, d, v);
    h.cases = [], h.cases.push(N);
    do {
      const V = O(f);
      A || (A = V.items.length === 0), h.cases.push(V);
    } while (g.currentType !== 14);
    return A && l(f, S.MUST_HAVE_MESSAGES_IN_PLURAL, v, 0), a(h, f.currentOffset(), f.currentPosition()), h;
  }
  function k(f) {
    const d = f.context(), { offset: v, startLoc: N } = d, g = O(f);
    return d.currentType === 14 ? g : P(f, v, N, g);
  }
  function D(f) {
    const d = da(f, K({}, e)), v = d.context(), N = r(0, v.offset, v.startLoc);
    return t && N.loc && (N.loc.source = f), N.body = k(d), v.currentType !== 14 && l(d, S.UNEXPECTED_LEXICAL_ANALYSIS, v.lastStartLoc, 0, f[v.offset] || ""), a(N, d.currentOffset(), d.currentPosition()), N;
  }
  return { parse: D };
}
function ie(e) {
  if (e.type === 14)
    return "EOF";
  const t = (e.value || "").replace(/\r?\n/gu, "\\n");
  return t.length > 10 ? t.slice(0, 9) + "\u2026" : t;
}
function La(e, t = {}) {
  const n = {
    ast: e,
    helpers: /* @__PURE__ */ new Set()
  };
  return { context: () => n, helper: (a) => (n.helpers.add(a), a) };
}
function Wt(e, t) {
  for (let n = 0; n < e.length; n++)
    kt(e[n], t);
}
function kt(e, t) {
  switch (e.type) {
    case 1:
      Wt(e.cases, t), t.helper("plural");
      break;
    case 2:
      Wt(e.items, t);
      break;
    case 6:
      kt(e.key, t), t.helper("linked"), t.helper("type");
      break;
    case 5:
      t.helper("interpolate"), t.helper("list");
      break;
    case 4:
      t.helper("interpolate"), t.helper("named");
      break;
  }
}
function Ta(e, t = {}) {
  const n = La(e);
  n.helper("normalize"), e.body && kt(e.body, n);
  const l = n.context();
  e.helpers = Array.from(l.helpers);
}
function va(e, t) {
  const { sourceMap: n, filename: l, breakLineCode: r, needIndent: a } = t, s = {
    source: e.loc.source,
    filename: l,
    code: "",
    column: 1,
    line: 1,
    offset: 0,
    map: void 0,
    breakLineCode: r,
    needIndent: a,
    indentLevel: 0
  }, c = () => s;
  function u(k, D) {
    s.code += k;
  }
  function m(k, D = !0) {
    const f = D ? r : "";
    u(a ? f + "  ".repeat(k) : f);
  }
  function L(k = !0) {
    const D = ++s.indentLevel;
    k && m(D);
  }
  function T(k = !0) {
    const D = --s.indentLevel;
    k && m(D);
  }
  function p() {
    m(s.indentLevel);
  }
  return {
    context: c,
    push: u,
    indent: L,
    deindent: T,
    newline: p,
    helper: (k) => `_${k}`,
    needIndent: () => s.needIndent
  };
}
function ba(e, t) {
  const { helper: n } = e;
  e.push(`${n("linked")}(`), Fe(e, t.key), t.modifier ? (e.push(", "), Fe(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Ia(e, t) {
  const { helper: n, needIndent: l } = e;
  e.push(`${n("normalize")}([`), e.indent(l());
  const r = t.items.length;
  for (let a = 0; a < r && (Fe(e, t.items[a]), a !== r - 1); a++)
    e.push(", ");
  e.deindent(l()), e.push("])");
}
function Oa(e, t) {
  const { helper: n, needIndent: l } = e;
  if (t.cases.length > 1) {
    e.push(`${n("plural")}([`), e.indent(l());
    const r = t.cases.length;
    for (let a = 0; a < r && (Fe(e, t.cases[a]), a !== r - 1); a++)
      e.push(", ");
    e.deindent(l()), e.push("])");
  }
}
function ha(e, t) {
  t.body ? Fe(e, t.body) : e.push("null");
}
function Fe(e, t) {
  const { helper: n } = e;
  switch (t.type) {
    case 0:
      ha(e, t);
      break;
    case 1:
      Oa(e, t);
      break;
    case 2:
      Ia(e, t);
      break;
    case 6:
      ba(e, t);
      break;
    case 8:
      e.push(JSON.stringify(t.value), t);
      break;
    case 7:
      e.push(JSON.stringify(t.value), t);
      break;
    case 5:
      e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
      break;
    case 4:
      e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
      break;
    case 9:
      e.push(JSON.stringify(t.value), t);
      break;
    case 3:
      e.push(JSON.stringify(t.value), t);
      break;
    default:
      if (process.env.NODE_ENV !== "production")
        throw new Error(`unhandled codegen node type: ${t.type}`);
  }
}
const Aa = (e, t = {}) => {
  const n = I(t.mode) ? t.mode : "normal", l = I(t.filename) ? t.filename : "message.intl", r = !!t.sourceMap, a = t.breakLineCode != null ? t.breakLineCode : n === "arrow" ? ";" : `
`, s = t.needIndent ? t.needIndent : n !== "arrow", c = e.helpers || [], u = va(e, {
    mode: n,
    filename: l,
    sourceMap: r,
    breakLineCode: a,
    needIndent: s
  });
  u.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), u.indent(s), c.length > 0 && (u.push(`const { ${c.map((T) => `${T}: _${T}`).join(", ")} } = ctx`), u.newline()), u.push("return "), Fe(u, e), u.deindent(s), u.push("}");
  const { code: m, map: L } = u.context();
  return {
    ast: e,
    code: m,
    map: L ? L.toJSON() : void 0
  };
};
function Ca(e, t = {}) {
  const n = K({}, t), r = pa(n).parse(e);
  return Ta(r, n), Aa(r, n);
}
/*!
  * devtools-if v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const dn = {
  I18nInit: "i18n:init",
  FunctionTranslate: "function:translate"
};
/*!
  * core-base v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Te = [];
Te[0] = {
  w: [0],
  i: [3, 0],
  ["["]: [4],
  o: [7]
};
Te[1] = {
  w: [1],
  ["."]: [2],
  ["["]: [4],
  o: [7]
};
Te[2] = {
  w: [2],
  i: [3, 0],
  [0]: [3, 0]
};
Te[3] = {
  i: [3, 0],
  [0]: [3, 0],
  w: [1, 1],
  ["."]: [2, 1],
  ["["]: [4, 1],
  o: [7, 1]
};
Te[4] = {
  ["'"]: [5, 0],
  ['"']: [6, 0],
  ["["]: [
    4,
    2
  ],
  ["]"]: [1, 3],
  o: 8,
  l: [4, 0]
};
Te[5] = {
  ["'"]: [4, 0],
  o: 8,
  l: [5, 0]
};
Te[6] = {
  ['"']: [4, 0],
  o: 8,
  l: [6, 0]
};
const ka = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Da(e) {
  return ka.test(e);
}
function Pa(e) {
  const t = e.charCodeAt(0), n = e.charCodeAt(e.length - 1);
  return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Sa(e) {
  if (e == null)
    return "o";
  switch (e.charCodeAt(0)) {
    case 91:
    case 93:
    case 46:
    case 34:
    case 39:
      return e;
    case 95:
    case 36:
    case 45:
      return "i";
    case 9:
    case 10:
    case 13:
    case 160:
    case 65279:
    case 8232:
    case 8233:
      return "w";
  }
  return "i";
}
function Ra(e) {
  const t = e.trim();
  return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Da(t) ? Pa(t) : "*" + t;
}
function ya(e) {
  const t = [];
  let n = -1, l = 0, r = 0, a, s, c, u, m, L, T;
  const p = [];
  p[0] = () => {
    s === void 0 ? s = c : s += c;
  }, p[1] = () => {
    s !== void 0 && (t.push(s), s = void 0);
  }, p[2] = () => {
    p[0](), r++;
  }, p[3] = () => {
    if (r > 0)
      r--, l = 4, p[0]();
    else {
      if (r = 0, s === void 0 || (s = Ra(s), s === !1))
        return !1;
      p[1]();
    }
  };
  function O() {
    const P = e[n + 1];
    if (l === 5 && P === "'" || l === 6 && P === '"')
      return n++, c = "\\" + P, p[0](), !0;
  }
  for (; l !== null; )
    if (n++, a = e[n], !(a === "\\" && O())) {
      if (u = Sa(a), T = Te[l], m = T[u] || T.l || 8, m === 8 || (l = m[0], m[1] !== void 0 && (L = p[m[1]], L && (c = a, L() === !1))))
        return;
      if (l === 7)
        return t;
    }
}
const $t = /* @__PURE__ */ new Map();
function Fa(e, t) {
  return W(e) ? e[t] : null;
}
function Ma(e, t) {
  if (!W(e))
    return null;
  let n = $t.get(t);
  if (n || (n = ya(t), n && $t.set(t, n)), !n)
    return null;
  const l = n.length;
  let r = e, a = 0;
  for (; a < l; ) {
    const s = r[n[a]];
    if (s === void 0)
      return null;
    r = s, a++;
  }
  return r;
}
const Ua = (e) => e, Va = (e) => "", wa = "text", Wa = (e) => e.length === 0 ? "" : e.join(""), $a = ra;
function Ht(e, t) {
  return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0;
}
function Ha(e) {
  const t = B(e.pluralIndex) ? e.pluralIndex : -1;
  return e.named && (B(e.named.count) || B(e.named.n)) ? B(e.named.count) ? e.named.count : B(e.named.n) ? e.named.n : t : t;
}
function xa(e, t) {
  t.count || (t.count = e), t.n || (t.n = e);
}
function Ga(e = {}) {
  const t = e.locale, n = Ha(e), l = W(e.pluralRules) && I(t) && x(e.pluralRules[t]) ? e.pluralRules[t] : Ht, r = W(e.pluralRules) && I(t) && x(e.pluralRules[t]) ? Ht : void 0, a = (f) => f[l(n, f.length, r)], s = e.list || [], c = (f) => s[f], u = e.named || {};
  B(e.pluralIndex) && xa(n, u);
  const m = (f) => u[f];
  function L(f) {
    const d = x(e.messages) ? e.messages(f) : W(e.messages) ? e.messages[f] : !1;
    return d || (e.parent ? e.parent.message(f) : Va);
  }
  const T = (f) => e.modifiers ? e.modifiers[f] : Ua, p = R(e.processor) && x(e.processor.normalize) ? e.processor.normalize : Wa, O = R(e.processor) && x(e.processor.interpolate) ? e.processor.interpolate : $a, P = R(e.processor) && I(e.processor.type) ? e.processor.type : wa, D = {
    list: c,
    named: m,
    plural: a,
    linked: (f, ...d) => {
      const [v, N] = d;
      let g = "text", A = "";
      d.length === 1 ? W(v) ? (A = v.modifier || A, g = v.type || g) : I(v) && (A = v || A) : d.length === 2 && (I(v) && (A = v || A), I(N) && (g = N || g));
      let h = L(f)(D);
      return g === "vnode" && $(h) && A && (h = h[0]), A ? T(A)(h, g) : h;
    },
    message: L,
    type: P,
    interpolate: O,
    normalize: p
  };
  return D;
}
let Je = null;
function Ya(e) {
  Je = e;
}
function Ba(e, t, n) {
  Je && Je.emit(dn.I18nInit, {
    timestamp: Date.now(),
    i18n: e,
    version: t,
    meta: n
  });
}
const Xa = /* @__PURE__ */ Ka(dn.FunctionTranslate);
function Ka(e) {
  return (t) => Je && Je.emit(e, t);
}
const ee = {
  NOT_FOUND_KEY: 1,
  FALLBACK_TO_TRANSLATE: 2,
  CANNOT_FORMAT_NUMBER: 3,
  FALLBACK_TO_NUMBER_FORMAT: 4,
  CANNOT_FORMAT_DATE: 5,
  FALLBACK_TO_DATE_FORMAT: 6,
  __EXTEND_POINT__: 7
}, ja = {
  [ee.NOT_FOUND_KEY]: "Not found '{key}' key in '{locale}' locale messages.",
  [ee.FALLBACK_TO_TRANSLATE]: "Fall back to translate '{key}' key with '{target}' locale.",
  [ee.CANNOT_FORMAT_NUMBER]: "Cannot format a number value due to not supported Intl.NumberFormat.",
  [ee.FALLBACK_TO_NUMBER_FORMAT]: "Fall back to number format '{key}' key with '{target}' locale.",
  [ee.CANNOT_FORMAT_DATE]: "Cannot format a date value due to not supported Intl.DateTimeFormat.",
  [ee.FALLBACK_TO_DATE_FORMAT]: "Fall back to datetime format '{key}' key with '{target}' locale."
};
function Me(e, ...t) {
  return at(ja[e], ...t);
}
function Qa(e, t, n) {
  return [.../* @__PURE__ */ new Set([
    n,
    ...$(t) ? t : W(t) ? Object.keys(t) : I(t) ? [t] : [n]
  ])];
}
function En(e, t, n) {
  const l = I(n) ? n : ze, r = e;
  r.__localeChainCache || (r.__localeChainCache = /* @__PURE__ */ new Map());
  let a = r.__localeChainCache.get(l);
  if (!a) {
    a = [];
    let s = [n];
    for (; $(s); )
      s = xt(a, s, t);
    const c = $(t) || !R(t) ? t : t.default ? t.default : null;
    s = I(c) ? [c] : c, $(s) && xt(a, s, !1), r.__localeChainCache.set(l, a);
  }
  return a;
}
function xt(e, t, n) {
  let l = !0;
  for (let r = 0; r < t.length && F(l); r++) {
    const a = t[r];
    I(a) && (l = Ja(e, t[r], n));
  }
  return l;
}
function Ja(e, t, n) {
  let l;
  const r = t.split("-");
  do {
    const a = r.join("-");
    l = qa(e, a, n), r.splice(-1, 1);
  } while (r.length && l === !0);
  return l;
}
function qa(e, t, n) {
  let l = !1;
  if (!e.includes(t) && (l = !0, t)) {
    l = t[t.length - 1] !== "!";
    const r = t.replace(/!/g, "");
    e.push(r), ($(n) || R(n)) && n[r] && (l = n[r]);
  }
  return l;
}
const Za = "9.2.2", st = -1, ze = "en-US", nt = "", Gt = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function za() {
  return {
    upper: (e, t) => t === "text" && I(e) ? e.toUpperCase() : t === "vnode" && W(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
    lower: (e, t) => t === "text" && I(e) ? e.toLowerCase() : t === "vnode" && W(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
    capitalize: (e, t) => t === "text" && I(e) ? Gt(e) : t === "vnode" && W(e) && "__v_isVNode" in e ? Gt(e.children) : e
  };
}
let gn;
function er(e) {
  gn = e;
}
let Nn;
function tr(e) {
  Nn = e;
}
let pn;
function nr(e) {
  pn = e;
}
let Ln = null;
const Yt = (e) => {
  Ln = e;
}, ar = () => Ln;
let Tn = null;
const Bt = (e) => {
  Tn = e;
}, rr = () => Tn;
let Xt = 0;
function lr(e = {}) {
  const t = I(e.version) ? e.version : Za, n = I(e.locale) ? e.locale : ze, l = $(e.fallbackLocale) || R(e.fallbackLocale) || I(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n, r = R(e.messages) ? e.messages : { [n]: {} }, a = R(e.datetimeFormats) ? e.datetimeFormats : { [n]: {} }, s = R(e.numberFormats) ? e.numberFormats : { [n]: {} }, c = K({}, e.modifiers || {}, za()), u = e.pluralRules || {}, m = x(e.missing) ? e.missing : null, L = F(e.missingWarn) || Le(e.missingWarn) ? e.missingWarn : !0, T = F(e.fallbackWarn) || Le(e.fallbackWarn) ? e.fallbackWarn : !0, p = !!e.fallbackFormat, O = !!e.unresolving, P = x(e.postTranslation) ? e.postTranslation : null, k = R(e.processor) ? e.processor : null, D = F(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, f = !!e.escapeParameter, d = x(e.messageCompiler) ? e.messageCompiler : gn, v = x(e.messageResolver) ? e.messageResolver : Nn || Fa, N = x(e.localeFallbacker) ? e.localeFallbacker : pn || Qa, g = W(e.fallbackContext) ? e.fallbackContext : void 0, A = x(e.onWarn) ? e.onWarn : z, h = e, V = W(h.__datetimeFormatters) ? h.__datetimeFormatters : /* @__PURE__ */ new Map(), U = W(h.__numberFormatters) ? h.__numberFormatters : /* @__PURE__ */ new Map(), H = W(h.__meta) ? h.__meta : {};
  Xt++;
  const j = {
    version: t,
    cid: Xt,
    locale: n,
    fallbackLocale: l,
    messages: r,
    modifiers: c,
    pluralRules: u,
    missing: m,
    missingWarn: L,
    fallbackWarn: T,
    fallbackFormat: p,
    unresolving: O,
    postTranslation: P,
    processor: k,
    warnHtmlMessage: D,
    escapeParameter: f,
    messageCompiler: d,
    messageResolver: v,
    localeFallbacker: N,
    fallbackContext: g,
    onWarn: A,
    __meta: H
  };
  return j.datetimeFormats = a, j.numberFormats = s, j.__datetimeFormatters = V, j.__numberFormatters = U, process.env.NODE_ENV !== "production" && (j.__v_emitter = h.__v_emitter != null ? h.__v_emitter : void 0), (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) && Ba(j, t, H), j;
}
function ot(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function vn(e, t) {
  return e instanceof RegExp ? e.test(t) : e;
}
function Dt(e, t, n, l, r) {
  const { missing: a, onWarn: s } = e;
  if (process.env.NODE_ENV !== "production") {
    const c = e.__v_emitter;
    c && c.emit("missing", {
      locale: n,
      key: t,
      type: r,
      groupId: `${r}:${t}`
    });
  }
  if (a !== null) {
    const c = a(e, n, t, r);
    return I(c) ? c : t;
  } else
    return process.env.NODE_ENV !== "production" && vn(l, t) && s(Me(ee.NOT_FOUND_KEY, { key: t, locale: n })), t;
}
function Xe(e, t, n) {
  const l = e;
  l.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
const sr = /<\/?[\w\s="/.':;#-\/]+>/, or = "Detected HTML in '{source}' message. Recommend not using HTML messages to avoid XSS.";
function ir(e, t) {
  (F(t.warnHtmlMessage) ? t.warnHtmlMessage : !0) && sr.test(e) && z(at(or, { source: e }));
}
const cr = (e) => e;
let Kt = /* @__PURE__ */ Object.create(null);
function ur(e, t = {}) {
  {
    process.env.NODE_ENV !== "production" && ir(e, t);
    const l = (t.onCacheKey || cr)(e), r = Kt[l];
    if (r)
      return r;
    let a = !1;
    const s = t.onError || oa;
    t.onError = (m) => {
      a = !0, s(m);
    };
    const { code: c } = Ca(e, t), u = new Function(`return ${c}`)();
    return a ? u : Kt[l] = u;
  }
}
let bn = S.__EXTEND_POINT__;
const ut = () => ++bn, ge = {
  INVALID_ARGUMENT: bn,
  INVALID_DATE_ARGUMENT: ut(),
  INVALID_ISO_DATE_ARGUMENT: ut(),
  __EXTEND_POINT__: ut()
};
function ye(e) {
  return lt(e, null, process.env.NODE_ENV !== "production" ? { messages: fr } : void 0);
}
const fr = {
  [ge.INVALID_ARGUMENT]: "Invalid arguments",
  [ge.INVALID_DATE_ARGUMENT]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
  [ge.INVALID_ISO_DATE_ARGUMENT]: "The argument provided is not a valid ISO date string"
}, jt = () => "", ce = (e) => x(e);
function Qt(e, ...t) {
  const { fallbackFormat: n, postTranslation: l, unresolving: r, messageCompiler: a, fallbackLocale: s, messages: c } = e, [u, m] = Et(...t), L = F(m.missingWarn) ? m.missingWarn : e.missingWarn, T = F(m.fallbackWarn) ? m.fallbackWarn : e.fallbackWarn, p = F(m.escapeParameter) ? m.escapeParameter : e.escapeParameter, O = !!m.resolvedMessage, P = I(m.default) || F(m.default) ? F(m.default) ? a ? u : () => u : m.default : n ? a ? u : () => u : "", k = n || P !== "", D = I(m.locale) ? m.locale : e.locale;
  p && _r(m);
  let [f, d, v] = O ? [
    u,
    D,
    c[D] || {}
  ] : In(e, u, D, s, T, L), N = f, g = u;
  if (!O && !(I(N) || ce(N)) && k && (N = P, g = N), !O && (!(I(N) || ce(N)) || !I(d)))
    return r ? st : u;
  if (process.env.NODE_ENV !== "production" && I(N) && e.messageCompiler == null)
    return z(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${u}'.`), u;
  let A = !1;
  const h = () => {
    A = !0;
  }, V = ce(N) ? N : On(e, u, d, N, g, h);
  if (A)
    return N;
  const U = Er(e, d, v, m), H = Ga(U), j = mr(e, V, H), re = l ? l(j, u) : j;
  if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
    const ne = {
      timestamp: Date.now(),
      key: I(u) ? u : ce(N) ? N.key : "",
      locale: d || (ce(N) ? N.locale : ""),
      format: I(N) ? N : ce(N) ? N.source : "",
      message: re
    };
    ne.meta = K({}, e.__meta, ar() || {}), Xa(ne);
  }
  return re;
}
function _r(e) {
  $(e.list) ? e.list = e.list.map((t) => I(t) ? Ut(t) : t) : W(e.named) && Object.keys(e.named).forEach((t) => {
    I(e.named[t]) && (e.named[t] = Ut(e.named[t]));
  });
}
function In(e, t, n, l, r, a) {
  const { messages: s, onWarn: c, messageResolver: u, localeFallbacker: m } = e, L = m(e, l, n);
  let T = {}, p, O = null, P = n, k = null;
  const D = "translate";
  for (let f = 0; f < L.length; f++) {
    if (p = k = L[f], process.env.NODE_ENV !== "production" && n !== p && ot(r, t) && c(Me(ee.FALLBACK_TO_TRANSLATE, {
      key: t,
      target: p
    })), process.env.NODE_ENV !== "production" && n !== p) {
      const A = e.__v_emitter;
      A && A.emit("fallback", {
        type: D,
        key: t,
        from: P,
        to: k,
        groupId: `${D}:${t}`
      });
    }
    T = s[p] || {};
    let d = null, v, N;
    if (process.env.NODE_ENV !== "production" && _e && (d = window.performance.now(), v = "intlify-message-resolve-start", N = "intlify-message-resolve-end", te && te(v)), (O = u(T, t)) === null && (O = T[t]), process.env.NODE_ENV !== "production" && _e) {
      const A = window.performance.now(), h = e.__v_emitter;
      h && d && O && h.emit("message-resolve", {
        type: "message-resolve",
        key: t,
        message: O,
        time: A - d,
        groupId: `${D}:${t}`
      }), v && N && te && Ae && (te(N), Ae("intlify message resolve", v, N));
    }
    if (I(O) || x(O))
      break;
    const g = Dt(
      e,
      t,
      p,
      a,
      D
    );
    g !== t && (O = g), P = k;
  }
  return [O, p, T];
}
function On(e, t, n, l, r, a) {
  const { messageCompiler: s, warnHtmlMessage: c } = e;
  if (ce(l)) {
    const p = l;
    return p.locale = p.locale || n, p.key = p.key || t, p;
  }
  if (s == null) {
    const p = () => l;
    return p.locale = n, p.key = t, p;
  }
  let u = null, m, L;
  process.env.NODE_ENV !== "production" && _e && (u = window.performance.now(), m = "intlify-message-compilation-start", L = "intlify-message-compilation-end", te && te(m));
  const T = s(l, dr(e, n, r, l, c, a));
  if (process.env.NODE_ENV !== "production" && _e) {
    const p = window.performance.now(), O = e.__v_emitter;
    O && u && O.emit("message-compilation", {
      type: "message-compilation",
      message: l,
      time: p - u,
      groupId: `translate:${t}`
    }), m && L && te && Ae && (te(L), Ae("intlify message compilation", m, L));
  }
  return T.locale = n, T.key = t, T.source = l, T;
}
function mr(e, t, n) {
  let l = null, r, a;
  process.env.NODE_ENV !== "production" && _e && (l = window.performance.now(), r = "intlify-message-evaluation-start", a = "intlify-message-evaluation-end", te && te(r));
  const s = t(n);
  if (process.env.NODE_ENV !== "production" && _e) {
    const c = window.performance.now(), u = e.__v_emitter;
    u && l && u.emit("message-evaluation", {
      type: "message-evaluation",
      value: s,
      time: c - l,
      groupId: `translate:${t.key}`
    }), r && a && te && Ae && (te(a), Ae("intlify message evaluation", r, a));
  }
  return s;
}
function Et(...e) {
  const [t, n, l] = e, r = {};
  if (!I(t) && !B(t) && !ce(t))
    throw ye(ge.INVALID_ARGUMENT);
  const a = B(t) ? String(t) : (ce(t), t);
  return B(n) ? r.plural = n : I(n) ? r.default = n : R(n) && !rt(n) ? r.named = n : $(n) && (r.list = n), B(l) ? r.plural = l : I(l) ? r.default = l : R(l) && K(r, l), [a, r];
}
function dr(e, t, n, l, r, a) {
  return {
    warnHtmlMessage: r,
    onError: (s) => {
      if (a && a(s), process.env.NODE_ENV !== "production") {
        const c = `Message compilation error: ${s.message}`, u = s.location && la(l, s.location.start.offset, s.location.end.offset), m = e.__v_emitter;
        m && m.emit("compile-error", {
          message: l,
          error: s.message,
          start: s.location && s.location.start.offset,
          end: s.location && s.location.end.offset,
          groupId: `translate:${n}`
        }), console.error(u ? `${c}
${u}` : c);
      } else
        throw s;
    },
    onCacheKey: (s) => ea(t, n, s)
  };
}
function Er(e, t, n, l) {
  const { modifiers: r, pluralRules: a, messageResolver: s, fallbackLocale: c, fallbackWarn: u, missingWarn: m, fallbackContext: L } = e, p = {
    locale: t,
    modifiers: r,
    pluralRules: a,
    messages: (O) => {
      let P = s(n, O);
      if (P == null && L) {
        const [, , k] = In(L, O, t, c, u, m);
        P = s(k, O);
      }
      if (I(P)) {
        let k = !1;
        const f = On(e, O, t, P, O, () => {
          k = !0;
        });
        return k ? jt : f;
      } else
        return ce(P) ? P : jt;
    }
  };
  return e.processor && (p.processor = e.processor), l.list && (p.list = l.list), l.named && (p.named = l.named), B(l.plural) && (p.pluralIndex = l.plural), p;
}
const Jt = typeof Intl < "u", hn = {
  dateTimeFormat: Jt && typeof Intl.DateTimeFormat < "u",
  numberFormat: Jt && typeof Intl.NumberFormat < "u"
};
function qt(e, ...t) {
  const { datetimeFormats: n, unresolving: l, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __datetimeFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !hn.dateTimeFormat)
    return a(Me(ee.CANNOT_FORMAT_DATE)), nt;
  const [u, m, L, T] = gt(...t), p = F(L.missingWarn) ? L.missingWarn : e.missingWarn, O = F(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn, P = !!L.part, k = I(L.locale) ? L.locale : e.locale, D = s(
    e,
    r,
    k
  );
  if (!I(u) || u === "")
    return new Intl.DateTimeFormat(k, T).format(m);
  let f = {}, d, v = null, N = k, g = null;
  const A = "datetime format";
  for (let U = 0; U < D.length; U++) {
    if (d = g = D[U], process.env.NODE_ENV !== "production" && k !== d && ot(O, u) && a(Me(ee.FALLBACK_TO_DATE_FORMAT, {
      key: u,
      target: d
    })), process.env.NODE_ENV !== "production" && k !== d) {
      const H = e.__v_emitter;
      H && H.emit("fallback", {
        type: A,
        key: u,
        from: N,
        to: g,
        groupId: `${A}:${u}`
      });
    }
    if (f = n[d] || {}, v = f[u], R(v))
      break;
    Dt(e, u, d, p, A), N = g;
  }
  if (!R(v) || !I(d))
    return l ? st : u;
  let h = `${d}__${u}`;
  rt(T) || (h = `${h}__${JSON.stringify(T)}`);
  let V = c.get(h);
  return V || (V = new Intl.DateTimeFormat(d, K({}, v, T)), c.set(h, V)), P ? V.formatToParts(m) : V.format(m);
}
const An = [
  "localeMatcher",
  "weekday",
  "era",
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "timeZoneName",
  "formatMatcher",
  "hour12",
  "timeZone",
  "dateStyle",
  "timeStyle",
  "calendar",
  "dayPeriod",
  "numberingSystem",
  "hourCycle",
  "fractionalSecondDigits"
];
function gt(...e) {
  const [t, n, l, r] = e, a = {};
  let s = {}, c;
  if (I(t)) {
    const u = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
    if (!u)
      throw ye(ge.INVALID_ISO_DATE_ARGUMENT);
    const m = u[3] ? u[3].trim().startsWith("T") ? `${u[1].trim()}${u[3].trim()}` : `${u[1].trim()}T${u[3].trim()}` : u[1].trim();
    c = new Date(m);
    try {
      c.toISOString();
    } catch {
      throw ye(ge.INVALID_ISO_DATE_ARGUMENT);
    }
  } else if (na(t)) {
    if (isNaN(t.getTime()))
      throw ye(ge.INVALID_DATE_ARGUMENT);
    c = t;
  } else if (B(t))
    c = t;
  else
    throw ye(ge.INVALID_ARGUMENT);
  return I(n) ? a.key = n : R(n) && Object.keys(n).forEach((u) => {
    An.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), I(l) ? a.locale = l : R(l) && (s = l), R(r) && (s = r), [a.key || "", c, a, s];
}
function Zt(e, t, n) {
  const l = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    !l.__datetimeFormatters.has(a) || l.__datetimeFormatters.delete(a);
  }
}
function zt(e, ...t) {
  const { numberFormats: n, unresolving: l, fallbackLocale: r, onWarn: a, localeFallbacker: s } = e, { __numberFormatters: c } = e;
  if (process.env.NODE_ENV !== "production" && !hn.numberFormat)
    return a(Me(ee.CANNOT_FORMAT_NUMBER)), nt;
  const [u, m, L, T] = Nt(...t), p = F(L.missingWarn) ? L.missingWarn : e.missingWarn, O = F(L.fallbackWarn) ? L.fallbackWarn : e.fallbackWarn, P = !!L.part, k = I(L.locale) ? L.locale : e.locale, D = s(
    e,
    r,
    k
  );
  if (!I(u) || u === "")
    return new Intl.NumberFormat(k, T).format(m);
  let f = {}, d, v = null, N = k, g = null;
  const A = "number format";
  for (let U = 0; U < D.length; U++) {
    if (d = g = D[U], process.env.NODE_ENV !== "production" && k !== d && ot(O, u) && a(Me(ee.FALLBACK_TO_NUMBER_FORMAT, {
      key: u,
      target: d
    })), process.env.NODE_ENV !== "production" && k !== d) {
      const H = e.__v_emitter;
      H && H.emit("fallback", {
        type: A,
        key: u,
        from: N,
        to: g,
        groupId: `${A}:${u}`
      });
    }
    if (f = n[d] || {}, v = f[u], R(v))
      break;
    Dt(e, u, d, p, A), N = g;
  }
  if (!R(v) || !I(d))
    return l ? st : u;
  let h = `${d}__${u}`;
  rt(T) || (h = `${h}__${JSON.stringify(T)}`);
  let V = c.get(h);
  return V || (V = new Intl.NumberFormat(d, K({}, v, T)), c.set(h, V)), P ? V.formatToParts(m) : V.format(m);
}
const Cn = [
  "localeMatcher",
  "style",
  "currency",
  "currencyDisplay",
  "currencySign",
  "useGrouping",
  "minimumIntegerDigits",
  "minimumFractionDigits",
  "maximumFractionDigits",
  "minimumSignificantDigits",
  "maximumSignificantDigits",
  "compactDisplay",
  "notation",
  "signDisplay",
  "unit",
  "unitDisplay",
  "roundingMode",
  "roundingPriority",
  "roundingIncrement",
  "trailingZeroDisplay"
];
function Nt(...e) {
  const [t, n, l, r] = e, a = {};
  let s = {};
  if (!B(t))
    throw ye(ge.INVALID_ARGUMENT);
  const c = t;
  return I(n) ? a.key = n : R(n) && Object.keys(n).forEach((u) => {
    Cn.includes(u) ? s[u] = n[u] : a[u] = n[u];
  }), I(l) ? a.locale = l : R(l) && (s = l), R(r) && (s = r), [a.key || "", c, a, s];
}
function en(e, t, n) {
  const l = e;
  for (const r in n) {
    const a = `${t}__${r}`;
    !l.__numberFormatters.has(a) || l.__numberFormatters.delete(a);
  }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ke().__INTLIFY_PROD_DEVTOOLS__ = !1);
function gr() {
  return kn().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function kn() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof global < "u" ? global : {};
}
const Nr = typeof Proxy == "function", pr = "devtools-plugin:setup", Lr = "plugin:settings:set";
let Se, pt;
function Tr() {
  var e;
  return Se !== void 0 || (typeof window < "u" && window.performance ? (Se = !0, pt = window.performance) : typeof global < "u" && ((e = global.perf_hooks) === null || e === void 0 ? void 0 : e.performance) ? (Se = !0, pt = global.perf_hooks.performance) : Se = !1), Se;
}
function vr() {
  return Tr() ? pt.now() : Date.now();
}
class br {
  constructor(t, n) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = t, this.hook = n;
    const l = {};
    if (t.settings)
      for (const s in t.settings) {
        const c = t.settings[s];
        l[s] = c.defaultValue;
      }
    const r = `__vue-devtools-plugin-settings__${t.id}`;
    let a = Object.assign({}, l);
    try {
      const s = localStorage.getItem(r), c = JSON.parse(s);
      Object.assign(a, c);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return a;
      },
      setSettings(s) {
        try {
          localStorage.setItem(r, JSON.stringify(s));
        } catch {
        }
        a = s;
      },
      now() {
        return vr();
      }
    }, n && n.on(Lr, (s, c) => {
      s === this.plugin.id && this.fallbacks.setSettings(c);
    }), this.proxiedOn = new Proxy({}, {
      get: (s, c) => this.target ? this.target.on[c] : (...u) => {
        this.onQueue.push({
          method: c,
          args: u
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (s, c) => this.target ? this.target[c] : c === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(c) ? (...u) => (this.targetQueue.push({
        method: c,
        args: u,
        resolve: () => {
        }
      }), this.fallbacks[c](...u)) : (...u) => new Promise((m) => {
        this.targetQueue.push({
          method: c,
          args: u,
          resolve: m
        });
      })
    });
  }
  async setRealTarget(t) {
    this.target = t;
    for (const n of this.onQueue)
      this.target.on[n.method](...n.args);
    for (const n of this.targetQueue)
      n.resolve(await this.target[n.method](...n.args));
  }
}
function Ir(e, t) {
  const n = e, l = kn(), r = gr(), a = Nr && n.enableEarlyProxy;
  if (r && (l.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !a))
    r.emit(pr, e, t);
  else {
    const s = a ? new br(n, r) : null;
    (l.__VUE_DEVTOOLS_PLUGINS__ = l.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: n,
      setupFn: t,
      proxy: s
    }), s && t(s.proxiedTarget);
  }
}
/*!
  * vue-devtools v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const ft = {
  ["vue-devtools-plugin-vue-i18n"]: "Vue I18n devtools",
  ["vue-i18n-resource-inspector"]: "I18n Resources",
  ["vue-i18n-timeline"]: "Vue I18n"
}, Or = {
  ["vue-i18n-resource-inspector"]: "Search for scopes ..."
}, hr = {
  ["vue-i18n-timeline"]: 16764185
};
/*!
  * vue-i18n v9.2.2
  * (c) 2022 kazuya kawaguchi
  * Released under the MIT License.
  */
const Ar = "9.2.2";
function Cr() {
  let e = !1;
  typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (e = !0, Ke().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (e = !0, Ke().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (Ke().__INTLIFY_PROD_DEVTOOLS__ = !1), process.env.NODE_ENV !== "production" && e && console.warn("You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.");
}
let Dn = ee.__EXTEND_POINT__;
const Re = () => ++Dn, X = {
  FALLBACK_TO_ROOT: Dn,
  NOT_SUPPORTED_PRESERVE: Re(),
  NOT_SUPPORTED_FORMATTER: Re(),
  NOT_SUPPORTED_PRESERVE_DIRECTIVE: Re(),
  NOT_SUPPORTED_GET_CHOICE_INDEX: Re(),
  COMPONENT_NAME_LEGACY_COMPATIBLE: Re(),
  NOT_FOUND_PARENT_SCOPE: Re()
}, kr = {
  [X.FALLBACK_TO_ROOT]: "Fall back to {type} '{key}' with root locale.",
  [X.NOT_SUPPORTED_PRESERVE]: "Not supported 'preserve'.",
  [X.NOT_SUPPORTED_FORMATTER]: "Not supported 'formatter'.",
  [X.NOT_SUPPORTED_PRESERVE_DIRECTIVE]: "Not supported 'preserveDirectiveContent'.",
  [X.NOT_SUPPORTED_GET_CHOICE_INDEX]: "Not supported 'getChoiceIndex'.",
  [X.COMPONENT_NAME_LEGACY_COMPATIBLE]: "Component name legacy compatible: '{name}' -> 'i18n'",
  [X.NOT_FOUND_PARENT_SCOPE]: "Not found parent scope. use the global scope."
};
function ae(e, ...t) {
  return at(kr[e], ...t);
}
let Pn = S.__EXTEND_POINT__;
const Z = () => ++Pn, M = {
  UNEXPECTED_RETURN_TYPE: Pn,
  INVALID_ARGUMENT: Z(),
  MUST_BE_CALL_SETUP_TOP: Z(),
  NOT_INSLALLED: Z(),
  NOT_AVAILABLE_IN_LEGACY_MODE: Z(),
  REQUIRED_VALUE: Z(),
  INVALID_VALUE: Z(),
  CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Z(),
  NOT_INSLALLED_WITH_PROVIDE: Z(),
  UNEXPECTED_ERROR: Z(),
  NOT_COMPATIBLE_LEGACY_VUE_I18N: Z(),
  BRIDGE_SUPPORT_VUE_2_ONLY: Z(),
  MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Z(),
  NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Z(),
  __EXTEND_POINT__: Z()
};
function Y(e, ...t) {
  return lt(e, null, process.env.NODE_ENV !== "production" ? { messages: Dr, args: t } : void 0);
}
const Dr = {
  [M.UNEXPECTED_RETURN_TYPE]: "Unexpected return type in composer",
  [M.INVALID_ARGUMENT]: "Invalid argument",
  [M.MUST_BE_CALL_SETUP_TOP]: "Must be called at the top of a `setup` function",
  [M.NOT_INSLALLED]: "Need to install with `app.use` function",
  [M.UNEXPECTED_ERROR]: "Unexpected error",
  [M.NOT_AVAILABLE_IN_LEGACY_MODE]: "Not available in legacy mode",
  [M.REQUIRED_VALUE]: "Required in value: {0}",
  [M.INVALID_VALUE]: "Invalid value",
  [M.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN]: "Cannot setup vue-devtools plugin",
  [M.NOT_INSLALLED_WITH_PROVIDE]: "Need to install with `provide` function",
  [M.NOT_COMPATIBLE_LEGACY_VUE_I18N]: "Not compatible legacy VueI18n.",
  [M.BRIDGE_SUPPORT_VUE_2_ONLY]: "vue-i18n-bridge support Vue 2.x only",
  [M.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION]: "Must define \u2018i18n\u2019 option or custom block in Composition API with using local scope in Legacy API mode",
  [M.NOT_AVAILABLE_COMPOSITION_IN_LEGACY]: "Not available Compostion API in Legacy API mode. Please make sure that the legacy API mode is working properly"
}, Lt = /* @__PURE__ */ me("__transrateVNode"), Tt = /* @__PURE__ */ me("__datetimeParts"), vt = /* @__PURE__ */ me("__numberParts"), Ce = /* @__PURE__ */ me("__enableEmitter"), qe = /* @__PURE__ */ me("__disableEmitter"), Sn = me("__setPluralRules");
me("__intlifyMeta");
const Rn = /* @__PURE__ */ me("__injectWithOption");
function bt(e) {
  if (!W(e))
    return e;
  for (const t in e)
    if (!!ht(e, t))
      if (!t.includes("."))
        W(e[t]) && bt(e[t]);
      else {
        const n = t.split("."), l = n.length - 1;
        let r = e;
        for (let a = 0; a < l; a++)
          n[a] in r || (r[n[a]] = {}), r = r[n[a]];
        r[n[l]] = e[t], delete e[t], W(r[n[l]]) && bt(r[n[l]]);
      }
  return e;
}
function it(e, t) {
  const { messages: n, __i18n: l, messageResolver: r, flatJson: a } = t, s = R(n) ? n : $(l) ? {} : { [e]: {} };
  if ($(l) && l.forEach((c) => {
    if ("locale" in c && "resource" in c) {
      const { locale: u, resource: m } = c;
      u ? (s[u] = s[u] || {}, je(m, s[u])) : je(m, s);
    } else
      I(c) && je(JSON.parse(c), s);
  }), r == null && a)
    for (const c in s)
      ht(s, c) && bt(s[c]);
  return s;
}
const tt = (e) => !W(e) || $(e);
function je(e, t) {
  if (tt(e) || tt(t))
    throw Y(M.INVALID_VALUE);
  for (const n in e)
    ht(e, n) && (tt(e[n]) || tt(t[n]) ? t[n] = e[n] : je(e[n], t[n]));
}
function yn(e) {
  return e.type;
}
function Fn(e, t, n) {
  let l = W(t.messages) ? t.messages : {};
  "__i18nGlobal" in n && (l = it(e.locale.value, {
    messages: l,
    __i18n: n.__i18nGlobal
  }));
  const r = Object.keys(l);
  r.length && r.forEach((a) => {
    e.mergeLocaleMessage(a, l[a]);
  });
  {
    if (W(t.datetimeFormats)) {
      const a = Object.keys(t.datetimeFormats);
      a.length && a.forEach((s) => {
        e.mergeDateTimeFormat(s, t.datetimeFormats[s]);
      });
    }
    if (W(t.numberFormats)) {
      const a = Object.keys(t.numberFormats);
      a.length && a.forEach((s) => {
        e.mergeNumberFormat(s, t.numberFormats[s]);
      });
    }
  }
}
function tn(e) {
  return Jn(qn, null, e, 0);
}
const nn = "__INTLIFY_META__";
let an = 0;
function rn(e) {
  return (t, n, l, r) => e(n, l, Qe() || void 0, r);
}
const Pr = () => {
  const e = Qe();
  let t = null;
  return e && (t = yn(e)[nn]) ? { [nn]: t } : null;
};
function Pt(e = {}, t) {
  const { __root: n } = e, l = n === void 0;
  let r = F(e.inheritLocale) ? e.inheritLocale : !0;
  const a = ue(
    n && r ? n.locale.value : I(e.locale) ? e.locale : ze
  ), s = ue(
    n && r ? n.fallbackLocale.value : I(e.fallbackLocale) || $(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : a.value
  ), c = ue(it(a.value, e)), u = ue(R(e.datetimeFormats) ? e.datetimeFormats : { [a.value]: {} }), m = ue(R(e.numberFormats) ? e.numberFormats : { [a.value]: {} });
  let L = n ? n.missingWarn : F(e.missingWarn) || Le(e.missingWarn) ? e.missingWarn : !0, T = n ? n.fallbackWarn : F(e.fallbackWarn) || Le(e.fallbackWarn) ? e.fallbackWarn : !0, p = n ? n.fallbackRoot : F(e.fallbackRoot) ? e.fallbackRoot : !0, O = !!e.fallbackFormat, P = x(e.missing) ? e.missing : null, k = x(e.missing) ? rn(e.missing) : null, D = x(e.postTranslation) ? e.postTranslation : null, f = n ? n.warnHtmlMessage : F(e.warnHtmlMessage) ? e.warnHtmlMessage : !0, d = !!e.escapeParameter;
  const v = n ? n.modifiers : R(e.modifiers) ? e.modifiers : {};
  let N = e.pluralRules || n && n.pluralRules, g;
  g = (() => {
    l && Bt(null);
    const E = {
      version: Ar,
      locale: a.value,
      fallbackLocale: s.value,
      messages: c.value,
      modifiers: v,
      pluralRules: N,
      missing: k === null ? void 0 : k,
      missingWarn: L,
      fallbackWarn: T,
      fallbackFormat: O,
      unresolving: !0,
      postTranslation: D === null ? void 0 : D,
      warnHtmlMessage: f,
      escapeParameter: d,
      messageResolver: e.messageResolver,
      __meta: { framework: "vue" }
    };
    E.datetimeFormats = u.value, E.numberFormats = m.value, E.__datetimeFormatters = R(g) ? g.__datetimeFormatters : void 0, E.__numberFormatters = R(g) ? g.__numberFormatters : void 0, process.env.NODE_ENV !== "production" && (E.__v_emitter = R(g) ? g.__v_emitter : void 0);
    const b = lr(E);
    return l && Bt(b), b;
  })(), Xe(g, a.value, s.value);
  function h() {
    return [
      a.value,
      s.value,
      c.value,
      u.value,
      m.value
    ];
  }
  const V = fe({
    get: () => a.value,
    set: (E) => {
      a.value = E, g.locale = a.value;
    }
  }), U = fe({
    get: () => s.value,
    set: (E) => {
      s.value = E, g.fallbackLocale = s.value, Xe(g, a.value, E);
    }
  }), H = fe(() => c.value), j = /* @__PURE__ */ fe(() => u.value), re = /* @__PURE__ */ fe(() => m.value);
  function ne() {
    return x(D) ? D : null;
  }
  function ke(E) {
    D = E, g.postTranslation = E;
  }
  function Ue() {
    return P;
  }
  function le(E) {
    E !== null && (k = rn(E)), P = E, g.missing = k;
  }
  function De(E, b) {
    return E !== "translate" || !b.resolvedMessage;
  }
  const se = (E, b, q, Q, ct, et) => {
    h();
    let Pe;
    if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__)
      try {
        Yt(Pr()), l || (g.fallbackContext = n ? rr() : void 0), Pe = E(g);
      } finally {
        Yt(null), l || (g.fallbackContext = void 0);
      }
    else
      Pe = E(g);
    if (B(Pe) && Pe === st) {
      const [he, Hn] = b();
      if (process.env.NODE_ENV !== "production" && n && I(he) && De(q, Hn) && (p && (ot(T, he) || vn(L, he)) && z(ae(X.FALLBACK_TO_ROOT, {
        key: he,
        type: q
      })), process.env.NODE_ENV !== "production")) {
        const { __v_emitter: Ft } = g;
        Ft && p && Ft.emit("fallback", {
          type: q,
          key: he,
          to: "global",
          groupId: `${q}:${he}`
        });
      }
      return n && p ? Q(n) : ct(he);
    } else {
      if (et(Pe))
        return Pe;
      throw Y(M.UNEXPECTED_RETURN_TYPE);
    }
  };
  function ve(...E) {
    return se((b) => Reflect.apply(Qt, null, [b, ...E]), () => Et(...E), "translate", (b) => Reflect.apply(b.t, b, [...E]), (b) => b, (b) => I(b));
  }
  function Ve(...E) {
    const [b, q, Q] = E;
    if (Q && !W(Q))
      throw Y(M.INVALID_ARGUMENT);
    return ve(b, q, K({ resolvedMessage: !0 }, Q || {}));
  }
  function we(...E) {
    return se((b) => Reflect.apply(qt, null, [b, ...E]), () => gt(...E), "datetime format", (b) => Reflect.apply(b.d, b, [...E]), () => nt, (b) => I(b));
  }
  function We(...E) {
    return se((b) => Reflect.apply(zt, null, [b, ...E]), () => Nt(...E), "number format", (b) => Reflect.apply(b.n, b, [...E]), () => nt, (b) => I(b));
  }
  function $e(E) {
    return E.map((b) => I(b) || B(b) || F(b) ? tn(String(b)) : b);
  }
  const xe = {
    normalize: $e,
    interpolate: (E) => E,
    type: "vnode"
  };
  function Ge(...E) {
    return se(
      (b) => {
        let q;
        const Q = b;
        try {
          Q.processor = xe, q = Reflect.apply(Qt, null, [Q, ...E]);
        } finally {
          Q.processor = null;
        }
        return q;
      },
      () => Et(...E),
      "translate",
      (b) => b[Lt](...E),
      (b) => [tn(b)],
      (b) => $(b)
    );
  }
  function Ye(...E) {
    return se(
      (b) => Reflect.apply(zt, null, [b, ...E]),
      () => Nt(...E),
      "number format",
      (b) => b[vt](...E),
      () => [],
      (b) => I(b) || $(b)
    );
  }
  function be(...E) {
    return se(
      (b) => Reflect.apply(qt, null, [b, ...E]),
      () => gt(...E),
      "datetime format",
      (b) => b[Tt](...E),
      () => [],
      (b) => I(b) || $(b)
    );
  }
  function Ie(E) {
    N = E, g.pluralRules = N;
  }
  function Ne(E, b) {
    const q = I(b) ? b : a.value, Q = i(q);
    return g.messageResolver(Q, E) !== null;
  }
  function Oe(E) {
    let b = null;
    const q = En(g, s.value, a.value);
    for (let Q = 0; Q < q.length; Q++) {
      const ct = c.value[q[Q]] || {}, et = g.messageResolver(ct, E);
      if (et != null) {
        b = et;
        break;
      }
    }
    return b;
  }
  function Be(E) {
    const b = Oe(E);
    return b != null ? b : n ? n.tm(E) || {} : {};
  }
  function i(E) {
    return c.value[E] || {};
  }
  function o(E, b) {
    c.value[E] = b, g.messages = c.value;
  }
  function _(E, b) {
    c.value[E] = c.value[E] || {}, je(b, c.value[E]), g.messages = c.value;
  }
  function C(E) {
    return u.value[E] || {};
  }
  function y(E, b) {
    u.value[E] = b, g.datetimeFormats = u.value, Zt(g, E, b);
  }
  function w(E, b) {
    u.value[E] = K(u.value[E] || {}, b), g.datetimeFormats = u.value, Zt(g, E, b);
  }
  function oe(E) {
    return m.value[E] || {};
  }
  function de(E, b) {
    m.value[E] = b, g.numberFormats = m.value, en(g, E, b);
  }
  function $n(E, b) {
    m.value[E] = K(m.value[E] || {}, b), g.numberFormats = m.value, en(g, E, b);
  }
  an++, n && _e && (mt(n.locale, (E) => {
    r && (a.value = E, g.locale = E, Xe(g, a.value, s.value));
  }), mt(n.fallbackLocale, (E) => {
    r && (s.value = E, g.fallbackLocale = E, Xe(g, a.value, s.value));
  }));
  const G = {
    id: an,
    locale: V,
    fallbackLocale: U,
    get inheritLocale() {
      return r;
    },
    set inheritLocale(E) {
      r = E, E && n && (a.value = n.locale.value, s.value = n.fallbackLocale.value, Xe(g, a.value, s.value));
    },
    get availableLocales() {
      return Object.keys(c.value).sort();
    },
    messages: H,
    get modifiers() {
      return v;
    },
    get pluralRules() {
      return N || {};
    },
    get isGlobal() {
      return l;
    },
    get missingWarn() {
      return L;
    },
    set missingWarn(E) {
      L = E, g.missingWarn = L;
    },
    get fallbackWarn() {
      return T;
    },
    set fallbackWarn(E) {
      T = E, g.fallbackWarn = T;
    },
    get fallbackRoot() {
      return p;
    },
    set fallbackRoot(E) {
      p = E;
    },
    get fallbackFormat() {
      return O;
    },
    set fallbackFormat(E) {
      O = E, g.fallbackFormat = O;
    },
    get warnHtmlMessage() {
      return f;
    },
    set warnHtmlMessage(E) {
      f = E, g.warnHtmlMessage = E;
    },
    get escapeParameter() {
      return d;
    },
    set escapeParameter(E) {
      d = E, g.escapeParameter = E;
    },
    t: ve,
    getLocaleMessage: i,
    setLocaleMessage: o,
    mergeLocaleMessage: _,
    getPostTranslationHandler: ne,
    setPostTranslationHandler: ke,
    getMissingHandler: Ue,
    setMissingHandler: le,
    [Sn]: Ie
  };
  return G.datetimeFormats = j, G.numberFormats = re, G.rt = Ve, G.te = Ne, G.tm = Be, G.d = we, G.n = We, G.getDateTimeFormat = C, G.setDateTimeFormat = y, G.mergeDateTimeFormat = w, G.getNumberFormat = oe, G.setNumberFormat = de, G.mergeNumberFormat = $n, G[Rn] = e.__injectWithOption, G[Lt] = Ge, G[Tt] = be, G[vt] = Ye, process.env.NODE_ENV !== "production" && (G[Ce] = (E) => {
    g.__v_emitter = E;
  }, G[qe] = () => {
    g.__v_emitter = void 0;
  }), G;
}
function Sr(e) {
  const t = I(e.locale) ? e.locale : ze, n = I(e.fallbackLocale) || $(e.fallbackLocale) || R(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, l = x(e.missing) ? e.missing : void 0, r = F(e.silentTranslationWarn) || Le(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, a = F(e.silentFallbackWarn) || Le(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, s = F(e.fallbackRoot) ? e.fallbackRoot : !0, c = !!e.formatFallbackMessages, u = R(e.modifiers) ? e.modifiers : {}, m = e.pluralizationRules, L = x(e.postTranslation) ? e.postTranslation : void 0, T = I(e.warnHtmlInMessage) ? e.warnHtmlInMessage !== "off" : !0, p = !!e.escapeParameterHtml, O = F(e.sync) ? e.sync : !0;
  process.env.NODE_ENV !== "production" && e.formatter && z(ae(X.NOT_SUPPORTED_FORMATTER)), process.env.NODE_ENV !== "production" && e.preserveDirectiveContent && z(ae(X.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
  let P = e.messages;
  if (R(e.sharedMessages)) {
    const g = e.sharedMessages;
    P = Object.keys(g).reduce((h, V) => {
      const U = h[V] || (h[V] = {});
      return K(U, g[V]), h;
    }, P || {});
  }
  const { __i18n: k, __root: D, __injectWithOption: f } = e, d = e.datetimeFormats, v = e.numberFormats, N = e.flatJson;
  return {
    locale: t,
    fallbackLocale: n,
    messages: P,
    flatJson: N,
    datetimeFormats: d,
    numberFormats: v,
    missing: l,
    missingWarn: r,
    fallbackWarn: a,
    fallbackRoot: s,
    fallbackFormat: c,
    modifiers: u,
    pluralRules: m,
    postTranslation: L,
    warnHtmlMessage: T,
    escapeParameter: p,
    messageResolver: e.messageResolver,
    inheritLocale: O,
    __i18n: k,
    __root: D,
    __injectWithOption: f
  };
}
function It(e = {}, t) {
  {
    const n = Pt(Sr(e)), l = {
      id: n.id,
      get locale() {
        return n.locale.value;
      },
      set locale(r) {
        n.locale.value = r;
      },
      get fallbackLocale() {
        return n.fallbackLocale.value;
      },
      set fallbackLocale(r) {
        n.fallbackLocale.value = r;
      },
      get messages() {
        return n.messages.value;
      },
      get datetimeFormats() {
        return n.datetimeFormats.value;
      },
      get numberFormats() {
        return n.numberFormats.value;
      },
      get availableLocales() {
        return n.availableLocales;
      },
      get formatter() {
        return process.env.NODE_ENV !== "production" && z(ae(X.NOT_SUPPORTED_FORMATTER)), {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(r) {
        process.env.NODE_ENV !== "production" && z(ae(X.NOT_SUPPORTED_FORMATTER));
      },
      get missing() {
        return n.getMissingHandler();
      },
      set missing(r) {
        n.setMissingHandler(r);
      },
      get silentTranslationWarn() {
        return F(n.missingWarn) ? !n.missingWarn : n.missingWarn;
      },
      set silentTranslationWarn(r) {
        n.missingWarn = F(r) ? !r : r;
      },
      get silentFallbackWarn() {
        return F(n.fallbackWarn) ? !n.fallbackWarn : n.fallbackWarn;
      },
      set silentFallbackWarn(r) {
        n.fallbackWarn = F(r) ? !r : r;
      },
      get modifiers() {
        return n.modifiers;
      },
      get formatFallbackMessages() {
        return n.fallbackFormat;
      },
      set formatFallbackMessages(r) {
        n.fallbackFormat = r;
      },
      get postTranslation() {
        return n.getPostTranslationHandler();
      },
      set postTranslation(r) {
        n.setPostTranslationHandler(r);
      },
      get sync() {
        return n.inheritLocale;
      },
      set sync(r) {
        n.inheritLocale = r;
      },
      get warnHtmlInMessage() {
        return n.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(r) {
        n.warnHtmlMessage = r !== "off";
      },
      get escapeParameterHtml() {
        return n.escapeParameter;
      },
      set escapeParameterHtml(r) {
        n.escapeParameter = r;
      },
      get preserveDirectiveContent() {
        return process.env.NODE_ENV !== "production" && z(ae(X.NOT_SUPPORTED_PRESERVE_DIRECTIVE)), !0;
      },
      set preserveDirectiveContent(r) {
        process.env.NODE_ENV !== "production" && z(ae(X.NOT_SUPPORTED_PRESERVE_DIRECTIVE));
      },
      get pluralizationRules() {
        return n.pluralRules || {};
      },
      __composer: n,
      t(...r) {
        const [a, s, c] = r, u = {};
        let m = null, L = null;
        if (!I(a))
          throw Y(M.INVALID_ARGUMENT);
        const T = a;
        return I(s) ? u.locale = s : $(s) ? m = s : R(s) && (L = s), $(c) ? m = c : R(c) && (L = c), Reflect.apply(n.t, n, [
          T,
          m || L || {},
          u
        ]);
      },
      rt(...r) {
        return Reflect.apply(n.rt, n, [...r]);
      },
      tc(...r) {
        const [a, s, c] = r, u = { plural: 1 };
        let m = null, L = null;
        if (!I(a))
          throw Y(M.INVALID_ARGUMENT);
        const T = a;
        return I(s) ? u.locale = s : B(s) ? u.plural = s : $(s) ? m = s : R(s) && (L = s), I(c) ? u.locale = c : $(c) ? m = c : R(c) && (L = c), Reflect.apply(n.t, n, [
          T,
          m || L || {},
          u
        ]);
      },
      te(r, a) {
        return n.te(r, a);
      },
      tm(r) {
        return n.tm(r);
      },
      getLocaleMessage(r) {
        return n.getLocaleMessage(r);
      },
      setLocaleMessage(r, a) {
        n.setLocaleMessage(r, a);
      },
      mergeLocaleMessage(r, a) {
        n.mergeLocaleMessage(r, a);
      },
      d(...r) {
        return Reflect.apply(n.d, n, [...r]);
      },
      getDateTimeFormat(r) {
        return n.getDateTimeFormat(r);
      },
      setDateTimeFormat(r, a) {
        n.setDateTimeFormat(r, a);
      },
      mergeDateTimeFormat(r, a) {
        n.mergeDateTimeFormat(r, a);
      },
      n(...r) {
        return Reflect.apply(n.n, n, [...r]);
      },
      getNumberFormat(r) {
        return n.getNumberFormat(r);
      },
      setNumberFormat(r, a) {
        n.setNumberFormat(r, a);
      },
      mergeNumberFormat(r, a) {
        n.mergeNumberFormat(r, a);
      },
      getChoiceIndex(r, a) {
        return process.env.NODE_ENV !== "production" && z(ae(X.NOT_SUPPORTED_GET_CHOICE_INDEX)), -1;
      },
      __onComponentInstanceCreated(r) {
        const { componentInstanceCreatedListener: a } = e;
        a && a(r, l);
      }
    };
    return process.env.NODE_ENV !== "production" && (l.__enableEmitter = (r) => {
      const a = n;
      a[Ce] && a[Ce](r);
    }, l.__disableEmitter = () => {
      const r = n;
      r[qe] && r[qe]();
    }), l;
  }
}
const St = {
  tag: {
    type: [String, Object]
  },
  locale: {
    type: String
  },
  scope: {
    type: String,
    validator: (e) => e === "parent" || e === "global",
    default: "parent"
  },
  i18n: {
    type: Object
  }
};
function Rr({ slots: e }, t) {
  return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((l, r) => l = [
    ...l,
    ...$(r.children) ? r.children : [r]
  ], []) : t.reduce((n, l) => {
    const r = e[l];
    return r && (n[l] = r()), n;
  }, {});
}
function Mn(e) {
  return jn;
}
const _t = {
  name: "i18n-t",
  props: K({
    keypath: {
      type: String,
      required: !0
    },
    plural: {
      type: [Number, String],
      validator: (e) => B(e) || !isNaN(e)
    }
  }, St),
  setup(e, t) {
    const { slots: n, attrs: l } = t, r = e.i18n || yt({
      useScope: e.scope,
      __useComponent: !0
    });
    return () => {
      const a = Object.keys(n).filter((T) => T !== "_"), s = {};
      e.locale && (s.locale = e.locale), e.plural !== void 0 && (s.plural = I(e.plural) ? +e.plural : e.plural);
      const c = Rr(t, a), u = r[Lt](e.keypath, c, s), m = K({}, l), L = I(e.tag) || W(e.tag) ? e.tag : Mn();
      return _n(L, m, u);
    };
  }
};
function yr(e) {
  return $(e) && !I(e[0]);
}
function Un(e, t, n, l) {
  const { slots: r, attrs: a } = t;
  return () => {
    const s = { part: !0 };
    let c = {};
    e.locale && (s.locale = e.locale), I(e.format) ? s.key = e.format : W(e.format) && (I(e.format.key) && (s.key = e.format.key), c = Object.keys(e.format).reduce((p, O) => n.includes(O) ? K({}, p, { [O]: e.format[O] }) : p, {}));
    const u = l(e.value, s, c);
    let m = [s.key];
    $(u) ? m = u.map((p, O) => {
      const P = r[p.type], k = P ? P({ [p.type]: p.value, index: O, parts: u }) : [p.value];
      return yr(k) && (k[0].key = `${p.type}-${O}`), k;
    }) : I(u) && (m = [u]);
    const L = K({}, a), T = I(e.tag) || W(e.tag) ? e.tag : Mn();
    return _n(T, L, m);
  };
}
const ln = {
  name: "i18n-n",
  props: K({
    value: {
      type: Number,
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, St),
  setup(e, t) {
    const n = e.i18n || yt({ useScope: "parent", __useComponent: !0 });
    return Un(e, t, Cn, (...l) => n[vt](...l));
  }
}, sn = {
  name: "i18n-d",
  props: K({
    value: {
      type: [Number, Date],
      required: !0
    },
    format: {
      type: [String, Object]
    }
  }, St),
  setup(e, t) {
    const n = e.i18n || yt({ useScope: "parent", __useComponent: !0 });
    return Un(e, t, An, (...l) => n[Tt](...l));
  }
};
function Fr(e, t) {
  const n = e;
  if (e.mode === "composition")
    return n.__getInstance(t) || e.global;
  {
    const l = n.__getInstance(t);
    return l != null ? l.__composer : e.global.__composer;
  }
}
function Mr(e) {
  const t = (s) => {
    const { instance: c, modifiers: u, value: m } = s;
    if (!c || !c.$)
      throw Y(M.UNEXPECTED_ERROR);
    const L = Fr(e, c.$);
    process.env.NODE_ENV !== "production" && u.preserve && z(ae(X.NOT_SUPPORTED_PRESERVE));
    const T = on(m);
    return [
      Reflect.apply(L.t, L, [...cn(T)]),
      L
    ];
  };
  return {
    created: (s, c) => {
      const [u, m] = t(c);
      _e && e.global === m && (s.__i18nWatcher = mt(m.locale, () => {
        c.instance && c.instance.$forceUpdate();
      })), s.__composer = m, s.textContent = u;
    },
    unmounted: (s) => {
      _e && s.__i18nWatcher && (s.__i18nWatcher(), s.__i18nWatcher = void 0, delete s.__i18nWatcher), s.__composer && (s.__composer = void 0, delete s.__composer);
    },
    beforeUpdate: (s, { value: c }) => {
      if (s.__composer) {
        const u = s.__composer, m = on(c);
        s.textContent = Reflect.apply(u.t, u, [
          ...cn(m)
        ]);
      }
    },
    getSSRProps: (s) => {
      const [c] = t(s);
      return { textContent: c };
    }
  };
}
function on(e) {
  if (I(e))
    return { path: e };
  if (R(e)) {
    if (!("path" in e))
      throw Y(M.REQUIRED_VALUE, "path");
    return e;
  } else
    throw Y(M.INVALID_VALUE);
}
function cn(e) {
  const { path: t, locale: n, args: l, choice: r, plural: a } = e, s = {}, c = l || {};
  return I(n) && (s.locale = n), B(r) && (s.plural = r), B(a) && (s.plural = a), [t, c, s];
}
function Ur(e, t, ...n) {
  const l = R(n[0]) ? n[0] : {}, r = !!l.useI18nComponentName, a = F(l.globalInstall) ? l.globalInstall : !0;
  process.env.NODE_ENV !== "production" && a && r && z(ae(X.COMPONENT_NAME_LEGACY_COMPATIBLE, {
    name: _t.name
  })), a && (e.component(r ? "i18n" : _t.name, _t), e.component(ln.name, ln), e.component(sn.name, sn)), e.directive("t", Mr(t));
}
const Vn = "vue-i18n: composer properties";
let Ot;
async function Vr(e, t) {
  return new Promise((n, l) => {
    try {
      Ir({
        id: "vue-devtools-plugin-vue-i18n",
        label: ft["vue-devtools-plugin-vue-i18n"],
        packageName: "vue-i18n",
        homepage: "https://vue-i18n.intlify.dev",
        logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
        componentStateTypes: [Vn],
        app: e
      }, (r) => {
        Ot = r, r.on.visitComponentTree(({ componentInstance: s, treeNode: c }) => {
          wr(s, c, t);
        }), r.on.inspectComponent(({ componentInstance: s, instanceData: c }) => {
          s.vnode.el && s.vnode.el.__VUE_I18N__ && c && (t.mode === "legacy" ? s.vnode.el.__VUE_I18N__ !== t.global.__composer && un(c, s.vnode.el.__VUE_I18N__) : un(c, s.vnode.el.__VUE_I18N__));
        }), r.addInspector({
          id: "vue-i18n-resource-inspector",
          label: ft["vue-i18n-resource-inspector"],
          icon: "language",
          treeFilterPlaceholder: Or["vue-i18n-resource-inspector"]
        }), r.on.getInspectorTree((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && Gr(s, t);
        });
        const a = /* @__PURE__ */ new Map();
        r.on.getInspectorState(async (s) => {
          if (s.app === e && s.inspectorId === "vue-i18n-resource-inspector")
            if (r.unhighlightElement(), Br(s, t), s.nodeId === "global") {
              if (!a.has(s.app)) {
                const [c] = await r.getComponentInstances(s.app);
                a.set(s.app, c);
              }
              r.highlightElement(a.get(s.app));
            } else {
              const c = Yr(s.nodeId, t);
              c && r.highlightElement(c);
            }
        }), r.on.editInspectorState((s) => {
          s.app === e && s.inspectorId === "vue-i18n-resource-inspector" && Kr(s, t);
        }), r.addTimelineLayer({
          id: "vue-i18n-timeline",
          label: ft["vue-i18n-timeline"],
          color: hr["vue-i18n-timeline"]
        }), n(!0);
      });
    } catch (r) {
      console.error(r), l(!1);
    }
  });
}
function wn(e) {
  return e.type.name || e.type.displayName || e.type.__file || "Anonymous";
}
function wr(e, t, n) {
  const l = n.mode === "composition" ? n.global : n.global.__composer;
  if (e && e.vnode.el && e.vnode.el.__VUE_I18N__ && e.vnode.el.__VUE_I18N__ !== l) {
    const r = {
      label: `i18n (${wn(e)} Scope)`,
      textColor: 0,
      backgroundColor: 16764185
    };
    t.tags.push(r);
  }
}
function un(e, t) {
  const n = Vn;
  e.state.push({
    type: n,
    key: "locale",
    editable: !0,
    value: t.locale.value
  }), e.state.push({
    type: n,
    key: "availableLocales",
    editable: !1,
    value: t.availableLocales
  }), e.state.push({
    type: n,
    key: "fallbackLocale",
    editable: !0,
    value: t.fallbackLocale.value
  }), e.state.push({
    type: n,
    key: "inheritLocale",
    editable: !0,
    value: t.inheritLocale
  }), e.state.push({
    type: n,
    key: "messages",
    editable: !1,
    value: Rt(t.messages.value)
  }), e.state.push({
    type: n,
    key: "datetimeFormats",
    editable: !1,
    value: t.datetimeFormats.value
  }), e.state.push({
    type: n,
    key: "numberFormats",
    editable: !1,
    value: t.numberFormats.value
  });
}
function Rt(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const l = e[n];
    x(l) && "source" in l ? t[n] = xr(l) : W(l) ? t[n] = Rt(l) : t[n] = l;
  }), t;
}
const Wr = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;"
};
function $r(e) {
  return e.replace(/[<>"&]/g, Hr);
}
function Hr(e) {
  return Wr[e] || e;
}
function xr(e) {
  const t = e.source ? `("${$r(e.source)}")` : "(?)";
  return {
    _custom: {
      type: "function",
      display: `<span>\u0192</span> ${t}`
    }
  };
}
function Gr(e, t) {
  e.rootNodes.push({
    id: "global",
    label: "Global Scope"
  });
  const n = t.mode === "composition" ? t.global : t.global.__composer;
  for (const [l, r] of t.__instances) {
    const a = t.mode === "composition" ? r : r.__composer;
    n !== a && e.rootNodes.push({
      id: a.id.toString(),
      label: `${wn(l)} Scope`
    });
  }
}
function Yr(e, t) {
  let n = null;
  if (e !== "global") {
    for (const [l, r] of t.__instances.entries())
      if (r.id.toString() === e) {
        n = l;
        break;
      }
  }
  return n;
}
function Wn(e, t) {
  if (e === "global")
    return t.mode === "composition" ? t.global : t.global.__composer;
  {
    const n = Array.from(t.__instances.values()).find((l) => l.id.toString() === e);
    return n ? t.mode === "composition" ? n : n.__composer : null;
  }
}
function Br(e, t) {
  const n = Wn(e.nodeId, t);
  return n && (e.state = Xr(n)), null;
}
function Xr(e) {
  const t = {}, n = "Locale related info", l = [
    {
      type: n,
      key: "locale",
      editable: !0,
      value: e.locale.value
    },
    {
      type: n,
      key: "fallbackLocale",
      editable: !0,
      value: e.fallbackLocale.value
    },
    {
      type: n,
      key: "availableLocales",
      editable: !1,
      value: e.availableLocales
    },
    {
      type: n,
      key: "inheritLocale",
      editable: !0,
      value: e.inheritLocale
    }
  ];
  t[n] = l;
  const r = "Locale messages info", a = [
    {
      type: r,
      key: "messages",
      editable: !1,
      value: Rt(e.messages.value)
    }
  ];
  t[r] = a;
  {
    const s = "Datetime formats info", c = [
      {
        type: s,
        key: "datetimeFormats",
        editable: !1,
        value: e.datetimeFormats.value
      }
    ];
    t[s] = c;
    const u = "Datetime formats info", m = [
      {
        type: u,
        key: "numberFormats",
        editable: !1,
        value: e.numberFormats.value
      }
    ];
    t[u] = m;
  }
  return t;
}
function Ze(e, t) {
  if (Ot) {
    let n;
    t && "groupId" in t && (n = t.groupId, delete t.groupId), Ot.addTimelineEvent({
      layerId: "vue-i18n-timeline",
      event: {
        title: e,
        groupId: n,
        time: Date.now(),
        meta: {},
        data: t || {},
        logType: e === "compile-error" ? "error" : e === "fallback" || e === "missing" ? "warning" : "default"
      }
    });
  }
}
function Kr(e, t) {
  const n = Wn(e.nodeId, t);
  if (n) {
    const [l] = e.path;
    l === "locale" && I(e.state.value) ? n.locale.value = e.state.value : l === "fallbackLocale" && (I(e.state.value) || $(e.state.value) || W(e.state.value)) ? n.fallbackLocale.value = e.state.value : l === "inheritLocale" && F(e.state.value) && (n.inheritLocale = e.state.value);
  }
}
function jr(e, t, n) {
  return {
    beforeCreate() {
      const l = Qe();
      if (!l)
        throw Y(M.UNEXPECTED_ERROR);
      const r = this.$options;
      if (r.i18n) {
        const a = r.i18n;
        r.__i18n && (a.__i18n = r.__i18n), a.__root = t, this === this.$root ? this.$i18n = fn(e, a) : (a.__injectWithOption = !0, this.$i18n = It(a));
      } else
        r.__i18n ? this === this.$root ? this.$i18n = fn(e, r) : this.$i18n = It({
          __i18n: r.__i18n,
          __injectWithOption: !0,
          __root: t
        }) : this.$i18n = e;
      r.__i18nGlobal && Fn(t, r, r), e.__onComponentInstanceCreated(this.$i18n), n.__setInstance(l, this.$i18n), this.$t = (...a) => this.$i18n.t(...a), this.$rt = (...a) => this.$i18n.rt(...a), this.$tc = (...a) => this.$i18n.tc(...a), this.$te = (a, s) => this.$i18n.te(a, s), this.$d = (...a) => this.$i18n.d(...a), this.$n = (...a) => this.$i18n.n(...a), this.$tm = (a) => this.$i18n.tm(a);
    },
    mounted() {
      if ((process.env.NODE_ENV !== "production" || !1) && !0 && this.$el && this.$i18n) {
        this.$el.__VUE_I18N__ = this.$i18n.__composer;
        const l = this.__v_emitter = Ct(), r = this.$i18n;
        r.__enableEmitter && r.__enableEmitter(l), l.on("*", Ze);
      }
    },
    unmounted() {
      const l = Qe();
      if (!l)
        throw Y(M.UNEXPECTED_ERROR);
      if ((process.env.NODE_ENV !== "production" || !1) && !0 && this.$el && this.$el.__VUE_I18N__ && (this.__v_emitter && (this.__v_emitter.off("*", Ze), delete this.__v_emitter), this.$i18n)) {
        const r = this.$i18n;
        r.__disableEmitter && r.__disableEmitter(), delete this.$el.__VUE_I18N__;
      }
      delete this.$t, delete this.$rt, delete this.$tc, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, n.__deleteInstance(l), delete this.$i18n;
    }
  };
}
function fn(e, t) {
  e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[Sn](t.pluralizationRules || e.pluralizationRules);
  const n = it(e.locale, {
    messages: t.messages,
    __i18n: t.__i18n
  });
  return Object.keys(n).forEach((l) => e.mergeLocaleMessage(l, n[l])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((l) => e.mergeDateTimeFormat(l, t.datetimeFormats[l])), t.numberFormats && Object.keys(t.numberFormats).forEach((l) => e.mergeNumberFormat(l, t.numberFormats[l])), e;
}
const Qr = /* @__PURE__ */ me("global-vue-i18n");
function ol(e = {}, t) {
  const n = __VUE_I18N_LEGACY_API__ && F(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, l = F(e.globalInjection) ? e.globalInjection : !0, r = __VUE_I18N_LEGACY_API__ && n ? !!e.allowComposition : !0, a = /* @__PURE__ */ new Map(), [s, c] = Jr(e, n), u = me(process.env.NODE_ENV !== "production" ? "vue-i18n" : "");
  function m(p) {
    return a.get(p) || null;
  }
  function L(p, O) {
    a.set(p, O);
  }
  function T(p) {
    a.delete(p);
  }
  {
    const p = {
      get mode() {
        return __VUE_I18N_LEGACY_API__ && n ? "legacy" : "composition";
      },
      get allowComposition() {
        return r;
      },
      async install(O, ...P) {
        process.env.NODE_ENV !== "production" && (O.__VUE_I18N__ = p), O.__VUE_I18N_SYMBOL__ = u, O.provide(O.__VUE_I18N_SYMBOL__, p), !n && l && ll(O, p.global), __VUE_I18N_FULL_INSTALL__ && Ur(O, p, ...P), __VUE_I18N_LEGACY_API__ && n && O.mixin(jr(c, c.__composer, p));
        const k = O.unmount;
        if (O.unmount = () => {
          p.dispose(), k();
        }, process.env.NODE_ENV !== "production" || !1) {
          if (!await Vr(O, p))
            throw Y(M.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN);
          const f = Ct();
          if (n) {
            const d = c;
            d.__enableEmitter && d.__enableEmitter(f);
          } else {
            const d = c;
            d[Ce] && d[Ce](f);
          }
          f.on("*", Ze);
        }
      },
      get global() {
        return c;
      },
      dispose() {
        s.stop();
      },
      __instances: a,
      __getInstance: m,
      __setInstance: L,
      __deleteInstance: T
    };
    return p;
  }
}
function yt(e = {}) {
  const t = Qe();
  if (t == null)
    throw Y(M.MUST_BE_CALL_SETUP_TOP);
  if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__)
    throw Y(M.NOT_INSLALLED);
  const n = qr(t), l = zr(n), r = yn(t), a = Zr(e, r);
  if (__VUE_I18N_LEGACY_API__ && n.mode === "legacy" && !e.__useComponent) {
    if (!n.allowComposition)
      throw Y(M.NOT_AVAILABLE_IN_LEGACY_MODE);
    return nl(t, a, l, e);
  }
  if (a === "global")
    return Fn(l, e, r), l;
  if (a === "parent") {
    let u = el(n, t, e.__useComponent);
    return u == null && (process.env.NODE_ENV !== "production" && z(ae(X.NOT_FOUND_PARENT_SCOPE)), u = l), u;
  }
  const s = n;
  let c = s.__getInstance(t);
  if (c == null) {
    const u = K({}, e);
    "__i18n" in r && (u.__i18n = r.__i18n), l && (u.__root = l), c = Pt(u), tl(s, t, c), s.__setInstance(t, c);
  }
  return c;
}
function Jr(e, t, n) {
  const l = xn();
  {
    const r = __VUE_I18N_LEGACY_API__ && t ? l.run(() => It(e)) : l.run(() => Pt(e));
    if (r == null)
      throw Y(M.UNEXPECTED_ERROR);
    return [l, r];
  }
}
function qr(e) {
  {
    const t = Gn(e.isCE ? Qr : e.appContext.app.__VUE_I18N_SYMBOL__);
    if (!t)
      throw Y(e.isCE ? M.NOT_INSLALLED_WITH_PROVIDE : M.UNEXPECTED_ERROR);
    return t;
  }
}
function Zr(e, t) {
  return rt(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function zr(e) {
  return e.mode === "composition" ? e.global : e.global.__composer;
}
function el(e, t, n = !1) {
  let l = null;
  const r = t.root;
  let a = t.parent;
  for (; a != null; ) {
    const s = e;
    if (e.mode === "composition")
      l = s.__getInstance(a);
    else if (__VUE_I18N_LEGACY_API__) {
      const c = s.__getInstance(a);
      c != null && (l = c.__composer, n && l && !l[Rn] && (l = null));
    }
    if (l != null || r === a)
      break;
    a = a.parent;
  }
  return l;
}
function tl(e, t, n) {
  let l = null;
  Yn(() => {
    if ((process.env.NODE_ENV !== "production" || !1) && !0 && t.vnode.el) {
      t.vnode.el.__VUE_I18N__ = n, l = Ct();
      const r = n;
      r[Ce] && r[Ce](l), l.on("*", Ze);
    }
  }, t), Bn(() => {
    if ((process.env.NODE_ENV !== "production" || !1) && !0 && t.vnode.el && t.vnode.el.__VUE_I18N__) {
      l && l.off("*", Ze);
      const r = n;
      r[qe] && r[qe](), delete t.vnode.el.__VUE_I18N__;
    }
    e.__deleteInstance(t);
  }, t);
}
function nl(e, t, n, l = {}) {
  const r = t === "local", a = Xn(null);
  if (r && e.proxy && !(e.proxy.$options.i18n || e.proxy.$options.__i18n))
    throw Y(M.MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION);
  const s = F(l.inheritLocale) ? l.inheritLocale : !0, c = ue(
    r && s ? n.locale.value : I(l.locale) ? l.locale : ze
  ), u = ue(
    r && s ? n.fallbackLocale.value : I(l.fallbackLocale) || $(l.fallbackLocale) || R(l.fallbackLocale) || l.fallbackLocale === !1 ? l.fallbackLocale : c.value
  ), m = ue(it(c.value, l)), L = ue(R(l.datetimeFormats) ? l.datetimeFormats : { [c.value]: {} }), T = ue(R(l.numberFormats) ? l.numberFormats : { [c.value]: {} }), p = r ? n.missingWarn : F(l.missingWarn) || Le(l.missingWarn) ? l.missingWarn : !0, O = r ? n.fallbackWarn : F(l.fallbackWarn) || Le(l.fallbackWarn) ? l.fallbackWarn : !0, P = r ? n.fallbackRoot : F(l.fallbackRoot) ? l.fallbackRoot : !0, k = !!l.fallbackFormat, D = x(l.missing) ? l.missing : null, f = x(l.postTranslation) ? l.postTranslation : null, d = r ? n.warnHtmlMessage : F(l.warnHtmlMessage) ? l.warnHtmlMessage : !0, v = !!l.escapeParameter, N = r ? n.modifiers : R(l.modifiers) ? l.modifiers : {}, g = l.pluralRules || r && n.pluralRules;
  function A() {
    return [
      c.value,
      u.value,
      m.value,
      L.value,
      T.value
    ];
  }
  const h = fe({
    get: () => a.value ? a.value.locale.value : c.value,
    set: (o) => {
      a.value && (a.value.locale.value = o), c.value = o;
    }
  }), V = fe({
    get: () => a.value ? a.value.fallbackLocale.value : u.value,
    set: (o) => {
      a.value && (a.value.fallbackLocale.value = o), u.value = o;
    }
  }), U = fe(() => a.value ? a.value.messages.value : m.value), H = fe(() => L.value), j = fe(() => T.value);
  function re() {
    return a.value ? a.value.getPostTranslationHandler() : f;
  }
  function ne(o) {
    a.value && a.value.setPostTranslationHandler(o);
  }
  function ke() {
    return a.value ? a.value.getMissingHandler() : D;
  }
  function Ue(o) {
    a.value && a.value.setMissingHandler(o);
  }
  function le(o) {
    return A(), o();
  }
  function De(...o) {
    return a.value ? le(() => Reflect.apply(a.value.t, null, [...o])) : le(() => "");
  }
  function se(...o) {
    return a.value ? Reflect.apply(a.value.rt, null, [...o]) : "";
  }
  function ve(...o) {
    return a.value ? le(() => Reflect.apply(a.value.d, null, [...o])) : le(() => "");
  }
  function Ve(...o) {
    return a.value ? le(() => Reflect.apply(a.value.n, null, [...o])) : le(() => "");
  }
  function we(o) {
    return a.value ? a.value.tm(o) : {};
  }
  function We(o, _) {
    return a.value ? a.value.te(o, _) : !1;
  }
  function $e(o) {
    return a.value ? a.value.getLocaleMessage(o) : {};
  }
  function He(o, _) {
    a.value && (a.value.setLocaleMessage(o, _), m.value[o] = _);
  }
  function xe(o, _) {
    a.value && a.value.mergeLocaleMessage(o, _);
  }
  function Ge(o) {
    return a.value ? a.value.getDateTimeFormat(o) : {};
  }
  function Ye(o, _) {
    a.value && (a.value.setDateTimeFormat(o, _), L.value[o] = _);
  }
  function be(o, _) {
    a.value && a.value.mergeDateTimeFormat(o, _);
  }
  function Ie(o) {
    return a.value ? a.value.getNumberFormat(o) : {};
  }
  function Ne(o, _) {
    a.value && (a.value.setNumberFormat(o, _), T.value[o] = _);
  }
  function Oe(o, _) {
    a.value && a.value.mergeNumberFormat(o, _);
  }
  const Be = {
    get id() {
      return a.value ? a.value.id : -1;
    },
    locale: h,
    fallbackLocale: V,
    messages: U,
    datetimeFormats: H,
    numberFormats: j,
    get inheritLocale() {
      return a.value ? a.value.inheritLocale : s;
    },
    set inheritLocale(o) {
      a.value && (a.value.inheritLocale = o);
    },
    get availableLocales() {
      return a.value ? a.value.availableLocales : Object.keys(m.value);
    },
    get modifiers() {
      return a.value ? a.value.modifiers : N;
    },
    get pluralRules() {
      return a.value ? a.value.pluralRules : g;
    },
    get isGlobal() {
      return a.value ? a.value.isGlobal : !1;
    },
    get missingWarn() {
      return a.value ? a.value.missingWarn : p;
    },
    set missingWarn(o) {
      a.value && (a.value.missingWarn = o);
    },
    get fallbackWarn() {
      return a.value ? a.value.fallbackWarn : O;
    },
    set fallbackWarn(o) {
      a.value && (a.value.missingWarn = o);
    },
    get fallbackRoot() {
      return a.value ? a.value.fallbackRoot : P;
    },
    set fallbackRoot(o) {
      a.value && (a.value.fallbackRoot = o);
    },
    get fallbackFormat() {
      return a.value ? a.value.fallbackFormat : k;
    },
    set fallbackFormat(o) {
      a.value && (a.value.fallbackFormat = o);
    },
    get warnHtmlMessage() {
      return a.value ? a.value.warnHtmlMessage : d;
    },
    set warnHtmlMessage(o) {
      a.value && (a.value.warnHtmlMessage = o);
    },
    get escapeParameter() {
      return a.value ? a.value.escapeParameter : v;
    },
    set escapeParameter(o) {
      a.value && (a.value.escapeParameter = o);
    },
    t: De,
    getPostTranslationHandler: re,
    setPostTranslationHandler: ne,
    getMissingHandler: ke,
    setMissingHandler: Ue,
    rt: se,
    d: ve,
    n: Ve,
    tm: we,
    te: We,
    getLocaleMessage: $e,
    setLocaleMessage: He,
    mergeLocaleMessage: xe,
    getDateTimeFormat: Ge,
    setDateTimeFormat: Ye,
    mergeDateTimeFormat: be,
    getNumberFormat: Ie,
    setNumberFormat: Ne,
    mergeNumberFormat: Oe
  };
  function i(o) {
    o.locale.value = c.value, o.fallbackLocale.value = u.value, Object.keys(m.value).forEach((_) => {
      o.mergeLocaleMessage(_, m.value[_]);
    }), Object.keys(L.value).forEach((_) => {
      o.mergeDateTimeFormat(_, L.value[_]);
    }), Object.keys(T.value).forEach((_) => {
      o.mergeNumberFormat(_, T.value[_]);
    }), o.escapeParameter = v, o.fallbackFormat = k, o.fallbackRoot = P, o.fallbackWarn = O, o.missingWarn = p, o.warnHtmlMessage = d;
  }
  return Kn(() => {
    if (e.proxy == null || e.proxy.$i18n == null)
      throw Y(M.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
    const o = a.value = e.proxy.$i18n.__composer;
    t === "global" ? (c.value = o.locale.value, u.value = o.fallbackLocale.value, m.value = o.messages.value, L.value = o.datetimeFormats.value, T.value = o.numberFormats.value) : r && i(o);
  }), Be;
}
const al = [
  "locale",
  "fallbackLocale",
  "availableLocales"
], rl = ["t", "rt", "d", "n", "tm"];
function ll(e, t) {
  const n = /* @__PURE__ */ Object.create(null);
  al.forEach((l) => {
    const r = Object.getOwnPropertyDescriptor(t, l);
    if (!r)
      throw Y(M.UNEXPECTED_ERROR);
    const a = Qn(r.value) ? {
      get() {
        return r.value.value;
      },
      set(s) {
        r.value.value = s;
      }
    } : {
      get() {
        return r.get && r.get();
      }
    };
    Object.defineProperty(n, l, a);
  }), e.config.globalProperties.$i18n = n, rl.forEach((l) => {
    const r = Object.getOwnPropertyDescriptor(t, l);
    if (!r || !r.value)
      throw Y(M.UNEXPECTED_ERROR);
    Object.defineProperty(e.config.globalProperties, `$${l}`, r);
  });
}
er(ur);
tr(Ma);
nr(En);
Cr();
if (process.env.NODE_ENV !== "production" || __INTLIFY_PROD_DEVTOOLS__) {
  const e = Ke();
  e.__INTLIFY__ = !0, Ya(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
process.env.NODE_ENV;
export {
  Qr as I,
  ol as c,
  yt as u
};
