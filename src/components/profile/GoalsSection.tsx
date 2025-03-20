
import React from 'react';
import { Calendar, Flag, Timer, Medal, ArrowRight } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface Goal {
  id: number;
  title: string;
  type: 'race' | 'performance' | 'training' | 'habit';
  target: string;
  deadline: string;
  daysLeft: number;
  progress: number;
  readiness: number;
}

interface GoalsSectionProps {
  goals: Goal[];
  className?: string;
}

const GoalsSection = ({ goals, className }: GoalsSectionProps) => {
  // Ordina gli obiettivi per deadline più vicina
  const sortedGoals = [...goals].sort((a, b) => a.daysLeft - b.daysLeft);

  const goalTypeIcons = {
    race: <Flag size={16} />,
    performance: <Timer size={16} />,
    training: <Calendar size={16} />,
    habit: <Medal size={16} />,
  };

  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-medium">Prossimi Obiettivi</h3>
        <button className="text-xs px-3 py-1 bg-runner/10 text-runner rounded-full">
          Gestisci obiettivi
        </button>
      </div>

      <div className="space-y-6">
        {sortedGoals.map((goal) => (
          <div key={goal.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center">
                <div className={cn(
                  "w-8 h-8 rounded-full flex items-center justify-center mr-3",
                  goal.type === 'race' ? "bg-runner/10 text-runner" :
                  goal.type === 'performance' ? "bg-amber-100 text-amber-800" :
                  goal.type === 'training' ? "bg-green-100 text-green-800" :
                  "bg-purple-100 text-purple-800"
                )}>
                  {goalTypeIcons[goal.type]}
                </div>
                <div>
                  <h4 className="font-medium">{goal.title}</h4>
                  <p className="text-sm text-muted-foreground">{goal.target}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">
                  {goal.daysLeft > 0 ? `${goal.daysLeft} giorni rimasti` : "Oggi!"}
                </div>
                <p className="text-xs text-muted-foreground">{goal.deadline}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Progresso</span>
                  <span>{goal.progress}%</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Stato di preparazione</span>
                  <span className={cn(
                    goal.readiness >= 80 ? "text-green-600" :
                    goal.readiness >= 60 ? "text-emerald-500" :
                    goal.readiness >= 40 ? "text-amber-500" :
                    "text-red-500"
                  )}>
                    {goal.readiness}%
                  </span>
                </div>
                <Progress 
                  value={goal.readiness} 
                  className={cn(
                    "h-2",
                    goal.readiness >= 80 ? "bg-green-100" :
                    goal.readiness >= 60 ? "bg-emerald-100" :
                    goal.readiness >= 40 ? "bg-amber-100" :
                    "bg-red-100"
                  )}
                />
              </div>
            </div>
          </div>
        ))}

        {goals.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
              <Flag size={24} className="text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Nessun obiettivo impostato</p>
            <button className="mt-4 text-sm text-runner hover:underline flex items-center justify-center mx-auto">
              <span>Crea il tuo primo obiettivo</span>
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalsSection;
