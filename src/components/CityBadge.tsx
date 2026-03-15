
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
      className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-medium transition-all ${
        active
          ? 'bg-[#5B8DEF] text-white'
          : 'bg-[#111111] text-[#888888] border border-[#222222] hover:border-[#5B8DEF] hover:text-[#5B8DEF]'
      }`}
    >
      {city}
    </button>
  );
};

export default CityBadge;
