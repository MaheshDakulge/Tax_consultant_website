import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Disclaimer() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('disclaimer');

  // Handle hash changes to focus on a specific tab if referenced in URL (e.g. #terms)
  useEffect(() => {
    if (location.hash === '#terms') {
      setActiveTab('terms');
    } else if (location.hash === '#privacy') {
      setActiveTab('privacy');
    } else {
      setActiveTab('disclaimer');
    }
  }, [location.hash]);

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-banner" style={{ minHeight: '280px', paddingTop: '60px', paddingBottom: '60px' }}>
          <div className="breadcrumb">
            <a href="/">Home</a>
            <span className="sep"><i className="fa-solid fa-chevron-right"></i></span>
            <span className="current">Disclaimer & Policies</span>
          </div>
          <h1 className="page-hero-title" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            Disclaimer, Terms & Privacy Policy
          </h1>
          <p className="page-hero-subtitle">Last updated: June 2025</p>
        </div>
      </div>

      <section className="reveal">
        <div className="section-container">
          <div className="legal-document-layout">
            {/* Tabs Selector */}
            <div className="legal-tabs">
              <button 
                className={`legal-tab ${activeTab === 'disclaimer' ? 'active' : ''}`}
                onClick={() => setActiveTab('disclaimer')}
              >
                Disclaimer
              </button>
              <button 
                className={`legal-tab ${activeTab === 'terms' ? 'active' : ''}`}
                onClick={() => setActiveTab('terms')}
              >
                Terms & Conditions
              </button>
              <button 
                className={`legal-tab ${activeTab === 'privacy' ? 'active' : ''}`}
                onClick={() => setActiveTab('privacy')}
              >
                Privacy Policy
              </button>
            </div>

            {/* Disclaimer Tab Content */}
            {activeTab === 'disclaimer' && (
              <div className="legal-section active" id="disclaimer">
                <div className="legal-prose">
                  <h2>Disclaimer</h2>
                  <p><strong>Last Updated:</strong> June 2025</p>
                  <h3>Professional Nature of Content</h3>
                  <p>The information published on this website (jinkeassociates.com) is provided for general informational and educational purposes only. It is not intended to be, and should not be construed as, legal, tax, financial, or professional advice. While every effort is made to ensure that the information is accurate and up to date, Jinke & Associates makes no representations or warranties, express or implied, about the completeness, accuracy, reliability, suitability, or availability of any information on this website.</p>
                  <h3>No Client-Attorney / CA Relationship</h3>
                  <p>Accessing this website or reading its content does not create any client-professional relationship between you and Jinke & Associates or any of its members, partners, or employees. A formal engagement must be established through a written agreement.</p>
                  <h3>Calculators & Tools</h3>
                  <p>Tax calculators and reference tools provided on this website are for indicative estimation purposes only. Results are based on simplified assumptions and should not be relied upon for making financial or tax decisions. Actual tax liability may differ based on applicable surcharges, rebates, applicable provisions, and individual circumstances. Always consult a qualified CA for precise computation.</p>
                  <h3>External Links</h3>
                  <p>This website may contain links to third-party government portals and external websites. Jinke & Associates does not endorse or make any representations about these external sites and is not responsible for their content, accuracy, or availability.</p>
                  <h3>ICAI Compliance</h3>
                  <p>Jinke & Associates is a registered chartered accountancy firm regulated by the Institute of Chartered Accountants of India (ICAI). All services are provided in accordance with ICAI professional standards, code of ethics, and applicable regulations.</p>
                  <h3>Limitation of Liability</h3>
                  <p>To the fullest extent permitted by law, Jinke & Associates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of this website or reliance on information published herein.</p>
                </div>
              </div>
            )}

            {/* Terms & Conditions Tab Content */}
            {activeTab === 'terms' && (
              <div className="legal-section active" id="terms">
                <div className="legal-prose">
                  <h2>Terms & Conditions</h2>
                  <p><strong>Last Updated:</strong> June 2025</p>
                  <h3>Acceptance of Terms</h3>
                  <p>By accessing and using this website, you confirm that you have read, understood, and agree to be bound by these Terms & Conditions. If you do not agree, please do not use this website.</p>
                  <h3>Use of Website</h3>
                  <p>You may use this website for lawful purposes only. You agree not to: scrape or harvest data from this website, transmit any malicious code, or use this website in any manner that could damage, disable, or impair its functioning.</p>
                  <h3>Intellectual Property</h3>
                  <p>All content on this website, including text, graphics, logos, icons, articles, and design elements, is the intellectual property of Jinke & Associates and is protected under applicable Indian and international copyright law. You may not reproduce, distribute, or create derivative works without prior written permission.</p>
                  <h3>Engagement of Services</h3>
                  <p>Engaging our CA services requires a formal written engagement letter. Terms of service for specific engagements are governed by the individual engagement letter, which supersedes any general terms stated here.</p>
                  <h3>Governing Law</h3>
                  <p>These Terms are governed by the laws of India. Any disputes arising from the use of this website shall be subject to the exclusive jurisdiction of courts in Pune, Maharashtra.</p>
                  <h3>Amendments</h3>
                  <p>We reserve the right to update these Terms at any time. Continued use of the website after such changes constitutes your acceptance of the revised Terms.</p>
                </div>
              </div>
            )}

            {/* Privacy Policy Tab Content */}
            {activeTab === 'privacy' && (
              <div className="legal-section active" id="privacy">
                <div className="legal-prose">
                  <h2>Privacy Policy</h2>
                  <p><strong>Last Updated:</strong> June 2025</p>
                  <h3>Data We Collect</h3>
                  <p>When you contact us or submit a form on this website, we may collect your name, email address, phone number, and enquiry details. We do not collect sensitive financial or tax data through this website.</p>
                  <h3>How We Use Your Data</h3>
                  <p>Information collected is used exclusively to: respond to your enquiry, provide requested services, send relevant tax updates (with your consent), and improve our service delivery. We do not sell or rent your personal data to third parties.</p>
                  <h3>Data Security</h3>
                  <p>We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, or misuse. Client data shared for professional engagements is handled with strict confidentiality per ICAI professional standards.</p>
                  <h3>Cookies</h3>
                  <p>This website may use basic cookies to analyze traffic and improve user experience. No personally identifiable information is collected via cookies. You can disable cookies through your browser settings.</p>
                  <h3>Your Rights</h3>
                  <p>Under applicable Indian law, you have the right to access, correct, or request deletion of your personal data. To exercise these rights, contact us at <a href="mailto:query@jinkeassociates.com">query@jinkeassociates.com</a>.</p>
                  <h3>Contact</h3>
                  <p>For any privacy-related concerns, please write to: <a href="mailto:query@jinkeassociates.com">query@jinkeassociates.com</a> or visit our Pune office at Jinke Tower, FC Road, Pune — 411004.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
