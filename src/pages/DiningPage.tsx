import React, { useState } from 'react';
import { MenuCard } from '../components/MenuCard';
import { MenuModal } from '../components/MenuModal';
import { MenuFilter } from '../components/MenuFilter';
import { TopRatedSection } from '../components/TopRatedSection';
import { menus, type Menu } from '../data/menus';

export function DiningPage() {
  const [selectedMenu, setSelectedMenu] = useState<Menu | null>(null);
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    rating: ''
  });
  const [isFiltered, setIsFiltered] = useState(false);

  const handleFilterChange = (newFilters: typeof filters) => {
    const hasActiveFilters = Object.values(newFilters).some(value => value !== '');
    
    setFilters(newFilters);
    setIsFiltered(hasActiveFilters);
  };

  const filteredMenus = isFiltered ? menus.filter(menu => {
    if (filters.category && menu.category !== filters.category) return false;
    if (filters.rating && menu.rating < parseFloat(filters.rating)) return false;
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (max) {
        if (menu.price < min || menu.price > max) return false;
      } else {
        if (menu.price < min) return false;
      }
    }
    return true;
  }) : menus;

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3")'
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl font-bold mb-4">Disfruta los Sabores Locales</h1>
            <p className="text-xl">Menús exclusivos diseñados para complementar tu aventura</p>
          </div>
        </div>
      </div>

      {/* Top Rated Section */}
      {!isFiltered && (
        <TopRatedSection
          items={menus}
          title="Menús Mejor Valorados"
          onItemClick={setSelectedMenu}
          colorScheme="red"
        />
      )}

      {/* Filter Section */}
      <MenuFilter onFilterChange={handleFilterChange} />

      {/* Menu Cards */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredMenus.map((menu) => (
            <MenuCard
              key={menu.id}
              menu={menu}
              onOpenDetails={setSelectedMenu}
            />
          ))}
        </div>
      </div>

      {/* Menu Modal */}
      {selectedMenu && (
        <MenuModal
          menu={selectedMenu}
          onClose={() => setSelectedMenu(null)}
        />
      )}
    </div>
  );
}