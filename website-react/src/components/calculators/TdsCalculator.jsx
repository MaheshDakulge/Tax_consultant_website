import React, { useState } from 'react';

export default function TdsCalculator() {
  const [payment, setPayment] = useState('');
  const [rate, setRate] = useState('10');
  const [result, setResult] = useState(null);

  const calculate = (e) => {
    e.preventDefault();
    const pay = parseFloat(payment) || 0;
    const r = parseFloat(rate) || 0;

    const tds = (pay * r) / 100;
    const net = pay - tds;

    setResult({
      tds: tds.toFixed(2),
      net: net.toFixed(2)
    });
  };

  const formatCurrency = (val) => {
    if (!val) return '—';
    return '₹' + parseFloat(val).toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="calc-widget" id="tds-calc">
      <div className="calc-widget-header">
        <div className="calc-icon">
          <i className="fa-solid fa-percent"></i>
        </div>
        <div>
          <h3>TDS Calculator</h3>
          <p>Quick TDS deduction estimate</p>
        </div>
      </div>
      <form onSubmit={calculate}>
        <div className="calc-field">
          <label className="calc-label" htmlFor="tds-payment">Payment Amount (₹)</label>
          <input
            className="calc-input"
            type="number"
            id="tds-payment"
            placeholder="Enter gross payment"
            min="0"
            step="any"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            required
          />
        </div>
        <div className="calc-field">
          <label className="calc-label" htmlFor="tds-rate">TDS Rate (%)</label>
          <select
            className="calc-select"
            id="tds-rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          >
            <option value="1">1% – Property purchase (Sec 194IA)</option>
            <option value="2">2% – Contractors / Tech Services (Sec 194C/194J)</option>
            <option value="5">5% – Rent on Land/Building (Sec 194-IB)</option>
            <option value="10">10% – Salary/Professional Fee (Sec 194J)</option>
            <option value="20">20% – Winnings / Default rate</option>
            <option value="30">30% – Non-residents (Sec 195)</option>
          </select>
        </div>
        <button type="submit" className="calc-btn">Calculate TDS</button>
      </form>
      <div className={`calc-result ${result ? 'visible' : ''}`} id="tds-result">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', textAlign: 'center' }}>
          <div>
            <div className="calc-result-label">TDS Deducted</div>
            <div className="calc-result-value">
              {result ? formatCurrency(result.tds) : '—'}
            </div>
          </div>
          <div>
            <div className="calc-result-label">Net Payment</div>
            <div className="calc-result-value">
              {result ? formatCurrency(result.net) : '—'}
            </div>
          </div>
        </div>
        <p className="calc-result-note" style={{ marginTop: '10px', textAlign: 'center' }}>
          Threshold limits and surcharge not factored. Use for estimate only.
        </p>
      </div>
    </div>
  );
}
