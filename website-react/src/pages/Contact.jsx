import React, { useState } from 'react';
import PageHero from '../components/ui/PageHero';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consent: false
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Full name is required';
    
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.message.trim()) errors.message = 'Message is required';
    if (!formData.consent) errors.consent = 'You must agree to the privacy policy consent';

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // Simulate successful form submission
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      consent: false
    });
    setFormErrors({});
    setIsSubmitted(false);
  };

  return (
    <>
      <PageHero
        title="Let's start a conversation about your finances."
        subtitle="Reach us by phone, email, or visit our office. First consultations are always free."
        bgText="Contact"
        breadcrumbs={[{ label: 'Contact Us' }]}
      />

      {/* Three Contact Method Cards */}
      <section className="reveal" style={{ background: 'var(--color-bg)', paddingBottom: '0' }}>
        <div className="section-container">
          <div className="office-cards">
            {/* Phone Card */}
            <div className="office-card">
              <div className="office-card-icon"><i className="fa-solid fa-phone"></i></div>
              <h4>Call Our Offices</h4>
              <p style={{ marginTop: '8px' }}>
                Nanded: <a href="tel:+912462298101" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>+91 2462 298101</a><br />
                Pune: <a href="tel:+912049113400" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>+91 20 4911 3400</a>
              </p>
            </div>
            {/* Email Card */}
            <div className="office-card">
              <div className="office-card-icon"><i className="fa-solid fa-envelope"></i></div>
              <h4>Email Correspondence</h4>
              <p style={{ marginTop: '8px' }}>
                General: <a href="mailto:query@jinkeassociates.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>query@jinkeassociates.com</a><br />
                Careers: <a href="mailto:careers@jinkeassociates.com" style={{ color: 'var(--color-accent)', textDecoration: 'underline' }}>careers@jinkeassociates.com</a>
              </p>
            </div>
            {/* Working Hours Card */}
            <div className="office-card">
              <div className="office-card-icon"><i className="fa-solid fa-clock"></i></div>
              <h4>Office Hours</h4>
              <p style={{ marginTop: '8px' }}>
                Monday – Saturday: 9:30 AM – 7:00 PM<br />
                Sunday: By appointment only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form & Map Grid */}
      <section className="reveal">
        <div className="section-container">
          <div className="contact-page-grid">
            {/* Left Column: Maps and Addresses */}
            <div className="contact-maps-section" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              
              {/* Nanded Office (Primary) */}
              <div className="office-location-block">
                <span className="section-tag">[ ✕ ] Nanded Office</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-dark)', marginBottom: '12px' }}>Nanded Branch (Primary CA Location)</h3>
                <p style={{ marginBottom: '20px', fontSize: '14.5px' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i> 
                  Plot No. 24, Shilanagar Colony, Nanded, Maharashtra — 431605
                </p>
                <div className="contact-map-wrap" style={{ height: '320px' }}>
                  <iframe 
                    title="Jinke & Associates Nanded Office Location" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9959648930497!2d77.30606781491176!3d19.15170365457497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc9deb2f3eb8d8f%3A0xc3ba6a4457bbcfd7!2sShila%20Nagar%2C%20Nanded%2C%20Maharashtra%20431605!5e0!3m2!1sen!2sin!4v1651738271742!5m2!1sen!2sin" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>

              {/* Pune Office */}
              <div className="office-location-block">
                <span className="section-tag">[ ✕ ] Pune Office</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-dark)', marginBottom: '12px' }}>Pune Head Office</h3>
                <p style={{ marginBottom: '20px', fontSize: '14.5px' }}>
                  <i className="fa-solid fa-location-dot" style={{ color: 'var(--color-accent)', marginRight: '8px' }}></i> 
                  Jinke Tower, FC Road, Shivajinagar, Pune, Maharashtra — 411004
                </p>
                <div className="contact-map-wrap" style={{ height: '320px' }}>
                  <iframe 
                    title="Jinke & Associates Pune Office Location" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7278688413505!2d73.84143831490154!3d18.5228822874267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9e5a92f8c1%3A0x8e1d5e8fca574df7!2sFC%20Road%2C%20Shivajinagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1651738261742!5m2!1sen!2sin" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0, width: '100%', height: '100%' }}
                  ></iframe>
                </div>
              </div>

            </div>

            {/* Right Column: Sticky Form Card */}
            <div className="contact-form-column">
              <div className="contact-page-form-card">
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '26px', color: 'var(--color-dark)', marginBottom: '8px' }}>Send a Message</h3>
                <p style={{ fontSize: '14px', color: 'var(--color-muted)', marginBottom: '28px' }}>
                  Fill out the form below. Our financial experts will review your request and get back to you within 24 hours.
                </p>
                
                {isSubmitted ? (
                  <div style={{ padding: '40px 20px', textAlign: 'center', background: 'var(--color-bg)', borderRadius: '12px', border: '1px solid var(--color-border-light)' }}>
                    <div style={{ fontSize: '48px', color: 'var(--color-navy)', marginBottom: '20px' }}>
                      <i className="fa-solid fa-circle-check"></i>
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', color: 'var(--color-dark)', marginBottom: '12px' }}>Thank You!</h4>
                    <p style={{ fontSize: '14.5px', color: 'var(--color-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
                      Your message has been received successfully. One of our senior advisors will contact you shortly to schedule your consultation.
                    </p>
                    <button onClick={resetForm} className="btn btn-navy" style={{ borderRadius: '999px', padding: '10px 24px' }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form" noValidate>
                    <div className="form-row">
                      <div className="contact-form-group" style={{ marginBottom: '20px' }}>
                        <label className="contact-label" htmlFor="contact-name" style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-dark)', display: 'block', marginBottom: '8px' }}>
                          Full Name *
                        </label>
                        <input 
                          type="text" 
                          id="contact-name" 
                          name="name" 
                          value={formData.name}
                          onChange={handleInputChange}
                          className="contact-input" 
                          placeholder="Your full name" 
                          required 
                          style={{ width: '100%', padding: '12px', border: '1px solid var(--color-border-light)', borderRadius: '8px', fontFamily: 'var(--font-body)', fontSize: '14px' }} 
                        />
                        {formErrors.name && <span style={{ color: '#dc3545', fontSize: '12px', marginTop: '4px', display: 'block' }}>{formErrors.name}</span>}
                      </div>
                      
                      <div className="contact-form-group" style={{ marginBottom: '20px' }}>
                        <label className="contact-label" htmlFor="contact-email" style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-dark)', display: 'block', marginBottom: '8px' }}>
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          id="contact-email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleInputChange}
                          className="contact-input" 
                          placeholder="your@email.com" 
                          required 
                          style={{ width: '100%', padding: '12px', border: '1px solid var(--color-border-light)', borderRadius: '8px', fontFamily: 'var(--font-body)', fontSize: '14px' }} 
                        />
                        {formErrors.email && <span style={{ color: '#dc3545', fontSize: '12px', marginTop: '4px', display: 'block' }}>{formErrors.email}</span>}
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="contact-form-group" style={{ marginBottom: '20px' }}>
                        <label className="contact-label" htmlFor="contact-phone" style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-dark)', display: 'block', marginBottom: '8px' }}>
                          Phone Number
                        </label>
                        <input 
                          type="tel" 
                          id="contact-phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="contact-input" 
                          placeholder="+91 00000 00000" 
                          style={{ width: '100%', padding: '12px', border: '1px solid var(--color-border-light)', borderRadius: '8px', fontFamily: 'var(--font-body)', fontSize: '14px' }} 
                        />
                      </div>
                      
                      <div className="contact-form-group" style={{ marginBottom: '20px' }}>
                        <label className="contact-label" htmlFor="contact-service" style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-dark)', display: 'block', marginBottom: '8px' }}>
                          Service Required
                        </label>
                        <select 
                          id="contact-service" 
                          name="service" 
                          value={formData.service}
                          onChange={handleInputChange}
                          className="contact-input" 
                          style={{ width: '100%', padding: '12px', border: '1px solid var(--color-border-light)', borderRadius: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', backgroundColor: '#fff' }}
                        >
                          <option value="" disabled>Select a service...</option>
                          <option value="income-tax">Income Tax Filing</option>
                          <option value="gst">GST Registration / Returns</option>
                          <option value="tax-planning">Tax Planning</option>
                          <option value="business-reg">Business Registration</option>
                          <option value="accounting">Accounting & Payroll</option>
                          <option value="nri">NRI Taxation / FEMA</option>
                          <option value="other">Other / Not Sure</option>
                        </select>
                      </div>
                    </div>

                    <div className="contact-form-group" style={{ marginBottom: '20px' }}>
                      <label className="contact-label" htmlFor="contact-message" style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-dark)', display: 'block', marginBottom: '8px' }}>
                        Message *
                      </label>
                      <textarea 
                        id="contact-message" 
                        name="message" 
                        value={formData.message}
                        onChange={handleInputChange}
                        className="contact-input contact-textarea" 
                        placeholder="Tell us about your tax or financial requirement..." 
                        required 
                        style={{ width: '100%', padding: '12px', border: '1px solid var(--color-border-light)', borderRadius: '8px', fontFamily: 'var(--font-body)', fontSize: '14px', minHeight: '120px', resize: 'vertical' }}
                      ></textarea>
                      {formErrors.message && <span style={{ color: '#dc3545', fontSize: '12px', marginTop: '4px', display: 'block' }}>{formErrors.message}</span>}
                    </div>

                    <div className="contact-form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '24px' }}>
                      <input 
                        type="checkbox" 
                        id="contact-consent" 
                        name="consent" 
                        checked={formData.consent}
                        onChange={handleInputChange}
                        required 
                        style={{ marginTop: '3px', flexShrink: 0 }} 
                      />
                      <label htmlFor="contact-consent" style={{ fontSize: '12.5px', color: 'var(--color-muted)', lineHeight: 1.5, cursor: 'pointer' }}>
                        I agree that Jinke & Associates may contact me regarding my enquiry. Your data is handled per our Privacy Policy.
                      </label>
                    </div>
                    {formErrors.consent && <span style={{ color: '#dc3545', fontSize: '12px', marginTop: '-16px', marginBottom: '16px', display: 'block' }}>{formErrors.consent}</span>}

                    <button type="submit" id="contact-submit-btn" className="btn btn-navy" style={{ width: '100%', padding: '16px', fontSize: '15px', fontWeight: 700, borderRadius: '999px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      Send Message <i className="fa-solid fa-paper-plane"></i>
                    </button>
                  </form>
                )}
                
                <a 
                  href="https://wa.me/912462298101?text=Hello%20Jinke%20%26%20Associates%2C%20I%20would%20like%20to%20enquire%20about%20your%20tax%20services." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="whatsapp-btn"
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', textDecoration: 'none' }}
                >
                  <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
