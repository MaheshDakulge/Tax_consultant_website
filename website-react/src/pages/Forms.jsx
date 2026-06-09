import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { formsData } from '../data/formsData';

export default function Forms() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <PageHero
        title="Official Tax & Compliance Forms"
        subtitle="Commonly used Income Tax, GST, ROC, PF, and other compliance forms — all sourced from official government portals."
        bgText="Forms"
        breadcrumbs={[
          { label: 'Knowledge Bank', path: '/knowledge-bank' },
          { label: 'Forms' }
        ]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Quick Access</span>
            <h2 className="section-title title-center">Find the right form, fast.</h2>
            <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', maxWidth: '560px', margin: '0 auto' }}>
              All links below redirect to the respective official government portals for download. These are not hosted by Jinke & Associates.
            </p>
          </div>

          <div className="forms-grid" style={{ marginTop: '40px' }}>
            {formsData.map((cat) => (
              <div key={cat.id} className="form-category-card" id={cat.id}>
                <h3>
                  <i className={`fa-solid ${cat.icon}`}></i> {cat.title}
                </h3>
                <ul className="forms-list">
                  {cat.items.map((item, idx) => (
                    <li key={idx}>
                      <a href={item.url} target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-arrow-up-right-from-square"></i> {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', background: '#FAF9F6', borderRadius: '12px', border: '1px solid var(--color-border-light)' }}>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', maxWidth: '700px', margin: '0 auto' }}>
              <strong style={{ color: 'var(--color-dark)' }}>Note:</strong> All form links direct to official government portals. Jinke & Associates does not host any government forms. Please ensure you download forms directly from official sources for the latest version.
            </p>
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Need help filling these forms correctly? <a href="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Our CAs handle it for you.</a>
        </h2>
      </section>
    </>
  );
}
