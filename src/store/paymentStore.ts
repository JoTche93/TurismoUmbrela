import { create } from 'zustand';

interface PaymentDetails {
  amount: number;
  currency: string;
  description: string;
  serviceType: 'excursion' | 'accommodation' | 'dining';
  serviceId: string;
  dates?: {
    start: string;
    end: string;
  };
  guests?: number;
}

interface PaymentState {
  paymentDetails: PaymentDetails | null;
  setPaymentDetails: (details: PaymentDetails) => void;
  clearPaymentDetails: () => void;
}

export const usePaymentStore = create<PaymentState>((set) => ({
  paymentDetails: null,
  setPaymentDetails: (details) => set({ paymentDetails: details }),
  clearPaymentDetails: () => set({ paymentDetails: null }),
}));