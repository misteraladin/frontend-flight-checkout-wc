const i = /* @__PURE__ */ Object.assign({ "./libs/atoms/spinner/index.ts": () => import("./index.7f7eacf2.js"), "./libs/components/header/index.ts": () => import("./index.7759fe03.js"), "./libs/components/localization-host/index.ts": () => import("./index.74cacba2.js"), "./libs/views/booking-confirmation/index.ts": () => import("./index.515a60d0.js"), "./libs/views/booking-detail/index.ts": () => import("./index.0990bb06.js") });
for (const o in i)
  i[o]().then((s) => {
    s.register();
  });
