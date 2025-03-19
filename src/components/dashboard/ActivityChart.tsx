
import { useMemo } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  TooltipProps
} from 'recharts';
import { format, parseISO, subDays } from 'date-fns';
import { cn } from '@/lib/utils';

// Generiamo dati di esempio per 14 giorni
const generateData = () => {
  const data = [];
  const today = new Date();
  
  for (let i = 13; i >= 0; i--) {
    const date = subDays(today, i);
    data.push({
      date: date.toISOString(),
      distance: Math.random() * 10 + (i % 7 === 0 ? 0 : 2), // Meno o nessuna attività la domenica
      duration: Math.random() * 60 + 20,
    });
  }
  
  return data;
};

const CustomTooltip = ({ active, payload, label }: TooltipProps<number, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass-card p-4 rounded-lg shadow-md border border-white/20">
        <p className="font-medium mb-1">{format(parseISO(label), 'dd MMM')}</p>
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-runner">{payload[0].value?.toFixed(1)} km</span> 
          {' '}- {(payload[1].value as number).toFixed(0)} min
        </p>
      </div>
    );
  }

  return null;
};

const ActivityChart = () => {
  const data = useMemo(() => generateData(), []);

  return (
    <div className={cn("glass-card p-6 w-full animate-fade-in")} style={{ height: '400px' }}>
      <h3 className="text-lg font-medium mb-6">Attività recenti</h3>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
          >
            <defs>
              <linearGradient id="colorDistance" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#38BDF8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#818CF8" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#818CF8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis 
              dataKey="date" 
              tickFormatter={(date) => format(parseISO(date), 'dd/MM')}
              tick={{ fontSize: 12, fill: '#64748B' }}
              axisLine={{ stroke: '#E2E8F0' }}
              tickLine={false}
            />
            <YAxis 
              yAxisId="left" 
              tick={{ fontSize: 12, fill: '#64748B' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}km`}
            />
            <YAxis 
              yAxisId="right" 
              orientation="right" 
              tick={{ fontSize: 12, fill: '#64748B' }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(value) => `${value}m`}
              domain={[0, 'dataMax + 20']}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area 
              yAxisId="left"
              type="monotone" 
              dataKey="distance" 
              stroke="#38BDF8" 
              strokeWidth={2}
              fill="url(#colorDistance)" 
              dot={{ r: 3, fill: '#38BDF8', strokeWidth: 2, stroke: '#FFFFFF' }}
              activeDot={{ r: 5, fill: '#38BDF8', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
            <Area 
              yAxisId="right"
              type="monotone" 
              dataKey="duration" 
              stroke="#818CF8" 
              strokeWidth={2}
              fill="url(#colorDuration)" 
              dot={{ r: 3, fill: '#818CF8', strokeWidth: 2, stroke: '#FFFFFF' }}
              activeDot={{ r: 5, fill: '#818CF8', stroke: '#FFFFFF', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityChart;
