
import { Activity, Brain, Heart, Zap, TrendingUp, Calendar, Dumbbell, RefreshCw, Award } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  style?: React.CSSProperties;
}

const FeatureCard = ({ icon, title, description, className, style }: FeatureCardProps) => (
  <div className={cn("bg-white rounded-2xl p-6 shadow-sm hover-lift border border-gray-100", className)} style={style}>
    <div className="w-12 h-12 bg-gradient-to-br from-runner/10 to-runner-accent/10 rounded-xl flex items-center justify-center text-runner mb-5">
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
      description: "Tecnologia proprietaria che analizza ogni aspetto della tua corsa con precisione millimetrica: cadenza, appoggio del piede, oscillazione verticale e rotazione del bacino."
    },
    {
      icon: <Activity size={24} />,
      title: "Metriche Elite",
      description: "Accedi a parametri utilizzati dai professionisti: Running Power, Training Stress Score, Form Power e Leg Spring Stiffness per miglioramenti tangibili."
    },
    {
      icon: <Calendar size={24} />,
      title: "Piani Auto-Adattivi",
      description: "Algoritmi che evolvono con te, modificando il piano in tempo reale in base alle tue performance, recupero e disponibilità, eliminando gli allenamenti inefficaci."
    },
    {
      icon: <Heart size={24} />,
      title: "Recovery Intelligence",
      description: "Sistema avanzato di monitoraggio che previene il sovrallenamento analizzando HRV, qualità del sonno e stress muscolare per bilanciare intensità e recupero."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Predizioni Ultra-Precise",
      description: "Previsioni dei tempi gara con margine di errore inferiore al 2%, basate su modelli addestrati sui dati di runner elite e costantemente aggiornati."
    },
    {
      icon: <Zap size={24} />,
      title: "Zone Personalizzate",
      description: "Definizione dinamica di 7 zone di allenamento specifiche per ogni runner, con aggiustamenti settimanali in base ai progressi fisiologici misurati."
    },
    {
      icon: <Dumbbell size={24} />,
      title: "Core Training Integrato",
      description: "Programmi complementari di forza e mobilità specifici per runner, calibrati per colmare i tuoi deficit biomeccanici e prevenire infortuni."
    },
    {
      icon: <RefreshCw size={24} />,
      title: "Adattamento Continuo",
      description: "L'algoritmo apprende dalle tue risposte fisiologiche e modifica costantemente stimoli e carichi per massimizzare i risultati ed evitare plateau."
    },
    {
      icon: <Award size={24} />,
      title: "Benchmark Elite",
      description: "Confronta i tuoi progressi con runner del tuo stesso livello e ricevi suggerimenti specifici basati sui pattern di miglioramento più efficaci."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-runner-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">Funzionalità</span> di livello professionale
          </h2>
          <p className="text-lg text-muted-foreground">
            Tecnologie avanzate precedentemente riservate solo agli atleti d'élite, ora accessibili per trasformare radicalmente le tue performance e sbloccare il tuo vero potenziale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
