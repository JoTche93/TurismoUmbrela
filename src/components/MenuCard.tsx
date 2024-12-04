import React from 'react';
import { Star } from 'lucide-react';
import { type Menu } from '../data/menus';

interface MenuCardProps {
  menu: Menu;
  onOpenDetails: (menu: Menu) => void;
}

export function MenuCard({ menu, onOpenDetails }: MenuCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${menu.mainImage})` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{menu.name}</h3>
          <div className="flex items-center">
            <Star className="h-5 w-5 text-yellow-400 fill-current" />
            <span className="ml-1">{menu.rating}</span>
          </div>
        </div>
        <p className="text-gray-600 mb-4">{menu.shortDescription}</p>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">€{menu.price}</span>
          <button
            onClick={() => onOpenDetails(menu)}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}