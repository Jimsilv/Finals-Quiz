import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Card = ({ product }) => {
  return (
    <div className="card mb-3">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description.slice(0, 100)}...</p>
        <div className="d-flex justify-content-between">
          <span className="text-warning">
            <FontAwesomeIcon icon={faStar} /> {product.rating}
          </span>
          <span className="text-success">${product.price}</span>
        </div>
        <a href={`/product/${product.uuid}`} className="btn btn-primary mt-2">View Details</a>
      </div>
    </div>
  );
};

export default Card;
