import React from 'react';
import { Search, RotateCcw } from 'lucide-react';

interface FilterValues {
  category: string;
  priceRange: string;
  rating: string;
}

interface MenuFilterProps {
  onFilterChange: (filters: FilterValues) => void;
}

export function MenuFilter({ onFilterChange }: MenuFilterProps) {
  const [filters, setFilters] = React.useState<FilterValues>({
    category: '',
    priceRange: '',
    rating: ''
  });

  const handleFilterChange = (key: keyof FilterValues, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  const handleReset = () => {
    const resetFilters = {
      category: '',
      priceRange: '',
      rating: ''
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 -mt-8 relative z-10 mx-4 lg:mx-auto max-w-6xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Categoría
            </label>
            <select 
              value={filters.category}
              onChange={(e) => handleFilterChange('category', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Todas las categorías</option>
              <option value="carnes">Carnes</option>
              <option value="pescados">Pescados</option>
              <option value="vegetariano">Vegetariano</option>
              <option value="postres">Postres</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rango de Precio
            </label>
            <select 
              value={filters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Todos los precios</option>
              <option value="0-30">€0 - €30</option>
              <option value="31-50">€31 - €50</option>
              <option value="51+">€51+</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Valoración
            </label>
            <select 
              value={filters.rating}
              onChange={(e) => handleFilterChange('rating', e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-red-500"
            >
              <option value="">Todas las valoraciones</option>
              <option value="4.5">4.5+ estrellas</option>
              <option value="4">4+ estrellas</option>
              <option value="3.5">3.5+ estrellas</option>
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