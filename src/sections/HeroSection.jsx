import React from 'react';
import GradientText from '../components/ui/GradientText';
import GradientButton from '../components/ui/GradientButton';
import FloatingShape from '../components/ui/FloatingShape';
import Skeleton from '../components/ui/Skeleton';
import './HeroSection.css';

const HeroSection = ({ data, loading, error, onRetry }) => {
  if (loading) {
    return (
      <section className="hero-section">
        <div className="container">
          <div className="hero-section__content">
            <div className="hero-section__headline">
              <Skeleton variant="heading" width="80%" />
              <Skeleton variant="heading" width="60%" className="gradient-text--large" />
            </div>
            <Skeleton variant="text" lines={2} className="hero-section__subheadline" />
            <Skeleton variant="button" className="hero-section__cta" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="hero-section">
        <div className="container">
          <div className="hero-section__error">
            <h2>Oops! Something went wrong</h2>
            <p>{error}</p>
            <GradientButton onClick={onRetry}>Try Again</GradientButton>
          </div>
        </div>
      </section>
    );
  }

  if (!data) {
    return null;
  }

  const { headlinePrefix, headlineGradient, subheadline, cta, decorativeShapes } = data;

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-section__content fade-in">
          <div className="hero-section__headline">
            <h1 className="hero-section__title">
              {headlinePrefix}
              <br />
              <GradientText className="gradient-text--large">{headlineGradient}</GradientText>
            </h1>
          </div>
          
          <p className="hero-section__subheadline" dangerouslySetInnerHTML={{ __html: subheadline }}></p>
          
          <div className="hero-section__cta">
            <GradientButton href={cta.url}>
              {cta.text}
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
