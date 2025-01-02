import React from 'react';

function MarqueeHeader() {
  const announcements = [
    { symbol: '🌿', text: 'International Trading Co.' },
    { symbol: '❄️', text: 'Premium Camphor Manufacturers' },
    { symbol: '✨', text: 'Pure & Natural Camphor Products' },
    { symbol: '🌱', text: 'Quality Since 1995' },
    { symbol: '💫', text: 'Worldwide Export Available' }
  ];

  return (
    <div className=" top-0 left-0 w-full bg-orange-50 z-50 border-b border-orange-100 overflow-hidden">
      <div className="flex items-center h-10">
        <div className="flex-1 overflow-hidden">
          <div className="animate-[marquee_20s_linear_infinite] inline-flex whitespace-nowrap">
            {[...announcements, ...announcements].map((item, index) => (
              <React.Fragment key={index}>
                <span className="mx-4 text-sm font-medium text-orange-700 hover:text-orange-800 transition-colors">
                  <span className="text-orange-500">{item.symbol}</span>
                  {' ' + item.text}
                </span>
                <span className="mx-2 text-orange-300">|</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarqueeHeader;

// Add this to your global CSS or Tailwind config
const style = document.createElement('style');
style.textContent = `
  @keyframes marquee {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;
document.head.appendChild(style);