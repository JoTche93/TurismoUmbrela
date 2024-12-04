import React from 'react';
import { useCurrencyStore } from '../store/currencyStore';
import type { Currency } from '../store/currencyStore';

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrencyStore();

  const currencies: Currency[] = ['EUR', 'USD', 'CLP'];

  return (
    <select
      value={currency}
      onChange={(e) => setCurrency(e.target.value as Currency)}
      className="ml-4 px-2 py-1 border rounded-lg focus:ring-2 focus:ring-red-500 text-sm"
    >
      {currencies.map((curr) => (
        <option key={curr} value={curr}>
          {curr}
        </option>
      ))}
    </select>
  );
}