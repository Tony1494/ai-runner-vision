
import { ArrowRight, Brain, Calendar, ChevronDown, Clock, Star } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TrainingPlan from '@/components/training/TrainingPlan';

// Dati di esempio per il piano di allenamento
const sampleTrainingPlan = {
  id: 1,
  name: "Piano 10K Sub-45",
  duration: 8,
  goal: "10K in meno di 45 minuti",
  level: "Intermedio",
  currentWeek: 3,
  weeks: [
    {
      id: 1,
      weekNumber: 1,
      startDate: "1 Maggio",
      endDate: "7 Maggio",
      focusArea: "Base building",
      days: [
        {
          id: 1,
          day: "Lunedì",
          type: "Easy Run",
          distance: 5,
          duration: "30 min",
          description: "Corsa lenta e facile per costruire resistenza",
          completed: true
        },
        {
          id: 2,
          day: "Martedì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: true
        },
        {
          id: 3,
          day: "Mercoledì",
          type: "Intervals",
          distance: 6,
          duration: "40 min",
          description: "6x400m @pace 5K con 200m recupero",
          completed: true
        },
        {
          id: 4,
          day: "Giovedì",
          type: "Recovery",
          distance: 4,
          duration: "25 min",
          description: "Recupero attivo a ritmo molto leggero",
          completed: true
        },
        {
          id: 5,
          day: "Venerdì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: true
        },
        {
          id: 6,
          day: "Sabato",
          type: "Tempo Run",
          distance: 5,
          duration: "25 min",
          description: "3km @pace soglia, resto easy",
          completed: true
        },
        {
          id: 7,
          day: "Domenica",
          type: "Long Run",
          distance: 8,
          duration: "50 min",
          description: "Corsa lunga a ritmo facile",
          completed: true
        }
      ]
    },
    {
      id: 2,
      weekNumber: 2,
      startDate: "8 Maggio",
      endDate: "14 Maggio",
      focusArea: "Volume",
      days: [
        {
          id: 1,
          day: "Lunedì",
          type: "Easy Run",
          distance: 6,
          duration: "35 min",
          description: "Corsa lenta e facile per costruire resistenza",
          completed: true
        },
        {
          id: 2,
          day: "Martedì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: true
        },
        {
          id: 3,
          day: "Mercoledì",
          type: "Intervals",
          distance: 7,
          duration: "45 min",
          description: "8x400m @pace 5K con 200m recupero",
          completed: true
        },
        {
          id: 4,
          day: "Giovedì",
          type: "Recovery",
          distance: 5,
          duration: "30 min",
          description: "Recupero attivo a ritmo molto leggero",
          completed: true
        },
        {
          id: 5,
          day: "Venerdì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: true
        },
        {
          id: 6,
          day: "Sabato",
          type: "Tempo Run",
          distance: 6,
          duration: "30 min",
          description: "4km @pace soglia, resto easy",
          completed: true
        },
        {
          id: 7,
          day: "Domenica",
          type: "Long Run",
          distance: 10,
          duration: "60 min",
          description: "Corsa lunga a ritmo facile",
          completed: true
        }
      ]
    },
    {
      id: 3,
      weekNumber: 3,
      startDate: "15 Maggio",
      endDate: "21 Maggio",
      focusArea: "Intensità",
      days: [
        {
          id: 1,
          day: "Lunedì",
          type: "Easy Run",
          distance: 6,
          duration: "35 min",
          description: "Corsa lenta e facile per costruire resistenza",
          completed: true
        },
        {
          id: 2,
          day: "Martedì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: true
        },
        {
          id: 3,
          day: "Mercoledì",
          type: "Intervals",
          distance: 8,
          duration: "50 min",
          description: "5x800m @pace 5K con 400m recupero",
          completed: false
        },
        {
          id: 4,
          day: "Giovedì",
          type: "Recovery",
          distance: 5,
          duration: "30 min",
          description: "Recupero attivo a ritmo molto leggero",
          completed: false
        },
        {
          id: 5,
          day: "Venerdì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: false
        },
        {
          id: 6,
          day: "Sabato",
          type: "Tempo Run",
          distance: 7,
          duration: "35 min",
          description: "5km @pace soglia, resto easy",
          completed: false
        },
        {
          id: 7,
          day: "Domenica",
          type: "Long Run",
          distance: 12,
          duration: "70 min",
          description: "Corsa lunga a ritmo facile",
          completed: false
        }
      ]
    },
    {
      id: 4,
      weekNumber: 4,
      startDate: "22 Maggio",
      endDate: "28 Maggio",
      focusArea: "Recupero",
      days: [
        {
          id: 1,
          day: "Lunedì",
          type: "Easy Run",
          distance: 5,
          duration: "30 min",
          description: "Corsa lenta e facile per costruire resistenza",
          completed: false
        },
        {
          id: 2,
          day: "Martedì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: false
        },
        {
          id: 3,
          day: "Mercoledì",
          type: "Intervals",
          distance: 6,
          duration: "40 min",
          description: "4x800m @pace 5K con 400m recupero",
          completed: false
        },
        {
          id: 4,
          day: "Giovedì",
          type: "Recovery",
          distance: 4,
          duration: "25 min",
          description: "Recupero attivo a ritmo molto leggero",
          completed: false
        },
        {
          id: 5,
          day: "Venerdì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: false
        },
        {
          id: 6,
          day: "Sabato",
          type: "Tempo Run",
          distance: 5,
          duration: "25 min",
          description: "3km @pace soglia, resto easy",
          completed: false
        },
        {
          id: 7,
          day: "Domenica",
          type: "Long Run",
          distance: 9,
          duration: "55 min",
          description: "Corsa lunga a ritmo facile",
          completed: false
        }
      ]
    },
    {
      id: 5,
      weekNumber: 5,
      startDate: "29 Maggio",
      endDate: "4 Giugno",
      focusArea: "Resistenza",
      days: [
        {
          id: 1,
          day: "Lunedì",
          type: "Easy Run",
          distance: 6,
          duration: "35 min",
          description: "Corsa lenta e facile",
          completed: false
        },
        {
          id: 2,
          day: "Martedì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: false
        },
        {
          id: 3,
          day: "Mercoledì",
          type: "Intervals",
          distance: 8,
          duration: "50 min",
          description: "6x800m @pace 5K con 400m recupero",
          completed: false
        },
        {
          id: 4,
          day: "Giovedì",
          type: "Recovery",
          distance: 5,
          duration: "30 min",
          description: "Recupero attivo a ritmo molto leggero",
          completed: false
        },
        {
          id: 5,
          day: "Venerdì",
          type: "Rest",
          distance: 0,
          duration: "0 min",
          description: "Riposo attivo o completo",
          completed: false
        },
        {
          id: 6,
          day: "Sabato",
          type: "Tempo Run",
          distance: 8,
          duration: "40 min",
          description: "6km @pace soglia, resto easy",
          completed: false
        },
        {
          id: 7,
          day: "Domenica",
          type: "Long Run",
          distance: 14,
          duration: "80 min",
          description: "Corsa lunga a ritmo facile",
          completed: false
        }
      ]
    }
  ]
};

