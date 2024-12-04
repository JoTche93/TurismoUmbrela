import type { Review } from '../types';

export interface Excursion {
  id: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  mainImage: string;
  images: string[];
  price: number;
  rating: number;
  duration: string;
  difficulty: 'fácil' | 'moderado' | 'avanzado';
  location: string;
  included: string[];
  notIncluded: string[];
  itinerary: {
    time: string;
    description: string;
  }[];
  requirements: string[];
  groupSizes: {
    min: number;
    max: number;
  };
  startTimes: string[];
  reviews?: Review[];
  serviceCategory: 'turismo_aventura';
}

export const excursions: Excursion[] = [
  {
    id: 1,
    name: "Caminata por el Glaciar Azul",
    shortDescription: "Explora un imponente glaciar con guías expertos",
    fullDescription: "Explora un imponente glaciar con guías expertos que te mostrarán sus formaciones únicas. Una experiencia única donde aprenderás sobre la geología local y capturarás vistas impresionantes.",
    mainImage: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1465919292275-c60ba49da6ae?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1534357808625-fdbecb5da3e2?ixlib=rb-4.0.3"
    ],
    price: 120,
    rating: 4.7,
    duration: "6 horas",
    difficulty: "moderado",
    location: "Glaciar Azul",
    included: [
      "Equipo de seguridad",
      "Guía especializado",
      "Refrigerio"
    ],
    notIncluded: [
      "Transporte al punto de encuentro",
      "Equipo personal",
      "Seguro de viaje"
    ],
    itinerary: [
      {
        time: "08:00",
        description: "Encuentro y briefing de seguridad"
      },
      {
        time: "09:00",
        description: "Inicio de la caminata"
      },
      {
        time: "12:00",
        description: "Refrigerio y descanso"
      },
      {
        time: "14:00",
        description: "Regreso al punto de partida"
      }
    ],
    requirements: [
      "Buena condición física",
      "Ropa abrigada",
      "Calzado apropiado"
    ],
    groupSizes: {
      min: 2,
      max: 12
    },
    startTimes: ["08:00", "09:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 2,
    name: "Tour por los Viñedos del Valle Central",
    shortDescription: "Descubre la magia de los viñedos chilenos",
    fullDescription: "Descubre la magia de los viñedos chilenos con degustaciones y vistas panorámicas. Una experiencia única para los amantes del vino.",
    mainImage: "https://images.unsplash.com/photo-1528132596460-787bb7adfd5f?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1528132596460-787bb7adfd5f?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3"
    ],
    price: 85,
    rating: 4.9,
    duration: "4 horas",
    difficulty: "fácil",
    location: "Valle Central",
    included: [
      "Transporte",
      "Degustación de vinos",
      "Guía bilingüe"
    ],
    notIncluded: [
      "Compras adicionales",
      "Propinas"
    ],
    itinerary: [
      {
        time: "14:00",
        description: "Recogida en hotel"
      },
      {
        time: "14:30",
        description: "Primera bodega y degustación"
      },
      {
        time: "18:00",
        description: "Regreso"
      }
    ],
    requirements: [
      "Mayores de 18 años",
      "Documento de identidad"
    ],
    groupSizes: {
      min: 2,
      max: 8
    },
    startTimes: ["14:00", "15:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 3,
    name: "Avistamiento de Ballenas en el Pacífico",
    shortDescription: "Observa ballenas jorobadas y fauna marina",
    fullDescription: "Observa ballenas jorobadas y fauna marina en un tour guiado en bote. Una experiencia única en el Pacífico.",
    mainImage: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1564543331619-c4fb2c7a3b44?ixlib=rb-4.0.3"
    ],
    price: 150,
    rating: 4.6,
    duration: "5 horas",
    difficulty: "fácil",
    location: "Océano Pacífico",
    included: [
      "Transporte al puerto",
      "Chaleco salvavidas",
      "Guía especializado"
    ],
    notIncluded: [
      "Alimentos",
      "Fotos profesionales"
    ],
    itinerary: [
      {
        time: "07:00",
        description: "Encuentro en el puerto"
      },
      {
        time: "07:30",
        description: "Inicio del tour en bote"
      },
      {
        time: "12:00",
        description: "Regreso a puerto"
      }
    ],
    requirements: [
      "Apto para nadar",
      "Ropa adecuada para el mar"
    ],
    groupSizes: {
      min: 4,
      max: 15
    },
    startTimes: ["07:00", "13:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 4,
    name: "Ascenso al Volcán Villarrica",
    shortDescription: "Una aventura para los amantes del montañismo",
    fullDescription: "Una aventura para los amantes del montañismo, con vistas impresionantes desde la cima del majestuoso Volcán Villarrica.",
    mainImage: "https://images.unsplash.com/photo-1522527595100-e6c9ef4fd8fe?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1522527595100-e6c9ef4fd8fe?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1522527359348-4c5033c4c912?ixlib=rb-4.0.3"
    ],
    price: 200,
    rating: 4.5,
    duration: "8 horas",
    difficulty: "avanzado",
    location: "Volcán Villarrica",
    included: [
      "Equipo técnico",
      "Guía certificado",
      "Snack"
    ],
    notIncluded: [
      "Transporte",
      "Almuerzo",
      "Seguro de montaña"
    ],
    itinerary: [
      {
        time: "05:00",
        description: "Encuentro y preparación"
      },
      {
        time: "06:00",
        description: "Inicio del ascenso"
      },
      {
        time: "13:00",
        description: "Regreso a base"
      }
    ],
    requirements: [
      "Excelente condición física",
      "Experiencia en montañismo",
      "Equipo básico personal"
    ],
    groupSizes: {
      min: 2,
      max: 8
    },
    startTimes: ["05:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 5,
    name: "Tour en Bicicleta por los Lagos Andinos",
    shortDescription: "Recorre paisajes lacustres en bicicleta",
    fullDescription: "Recorre paisajes lacustres en una experiencia activa y enriquecedora, perfecta para los amantes del ciclismo y la naturaleza.",
    mainImage: "https://images.unsplash.com/photo-1571188654248-7a89213915f7?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1571188654248-7a89213915f7?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3"
    ],
    price: 60,
    rating: 4.8,
    duration: "3 horas",
    difficulty: "moderado",
    location: "Lagos Andinos",
    included: [
      "Bicicleta",
      "Casco",
      "Guía bilingüe"
    ],
    notIncluded: [
      "Transporte al punto de inicio",
      "Bebidas extra"
    ],
    itinerary: [
      {
        time: "09:00",
        description: "Encuentro y ajuste de equipos"
      },
      {
        time: "09:30",
        description: "Inicio del recorrido"
      },
      {
        time: "12:00",
        description: "Regreso y fin del tour"
      }
    ],
    requirements: [
      "Saber andar en bicicleta",
      "Condición física moderada"
    ],
    groupSizes: {
      min: 2,
      max: 10
    },
    startTimes: ["09:00", "14:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 6,
    name: "Paseo en Barco por el Lago Llanquihue",
    shortDescription: "Navega por el tranquilo Lago Llanquihue",
    fullDescription: "Navega por el tranquilo Lago Llanquihue, con vistas espectaculares al volcán Osorno y el paisaje circundante.",
    mainImage: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3"
    ],
    price: 50,
    rating: 4.9,
    duration: "2 horas",
    difficulty: "fácil",
    location: "Lago Llanquihue",
    included: [
      "Paseo en barco",
      "Bebida de cortesía"
    ],
    notIncluded: [
      "Transporte al muelle",
      "Alimentos adicionales"
    ],
    itinerary: [
      {
        time: "10:00",
        description: "Embarque"
      },
      {
        time: "10:15",
        description: "Inicio del paseo"
      },
      {
        time: "12:00",
        description: "Regreso al muelle"
      }
    ],
    requirements: [
      "Ninguno específico"
    ],
    groupSizes: {
      min: 4,
      max: 20
    },
    startTimes: ["10:00", "14:00", "16:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 7,
    name: "Ruta de las Cascadas Escondidas",
    shortDescription: "Descubre cascadas secretas en la naturaleza",
    fullDescription: "Descubre cascadas secretas en un recorrido lleno de naturaleza y tranquilidad, perfecto para los amantes de la fotografía.",
    mainImage: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1434615516502-f86b87b933b0?ixlib=rb-4.0.3"
    ],
    price: 70,
    rating: 4.7,
    duration: "4 horas",
    difficulty: "moderado",
    location: "Región de los Lagos",
    included: [
      "Transporte",
      "Guía naturalista"
    ],
    notIncluded: [
      "Almuerzo",
      "Equipo fotográfico"
    ],
    itinerary: [
      {
        time: "09:00",
        description: "Recogida en hotel"
      },
      {
        time: "09:30",
        description: "Inicio del sendero"
      },
      {
        time: "13:00",
        description: "Regreso"
      }
    ],
    requirements: [
      "Calzado apropiado",
      "Ropa impermeable"
    ],
    groupSizes: {
      min: 2,
      max: 12
    },
    startTimes: ["09:00", "14:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 8,
    name: "Exploración Arqueológica en el Desierto de Atacama",
    shortDescription: "Visita sitios arqueológicos ancestrales",
    fullDescription: "Visita sitios arqueológicos y aprende sobre la cultura ancestral atacameña en el desierto más árido del mundo.",
    mainImage: "https://images.unsplash.com/photo-1551406483-3731d1997540?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1551406483-3731d1997540?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1553969923-bbf0cac2666b?ixlib=rb-4.0.3"
    ],
    price: 90,
    rating: 4.6,
    duration: "5 horas",
    difficulty: "moderado",
    location: "Desierto de Atacama",
    included: [
      "Transporte",
      "Guía arqueológico",
      "Hidratación"
    ],
    notIncluded: [
      "Almuerzo",
      "Equipo fotográfico"
    ],
    itinerary: [
      {
        time: "07:00",
        description: "Salida del hotel"
      },
      {
        time: "07:30",
        description: "Visita primer sitio"
      },
      {
        time: "12:00",
        description: "Regreso"
      }
    ],
    requirements: [
      "Protección solar",
      "Ropa ligera",
      "Calzado cómodo"
    ],
    groupSizes: {
      min: 2,
      max: 15
    },
    startTimes: ["07:00", "15:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 9,
    name: "Tour Nocturno de Observación Astronómica",
    shortDescription: "Contempla el cielo estrellado del desierto",
    fullDescription: "Contempla el cielo estrellado en uno de los mejores lugares del mundo para la astronomía, con equipos profesionales y guías expertos.",
    mainImage: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1509773896068-7fd2f28dab1e?ixlib=rb-4.0.3"
    ],
    price: 70,
    rating: 5.0,
    duration: "2 horas",
    difficulty: "fácil",
    location: "Observatorio Astronómico",
    included: [
      "Telescopios",
      "Guía especializado",
      "Chocolate caliente"
    ],
    notIncluded: [
      "Transporte",
      "Fotografías profesionales"
    ],
    itinerary: [
      {
        time: "21:00",
        description: "Introducción astronómica"
      },
      {
        time: "21:30",
        description: "Observación con telescopios"
      },
      {
        time: "23:00",
        description: "Fin de la actividad"
      }
    ],
    requirements: [
      "Ropa abrigada",
      "Calzado cerrado"
    ],
    groupSizes: {
      min: 2,
      max: 20
    },
    startTimes: ["21:00"],
    serviceCategory: "turismo_aventura"
  },
  {
    id: 10,
    name: "Kayak en el Fiordo Última Esperanza",
    shortDescription: "Rema por aguas tranquilas rodeadas de montañas",
    fullDescription: "Rema por aguas tranquilas rodeadas de montañas y glaciares en la Patagonia chilena, una experiencia única en un paisaje espectacular.",
    mainImage: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3",
    images: [
      "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a?ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.0.3"
    ],
    price: 110,
    rating: 4.7,
    duration: "3 horas",
    difficulty: "moderado",
    location: "Fiordo Última Esperanza",
    included: [
      "Kayak",
      "Chaleco salvavidas",
      "Guía certificado"
    ],
    notIncluded: [
      "Transporte",
      "Equipo fotográfico",
      "Snacks"
    ],
    itinerary: [
      {
        time: "09:00",
        description: "Charla de seguridad y técnica"
      },
      {
        time: "09:30",
        description: "Inicio del recorrido"
      },
      {
        time: "12:00",
        description: "Regreso a la base"
      }
    ],
    requirements: [
      "Saber nadar",
      "Ropa impermeable",
      "Condición física moderada"
    ],
    groupSizes: {
      min: 2,
      max: 8
    },
    startTimes: ["09:00", "14:00"],
    serviceCategory: "turismo_aventura"
  }
];