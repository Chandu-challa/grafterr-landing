import contentData from '../data/content.json';

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Simulate random network failures (10% chance)
const simulateNetworkFailure = () => Math.random() < 0.1;

export const fetchHeroContent = async () => {
  try {
    // Simulate network delay (1000-1500ms)
    const delayTime = Math.floor(Math.random() * 500) + 1000;
    await delay(delayTime);
    
    // Simulate occasional network failure
    if (simulateNetworkFailure()) {
      throw new Error('Network error: Failed to fetch hero content');
    }
    
    return {
      success: true,
      data: contentData.hero
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

export const fetchFeaturesContent = async () => {
  try {
    // Simulate network delay (1000-1500ms)
    const delayTime = Math.floor(Math.random() * 500) + 1000;
    await delay(delayTime);
    
    // Simulate occasional network failure
    if (simulateNetworkFailure()) {
      throw new Error('Network error: Failed to fetch features content');
    }
    
    return {
      success: true,
      data: {
        featuresSection: contentData.featuresSection,
        carousel: contentData.carousel
      }
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

export const fetchNavigationContent = async () => {
  try {
    // Simulate network delay (1000-1500ms)
    const delayTime = Math.floor(Math.random() * 500) + 1000;
    await delay(delayTime);
    
    // Simulate occasional network failure
    if (simulateNetworkFailure()) {
      throw new Error('Network error: Failed to fetch navigation content');
    }
    
    return {
      success: true,
      data: contentData.navigation
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};

export const fetchAllContent = async () => {
  try {
    // Simulate network delay (1000-1500ms)
    const delayTime = Math.floor(Math.random() * 500) + 1000;
    await delay(delayTime);
    
    // Simulate occasional network failure
    if (simulateNetworkFailure()) {
      throw new Error('Network error: Failed to fetch content');
    }
    
    return {
      success: true,
      data: contentData
    };
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};
