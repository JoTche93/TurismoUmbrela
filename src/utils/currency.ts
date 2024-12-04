export const exchangeRates = {
  EUR: {
    USD: 1.09,
    CLP: 1047.82,
    EUR: 1,
  },
  USD: {
    EUR: 0.92,
    CLP: 961.30,
    USD: 1,
  },
  CLP: {
    EUR: 0.00095,
    USD: 0.001,
    CLP: 1,
  },
};

export const currencySymbols = {
  EUR: '€',
  USD: '$',
  CLP: 'CLP',
};

export function convertCurrency(amount: number, from: string, to: string): number {
  const rate = exchangeRates[from as keyof typeof exchangeRates][to as keyof typeof exchangeRates];
  return Math.round(amount * rate * 100) / 100;
}

export function formatCurrency(amount: number, currency: string): string {
  const symbol = currencySymbols[currency as keyof typeof currencySymbols];
  
  if (currency === 'CLP') {
    return `${symbol} ${Math.round(amount).toLocaleString()}`;
  }
  
  return `${symbol}${amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
}