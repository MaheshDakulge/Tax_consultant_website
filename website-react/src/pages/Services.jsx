import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';

export default function Services() {
  return (
    <>
      <PageHero
        title="End-to-end financial & tax services for every need."
        subtitle="From individual income tax filing to complex corporate structuring — we handle it all with precision."
        bgText="Services"
        breadcrumbs={[{ label: 'Services' }]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">
              <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> What We Offer
            </span>
            <h2 className="section-title title-center">Six pillars of expert financial service.</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto 16px', fontSize: '15.5px', lineHeight: '1.7' }}>
              Our comprehensive suite of services is designed to cover every aspect of your tax, compliance, and financial management needs — delivered by certified experts.
            </p>
          </div>
          <div className="services-overview-grid">
            <Link to="/services/income-tax" className="service-overview-card">
              <div className="svc-card-icon"><i className="fa-solid fa-file-invoice-dollar"></i></div>
              <div className="svc-card-num">Service 01</div>
              <h3>Income Tax Filing & Returns</h3>
              <p>Expert filing of ITR for salaried individuals, self-employed professionals, HUFs, and businesses. Maximize deductions, minimize liability.</p>
              <span className="svc-card-link">Explore Service <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
            <Link to="/services/gst" className="service-overview-card">
              <div className="svc-card-icon"><i className="fa-solid fa-receipt"></i></div>
              <div className="svc-card-num">Service 02</div>
              <h3>GST Registration & Advisory</h3>
              <p>Complete GST registration, monthly/quarterly return filing, input tax credit optimization, and GST audit support.</p>
              <span className="svc-card-link">Explore Service <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
            <Link to="/services/tax-planning" className="service-overview-card">
              <div className="svc-card-icon"><i className="fa-solid fa-chart-pie"></i></div>
              <div className="svc-card-num">Service 03</div>
              <h3>Strategic Tax Planning</h3>
              <p>Year-round tax planning strategies that leverage available exemptions, deductions, and legal structures to reduce your tax burden.</p>
              <span className="svc-card-link">Explore Service <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
            <Link to="/services/business-reg" className="service-overview-card">
              <div className="svc-card-icon"><i className="fa-solid fa-building-columns"></i></div>
              <div className="svc-card-num">Service 04</div>
              <h3>Business Registration</h3>
              <p>Seamless company formation for Private Limited, LLP, OPC, Partnership firms — from incorporation to first compliance.</p>
              <span className="svc-card-link">Explore Service <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
            <Link to="/services/accounting" className="service-overview-card">
              <div className="svc-card-icon"><i className="fa-solid fa-book-open"></i></div>
              <div className="svc-card-num">Service 05</div>
              <h3>Accounting & Payroll</h3>
              <p>Systematic bookkeeping, financial statement preparation, payroll processing, and management accounting services.</p>
              <span className="svc-card-link">Explore Service <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
            <Link to="/services/nri-taxation" className="service-overview-card">
              <div className="svc-card-icon"><i className="fa-solid fa-plane-departure"></i></div>
              <div className="svc-card-num">Service 06</div>
              <h3>NRI Taxation & FEMA</h3>
              <p>Specialized advisory for Non-Resident Indians on DTAA benefits, repatriation, FEMA compliance, and India-sourced income.</p>
              <span className="svc-card-link">Explore Service <i className="fa-solid fa-arrow-right"></i></span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-works reveal">
        <div className="section-container">
          <div className="how-works-banner">
            <div className="text-center">
              <span className="section-tag tag-white">
                <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> How It Works
              </span>
              <h2 className="section-title text-white title-center">Simple steps to get started with any service.</h2>
            </div>
            <div className="steps-grid">
              <div className="step-card-new"><div class="step-icon-row-new"><span className="step-card-icon"><i className="fa-regular fa-comments"></i></span><span className="step-card-badge">01</span></div><h3 className="step-card-title">Free Consultation</h3><p className="step-card-desc">Book a free 30-min call to discuss your requirements with our experts.</p></div>
              <div className="step-card-new"><div class="step-icon-row-new"><span className="step-card-icon"><i className="fa-regular fa-folder-open"></i></span><span class="step-card-badge">02</span></div><h3 className="step-card-title">Document Sharing</h3><p className="step-card-desc">Securely share your tax records and business documents for review.</p></div>
              <div className="step-card-new"><div class="step-icon-row-new"><span className="step-card-icon"><i className="fa-solid fa-gears"></i></span><span class="step-card-badge">03</span></div><h3 className="step-card-title">Expert Processing</h3><p className="step-card-desc">We handle filings, audits, registrations, and representations end-to-end.</p></div>
              <div className="step-card-new"><div class="step-icon-row-new"><span className="step-card-icon"><i className="fa-regular fa-circle-check"></i></span><span class="step-card-badge">04</span></div><h3 className="step-card-title">Ongoing Support</h3><p className="step-card-desc">Receive continuous advisory to ensure sustained compliance and growth.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Not sure which service you need? <Link to="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Book a free consultation.</Link>
        </h2>
      </section>
    </>
  );
}
