import { useEffect } from 'react';

export default function useScrollReveal(trigger) {
  useEffect(() => {
    const revealObserverOptions = { root: null, threshold: 0.1, rootMargin: '0px' };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, revealObserverOptions);

    const staggerObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.stagger-item');
          items.forEach((item, i) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, i * 110);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => revealObserver.observe(el));

    const staggers = document.querySelectorAll('.stagger-parent');
    staggers.forEach(el => staggerObserver.observe(el));

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
    };
  }, [trigger]);
}
