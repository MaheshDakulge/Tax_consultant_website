import React from 'react';
import PageHero from '../components/ui/PageHero';

export default function Testimonials() {
  return (
    <>
      <PageHero
        title="What our clients say about working with us."
        subtitle="Real feedback from real clients — businesses, professionals, and NRIs we have had the privilege of serving."
        bgText="Trust"
        breadcrumbs={[{ label: 'Testimonials' }]}
      />

      {/* Rating Summary */}
      <section className="reveal" style={{ background: 'var(--color-white)' }}>
        <div className="section-container">
          <div className="rating-summary-bar">
            <div className="rating-big">
              <span className="rating-number">4.9</span>
              <div className="rating-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <span className="rating-label">Average rating from 250+ reviews</span>
            </div>
            <div className="rating-bars">
              <div className="rating-bar-item">
                <span>5 ⭐</span>
                <div className="rating-bar-bg">
                  <div className="rating-bar-fill" style={{ width: '88%' }}></div>
                </div>
                <span>88%</span>
              </div>
              <div className="rating-bar-item">
                <span>4 ⭐</span>
                <div className="rating-bar-bg">
                  <div className="rating-bar-fill" style={{ width: '9%' }}></div>
                </div>
                <span>9%</span>
              </div>
              <div className="rating-bar-item">
                <span>3 ⭐</span>
                <div className="rating-bar-bg">
                  <div className="rating-bar-fill" style={{ width: '2%' }}></div>
                </div>
                <span>2%</span>
              </div>
              <div className="rating-bar-item">
                <span>2 ⭐</span>
                <div className="rating-bar-bg">
                  <div className="rating-bar-fill" style={{ width: '1%' }}></div>
                </div>
                <span>1%</span>
              </div>
              <div className="rating-bar-item">
                <span>1 ⭐</span>
                <div className="rating-bar-bg">
                  <div className="rating-bar-fill" style={{ width: '0%' }}></div>
                </div>
                <span>0%</span>
              </div>
            </div>
            <div className="rating-cta-block">
              <h4>Join 250+ satisfied clients</h4>
              <p>Experience expert tax advisory that makes a real difference to your financial outcome.</p>
              <a href="/contact" className="btn btn-navy" style={{ borderRadius: '999px', display: 'inline-block' }}>
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Client Stories</span>
            <h2 className="section-title title-center">Trusted by hundreds across India.</h2>
          </div>
          <div className="testimonials-full-grid">
            <div className="testimonial-card-full featured-testimonial">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text-full">
                "Jinke & Associates transformed how we manage our company's finances. Before them, we were spending hours every quarter chasing compliance deadlines. Now, everything is handled — GST returns, payroll TDS, advance tax, ROC filings — all without us having to worry. Their team is genuinely proactive, calling us before due dates rather than after problems arise."
              </p>
              <div className="testimonial-author-row">
                <div className="testimonial-author-info">
                  <span className="t-name">Rajesh M.</span>
                  <span className="t-role">CEO, Techspark Solutions Pvt. Ltd.</span>
                </div>
                <span className="t-service-badge">GST + Payroll</span>
              </div>
            </div>

            <div className="testimonial-card-full">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text-full">
                "As an NRI in the UAE, managing my India-based rental income and property investments was a nightmare. I was losing money on TDS without knowing I could get a lower TDS certificate. Jinke & Associates not only recovered past excess TDS but put a plan in place that saves me significant tax every year."
              </p>
              <div className="testimonial-author-row">
                <div className="testimonial-author-info">
                  <span className="t-name">Priya S.</span>
                  <span className="t-role">NRI Investor, Dubai, UAE</span>
                </div>
                <span className="t-service-badge">NRI Taxation</span>
              </div>
            </div>

            <div className="testimonial-card-full">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text-full">
                "I was so confused between the old and new tax regime. One consultation with their team gave me complete clarity. They ran the numbers for my specific income profile, factored in my home loan and 80C investments, and clearly showed me that the old regime saved me ₹45,000 more. That single conversation paid for years of advisory fees."
              </p>
              <div className="testimonial-author-row">
                <div className="testimonial-author-info">
                  <span className="t-name">Amit K.</span>
                  <span className="t-role">Senior Software Engineer, Pune</span>
                </div>
                <span className="t-service-badge">Tax Planning</span>
              </div>
            </div>

            <div className="testimonial-card-full">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text-full">
                "They registered my company in 8 working days — Private Limited company with GST, PAN, TAN, and professional drafting of MOA and AOA. Every step was communicated clearly. No hidden charges, no delays. After registration, they continue to handle all my compliance. I refer every startup founder I know to Jinke."
              </p>
              <div className="testimonial-author-row">
                <div className="testimonial-author-info">
                  <span className="t-name">Neha D.</span>
                  <span className="t-role">Founder, Bloom Wellness LLP</span>
                </div>
                <span className="t-service-badge">Business Registration</span>
              </div>
            </div>

            <div className="testimonial-card-full">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text-full">
                "Our bakery business had accumulated GST liabilities and ITC mismatches due to our previous accountant's errors. Jinke & Associates conducted a complete GST health check, reconciled two years of mismatches, and guided us through the GST amnesty scheme. Their expertise saved us from a demand notice that could have shut us down."
              </p>
              <div className="testimonial-author-row">
                <div className="testimonial-author-info">
                  <span className="t-name">Suresh & Kavita P.</span>
                  <span className="t-role">Proprietors, Golden Crumb Bakery</span>
                </div>
                <span className="t-service-badge">GST Advisory</span>
              </div>
            </div>

            <div className="testimonial-card-full">
              <div className="testimonial-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <p className="testimonial-text-full">
                "I've been filing my own ITR for 10 years and thought I had it figured out. When I consulted Jinke, they found three deductions I'd been consistently missing — home loan principal, my mother's medical insurance, and an NPS contribution my employer makes. Their review saved me ₹28,000 in tax and filing an amended return was seamless."
              </p>
              <div className="testimonial-author-row">
                <div className="testimonial-author-info">
                  <span className="t-name">Dr. Vikram R.</span>
                  <span className="t-role">Medical Professional, Mumbai</span>
                </div>
                <span className="t-service-badge">ITR Filing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Ready to become our next success story? <a href="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Schedule your free consultation.</a>
        </h2>
      </section>
    </>
  );
}
