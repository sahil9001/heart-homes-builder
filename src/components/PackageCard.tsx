
import React from 'react';

interface PackageCardProps {
  tier: string;
  rate: number;
  features: string[];
  recommended?: boolean;
  type: 'build' | 'renovate';
}

const PackageCard: React.FC<PackageCardProps> = ({
  tier,
  rate,
  features,
  recommended = false,
  type
}) => {
  return (
    <div className={`relative flex flex-col h-full transition-all duration-300 group ${
      recommended
        ? 'bg-[#D4A843] text-[#0D0B09]'
        : 'bg-[#161310] border border-[#2E2820] hover:border-[#D4A843]/40'
    }`}>
      {recommended && (
        <div className="absolute -top-px left-0 right-0 h-px bg-[#E8C56A]" />
      )}

      {/* Header */}
      <div className={`p-8 border-b ${recommended ? 'border-[#B88D2E]/40' : 'border-[#2E2820]'}`}>
        {recommended && (
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#0D0B09]/70 bg-[#0D0B09]/10 px-2 py-1">Most Popular</span>
          </div>
        )}
        <div className="flex items-start justify-between">
          <div>
            <h3 className={`font-display font-bold text-2xl ${recommended ? 'text-[#0D0B09]' : 'text-[#EDE8DE]'}`}>
              {tier}
            </h3>
            <p className={`font-mono text-xs uppercase tracking-wider mt-1 ${recommended ? 'text-[#0D0B09]/60' : 'text-[#5A5249]'}`}>
              {type === 'build' ? 'New Construction' : 'Renovation Package'}
            </p>
          </div>
          <div className="text-right">
            <div className={`font-display font-bold text-4xl leading-none ${recommended ? 'text-[#0D0B09]' : 'text-[#EDE8DE]'}`}>
              ₹{rate.toLocaleString()}
            </div>
            <div className={`font-mono text-xs mt-1 ${recommended ? 'text-[#0D0B09]/60' : 'text-[#5A5249]'}`}>
              per sq ft
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="p-8 flex-1">
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                recommended ? 'bg-[#0D0B09]/15' : 'bg-[#D4A843]/10'
              }`}>
                <svg
                  className={`w-3 h-3 ${recommended ? 'text-[#0D0B09]' : 'text-[#D4A843]'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className={`text-sm leading-relaxed ${recommended ? 'text-[#0D0B09]/85' : 'text-[#7A7167]'}`}>
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <div className="p-8 pt-0">
        <button
          onClick={() => window.location.href = '/contact'}
          className={`w-full py-4 text-xs font-semibold uppercase tracking-widest transition-all duration-200 ${
            recommended
              ? 'bg-[#0D0B09] text-[#D4A843] hover:bg-[#1E1A16]'
              : 'border border-[#D4A843] text-[#D4A843] hover:bg-[#D4A843] hover:text-[#0D0B09]'
          }`}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
