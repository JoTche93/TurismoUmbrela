import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Currency = 'EUR' | 'USD' | 'CLP';

interface CurrencyState {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}

export const useCurrencyStore = create<CurrencyState>()(
  persist(
    (set) => ({
      currency: 'EUR',
      setCurrency: (currency) => set({ currency }),
    }),
    {
      name: 'currency-storage',
    }
  )
);