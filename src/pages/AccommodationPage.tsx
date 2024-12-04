import React, { useState } from 'react';
import { AccommodationCard } from '../components/accommodation/AccommodationCard';
import { AccommodationModal } from '../components/accommodation/AccommodationModal';
import { AccommodationFilter } from '../components/accommodation/AccommodationFilter';
import { TopRatedSection } from '../components/TopRatedSection';
import { accommodations, type Accommodation } from '../data/accommodations';

export function AccommodationPage() {
  const [selectedAccommodation, setSelectedAccommodation] = useState<Accommodation | null>(null);
  const [filters, setFilters] = useState({
    type: '',
    priceRange: '',
    rating: '',
    dates: { start: '', end: '' },
    guests: 1
  });
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilterChange = (newFilters: typeof filters) => {
    const hasActiveFilters = Object.entries(newFilters).some(([key, value]) => {
      if (key === 'dates') {
        return value.start !== '' || value.end !== '';
      }
      if (key === 'guests') {
        return value !== 1;
      }
      return value !== '';
    });

    setFilters(newFilters);
    setIsFiltered(hasActiveFilters);
  };

  const filteredAccommodations = isFiltered ? accommodations.filter(accommodation => {
    if (filters.type && accommodation.type !== filters.type) return false;
    if (filters.rating && accommodation.rating < parseFloat(filters.rating)) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (accommodation.price < min || accommodation.price > max) return false;
      } else {
        if (accommodation.price < min) return false;
      }
    }
    return true;
  }) : accommodations;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Tu Estancia Perfecta Te Espera</h1>
            <p className="text-xl">Alojamientos diseñados para que disfrutes de cada rincón</p>
          </div>
        </div>
      </div>

      {/* Top Rated Section */}
      {!isFiltered && (
        <TopRatedSection
          items={accommodations}
          title="Alojamientos Mejor Valorados"
          onItemClick={setSelectedAccommodation}
          colorScheme="red"
        />
      )}

      {/* Filter Section */}
      <AccommodationFilter onFilterChange={handleFilterChange} />

      {/* Accommodation Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredAccommodations.map((accommodation) => (
            <AccommodationCard
              key={accommodation.id}
              accommodation={accommodation}
              onOpenDetails={setSelectedAccommodation}
            />
          ))}
        </div>
      </div>

      {/* Accommodation Modal */}
      {selectedAccommodation && (
        <AccommodationModal
          accommodation={selectedAccommodation}
          onClose={() => setSelectedAccommodation(null)}
        />
      )}
    </div>
  );
}