import React from 'react';
import { IMAGES } from '../../constants/images';
import { GUILD_INFO } from '../../constants/guild';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={IMAGES.LOGO} 
        alt={GUILD_INFO.NAME}
        className="w-8 h-8 object-contain"
      />
      {showText && (
        <span className="font-bold text-xl bg-gradient-to-r from-cyan-300 to-indigo-300 bg-clip-text text-transparent">
          {GUILD_INFO.NAME}
        </span>
      )}
    </div>
  );
}