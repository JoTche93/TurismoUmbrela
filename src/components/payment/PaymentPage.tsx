import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePaymentStore } from '../../store/paymentStore';
import { useAuthStore } from '../../store/authStore';
import { useBookingStore } from '../../store/bookingStore';
import { CreditCard, Calendar, Users } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import toast from 'react-hot-toast';

export function PaymentPage() {
  const { paymentDetails, clearPaymentDetails } = usePaymentStore();
  const { user } = useAuthStore();
  const { addBooking } = useBookingStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!paymentDetails) {
      navigate('/');
      return;
    }
  }, [paymentDetails, navigate]);

  if (!paymentDetails || !user) {
    return null;
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();

    // Add the booking to the store
    addBooking({
      userId: user.id,
      serviceId: paymentDetails.serviceId,
      serviceType: paymentDetails.serviceType,
      serviceName: paymentDetails.description,
      date: paymentDetails.dates || {
        start: new Date().toISOString(),
        end: new Date().toISOString()
      },
      guests: paymentDetails.guests || 1,
      totalAmount: paymentDetails.amount,
      currency: paymentDetails.currency
    });

    toast.success('¡Pago procesado exitosamente!');
    clearPaymentDetails();
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-600 text-white px-6 py-4">
            <h1 className="text-xl font-semibold">Portal de Pagos</h1>
          </div>

          <div className="p-6">
            <div className="mb-6 bg-gray-50 p-4 rounded-lg">
              <h2 className="font-semibold mb-2">{paymentDetails.description}</h2>
              <div className="text-sm text-gray-600 space-y-2">
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

            <form onSubmit={handlePayment} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre en la tarjeta
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
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
                    required
                    placeholder="1234 5678 9012 3456"
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
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
                    required
                    placeholder="MM/AA"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="123"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
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
    </div>
  );
}