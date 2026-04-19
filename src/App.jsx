import React from 'react';
import { useContent } from './hooks/useContent';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import './styles/global.css';

function App() {
  const { heroData, featuresData, loading, error, retry } = useContent();

  return (
    <div className="App">
      <HeroSection 
        data={heroData} 
        loading={loading} 
        error={error} 
        onRetry={retry} 
      />
      <FeaturesSection 
        data={featuresData} 
        loading={loading} 
        error={error} 
        onRetry={retry} 
      />
    </div>
  );
}

export default App;
