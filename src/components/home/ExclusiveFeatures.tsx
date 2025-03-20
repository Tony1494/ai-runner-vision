
import { Eye, Cpu, Cloud, BarChart, Smartphone, Zap } from 'lucide-react';
import Chip from '../ui/Chip';

const ExclusiveFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-runner-light/10 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Chip label="Innovazione" color="energy" className="mb-4" />
          <h2 className="text-4xl font-bold mb-4">
            Fitness Tracker <span className="bg-gradient-to-r from-runner-accent to-runner-energy bg-clip-text text-transparent">Screenless</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            L'unico dispositivo sul mercato progettato specificamente per runner che vogliono restare concentrati sulla corsa, non su uno schermo
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-16 h-16 bg-runner-accent/10 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-runner-accent" />
            </div>
            <h3 className="text-xl font-bold mb-4">Design Minimalista</h3>
            <p className="text-muted-foreground">
              Nessuno schermo, nessuna distrazione. Feedback tattile e audio discreto per restare connessi senza compromettere l'esperienza di corsa.
            </p>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-16 h-16 bg-runner/10 rounded-full flex items-center justify-center mb-6">
              <Cpu className="w-8 h-8 text-runner" />
            </div>
            <h3 className="text-xl font-bold mb-4">Sensori Avanzati</h3>
            <p className="text-muted-foreground">
              Tecnologia proprietaria che cattura 3 volte più parametri biomeccanici rispetto ai tracker tradizionali, con precisione da laboratorio.
            </p>
          </div>
          
          <div className="glass-card p-8 flex flex-col items-center text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="w-16 h-16 bg-runner-energy/10 rounded-full flex items-center justify-center mb-6">
              <Cloud className="w-8 h-8 text-runner-energy" />
            </div>
            <h3 className="text-xl font-bold mb-4">Analisi Real-time</h3>
            <p className="text-muted-foreground">
              Elaborazione dei dati in tempo reale che permette feedback immediato sulla tecnica e suggerimenti per ottimizzare l'allenamento in corso.
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-16">
          <a 
            href="/ecosistema" 
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-runner-accent to-runner-energy text-white font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Scopri l'ecosistema completo
            <Zap size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExclusiveFeatures;
