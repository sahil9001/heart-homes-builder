
import React from 'react';
import { motion } from 'motion/react';

type TileSize = 'sm' | 'md' | 'lg' | 'xl' | 'wide' | 'tall';

interface BentoTileProps {
  children: React.ReactNode;
  size?: TileSize;
  className?: string;
  onClick?: () => void;
}

const sizeClasses: Record<TileSize, string> = {
  sm: 'col-span-1 row-span-1',
  md: 'col-span-1 row-span-1',
  lg: 'col-span-1 md:col-span-2 row-span-1',
  xl: 'col-span-1 md:col-span-2 row-span-2',
  wide: 'col-span-1 md:col-span-3 row-span-1',
  tall: 'col-span-1 row-span-2',
};

const tileVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const BentoTile: React.FC<BentoTileProps> = ({
  children,
  size = 'md',
  className = '',
  onClick,
}) => {
  return (
    <motion.div
      variants={tileVariants}
      whileHover={{ y: -4 }}
      className={`
        ${sizeClasses[size]}
        bg-[#111111] border border-[#222222] rounded-2xl overflow-hidden
        transition-shadow duration-300 hover:shadow-[0_0_20px_rgba(91,141,239,0.2)]
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default BentoTile;
