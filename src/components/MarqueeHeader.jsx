import React from 'react';
import './MarqueeHeader.css';

function MarqueeHeader() {
  const announcements = [
    { symbol: '🌿', text: 'International Trading Co.' },
    { symbol: '❄️', text: 'Premium Camphor Manufacturers' },
    { symbol: '✨', text: 'Pure & Natural Camphor Products' },
    { symbol: '🌱', text: 'Quality Since 1960' },
    { symbol: '💫', text: 'Best In Sangli' }
  ];

  return (
    <div className="marquee-header">
      <div className="marquee-container">
        <div className="marquee-content">
          {[...announcements, ...announcements].map((item, index) => (
            <React.Fragment key={index}>
              <span className="marquee-item">
                <span className="marquee-symbol">{item.symbol}</span>
                {' ' + item.text}
              </span>
              <span className="marquee-separator">|</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarqueeHeader;