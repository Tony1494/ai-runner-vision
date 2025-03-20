
import React from 'react';
import { TrendingUp, Info } from 'lucide-react';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from '@/components/ui/chart';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  Legend,
  RadialBarChart,
  RadialBar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from 'recharts';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const performanceData = [
  { name: 'Gen', vo2max: 48, fitness: 65, form: 52, stress: 48 },
  { name: 'Feb', vo2max: 49, fitness: 68, form: 58, stress: 52 },
  { name: 'Mar', vo2max: 50, fitness: 72, form: 62, stress: 60 },
  { name: 'Apr', vo2max: 48, fitness: 69, form: 58, stress: 70 },
  { name: 'Mag', vo2max: 51, fitness: 74, form: 64, stress: 64 },
  { name: 'Giu', vo2max: 53, fitness: 78, form: 69, stress: 58 },
  { name: 'Lug', vo2max: 52, fitness: 76, form: 67, stress: 62 },
];

const runningSignatureData = [
  { subject: 'Resistenza', A: 85, fullMark: 100 },
  { subject: 'Velocità', A: 65, fullMark: 100 },
  { subject: 'Forza', A: 70, fullMark: 100 },
  { subject: 'Tecnica', A: 78, fullMark: 100 },
  { subject: 'Efficienza', A: 82, fullMark: 100 },
  { subject: 'Recupero', A: 68, fullMark: 100 },
];

const chartConfig = {
  vo2max: { label: 'VO2max', color: '#9b87f5' },
  fitness: { label: 'Fitness', color: '#22c55e' },
  form: { label: 'Forma', color: '#3b82f6' },
  stress: { label: 'Stress', color: '#f97316' },
};

const PerformanceTrends = () => {
  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <TrendingUp size={20} className="text-runner" />
          <h3 className="text-lg font-medium">Trend Prestazioni</h3>
        </div>
        <div className="flex items-center">
          <select className="text-sm px-3 py-1 border border-border rounded focus:outline-none focus:ring-1 focus:ring-runner">
            <option>Ultimi 6 mesi</option>
            <option>Ultimo anno</option>
            <option>Tutto</option>
          </select>
        </div>
      </div>
      
      <div className="space-y-8">
        <div>
          <div className="flex items-center mb-3">
            <h4 className="text-sm font-medium">Metriche di fitness</h4>
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger asChild>
                  <button className="ml-1 text-muted-foreground/70 hover:text-muted-foreground">
                    <Info size={14} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs max-w-[300px]">
                    VO2max: Indicatore di capacità aerobica<br/>
                    Fitness: Capacità complessiva accumulata<br/>
                    Forma: Bilanciamento tra fitness e fatica<br/>
                    Stress: Carico di allenamento percepito
                  </p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          </div>
          
          <div className="h-64">
            <ChartContainer
              config={chartConfig}
              className="w-full"
            >
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tickMargin={10} />
                <YAxis tickMargin={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line type="monotone" dataKey="vo2max" stroke="var(--color-vo2max)" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="fitness" stroke="var(--color-fitness)" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="form" stroke="var(--color-form)" strokeWidth={2} dot={{ r: 4 }} />
                <Line type="monotone" dataKey="stress" stroke="var(--color-stress)" strokeWidth={2} dot={{ r: 4 }} />
                <ChartLegend content={<ChartLegendContent />} />
              </LineChart>
            </ChartContainer>
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-3">
            <h4 className="text-sm font-medium">Running Signature™</h4>
            <TooltipProvider>
              <UITooltip>
                <TooltipTrigger asChild>
                  <button className="ml-1 text-muted-foreground/70 hover:text-muted-foreground">
                    <Info size={14} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-xs max-w-[300px]">
                    La tua impronta di corsa unica che evidenzia punti di forza e aree di miglioramento
                  </p>
                </TooltipContent>
              </UITooltip>
            </TooltipProvider>
          </div>
          
          <div className="h-72 flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart outerRadius={90} data={runningSignatureData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <PolarRadiusAxis domain={[0, 100]} tick={{ fill: '#64748b' }} />
                <Radar
                  name="Runner"
                  dataKey="A"
                  stroke="#9b87f5"
                  fill="#9b87f5"
                  fillOpacity={0.6}
                />
                <Tooltip />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceTrends;
