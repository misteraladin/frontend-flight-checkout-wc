import { defineComponent as i, openBlock as a, createElementBlock as s, createStaticVNode as p, createElementVNode as o, toDisplayString as e, reactive as f, Fragment as u, renderList as m, createVNode as n, unref as c, defineCustomElement as h } from "vue";
import { u as v } from "./vue-i18n.esm-bundler.9ad5361b.mjs";
import { _ as y } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const g = { class: "footer-top__footer-contact" }, b = /* @__PURE__ */ p('<div class="footer-top__footer-contact__footer-personal-asistant"><p>Personal Asisstant</p><div class="footer-top__footer-contact__footer-personal-asistant__content"><div class="icon">Icon</div><div class="phone"><a href="">+6221 3983 8900</a><br><a href="">+6221 8062 5262</a></div></div></div><div class="footer-top__footer-contact__footer-whatsapp"><div class="footer__footer-contact__footer-whatsapp__whatsapp"><p>WhatsApp</p><div class="footer-top__footer-contact__footer-whatsapp__whatsapp__content"><div class="icon">Icon</div><div class="phone"><a href="">+62 811 956 900</a></div></div></div></div><div class="footer-top__footer-contact__footer-email"><div class="footer-top__footer-contact__footer-email__email"><p>E - mail</p><div class="footer-top__footer-contact__footer-email__email__content"><div class="icon">Icon</div><div class="phone"><a href="">cs@misteraladin.com</a></div></div></div></div>', 3), A = [
  b
], w = /* @__PURE__ */ i({
  __name: "footer-contact",
  props: {
    t: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    return (r, _) => (a(), s("div", g, A));
  }
}), $ = { class: "footer-top__footer-about" }, I = { class: "footer-top__footer-about__about-us" }, x = { href: "" }, O = { class: "footer-top__footer-about__press" }, T = { href: "" }, q = { class: "footer-top__footer-about__beourpartner" }, P = { href: "" }, S = /* @__PURE__ */ i({
  __name: "footer-about",
  props: {
    t: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    return (r, _) => (a(), s("div", $, [
      o("p", null, e(t.t("title_about_misteraladin")), 1),
      o("div", I, [
        o("a", x, e(t.t("about_us")), 1)
      ]),
      o("div", O, [
        o("a", T, e(t.t("press")), 1)
      ]),
      o("div", q, [
        o("a", P, e(t.t("be_ourpartner")), 1)
      ])
    ]));
  }
}), N = { class: "footer-top__footer-products" }, D = /* @__PURE__ */ i({
  __name: "footer-products",
  props: {
    t: {
      type: Object,
      required: !0
    },
    data: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const { t: r, data: _ } = t, l = f(_ ? JSON.parse(_) : null);
    return (J, Q) => (a(), s("div", N, [
      o("p", null, e(t.t("title_product")), 1),
      (a(!0), s(u, null, m(l, (d) => (a(), s("div", {
        key: d.id
      }, [
        o("p", null, e(d.caption), 1)
      ]))), 128))
    ]));
  }
}), E = { class: "footer-top__footer-others" }, F = { class: "footer-top__footer-others__faq" }, K = { class: "footer-top__footer-others__privacy-policy" }, j = { class: "footer-top__footer-others__terms-condition" }, k = /* @__PURE__ */ i({
  __name: "footer-others",
  props: {
    t: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    return (r, _) => (a(), s("div", E, [
      o("p", null, e(t.t("title_others")), 1),
      o("div", F, [
        o("p", null, e(t.t("faq")), 1)
      ]),
      o("div", K, [
        o("p", null, e(t.t("privacy_policy")), 1)
      ]),
      o("div", j, [
        o("p", null, e(t.t("terms_condition")), 1)
      ])
    ]));
  }
}), L = {
  en: {
    title_about_misteraladin: "ABOUT MISTER ALADIN",
    about_us: "About Us",
    pres: "Press",
    be_ourpartner: "Be Our Partner",
    title_product: "PRODUCTS",
    aladin_mall: "AladinMall",
    aladin_xplore: "AladinXplore",
    hotels: "Hotels",
    dom_flights: "Dom. Flights",
    intl_flights: "Intl. Flights",
    trains: "Trains",
    desa_wisata: "Desa Wisata",
    title_others: "OTHERS",
    faq: "FAQ",
    privacy_policy: "Privacy Policy",
    terms_condition: "Terms & Condition",
    title_followus: "FOLLOW US"
  },
  id: {
    title_about_misteraladin: "TENTANG MISTER ALADIN",
    about_us: "Tentang Kami",
    pres: "Pers",
    be_ourpartner: "Jadi Mitra Kami",
    title_product: "PRODUK",
    aladin_mall: "AladinMall",
    aladin_xplore: "AladinXplore",
    hotels: "Hotel",
    dom_flights: "Pesawat Dom.",
    intl_flights: "Pesawat Intl.",
    trains: "Kereta Api",
    desa_wisata: "Desa Wisata",
    title_others: "LAINNYA",
    faq: "FAQ",
    privacy_policy: "Kebijakan Privasi",
    terms_condition: "Syarat & Ketentuan",
    title_followus: "IKUTI KAMI"
  }
}, M = { class: "footer-top__footer-social" }, U = /* @__PURE__ */ p('<div class="footer-top__footer-social__facebook"><div class="icon">Icon</div><div class="text">Facebook</div></div><div class="footer-top__footer-social__twitter"><div class="icon">Icon</div><div class="text">Twitter</div></div>', 2), R = /* @__PURE__ */ i({
  __name: "footer-social",
  props: {
    t: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    return (r, _) => (a(), s("div", M, [
      o("p", null, e(t.t("title_followus")), 1),
      U
    ]));
  }
}), B = { class: "footer-top" }, C = /* @__PURE__ */ i({
  __name: "footer.ce",
  props: {
    data: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    const { t: r } = v({
      messages: L
    });
    return (_, l) => (a(), s("div", B, [
      n(w, { t: c(r) }, null, 8, ["t"]),
      n(S, { t: c(r) }, null, 8, ["t"]),
      n(D, {
        t: c(r),
        data: t.data
      }, null, 8, ["t", "data"]),
      n(k, { t: c(r) }, null, 8, ["t"]),
      n(R, { t: c(r) }, null, 8, ["t"])
    ]));
  }
}), W = `:root{--el-color-primary: $primary-1;color:#3d4151}.footer-top{display:grid;grid-template-columns:repeat(5,1fr)}.footer-top__footer-contact__footer-personal-asistant__content{display:grid;grid-template-columns:20% 80%}.footer-top__footer-contact__footer-whatsapp{display:grid;grid-template-columns:1,1fr}.footer-top__footer-contact__footer-whatsapp__whatsapp__content{display:grid;grid-template-columns:20% 80%}.footer-top__footer-contact__footer-email{display:grid;grid-template-columns:1,1fr}.footer-top__footer-contact__footer-email__email__content{display:grid;grid-template-columns:20% 80%}.footer-top__footer-about__press,.footer-top__footer-about__beourpartner{margin-top:10px}.footer-top__footer-products{display:grid;grid-template-columns:repeat(1,1fr)}.footer-top__footer-products{font-weight:700}.footer-bottom{display:grid;grid-template-columns:repeat(3,1fr)}
`, H = /* @__PURE__ */ y(C, [["styles", [W]]]), V = h(H);
function z() {
  customElements.define("ma-footer-top", V);
}
export {
  z as register
};
