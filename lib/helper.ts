export function formatCurrency({
    amount,
    currency = 'USD',
    locale = 'en-US',
  }: {
    amount: number;
    currency: string;
    locale?: string;
  }) {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount);
  }