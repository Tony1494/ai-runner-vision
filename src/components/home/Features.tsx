
import { Activity, Brain, Heart, Zap, TrendingUp, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({ icon, title, description, className }: FeatureCardProps) => (
  <div className={cn("bg-white rounded-2xl p-6 shadow-sm hover-lift", className)}>
    <div className="w-12 h-12 bg-runner/10 rounded-xl flex items-center justify-center text-runner mb-5">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Brain size={24} />,
      title: "Analisi AI Avanzata",
      description: "Analisi dettagliata della tua tecnica di corsa, cadenza e forma con suggerimenti personalizzati."
    },
    {
      icon: <Activity size={24} />,
      title: "Metriche Avanzate",
      description: "Monitora VDOT, Recovery Index, Training Load e altri parametri avanzati in una dashboard intuitiva."
    },
    {
      icon: <Calendar size={24} />,
      title: "Piani Personalizzati",
      description: "Piani di allenamento creati su misura per i tuoi obiettivi, livello e disponibilità di tempo."
    },
    {
      icon: <Heart size={24} />,
      title: "Monitoraggio Recupero",
      description: "Valutazione dello stato di recupero e suggerimenti per ottimizzare il riposo tra gli allenamenti."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Previsioni Prestazioni",
      description: "Previsioni accurate dei tuoi tempi di gara basate sui dati di allenamento e sulla progressione."
    },
    {
      icon: <Zap size={24} />,
      title: "Ottimizzazione Zone",
      description: "Calcolo preciso delle zone di allenamento per massimizzare efficienza e risultati."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-blue-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">Funzionalità Avanzate</h2>
          <p className="text-lg text-muted-foreground">
            Scopri strumenti innovativi progettati specificamente per runner intermedi e avanzati 
            che cercano di portare il loro allenamento al livello successivo.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              className={`animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
