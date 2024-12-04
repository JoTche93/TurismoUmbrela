import React, { useState } from 'react';
import { X, MapPin, Calendar, Users } from 'lucide-react';
import { type Accommodation } from '../../data/accommodations';
import { ReviewForm } from '../ReviewForm';
import { ReviewList } from '../ReviewList';
import { ReviewStars } from '../ReviewStars';
import { useNavigate } from 'react-router-dom';
import { usePaymentStore } from '../../store/paymentStore';
import toast from 'react-hot-toast';

interface AccommodationModalProps {
  accommodation: Accommodation;
  onClose: () => void;
}

export function AccommodationModal({ accommodation, onClose }: AccommodationModalProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(accommodation.rooms[0]);
  const [bookingDates, setBookingDates] = useState({ start: '', end: '' });
  const [guests, setGuests] = useState(1);
  const navigate = useNavigate();
  const { setPaymentDetails } = usePaymentStore();

  const handleReviewSubmit = (review: { rating: number; comment: string }) => {
    toast.success('¡Gracias por tu reseña!');
    setShowReviewForm(false);
  };

  const handleBooking = () => {
    if (!bookingDates.start || !bookingDates.end) {
      toast.error('Por favor selecciona las fechas de entrada y salida');
      return;
    }

    setPaymentDetails({
      amount: selectedRoom.price * guests,
      currency: 'EUR',
      description: `${accommodation.name} - ${selectedRoom.type}`,
      serviceType: 'accommodation',
      serviceId: accommodation.id.toString(),
      dates: bookingDates,
      guests,
    });

    onClose();
    navigate('/payment');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="grid grid-cols-2 gap-1 h-96">
            {accommodation.images.slice(0, 4).map((image, index) => (
              <div
                key={index}
                className={`bg-cover bg-center ${
                  index === 0 ? 'col-span-2 row-span-2' : ''
                }`}
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-3xl font-bold mb-2">{accommodation.name}</h2>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-1" />
                <span>{accommodation.location}</span>
              </div>
            </div>
            <div className="flex items-center">
              <ReviewStars rating={accommodation.rating} />
              <span className="ml-2">{accommodation.rating}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{accommodation.fullDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Servicios</h3>
              <ul className="grid grid-cols-2 gap-2">
                {accommodation.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {amenity}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Políticas</h3>
              <div className="space-y-2 text-gray-600">
                <p>Check-in: {accommodation.policies.checkIn}</p>
                <p>Check-out: {accommodation.policies.checkOut}</p>
                <p>{accommodation.policies.cancellation}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Habitaciones disponibles</h3>
            <div className="grid grid-cols-1 gap-4">
              {accommodation.rooms.map((room) => (
                <div
                  key={room.type}
                  className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedRoom.type === room.type
                      ? 'border-red-600 bg-red-50'
                      : 'hover:border-red-300'
                  }`}
                  onClick={() => setSelectedRoom(room)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{room.type}</h4>
                      <p className="text-gray-600">{room.description}</p>
                      <p className="text-sm text-gray-500">
                        Capacidad: {room.capacity} personas
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">€{room.price}</div>
                      <div className="text-sm text-gray-500">/noche</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Reseñas</h3>
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="text-red-600 hover:text-red-700"
              >
                {showReviewForm ? 'Cancelar' : 'Escribir reseña'}
              </button>
            </div>

            {showReviewForm && (
              <div className="mb-8">
                <ReviewForm onSubmit={handleReviewSubmit} />
              </div>
            )}

            <ReviewList reviews={accommodation.reviews || []} />
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="text-xl font-semibold mb-4">Reserva tu estancia</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de entrada
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={bookingDates.start}
                    onChange={(e) => setBookingDates({ ...bookingDates, start: e.target.value })}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha de salida
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={bookingDates.end}
                    onChange={(e) => setBookingDates({ ...bookingDates, end: e.target.value })}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Huéspedes
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
                  >
                    {[1, 2, 3, 4, 5, 6].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'persona' : 'personas'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold">
                Total: €{selectedRoom.price * guests}
              </div>
              <button
                onClick={handleBooking}
                className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                Reservar ahora
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}