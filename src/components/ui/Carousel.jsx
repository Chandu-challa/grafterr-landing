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
            className={`carousel__arrow ${!canGoPrev ? 'disabled' : ''}`}
            onClick={prev}
            disabled={!canGoPrev}
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className={`carousel__arrow ${!canGoNext ? 'disabled' : ''}`}
            onClick={next}
            disabled={!canGoNext}
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
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
