
import { Clock, Flag, Heart, Zap } from 'lucide-react';
import StatCard from './StatCard';

const RunningStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard
        title="Distanza settimanale"
        value={42.5}
        unit="km"
        icon={<Flag size={20} />}
        change={8}
        className="animate-fade-in"
        style={{ animationDelay: '0.1s' }}
      />
      <StatCard
        title="Tempo totale"
        value="3:45"
        unit="ore"
        icon={<Clock size={20} />}
        change={5}
        className="animate-fade-in"
        style={{ animationDelay: '0.2s' }}
      />
      <StatCard
        title="FC media"
        value={146}
        unit="bpm"
        icon={<Heart size={20} />}
        change={-2}
        className="animate-fade-in"
        style={{ animationDelay: '0.3s' }}
      />
      <StatCard
        title="VO2max stimato"
        value={52.8}
        unit="ml/kg/min"
        icon={<Zap size={20} />}
        change={3}
        className="animate-fade-in"
        style={{ animationDelay: '0.4s' }}
      />
    </div>
  );
};

export default RunningStats;
