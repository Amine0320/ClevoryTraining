import React, { useState, useEffect } from 'react';
import '../index.css' ; 
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }; 
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop}>
          Scroll to Top
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
