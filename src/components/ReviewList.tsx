import React from 'react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { ReviewStars } from './ReviewStars';
import { useReviewStore } from '../store/reviewStore';
import type { Review } from '../types';

interface ReviewListProps {
  serviceId: string;
  serviceType: Review['serviceType'];
  defaultReviews?: Review[];
}

export function ReviewList({ serviceId, serviceType, defaultReviews = [] }: ReviewListProps) {
  const storedReviews = useReviewStore((state) => 
    state.getReviewsByService(serviceId, serviceType)
  );

  // Combine stored reviews with default reviews, avoiding duplicates
  const allReviews = [...defaultReviews, ...storedReviews]
    .filter((review, index, self) => 
      index === self.findIndex((r) => r.id === review.id)
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="space-y-6">
      {allReviews.map((review) => (
        <div key={review.id} className="border-b pb-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <div className="font-semibold">{review.userName}</div>
              <div className="text-sm text-gray-500">
                {format(new Date(review.date), "d 'de' MMMM, yyyy", { locale: es })}
              </div>
            </div>
            <ReviewStars rating={review.rating} />
          </div>
          <p className="text-gray-700">{review.comment}</p>
          {review.isVerified && (
            <div className="mt-2 text-sm text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Compra verificada
            </div>
          )}
        </div>
      ))}
    </div>
  );
}