
import { ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Chip from '../ui/Chip';
import RunnerLogo from './RunnerLogo';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center py-20 overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-runner opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-runner-accent opacity-10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <div className="flex flex-col space-y-8 animate-slide-up">
            <div>
              <Chip label="Intelligenza Artificiale Avanzata" color="accent" className="mb-4" />
              <h1 className="font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-runner-dark via-runner to-runner-accent bg-clip-text text-transparent">Evolvi</span> oltre i tuoi limiti con la potenza dell'AI
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Non solo allenamento. Una <span className="font-medium text-runner-dark">trasformazione completa</span> della tua performance. Analisi biomeccaniche avanzate, piani ultra-personalizzati e previsioni precise per runner che puntano all'eccellenza.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/dashboard" 
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-runner to-runner-accent text-white font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Potenzia il tuo running
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to="/training" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-foreground font-medium rounded-lg border border-border transition-colors"
              >
                Scopri i piani avanzati
              </Link>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-runner/10 flex items-center justify-center border-2 border-white">
                  <span className="text-xs font-medium text-runner">MB</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-runner-accent/10 flex items-center justify-center border-2 border-white">
                  <span className="text-xs font-medium text-runner-accent">LR</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-runner-energy/10 flex items-center justify-center border-2 border-white">
                  <span className="text-xs font-medium text-runner-energy">SR</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Utilizzato da <span className="font-medium text-foreground">12,000+</span> runner in Italia
              </p>
            </div>
          </div>
          
          <div className="relative animate-fade-in lg:animate-floating">
            <div className="glass-card p-5 sm:p-8 w-full max-w-md mx-auto overflow-hidden border border-white/20 shadow-xl">
              <div className="relative">
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1530137073521-28cce8533fab?q=80&w=1000&auto=format&fit=crop"
                    alt="Runner with AI analysis" 
                    className="w-full h-[400px] object-cover"
                  />
                </div>
                
                <div className="absolute top-4 left-4 glass-card px-3 py-1.5 rounded-md text-sm font-medium backdrop-blur-md bg-white/20 border border-white/20">
                  Analisi Biomeccanica
                </div>
                
                <div className="absolute -bottom-6 left-6 right-6 glass-card p-4 rounded-lg border border-white/20">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center">
                      <RunnerLogo className="w-5 h-5 mr-2" />
                      <h4 className="font-semibold">Piano Elite Maratona</h4>
                    </div>
                    <Chip label="Fase 3/5" color="energy" size="sm" />
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div className="bg-gradient-to-r from-runner to-runner-accent h-1.5 rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -right-10 bottom-20 glass-card p-4 rounded-lg shadow-lg hidden md:block animate-pulse-light border border-white/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-runner to-runner-accent rounded-full flex items-center justify-center text-white">
                  <Zap size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium text-runner-dark">AI Insight Pro</p>
                  <p className="text-xs text-muted-foreground">Ottimizzazione postura completata</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -left-4 top-10 glass-card p-3 rounded-lg shadow-lg hidden md:block animate-pulse-light border border-white/20" style={{ animationDelay: '1s' }}>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-runner-success/10 rounded-full flex items-center justify-center text-runner-success">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-medium">Obiettivo superato</p>
                  <p className="text-xs text-runner-success">+12% sulle previsioni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
