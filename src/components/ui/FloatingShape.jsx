import React from 'react';
import './FloatingShape.css';

const FloatingShape = ({ type, color, size, width, height, position, className = '' }) => {
  const shapeClasses = [
    'floating-shape',
    `floating-shape--${type}`,
    `floating-shape--${position}`,
    className
  ].filter(Boolean).join(' ');

  const style = {
    '--shape-color': color,
    '--shape-size': size,
    '--shape-width': width,
    '--shape-height': height,
  };

  return (
    <div className={shapeClasses} style={style} aria-hidden="true">
      {type === 'circle' && <div className="floating-shape__circle" />}
      {type === 'rectangle' && <div className="floating-shape__rectangle" />}
    </div>
  );
};

export default FloatingShape;
