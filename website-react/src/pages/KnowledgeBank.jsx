import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';

export default function KnowledgeBank() {
  return (
    <>
      <PageHero
        title="Your complete tax & compliance resource hub."
        subtitle="Calculators, regulatory bulletins, reference tables, key Acts, and official forms — all in one place."
        bgText="Know"
        breadcrumbs={[{ label: 'Knowledge Bank' }]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Resources</span>
            <h2 className="section-title title-center">Explore by category.</h2>
            <p style={{ maxWidth: '560px', margin: '0 auto', fontSize: '15px', lineHeight: '1.7' }}>
              Our knowledge bank provides free access to practical tools, regulatory updates, and reference materials curated by our CA team.
            </p>
          </div>
          <div className="kb-categories-grid">
            <Link to="/knowledge-bank/calculators" className="kb-cat-card">
              <div class="kb-cat-icon"><i className="fa-solid fa-calculator"></i></div>
              <h3>Calculators</h3>
              <p>GST, Income Tax, TDS, and HRA calculators for instant estimates.</p>
              <span className="kb-cat-count">4 Tools</span>
            </Link>
            <Link to="/knowledge-bank/bulletins" className="kb-cat-card">
              <div class="kb-cat-icon"><i className="fa-solid fa-newspaper"></i></div>
              <h3>Bulletins</h3>
              <p>Latest regulatory circulars, notifications, and important tax updates.</p>
              <span className="kb-cat-count">18 Bulletins</span>
            </Link>
            <Link to="/knowledge-bank/utilities" className="kb-cat-card">
              <div class="kb-cat-icon"><i className="fa-solid fa-table"></i></div>
              <h3>Utilities</h3>
              <p>TDS rates, IT slab rates, depreciation schedules and reference tables.</p>
              <span className="kb-cat-count">8 Tables</span>
            </Link>
            <Link to="/knowledge-bank/acts" className="kb-cat-card">
              <div class="kb-cat-icon"><i className="fa-solid fa-scale-balanced"></i></div>
              <h3>Key Acts</h3>
              <p>Important sections of the Income Tax Act, Companies Act, GST legislation.</p>
              <span className="kb-cat-count">6 Acts</span>
            </Link>
            <Link to="/knowledge-bank/forms" className="kb-cat-card">
              <div class="kb-cat-icon"><i className="fa-solid fa-file-lines"></i></div>
              <h3>Official Forms</h3>
              <p>Download official Income Tax, ROC, GST, and EPF forms.</p>
              <span className="kb-cat-count">24 Forms</span>
            </Link>
          </div>

          {/* Featured Resource Banner */}
          <div className="kb-featured-banner">
            <div>
              <h3>FY 2025-26 Tax Planning Guide</h3>
              <p>Our comprehensive guide covers the new tax regime slabs, old regime deductions, and step-by-step planning strategies for the current financial year. Updated for Union Budget 2025.</p>
              <Link to="/knowledge-bank/bulletins" className="btn btn-white-pill" style={{ marginTop: '20px', display: 'inline-block' }}>
                Read the Guide
              </Link>
            </div>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <div style={{ width: '120px', height: '120px', background: 'rgba(255,255,255,0.08)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifycontent: 'center', margin: '0 auto', contentVisibility: 'auto' }}>
                <i className="fa-solid fa-book-open" style={{ fontSize: '48px', color: 'rgba(255,255,255,0.7)', alignSelf: 'center' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Section */}
      <section className="reveal" style={{ background: 'var(--color-white)' }}>
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Key Deadlines</span>
            <h2 className="section-title title-center">Important tax calendar dates for FY 2025-26.</h2>
          </div>
          <div style={{ marginTop: '40px' }} className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Due Date</th>
                  <th>Compliance</th>
                  <th>Applicable To</th>
                  <th>Form / Return</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>15 June 2025</td>
                  <td>Advance Tax – 1st Instalment (15%)</td>
                  <td>All Assessees</td>
                  <td>Challan 280</td>
                </tr>
                <tr>
                  <td>31 July 2025</td>
                  <td>Income Tax Return – Non-Audit Cases</td>
                  <td>Individuals, HUF</td>
                  <td>ITR-1 to ITR-4</td>
                </tr>
                <tr>
                  <td>15 September 2025</td>
                  <td>Advance Tax – 2nd Instalment (45%)</td>
                  <td>All Assessees</td>
                  <td>Challan 280</td>
                </tr>
                <tr>
                  <td>30 September 2025</td>
                  <td>Tax Audit Report</td>
                  <td>Businesses / Professionals</td>
                  <td>Form 3CA/3CB</td>
                </tr>
                <tr>
                  <td>31 October 2025</td>
                  <td>Income Tax Return – Audit Cases</td>
                  <td>Companies, Partnerships</td>
                  <td>ITR-5, ITR-6</td>
                </tr>
                <tr className="highlight-row">
                  <td>15 December 2025</td>
                  <td>Advance Tax – 3rd Instalment (75%)</td>
                  <td>All Assessees</td>
                  <td>Challan 280</td>
                </tr>
                <tr>
                  <td>31 December 2025</td>
                  <td>Belated / Revised ITR Filing</td>
                  <td>All Assessees</td>
                  <td>All ITR Forms</td>
                </tr>
                <tr>
                  <td>15 March 2026</td>
                  <td>Advance Tax – 4th Instalment (100%)</td>
                  <td>All Assessees</td>
                  <td>Challan 280</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Have a tax question? Our experts answer within 24 hours — <Link to="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>ask us.</Link>
        </h2>
      </section>
    </>
  );
}
