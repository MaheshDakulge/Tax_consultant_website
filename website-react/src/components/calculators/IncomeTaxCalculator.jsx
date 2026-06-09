import React, { useState } from 'react';

export default function IncomeTaxCalculator() {
  const [income, setIncome] = useState('');
  const [regime, setRegime] = useState('new');
  const [deductions, setDeductions] = useState('');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const inc = parseFloat(income) || 0;
    const ded = parseFloat(deductions) || 0;
    let tax = 0;

    if (regime === 'new') {
      // New tax slabs for FY 2025-26
      if (inc <= 300000) tax = 0;
      else if (inc <= 700000) tax = (inc - 300000) * 0.05;
      else if (inc <= 1000000) tax = 20000 + (inc - 700000) * 0.10;
      else if (inc <= 1200000) tax = 50000 + (inc - 1000000) * 0.15;
      else if (inc <= 1500000) tax = 80000 + (inc - 1200000) * 0.20;
      else tax = 140000 + (inc - 1500000) * 0.30;

      // Section 87A rebate for New Regime up to 7 Lakhs taxable income
      if (inc <= 700000) {
        tax = 0;
      }
    } else {
      // Old Tax Regime with deductions & standard deduction of 50k
      const taxableIncome = Math.max(0, inc - ded - 50000);
      if (taxableIncome <= 250000) tax = 0;
      else if (taxableIncome <= 500000) tax = (taxableIncome - 250000) * 0.05;
      else if (taxableIncome <= 1000000) tax = 12500 + (taxableIncome - 500000) * 0.20;
      else tax = 112500 + (taxableIncome - 1000000) * 0.30;

      // Section 87A rebate for Old Regime up to 5 Lakhs taxable income
      if (taxableIncome <= 500000) {
        tax = 0;
      }
    }

    const cess = tax * 0.04;
    const totalTax = tax + cess;

    setResult({
      tax: tax.toFixed(0),
      cess: cess.toFixed(0),
      total: totalTax.toFixed(0)
    });
  };

  const formatCurrency = (val) => {
    if (!val) return '—';
    return '₹' + parseInt(val, 10).toLocaleString('en-IN');
  };

  return (
    <div className="calc-widget" id="tax-calc">
      <div className="calc-widget-header">
        <div className="calc-icon">
          <i className="fa-solid fa-file-invoice-dollar"></i>
        </div>
        <div>
          <h3>Income Tax Calculator</h3>
          <p>FY 2025-26 estimate</p>
        </div>
      </div>
      <form onSubmit={calculate}>
        <div className="calc-field">
          <label className="calc-label" htmlFor="tax-income">Annual Income (₹)</label>
          <input
            className="calc-input"
            type="number"
            id="tax-income"
            placeholder="Enter gross income"
            min="0"
            value={income}
            onChange={(e) => setIncome(e.target.value)}
            required
          />
        </div>
        <div className="calc-field">
          <label className="calc-label" htmlFor="tax-regime">Tax Regime</label>
          <select
            className="calc-select"
            id="tax-regime"
            value={regime}
            onChange={(e) => setRegime(e.target.value)}
          >
            <option value="new">New Regime (Default)</option>
            <option value="old">Old Regime</option>
          </select>
        </div>
        {regime === 'old' && (
          <div className="calc-field" id="deductions-field">
            <label className="calc-label" htmlFor="tax-deductions">
              Total Deductions under 80C, 80D etc. (₹)
            </label>
            <input
              className="calc-input"
              type="number"
              id="tax-deductions"
              placeholder="e.g. 150000"
              min="0"
              value={deductions}
              onChange={(e) => setDeductions(e.target.value)}
            />
          </div>
        )}
        <button type="submit" className="calc-btn">Calculate Tax</button>
      </form>
      <div className={`calc-result ${result ? 'visible' : ''}`} id="tax-result">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center' }}>
          <div>
            <div className="calc-result-label">Base Tax</div>
            <div className="calc-result-value" style={{ fontSize: '16px' }}>
              {result ? formatCurrency(result.tax) : '—'}
            </div>
          </div>
          <div>
            <div className="calc-result-label">+ Health Cess</div>
            <div className="calc-result-value" style={{ fontSize: '16px' }}>
              {result ? formatCurrency(result.cess) : '—'}
            </div>
          </div>
          <div>
            <div className="calc-result-label">Total Tax</div>
            <div className="calc-result-value" style={{ fontSize: '16px' }}>
              {result ? formatCurrency(result.total) : '—'}
            </div>
          </div>
        </div>
        <p className="calc-result-note" style={{ marginTop: '10px', textAlign: 'center' }}>
          Includes 4% health & education cess. Surcharge not included. Consult our CA for precise computation.
        </p>
      </div>
    </div>
  );
}
