import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';

const ProductScreen = () => {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product details using the product ID
    axios.get(`products/${id}/`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Loading state while the product data is fetched
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Product Image and Basic Info */}
        <div className="col-md-6">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2>{product.name}</h2>
          <p className="text-muted">{product.brand}</p>
          <p>{product.category}</p>

          {/* Rating and Price */}
          <div className="d-flex align-items-center mb-3">
            <span className="text-warning">
              {[...Array(5)].map((_, index) => (
                <i key={index} className={`fa fa-star${index < product.rating ? '' : '-o'}`} />
              ))}
            </span>
            <span className="ml-2">${product.price}</span>
          </div>

          {/* Product Description */}
          <p>{product.description}</p>

          {/* Stock and Buy Button */}
          <div className="d-flex align-items-center mb-3">
            <span>In Stock: {product.stock}</span>
          </div>

          {/* CTA for Adding to Cart or Purchase */}
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductScreen;
