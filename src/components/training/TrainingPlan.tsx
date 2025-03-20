
import { useState } from 'react';
import { Calendar, Check, ChevronRight, Clock, Flag, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';
import Chip from '../ui/Chip';

interface TrainingDay {
  id: number;
  day: string;
  type: string;
  distance: number;
  duration: string;
  description: string;
  completed: boolean;
}

interface TrainingWeek {
  id: number;
  weekNumber: number;
  startDate: string;
  endDate: string;
  days: TrainingDay[];
  focusArea: string;
}

interface TrainingPlanProps {
  plan: {
    id: number;
    name: string;
    duration: number;
    goal: string;
    level: string;
    currentWeek: number;
    weeks: TrainingWeek[];
  };
  className?: string;
}

const TrainingPlan = ({ plan, className }: TrainingPlanProps) => {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(plan.currentWeek);
  
  const toggleWeek = (weekId: number) => {
    setExpandedWeek(expandedWeek === weekId ? null : weekId);
  };
  
  return (
    <div className={cn("glass-card overflow-hidden animate-fade-in", className)}>
      <div className="p-6 border-b border-border">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <p className="text-sm text-muted-foreground">Obiettivo: {plan.goal}</p>
          </div>
          <Chip 
            label={`Settimana ${plan.currentWeek}/${plan.duration}`} 
            color="purple"
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800">
              <Calendar size={16} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Durata</p>
              <p className="text-sm font-medium">{plan.duration} settimane</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-800">
              <Flag size={16} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Livello</p>
              <p className="text-sm font-medium">{plan.level}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-800">
              <Zap size={16} />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Focus attuale</p>
              <p className="text-sm font-medium">{plan.weeks[plan.currentWeek - 1]?.focusArea || "Base building"}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="divide-y divide-border">
        {plan.weeks.map((week) => (
          <div key={week.id}>
            <button
              onClick={() => toggleWeek(week.id)}
              className={cn(
                "w-full flex items-center justify-between p-4 hover:bg-blue-50/50 transition-colors",
                expandedWeek === week.id && "bg-blue-50/50"
              )}
            >
              <div className="flex items-center space-x-3">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center",
                  week.id === plan.currentWeek ? "bg-runner text-white" : "bg-gray-100 text-muted-foreground"
                )}>
                  {week.id}
                </div>
                <div className="text-left">
                  <p className="font-medium">Settimana {week.id}</p>
                  <p className="text-xs text-muted-foreground">{week.startDate} - {week.endDate}</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Chip 
                  label={week.focusArea} 
                  color={week.id === plan.currentWeek ? "purple" : "gray"} 
                  size="sm"
                />
                <ChevronRight 
                  size={18} 
                  className={cn(
                    "transition-transform duration-200",
                    expandedWeek === week.id && "rotate-90"
                  )} 
                />
              </div>
            </button>
            
            {expandedWeek === week.id && (
              <div className="p-4 bg-blue-50/30 animate-slide-down">
                {week.days.map((day) => (
                  <div 
                    key={day.id}
                    className={cn(
                      "flex items-center border-b border-border last:border-0 py-3",
                      day.completed && "opacity-70"
                    )}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                      day.completed ? "bg-green-100 text-green-800" : "bg-white text-muted-foreground border border-border"
                    )}>
                      {day.completed ? <Check size={16} /> : day.id}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{day.day}</p>
                          <p className="text-sm text-muted-foreground">{day.type}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm space-x-2">
                            <span className="flex items-center">
                              <Flag size={14} className="mr-1" />
                              {day.distance} km
                            </span>
                            <span className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              {day.duration}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingPlan;
