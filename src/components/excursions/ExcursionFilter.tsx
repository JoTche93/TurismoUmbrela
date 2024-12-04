import React from 'react';
import { Calendar, Users, Star, Search, RotateCcw } from 'lucide-react';

interface FilterValues {
  duration: string;
  priceRange: string;
  rating: string;
  date: string;
  participants: number;
}

interface ExcursionFilterProps {
  onFilterChange: (filters: FilterValues) => void;
}

export function ExcursionFilter({ onFilterChange }: ExcursionFilterProps) {
  const [filters, setFilters] = React.useState<FilterValues>({
    duration: '',
    priceRange: '',
    rating: '',
    date: '',
    participants: 1
  });

  const handleFilterChange = (key: keyof FilterValues, value: string | number) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      duration: '',
      priceRange: '',
      rating: '',
      date: '',
      participants: 1
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
              Duración
            </label>
            <select 
              value={filters.duration}
              onChange={(e) => handleFilterChange('duration', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="">Todas las duraciones</option>
              <option value="0-3">Menos de 3 horas</option>
              <option value="3-6">3-6 horas</option>
              <option value="6+">Más de 6 horas</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fecha
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                value={filters.date}
                onChange={(e) => handleFilterChange('date', e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Participantes
            </label>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={filters.participants}
                onChange={(e) => handleFilterChange('participants', Number(e.target.value))}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
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
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
            >
              <option value="">Todos los precios</option>
              <option value="0-50">$0 - $50 USD</option>
              <option value="51-100">$51 - $100 USD</option>
              <option value="101-150">$101 - $150 USD</option>
              <option value="151+">$151+ USD</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calificación
            </label>
            <div className="relative">
              <Star className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                value={filters.rating}
                onChange={(e) => handleFilterChange('rating', e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="">Todas las calificaciones</option>
                <option value="4.8">4.8+ ★★★★★</option>
                <option value="4.5">4.5+ ★★★★☆</option>
                <option value="4.0">4.0+ ★★★★</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
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