import { useState, useEffect, useCallback } from 'react';
import { fetchHeroContent, fetchFeaturesContent, fetchNavigationContent } from '../services/api';

export const useContent = () => {
  const [heroData, setHeroData] = useState(null);
  const [featuresData, setFeaturesData] = useState(null);
  const [navigationData, setNavigationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadContent = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const [heroResponse, featuresResponse, navigationResponse] = await Promise.all([
        fetchHeroContent(),
        fetchFeaturesContent(),
        fetchNavigationContent()
      ]);

      if (heroResponse.success) {
        setHeroData(heroResponse.data);
      } else {
        throw new Error(heroResponse.error);
      }

      if (featuresResponse.success) {
        setFeaturesData(featuresResponse.data);
      } else {
        throw new Error(featuresResponse.error);
      }

      if (navigationResponse.success) {
        setNavigationData(navigationResponse.data);
      } else {
        throw new Error(navigationResponse.error);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  return {
    heroData,
    featuresData,
    navigationData,
    loading,
    error,
    retry: loadContent
  };
};
