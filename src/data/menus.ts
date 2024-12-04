import type { Review } from '../types';

export interface Menu {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  price: number;
  rating: number;
  category: 'carnes' | 'pescados' | 'vegetariano' | 'postres';
  includes: string[];
  origin: string;
  dietaryOptions: string[];
  prepTime: string;
  images: string[];
  reviews?: Review[];
  serviceCategory: 'gastronomia';
}

export const menus: Menu[] = [
  {
    id: 1,
    name: "Asado Patagónico",
    shortDescription: "Carne a las brasas, ensalada fresca y postre casero",
    fullDescription: "Una experiencia gastronómica que celebra la tradición del asado argentino, con las mejores carnes seleccionadas y preparadas a la perfección.",
    mainImage: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3",
    price: 45,
    rating: 4.8,
    category: 'carnes',
    serviceCategory: 'gastronomia',
    includes: [
      "Entrada de empanadas caseras",
      "Asado de tira y vacío",
      "Ensalada criolla",
      "Papas asadas",
      "Postre: Flan con dulce de leche",
      "Bebida: Copa de vino tinto"
    ],
    origin: "El asado patagónico es una tradición centenaria que refleja la cultura gaucha y la calidad de la carne argentina.",
    dietaryOptions: ["Sin gluten disponible", "Opciones sin lactosa"],
    prepTime: "30-40 minutos",
    images: [
      "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3"
    ],
    reviews: [
      {
        id: '1',
        userId: 'user1',
        userName: 'María González',
        rating: 5,
        comment: '¡Excelente experiencia! La carne estaba perfectamente preparada y el servicio fue excepcional.',
        date: '2024-03-15T18:30:00Z',
        serviceId: '1',
        serviceType: 'menu',
        isVerified: true
      },
      {
        id: '2',
        userId: 'user2',
        userName: 'Carlos Rodríguez',
        rating: 4,
        comment: 'Muy buena calidad de la carne y excelente ambiente. Las empanadas estaban deliciosas.',
        date: '2024-03-14T20:15:00Z',
        serviceId: '1',
        serviceType: 'menu',
        isVerified: true
      }
    ]
  },
  // ... rest of the menus remain the same, just add serviceCategory: 'gastronomia' to each
];