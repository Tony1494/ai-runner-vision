
import React from 'react';
import {
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { Info } from 'lucide-react';
import { Tooltip as UITooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface RunnerDNAChartProps {
  data: {
    subject: string;
    value: number;
    fullMark: number;
    tooltip: string;
  }[];
  className?: string;
}

const RunnerDNAChart = ({ data, className }: RunnerDNAChartProps) => {
  return (
    <div className={className}>
      <div className="flex items-center mb-3">
        <h4 className="text-base font-medium">Runner DNA™</h4>
        <TooltipProvider>
          <UITooltip>
            <TooltipTrigger asChild>
              <button className="ml-1 text-muted-foreground/70 hover:text-muted-foreground">
                <Info size={14} />
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs max-w-[300px]">
                La tua firma di corsa unica che evidenzia le tue caratteristiche distintive come runner
              </p>
            </TooltipContent>
          </UITooltip>
        </TooltipProvider>
      </div>
      
      <div className="h-80 mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
            <PolarRadiusAxis domain={[0, 100]} tick={{ fill: '#64748b' }} />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-white p-2 border border-gray-200 shadow-md rounded-md">
                      <p className="font-medium">{data.subject}</p>
                      <p className="text-sm text-muted-foreground">{data.tooltip}</p>
                      <p className="font-bold text-runner">
                        {data.value}/100
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Radar
              name="Runner"
              dataKey="value"
              stroke="#9b87f5"
              fill="#9b87f5"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RunnerDNAChart;
