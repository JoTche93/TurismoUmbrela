import React from 'react';
import { MapPin, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tours } from '../data/tours';

export function FeaturedTours() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Excursiones Destacadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <div key={tour.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${tour.image})` }}
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{tour.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{tour.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Ver ubicación</span>
                  </div>
                  <Link 
                    to={`/tour/${tour.id}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}