export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  type: 'turismo_aventura' | 'gastronomia' | 'alojamiento';
}

export interface Review {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  serviceId: string;
  serviceType: 'excursion' | 'menu' | 'accommodation';
  isVerified: boolean;
}

export interface Notification {
  id: string;
  type: 'new_service' | 'service_update' | 'review';
  title: string;
  message: string;
  date: string;
  isRead: boolean;
  serviceId?: string;
}