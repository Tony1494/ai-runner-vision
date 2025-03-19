
import React from 'react';
import { cn } from '@/lib/utils';

interface ChipProps {
  label: string;
  color?: 'blue' | 'green' | 'purple' | 'orange' | 'gray';
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
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
    gray: 'bg-gray-100 text-gray-800',
  };

  const sizeStyles = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1',
  };

  return (
    <span
      className={cn(
        'inline-block rounded-full font-medium',
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
