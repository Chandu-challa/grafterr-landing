import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, image, className = '' }) => {
  return (
    <div className={`product-card ${className}`}>
      <div className="product-card__image-container">
        <div className="product-card__overlay-left">
          <h3 className="product-card__title-overlay">{title}</h3>
        </div>
        <img 
          src={image} 
          alt={title}
          className="product-card__image"
          onError={(e) => {
            e.target.src = '/images/placeholder.png';
          }}
        />
      </div>
    </div>
  );
};

export default ProductCard;
