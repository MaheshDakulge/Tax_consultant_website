import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Counter from '../components/ui/Counter';
import TabShowcase from '../components/ui/TabShowcase';

const testimonials = [
  {
    quote: '"Their tax planning service gave us complete clarity and saved us significantly. The advice wasn\'t just basic legal compliance — it was strategic, growth-oriented, and highly customized to our SME challenges."',
    name: 'Rajesh Patil',
    role: 'Director, Patil Enterprises, Nanded',
    avatar: '/images/testimonial_avatar.jpg'
  },
  {
    quote: '"Filing ITR for my family business used to be a nightmare every year. Jinke & Associates handled everything end-to-end, got us maximum deductions, and we haven\'t had a single notice since. Truly exceptional service."',
    name: 'Priya Deshmukh',
    role: 'Proprietor, Deshmukh Retail, Nanded',
    avatar: '/images/testimonial_avatar.jpg'
  },
  {
    quote: '"As an NRI returning to India, FEMA compliance and residency taxation seemed daunting. The team explained everything patiently, filed all the paperwork, and gave us a clear compliance roadmap. Highly recommended."',
    name: 'Sunil Mehta',
    role: 'NRI Client, Dubai & Pune',
    avatar: '/images/testimonial_avatar.jpg'
  },
  {
    quote: '"GST filing was causing delays in our invoicing every month. Since we engaged Jinke & Associates, monthly GSTR filings happen on time, ITC is reconciled accurately, and we\'ve seen zero notices from the GST department."',
    name: 'Anita Jadhav',
    role: 'CFO, Jadhav Manufacturing Pvt. Ltd.',
    avatar: '/images/testimonial_avatar.jpg'
  }
];

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);
  const [timelineAnimated, setTimelineAnimated] = useState(false);
  const [activePoints, setActivePoints] = useState({ pt2: false, pt3: false, pt4: false });

  // Testimonials rotation
  useEffect(() => {
    const interval = setInterval(() => {
      handleTestimonialNav(1);
    }, 6000);
    return () => clearInterval(interval);
  }, [currentTestimonial]);

  const handleTestimonialNav = (direction) => {
    setFade(false);
    setTimeout(() => {
      setCurrentTestimonial((prev) => {
        const nextIdx = prev + direction;
        if (nextIdx < 0) return testimonials.length - 1;
        return nextIdx % testimonials.length;
      });
      setFade(true);
    }, 300);
  };

  const setTestimonialIdx = (idx) => {
    if (idx === currentTestimonial) return;
    setFade(false);
    setTimeout(() => {
      setCurrentTestimonial(idx);
      setFade(true);
    }, 300);
  };

  // Timeline process bar animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !timelineAnimated) {
          setTimelineAnimated(true);
          const t2 = setTimeout(() => setActivePoints(prev => ({ ...prev, pt2: true })), 450);
          const t3 = setTimeout(() => setActivePoints(prev => ({ ...prev, pt3: true })), 900);
          const t4 = setTimeout(() => setActivePoints(prev => ({ ...prev, pt4: true })), 1350);
          
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const target = document.getElementById('how-it-works');
    if (target) {
      observer.observe(target);
    }

    return () => observer.disconnect();
  }, [timelineAnimated]);

  return (
    <>
      {/* Hero Wrapper (Inset Rounded Card) */}
      <div className="hero-wrapper" id="hero">
        <section className="hero-inset-card" style={{ backgroundImage: "linear-gradient(rgba(15, 28, 46, 0.45), rgba(15, 28, 46, 0.65)), url('/images/hero_bg.jpg')" }}>
          <div className="hero-bg-shapes">
            <span></span><span></span><span></span><span></span>
            <span></span><span></span><span></span><span></span>
          </div>
          <div className="hero-glass-panel"></div>
          <span className="hero-bg-watermark">CA</span>
          {/* Hero Top Badge Line */}
          <div className="hero-badge-row">
            <span className="hero-badge">Since 2020</span>
            <span className="hero-badge hero-badge-white">Your Partner In Tax Clarity</span>
            <a href="#about" className="hero-badge hero-badge-link">Behind the Expertise <i className="fa-solid fa-arrow-right-long" style={{ marginLeft: '6px' }}></i></a>
          </div>

          {/* Center Headline content */}
          <div className="hero-container hero-reveal">
            <h1 className="hero-title">
              Taxes, Handled with <br />
              <span className="serif-italic">Precision</span> and Peace of Mind.
            </h1>
            <p className="hero-subtext">
              Smart, compliant and stress-free tax and financial solutions for your business or personal needs.
            </p>
            <div className="hero-cta">
              <Link to="/contact" className="btn btn-white-pill">Book Consultation</Link>
            </div>
          </div>

          {/* Hero Footer Line */}
          <div className="hero-footer-row">
            <div className="hero-bottom-badges">
              <span className="hero-badge">Legal</span>
              <span className="hero-badge">Accurate</span>
              <span className="hero-badge">On Time</span>
            </div>
            <a href="#about" className="scroll-indicator-new" aria-label="Scroll down to About Us section">
              Get Started <i className="fa-solid fa-arrow-down-long"></i>
            </a>
          </div>
        </section>
      </div>

      {/* About Us Section */}
      <section id="about" className="about reveal">
        <div className="section-container">
          <div className="about-grid">
            {/* Left Column: Visual & Paragraphs */}
            <div className="about-left">
              <span className="section-tag">
                <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> About Us
              </span>
              <div className="about-img-box" data-delay="0.1s">
                <img src="/images/about_bg.jpg" alt="Chartered Accountants review tax documents and tax ledger" />
              </div>
              <p className="about-description" data-delay="0.15s">
                Jinke & Associates is a team of certified tax consultants dedicated to helping individuals, freelancers, and companies navigate tax complexity with clarity. With a client-first approach, we deliver tailored strategies that go beyond compliance — we help you grow smarter.
              </p>
            </div>

            {/* Right Column: Title & Vertical Stats Stack */}
            <div className="about-right">
              <h2 className="section-title">Trusted tax advisors for modern businesses.</h2>
              <div className="stats-vertical-stack">
                <div className="stat-item-stacked" data-delay="0.1s">
                  <span className="stat-number-large">
                    <Counter target={250} suffix="+" />
                  </span>
                  <span className="stat-label-large">Clients Served</span>
                </div>
                <div className="stat-item-stacked" data-delay="0.2s">
                  <span className="stat-number-large">
                    <Counter target={98} suffix="%" />
                  </span>
                  <span className="stat-label-large">Retention Rate</span>
                </div>
                <div className="stat-item-stacked" data-delay="0.3s">
                  <span className="stat-number-large">&lt;24H</span>
                  <span className="stat-label-large">Response Time</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="why-choose reveal">
        <div className="section-container">
          <div className="why-grid">
            {/* Left Column: Intro + Main Dark Badge Box */}
            <div className="why-left">
              <span className="section-tag">
                <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> Why Choose Us
              </span>
              <h2 className="section-title">The smart choice for stress-free tax solutions.</h2>
              <div className="why-navy-card" data-delay="0.1s">
                <h3><i class="fa-solid fa-shield-halved"></i> Certified Tax Professionals</h3>
                <p>
                  Handled by licensed experts with deep knowledge of local and international tax regulations. Our chartered accountants stay updated with changing tax reforms to keep your enterprise fully protected and highly efficient.
                </p>
                <div className="expert-avatar-row">
                  <div className="avatar-group">
                    <img src="/images/testimonial_avatar.jpg" alt="Advisor profile 1" />
                    <img src="/images/service_1.jpg" alt="Advisor profile 2" />
                    <img src="/images/service_2.jpg" alt="Advisor profile 3" />
                    <span className="avatar-count-badge">20+</span>
                  </div>
                  <Link to="/contact" className="expert-link">Meet Our Experts <i className="fa-solid fa-chevron-right"></i></Link>
                </div>
              </div>
            </div>

            {/* Right Column: Visual and Sub-Grid Stats Cards */}
            <div className="why-right">
              <div className="why-img-box" data-delay="0.15s">
                <img src="/images/team_collaboration.jpg" alt="Jinke & Associates tax advisors collaborating on business audit reviews" />
              </div>
              <div className="why-sub-grid stagger-parent">
                <div className="why-sub-card stagger-item" data-delay="0.2s">
                  <div>
                    <h4><i className="fa-solid fa-circle-check"></i> Proven Track Record</h4>
                    <p>Trusted by hundreds of clients—individuals, SMEs, and corporations—with measurable results.</p>
                  </div>
                  <div className="sub-card-footer">
                    <span className="sub-card-stats-text">Over 500+ served</span>
                    <span className="rating-stars">4.9/5 <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
                  </div>
                </div>
                <div className="why-sub-card stagger-item" data-delay="0.25s">
                  <div>
                    <h4><i className="fa-solid fa-compass-drafting"></i> Tailored Tax Strategies</h4>
                    <p>We customize solutions to fit your personal or business goals—no one-size-fits-all approach.</p>
                  </div>
                  <div className="sub-card-footer">
                    <span className="efficiency-badge"><i className="fa-solid fa-chart-line"></i> Successful +20%</span>
                    <span className="sub-card-stats-text" style={{ fontSize: '10px' }}>95% saw savings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services reveal">
        <div className="section-container">
          <div className="text-center">
            <span class="section-tag">
              <span class="section-tag-cross"><i class="fa-solid fa-xmark"></i></span> Our Services
            </span>
            <h2 className="section-title title-center">End-to-end tax solutions tailored for individuals and businesses.</h2>
          </div>
          <TabShowcase />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-works reveal">
        <div className="section-container">
          <div className="how-works-banner">
            <div className="text-center">
              <span className="section-tag tag-white">
                <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> How It Works
              </span>
              <h2 className="section-title text-white title-center">Simple steps to solve complex financial matters.</h2>
            </div>

            {/* 4 Step Card Grid */}
            <div className="steps-grid stagger-parent">
              <div className="step-card-new stagger-item" data-delay="0.05s">
                <div className="step-icon-row-new">
                  <span className="step-card-icon"><i className="fa-regular fa-comments"></i></span>
                  <span className="step-card-badge">01</span>
                </div>
                <h3 className="step-card-title">Initial Consultation</h3>
                <p className="step-card-desc">Free consultation to discuss your needs and map out business requirements.</p>
              </div>

              <div className="step-card-new stagger-item" data-delay="0.1s">
                <div className="step-icon-row-new">
                  <span className="step-card-icon"><i className="fa-regular fa-folder-open"></i></span>
                  <span className="step-card-badge">02</span>
                </div>
                <h3 className="step-card-title">Send Documents</h3>
                <p className="step-card-desc">Securely share your tax records, ledger files, and company documents for deep review.</p>
              </div>

              <div className="step-card-new stagger-item" data-delay="0.15s">
                <div className="step-icon-row-new">
                  <span className="step-card-icon"><i className="fa-solid fa-gears"></i></span>
                  <span className="step-card-badge">03</span>
                </div>
                <h3 className="step-card-title">We Handle the Process</h3>
                <p className="step-card-desc">End-to-end handling of your corporate audits, legal MCA filings, and tax compliances.</p>
              </div>

              <div className="step-card-new stagger-item" data-delay="0.2s">
                <div className="step-icon-row-new">
                  <span className="step-card-icon"><i className="fa-regular fa-circle-check"></i></span>
                  <span className="step-card-badge">04</span>
                </div>
                <h3 className="step-card-title">Get Ongoing Support</h3>
                <p className="step-card-desc">Receive real-time support and strategic advice to ensure sustained business growth.</p>
              </div>
            </div>

            {/* Progress Line at Bottom */}
            <div className="timeline-bar-wrap">
              <div
                className="timeline-bar-fill"
                style={{ width: timelineAnimated ? '100%' : '0%', transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
              ></div>
              <div className="timeline-points-row">
                <span className="timeline-point-circle active">
                  <span className="timeline-point-label">Step 1</span>
                </span>
                <span className={`timeline-point-circle ${activePoints.pt2 ? 'active' : ''}`} id="pt-circle-2">
                  <span className="timeline-point-label">Step 2</span>
                </span>
                <span className={`timeline-point-circle ${activePoints.pt3 ? 'active' : ''}`} id="pt-circle-3">
                  <span className="timeline-point-label">Step 3</span>
                </span>
                <span className={`timeline-point-circle ${activePoints.pt4 ? 'active' : ''}`} id="pt-circle-4">
                  <span className="timeline-point-label">Step 4</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">
              <span className="section-tag-cross"><i className="fa-solid fa-xmark"></i></span> Testimonials
            </span>
            <h2 className="section-title title-center">Real stories from businesses and individuals we've helped.</h2>
          </div>

          <div className="testimonial-single-wrapper" data-delay="0.1s">
            <div
              className="testimonial-card-new"
              style={{
                opacity: fade ? 1 : 0,
                transform: fade ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease'
              }}
            >
              <p className="testimonial-quote-text">
                {testimonials[currentTestimonial].quote}
              </p>
              <div className="testimonial-footer-row-new">
                <div className="testimonial-author-avatar">
                  <img src={testimonials[currentTestimonial].avatar} alt={testimonials[currentTestimonial].name} />
                </div>
                <div className="testimonial-author-info">
                  <span className="testimonial-author-name">{testimonials[currentTestimonial].name}</span>
                  <span className="testimonial-author-role">{testimonials[currentTestimonial].role}</span>
                </div>
                <div className="testimonial-nav-arrows">
                  <button className="testimonial-arrow testimonial-prev-arrow" onClick={() => handleTestimonialNav(-1)} aria-label="Previous Testimonial">
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                  <button className="testimonial-arrow testimonial-nav-arrow" onClick={() => handleTestimonialNav(1)} aria-label="Next Testimonial">
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`testimonial-dot ${idx === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setTestimonialIdx(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Ready to experience hassle-free tax filing? <Link to="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Book your consultation today.</Link>
        </h2>
      </section>
    </>
  );
}
