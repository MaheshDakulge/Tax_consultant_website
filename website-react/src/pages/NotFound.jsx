import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="error-404-page">
      <div className="error-404-content">
        <div className="error-404-number">404</div>
        <h1 className="error-404-title">Page Not Found</h1>
        <p className="error-404-desc">
          The page you're looking for seems to have taken a detour — perhaps it was moved, renamed, or never existed. Don't worry, our experts know exactly where to find you.
        </p>
        <div className="error-404-actions">
          <Link to="/" className="btn btn-navy">← Back to Home</Link>
          <Link to="/contact" className="btn btn-outline-dark">Contact Us</Link>
        </div>
        <div className="error-404-links">
          <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginBottom: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px' }}>
            Or go directly to:
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
            <Link to="/services" style={{ fontSize: '13.5px', color: 'var(--color-dark)', border: '1px solid var(--color-border-light)', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none' }}>
              Services
            </Link>
            <Link to="/knowledge-bank/calculators" style={{ fontSize: '13.5px', color: 'var(--color-dark)', border: '1px solid var(--color-border-light)', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none' }}>
              Tax Calculator
            </Link>
            <Link to="/blog" style={{ fontSize: '13.5px', color: 'var(--color-dark)', border: '1px solid var(--color-border-light)', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none' }}>
              Blog
            </Link>
            <Link to="/knowledge-bank" style={{ fontSize: '13.5px', color: 'var(--color-dark)', border: '1px solid var(--color-border-light)', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none' }}>
              Knowledge Bank
            </Link>
            <Link to="/contact" style={{ fontSize: '13.5px', color: 'var(--color-dark)', border: '1px solid var(--color-border-light)', padding: '8px 16px', borderRadius: '20px', textDecoration: 'none' }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
