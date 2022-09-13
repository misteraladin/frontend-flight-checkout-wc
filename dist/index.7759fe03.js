import { defineComponent as t, openBlock as n, createElementBlock as i, createStaticVNode as c, createElementVNode as s, normalizeStyle as h, unref as d, defineCustomElement as r } from "vue";
import { _ as o } from "./_plugin-vue_export-helper.9d74fd37.js";
const m = ["href"], g = /* @__PURE__ */ c('<svg class="header-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 230"><title>mnc-misteraladin-logo</title><g class="logotype"><path class="a" d="M564.18 87.75v6s-5-7.51-16.38-7.51-23.15 8.25-23.15 27.83 18.1 24.75 20.93 24.75 11.7.86 18.35-5.79v5.17h12.68V87.75ZM551 127.56c-7.62 0-13.79-6.6-13.79-14.73s6.18-14.74 13.79-14.74 13.79 6.6 13.79 14.73-6.17 14.74-13.79 14.74ZM647 87.75v6s-5-7.51-16.38-7.51-23.15 8.25-23.15 27.83 18.1 24.75 20.93 24.75 11.7.86 18.35-5.79v5.17h12.68V87.75Zm-13.2 39.81c-7.62 0-13.79-6.6-13.79-14.73s6.17-14.73 13.79-14.73 13.79 6.6 13.79 14.73-6.17 14.73-13.79 14.73ZM707.37 68.54v25.24s-5-7.51-16.38-7.51-23.15 8.25-23.15 27.83 18.1 24.75 20.93 24.75 11.7.86 18.35-5.79v5.17h12.68V68.54Zm-13.17 59c-7.62 0-13.79-6.6-13.79-14.73s6.17-14.73 13.79-14.73 13.8 6.61 13.8 14.74-6.19 14.74-13.81 14.74ZM586.86 68h12.89v70.1h-13s.03-70.1.11-70.1ZM731 87.58h12.89v50.56h-13s0-50.64.11-50.56Z"></path><circle class="a" cx="737.7" cy="74.37" r="6.5"></circle><path class="a" d="M755.26 87.67v50.48h12.39V111s-.16-12.07 11.74-13.13c0 0 8-1.48 8 11.82v28.4H800v-36.72s-1.07-15.1-16.5-15.1a20.54 20.54 0 0 0-15.43 6.16v-4.68s-12.64.08-12.81-.08ZM0 87.62v50.48h12.44v-28.93s.86-11.45 11.82-11.45c0 0 7.76.49 7.76 10.71V138h12.92v-29.57s1.72-11 11.2-11 8.37 10 8.37 10v30.41H77v-36s-1.15-15.57-15.93-15.57-17.61 9.11-17.61 9.11a17.52 17.52 0 0 0-15.39-9c-11 0-15.51 7.39-15.51 7.39v-6.15S0 87.5 0 87.62ZM88 87.75h12.56V138h-12.4s.18-50.56-.16-50.25ZM135.19 102.15l7.51-7.26s-4.68-8.62-17.11-8.62-14.9 10.22-14.9 10.22-3.82 11.08 7.88 17.48 14.65 6.9 13.17 11.57-11.2 2.71-15.76-3l-7.51 8.13s6.4 9.36 17.61 8.5 14.53-6.4 14.53-6.4a15.11 15.11 0 0 0 1.85-16s-3.08-6.53-15.39-11.2c0 0-7.88-2.34-4.19-7s12.31 3.58 12.31 3.58ZM155.63 69h12.44v18.5h7.26v11h-7.39v39.4h-12.06V98.58H149v-11h6.53s-.02-18.67.1-18.58ZM206.48 86.27s-26.23-.25-26.23 26.84 27.21 26.47 27.21 26.47 15 .62 21.79-11L219 123.21s-3.08 4.8-11.57 5.17A14.63 14.63 0 0 1 192 116.44l40.75-.25s2.42-28.69-26.27-29.92Zm-13.79 20.19A14.32 14.32 0 0 1 206.48 97a14.17 14.17 0 0 1 13.67 9.73ZM240.09 87.75h10.84v5.91s5.79-10.84 16.13-6l-3.82 11s-7-5.66-10.34 6.65v32.63h-12.44s-.24-50.19-.37-50.19Z"></path><circle class="a" cx="94.77" cy="74.37" r="6.5"></circle></g><path class="b" d="M339.64 47.38A25.09 25.09 0 0 0 347 65.24l4.49 4.49a61.93 61.93 0 0 1 84.31-.29l4.5-4.5a29.62 29.62 0 0 1 19.37-8.66L410.2 6.78a23.16 23.16 0 0 0-32.75 0L339.83 44.4a25.6 25.6 0 0 0-.19 2.98Z"></path><path class="c" d="M326.21 169.19a25.09 25.09 0 0 0 17.86-7.4l4.49-4.49a61.93 61.93 0 0 1-.29-84.3l-4.5-4.5a29.62 29.62 0 0 1-8.66-19.37l-49.5 49.49a23.16 23.16 0 0 0 0 32.75L323.23 169a25.6 25.6 0 0 0 2.98.19Z"></path><path class="d" d="M448 182.62a25.09 25.09 0 0 0-7.4-17.86l-4.49-4.49a61.93 61.93 0 0 1-84.31.29l-4.5 4.5a29.62 29.62 0 0 1-19.3 8.66l49.49 49.49a23.16 23.16 0 0 0 32.75 0l37.62-37.62a25.6 25.6 0 0 0 .14-2.97Z"></path><path class="a" d="M502 98.62 464.43 61a25.6 25.6 0 0 0-3-.19 25.09 25.09 0 0 0-17.86 7.4l-4.47 4.49a61.93 61.93 0 0 1 .29 84.31l4.5 4.5a29.62 29.62 0 0 1 8.66 19.37l49.45-49.5a23.16 23.16 0 0 0 0-32.76ZM369.94 71.58s15.39-.19 24 7.88a38 38 0 0 1 23.64-8.07A42.18 42.18 0 0 0 394.14 64c-13.69 0-24.2 7.58-24.2 7.58Z"></path><path class="a" d="M392.17 80s-11.35-8.63-26-6.38a40.88 40.88 0 0 0-14 20.55s18.33-11.89 40-14.17ZM395.65 80.12s11.07-8.73 25.8-6.76c0 0 9.48 6.76 14.54 21a117.25 117.25 0 0 0-40.34-14.24Z"></path><path class="a" d="M351.74 96.26s19-12.29 41.94-14.82c0 0 22.14 2.91 41.94 14.36 0 0 2.25 5.25 3.75 15.58 0 0-34.81-12.2-45.6-16.61 0 0-31.24 12.39-44.57 16.23 0 0 1.22-12.59 2.54-14.74Z"></path><path class="a" d="M385.7 99.35s6.38-2.06 7.69-3a61.2 61.2 0 0 0 8 2.91l-7.13 4.88ZM347.61 110.71s0-4.69 1.13-7.41l-6.1-7.6ZM439.09 103.67a31.61 31.61 0 0 1 1.41 6.76l5.07-14.54ZM375.94 126.57a3 3 0 1 1 2.54-4.74 6.27 6.27 0 1 0 0 3.37 3 3 0 0 1-2.54 1.37ZM416.52 117.25a6.25 6.25 0 0 0-6 4.57 3 3 0 1 1 0 3.41 6.26 6.26 0 1 0 6-8ZM423.88 145s-.72-5-5.12-5.21a3 3 0 0 0-3.43 2.41c1.7-1.16 2.73-.84 2.73-.84s3.51.71 2.15 4-10 2.27-10 2.27-6.35-1.2-10.39-.23a27.65 27.65 0 0 1-10.08 0c-4-1-10.39.23-10.39.23s-8.6 1.05-10-2.27 2.15-4 2.15-4 1-.31 2.73.84a3 3 0 0 0-3.43-2.41c-4.4.25-5.12 5.21-5.12 5.21s-1.28 8.11 10.18 10.06c11.2 1.91 16.34.15 18.87-1.41 2.53 1.56 7.67 3.32 18.87 1.41 11.56-1.92 10.28-10.06 10.28-10.06Z"></path><path class="a" d="M372.57 132.19a9.11 9.11 0 1 1 9.11-9.11 9.12 9.12 0 0 1-9.11 9.11Zm0-17.23a8.11 8.11 0 1 0 8.11 8.11 8.12 8.12 0 0 0-8.11-8.07ZM416.35 132.19a9.11 9.11 0 1 1 9.11-9.11 9.12 9.12 0 0 1-9.11 9.11Zm0-17.23a8.11 8.11 0 1 0 8.11 8.11 8.12 8.12 0 0 0-8.11-8.07Z"></path></svg>', 1), p = [
  g
], v = /* @__PURE__ */ t({
  __name: "logo.ce",
  props: {
    homepageUrl: {
      type: String,
      default: "https://misteraladin.com"
    }
  },
  setup(e) {
    return (a, l) => (n(), i("a", { href: e.homepageUrl }, p, 8, m));
  }
}), x = `.header-logo{margin:.75rem 0;height:auto;width:100%;max-width:9rem;object-fit:contain}.header-logo.dark .a,.header-logo.dark .b,.header-logo.dark .c,.header-logo.dark .d{fill:var(--color-white-50)}.header-logo .a{fill:#213e7a}.header-logo .b{fill:#fdd600}.header-logo .c{fill:#3f9143}.header-logo .d{fill:#ea3e24}@media screen and (max-width: 480px){.header-logo{max-width:8.875rem;margin:.5rem}}
`, _ = /* @__PURE__ */ o(v, [["styles", [x]]]), Z = { id: "ma-header" }, f = /* @__PURE__ */ s("ma-logo", {
  lang: "en",
  "homepage-url": "https://misteraladin.com/train"
}, null, -1), M = [
  f
], w = /* @__PURE__ */ t({
  __name: "header.ce",
  setup(e) {
    const a = window.innerWidth;
    return (l, E) => (n(), i("header", Z, [
      s("div", {
        class: "container",
        style: h({ maxWidth: d(a) })
      }, M, 4)
    ]));
  }
}), u = `#ma-header .line-separator{display:inline-block;margin-right:.75rem;height:1.5rem;width:1px;background-color:#ccc}#ma-header .link{display:flex;align-items:center;margin-right:1rem;font-size:.875rem;font-weight:500;text-decoration:none!important;color:#333}#ma-header .link:hover{text-decoration:none!important}@media screen and (max-width: 480px){#ma-header .link.site-link{margin-right:0}}#ma-header .link img{margin-right:.5rem}@media screen and (max-width: 480px){#ma-header .link img{margin-right:0}}
`, y = `#ma-header .container{display:flex;align-items:center;justify-content:space-between;padding:0 15px;margin:0 auto;max-width:1110px}@media screen and (max-width: 480px){#ma-header .container{justify-content:center}}#ma-header .link{font-size:.875rem;text-decoration:none;color:#333;transition:all .3s ease}#ma-header .link:hover{text-decoration:underline}.header-navigation{display:flex;align-items:center;justify-content:flex-end;width:70%}@media screen and (max-width: 480px){.header-navigation{display:none}}.header-navigation .link{display:flex;align-items:center;margin-right:1rem}.header-navigation .link:hover{text-decoration:none!important}.header-navigation .link img{margin-right:.5rem}
`, k = /* @__PURE__ */ o(w, [["styles", [u, y]]]), V = r(_), b = r(k);
function $() {
  customElements.define("ma-logo", V), customElements.define("ma-header", b);
}
export {
  $ as register
};
