import React, { useState } from 'react';
import { ExcursionCard } from '../components/excursions/ExcursionCard';
import { ExcursionModal } from '../components/excursions/ExcursionModal';
import { ExcursionFilter } from '../components/excursions/ExcursionFilter';
import { TopRatedSection } from '../components/TopRatedSection';
import { excursions, type Excursion } from '../data/excursions';

export function ExcursionsPage() {
  const [selectedExcursion, setSelectedExcursion] = useState<Excursion | null>(null);
  const [filters, setFilters] = useState({
    duration: '',
    priceRange: '',
    rating: '',
    date: '',
    participants: 1
  });
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilterChange = (newFilters: typeof filters) => {
    const hasActiveFilters = Object.entries(newFilters).some(([key, value]) => {
      if (key === 'participants') {
        return value !== 1;
      }
      return value !== '';
    });

    setFilters(newFilters);
    setIsFiltered(hasActiveFilters);
  };

  const filteredExcursions = isFiltered ? excursions.filter(excursion => {
    if (filters.duration) {
      const [min, max] = filters.duration.split('-').map(Number);
      const hours = parseInt(excursion.duration);
      if (max) {
        if (hours < min || hours > max) return false;
      } else {
        if (hours < min) return false;
      }
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (excursion.price < min || excursion.price > max) return false;
      } else {
        if (excursion.price < min) return false;
      }
    }
    if (filters.rating && excursion.rating < parseFloat(filters.rating)) return false;
    if (filters.participants) {
      if (
        filters.participants < excursion.groupSizes.min ||
        filters.participants > excursion.groupSizes.max
      ) {
        return false;
      }
    }
    return true;
  }) : excursions;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Explora la Naturaleza con Nosotros</h1>
            <p className="text-xl">Excursiones diseñadas para todos los niveles, con guías expertos locales</p>
          </div>
        </div>
      </div>

      {/* Top Rated Section */}
      {!isFiltered && (
        <TopRatedSection
          items={excursions}
          title="Excursiones Mejor Valoradas"
          priceLabel="$"
          onItemClick={setSelectedExcursion}
          colorScheme="green"
        />
      )}

      {/* Filter Section */}
      <ExcursionFilter onFilterChange={handleFilterChange} />

      {/* Excursion Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredExcursions.map((excursion) => (
            <ExcursionCard
              key={excursion.id}
              excursion={excursion}
              onOpenDetails={setSelectedExcursion}
            />
          ))}
        </div>
      </div>

      {/* Excursion Modal */}
      {selectedExcursion && (
        <ExcursionModal
          excursion={selectedExcursion}
          onClose={() => setSelectedExcursion(null)}
        />
      )}
    </div>
  );
}