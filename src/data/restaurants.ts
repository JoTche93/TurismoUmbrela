export interface Restaurant {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  location: string;
  priceRange: string;
  cuisine: string;
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: 'La Cumbre',
    description: 'Restaurante de alta cocina con vistas a la montaña',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3',
    rating: 4.9,
    location: 'Sierra Nevada',
    priceRange: '€€€',
    cuisine: 'Mediterránea'
  },
  {
    id: 2,
    name: 'El Rincón del Valle',
    description: 'Cocina tradicional con productos locales',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3',
    rating: 4.7,
    location: 'Valle del Sol',
    priceRange: '€€',
    cuisine: 'Local'
  },
  {
    id: 3,
    name: 'Lago Azul',
    description: 'Especialidad en pescados y mariscos frescos',
    image: 'https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?ixlib=rb-4.0.3',
    rating: 4.8,
    location: 'Lagos Andinos',
    priceRange: '€€€',
    cuisine: 'Pescados y Mariscos'
  }
];