const recommendedPlans = [
  {
    id: 1,
    name: "5K per principianti",
    duration: "6 settimane",
    level: "Principiante",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1502224562085-639556652f33?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Half Marathon",
    duration: "12 settimane",
    level: "Intermedio",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "10K Avanzato",
    duration: "8 settimane",
    level: "Avanzato",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1571008887538-b36bb32f4571?q=80&w=1000&auto=format&fit=crop"
  }
];

const Training = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">Piano di Allenamento</h1>
              <p className="text-muted-foreground">
                Segui il tuo piano personalizzato e raggiungi i tuoi obiettivi
              </p>
            </div>
            
            <div className="flex space-x-2">
              <select className="px-4 py-2 bg-white border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-runner">
                <option>10K Sub-45</option>
                <option>Half Marathon</option>
                <option>5K Speed</option>
              </select>
              
              <button className="inline-flex items-center px-4 py-2 bg-runner text-white rounded-lg hover:bg-runner-dark transition-colors">
                <Calendar size={16} className="mr-2" />
                Calendario
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-2">
              <TrainingPlan plan={sampleTrainingPlan} />
            </div>
            
            <div>
              <div className="glass-card p-6 h-full animate-fade-in">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-runner flex items-center justify-center text-white">
                    <Brain size={20} />
                  </div>
                  <h3 className="text-lg font-medium">Consigli dell'AI Coach</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Intensità degli intervalli</h4>
                    <p className="text-sm text-muted-foreground">
                      Per gli intervalli di domani, mantieni un ritmo di 4:10-4:15 min/km per massimizzare il beneficio.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Recupero ottimale</h4>
                    <p className="text-sm text-muted-foreground">
                      Dopo l'allenamento intenso di oggi, considera 7-8 ore di sonno per un recupero completo.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-medium text-sm mb-2">Nutrizione pre-allenamento</h4>
                    <p className="text-sm text-muted-foreground">
                      Per la corsa lunga di domenica, consuma un pasto ricco di carboidrati 2-3 ore prima.
                    </p>
                  </div>
                  
                  <div className="mt-8">
                    <h4 className="font-medium text-sm mb-3">Progressi del piano</h4>
                    <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-runner rounded-full"
                        style={{ width: '45%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                      <span>Settimana 3 di 8</span>
                      <span>45% completato</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-sm mb-3">Statistiche piano</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Distanza totale</p>
                        <p className="text-lg font-medium">321 km</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Durata totale</p>
                        <p className="text-lg font-medium">32:15 ore</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Sessioni</p>
                        <p className="text-lg font-medium">42</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-muted-foreground">Focus principale</p>
                        <p className="text-lg font-medium">Velocità</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Piani raccomandati</h2>
              <button className="text-runner hover:text-runner-dark transition-colors inline-flex items-center">
                Vedi tutti
                <ArrowRight size={16} className="ml-1" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedPlans.map((plan) => (
                <div 
                  key={plan.id}
                  className="glass-card overflow-hidden hover-lift animate-fade-in"
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={plan.image}
                      alt={plan.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="font-semibold">{plan.name}</h3>
                      <div className="flex items-center text-amber-500">
                        <Star size={14} className="fill-amber-500" />
                        <span className="text-xs ml-1">{plan.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {plan.duration}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {plan.level}
                      </div>
                    </div>
                    
                    <button className="w-full py-2 text-center border border-runner text-runner rounded-md hover:bg-runner hover:text-white transition-colors">
                      Inizia Piano
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="glass-card p-6 animate-fade-in">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Hai bisogno di un piano personalizzato?</h2>
                <p className="text-muted-foreground">
                  Crea un piano di allenamento su misura per i tuoi obiettivi specifici, 
                  il tuo livello di forma fisica e il tuo programma.
                </p>
              </div>
              
              <button className="inline-flex items-center px-6 py-3 rounded-lg bg-runner hover:bg-runner-dark text-white font-medium transition-colors whitespace-nowrap">
                Crea piano
                <ChevronDown size={16} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Training;
