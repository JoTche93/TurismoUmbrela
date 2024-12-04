import React from 'react';
import { Calendar, Users, Search, RotateCcw } from 'lucide-react';

interface FilterValues {
  type: string;
  priceRange: string;
  rating: string;
  dates: { start: string; end: string };
  guests: number;
}

interface AccommodationFilterProps {
  onFilterChange: (filters: FilterValues) => void;
}

export function AccommodationFilter({ onFilterChange }: AccommodationFilterProps) {
  const [filters, setFilters] = React.useState<FilterValues>({
    type: '',
    priceRange: '',
    rating: '',
    dates: { start: '', end: '' },
    guests: 1
  });

  const handleFilterChange = (key: keyof FilterValues, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      type: '',
      priceRange: '',
      rating: '',
      dates: { start: '', end: '' },
      guests: 1
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-8 relative z-10 mx-4 lg:mx-auto max-w-6xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo de alojamiento
            </label>
            <select 
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Todos los tipos</option>
              <option value="hotel">Hotel</option>
              <option value="cabaña">Cabaña</option>
              <option value="hostal">Hostal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de entrada
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={filters.dates.start}
                onChange={(e) => handleFilterChange('dates', { ...filters.dates, start: e.target.value })}
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
                value={filters.dates.end}
                onChange={(e) => handleFilterChange('dates', { ...filters.dates, end: e.target.value })}
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
                value={filters.guests}
                onChange={(e) => handleFilterChange('guests', Number(e.target.value))}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rango de precio
            </label>
            <select 
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Todos los precios</option>
              <option value="0-100">€0 - €100</option>
              <option value="101-200">€101 - €200</option>
              <option value="201+">€201+</option>
            </select>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            <Search className="h-5 w-5" />
            Aplicar Filtros
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="h-5 w-5" />
            Limpiar Filtros
          </button>
        </div>
      </form>
    </div>
  );
}