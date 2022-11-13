import { defineComponent as e, openBlock as r, createElementBlock as n, createElementVNode as a, toDisplayString as _, createVNode as i, unref as p, defineCustomElement as c } from "vue";
import { u as l } from "./vue-i18n.esm-bundler.9ad5361b.mjs";
import { _ as m } from "./_plugin-vue_export-helper.e9cbb45e.mjs";
const d = { class: "footer__footer-consumer" }, f = /* @__PURE__ */ a("div", { class: "Footer__footer-consumer" }, null, -1), u = /* @__PURE__ */ e({
  __name: "footer-consumer",
  props: {
    t: {
      type: Object,
      required: !0
    }
  },
  setup(t) {
    return (o, s) => (r(), n("div", d, [
      a("p", null, _(t.t("title_consumer")), 1),
      f
    ]));
  }
}), g = {
  en: {
    title_consumer: "CONSUMER COMPLAINT CHANNEL",
    directorate: "Directorate General of Consumer Protection and Order of Commerce, Indonesian Ministry of Trade",
    ditjen_whatsapp: "Ditjen PKTN WhatsApp Number",
    title_payment: "PAYMENT PARTNER",
    title_download: "DOWNLOAD OUR APPS"
  },
  id: {
    title_consumer: "LAYANAN PENGADUAN KONSUMEN",
    directorate: "Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga Kementerian Perdagangan Republik Indonesia",
    ditjen_whatsapp: "Whatsapp Ditjen PKTN",
    title_payment: "PARTNER PEMBAYARAN",
    title_download: "DOWNLOAD APLIKASI MISTER ALADIN"
  }
}, N = { class: "" }, A = /* @__PURE__ */ e({
  __name: "footer.ce",
  setup(t) {
    const { t: o } = l({
      messages: g
    });
    return (s, E) => (r(), n("div", N, [
      i(u, { t: p(o) }, null, 8, ["t"])
    ]));
  }
}), y = `:root{--el-color-primary: $primary-1;color:#3d4151}.footer-top{display:grid;grid-template-columns:repeat(5,1fr)}.footer-top__footer-contact__footer-personal-asistant__content{display:grid;grid-template-columns:20% 80%}.footer-top__footer-contact__footer-whatsapp{display:grid;grid-template-columns:1,1fr}.footer-top__footer-contact__footer-whatsapp__whatsapp__content{display:grid;grid-template-columns:20% 80%}.footer-top__footer-contact__footer-email{display:grid;grid-template-columns:1,1fr}.footer-top__footer-contact__footer-email__email__content{display:grid;grid-template-columns:20% 80%}.footer-top__footer-about__press,.footer-top__footer-about__beourpartner{margin-top:10px}.footer-top__footer-products{display:grid;grid-template-columns:repeat(1,1fr)}.footer-top__footer-products{font-weight:700}.footer-bottom{display:grid;grid-template-columns:repeat(3,1fr)}
`, P = /* @__PURE__ */ m(A, [["styles", [y]]]), h = c(P);
function R() {
  customElements.define("ma-footer-bottom", h);
}
export {
  R as register
};
