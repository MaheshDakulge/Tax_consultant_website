import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';

export default function TabShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [fade, setFade] = useState(true);

  const handleTabClick = (idx) => {
    if (idx === activeIdx) return;
    setFade(false);
    setTimeout(() => {
      setActiveIdx(idx);
      setFade(true);
    }, 280);
  };

  const activeService = servicesData[activeIdx];

  return (
    <div className="services-showcase">
      {/* Left Side: Preview Panel */}
      <div className="service-preview-panel" data-delay="0.1s">
        <div className="service-preview-card">
          <img
            src={activeService.image}
            alt={activeService.title}
            className="service-preview-img"
            style={{
              opacity: fade ? 1 : 0,
              transform: fade ? 'scale(1)' : 'scale(0.97)',
              transition: 'opacity 0.28s ease, transform 0.28s ease'
            }}
          />
          <div className="service-preview-overlay">
            <div
              className="preview-advisor-info"
              style={{
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.28s ease'
              }}
            >
              <span className="preview-advisor-name">{activeService.advisorName}</span>
              <span className="preview-advisor-title">{activeService.advisorTitle}</span>
            </div>
            <Link
              to={activeService.link}
              className="btn btn-navy"
              style={{
                opacity: fade ? 1 : 0,
                transition: 'opacity 0.28s ease'
              }}
            >
              {activeService.btnText}
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side: Service Vertical Tabs */}
      <div className="service-tabs-panel" data-delay="0.15s">
        {servicesData.map((service, idx) => (
          <div
            key={service.id}
            className={`service-tab-item ${idx === activeIdx ? 'active' : ''}`}
            onClick={() => handleTabClick(idx)}
            style={{ cursor: 'pointer' }}
          >
            <div className="tab-header-row">
              <div className="tab-title-wrap">
                <span className="tab-number">0{service.index + 1}</span>
                <span className="tab-title">{service.title}</span>
              </div>
              <span className="tab-icon">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
            <div className="tab-detail-content">
              <p className="tab-detail-desc">{service.desc}</p>
              <ul className="tab-detail-bullets">
                {service.bullets.map((bullet, bIdx) => (
                  <li key={bIdx}>
                    <i className="fa-regular fa-circle-check"></i> {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
