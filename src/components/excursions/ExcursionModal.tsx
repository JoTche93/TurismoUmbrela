import React, { useState } from 'react';
import { X, Clock, MapPin, Users, Calendar } from 'lucide-react';
import { type Excursion } from '../../data/excursions';
import { ReviewForm } from '../ReviewForm';
import { ReviewList } from '../ReviewList';
import { ReviewStars } from '../ReviewStars';
import { useNavigate } from 'react-router-dom';
import { usePaymentStore } from '../../store/paymentStore';
import toast from 'react-hot-toast';

interface ExcursionModalProps {
  excursion: Excursion;
  onClose: () => void;
}

export function ExcursionModal({ excursion, onClose }: ExcursionModalProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(excursion.startTimes[0]);
  const [participants, setParticipants] = useState(1);
  const navigate = useNavigate();
  const { setPaymentDetails } = usePaymentStore();

  const handleBooking = () => {
    if (!selectedDate) {
      toast.error('Por favor selecciona una fecha');
      return;
    }

    setPaymentDetails({
      amount: excursion.price * participants,
      currency: 'EUR',
      description: `${excursion.name} - ${participants} persona(s)`,
      serviceType: 'excursion',
      serviceId: excursion.id.toString(),
      dates: {
        start: selectedDate,
        end: selectedDate,
      },
      guests: participants,
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
            {excursion.images.slice(0, 4).map((image, index) => (
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
              <h2 className="text-3xl font-bold mb-2">{excursion.name}</h2>
              <div className="flex items-center gap-4 text-gray-600">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-1" />
                  <span>{excursion.duration}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-1" />
                  <span>{excursion.location}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <ReviewStars rating={excursion.rating} />
              <span className="ml-2">{excursion.rating}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-6">{excursion.fullDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Incluye</h3>
              <ul className="space-y-2">
                {excursion.included.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">No incluye</h3>
              <ul className="space-y-2">
                {excursion.notIncluded.map((item, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Itinerario</h3>
            <div className="space-y-4">
              {excursion.itinerary.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mr-4">
                    {item.time}
                  </div>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 border-t pt-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Reseñas</h3>
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="text-green-600 hover:text-green-700"
              >
                {showReviewForm ? 'Cancelar' : 'Escribir reseña'}
              </button>
            </div>

            {showReviewForm && (
              <div className="mb-8">
                <ReviewForm 
                  serviceId={excursion.id.toString()}
                  serviceType="excursion"
                  onSubmit={() => setShowReviewForm(false)}
                />
              </div>
            )}

            <ReviewList 
              serviceId={excursion.id.toString()}
              serviceType="excursion"
              defaultReviews={excursion.reviews}
            />
          </div>

          <div className="mt-8 border-t pt-8">
            <h3 className="text-xl font-semibold mb-4">Reserva tu excursión</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Fecha
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Hora de inicio
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  {excursion.startTimes.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Participantes
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <select
                    value={participants}
                    onChange={(e) => setParticipants(Number(e.target.value))}
                    className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                  >
                    {Array.from(
                      { length: excursion.groupSizes.max - excursion.groupSizes.min + 1 },
                      (_, i) => i + excursion.groupSizes.min
                    ).map((num) => (
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
                Total: €{excursion.price * participants}
              </div>
              <button
                onClick={handleBooking}
                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
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