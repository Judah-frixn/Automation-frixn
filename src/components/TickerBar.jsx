import React from 'react';

const tickerItems = [
  '⚡ Less Manual Work',
  '🚀 Faster Execution',
  '👁 Better Visibility',
  '🤖 AI-Powered Flows',
  '🔁 Zero Human Error',
  '📈 Revenue Growth',
];

export default function TickerBar() {
  // Duplicate items for seamless loop
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker-bar" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, idx) => (
          <span className="ticker-item" key={idx}>
            {item}
            <span className="ticker-sep">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
