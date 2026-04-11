
import React from 'react';

interface CityBadgeProps {
  city: string;
  active?: boolean;
  onClick?: () => void;
}

const CityBadge: React.FC<CityBadgeProps> = ({ city, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-5 py-2.5 text-xs font-mono uppercase tracking-widest transition-all duration-200 ${
        active
          ? 'bg-[#D4A843] text-[#0D0B09] font-semibold'
          : 'bg-transparent text-[#7A7167] border border-[#2E2820] hover:border-[#D4A843]/50 hover:text-[#D4A843]'
      }`}
    >
      {city}
    </button>
  );
};

export default CityBadge;
