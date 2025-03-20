
import { useState } from 'react';
import { Search, Filter, Trophy, ArrowRight, Calendar, Map, ChevronRight, Clock, ArrowUp, ArrowDown, Zap } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chip from '@/components/ui/Chip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Races = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  
  const tabs = [
    { id: 'upcoming', label: 'Prossime Gare', icon: <Calendar size={16} /> },
    { id: 'past', label: 'Gare Passate', icon: <Trophy size={16} /> },
    { id: 'analysis', label: 'Analisi Dettagliata', icon: <Zap size={16} /> },
  ];
  
  // Dati di esempio per le gare passate
  const pastRaces = [
    {
      id: 1,
      name: 'Milano City Marathon',
      date: '15 Apr 2023',
      distance: 'Maratona',
      time: '3:45:22',
      pace: '5:21/km',
      position: '245/1200',
      category: '42/150',
      improvement: '+4.5%',
      location: 'Milano, IT'
    },
    {
      id: 2,
      name: 'Roma Half Marathon',
      date: '12 Mar 2023',
      distance: 'Mezza Maratona',
      time: '1:42:15',
      pace: '4:53/km',
      position: '122/850',
      category: '28/120',
      improvement: '+2.8%',
      location: 'Roma, IT'
    },
    {
      id: 3,
      name: 'Monza 10K',
      date: '22 Feb 2023',
      distance: '10K',
      time: '45:30',
      pace: '4:33/km',
      position: '68/550',
      category: '15/80',
      improvement: '+6.2%',
      location: 'Monza, IT'
    }
  ];
  
  // Dati di esempio per le gare future
  const upcomingRaces = [
    {
      id: 1,
      name: 'Torino City Marathon',
      date: '12 Nov 2023',
      distance: 'Maratona',
      location: 'Torino, IT',
      registrationStatus: 'Iscritto',
      prediction: '3:38:45',
      improvement: '-3.2%',
      readiness: '87%'
    },
    {
      id: 2,
      name: 'Firenze Half Marathon',
      date: '24 Sep 2023',
      distance: 'Mezza Maratona',
      location: 'Firenze, IT',
      registrationStatus: 'Iscritto',
      prediction: '1:39:50',
      improvement: '-2.1%',
      readiness: '92%'
    },
    {
      id: 3,
      name: 'Lago Maggiore 10K',
      date: '3 Sep 2023',
      distance: '10K',
      location: 'Stresa, IT',
      registrationStatus: 'Interesse',
      prediction: '43:15',
      improvement: '-5.0%',
      readiness: '78%'
    }
  ];
  
  // Dati di esempio per l'analisi dettagliata
  const paceAnalysis = [
    { km: 1, pace: '4:45', hr: 158, elevation: 5 },
    { km: 2, pace: '4:52', hr: 162, elevation: 10 },
    { km: 3, pace: '4:58', hr: 165, elevation: 15 },
    { km: 4, pace: '4:48', hr: 166, elevation: 8 },
    { km: 5, pace: '4:50', hr: 168, elevation: 0 },
    { km: 6, pace: '4:55', hr: 170, elevation: -5 },
    { km: 7, pace: '4:42', hr: 172, elevation: -10 },
    { km: 8, pace: '4:47', hr: 174, elevation: 0 },
    { km: 9, pace: '4:53', hr: 176, elevation: 5 },
    { km: 10, pace: '4:30', hr: 180, elevation: 0 },
  ];
  
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">Gare</h1>
              <p className="text-muted-foreground">
                Analizza le tue performance in gara e prepara le prossime sfide
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <input 
                  type="text" 
                  placeholder="Cerca gare..." 
                  className="pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-1 focus:ring-runner"
                />
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={16} className="mr-2" />
                Filtri
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <div className="flex space-x-2 border-b border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-3 flex items-center space-x-2 transition-colors ${
                    activeTab === tab.id 
                      ? 'border-b-2 border-runner text-runner font-medium' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
          
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <TabsContent value="upcoming" className="animate-fade-in">
              <div className="glass-card p-6 mb-8">
                <h3 className="text-lg font-medium mb-6">Prossime gare</h3>
                
                <div className="space-y-6">
                  {upcomingRaces.map((race) => (
                    <div key={race.id} className="glass-card border border-runner/10 p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold">{race.name}</h4>
                          <div className="flex items-center mt-1">
                            <Chip label={race.distance} color="purple" size="sm" className="mr-2" />
                            <span className="text-sm text-muted-foreground flex items-center">
                              <Calendar size={14} className="mr-1" /> {race.date}
                            </span>
                            <span className="text-sm text-muted-foreground flex items-center ml-3">
                              <Map size={14} className="mr-1" /> {race.location}
                            </span>
                          </div>
                        </div>
                        <Chip 
                          label={race.registrationStatus} 
                          color={race.registrationStatus === 'Iscritto' ? 'green' : 'energy'} 
                          className="mt-2 md:mt-0"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
                        <div className="glass-card p-4">
                          <h5 className="text-sm text-muted-foreground mb-1">Previsione tempo</h5>
                          <div className="flex items-center">
                            <p className="text-xl font-bold text-runner">{race.prediction}</p>
                            <span className="ml-2 text-green-600 text-sm flex items-center">
                              {race.improvement} <ArrowDown size={14} className="ml-1" />
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Rispetto all'ultima gara simile</p>
                        </div>
                        
                        <div className="glass-card p-4">
                          <h5 className="text-sm text-muted-foreground mb-1">Prontezza</h5>
                          <div className="flex items-center">
                            <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                              <div className="bg-gradient-to-r from-runner to-runner-accent h-2.5 rounded-full" style={{ width: race.readiness }}></div>
                            </div>
                            <span className="text-sm font-medium">{race.readiness}</span>
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">Basato sulla preparazione attuale</p>
                        </div>
                        
                        <div className="glass-card p-4">
                          <h5 className="text-sm text-muted-foreground mb-1">Piano di preparazione</h5>
                          <div className="flex items-center justify-between">
                            <p className="text-sm">Suggerimenti personalizzati</p>
                            <button className="text-runner hover:text-runner-dark transition-colors text-sm">
                              Vedi
                            </button>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-sm">Strategie di gara</p>
                            <button className="text-runner hover:text-runner-dark transition-colors text-sm">
                              Vedi
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex justify-end">
                        <button className="inline-flex items-center text-runner hover:text-runner-dark transition-colors">
                          Dettagli e pianificazione
                          <ArrowRight size={16} className="ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-center">
                  <button className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-runner to-runner-accent text-white font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1">
                    Cerca altre gare
                    <Search size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="past" className="animate-fade-in">
              <div className="glass-card p-6 mb-8">
                <h3 className="text-lg font-medium mb-6">Le tue gare passate</h3>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Gara</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Data</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Distanza</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Tempo</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Ritmo</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Posizione</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Progresso</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {pastRaces.map((race) => (
                        <tr key={race.id} className="hover:bg-runner/5">
                          <td className="py-3 pr-4 font-medium">{race.name}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{race.date}</td>
                          <td className="py-3 pr-4">{race.distance}</td>
                          <td className="py-3 pr-4 font-medium text-runner">{race.time}</td>
                          <td className="py-3 pr-4">{race.pace}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{race.position}</td>
                          <td className="py-3 pr-4 text-green-600 flex items-center">
                            {race.improvement} <ArrowUp size={14} className="ml-1" />
                          </td>
                          <td className="py-3">
                            <button className="text-runner hover:text-runner-dark">
                              <ChevronRight size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="mt-6 text-center">
                  <button className="text-runner hover:text-runner-dark transition-colors">
                    Vedi tutte le gare
                  </button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="analysis" className="animate-fade-in">
              <div className="glass-card p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium mb-1">Analisi Dettagliata</h3>
                    <div className="flex items-center">
                      <Chip label="Milano City Marathon" color="purple" size="sm" className="mr-2" />
                      <span className="text-sm text-muted-foreground">15 Apr 2023</span>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <select className="px-3 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner">
                      <option>Milano City Marathon</option>
                      <option>Roma Half Marathon</option>
                      <option>Monza 10K</option>
                    </select>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="glass-card p-4">
                    <h5 className="text-sm text-muted-foreground mb-1">Tempo Finale</h5>
                    <p className="text-2xl font-bold text-runner">3:45:22</p>
                    <div className="flex items-center mt-1">
                      <span className="text-green-600 text-sm flex items-center">
                        +4.5% <ArrowUp size={14} className="ml-1" />
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">vs. previsione</span>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4">
                    <h5 className="text-sm text-muted-foreground mb-1">Ritmo Medio</h5>
                    <p className="text-2xl font-bold text-runner">5:21/km</p>
                    <div className="flex items-center mt-1">
                      <span className="text-green-600 text-sm flex items-center">
                        +3.2% <ArrowUp size={14} className="ml-1" />
                      </span>
                      <span className="text-xs text-muted-foreground ml-2">vs. ultimo record</span>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4">
                    <h5 className="text-sm text-muted-foreground mb-1">FC Media</h5>
                    <p className="text-2xl font-bold text-runner">168 bpm</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs text-muted-foreground">92% della FC max</span>
                    </div>
                  </div>
                </div>
                
                <h4 className="text-lg font-medium mb-4">Analisi del Ritmo</h4>
                <div className="overflow-x-auto mb-6">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Km</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Ritmo</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">FC</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Elevazione</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {paceAnalysis.map((km) => (
                        <tr key={km.km} className="hover:bg-runner/5">
                          <td className="py-2 pr-4 font-medium">{km.km}</td>
                          <td className="py-2 pr-4">{km.pace}/km</td>
                          <td className="py-2 pr-4">{km.hr} bpm</td>
                          <td className="py-2 pr-4 flex items-center">
                            {km.elevation}m 
                            {km.elevation > 0 ? (
                              <ArrowUp size={14} className="ml-1 text-orange-500" />
                            ) : km.elevation < 0 ? (
                              <ArrowDown size={14} className="ml-1 text-green-500" />
                            ) : null}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="glass-card p-4">
                    <h5 className="text-sm font-medium mb-4">Grafico del Ritmo</h5>
                    <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
                      <div className="text-muted-foreground text-sm">Grafico a linea</div>
                    </div>
                  </div>
                  
                  <div className="glass-card p-4">
                    <h5 className="text-sm font-medium mb-4">Frequenza Cardiaca</h5>
                    <div className="bg-gray-50 rounded-lg p-4 h-48 flex items-center justify-center">
                      <div className="text-muted-foreground text-sm">Grafico a linea</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Insights AI</h4>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-runner flex items-center justify-center text-white mt-1">
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm">Analisi pacing</h4>
                          <p className="text-sm text-blue-800">
                            Hai mantenuto un ritmo costante per i primi 30km, per poi rallentare negli ultimi 12km. Questo suggerisce che potresti migliorare la tua strategia di alimentazione durante la gara.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white mt-1">
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              d="M9 12L11 14L15 10M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm">Punto di forza</h4>
                          <p className="text-sm text-green-800">
                            La tua gestione dell'effort nei tratti in salita è molto efficiente, con variazioni minime della frequenza cardiaca. Questo indica un'ottima economia di corsa sui percorsi variati.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white mt-1">
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path 
                              d="M12 9V13M12 17H12.01M7.86 2H16.14L22 7.86V16.14L16.14 22H7.86L2 16.14V7.86L7.86 2Z" 
                              stroke="currentColor" 
                              strokeWidth="2" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm">Suggerimento per il futuro</h4>
                          <p className="text-sm text-orange-800">
                            Per la tua prossima maratona, prova a ridurre leggermente il ritmo nei primi 10km per conservare più energia per il finale. Basandoci sui tuoi dati, questo potrebbe migliorare il tuo tempo finale di circa 3-5 minuti.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Races;
