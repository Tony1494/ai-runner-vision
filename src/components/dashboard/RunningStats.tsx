
import { Clock, Flag, Heart, Zap, Activity, Footprints, BarChart, Dumbbell } from 'lucide-react';
import StatCard from './StatCard';
import Chip from '../ui/Chip';

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
