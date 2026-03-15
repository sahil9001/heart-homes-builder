
import React from 'react';
import { CheckCircle } from 'lucide-react';

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
    <div className={`relative overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(91,141,239,0.2)] flex flex-col ${
      recommended
        ? 'bg-[#111111] border-[#5B8DEF]'
        : 'bg-[#111111] border-[#222222]'
    }`}>
      {recommended && (
        <div className="absolute top-5 right-0 bg-[#5B8DEF] text-white px-3 py-1 text-sm font-medium rounded-l-lg">
          Most Popular
        </div>
      )}

      <div className="p-6 border-b border-[#222222]">
        <h3 className="text-xl font-display font-medium text-[#FAFAFA] mb-1">{tier}</h3>
        <p className="text-[#888888] text-sm">
          {type === 'build' ? 'New Construction Package' : 'Renovation Package'}
        </p>
        <div className="mt-4">
          <span className="text-4xl font-display font-bold text-[#FAFAFA]">₹{rate.toLocaleString()}</span>
          <span className="text-[#888888] text-sm"> / sq ft</span>
        </div>
      </div>

      <div className="p-6 flex-1">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-[#5B8DEF] mr-2 mt-0.5 flex-shrink-0" />
              <span className="text-[#FAFAFA]/80">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 pt-0">
        <button
          className={`w-full py-3 px-6 rounded-lg font-medium transition-all ${
            recommended
              ? 'bg-[#5B8DEF] hover:bg-[#7AAAF5] text-white'
              : 'border border-[#5B8DEF] text-[#5B8DEF] hover:bg-[#5B8DEF]/10'
          }`}
          onClick={() => window.location.href = '/contact'}
        >
          Get Quote
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
