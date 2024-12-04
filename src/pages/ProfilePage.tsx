import React from 'react';
import { useAuthStore } from '../store/authStore';
import { useBookingStore } from '../store/bookingStore';
import { useReviewStore } from '../store/reviewStore';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { Calendar, Users, DollarSign, Clock } from 'lucide-react';
import { ReviewStars } from '../components/ReviewStars';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function ProfilePage() {
  const { user, isAuthenticated } = useAuthStore();
  const { getUserBookings, cancelBooking } = useBookingStore();
  const bookings = user ? getUserBookings(user.id) : [];

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleCancelBooking = (bookingId: string) => {
    cancelBooking(bookingId);
    toast.success('Reserva cancelada exitosamente');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'Confirmada';
      case 'completed':
        return 'Completada';
      case 'cancelled':
        return 'Cancelada';
      default:
        return 'Pendiente';
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-2xl font-bold mb-4">Mi Perfil</h1>
          <div className="space-y-2">
            <p><span className="font-semibold">Nombre:</span> {user?.name}</p>
            <p><span className="font-semibold">Email:</span> {user?.email}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-6">Mis Reservas</h2>
          <div className="space-y-6">
            {bookings.length === 0 ? (
              <p className="text-gray-500 text-center py-4">
                No tienes reservas activas
              </p>
            ) : (
              bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="border rounded-lg p-4 space-y-4"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold">{booking.serviceName}</h3>
                      <span className={`inline-block px-2 py-1 rounded-full text-sm ${getStatusColor(booking.status)}`}>
                        {getStatusText(booking.status)}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold">
                        {booking.totalAmount} {booking.currency}
                      </div>
                      <div className="text-sm text-gray-500">
                        {format(new Date(booking.createdAt), "d 'de' MMMM, yyyy", { locale: es })}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {format(new Date(booking.date.start), "d MMM", { locale: es })} -
                        {format(new Date(booking.date.end), "d MMM", { locale: es })}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      <span>{booking.guests} personas</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{booking.serviceType}</span>
                    </div>
                  </div>

                  {booking.status === 'confirmed' && (
                    <div className="flex justify-end">
                      <button
                        onClick={() => handleCancelBooking(booking.id)}
                        className="text-red-600 hover:text-red-700 text-sm font-medium"
                      >
                        Cancelar reserva
                      </button>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}