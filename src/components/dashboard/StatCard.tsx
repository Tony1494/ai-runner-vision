
import { Info } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
  change?: number;
  trend?: 'up' | 'down' | 'neutral';
  tooltip?: string;
  className?: string;
  style?: React.CSSProperties;
}

const StatCard = ({ 
  title, 
  value, 
  unit, 
  icon, 
  change,
  trend = 'neutral',
  tooltip,
  className,
  style
}: StatCardProps) => {
  // Determine colors based on trend
  const trendColors = {
    up: "text-runner-success",
    down: trend === 'down' && title.includes("FC") ? "text-runner-success" : "text-runner-energy",
    neutral: "text-muted-foreground"
  };
  
  // Determine icons based on trend
  const trendIcons = {
    up: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    down: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    neutral: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  return (
    <div 
      className={cn(
        "glass-card p-6 flex flex-col space-y-3 hover-lift",
        className
      )}
      style={style}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <h3 className="font-medium text-muted-foreground">{title}</h3>
          {tooltip && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="ml-1 text-muted-foreground/70 hover:text-muted-foreground">
                    <Info size={14} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs max-w-[200px]">{tooltip}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-runner/10 to-runner-accent/10 flex items-center justify-center text-runner">
          {icon}
        </div>
      </div>
      
      <div className="flex items-baseline space-x-2">
        <span className="text-3xl font-bold bg-gradient-to-r from-runner-dark to-runner bg-clip-text text-transparent">
          {value}
        </span>
        {unit && <span className="text-muted-foreground text-sm">{unit}</span>}
      </div>
      
      {change !== undefined && (
        <div className={cn(
          "text-sm flex items-center space-x-1",
          trendColors[trend]
        )}>
          {trendIcons[trend]}
          <span>{Math.abs(change)}% rispetto alla settimana scorsa</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
