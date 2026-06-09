import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';

export default function Utilities() {
  const [activeTab, setActiveTab] = useState('tds-rates');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hashVal = location.hash.substring(1);
      const validTabs = ['tds-rates', 'it-slabs', 'depreciation', 'gst-rates'];
      if (validTabs.includes(hashVal)) {
        setActiveTab(hashVal);
        const element = document.getElementById(hashVal);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    }
  }, [location]);

  return (
    <>
      <PageHero
        title="Tax Reference Utilities & Rate Charts"
        subtitle="Quick-access TDS rate chart, Income Tax slabs, depreciation rates, and other essential reference tables for FY 2025-26."
        bgText="Ref."
        breadcrumbs={[
          { label: 'Knowledge Bank', path: '/knowledge-bank' },
          { label: 'Utilities' }
        ]}
      />

      <section className="reveal">
        <div className="section-container">
          <div className="utilities-tabs">
            <button
              className={`filter-tab ${activeTab === 'tds-rates' ? 'active' : ''}`}
              onClick={() => setActiveTab('tds-rates')}
            >
              TDS Rate Chart
            </button>
            <button
              className={`filter-tab ${activeTab === 'it-slabs' ? 'active' : ''}`}
              onClick={() => setActiveTab('it-slabs')}
            >
              IT Slab Rates
            </button>
            <button
              className={`filter-tab ${activeTab === 'depreciation' ? 'active' : ''}`}
              onClick={() => setActiveTab('depreciation')}
            >
              Depreciation Rates
            </button>
            <button
              className={`filter-tab ${activeTab === 'gst-rates' ? 'active' : ''}`}
              onClick={() => setActiveTab('gst-rates')}
            >
              GST Rate Chart
            </button>
          </div>

          {/* TDS Rates */}
          {activeTab === 'tds-rates' && (
            <div className="utility-section active" id="tds-rates">
              <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>TDS Rate Chart — FY 2025-26</h3>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Section</th>
                      <th>Nature of Payment</th>
                      <th>Threshold (₹)</th>
                      <th>Rate (Resident)</th>
                      <th>Rate (NRI)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>192</td>
                      <td>Salary</td>
                      <td>As per slab</td>
                      <td>Per slab rate</td>
                      <td>Per slab</td>
                    </tr>
                    <tr>
                      <td>193</td>
                      <td>Interest on Securities</td>
                      <td>5,000</td>
                      <td>10%</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>194</td>
                      <td>Dividend</td>
                      <td>5,000</td>
                      <td>10%</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>194A</td>
                      <td>Interest (other than securities)</td>
                      <td>40,000 (banks)</td>
                      <td>10%</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>194B</td>
                      <td>Lottery / Card Game Winnings</td>
                      <td>10,000</td>
                      <td>30%</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>194C</td>
                      <td>Payment to Contractors</td>
                      <td>30,000 per time</td>
                      <td>1% (Ind.) / 2% (Co.)</td>
                      <td>—</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>194D</td>
                      <td>Insurance Commission</td>
                      <td>15,000</td>
                      <td>5%</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>194G</td>
                      <td>Commission on Lottery</td>
                      <td>15,000</td>
                      <td>5%</td>
                      <td>5%</td>
                    </tr>
                    <tr>
                      <td>194H</td>
                      <td>Commission / Brokerage</td>
                      <td>15,000</td>
                      <td>5%</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>194I(a)</td>
                      <td>Rent of Plant & Machinery</td>
                      <td>2,40,000/yr</td>
                      <td>2%</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>194I(b)</td>
                      <td>Rent of Land / Building</td>
                      <td>2,40,000/yr</td>
                      <td>10%</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>194-IB</td>
                      <td>Rent paid by Individual (HUF)</td>
                      <td>50,000/mth</td>
                      <td>5%</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>194IA</td>
                      <td>Transfer of Immovable Property</td>
                      <td>50,00,000</td>
                      <td>1%</td>
                      <td>—</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>194J</td>
                      <td>Professional / Technical Fees</td>
                      <td>30,000</td>
                      <td>10% (Prof.) / 2% (Tech.)</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>194Q</td>
                      <td>Purchase of Goods</td>
                      <td>50,00,000</td>
                      <td>0.1%</td>
                      <td>—</td>
                    </tr>
                    <tr>
                      <td>195</td>
                      <td>Payments to Non-Residents</td>
                      <td>—</td>
                      <td>As per DTAA / 20%+</td>
                      <td>Per DTAA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '12px' }}>
                <strong>Note:</strong> Rates are basic TDS rates. Applicable surcharge and cess must be added for non-residents. TDS rates may differ under applicable DTAA. PAN non-availability attracts 20% or higher rates.
              </p>
            </div>
          )}

          {/* IT Slabs */}
          {activeTab === 'it-slabs' && (
            <div className="utility-section active" id="it-slabs">
              <h3 style={{ fontSize: '22px', marginBottom: '8px' }}>Income Tax Slab Rates — FY 2025-26 (AY 2026-27)</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', marginBottom: '20px' }}>For Individuals (Below 60 years) — Resident Indian</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div>
                  <h4 style={{ fontSize: '16px', marginBottom: '16px', fontWeight: 600 }}>New Regime (Default)</h4>
                  <div className="data-table-wrap">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Income Slab</th>
                          <th>Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Up to ₹3,00,000</td>
                          <td>Nil</td>
                        </tr>
                        <tr>
                          <td>₹3,00,001 – ₹7,00,000</td>
                          <td>5%</td>
                        </tr>
                        <tr>
                          <td>₹7,00,001 – ₹10,00,000</td>
                          <td>10%</td>
                        </tr>
                        <tr>
                          <td>₹10,00,001 – ₹12,00,000</td>
                          <td>15%</td>
                        </tr>
                        <tr>
                          <td>₹12,00,001 – ₹15,00,000</td>
                          <td>20%</td>
                        </tr>
                        <tr className="highlight-row">
                          <td>Above ₹15,00,000</td>
                          <td>30%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '8px' }}>
                    Standard deduction: ₹75,000. Rebate u/s 87A: Income up to ₹7 lakh → Zero tax.
                  </p>
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', marginBottom: '16px', fontWeight: 600 }}>Old Regime (Optional)</h4>
                  <div className="data-table-wrap">
                    <table className="data-table">
                      <thead>
                        <tr>
                          <th>Income Slab</th>
                          <th>Tax Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Up to ₹2,50,000</td>
                          <td>Nil</td>
                        </tr>
                        <tr>
                          <td>₹2,50,001 – ₹5,00,000</td>
                          <td>5%</td>
                        </tr>
                        <tr>
                          <td>₹5,00,001 – ₹10,00,000</td>
                          <td>20%</td>
                        </tr>
                        <tr className="highlight-row">
                          <td>Above ₹10,00,000</td>
                          <td>30%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '8px' }}>
                    Deductions u/s 80C, 80D, HRA, LTA etc. available. Rebate u/s 87A: Income up to ₹5 lakh → Zero tax.
                  </p>
                </div>
              </div>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Basic Exemption Limit</th>
                      <th>Regime</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Individual (Below 60 yrs)</td>
                      <td>₹2,50,000 (Old) / ₹3,00,000 (New)</td>
                      <td>Both</td>
                    </tr>
                    <tr>
                      <td>Senior Citizen (60–79 yrs)</td>
                      <td>₹3,00,000</td>
                      <td>Old Regime only</td>
                    </tr>
                    <tr>
                      <td>Super Senior Citizen (80+)</td>
                      <td>₹5,00,000</td>
                      <td>Old Regime only</td>
                    </tr>
                    <tr>
                      <td>Domestic Company</td>
                      <td>—</td>
                      <td>25% / 22% (Sec 115BAB)</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>Health & Education Cess</td>
                      <td>4% on Tax + Surcharge</td>
                      <td>All</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Depreciation Rates */}
          {activeTab === 'depreciation' && (
            <div className="utility-section active" id="depreciation">
              <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>Depreciation Rate Chart — Income Tax Act</h3>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Block of Assets</th>
                      <th>Description</th>
                      <th>Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Block 1 (5%)</td>
                      <td>Buildings (Residential purpose)</td>
                      <td>5%</td>
                    </tr>
                    <tr>
                      <td>Block 2 (10%)</td>
                      <td>Buildings (Other than residential)</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Block 3 (40%)</td>
                      <td>Temporary structures</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Block 4 (15%)</td>
                      <td>Plant & Machinery (General)</td>
                      <td>15%</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>Block 5 (30%)</td>
                      <td>Computers & Software</td>
                      <td>40%</td>
                    </tr>
                    <tr>
                      <td>Block 6 (60%)</td>
                      <td>Motor Vehicles used for hire</td>
                      <td>30%</td>
                    </tr>
                    <tr>
                      <td>Block 7 (15%)</td>
                      <td>Motor Vehicles (other)</td>
                      <td>15%</td>
                    </tr>
                    <tr>
                      <td>Block 8 (25%)</td>
                      <td>Furniture & Fixtures</td>
                      <td>10%</td>
                    </tr>
                    <tr>
                      <td>Block 9 (25%)</td>
                      <td>Ships</td>
                      <td>20%</td>
                    </tr>
                    <tr>
                      <td>Block 10 (40%)</td>
                      <td>Aeroplanes</td>
                      <td>40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '12px' }}>
                <strong>Note:</strong> WDV method applies. Assets used for less than 180 days in a year get 50% of the applicable rate. Additional depreciation (20%) for new plant/machinery for manufacturers.
              </p>
            </div>
          )}

          {/* GST Rates */}
          {activeTab === 'gst-rates' && (
            <div className="utility-section active" id="gst-rates">
              <h3 style={{ fontSize: '22px', marginBottom: '20px' }}>Key GST Rate Chart</h3>
              <div className="data-table-wrap">
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>GST Rate</th>
                      <th>Category of Goods / Services</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>0% (Exempt)</td>
                      <td>Fresh vegetables, milk, eggs, bread, curd, natural honey, books, newspapers</td>
                    </tr>
                    <tr>
                      <td>5%</td>
                      <td>Footwear (&lt;₹1000), apparel (&lt;₹1000), tea, coffee, spices, coal, medicines</td>
                    </tr>
                    <tr className="highlight-row">
                      <td>12%</td>
                      <td>Butter, cheese, dry fruits, packed fruit juice, umbrella, smartphones, hotels (&lt;₹7500/night)</td>
                    </tr>
                    <tr>
                      <td>18%</td>
                      <td>Most services, AC restaurants, IT services, financial services, soaps, shampoo, electronics</td>
                    </tr>
                    <tr>
                      <td>28%</td>
                      <td>Luxury cars, tobacco, cement, air conditioners, washing machines, paint, perfumes</td>
                    </tr>
                    <tr>
                      <td>Composition Scheme</td>
                      <td>Manufacturers (1%), Traders (1%), Restaurants (5%), Other services (6%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p style={{ fontSize: '12px', color: 'var(--color-muted)', marginTop: '12px' }}>
                <strong>Note:</strong> GST rates are indicative. Specific HSN/SAC codes may attract different rates. Check the official GST portal for current rates before making business decisions.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="typo-cta-section reveal">
        <span className="typo-cta-arrow">↗</span>
        <h2 className="typo-cta-headline">
          Need specific rate clarifications for your business? <a href="/contact" style={{ textDecoration: 'underline', textUnderlineOffset: '6px' }}>Ask our tax experts.</a>
        </h2>
      </section>
    </>
  );
}
