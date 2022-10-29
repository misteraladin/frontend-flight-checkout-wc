export const toIDR = (value: number) =>
  value.toLocaleString('id-ID', {
    style: 'currency',
    currency: 'IDR',
    currencyDisplay: 'code',
    maximumFractionDigits: 0,
  });

export const toDate = (string: string, locale: 'id-ID' | 'en-GB') =>
  new Date(string).toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });

export const toDateMonth = (value: string) =>
  new Date(value).toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
  });
