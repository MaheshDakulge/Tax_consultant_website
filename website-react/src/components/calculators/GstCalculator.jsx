import React, { useState } from 'react';

export default function GstCalculator() {
  const [amount, setAmount] = useState('');
  const [rate, setRate] = useState('18');
  const [type, setType] = useState('exclusive');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const amt = parseFloat(amount) || 0;
    const r = parseFloat(rate) || 0;
    let base = 0;
    let gst = 0;
    let total = 0;

    if (type === 'exclusive') {
      base = amt;
      gst = (amt * r) / 100;
      total = base + gst;
    } else {
      total = amt;
      base = (amt * 100) / (100 + r);
      gst = total - base;
    }

    setResult({
      base: base.toFixed(2),
      gst: gst.toFixed(2),
      total: total.toFixed(2)
    });
  };

  const formatCurrency = (val) => {
    if (!val) return '—';
    return '₹' + parseFloat(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="calc-widget" id="gst-calc">
      <div className="calc-widget-header">
        <div className="calc-icon">
          <i className="fa-solid fa-receipt"></i>
        </div>
        <div>
          <h3>GST Calculator</h3>
          <p>Compute GST on any amount</p>
        </div>
      </div>
      <form onSubmit={calculate}>
        <div className="calc-field">
          <label className="calc-label" htmlFor="gst-amount">Amount (₹)</label>
          <input
            className="calc-input"
            type="number"
            id="gst-amount"
            placeholder="Enter amount"
            min="0"
            step="any"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="calc-field">
          <label className="calc-label" htmlFor="gst-rate">GST Rate (%)</label>
          <select
            className="calc-select"
            id="gst-rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option value="5">5% GST</option>
            <option value="12">12% GST</option>
            <option value="18">18% GST</option>
            <option value="28">28% GST</option>
          </select>
        </div>
        <div className="calc-field">
          <label className="calc-label" htmlFor="gst-type">Amount Type</label>
          <select
            className="calc-select"
            id="gst-type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="exclusive">Exclusive (Add GST)</option>
            <option value="inclusive">Inclusive (Extract GST)</option>
          </select>
        </div>
        <button type="submit" className="calc-btn">Calculate GST</button>
      </form>
      <div className={`calc-result ${result ? 'visible' : ''}`} id="gst-result">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px', textAlign: 'center' }}>
          <div>
            <div className="calc-result-label">Base Amount</div>
            <div className="calc-result-value" style={{ fontSize: '16px' }}>
              {result ? formatCurrency(result.base) : '—'}
            </div>
          </div>
          <div>
            <div className="calc-result-label">GST Amount</div>
            <div className="calc-result-value" style={{ fontSize: '16px' }}>
              {result ? formatCurrency(result.gst) : '—'}
            </div>
          </div>
          <div>
            <div className="calc-result-label">Total</div>
            <div className="calc-result-value" style={{ fontSize: '16px' }}>
              {result ? formatCurrency(result.total) : '—'}
            </div>
          </div>
        </div>
        <p className="calc-result-note" style={{ marginTop: '10px', textAlign: 'center' }}>
          Indicative estimate only. Consult our CA for precise computation.
        </p>
      </div>
    </div>
  );
}
