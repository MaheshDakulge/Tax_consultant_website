import React, { useState, useEffect } from 'react';

export default function FloatingActions() {
  const [waVisible, setWaVisible] = useState(false);
  const [scrollTopVisible, setScrollTopVisible] = useState(false);

  useEffect(() => {
    // Show WhatsApp tooltip after 3 seconds
    const timer = setTimeout(() => {
      setWaVisible(true);
    }, 3000);

    // Scroll to Top visibility handler
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrollTopVisible(true);
      } else {
        setScrollTopVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeWaTooltip = (e) => {
    e.stopPropagation();
    setWaVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fab-container">
      {/* WhatsApp Tooltip Bubble */}
      <div id="wa-tooltip" className={waVisible ? 'visible' : ''}>
        <button id="wa-tooltip-close" aria-label="Close" onClick={closeWaTooltip}>
          &times;
        </button>
        <p>Hi! Need help with taxes? 👋 Chat with us on WhatsApp.</p>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/912462298101?text=Hello%20Jinke%20%26%20Associates%2C%20I%20would%20like%20to%20enquire%20about%20your%20tax%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        aria-label="WhatsApp Us"
      >
        <i className="fa-brands fa-whatsapp"></i>
      </a>

      {/* Call Float Button */}
      <a href="tel:+912462298101" className="fab-btn fab-call" aria-label="Call Us">
        <i className="fa-solid fa-phone"></i>
      </a>

      {/* Scroll to Top Button */}
      <button
        className="fab-btn fab-scroll-top"
        aria-label="Scroll to Top"
        onClick={scrollToTop}
        style={{ display: scrollTopVisible ? 'flex' : 'none' }}
      >
        <i className="fa-solid fa-chevron-up"></i>
      </button>
    </div>
  );
}
