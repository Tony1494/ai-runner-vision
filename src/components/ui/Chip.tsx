
import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  label: string;
  color?: 'purple' | 'orange' | 'green' | 'gradient' | 'gray' | 'energy' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Chip = ({ 
  label, 
  color = 'purple', 
  size = 'md',
  className 
}: ChipProps) => {
  const colorStyles = {
    purple: 'bg-runner/10 text-runner-dark',
    orange: 'bg-runner-energy/10 text-runner-energy',
    green: 'bg-runner-success/10 text-runner-success',
    gradient: 'bg-gradient-to-r from-runner to-runner-energy text-white',
    gray: 'bg-gray-100 text-gray-800',
    energy: 'bg-gradient-to-r from-runner-energy to-runner-warning text-white',
    accent: 'bg-gradient-to-r from-runner to-runner-accent text-white',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-block rounded-full font-medium shadow-sm',
        colorStyles[color],
        sizeStyles[size],
        className
      )}
    >
      {label}
    </span>
  );
};

export default Chip;
