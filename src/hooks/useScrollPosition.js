import { useState, useEffect } from 'react';

// Throttle function to limit how often scroll events fire
const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const updateScrollPosition = () => {
      if (typeof window === 'undefined') return;
      
      setScrollPosition(window.scrollY);
      
      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const sectionElements = sections.map(id => ({
        id,
        element: document.getElementById(id)
      }));

      const currentSection = sectionElements
        .filter(({ element }) => element)
        .reverse()
        .find(({ element }) => {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100;
        });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    // Throttle scroll events to improve performance
    const throttledUpdate = throttle(updateScrollPosition, 100);

    // Use requestAnimationFrame for smoother updates
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          throttledUpdate();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Initial update with delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      updateScrollPosition();
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return { scrollPosition, activeSection };
};
