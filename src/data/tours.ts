export interface Tour {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  rating: number;
  duration?: string;
  difficulty?: string;
  included?: string[];
  requirements?: string[];
  price?: number;
  startTimes?: string[];
}

export const tours: Tour[] = [
  {
    id: 1,
    name: 'Sierra Nevada',
    description: 'Explora las majestuosas montañas con vistas panorámicas increíbles',
    longDescription: `Únete a nosotros en una aventura inolvidable por la Sierra Nevada, donde la naturaleza se encuentra con la historia. Esta excursión te llevará a través de:

  • Senderos históricos con vistas panorámicas
  • Lagos cristalinos de origen glaciar
  • Bosques centenarios
  • Puntos de observación de fauna silvestre`,
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.8,
    duration: '8 horas',
    difficulty: 'Moderada',
    included: [
      'Guía profesional certificado',
      'Equipo de seguridad',
      'Almuerzo tipo picnic',
      'Transporte desde el punto de encuentro',
      'Seguro de actividades'
    ],
    requirements: [
      'Buena condición física',
      'Ropa adecuada para montaña',
      'Calzado de trekking',
      'Protección solar'
    ],
    price: 89.99,
    startTimes: ['08:00', '09:00', '10:00']
  },
  {
    id: 2,
    name: 'Lagos Andinos',
    description: 'Descubre la belleza de los lagos cristalinos en los Andes',
    image: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.9
  },
  {
    id: 3,
    name: 'Valle del Sol',
    description: 'Recorre los senderos más hermosos del valle con guías expertos',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    rating: 4.7
  }
];