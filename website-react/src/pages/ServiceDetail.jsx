import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';

export default function ServiceDetail({
  title,
  subtitle,
  bgText,
  accentColor = 'rgba(200,96,42,0.18)',
  breadcrumbs = [],
  heading,
  paragraphs = [],
  deliverablesTitle = 'What We Deliver',
  deliverables = [],
  processTitle = 'Our Process',
  processSteps = [],
  benefitsTitle = 'Why Choose Us',
  benefits = [],
  faqTitle = 'Frequently Asked Questions',
  faqs = [],
  advisor = {},
  relatedServices = [],
  keyResources = [],
  ctaText = 'File your returns the right way — let our experts handle it.'
}) {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <>
      <PageHero
        title={title}
        subtitle={subtitle}
        bgText={bgText}
        breadcrumbs={breadcrumbs}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="service-detail-layout">
            <div className="service-detail-main">
              <h2>{heading}</h2>
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {deliverables.length > 0 && (
                <div className="service-deliverables">
                  <h3>{deliverablesTitle}</h3>
                  <ul className="deliverable-list">
                    {deliverables.map((item, idx) => (
                      <li key={idx}>
                        <i className="fa-solid fa-circle-check"></i> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {processSteps.length > 0 && (
                <>
                  <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>{processTitle}</h3>
                  <div className="service-process-steps">
                    {processSteps.map((step, idx) => (
                      <div key={idx} className="svc-step-card">
                        <span className="svc-step-num">Step 0{idx + 1}</span>
                        <h4>{step.title}</h4>
                        <p>{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {benefits.length > 0 && (
                <>
                  <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>{benefitsTitle}</h3>
                  <div className="benefits-grid">
                    {benefits.map((benefit, idx) => (
                      <div key={idx} className="benefit-item">
                        <i className={`fa-solid ${benefit.icon} benefit-icon`}></i>
                        <div>
                          <h4>{benefit.title}</h4>
                          <p>{benefit.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {faqs.length > 0 && (
                <div className="service-faq">
                  <h3>{faqTitle}</h3>
                  <div className="faq-accordion-minimal">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className={`faq-item-minimal ${activeFaq === idx ? 'open' : ''}`}>
                        <button
                          className="faq-btn-minimal"
                          aria-expanded={activeFaq === idx}
                          onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                        >
                          <span>{faq.question}</span>
                          <i className="fa-solid fa-arrow-right faq-arrow-icon"></i>
                        </button>
                        <div className="faq-answer-minimal">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="service-sidebar">
              {/* Lead Advisor Card */}
              {advisor.name && (
                <div style={{
                  background: 'var(--color-card)',
                  border: '1px solid var(--color-border-light)',
                  borderRadius: '24px',
                  padding: '28px',
                  marginBottom: '24px',
                  textAlign: 'center',
                  boxShadow: 'var(--shadow-subtle)'
                }}>
                  <div style={{
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 16px auto',
                    border: '3px solid var(--color-white)',
                    boxShadow: 'var(--shadow-subtle)'
                  }}>
                    <img src={advisor.image} alt={advisor.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                  </div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', color: 'var(--color-dark)', marginBottom: '4px', fontWeight: 700 }}>
                    {advisor.name}
                  </h4>
                  <p style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '1px', color: 'var(--color-muted)', fontWeight: 700, marginBottom: '12px', fontFamily: 'var(--font-body)' }}>
                    {advisor.role}
                  </p>
                  <p style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--color-muted)', marginBottom: '16px' }}>
                    {advisor.bio}
                  </p>
                  <Link to="/contact" className="btn btn-navy-small" style={{ display: 'inline-block', borderRadius: '999px', fontSize: '11px', padding: '8px 20px' }}>
                    Connect with Advisor
                  </Link>
                </div>
              )}

              {/* Consultation Card */}
              <div className="sidebar-cta-card">
                <h3>Get Professional Assistance</h3>
                <p>Speak with our expert advisors and ensure compliant execution.</p>
                <Link to="/contact" className="btn btn-white-pill btn-block" style={{ marginBottom: '12px' }}>
                  Book Consultation
                </Link>
                <a href="tel:+912049113400" className="btn btn-white-outline btn-block">
                  <i className="fa-solid fa-phone"></i> +91 20 4911 3400
                </a>
              </div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <div className="sidebar-related-card">
                  <h4>Related Services</h4>
                  <ul className="related-links-list">
                    {relatedServices.map((link, idx) => (
                      <li key={idx}>
                        <Link to={link.path}>
                          <i className="fa-solid fa-arrow-right"></i> {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Resources */}
              {keyResources.length > 0 && (
                <div className="sidebar-related-card">
                  <h4>Key Resources</h4>
                  <ul className="related-links-list">
                    {keyResources.map((link, idx) => (
                      <li key={idx}>
                        <Link to={link.path}>
                          <i className="fa-solid fa-arrow-right"></i> {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          {ctaText} <Link to="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Let's connect.</Link>
        </h2>
      </section>
    </>
  );
}
