import React from 'react';
import './GradientButton.css';

const GradientButton = ({ children, onClick, href, className = '', disabled = false }) => {
  const Component = href ? 'a' : 'button';
  const props = href ? { href } : { onClick, disabled };

  return (
    <Component className={`gradient-button ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default GradientButton;
