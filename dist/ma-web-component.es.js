const i = /* @__PURE__ */ Object.assign({ "./libs/atoms/spinner/index.ts": () => import("./index.b9d728fd.mjs"), "./libs/components/header/index.ts": () => import("./index.8fe4b663.mjs"), "./libs/components/localization-host/index.ts": () => import("./index.4be2135c.mjs"), "./libs/components/newsletter/index.ts": () => import("./index.38cc8051.mjs"), "./libs/views/booking-confirmation/index.ts": () => import("./index.6c6922f4.mjs"), "./libs/views/booking-detail/index.ts": () => import("./index.c983aa17.mjs") });
for (const t in i)
  i[t]().then((s) => {
    s.register();
  });
