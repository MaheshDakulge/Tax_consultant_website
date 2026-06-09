import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setModalOpen(!modalOpen);
    if (!modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="section-container" style={{ padding: '0 24px' }}>
            <div className="footer-grid-row">
              <div className="footer-brand">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '26px' }}>
                  Jinke & Associates
                </h3>
                <p style={{ margin: '10px 0 20px 0', fontSize: '14px' }}>
                  Taxes, Handled with Precision and Peace of Mind. In association with Pravin Chavan & Associates, CA India
                </p>
              </div>
              <div className="footer-column">
                <h4>Quick Links</h4>
                <ul className="footer-links-list">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Services</h4>
                <ul className="footer-links-list">
                  <li><Link to="/services/income-tax">Income Tax</Link></li>
                  <li><Link to="/services/gst">GST Advisory</Link></li>
                  <li><Link to="/services/tax-planning">Tax Planning</Link></li>
                  <li><Link to="/services/business-reg">Business Reg.</Link></li>
                  <li><Link to="/services/nri-taxation">NRI Taxation</Link></li>
                </ul>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <ul className="footer-links-list">
                  <li>
                    <a href="#disclaimer" onClick={toggleModal}>
                      Disclaimer
                    </a>
                  </li>
                  <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="footer-contact">
                <h4>Office Contact</h4>
                <div className="footer-contact-info-list">
                  <div className="footer-contact-item">
                    <span>Pune Head Office</span>
                    <a href="#pune">Jinke Tower, FC Road, Pune, Maharashtra 411004</a>
                  </div>
                  <div className="footer-contact-item">
                    <span>Nanded Branch Office</span>
                    <a href="#nanded">Plot No. 24, Shilanagar Colony, Nanded, Maharashtra 431605</a>
                  </div>
                  <div className="footer-contact-item">
                    <span>Support Email</span>
                    <a href="mailto:query@jinkeassociates.com">query@jinkeassociates.com</a>
                  </div>
                </div>
                <div className="footer-social-row">
                  <a href="https://www.facebook.com/vijaykalaniandco" target="_blank" rel="noopener noreferrer" className="footer-social-circle" aria-label="Facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/vrknco_ca/" target="_blank" rel="noopener noreferrer" className="footer-social-circle" aria-label="Instagram">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/groups/9185560" target="_blank" rel="noopener noreferrer" className="footer-social-circle" aria-label="LinkedIn">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer-social-circle" aria-label="Twitter">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="section-container bottom-flex-container" style={{ padding: '0 24px' }}>
            <p className="copyright-text">&copy; 2025. All Rights Reserved — Jinke & Associates, Nanded.</p>
            <p className="disclaimer-footer-note" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>
              Co-brand: In association with Pravin Chavan & Associates, CA India
            </p>
          </div>
        </div>
      </footer>

      {/* Disclaimer Modal Overlay Popup */}
      <div className={`modal-overlay ${modalOpen ? 'active' : ''}`} onClick={closeModal}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close" aria-label="Close modal" onClick={closeModal}>
            &times;
          </button>
          <h3>Disclaimer & Terms</h3>
          <p>
            As per the rules of the Institute of Chartered Accountants of India (ICAI), we are not permitted to advertise or solicit work. The information provided in this website is solely for informational purposes and should not be construed as solicitation or advertisement.
          </p>
          <p>
            By viewing this site, you acknowledge that you are seeking information about Jinke & Associates of your own accord and no form of solicitation has taken place.
          </p>
          <button className="btn btn-navy btn-close-modal" onClick={closeModal}>
            I Understand
          </button>
        </div>
      </div>
    </>
  );
}
