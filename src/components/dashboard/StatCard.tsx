
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon: React.ReactNode;
  change?: number;
  className?: string;
}

const StatCard = ({ 
  title, 
  value, 
  unit, 
  icon, 
  change, 
  className 
}: StatCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 flex flex-col space-y-3 hover-lift",
        className
      )}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-muted-foreground">{title}</h3>
        <div className="w-10 h-10 rounded-full bg-runner/10 flex items-center justify-center text-runner">
          {icon}
        </div>
      </div>
      
      <div className="flex items-baseline space-x-2">
        <span className="text-3xl font-bold">{value}</span>
        {unit && <span className="text-muted-foreground text-sm">{unit}</span>}
      </div>
      
      {change !== undefined && (
        <div className={cn(
          "text-sm flex items-center space-x-1",
          change > 0 ? "text-green-600" : change < 0 ? "text-red-600" : "text-muted-foreground"
        )}>
          {change > 0 ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : change < 0 ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
          <span>{Math.abs(change)}% rispetto alla settimana scorsa</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;
