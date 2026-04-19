import React from 'react';
import './Skeleton.css';

const Skeleton = ({ variant = 'text', width, height, className = '', lines = 1 }) => {
  const skeletonClasses = [
    'skeleton',
    `skeleton--${variant}`,
    className
  ].filter(Boolean).join(' ');

  const style = {
    '--skeleton-width': width,
    '--skeleton-height': height,
  };

  if (variant === 'text' && lines > 1) {
    return (
      <div className={`skeleton--text-group ${className}`} style={style}>
        {Array.from({ length: lines }, (_, index) => (
          <div
            key={index}
            className="skeleton skeleton--text"
            style={{
              '--skeleton-width': index === lines - 1 ? '60%' : '100%',
            }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`skeleton--card ${className}`}>
        <div className="skeleton skeleton--image" />
        <div className="skeleton--card-content">
          <div className="skeleton skeleton--text" style={{ '--skeleton-width': '70%' }} />
          <div className="skeleton skeleton--text" style={{ '--skeleton-width': '100%' }} />
          <div className="skeleton skeleton--text" style={{ '--skeleton-width': '80%' }} />
        </div>
      </div>
    );
  }

  return <div className={skeletonClasses} style={style} />;
};

export default Skeleton;
