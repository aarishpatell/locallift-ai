import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <Link to="/" aria-label="LocalLift AI Homepage">
      <svg
        className={className || "h-12 w-auto"}
        viewBox="0 0 320 60"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Icon Group */}
        <g>
          {/* Building shapes - using different shades of purple that adapt to the theme */}
          <path className="fill-purple-500 dark:fill-purple-600/80" d="M20,55 V30 L50,18 V43 Z" />
          <path className="fill-purple-600 dark:fill-purple-700/80" d="M48,48 V23 L78,11 V36 Z" />

          {/* Arrow - using a primary purple color that adapts to the theme */}
          <path
            className="fill-purple-700 dark:fill-purple-500"
            d="M15,58 C40,58 80,50 95,15 L108,5 L85,30 C75,45 45,55 15,58 Z"
          />

          {/* Network on Arrow */}
          <g className="stroke-slate-900 dark:stroke-slate-200/90" strokeWidth="1.5" strokeLinecap="round">
            <path d="M30,53 L48,49 L65,42 M48,49 L60,46" />
            <path d="M65,42 L80,30 L93,20 M80,30 L88,35" />
          </g>
          <g className="fill-slate-900 dark:fill-slate-200/90">
            <circle cx="30" cy="53" r="2.5" />
            <circle cx="48" cy="49" r="3" />
            <circle cx="65" cy="42" r="2.5" />
            <circle cx="80" cy="30" r="3" />
            <circle cx="93" cy="20" r="2.5" />
            <circle cx="60" cy="46" r="2" />
            <circle cx="88" cy="35" r="2" />
          </g>
        </g>
        
        {/* Text - "LocalLift AI" with custom colors */}
        <text
          x="125"
          y="35"
          dominantBaseline="middle"
          style={{ fontFamily: 'Inter, sans-serif' }}
          className="text-[32px] font-bold"
        >
          <tspan className="fill-purple-800 dark:fill-purple-300">LocalLift</tspan>
          <tspan xmlSpace="preserve" className="fill-cyan-500 dark:fill-cyan-400"> AI</tspan>
        </text>
      </svg>
    </Link>
  );
};

export default Logo;