const i = (t) => t.toLocaleString("id-ID", {
  style: "currency",
  currency: "IDR",
  currencyDisplay: "code",
  maximumFractionDigits: 0
}), a = (t, e) => new Date(t).toLocaleDateString(e, {
  day: "2-digit",
  month: "long",
  year: "numeric"
}), o = (t) => new Date(t).toLocaleDateString("id-ID", {
  day: "2-digit",
  month: "short"
}), n = (t) => new Date(t).toLocaleDateString("es-CL", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
  minute: "2-digit",
  hour: "2-digit"
});
export {
  n as a,
  i as b,
  a as c,
  o as t
};
