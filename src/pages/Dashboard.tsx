
import { useState } from 'react';
import { BarChart2, Calendar, Filter, Medal, RefreshCw } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chip from '@/components/ui/Chip';
import RunningStats from '@/components/dashboard/RunningStats';
import ActivityChart from '@/components/dashboard/ActivityChart';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  const tabs = [
    { id: 'overview', label: 'Panoramica', icon: <BarChart2 size={16} /> },
    { id: 'activities', label: 'Attività', icon: <Calendar size={16} /> },
    { id: 'progress', label: 'Progressi', icon: <Medal size={16} /> },
  ];
  
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">Dashboard</h1>
              <p className="text-muted-foreground">
                Monitora i tuoi progressi e visualizza le statistiche di allenamento
              </p>
            </div>
            
            <div className="flex space-x-2">
              <button className="inline-flex items-center px-4 py-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors">
                <Filter size={16} className="mr-2" />
                Filtra
              </button>
              <button className="inline-flex items-center px-4 py-2 bg-runner text-white rounded-lg hover:bg-runner-dark transition-colors">
                <RefreshCw size={16} className="mr-2" />
                Aggiorna
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
          
          <div className="glass-card p-6 mb-8 animate-fade-in">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 space-y-4 sm:space-y-0">
              <div>
                <div className="flex items-center mb-2">
                  <h2 className="text-2xl font-bold">Statistiche settimanali</h2>
                  <Chip label="Questa settimana" color="purple" className="ml-3" />
                </div>
                <p className="text-muted-foreground">15 Maggio - 21 Maggio 2023</p>
              </div>
              
              <div className="flex items-center space-x-3">
                <select className="px-3 py-2 bg-white border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-runner">
                  <option>Questa settimana</option>
                  <option>Settimana scorsa</option>
                  <option>Ultimi 30 giorni</option>
                </select>
              </div>
            </div>
            
            <RunningStats />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <ActivityChart />
            </div>
            
            <div>
              <div className="glass-card p-6 h-full animate-fade-in">
                <h3 className="text-lg font-medium mb-6">Insight AI</h3>
                
                <div className="space-y-6">
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-start space-x-3 mb-2">
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
                        <h4 className="font-medium text-sm">Progresso costante</h4>
                        <p className="text-sm text-blue-800">
                          La tua distanza settimanale è aumentata dell'8% rispetto alla settimana scorsa, mantenendo un buon equilibrio con i tempi di recupero.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                    <div className="flex items-start space-x-3 mb-2">
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
                        <h4 className="font-medium text-sm">Miglioramento VO2max</h4>
                        <p className="text-sm text-green-800">
                          Il tuo VO2max stimato è aumentato di 3 punti questo mese. Continua con l'allenamento ad intervalli per migliorare ulteriormente.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-100">
                    <div className="flex items-start space-x-3 mb-2">
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
                        <h4 className="font-medium text-sm">Suggerimento</h4>
                        <p className="text-sm text-orange-800">
                          La tua cadenza tende a diminuire negli ultimi chilometri. Prova esercizi di tecnica di corsa per migliorare questo aspetto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
