const i = /* @__PURE__ */ Object.assign({ "./libs/atoms/spinner/index.ts": () => import("./index.7f7eacf2.js"), "./libs/components/header/index.ts": () => import("./index.7759fe03.js"), "./libs/components/localization-host/index.ts": () => import("./index.74cacba2.js"), "./libs/components/newsletter/index.ts": () => import("./index.e210ee65.js"), "./libs/views/booking-confirmation/index.ts": () => import("./index.2895c157.js"), "./libs/views/booking-detail/index.ts": () => import("./index.0f4fa4b1.js") });
for (const t in i)
  i[t]().then((s) => {
    s.register();
  });
