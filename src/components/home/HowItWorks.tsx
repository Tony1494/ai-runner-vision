
import { Activity, ChevronRight, Dumbbell, Key, Lightbulb, Zap } from 'lucide-react';
import Chip from '../ui/Chip';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Activity className="w-10 h-10 text-white" />,
      title: "Connetti e Raccogli",
      description: "Connetti i tuoi dispositivi o inserisci manualmente i tuoi dati di allenamento per iniziare a costruire il tuo profilo running.",
      color: "bg-runner",
      delay: "0.1s"
    },
    {
      icon: <Key className="w-10 h-10 text-white" />,
      title: "Analisi Multidimensionale",
      description: "La nostra IA analizza oltre 200 parametri per identificare pattern unici nel tuo stile di corsa e nelle tue performance.",
      color: "bg-runner-accent",
      delay: "0.2s"
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-white" />,
      title: "Insights Personalizzati",
      description: "Ricevi suggerimenti su misura basati sulla tua biomeccanica, storico di allenamento e obiettivi specifici.",
      color: "bg-runner-energy",
      delay: "0.3s"
    },
    {
      icon: <Zap className="w-10 h-10 text-white" />,
      title: "Evoluzione Continua",
      description: "Il sistema impara con te, adattando le raccomandazioni in base ai tuoi progressi e risposte agli allenamenti.",
      color: "bg-runner-success",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Chip label="Processo AI-powered" color="accent" className="mb-4" />
          <h2 className="text-4xl font-bold mb-4">
            Come <span className="bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">funziona</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Un approccio rivoluzionario all'allenamento, dove l'analisi dei dati incontra la personalizzazione estrema
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col items-center text-center animate-fade-in hover-lift"
              style={{ animationDelay: step.delay }}
            >
              <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center mb-6`}>
                {step.icon}
              </div>
              
              <div className="flex items-center mb-2">
                <span className="w-8 h-8 bg-runner-light text-runner rounded-full inline-flex items-center justify-center text-sm font-bold mr-2">
                  {index + 1}
                </span>
                <h3 className="text-xl font-bold">{step.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-4">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex items-center justify-center absolute -right-4">
                  <ChevronRight size={24} className="text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="/analisi-avanzata" 
            className="inline-flex items-center text-runner hover:text-runner-dark transition-colors"
          >
            Scopri di più sulla nostra tecnologia
            <ChevronRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
