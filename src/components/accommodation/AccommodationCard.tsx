import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { type Accommodation } from '../../data/accommodations';
import { ReviewStars } from '../ReviewStars';

interface AccommodationCardProps {
  accommodation: Accommodation;
  onOpenDetails: (accommodation: Accommodation) => void;
}

export function AccommodationCard({ accommodation, onOpenDetails }: AccommodationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${accommodation.mainImage})` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{accommodation.name}</h3>
          <div className="flex items-center">
            <ReviewStars rating={accommodation.rating} />
            <span className="ml-2">{accommodation.rating}</span>
          </div>
        </div>
        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{accommodation.location}</span>
        </div>
        <p className="text-gray-600 mb-4">{accommodation.shortDescription}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">€{accommodation.price}</span>
            <span className="text-gray-600 text-sm">/noche</span>
          </div>
          <button
            onClick={() => onOpenDetails(accommodation)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}