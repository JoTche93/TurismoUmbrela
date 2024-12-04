import React from 'react';
import { Star } from 'lucide-react';

interface ReviewStarsProps {
  rating: number;
  size?: number;
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
}

export function ReviewStars({ 
  rating, 
  size = 5, 
  interactive = false,
  onRatingChange 
}: ReviewStarsProps) {
  const [hoverRating, setHoverRating] = React.useState(0);

  const renderStar = (index: number) => {
    const filled = interactive 
      ? index <= (hoverRating || rating)
      : index <= rating;

    return (
      <Star
        key={index}
        className={`h-${size} w-${size} ${
          filled 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        } ${interactive ? 'cursor-pointer' : ''}`}
        onMouseEnter={() => interactive && setHoverRating(index)}
        onMouseLeave={() => interactive && setHoverRating(0)}
        onClick={() => interactive && onRatingChange?.(index)}
      />
    );
  };

  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map(renderStar)}
    </div>
  );
}