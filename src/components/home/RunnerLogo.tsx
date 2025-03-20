
import React from 'react';
import { cn } from '@/lib/utils';

interface RunnerLogoProps {
  className?: string;
  animate?: boolean;
}

const RunnerLogo = ({ className, animate = false }: RunnerLogoProps) => {
  return (
    <div className={cn('relative', className)}>
      {/* Outer circle with gradient */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-runner via-runner-accent to-runner-energy opacity-20 blur-md" />
      
      {/* Main logo container */}
      <div className="relative flex items-center justify-center w-full h-full rounded-full bg-white shadow-md">
        {/* Runner silhouette */}
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className={cn(
            'w-3/5 h-3/5 text-runner',
            animate && 'animate-pulse-light'
          )}
        >
          {/* Head */}
          <circle cx="14" cy="4" r="2" fill="currentColor" />
          
          {/* Body parts */}
          <path 
            d="M12 7L15 10L18 8.5L21 10.5L19 13L15 11.5L13 15L9 12" 
            fill="currentColor" 
            className={animate ? 'animate-pulse' : ''}
          />
          
          {/* Left leg */}
          <path 
            d="M9 12L7 17L4 19.5" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Right leg */}
          <path 
            d="M13 15L12 19L14 21" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          
          {/* Energy wave lines */}
          <path 
            d="M21 6L23 6M21 8L22 8M21 4L22 4" 
            stroke="#F97316" 
            strokeWidth="1.5" 
            strokeLinecap="round"
            className={animate ? 'animate-pulse' : ''}
          />
          
          {/* Left foot */}
          <circle cx="3.5" cy="20.5" r="1" fill="currentColor" />
          
          {/* Right foot */}
          <circle cx="14.5" cy="21.5" r="1" fill="currentColor" />
        </svg>
        
        {/* Pulse effect circles if animated */}
        {animate && (
          <>
            <div className="absolute inset-0 rounded-full bg-runner/10 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-runner to-runner-energy opacity-20 animate-pulse"></div>
          </>
        )}
      </div>
      
      {/* Speed lines if animated */}
      {animate && (
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
          <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
            <path 
              d="M1 0L1 24M6 4L6 20M11 8L11 16" 
              stroke="url(#speed-gradient)" 
              strokeWidth="2" 
              strokeLinecap="round"
              className="animate-pulse" 
            />
            <defs>
              <linearGradient id="speed-gradient" x1="6" y1="0" x2="6" y2="24" gradientUnits="userSpaceOnUse">
                <stop stopColor="#8B5CF6" />
                <stop offset="1" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      )}
    </div>
  );
};

export default RunnerLogo;
