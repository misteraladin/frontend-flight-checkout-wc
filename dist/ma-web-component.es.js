const i = /* @__PURE__ */ Object.assign({ "./libs/atoms/cards/types.ts": () => import("./types.09fa0212.js"), "./libs/atoms/spinner/index.ts": () => import("./index.7f7eacf2.js"), "./libs/components/header/index.ts": () => import("./index.7759fe03.js"), "./libs/components/localization-host/index.ts": () => import("./index.74cacba2.js"), "./libs/views/booking-confirmation/index.ts": () => import("./index.0ca07e04.js"), "./libs/views/booking-confirmation/lang.ts": () => import("./lang.df582137.js"), "./libs/views/booking-detail/index.ts": () => import("./index.05706599.js"), "./libs/views/booking-detail/lang.ts": () => import("./lang.22238f48.js") });
for (const s in i)
  i[s]().then((o) => {
    o.register();
  });
