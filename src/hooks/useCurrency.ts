import { useCurrencyStore } from '../store/currencyStore';
import { convertCurrency, formatCurrency } from '../utils/currency';

export function useCurrency() {
  const { currency } = useCurrencyStore();

  const convert = (amount: number, fromCurrency: string) => {
    return convertCurrency(amount, fromCurrency, currency);
  };

  const format = (amount: number) => {
    return formatCurrency(amount, currency);
  };

  return { convert, format, currentCurrency: currency };
}