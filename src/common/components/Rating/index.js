import React from 'react';
import StarEmpty from "../../../icons/StarEmpty";
import Star from "../../../icons/Star";

const Rating = ({ rating }) => {
  const totalRating = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      totalRating.push(
        <Star key={`rating-key${i}`}  className="star" />
      );
    } else {
      totalRating.push(
        <StarEmpty key={`rating-key${i}`} className="star-o" />
      );
    }
  }

  return <div className="rating">{totalRating}</div>;
};

export default Rating;
