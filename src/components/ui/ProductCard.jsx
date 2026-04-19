import React from 'react';
import './ProductCard.css';

const ProductCard = ({ title, image, description, className = '' }) => {
  const isPointOfSale = title === "Point of sale";
  
  return (
    <div className={`product-card ${className}`}>
      <div className="product-card__image-container">
        <img 
          src={image} 
          alt={title}
          className="product-card__image"
          onError={(e) => {
            e.target.src = '/images/placeholder.png';
          }}
        />
        {isPointOfSale && (
          <div className="product-card__overlay-left">
            <h3 className="product-card__title-overlay">{title}</h3>
          </div>
        )}
      </div>
      {!isPointOfSale && (
        <div className="product-card__content">
          <h3 className="product-card__title">{title}</h3>
          <p className="product-card__description">{description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
