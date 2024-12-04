import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Review } from '../types';

interface ReviewState {
  reviews: Review[];
  addReview: (review: Omit<Review, 'id' | 'date'>) => void;
  getReviewsByService: (serviceId: string, serviceType: Review['serviceType']) => Review[];
}

export const useReviewStore = create<ReviewState>()(
  persist(
    (set, get) => ({
      reviews: [],
      addReview: (reviewData) => {
        const newReview: Review = {
          ...reviewData,
          id: crypto.randomUUID(),
          date: new Date().toISOString(),
        };
        
        set((state) => ({
          reviews: [...state.reviews, newReview]
        }));
      },
      getReviewsByService: (serviceId, serviceType) => {
        return get().reviews.filter(
          (review) => review.serviceId === serviceId && review.serviceType === serviceType
        );
      }
    }),
    {
      name: 'reviews-storage',
    }
  )
);