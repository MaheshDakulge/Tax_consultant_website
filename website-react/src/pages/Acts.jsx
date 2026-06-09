import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';

export default function Acts() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <PageHero
        title="Key Acts & Tax Legislation"
        subtitle="Quick reference to the major Indian tax and corporate laws that govern your compliance obligations."
        bgText="Law"
        breadcrumbs={[
          { label: 'Knowledge Bank', path: '/knowledge-bank' },
          { label: 'Acts' }
        ]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="text-center">
            <span className="section-tag">[ ✕ ] Legislation</span>
            <h2 className="section-title title-center">Core laws every business should know.</h2>
          </div>
          <div className="acts-grid">
            <div className="act-card" id="income-tax-act">
              <div className="act-card-icon">
                <i className="fa-solid fa-file-invoice-dollar"></i>
              </div>
              <div className="act-card-body">
                <h3>Income Tax Act, 1961</h3>
                <p>
                  The primary legislation governing income tax in India. Covers assessment, deductions, exemptions, TDS, international taxation, and penalties for non-compliance.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong>Key Sections:</strong> 80C, 80D, 87A, 10, 24, 43B, 194, 139, 143, 147, 245
                </p>
                <a href="https://incometaxindia.gov.in/pages/acts/income-tax-act.aspx" target="_blank" rel="noopener noreferrer" className="act-link">
                  View on IT Department Portal <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="act-card" id="gst-act">
              <div className="act-card-icon">
                <i className="fa-solid fa-receipt"></i>
              </div>
              <div className="act-card-body">
                <h3>Central GST Act, 2017 (CGST)</h3>
                <p>
                  Governs central goods and services tax, covering registration, invoicing, returns, input tax credit, refunds, and GST audit provisions.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong>Key Sections:</strong> Section 9 (Levy), 16 (ITC), 17 (ITC reversal), 22 (Registration), 37–48 (Returns), 61–66 (Audit)
                </p>
                <a href="https://cbic-gst.gov.in/Acts-Rules-Circulars.html" target="_blank" rel="noopener noreferrer" className="act-link">
                  View on CBIC Portal <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="act-card" id="companies-act">
              <div className="act-card-icon">
                <i className="fa-solid fa-building"></i>
              </div>
              <div className="act-card-body">
                <h3>Companies Act, 2013</h3>
                <p>
                  The primary corporate law governing company incorporation, management, accounts, audit, directors' duties, CSR, mergers, and winding up.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong>Key Sections:</strong> 2 (Definitions), 7 (Incorporation), 96–122 (Meetings), 128–148 (Accounts & Audit), 135 (CSR)
                </p>
                <a href="https://www.mca.gov.in/Ministry/pdf/CompaniesAct2013.pdf" target="_blank" rel="noopener noreferrer" className="act-link">
                  View on MCA Portal <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="act-card" id="fema-act">
              <div className="act-card-icon">
                <i className="fa-solid fa-globe"></i>
              </div>
              <div className="act-card-body">
                <h3>FEMA, 1999 (Foreign Exchange)</h3>
                <p>
                  Governs foreign exchange transactions, remittances, NRI investments, cross-border trade, foreign direct investment (FDI), and repatriation of funds.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong>Key Provisions:</strong> Section 3 (Prohibited dealings), Section 6 (Capital account), FEMA Regulations on NRI/OCI, LRS, FDI
                </p>
                <a href="https://www.rbi.org.in/scripts/FEMA.aspx" target="_blank" rel="noopener noreferrer" className="act-link">
                  View on RBI Portal <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="act-card" id="llp-act">
              <div className="act-card-icon">
                <i className="fa-solid fa-briefcase"></i>
              </div>
              <div className="act-card-body">
                <h3>Limited Liability Partnership Act, 2008</h3>
                <p>
                  Regulates LLP formation, partner rights, duties, accounts, audit, amalgamation, and winding up procedures.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong>Key Sections:</strong> Section 3 (Body corporate), 11 (Incorporation), 27 (Accounts), 35 (Audit), 60 (Amalgamation)
                </p>
                <a href="https://www.mca.gov.in" target="_blank" rel="noopener noreferrer" className="act-link">
                  View on MCA Portal <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>

            <div className="act-card" id="pf-act">
              <div className="act-card-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="act-card-body">
                <h3>PF & Miscellaneous Provisions Act, 1952</h3>
                <p>
                  Governs provident fund contributions (EPF), pension scheme (EPS), and insurance (EDLI) for employees in establishments with 20+ workers.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                  <strong>Key Points:</strong> EPF = 12% employer + 12% employee, EPS 8.33%, Universal Account Number (UAN), online claim settlement
                </p>
                <a href="https://www.epfindia.gov.in" target="_blank" rel="noopener noreferrer" className="act-link">
                  View on EPFO Portal <i className="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Have questions about how these laws affect your business? <a href="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Speak with our experts.</a>
        </h2>
      </section>
    </>
  );
}
