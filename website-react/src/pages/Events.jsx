import React from 'react';
import PageHero from '../components/ui/PageHero';

export default function Events() {
  return (
    <>
      <PageHero
        title="Workshops, Webinars & Community Events"
        subtitle="Join our free and paid events on tax planning, GST, business setup, and financial literacy — for entrepreneurs and professionals."
        bgText="Events"
        breadcrumbs={[{ label: 'Events' }]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Upcoming Events</span>
            <h2 className="section-title title-center">Learn, grow, and stay compliant.</h2>
          </div>
          <div className="events-grid">
            <div className="event-card featured-event">
              <div className="event-date-badge">
                <span className="event-day">28</span>
                <span className="event-month">JUN</span>
              </div>
              <div className="event-body">
                <div className="event-meta">
                  <span className="event-type online">🎥 Live Webinar</span>
                  <span className="event-fee free">Free</span>
                </div>
                <h3>New vs Old Tax Regime: Which Should You Pick in FY 2025-26?</h3>
                <p>
                  Join CA J. R. Jinke for a live deep-dive into the new and old tax regimes. We'll run through real calculation examples across different income profiles and answer your questions live.
                </p>
                <div className="event-details-row">
                  <span><i className="fa-regular fa-clock"></i> 6:00 PM – 7:30 PM IST</span>
                  <span><i className="fa-solid fa-users"></i> 500 seats</span>
                </div>
                <a href="/contact" className="btn btn-navy" style={{ marginTop: '16px', display: 'inline-flex', borderRadius: '999px' }}>
                  Register Now <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </a>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date-badge">
                <span className="event-day">12</span>
                <span className="event-month">JUL</span>
              </div>
              <div className="event-body">
                <div className="event-meta">
                  <span className="event-type in-person">📍 In-Person Workshop</span>
                  <span className="event-fee paid">₹499</span>
                </div>
                <h3>GST for Small Business Owners — A Practical Workshop</h3>
                <p>
                  A hands-on half-day workshop covering GST registration, return filing, ITC claims, and common compliance pitfalls. Held at our Pune office.
                </p>
                <div className="event-details-row">
                  <span><i className="fa-regular fa-clock"></i> 10:00 AM – 2:00 PM</span>
                  <span><i className="fa-solid fa-location-dot"></i> Pune, FC Road</span>
                </div>
                <a href="/contact" className="btn btn-navy" style={{ marginTop: '16px', display: 'inline-flex', borderRadius: '999px' }}>
                  Book Seat <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </a>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date-badge">
                <span className="event-day">19</span>
                <span className="event-month">JUL</span>
              </div>
              <div className="event-body">
                <div className="event-meta">
                  <span className="event-type online">🎥 Live Webinar</span>
                  <span className="event-fee free">Free</span>
                </div>
                <h3>NRI Tax Planning Masterclass — Live Q&A Session</h3>
                <p>
                  Specifically designed for Indian diaspora in UAE, USA, UK, and Canada. Topics: DTAA, NRE/NRO accounts, property sales, FEMA compliance, and repatriation.
                </p>
                <div className="event-details-row">
                  <span><i className="fa-regular fa-clock"></i> 7:00 PM – 8:30 PM IST</span>
                  <span><i className="fa-solid fa-users"></i> Unlimited</span>
                </div>
                <a href="/contact" className="btn btn-navy" style={{ marginTop: '16px', display: 'inline-flex', borderRadius: '999px' }}>
                  Register Free <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </a>
              </div>
            </div>

            <div className="event-card">
              <div className="event-date-badge">
                <span className="event-day">02</span>
                <span className="event-month">AUG</span>
              </div>
              <div className="event-body">
                <div className="event-meta">
                  <span className="event-type in-person">📍 Seminar</span>
                  <span className="event-fee free">Free</span>
                </div>
                <h3>Startup India: Tax Benefits, DPIIT Registration & Compliance</h3>
                <p>
                  An evening seminar on Section 80-IAC startup deductions, angel tax provisions, ESOP taxation, and the DPIIT recognition process for eligible startups.
                </p>
                <div className="event-details-row">
                  <span><i className="fa-regular fa-clock"></i> 5:30 PM – 7:30 PM</span>
                  <span><i className="fa-solid fa-location-dot"></i> Nanded Branch</span>
                </div>
                <a href="/contact" className="btn btn-navy" style={{ marginTop: '16px', display: 'inline-flex', borderRadius: '999px' }}>
                  Reserve Seat <i className="fa-solid fa-arrow-right" style={{ marginLeft: '8px' }}></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="reveal" style={{ background: 'var(--color-white)' }}>
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Past Events</span>
            <h2 className="section-title title-center">What we've covered so far.</h2>
          </div>
          <div className="past-events-list">
            <div className="past-event-item">
              <div className="past-event-info">
                <span className="past-event-date">Apr 2025</span>
                <h4>Budget 2025 Analysis — Key Changes for Taxpayers</h4>
                <p>Live webinar attended by 1,200+ participants</p>
              </div>
              <a href="#/" onClick={(e) => e.preventDefault()} className="past-event-recording">
                Watch Recording <i className="fa-solid fa-play"></i>
              </a>
            </div>
            <div className="past-event-item">
              <div className="past-event-info">
                <span className="past-event-date">Feb 2025</span>
                <h4>GST Annual Return Filing Workshop</h4>
                <p>In-person workshop at Pune office — 80 attendees</p>
              </div>
              <a href="#/" onClick={(e) => e.preventDefault()} className="past-event-recording">
                View Summary <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="past-event-item">
              <div className="past-event-info">
                <span className="past-event-date">Dec 2024</span>
                <h4>Year-End Tax Planning Checklist — Live Session</h4>
                <p>Webinar with Q&A — 750+ attendees</p>
              </div>
              <a href="#/" onClick={(e) => e.preventDefault()} className="past-event-recording">
                Watch Recording <i className="fa-solid fa-play"></i>
              </a>
            </div>
            <div className="past-event-item">
              <div className="past-event-info">
                <span className="past-event-date">Oct 2024</span>
                <h4>NRI Property Investment Masterclass</h4>
                <p>Online webinar for NRI clients — 400+ attendees globally</p>
              </div>
              <a href="#/" onClick={(e) => e.preventDefault()} className="past-event-recording">
                Watch Recording <i className="fa-solid fa-play"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Want us to conduct a workshop for your organization? <a href="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Let's collaborate.</a>
        </h2>
      </section>
    </>
  );
}
