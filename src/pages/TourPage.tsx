import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Clock, Star, Users } from 'lucide-react';
import { tours } from '../data/tours';
import toast from 'react-hot-toast';

export function TourPage() {
  const { id } = useParams();
  const tourData = tours.find(tour => tour.id === Number(id));
  const [selectedDate, setSelectedDate] = React.useState('');
  const [participants, setParticipants] = React.useState(1);
  const [selectedTime, setSelectedTime] = React.useState('');

  React.useEffect(() => {
    if (tourData?.startTimes?.length > 0) {
      setSelectedTime(tourData.startTimes[0]);
    }
  }, [tourData]);

  if (!tourData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Tour no encontrado</h1>
      </div>
    );
  }

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate) {
      toast.error('Por favor selecciona una fecha');
      return;
    }
    toast.success('¡Reserva iniciada! Redirigiendo al proceso de pago...');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="relative h-[400px] rounded-xl overflow-hidden mb-8">
        <img
          src={tourData.image}
          alt={tourData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <div className="p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">{tourData.name}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1">{tourData.rating}</span>
              </div>
              {tourData.duration && (
                <div className="flex items-center">
                  <Clock className="h-5 w-5" />
                  <span className="ml-1">{tourData.duration}</span>
                </div>
              )}
              <div className="flex items-center">
                <MapPin className="h-5 w-5" />
                <span className="ml-1">{tourData.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <section className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Descripción</h2>
            <p className="text-gray-700 mb-6 whitespace-pre-line">
              {tourData.longDescription || tourData.description}
            </p>
            
            {tourData.included && (
              <>
                <h3 className="text-xl font-semibold mb-3">Incluye</h3>
                <ul className="list-disc list-inside mb-6 text-gray-700">
                  {tourData.included.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {tourData.requirements && (
              <>
                <h3 className="text-xl font-semibold mb-3">Requisitos</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {tourData.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </>
            )}

            {tourData.difficulty && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold mb-3">Dificultad</h3>
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {tourData.difficulty}
                </span>
              </div>
            )}
          </section>
        </div>

        {/* Booking Card */}
        {tourData.price && tourData.startTimes && (
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-24">
              <div className="text-3xl font-bold mb-4">${tourData.price} USD</div>
              <form onSubmit={handleBooking} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Fecha
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Hora de inicio
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                    required
                  >
                    {tourData.startTimes.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Número de personas
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <select
                      value={participants}
                      onChange={(e) => setParticipants(Number(e.target.value))}
                      className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
                      required
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'persona' : 'personas'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="text-lg font-semibold">
                  Total: ${tourData.price * participants} USD
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Reservar ahora
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}