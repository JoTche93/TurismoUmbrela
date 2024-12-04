import React, { useState } from 'react';
import { X, Clock, Star } from 'lucide-react';
import { type Menu } from '../data/menus';
import { ReviewForm } from './ReviewForm';
import { ReviewList } from './ReviewList';
import { ReviewStars } from './ReviewStars';
import { useNavigate } from 'react-router-dom';
import { usePaymentStore } from '../store/paymentStore';
import type { Review } from '../types';
import toast from 'react-hot-toast';

interface MenuModalProps {
  menu: Menu;
  onClose: () => void;
}

export function MenuModal({ menu, onClose }: MenuModalProps) {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const navigate = useNavigate();
  const { setPaymentDetails } = usePaymentStore();

  const handleReviewSubmit = (review: { rating: number; comment: string }) => {
    toast.success('¡Gracias por tu reseña!');
    setShowReviewForm(false);
  };

  const handleBooking = () => {
    setPaymentDetails({
      amount: menu.price,
      currency: 'EUR',
      description: `${menu.name}`,
      serviceType: 'dining',
      serviceId: menu.id.toString(),
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
          <div 
            className="h-64 bg-cover bg-center"
            style={{ backgroundImage: `url(${menu.mainImage})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-3xl font-bold mb-2">{menu.name}</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <ReviewStars rating={menu.rating} />
                  <span className="ml-2">{menu.rating}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5" />
                  <span className="ml-1">{menu.prepTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <p className="text-gray-700 mb-6">{menu.fullDescription}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3">Incluye</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {menu.includes.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Información Adicional</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <h4 className="font-semibold">Origen</h4>
                  <p>{menu.origin}</p>
                </div>
                <div>
                  <h4 className="font-semibold">Opciones Dietéticas</h4>
                  <ul className="list-disc list-inside">
                    {menu.dietaryOptions.map((option, index) => (
                      <li key={index}>{option}</li>
                    ))}
                  </ul>
                </div>
              </div>
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

            <ReviewList reviews={menu.reviews || []} />
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-2xl font-bold">€{menu.price}</div>
            <button
              onClick={handleBooking}
              className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
            >
              Reservar este menú
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}