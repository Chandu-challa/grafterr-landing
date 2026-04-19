import React from 'react';
import { useCarousel } from '../../hooks/useCarousel';
import ProductCard from './ProductCard';
import './Carousel.css';

const Carousel = ({ items, itemsPerView = 3, showArrows = true, className = '' }) => {
  const {
    currentIndex,
    maxIndex,
    isTransitioning,
    next,
    prev,
    goToSlide,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    carouselRef,
    canGoNext,
    canGoPrev
  } = useCarousel(items, itemsPerView);

  const translateX = currentIndex * (100 / itemsPerView);

  return (
    <div className={`carousel ${className}`}>
      <div 
        className="carousel__container"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className={`carousel__track ${isTransitioning ? 'carousel__track--transitioning' : ''}`}
          style={{ transform: `translateX(-${translateX}%)` }}
        >
          {items.map((item, index) => (
            <div 
              key={item.id || index}
              className="carousel__slide"
              style={{ width: `${100 / itemsPerView}%` }}
            >
              <ProductCard {...item} />
            </div>
          ))}
        </div>
      </div>

      {showArrows && (
        <div className="carousel__navigation">
          <button
            className={`carousel__arrow carousel__arrow--prev ${!canGoPrev ? 'carousel__arrow--disabled' : ''}`}
            onClick={prev}
            disabled={!canGoPrev}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          
          <button
            className={`carousel__arrow carousel__arrow--next ${!canGoNext ? 'carousel__arrow--disabled' : ''}`}
            onClick={next}
            disabled={!canGoNext}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}

      {/* Dots indicator */}
      <div className="carousel__dots">
        {Array.from({ length: maxIndex + 1 }, (_, index) => (
          <button
            key={index}
            className={`carousel__dot ${index === currentIndex ? 'carousel__dot--active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
