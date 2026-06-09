import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [kbDropdownOpen, setKbDropdownOpen] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  // Handle scroll class toggle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync header height dynamically to CSS variable
  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        const height = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty('--header-height', `${height}px`);
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    // Trigger update on route change in case layout height shifts
    setTimeout(updateHeaderHeight, 100);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, [location]);

  // Close drawer on path transitions
  useEffect(() => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  }, [location]);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <div className={`drawer-overlay ${drawerOpen ? 'active' : ''}`} onClick={closeDrawer}></div>
      <header ref={headerRef} className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        {/* Sticky Top Bar */}
        <div className="top-bar">
          <div className="top-bar-left">
            <a href="tel:+912462298101">
              <i className="fa-solid fa-phone"></i> +91 2462 298101 (Nanded)
            </a>
            <span style={{ margin: '0 8px', color: 'rgba(255,255,255,0.3)' }}>|</span>
            <a href="tel:+912049113400">
              <i className="fa-solid fa-phone"></i> +91 20 4911 3400 (Pune)
            </a>
          </div>
          <div className="top-bar-center">
            <a href="mailto:query@jinkeassociates.com">
              <i className="fa-solid fa-envelope"></i> query@jinkeassociates.com
            </a>
          </div>
          <div className="top-bar-right">
            <span>
              <i className="fa-solid fa-clock"></i> Mon–Sat: 9:30 AM – 7:00 PM
            </span>
            <div className="top-bar-socials" style={{ marginLeft: '16px' }}>
              <a href="https://www.facebook.com/vijaykalaniandco" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/vrknco_ca/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/groups/9185560" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Header Bar */}
        <div className="navbar-wrapper">
          <div className="navbar">
            <div className="nav-container" style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
              <Link to="/" className="logo-wrap" id="logo-brand" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <div className="logo-icon">
                  <i className="fa-solid fa-building-columns"></i>
                </div>
                <div className="logo-text" style={{ display: 'flex', flexDirection: 'column' }}>
                  <span className="logo-main" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 700, fontSize: '22px', color: 'var(--color-dark)', lineHeight: 1.1 }}>
                    Jinke & Associates
                  </span>
                  <span className="logo-sub" style={{ fontSize: '9px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', color: 'var(--color-muted)', lineHeight: 1 }}>
                    Tax Consultant
                  </span>
                </div>
              </Link>
              <div className="co-brand-text" style={{ fontSize: '10px', color: 'var(--color-muted)', maxWidth: '200px', lineHeight: 1.2, fontWeight: 600, marginLeft: '12px', fontFamily: 'var(--font-body)', transition: 'var(--transition-smooth)' }}>
                In association with Pravin Chavan & Associates, CA India
              </div>
              <button className={`hamburger ${drawerOpen ? 'active' : ''}`} aria-label="Toggle navigation drawer" onClick={toggleDrawer} style={{ marginLeft: 'auto' }}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </button>
              <nav className="nav-menu">
                <ul className="nav-links">
                  <li>
                    <NavLink to="/" end className={({ isActive }) => `nav-item ${isActive ? 'page-active' : ''}`}>
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className={({ isActive }) => `nav-item ${isActive ? 'page-active' : ''}`}>
                      About
                    </NavLink>
                  </li>
                  <li className="dropdown-trigger">
                    <NavLink to="/services" className={({ isActive }) => `nav-item ${isActive ? 'page-active' : ''}`}>
                      Services <i className="fa-solid fa-chevron-down"></i>
                    </NavLink>
                    <div className="mega-menu" style={{ maxWidth: '700px' }}>
                      <div className="mega-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        <div className="mega-column">
                          <h4>
                            <i className="fa-solid fa-file-invoice-dollar"></i> Tax Services
                          </h4>
                          <ul>
                            <li><Link to="/services/income-tax">Income Tax Filing</Link></li>
                            <li><Link to="/services/gst">GST Advisory</Link></li>
                            <li><Link to="/services/tax-planning">Tax Planning</Link></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4>
                            <i className="fa-solid fa-building"></i> Business
                          </h4>
                          <ul>
                            <li><Link to="/services/business-reg">Business Registration</Link></li>
                            <li><Link to="/services/accounting">Accounting & Payroll</Link></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4>
                            <i className="fa-solid fa-globe"></i> Specialized
                          </h4>
                          <ul>
                            <li><Link to="/services/nri-taxation">NRI Taxation</Link></li>
                            <li><Link to="/services">All Services →</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="dropdown-trigger">
                    <NavLink to="/knowledge-bank" className={({ isActive }) => `nav-item ${isActive ? 'page-active' : ''}`}>
                      Knowledge Bank <i className="fa-solid fa-chevron-down"></i>
                    </NavLink>
                    <div className="mega-menu">
                      <div className="mega-grid" style={{ gridTemplateColumns: 'repeat(5, 1fr)', gap: '15px', width: '1000px', padding: '24px' }}>
                        <div className="mega-column">
                          <h4>
                            <i className="fa-solid fa-calculator"></i> Calculators
                          </h4>
                          <ul style={{ fontSize: '11px' }}>
                            <li><Link to="/knowledge-bank/calculators#gst-calc">GST Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators#tax-calc">Tax Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators#tds-calc">TDS Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">GST MRP Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">GST Rate Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">Net Profit Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">Net Worth Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">HRA Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">NSC Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">EMI Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">Auto Loan Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">Home Loan Calculator</Link></li>
                            <li><Link to="/knowledge-bank/calculators">RERA Calculator</Link></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4>
                            <i className="fa-solid fa-square-rss"></i> Bulletins
                          </h4>
                          <ul style={{ fontSize: '11px' }}>
                            <li><Link to="/knowledge-bank/bulletins#income-tax">Income Tax Updates</Link></li>
                            <li><Link to="/knowledge-bank/bulletins#gst">GST & Service Tax</Link></li>
                            <li><Link to="/knowledge-bank/bulletins#company-law">Company Law</Link></li>
                            <li><Link to="/knowledge-bank/bulletins">RBI SEBI Bulletins</Link></li>
                            <li><Link to="/knowledge-bank/bulletins">Labour Laws Updates</Link></li>
                            <li><Link to="/knowledge-bank/bulletins">FEMA Bulletins</Link></li>
                            <li><Link to="/knowledge-bank/bulletins">IGST / UTGST</Link></li>
                            <li><Link to="/knowledge-bank/bulletins">IBC Regulation</Link></li>
                            <li><Link to="/knowledge-bank/bulletins">Accounting Standards INDAS</Link></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4>
                            <i className="fa-solid fa-wrench"></i> Utilities
                          </h4>
                          <ul style={{ fontSize: '11px' }}>
                            <li><Link to="/knowledge-bank/utilities#tds-rates">TDS Rates</Link></li>
                            <li><Link to="/knowledge-bank/utilities#it-slabs">IT Slab Rates</Link></li>
                            <li><Link to="/knowledge-bank/utilities#depreciation">Depreciation Rates</Link></li>
                            <li><Link to="/knowledge-bank/utilities#gst-rates">GST Rate Chart</Link></li>
                            <li><Link to="/knowledge-bank/utilities">ROC Fees Structure</Link></li>
                            <li><Link to="/knowledge-bank/utilities">Cost Inflation Index</Link></li>
                            <li><Link to="/knowledge-bank/utilities">IFSC Codes</Link></li>
                            <li><Link to="/knowledge-bank/utilities">Gold & Silver Rates</Link></li>
                            <li><Link to="/knowledge-bank/utilities">HSN Rate List</Link></li>
                            <li><Link to="/knowledge-bank/utilities">Stamp Duty Rates</Link></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4>
                            <i className="fa-solid fa-scale-balanced"></i> Acts
                          </h4>
                          <ul style={{ fontSize: '11px' }}>
                            <li><Link to="/knowledge-bank/acts#income-tax-act">Income Tax Act</Link></li>
                            <li><Link to="/knowledge-bank/acts#gst-act">CGST Act 2017</Link></li>
                            <li><Link to="/knowledge-bank/acts#companies-act">Companies Act 2013</Link></li>
                            <li><Link to="/knowledge-bank/acts#fema-act">FEMA 1999</Link></li>
                            <li><Link to="/knowledge-bank/acts#llp-act">LLP Act 2008</Link></li>
                            <li><Link to="/knowledge-bank/acts">SEBI Act</Link></li>
                            <li><Link to="/knowledge-bank/acts">IGST Act 2017</Link></li>
                            <li><Link to="/knowledge-bank/acts">RERA 2016</Link></li>
                            <li><Link to="/knowledge-bank/acts">Maharashtra RERA</Link></li>
                            <li><Link to="/knowledge-bank/acts">Insolvency & Bankruptcy Code</Link></li>
                          </ul>
                        </div>
                        <div className="mega-column">
                          <h4>
                            <i className="fa-solid fa-file-invoice"></i> Forms
                          </h4>
                          <ul style={{ fontSize: '11px' }}>
                            <li><Link to="/knowledge-bank/forms#it-forms">Income Tax Forms</Link></li>
                            <li><Link to="/knowledge-bank/forms#gst-forms">GST Forms</Link></li>
                            <li><Link to="/knowledge-bank/forms#roc-forms">ROC Forms</Link></li>
                            <li><Link to="/knowledge-bank/forms#roc-forms">LLP Forms</Link></li>
                            <li><Link to="/knowledge-bank/forms#other-forms">FEMA Forms</Link></li>
                            <li><Link to="/knowledge-bank/forms#other-forms">Wealth Tax Forms</Link></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <NavLink to="/blog" className={({ isActive }) => `nav-item ${isActive ? 'page-active' : ''}`}>
                      Blog
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className={({ isActive }) => `nav-item ${isActive ? 'page-active' : ''}`}>
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="nav-cta" style={{ marginLeft: '16px' }}>
                <Link to="/contact" className="btn btn-navy" style={{ padding: '10px 24px', borderRadius: '999px' }}>
                  Book Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${drawerOpen ? 'open' : ''}`}>
        <ul className="drawer-links">
          <li>
            <NavLink to="/" end className={({ isActive }) => `drawer-item ${isActive ? 'page-active' : ''}`} onClick={closeDrawer}>
              <i className="fa-solid fa-house"></i> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={({ isActive }) => `drawer-item ${isActive ? 'page-active' : ''}`} onClick={closeDrawer}>
              <i className="fa-solid fa-users"></i> About
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={({ isActive }) => `drawer-item ${isActive ? 'page-active' : ''}`} onClick={closeDrawer}>
              <i className="fa-solid fa-briefcase"></i> Services
            </NavLink>
          </li>
          <li>
            <a href="#knowledge-bank" className="drawer-item mobile-dropdown-btn" onClick={(e) => { e.preventDefault(); setKbDropdownOpen(!kbDropdownOpen); }}>
              <i className="fa-solid fa-book-open"></i> Knowledge Bank <i className={`fa-solid ${kbDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            </a>
            <ul className={`mobile-mega-menu ${kbDropdownOpen ? 'active' : ''}`}>
              <li><Link to="/knowledge-bank/calculators" onClick={closeDrawer}>Calculators</Link></li>
              <li><Link to="/knowledge-bank/bulletins" onClick={closeDrawer}>Bulletins</Link></li>
              <li><Link to="/knowledge-bank/utilities" onClick={closeDrawer}>Utilities</Link></li>
              <li><Link to="/knowledge-bank/acts" onClick={closeDrawer}>Acts</Link></li>
              <li><Link to="/knowledge-bank/forms" onClick={closeDrawer}>Forms</Link></li>
            </ul>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => `drawer-item ${isActive ? 'page-active' : ''}`} onClick={closeDrawer}>
              <i className="fa-solid fa-pen-nib"></i> Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => `drawer-item ${isActive ? 'page-active' : ''}`} onClick={closeDrawer}>
              <i className="fa-solid fa-envelope"></i> Contact
            </NavLink>
          </li>
          <li className="drawer-cta-li">
            <Link to="/contact" className="btn btn-navy btn-block" style={{ borderRadius: '999px' }} onClick={closeDrawer}>
              Book Consultation
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
