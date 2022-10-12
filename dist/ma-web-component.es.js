const i = /* @__PURE__ */ Object.assign({ "./libs/atoms/link/index.ts": () => import("./index.4fa82968.mjs"), "./libs/atoms/popover/index.ts": () => import("./index.20402171.mjs"), "./libs/atoms/spinner/index.ts": () => import("./index.14180b0e.mjs"), "./libs/components/header/index.ts": () => import("./index.8fe4b663.mjs"), "./libs/components/localization-host/index.ts": () => import("./index.4be2135c.mjs"), "./libs/components/newsletter/index.ts": () => import("./index.5a111fb1.mjs"), "./libs/molecules/card-hotel/index.ts": () => import("./index.17211b33.mjs"), "./libs/molecules/card-section/index.ts": () => import("./index.1ca761ca.mjs"), "./libs/views/booking-confirmation/index.ts": () => import("./index.cd9e029e.mjs"), "./libs/views/booking-detail/index.ts": () => import("./index.f5aca127.mjs") });
for (const s in i)
  i[s]().then((t) => {
    t.register();
  });
