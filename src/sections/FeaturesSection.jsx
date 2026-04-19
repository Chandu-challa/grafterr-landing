import React, { useState, useEffect } from 'react';
import GradientText from '../components/ui/GradientText';
import Carousel from '../components/ui/Carousel';
import Skeleton from '../components/ui/Skeleton';
import './FeaturesSection.css';

const FeaturesSection = ({ data, loading, error, onRetry }) => {
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 375) {
        setItemsPerView(1);
      } else if (width <= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) {
    return (
      <section className="features-section">
        <div className="container">
          <div className="features-section__header">
            <Skeleton variant="heading" width="70%" />
            <Skeleton variant="subheading" width="50%" />
            <div className="features-section__divider">
              <Skeleton variant="text" width="100%" height="2px" />
            </div>
            <Skeleton variant="text" lines={2} className="features-section__subtitle" />
          </div>
          
          <div className="features-section__carousel">
            <div className="features-section__skeleton-cards">
              {Array.from({ length: 3 }, (_, index) => (
                <Skeleton key={index} variant="card" />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="features-section">
        <div className="container">
          <div className="features-section__error">
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <button onClick={onRetry} className="features-section__retry-btn">
              Try Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const { featuresSection, carousel } = data;
  const { title, titleAccent, subtitle, products } = featuresSection;

  return (
    <section className="features-section">
      <div className="container">
        <div className="features-section__header fade-in">
          {/* Decorative Shapes */}
          <div className="features-section__title-shapes">
            <div className="features-section__shape features-section__shape--left"></div>
            <div className="features-section__shape features-section__shape--right"></div>
          </div>
          <h2 className="features-section__title">
            {title}{' '}
            <GradientText>{titleAccent}</GradientText>
          </h2>
          
          {featuresSection.divider && (
            <div className="features-section__divider" />
          )}
          
          <p className="features-section__subtitle">{subtitle}</p>
        </div>

        <div className="features-section__carousel fade-in">
          <Carousel
            items={products}
            itemsPerView={itemsPerView}
            showArrows={carousel.showArrows}
            className="features-section__carousel-component"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
