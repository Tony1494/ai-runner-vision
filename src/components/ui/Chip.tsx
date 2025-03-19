
import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  label: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'gray' | 'energy' | 'accent';
  size?: 'sm' | 'md';
  className?: string;
}

const Chip = ({ 
  label, 
  color = 'blue', 
  size = 'md',
  className 
}: ChipProps) => {
  const colorStyles = {
    blue: 'bg-runner/10 text-runner-dark',
    green: 'bg-runner-success/10 text-runner-success',
    purple: 'bg-runner-accent/10 text-runner-accent',
    orange: 'bg-runner-energy/10 text-runner-energy',
    gray: 'bg-gray-100 text-gray-800',
    energy: 'bg-gradient-to-r from-runner-energy to-runner-warning text-white',
    accent: 'bg-gradient-to-r from-runner to-runner-accent text-white',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
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
