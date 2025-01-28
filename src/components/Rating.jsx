// src/components/Rating.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';

const Rating = ({ value }) => {
  return (
    <div className="d-flex align-items-center">
      {[1, 2, 3, 4, 5].map((star) => (
        <FontAwesomeIcon
          key={star}
          icon={
            value >= star
              ? faStar
              : value >= star - 0.5
              ? faStarHalfAlt
              : faStarOutline
          }
          className="text-warning me-1"
        />
      ))}
      <span className="ms-2">{value}</span>
    </div>
  );
};

export default Rating;
