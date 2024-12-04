import type { Review } from '../types';

export interface Accommodation {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  images: string[];
  price: number;
  rating: number;
  location: string;
  type: 'hotel' | 'cabaña' | 'hostal';
  amenities: string[];
  rooms: {
    type: string;
    description: string;
    capacity: number;
    price: number;
  }[];
  policies: {
    checkIn: string;
    checkOut: string;
    cancellation: string;
  };
  reviews?: Review[];
  serviceCategory: 'alojamiento';
}

export const accommodations: Accommodation[] = [
  {
    id: 1,
    name: "Cabaña Vista al Lago",
    shortDescription: "Escapada de lujo con vista panorámica al lago y montañas",
    fullDescription: "Disfruta de una experiencia única en nuestras cabañas con vista al lago. Cada detalle ha sido cuidadosamente pensado para brindarte el máximo confort y una conexión única con la naturaleza.",
    mainImage: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1462530260150-162092dbf011?ixlib=rb-4.0.3"
    ],
    price: 180,
    rating: 4.9,
    location: "Lago Nahuel Huapi",
    type: "cabaña",
    amenities: [
      "WiFi gratuito",
      "Desayuno incluido",
      "Estacionamiento",
      "Chimenea",
      "Cocina equipada",
      "Terraza privada"
    ],
    rooms: [
      {
        type: "Cabaña Estándar",
        description: "Perfecta para parejas, con vista al lago",
        capacity: 2,
        price: 180
      },
      {
        type: "Cabaña Familiar",
        description: "Espaciosa cabaña con dos habitaciones",
        capacity: 4,
        price: 280
      }
    ],
    policies: {
      checkIn: "15:00",
      checkOut: "11:00",
      cancellation: "Cancelación gratuita hasta 48 horas antes"
    },
    reviews: [
      {
        id: "1",
        userId: "user1",
        userName: "Ana Martínez",
        rating: 5,
        comment: "Una experiencia inolvidable. Las vistas son espectaculares y la cabaña es muy acogedora.",
        date: "2024-03-10T14:30:00Z",
        serviceId: "1",
        serviceType: "accommodation",
        isVerified: true
      }
    ],
    serviceCategory: "alojamiento"
  },
  {
    id: 2,
    name: "Hotel Boutique Montaña",
    shortDescription: "Elegancia y confort en el corazón de la montaña",
    fullDescription: "Hotel boutique de diseño contemporáneo que combina el lujo con la calidez de la montaña. Ubicado estratégicamente para acceder a las mejores excursiones.",
    mainImage: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?ixlib=rb-4.0.3"
    ],
    price: 250,
    rating: 4.8,
    location: "Sierra Nevada",
    type: "hotel",
    amenities: [
      "WiFi gratuito",
      "Spa",
      "Restaurante gourmet",
      "Gimnasio",
      "Servicio de habitación 24h",
      "Piscina climatizada"
    ],
    rooms: [
      {
        type: "Habitación Deluxe",
        description: "Amplia habitación con vista a la montaña",
        capacity: 2,
        price: 250
      },
      {
        type: "Suite Ejecutiva",
        description: "Suite con sala de estar y jacuzzi",
        capacity: 2,
        price: 350
      }
    ],
    policies: {
      checkIn: "14:00",
      checkOut: "12:00",
      cancellation: "Cancelación gratuita hasta 72 horas antes"
    },
    serviceCategory: "alojamiento"
  }
];