import { useState, useCallback, useRef, useEffect } from 'react';

export const useCarousel = (items, itemsPerView = 3) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const carouselRef = useRef(null);

  const maxIndex = Math.max(0, items.length - itemsPerView);

  const next = useCallback(() => {
    if (isTransitioning) return;
    
    setCurrentIndex(prevIndex => {
      const newIndex = Math.min(prevIndex + 1, maxIndex);
      return newIndex;
    });
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, maxIndex]);

  const prev = useCallback(() => {
    if (isTransitioning) return;
    
    setCurrentIndex(prevIndex => {
      const newIndex = Math.max(prevIndex - 1, 0);
      return newIndex;
    });
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning]);

  const goToSlide = useCallback((index) => {
    if (isTransitioning || index < 0 || index > maxIndex) return;
    
    setCurrentIndex(index);
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isTransitioning, maxIndex]);

  // Touch handlers for mobile swipe
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    
    if (diff > threshold) {
      // Swipe left - go to next
      next();
    } else if (diff < -threshold) {
      // Swipe right - go to previous
      prev();
    }
    
    // Reset touch values
    touchStartX.current = 0;
    touchEndX.current = 0;
  }, [next, prev]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prev();
      } else if (e.key === 'ArrowRight') {
        next();
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('keydown', handleKeyDown);
      return () => {
        carousel.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [next, prev]);

  // Reset index when items per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  return {
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
    canGoNext: currentIndex < maxIndex,
    canGoPrev: currentIndex > 0
  };
};
