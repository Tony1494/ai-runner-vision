
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, TrendingUp, Clock, Info } from 'lucide-react';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface FitnessStateCardProps {
  fitnessScore: number;
  fatigueScore: number;
  formScore: number;
  readinessScore: number;
  peakDate: string;
  daysToGoal: number;
  fitnessData: {
    date: string;
    fitness: number;
    fatigue: number;
    form: number;
  }[];
  className?: string;
}

const FitnessStateCard = ({
  fitnessScore,
  fatigueScore,
  formScore,
  readinessScore,
  peakDate,
  daysToGoal,
  fitnessData,
  className,
}: FitnessStateCardProps) => {
  const formState = 
    formScore >= 20 ? "Eccellente" :
    formScore >= 10 ? "Ottima" :
    formScore >= 0 ? "Buona" :
    formScore >= -10 ? "Accettabile" :
    "Affaticamento";

  const stateColor = 
    formScore >= 20 ? "text-green-600" :
    formScore >= 10 ? "text-emerald-500" :
    formScore >= 0 ? "text-blue-500" :
    formScore >= -10 ? "text-amber-500" :
    "text-red-500";

  const readinessColor = 
    readinessScore >= 80 ? "text-green-600" :
    readinessScore >= 60 ? "text-emerald-500" :
    readinessScore >= 40 ? "text-amber-500" :
    "text-red-500";

  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="flex items-center mb-4">
        <Activity size={20} className="text-runner mr-2" />
        <h3 className="text-lg font-medium">Stato di Forma</h3>
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger asChild>
              <button className="ml-1 text-muted-foreground/70 hover:text-muted-foreground">
                <Info size={14} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs max-w-[300px]">
                Il tuo stato di forma attuale basato sull'equilibrio tra fitness e fatica accumulata.
                Il punteggio Form indica la tua capacità di performance in questo momento.
              </p>
            </TooltipContent>
          </UITooltip>
        </TooltipProvider>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <h4 className="font-medium text-sm">Bilanciamento Attuale</h4>
            <div className={cn("text-lg font-bold", stateColor)}>{formState}</div>
          </div>

          <div className="space-y-4 mb-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Fitness</span>
                <span className="font-medium">{fitnessScore}</span>
              </div>
              <Progress value={fitnessScore} className="h-2 bg-gray-100" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Fatica</span>
                <span className="font-medium">{fatigueScore}</span>
              </div>
              <Progress value={fatigueScore} className="h-2 bg-gray-100" />
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Form</span>
                <span className={cn("font-medium", stateColor)}>{formScore}</span>
              </div>
              <Progress 
                value={Math.max(0, formScore + 20)} 
                className="h-2 bg-gray-100" 
              />
            </div>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex justify-between items-baseline mb-1">
              <div className="flex items-center">
                <Clock size={16} className="mr-1 text-muted-foreground" />
                <span className="text-sm">Prossimo picco di forma</span>
              </div>
              <span className="font-medium">{peakDate}</span>
            </div>
            <div className="flex justify-between items-baseline">
              <div className="flex items-center">
                <TrendingUp size={16} className="mr-1 text-muted-foreground" />
                <span className="text-sm">Readiness oggi</span>
              </div>
              <span className={cn("font-medium", readinessColor)}>{readinessScore}%</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-muted-foreground mb-2">Trend ultimi 30 giorni</div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={fitnessData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="date" tick={false} />
                <YAxis tick={false} domain={['auto', 'auto']} />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
                          <p className="text-sm font-medium">{label}</p>
                          <p className="text-xs text-blue-500">Fitness: {payload[0].value}</p>
                          <p className="text-xs text-orange-500">Fatica: {payload[1].value}</p>
                          <p className="text-xs text-green-500">Form: {payload[2].value}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line type="monotone" dataKey="fitness" stroke="#3b82f6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="fatigue" stroke="#f97316" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="form" stroke="#22c55e" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-2 border-t border-border pt-4">
            <div className="text-sm text-center text-muted-foreground mb-2">
              {daysToGoal > 0 
                ? `${daysToGoal} giorni alla prossima gara`
                : "Nessuna gara pianificata"}
            </div>
            {daysToGoal > 0 && (
              <div className="mt-2">
                <Progress value={(30 - daysToGoal) / 30 * 100} className="h-1.5 bg-gray-100" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessStateCard;
