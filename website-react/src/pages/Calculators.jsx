import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import GstCalculator from '../components/calculators/GstCalculator';
import IncomeTaxCalculator from '../components/calculators/IncomeTaxCalculator';
import TdsCalculator from '../components/calculators/TdsCalculator';

export default function Calculators() {
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
        title="Free Tax & GST Calculators"
        subtitle="Instant estimates for GST, Income Tax, and TDS — updated for the latest rates and slabs. Always free to use."
        bgText="Calc"
        breadcrumbs={[
          { label: 'Knowledge Bank', path: '/knowledge-bank' },
          { label: 'Calculators' }
        ]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Tools</span>
            <h2 className="section-title title-center">Calculate instantly. Consult for precision.</h2>
            <p style={{ maxWidth: '540px', margin: '0 auto', fontSize: '14.5px', color: 'var(--color-muted)', lineHeight: '1.6' }}>
              These calculators provide indicative estimates for planning purposes. For accurate tax computation, consult our CA team.
            </p>
          </div>

          <div className="calculators-grid">
            <GstCalculator />
            <IncomeTaxCalculator />
            <TdsCalculator />
          </div>

          {/* Disclaimer note */}
          <div style={{ textAlign: 'center', marginTop: '40px', padding: '20px', background: '#FAF9F6', borderRadius: '12px', border: '1px solid var(--color-border-light)' }}>
            <p style={{ fontSize: '13px', color: 'var(--color-muted)', maxWidth: '700px', margin: '0 auto' }}>
              <strong style={{ color: 'var(--color-dark)' }}>Disclaimer:</strong> The calculators above are for indicative estimation purposes only. Actual tax liability may vary based on surcharge, rebates, applicable deductions, and other factors. Always consult our CA for accurate computation before making financial decisions.
            </p>
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Need more than estimates? Our CAs provide precise tax computation — <a href="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>get in touch.</a>
        </h2>
      </section>
    </>
  );
}
