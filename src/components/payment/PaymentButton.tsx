import React, { useState } from 'react';
import { usePaymentStore } from '../../store/paymentStore';
import { PaymentModal } from './PaymentModal';

interface PaymentButtonProps {
  amount: number;
  currency?: string;
  description: string;
  serviceType: 'excursion' | 'accommodation' | 'dining';
  serviceId: string;
  dates?: {
    start: string;
    end: string;
  };
  guests?: number;
  className?: string;
}

export function PaymentButton({
  amount,
  currency = 'EUR',
  description,
  serviceType,
  serviceId,
  dates,
  guests,
  className = ''
}: PaymentButtonProps) {
  const [showModal, setShowModal] = useState(false);
  const { setPaymentDetails, clearPaymentDetails } = usePaymentStore();

  const handleClick = () => {
    setPaymentDetails({
      amount,
      currency,
      description,
      serviceType,
      serviceId,
      dates,
      guests
    });
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    clearPaymentDetails();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className={className}
      >
        Reservar ahora
      </button>

      {showModal && <PaymentModal onClose={handleClose} />}
    </>
  );
}