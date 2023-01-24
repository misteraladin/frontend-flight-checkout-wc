const i = /* @__PURE__ */ Object.assign({ "./libs/atoms/spinner/index.ts": () => import("./index.b9d728fd.mjs"), "./libs/components/header/index.ts": () => import("./index.8fe4b663.mjs"), "./libs/components/localization-host/index.ts": () => import("./index.4be2135c.mjs"), "./libs/components/newsletter/index.ts": () => import("./index.51f2f9f8.mjs"), "./libs/pages/booking-confirmation-mobile/index.ts": () => import("./index.0804de8c.mjs"), "./libs/pages/booking-detail-mobile/index.ts": () => import("./index.336a27cb.mjs"), "./libs/views/booking-confirmation/index.ts": () => import("./index.67076927.mjs"), "./libs/views/booking-detail/index.ts": () => import("./index.d751d2b9.mjs") });
for (const o in i)
  i[o]().then((t) => {
    t.register();
  });
