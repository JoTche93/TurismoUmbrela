import React from 'react';
import { Star } from 'lucide-react';

interface TopRatedItem {
  id: number;
  name: string;
  rating: number;
  mainImage: string;
  shortDescription: string;
  price: number;
}

interface TopRatedSectionProps {
  items: TopRatedItem[];
  title: string;
  priceLabel?: string;
  onItemClick: (item: TopRatedItem) => void;
  colorScheme?: 'red' | 'green';
}

export function TopRatedSection({ 
  items, 
  title, 
  priceLabel = "€", 
  onItemClick,
  colorScheme = 'red'
}: TopRatedSectionProps) {
  const topItems = [...items]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  const colorClasses = {
    red: 'bg-red-600 hover:bg-red-700',
    green: 'bg-green-600 hover:bg-green-700'
  };

  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topItems.map((item, index) => (
            <div 
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${item.mainImage})` }}
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1">{item.rating}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{item.shortDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">{priceLabel}{item.price}</span>
                  <button
                    onClick={() => onItemClick(item)}
                    className={`text-white px-4 py-2 rounded-lg transition-colors ${colorClasses[colorScheme]}`}
                  >
                    Ver más
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}