import React, { useState } from 'react';
import { X, CreditCard, Calendar, Users } from 'lucide-react';
import { usePaymentStore } from '../../store/paymentStore';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import toast from 'react-hot-toast';

interface PaymentModalProps {
  onClose: () => void;
}

export function PaymentModal({ onClose }: PaymentModalProps) {
  const { paymentDetails } = usePaymentStore();
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  if (!paymentDetails) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would integrate with your payment processor
      // For demo purposes, we'll just show a success message
      toast.success('¡Pago procesado exitosamente!');
      onClose();
    } catch (error) {
      toast.error('Error al procesar el pago');
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Detalles del pago</h2>
            <button onClick={onClose}>
              <X className="h-6 w-6 text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          <div className="mb-6 bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{paymentDetails.description}</h3>
            <div className="text-sm text-gray-600 space-y-1">
              {paymentDetails.dates && (
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>
                    {format(new Date(paymentDetails.dates.start), "d 'de' MMMM", { locale: es })} -
                    {format(new Date(paymentDetails.dates.end), "d 'de' MMMM", { locale: es })}
                  </span>
                </div>
              )}
              {paymentDetails.guests && (
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-2" />
                  <span>{paymentDetails.guests} personas</span>
                </div>
              )}
              <div className="text-lg font-bold mt-2">
                Total: {paymentDetails.amount} {paymentDetails.currency}
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nombre en la tarjeta
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Número de tarjeta
              </label>
              <div className="relative">
                <CreditCard className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                  className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de expiración
                </label>
                <input
                  type="text"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  placeholder="MM/AA"
                  maxLength={5}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="text"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  placeholder="123"
                  maxLength={4}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors mt-6"
            >
              Pagar {paymentDetails.amount} {paymentDetails.currency}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}