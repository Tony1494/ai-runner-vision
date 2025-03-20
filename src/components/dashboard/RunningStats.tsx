
import { Clock, Flag, Heart, Zap, Activity, Footprints, BarChart, Dumbbell, TrendingUp, Flame, Award, Brain } from 'lucide-react';
import StatCard from './StatCard';
import Chip from '../ui/Chip';
import RunningDNA from './RunningDNA';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const RunningStats = () => {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h3 className="text-xl font-medium">Metriche principali</h3>
        <div className="flex space-x-2">
          <Chip label="Ultimo aggiornamento: oggi, 14:30" color="purple" size="sm" />
          <Chip label="Progressione: positiva" color="green" size="sm" />
        </div>
      </div>
      
      <Tabs defaultValue="current">
        <TabsList className="mb-6">
          <TabsTrigger value="current">Attuali</TabsTrigger>
          <TabsTrigger value="trend">Tendenze</TabsTrigger>
          <TabsTrigger value="compare">Confronto</TabsTrigger>
        </TabsList>
        
        <TabsContent value="current" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Distanza settimanale"
              value={42.5}
              unit="km"
              icon={<Flag size={20} />}
              change={8}
              trend="up"
              className="animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            />
            <StatCard
              title="Tempo totale"
              value="3:45"
              unit="ore"
              icon={<Clock size={20} />}
              change={5}
              trend="up"
              className="animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            />
            <StatCard
              title="FC media"
              value={146}
              unit="bpm"
              icon={<Heart size={20} />}
              change={-2}
              trend="down"
              className="animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            />
            <StatCard
              title="VO2max stimato"
              value={52.8}
              unit="ml/kg/min"
              icon={<Zap size={20} />}
              change={3}
              trend="up"
              className="animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="trend" className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
              title="Trend distanza"
              value="+12%"
              unit="ultimo mese"
              icon={<TrendingUp size={20} />}
              change={8}
              trend="up"
              className="animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            />
            <StatCard
              title="Efficienza"
              value="+5.2%"
              unit="ultimo mese"
              icon={<Flame size={20} />}
              change={5}
              trend="up"
              className="animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            />
            <StatCard
              title="Consistenza"
              value="94%"
              unit="ultimo mese"
              icon={<Award size={20} />}
              change={2}
              trend="up"
              className="animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            />
            <StatCard
              title="Previsione VO2max"
              value="55.3"
              unit="proiezione 4 settimane"
              icon={<Brain size={20} />}
              change={4.7}
              trend="up"
              className="animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            />
          </div>
        </TabsContent>
        
        <TabsContent value="compare" className="animate-fade-in">
          <div className="p-6 bg-gray-50 rounded-lg mb-6 text-center">
            <p className="text-muted-foreground">Seleziona un periodo di confronto per visualizzare le differenze</p>
            <div className="flex justify-center mt-4 space-x-2">
              <button className="px-4 py-2 rounded-md bg-runner text-white">Ultima settimana</button>
              <button className="px-4 py-2 rounded-md border border-runner text-runner">Ultimo mese</button>
              <button className="px-4 py-2 rounded-md border border-runner text-runner">3 mesi fa</button>
              <button className="px-4 py-2 rounded-md border border-runner text-runner">6 mesi fa</button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <div className="mt-10 mb-6">
        <h3 className="text-xl font-medium mb-4">Running DNA</h3>
        <div className="glass-card p-6 animate-fade-in">
          <RunningDNA />
        </div>
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-medium mb-4">Metriche avanzate</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard
            title="Running Power"
            value={285}
            unit="watt"
            icon={<Activity size={20} />}
            change={4}
            trend="up"
            className="animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          />
          <StatCard
            title="Cadenza media"
            value={178}
            unit="spm"
            icon={<Footprints size={20} />}
            change={2}
            trend="up"
            tooltip="Steps Per Minute - Passi al minuto"
            className="animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          />
          <StatCard
            title="Training Load"
            value={86}
            unit="TSS"
            icon={<BarChart size={20} />}
            change={-5}
            trend="down"
            tooltip="Training Stress Score - Misura del carico di allenamento"
            className="animate-fade-in"
            style={{ animationDelay: '0.7s' }}
          />
          <StatCard
            title="Forza muscolare"
            value="68"
            unit="%"
            icon={<Dumbbell size={20} />}
            change={8}
            trend="up"
            tooltip="Percentuale rispetto al tuo potenziale massimo stimato"
            className="animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          />
        </div>
      </div>
    </div>
  );
};

export default RunningStats;
