export const toIDR = (value: number) =>
  value.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
  });
