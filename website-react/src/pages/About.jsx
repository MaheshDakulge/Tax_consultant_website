import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';

export default function About() {
  return (
    <>
      <PageHero
        title="We are your trusted partners in financial clarity."
        subtitle="A team of certified chartered accountants delivering precision-driven tax and financial solutions since 2020."
        bgText="About"
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* Our Story */}
      <section className="reveal">
        <div className="section-container">
          <div className="about-story-grid">
            <div className="about-story-img" style={{ display: 'flex', flexDirection: 'column', height: 'auto' }}>
              <img
                src="/images/sofa_office.jpg"
                alt="Jinke & Associates office reception"
                style={{ width: '100%', height: '360px', borderRadius: '16px', objectFit: 'cover' }}
                loading="lazy"
              />
              <p className="about-description" style={{ fontSize: '12.5px', lineHeight: 1.4, color: 'var(--color-muted)', marginTop: '12px', textAlign: 'center', fontStyle: 'italic' }}>
                Our main office reception and seating lounge in Nanded, designed to provide a comfortable and welcoming environment for our clients during consultations.
              </p>
            </div>
            <div className="about-story-text">
              <span className="section-tag">
                <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> Our Story
              </span>
              <h2 className="section-title">Built on trust, driven by expertise.</h2>
              <p>Jinke & Associates was founded with a clear purpose — to make professional chartered accountancy services accessible, transparent, and impactful for every client. What began as a small advisory practice has grown into a full-service CA firm trusted by hundreds of businesses and individuals across Maharashtra and beyond.</p>
              <p>We believe that great financial advice shouldn't be reserved for large corporations. Every entrepreneur, freelancer, and salaried individual deserves the same level of expert guidance that helps them stay compliant, optimize their tax position, and grow with confidence.</p>
              <p>Our approach is always client-first — we take the time to understand your unique situation before crafting solutions that are practical, legally sound, and genuinely value-adding.</p>
              <div style={{ display: 'flex', gap: '32px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--color-border-light)' }}>
                <div>
                  <span style={{ fontSize: '40px', fontWeight: 800, color: 'var(--color-dark)', fontFamily: 'var(--font-body)' }}>250+</span>
                  <br />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-muted)' }}>Clients Served</span>
                </div>
                <div>
                  <span style={{ fontSize: '40px', fontWeight: 800, color: 'var(--color-dark)', fontFamily: 'var(--font-body)' }}>98%</span>
                  <br />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-muted)' }}>Retention Rate</span>
                </div>
                <div>
                  <span style={{ fontSize: '40px', fontWeight: 800, color: 'var(--color-dark)', fontFamily: 'var(--font-body)' }}>&lt;24H</span>
                  <br />
                  <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--color-muted)' }}>Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="reveal" style={{ background: 'var(--color-white)' }}>
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">
              <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> Our Values
            </span>
            <h2 className="section-title title-center">The principles that guide everything we do.</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-icon"><i className="fa-solid fa-shield-halved"></i></div>
              <h3>Integrity First</h3>
              <p>We uphold the highest ethical standards in every engagement, ensuring our advice is always in your best interest.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><i className="fa-solid fa-bullseye"></i></div>
              <h3>Precision & Accuracy</h3>
              <p>Tax and financial work demands exactness. We maintain meticulous attention to detail in every filing, audit, and report.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><i className="fa-solid fa-handshake"></i></div>
              <h3>Client Partnership</h3>
              <p>We don't just complete tasks — we build lasting relationships and grow alongside our clients as their trusted advisors.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><i className="fa-solid fa-lightbulb"></i></div>
              <h3>Continuous Learning</h3>
              <p>Tax laws evolve constantly. Our team stays ahead through regular training, certifications, and regulatory updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">
              <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> Our Team
            </span>
            <h2 className="section-title title-center">The experts behind your financial success.</h2>
          </div>

          {/* Principal Partners & Leaders */}
          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '840px', margin: '48px auto 0 auto' }}>
            <div className="team-card">
              <img src="/images/service_1.jpg" alt="J. R. Jinke" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div className="team-card-body">
                <p className="team-card-name">J. R. Jinke</p>
                <p className="team-card-role">Founder & Principal Tax Consultant</p>
                <p className="team-card-bio">Experienced tax consultant specializing in personal and corporate tax planning, GST representations, and local business advisory with 12+ years of service in Nanded and Pune.</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/testimonial_avatar.jpg" alt="CA Pravin Chavan" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div className="team-card-body">
                <p className="team-card-name">CA Pravin Chavan</p>
                <p className="team-card-role">Chartered Accountant (CA India)</p>
                <p className="team-card-bio">Fellow Chartered Accountant (FCA) with 15+ years of experience. Founder of Pravin Chavan & Associates, specializing in statutory audits, corporate law, and bank auditing.</p>
              </div>
            </div>
          </div>

          {/* Associate Advisors & Specialists */}
          <div style={{ textAlign: 'center', marginTop: '56px', borderTop: '1px solid var(--color-border-light)', paddingTop: '40px' }}>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-dark)', marginBottom: '24px' }}>
              Associate Specialists
            </h3>
          </div>
          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', maxWidth: '840px', margin: '0 auto' }}>
            <div className="team-card">
              <img src="/images/service_3.jpg" alt="N. M. Rao" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div className="team-card-body">
                <p className="team-card-name">N. M. Rao</p>
                <p className="team-card-role">Project Finance Head</p>
                <p className="team-card-bio">Specialist in project financing, working capital setup, CMA data preparation, and corporate banking liaison for SME expansion projects.</p>
              </div>
            </div>
            <div className="team-card">
              <img src="/images/service_4.jpg" alt="S. K. Joshi" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              <div className="team-card-body">
                <p className="team-card-name">S. K. Joshi</p>
                <p className="team-card-role">Corporate Law Expert</p>
                <p className="team-card-bio">Handles private limited/LLP setups, ROC filings, secretarial compliance, MCA representations, and financial due diligence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="reveal" style={{ background: 'var(--color-white)' }}>
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">
              <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> Our Journey
            </span>
            <h2 className="section-title title-center">Key milestones that shaped us.</h2>
          </div>
          <div className="journey-timeline">
            <div className="journey-item">
              <div className="journey-dot"></div>
              <div className="journey-card">
                <span className="journey-year">2020 — Foundation</span>
                <h4>Jinke & Associates Established</h4>
                <p>Founded in Pune with a core team of 3 CAs focused on SME tax advisory and compliance services.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-dot"></div>
              <div className="journey-card">
                <span className="journey-year">2021 — Growth</span>
                <h4>50 Clients Milestone</h4>
                <p>Expanded our practice to include GST advisory and business registration services, crossing 50 active clients.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-dot"></div>
              <div className="journey-card">
                <span className="journey-year">2022 — Expansion</span>
                <h4>NRI Taxation & FEMA Practice</h4>
                <p>Launched specialized NRI taxation services and added FEMA compliance capabilities to our portfolio.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-dot"></div>
              <div className="journey-card">
                <span className="journey-year">2023 — Recognition</span>
                <h4>100+ Corporate Clients</h4>
                <p>Crossed 100 corporate clients, expanding into project finance, investment advisory, and MCA representations.</p>
              </div>
            </div>
            <div className="journey-item">
              <div className="journey-dot"></div>
              <div className="journey-card">
                <span className="journey-year">2024 — Scale</span>
                <h4>250+ Clients, Nanded Branch</h4>
                <p>Opened our Nanded regional office and grew to 250+ clients across individuals, SMEs, and corporates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Ready to work with India's most trusted tax advisors? <Link to="/contact">Let's connect.</Link>
        </h2>
      </section>
    </>
  );
}
