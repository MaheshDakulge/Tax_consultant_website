import React, { useState, useEffect, useRef } from 'react';

export default function Counter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          animate();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [target]);

  const animate = () => {
    if (!target || target === 0) {
      setCount(0);
      return;
    }
    const duration = 1600;
    const stepTime = Math.max(Math.floor(duration / target), 15);
    let start = 0;
    const steps = duration / stepTime;
    const increment = Math.ceil(target / steps);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, stepTime);
  };

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}
