import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

/**
 * Reusable BackToTop Component
 * Smooth floating back to top button with scroll threshold detection.
 */
export function BackToTop({ threshold = 350, className = '' }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > threshold) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className={`ui-back-to-top ${isVisible ? 'is-visible' : ''} ${className}`.trim()}
    >
      <ArrowUp size={20} className="ui-back-to-top__icon" />
      <span className="sr-only">Back to top</span>
    </button>
  );
}

export default BackToTop;
