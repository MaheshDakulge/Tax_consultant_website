import React from 'react';

export default function AnnouncementTicker() {
  const tickerText = "📢 ITR Filing Deadline: July 31, 2025 | New GST Circular Released | Advance Tax Due: June 15, 2025 | Budget 2025 Highlights Available | Free ITR Camp — June 15 at Nanded Office →";

  return (
    <div className="ticker-wrap">
      <div className="ticker-content">
        {tickerText} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {tickerText} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}
