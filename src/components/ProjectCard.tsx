
import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  title: string;
  location: string;
  area: string;
  slug: string;
  thumbnail: string;
  package: string;
}

const packageColors: Record<string, string> = {
  Starter: '#7A7167',
  Classic: '#D4A843',
  Premium: '#E8C56A',
  Plus: '#D4A843',
  Lite: '#7A7167',
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  location,
  area,
  slug,
  thumbnail,
  package: packageType
}) => {
  const accentColor = packageColors[packageType] || '#D4A843';

  return (
    <Link to={`/projects/${slug}`} className="block group overflow-hidden relative bg-[#161310]">
      {/* Image */}
      <div className="relative overflow-hidden" style={{ paddingBottom: '70%' }}>
        <img
          src={thumbnail}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0B09] via-[#0D0B09]/30 to-transparent" />

        {/* Package badge */}
        <div className="absolute top-4 left-4">
          <span
            className="font-mono text-[10px] uppercase tracking-[0.2em] px-2 py-1"
            style={{ color: accentColor, border: `1px solid ${accentColor}40`, backgroundColor: '#0D0B0980' }}
          >
            {packageType}
          </span>
        </div>

        {/* Hover reveal arrow */}
        <div className="absolute top-4 right-4 w-8 h-8 border border-[#D4A843] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-[#D4A843]">
          <svg className="w-4 h-4 text-[#0D0B09]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="font-display font-bold text-[#EDE8DE] text-lg leading-tight mb-1">{title}</h3>
          <div className="flex items-center gap-3">
            <span className="text-[#7A7167] text-xs font-mono flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {location}
            </span>
            <span className="text-[#5A5249] text-xs font-mono">·</span>
            <span className="text-[#7A7167] text-xs font-mono">{area}</span>
          </div>
        </div>
      </div>

      {/* Bottom border that fills on hover */}
      <div className="h-0.5 bg-[#2E2820] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#D4A843] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
      </div>
    </Link>
  );
};

export default ProjectCard;
