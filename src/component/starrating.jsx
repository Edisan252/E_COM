import React, { useState } from 'react';

const StarRating = ({ rating, onRate }) => {
  const [hoveredStar, setHoveredStar] = useState(null);

  const handleMouseEnter = (index) => setHoveredStar(index);
  const handleMouseLeave = () => setHoveredStar(null);
  const handleClick = (index) => onRate(index);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star ${star <= (hoveredStar || rating) ? 'filled' : ''}`}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;