import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, subtitle, bgText, breadcrumbs = [] }) {
  return (
    <div className="page-hero">
      <div className="page-hero-banner">
        <div className="breadcrumb">
          <Link to="/">Home</Link>
          {breadcrumbs.map((bc, idx) => (
            <React.Fragment key={idx}>
              <span className="sep">
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              {bc.path ? (
                <Link to={bc.path}>{bc.label}</Link>
              ) : (
                <span className="current">{bc.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-subtitle">{subtitle}</p>
        <span className="page-hero-bg-text">{bgText}</span>
      </div>
    </div>
  );
}
