import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import { bulletinsData } from '../data/bulletinsData';

export default function Bulletins() {
  const [activeFilter, setActiveFilter] = useState('all');
  const location = useLocation();

  useEffect(() => {
    // Sync filter state if there is a hash like #income-tax or #gst
    if (location.hash) {
      const hashVal = location.hash.substring(1);
      const validCategories = ['income-tax', 'gst', 'company-law', 'fema'];
      if (validCategories.includes(hashVal)) {
        setActiveFilter(hashVal);
      }
    }
  }, [location]);

  const filteredBulletins = activeFilter === 'all'
    ? bulletinsData
    : bulletinsData.filter(item => item.category === activeFilter);

  return (
    <>
      <PageHero
        title="Regulatory Bulletins & Updates"
        subtitle="Stay current with the latest Income Tax, GST, Company Law, and FEMA circulars curated by our CA team."
        bgText="News"
        breadcrumbs={[
          { label: 'Knowledge Bank', path: '/knowledge-bank' },
          { label: 'Bulletins' }
        ]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="bulletin-filter-tabs">
            <button
              className={`filter-tab ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              All Updates
            </button>
            <button
              className={`filter-tab ${activeFilter === 'income-tax' ? 'active' : ''}`}
              onClick={() => setActiveFilter('income-tax')}
            >
              Income Tax
            </button>
            <button
              className={`filter-tab ${activeFilter === 'gst' ? 'active' : ''}`}
              onClick={() => setActiveFilter('gst')}
            >
              GST
            </button>
            <button
              className={`filter-tab ${activeFilter === 'company-law' ? 'active' : ''}`}
              onClick={() => setActiveFilter('company-law')}
            >
              Company Law
            </button>
            <button
              className={`filter-tab ${activeFilter === 'fema' ? 'active' : ''}`}
              onClick={() => setActiveFilter('fema')}
            >
              FEMA / RBI
            </button>
          </div>

          <div className="bulletin-grid">
            {filteredBulletins.map((bulletin) => (
              <div
                key={bulletin.id}
                className="bulletin-card"
                data-category={bulletin.category}
              >
                <div className="bulletin-meta">
                  <span className="bulletin-tag">{bulletin.categoryLabel}</span>
                  <span className="bulletin-date">{bulletin.date}</span>
                </div>
                <h3>{bulletin.title}</h3>
                <p>{bulletin.desc}</p>
                <a href="#/" onClick={(e) => e.preventDefault()}>
                  Read Full Update <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
            ))}
            {filteredBulletins.length === 0 && (
              <div style={{ textAlign: 'center', gridColumn: '1 / -1', padding: '40px 0' }}>
                <p style={{ color: 'var(--color-muted)' }}>No bulletins found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Want personalized updates for your business? <a href="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Subscribe to our advisory newsletter.</a>
        </h2>
      </section>
    </>
  );
}
