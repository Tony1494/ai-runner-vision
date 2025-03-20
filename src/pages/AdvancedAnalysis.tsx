
import { useState } from 'react';
import { Activity, Sliders, Filter, BarChart2, LineChart, PieChart, Save, Share2, Brain, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chip from '@/components/ui/Chip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AdvancedAnalysis = () => {
  const [activeTab, setActiveTab] = useState('metrics');
  
  const tabs = [
    { id: 'metrics', label: 'Metriche Avanzate', icon: <Activity size={16} /> },
    { id: 'comparison', label: 'Confronto', icon: <BarChart2 size={16} /> },
    { id: 'prediction', label: 'Previsioni', icon: <Brain size={16} /> },
    { id: 'risk', label: 'Rischio Infortuni', icon: <AlertTriangle size={16} /> },
  ];
  
  const advancedMetrics = [
    { name: 'Variabilità del passo', value: '4.2%', description: 'Variazione della lunghezza del passo tra piede destro e sinistro' },
    { name: 'Ground Contact Time', value: '235ms', description: 'Tempo medio di contatto con il terreno durante la corsa' },
    { name: 'Oscillazione verticale', value: '6.8cm', description: 'Movimento verticale del centro di massa durante la corsa' },
    { name: 'Cadenza ottimale', value: '178spm', description: 'Cadenza calcolata come ottimale in base alla tua biomeccanica' },
    { name: 'Running Power', value: '285W', description: 'Potenza generata durante la corsa, misurata in watt' },
    { name: 'Pronazione', value: '3.2°', description: 'Angolo di pronazione del piede durante l\'atterraggio' },
    { name: 'Tempo di volo', value: '256ms', description: 'Tempo medio in cui entrambi i piedi sono staccati dal terreno' },
    { name: 'Efficienza muscolare', value: '72%', description: 'Rapporto tra energia utilizzata e output meccanico prodotto' }
  ];
  
  const impactFactors = [
    { name: 'Meteo', impact: 85, description: 'Temperatura, umidità e vento possono influenzare le performance fino al 6%' },
    { name: 'Alimentazione', impact: 92, description: 'Carboidrati pre-gara e idratazione hanno mostrato un impatto del 5-7% sul tuo rendimento' },
    { name: 'Sonno', impact: 78, description: 'Le notti con meno di 7 ore di sonno hanno ridotto le tue performance del 4.5% in media' },
    { name: 'Stress mentale', impact: 65, description: 'Livelli elevati di stress correlano con una riduzione del 3.8% nelle performance' },
    { name: 'Altitudine', impact: 70, description: 'Corsa in altitudine (>500m) mostra una riduzione media del rendimento del 2.5%' }
  ];
  
  const predictionScenarios = [
    { 
      name: 'Conservativo', 
      prediction: '3:45:00', 
      confidence: 'Alta (85%)',
      description: 'Basato sui tuoi attuali dati di allenamento senza modifiche' 
    },
    { 
      name: 'Moderato', 
      prediction: '3:38:30', 
      confidence: 'Media (65%)',
      description: 'Con 8 settimane di piano intensificato (+15% volume, +20% intensità)' 
    },
    { 
      name: 'Aggressivo', 
      prediction: '3:30:00', 
      confidence: 'Bassa (35%)',
      description: 'Con 12 settimane di piano avanzato e miglioramenti tecnici significativi' 
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">Analisi Avanzata</h1>
              <p className="text-muted-foreground">
                Esplora in profondità i tuoi dati per ottenere insight dettagliati sulle tue performance
              </p>
            </div>
            
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors">
                <Sliders size={16} className="mr-2" />
                Parametri
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={16} className="mr-2" />
                Filtri
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-runner text-white rounded-lg hover:bg-runner-dark transition-colors">
                <Save size={16} className="mr-2" />
                Salva
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
            <TabsContent value="metrics" className="animate-fade-in">
              <div className="glass-card p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Metriche Biomeccaniche Avanzate</h3>
                    <p className="text-muted-foreground">Basate sull'analisi degli ultimi 30 giorni di allenamento</p>
                  </div>
                  <div className="mt-4 sm:mt-0 flex items-center space-x-2">
                    <select className="px-3 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner">
                      <option>Ultimi 30 giorni</option>
                      <option>Ultimi 90 giorni</option>
                      <option>Ultimo anno</option>
                      <option>Custom</option>
                    </select>
                    <button className="inline-flex items-center px-3 py-2 text-runner border border-runner rounded-md hover:bg-runner hover:text-white transition-colors">
                      <Share2 size={16} className="mr-1" />
                      Condividi
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {advancedMetrics.map((metric, index) => (
                    <div key={index} className="glass-card p-4 hover:border-runner/50 transition-colors border border-transparent">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">{metric.name}</h4>
                        <span className="text-lg font-bold text-runner">{metric.value}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{metric.description}</p>
                      <div className="w-full h-12 bg-gray-50 rounded-lg">
                        {/* Placeholder per grafici */}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <h4 className="text-lg font-medium mb-4">Insight biomeccanici</h4>
                  
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
                        <h4 className="font-medium text-sm">Analisi del passo</h4>
                        <p className="text-sm text-blue-800">
                          La variabilità del passo del 4.2% è leggermente superiore all'ottimale (3%). Esercizi di propriocezione e stabilità del core potrebbero migliorare questo aspetto e la tua efficienza complessiva.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="comparison" className="animate-fade-in">
              <div className="glass-card p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Confronto Multidimensionale</h3>
                    <p className="text-muted-foreground">Analizza correlazioni tra parametri e scopri modelli nascosti</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <button className="inline-flex items-center px-3 py-2 bg-runner text-white rounded-md hover:bg-runner-dark transition-colors">
                      Crea nuovo confronto
                    </button>
                  </div>
                </div>
                
                <div className="glass-card p-6 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h4 className="font-medium">Scegli parametri da confrontare</h4>
                    <button className="mt-2 sm:mt-0 text-runner hover:text-runner-dark transition-colors text-sm">
                      Resetta selezione
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="relative">
                      <select className="w-full px-3 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner appearance-none">
                        <option>Ritmo</option>
                        <option>Distanza</option>
                        <option>Frequenza cardiaca</option>
                        <option>Cadenza</option>
                        <option>Tempo di contatto</option>
                      </select>
                      <LineChart className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                    
                    <div className="relative">
                      <select className="w-full px-3 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner appearance-none">
                        <option>Frequenza cardiaca</option>
                        <option>Ritmo</option>
                        <option>Distanza</option>
                        <option>Cadenza</option>
                        <option>Tempo di contatto</option>
                      </select>
                      <BarChart2 className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                    
                    <div className="relative">
                      <select className="w-full px-3 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner appearance-none">
                        <option>Cadenza</option>
                        <option>Ritmo</option>
                        <option>Distanza</option>
                        <option>Frequenza cardiaca</option>
                        <option>Tempo di contatto</option>
                      </select>
                      <PieChart className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                    
                    <div className="relative">
                      <select className="w-full px-3 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner appearance-none">
                        <option>Running Power</option>
                        <option>Ritmo</option>
                        <option>Distanza</option>
                        <option>Frequenza cardiaca</option>
                        <option>Cadenza</option>
                      </select>
                      <Activity className="absolute right-2 top-1/2 transform -translate-y-1/2 text-muted-foreground pointer-events-none" size={16} />
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 h-72 flex items-center justify-center mb-6">
                    <div className="text-muted-foreground text-sm">
                      Area grafico interattivo - Seleziona i parametri per visualizzare la correlazione
                    </div>
                  </div>
                  
                  <h4 className="font-medium mb-4">Impatto di fattori esterni</h4>
                  <div className="space-y-4">
                    {impactFactors.map((factor, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-32 flex-shrink-0">
                          <h5 className="font-medium text-sm">{factor.name}</h5>
                        </div>
                        <div className="flex-grow mx-4">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div 
                              className="bg-gradient-to-r from-runner to-runner-accent h-2.5 rounded-full" 
                              style={{ width: `${factor.impact}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="w-16 text-right flex-shrink-0">
                          <span className="text-sm font-medium">{factor.impact}%</span>
                        </div>
                        <div className="ml-2 text-sm text-muted-foreground w-96 flex-shrink-0">
                          {factor.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="prediction" className="animate-fade-in">
              <div className="glass-card p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Previsioni AI</h3>
                    <p className="text-muted-foreground">Simulazioni basate su machine learning per prevedere performance future</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <select className="px-3 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner">
                      <option>Maratona</option>
                      <option>Mezza Maratona</option>
                      <option>10K</option>
                      <option>5K</option>
                    </select>
                  </div>
                </div>
                
                <div className="glass-card p-6 mb-6 border border-runner/10">
                  <h4 className="font-medium mb-6">Previsioni per Maratona</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {predictionScenarios.map((scenario, index) => (
                      <div key={index} className="glass-card p-4 border border-runner/10">
                        <div className="bg-runner/5 px-3 py-1 rounded-full text-sm font-medium text-runner inline-block mb-2">
                          Scenario {scenario.name}
                        </div>
                        <div className="mb-4">
                          <p className="text-2xl font-bold text-runner mb-1">{scenario.prediction}</p>
                          <div className="flex items-center">
                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">
                              Confidenza: {scenario.confidence}
                            </span>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">{scenario.description}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 h-72 flex items-center justify-center mb-6">
                    <div className="text-muted-foreground text-sm">
                      Simulazione interattiva - Sposta i controlli per vedere come cambiano le previsioni
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-runner flex items-center justify-center text-white mt-1">
                        <Brain size={16} />
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-sm">Come migliorare le tue previsioni</h4>
                        <p className="text-sm text-blue-800">
                          Secondo il nostro modello, aumentare la tua cadenza media da 175 a 178 spm potrebbe migliorare il tuo tempo in maratona di circa 4-6 minuti. Aggiungi esercizi di tecnica di corsa 2 volte a settimana per ottenere questo miglioramento.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="risk" className="animate-fade-in">
              <div className="glass-card p-6 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Analisi del Rischio Infortuni</h3>
                    <p className="text-muted-foreground">Prevenzione basata sui pattern di allenamento e biomeccanica</p>
                  </div>
                  <div className="mt-4 sm:mt-0">
                    <Chip label="Rischio Attuale: Basso" color="green" />
                  </div>
                </div>
                
                <div className="glass-card p-6 mb-6 border border-runner/10">
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="font-medium">Punteggio di rischio generale</h4>
                    <p className="text-2xl font-bold text-green-600">18%</p>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-8">
                    <div 
                      className="h-3 rounded-full" 
                      style={{ 
                        width: '18%',
                        background: 'linear-gradient(to right, #22c55e, #eab308, #ef4444)'
                      }}
                    ></div>
                    <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                      <span>Basso (0-30%)</span>
                      <span>Medio (31-70%)</span>
                      <span>Alto (71-100%)</span>
                    </div>
                  </div>
                  
                  <h4 className="font-medium mb-4">Rischio per area</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="glass-card p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Ginocchia</h5>
                        <span className="text-sm font-medium text-green-600">15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Rischio basso - Pattern di corsa stabile</p>
                    </div>
                    
                    <div className="glass-card p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Tendine d'Achille</h5>
                        <span className="text-sm font-medium text-green-600">22%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '22%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Rischio basso - Buona flessibilità</p>
                    </div>
                    
                    <div className="glass-card p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Fascia plantare</h5>
                        <span className="text-sm font-medium text-amber-500">32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '32%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Rischio medio-basso - Monitorare la tensione</p>
                    </div>
                    
                    <div className="glass-card p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-medium">Zona lombare</h5>
                        <span className="text-sm font-medium text-green-600">12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">Rischio basso - Buona stabilità del core</p>
                    </div>
                  </div>
                  
                  <h4 className="font-medium mb-4">Suggerimenti per la prevenzione</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 rounded-full bg-runner flex items-center justify-center text-white mt-1">
                          <AlertTriangle size={16} />
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm">Monitoraggio fascia plantare</h4>
                          <p className="text-sm text-blue-800">
                            C'è un leggero incremento della tensione sulla fascia plantare. Considera l'aggiunta di esercizi di stretching specifici e auto-massaggio con pallina 2-3 volte a settimana.
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
                          <h4 className="font-medium text-sm">Bilanciamento ottimale</h4>
                          <p className="text-sm text-green-800">
                            Il tuo attuale rapporto tra carico e recupero è ottimale. Continua con questa progressione e mantieni i giorni di recupero programmati.
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

export default AdvancedAnalysis;
