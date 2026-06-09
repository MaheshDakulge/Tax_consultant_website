import React from 'react';
import PageHero from '../components/ui/PageHero';

export default function Careers() {
  return (
    <>
      <PageHero
        title="Build your CA career with a firm that truly invests in you."
        subtitle="We're growing. Join a team of expert chartered accountants and tax professionals making a genuine impact for 250+ clients."
        bgText="Join Us"
        breadcrumbs={[{ label: 'Careers' }]}
      />

      {/* Why Work With Us */}
      <section className="reveal" style={{ background: 'var(--color-white)' }}>
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Why Join Us</span>
            <h2 className="section-title title-center">A culture built on growth, mentorship & impact.</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-icon"><i className="fa-solid fa-graduation-cap"></i></div>
              <h3>Accelerated Learning</h3>
              <p>Work across income tax, GST, corporate law, NRI taxation, and audit — gaining diverse expertise in a single firm.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><i className="fa-solid fa-person-chalkboard"></i></div>
              <h3>Senior Mentorship</h3>
              <p>Regular knowledge-sharing sessions with senior CAs and direct access to experienced advisors for guidance.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><i className="fa-solid fa-chart-line"></i></div>
              <h3>Clear Career Paths</h3>
              <p>Transparent progression from Article Assistant → Associate → Senior CA → Partner track for exceptional performers.</p>
            </div>
            <div className="value-card">
              <div className="value-card-icon"><i className="fa-solid fa-laptop-house"></i></div>
              <h3>Flexible Work Options</h3>
              <p>Hybrid work arrangements for senior positions, with modern tools and cloud-based systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Open Positions</span>
            <h2 className="section-title title-center">Current opportunities.</h2>
          </div>
          <div className="jobs-grid">
            <div className="job-card">
              <div className="job-header">
                <div>
                  <h3>Senior CA — Tax Advisory</h3>
                  <div className="job-meta-row">
                    <span className="job-tag fulltime">Full-time</span>
                    <span className="job-location"><i className="fa-solid fa-location-dot"></i> Pune</span>
                    <span className="job-exp">3–6 years exp.</span>
                  </div>
                </div>
                <div className="job-cta">
                  <a href="mailto:careers@jinkeassociates.com?subject=Application for Senior CA — Tax Advisory" className="btn btn-navy" style={{ padding: '10px 20px', fontSize: '13px', borderRadius: '999px' }}>
                    Apply Now
                  </a>
                </div>
              </div>
              <p>Lead income tax planning, complex ITR filings, and represent clients before income tax authorities. Strong knowledge of capital gains, NRI taxation, and tax litigation.</p>
              <div className="job-requirements">
                <span>FCA / ACA preferred</span>
                <span>Tally / Taxmann</span>
                <span>Income Tax Act expertise</span>
              </div>
            </div>

            <div className="job-card">
              <div className="job-header">
                <div>
                  <h3>GST Specialist</h3>
                  <div className="job-meta-row">
                    <span className="job-tag fulltime">Full-time</span>
                    <span className="job-location"><i className="fa-solid fa-location-dot"></i> Pune / Nanded</span>
                    <span className="job-exp">2–4 years exp.</span>
                  </div>
                </div>
                <div className="job-cta">
                  <a href="mailto:careers@jinkeassociates.com?subject=Application for GST Specialist" className="btn btn-navy" style={{ padding: '10px 20px', fontSize: '13px', borderRadius: '999px' }}>
                    Apply Now
                  </a>
                </div>
              </div>
              <p>Handle GST registrations, GSTR-1/3B/9 filings, ITC reconciliation, and GST audit support for 50+ clients across manufacturing, services, and e-commerce.</p>
              <div className="job-requirements">
                <span>GST portal proficiency</span>
                <span>GSTN / TallyPrime</span>
                <span>ITC reconciliation experience</span>
              </div>
            </div>

            <div className="job-card">
              <div className="job-header">
                <div>
                  <h3>Article Assistant (ICAI)</h3>
                  <div className="job-meta-row">
                    <span className="job-tag internship">Articleship</span>
                    <span className="job-location"><i className="fa-solid fa-location-dot"></i> Pune</span>
                    <span className="job-exp">CA Inter cleared</span>
                  </div>
                </div>
                <div className="job-cta">
                  <a href="mailto:careers@jinkeassociates.com?subject=Application for Article Assistant (ICAI)" className="btn btn-navy" style={{ padding: '10px 20px', fontSize: '13px', borderRadius: '999px' }}>
                    Apply Now
                  </a>
                </div>
              </div>
              <p>3-year ICAI articleship with exposure to income tax, GST, company law, audit, and accounting. Mentored by senior CAs with structured learning across all practice areas.</p>
              <div className="job-requirements">
                <span>CA Inter cleared</span>
                <span>Registered with ICAI</span>
                <span>Eager to learn</span>
              </div>
            </div>

            <div className="job-card">
              <div className="job-header">
                <div>
                  <h3>Accounting Executive</h3>
                  <div className="job-meta-row">
                    <span className="job-tag fulltime">Full-time</span>
                    <span className="job-location"><i className="fa-solid fa-location-dot"></i> Pune</span>
                    <span className="job-exp">1–3 years exp.</span>
                  </div>
                </div>
                <div className="job-cta">
                  <a href="mailto:careers@jinkeassociates.com?subject=Application for Accounting Executive" className="btn btn-navy" style={{ padding: '10px 20px', fontSize: '13px', borderRadius: '999px' }}>
                    Apply Now
                  </a>
                </div>
              </div>
              <p>Bookkeeping, bank reconciliation, payroll processing, and monthly financial reports for client accounts using Tally Prime and Zoho Books.</p>
              <div className="job-requirements">
                <span>B.Com / M.Com</span>
                <span>TallyPrime expert</span>
                <span>TDS & GST basics</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="reveal" style={{ background: 'var(--color-white)' }}>
        <div className="section-container">
          <div className="careers-apply-block">
            <h3>Don't see the right role? Send us your CV anyway.</h3>
            <p>We're always on the lookout for exceptional talent. Send your resume and a brief note about what you're looking for to <a href="mailto:careers@jinkeassociates.com">careers@jinkeassociates.com</a>.</p>
            <a href="mailto:careers@jinkeassociates.com" className="btn btn-navy" style={{ marginTop: '20px', display: 'inline-block', borderRadius: '999px' }}>
              Send Your Resume <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
