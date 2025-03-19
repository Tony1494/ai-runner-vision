
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
            'w-1/2 h-1/2 text-runner',
            animate && 'animate-pulse-light'
          )}
        >
          <path 
            d="M13.5 5.5C14.3284 5.5 15 4.82843 15 4C15 3.17157 14.3284 2.5 13.5 2.5C12.6716 2.5 12 3.17157 12 4C12 4.82843 12.6716 5.5 13.5 5.5Z" 
            fill="currentColor" 
          />
          <path 
            d="M6.5 19.5C6.5 20.3284 5.82843 21 5 21C4.17157 21 3.5 20.3284 3.5 19.5C3.5 18.6716 4.17157 18 5 18C5.82843 18 6.5 18.6716 6.5 19.5Z" 
            fill="currentColor" 
          />
          <path 
            d="M21 10.8182L17.4682 9.84091L14.5 13L12.5 8L8.18182 10.1818L7 14L11 16L15.5 14L17.4682 12.5L21 13.5V10.8182Z" 
            fill="currentColor" 
            className={animate ? 'animate-pulse' : ''}
          />
          <path 
            d="M10.5 16L8 21" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
          <path 
            d="M11.8182 7.5L9 10" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
          />
        </svg>
        
        {/* Pulse effect circles if animated */}
        {animate && (
          <>
            <div className="absolute inset-0 rounded-full bg-runner/10 animate-ping opacity-75"></div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-runner to-runner-accent opacity-20 animate-pulse"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default RunnerLogo;
