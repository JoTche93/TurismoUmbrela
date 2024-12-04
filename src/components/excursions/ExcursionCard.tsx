import React from 'react';
import { Clock, MapPin } from 'lucide-react';
import { type Excursion } from '../../data/excursions';
import { ReviewStars } from '../ReviewStars';

interface ExcursionCardProps {
  excursion: Excursion;
  onOpenDetails: (excursion: Excursion) => void;
}

export function ExcursionCard({ excursion, onOpenDetails }: ExcursionCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${excursion.mainImage})` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{excursion.name}</h3>
          <div className="flex items-center">
            <ReviewStars rating={excursion.rating} />
            <span className="ml-2">{excursion.rating}</span>
          </div>
        </div>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{excursion.duration}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{excursion.location}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{excursion.shortDescription}</p>
        <div className="flex justify-between items-center">
          <div>
            <span className="font-bold text-lg">€{excursion.price}</span>
            <span className="text-gray-600 text-sm">/persona</span>
          </div>
          <button
            onClick={() => onOpenDetails(excursion)}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}