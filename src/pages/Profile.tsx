
import React, { useState } from 'react';
import { BarChart4, ChevronDown, Download, FileBarChart, Footprints, Heart, LineChart, Medal, Settings, Shield, Sigma, Target, Timer, User } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileAchievements from '@/components/profile/ProfileAchievements';
import EquipmentTracker from '@/components/profile/EquipmentTracker';
import PerformanceTrends from '@/components/profile/PerformanceTrends';
import ProfileTabs from '@/components/profile/ProfileTabs';
import RunnerDNAChart from '@/components/profile/RunnerDNAChart';
import FitnessStateCard from '@/components/profile/FitnessStateCard';
import GoalsSection from '@/components/profile/GoalsSection';
import PersonalRecords from '@/components/profile/PersonalRecords';
import { UserProfile, Achievement, Equipment } from '@/types/profile';
import { TabsContent } from '@/components/ui/tabs';

// Dati di esempio per il profilo utente
const userProfile: UserProfile = {
  personal: {
    name: "Marco Rossi",
    location: "Milano, Italia",
    since: "Maggio 2021",
    bio: "Runner appassionato, amo le medie distanze e le gare in città. Mi alleno per migliorare il mio tempo sui 10K e prepararmi per la mia prima mezza maratona."
  },
  athletic: {
    level: "Intermedio",
    preferredDistance: "10K",
    weeklyGoal: "30km"
  },
  stats: {
    runs: 248,
    distance: 1580,
    achievements: 32
  },
  settings: {
    distanceUnit: 'km',
    paceUnit: 'min/km',
    weekStart: 'monday'
  }
};

// Dati di esempio per i record personali
const personalRecords = [
  { id: 1, distance: "5K", time: "20:15", pace: "4:03 min/km", date: "12 Feb 2023", location: "Parco Sempione", improvement: "-20s" },
  { id: 2, distance: "10K", time: "45:30", pace: "4:33 min/km", date: "5 Mar 2023", event: "Milano City Run", eventUrl: "#", improvement: "-1:05" },
  { id: 3, distance: "15K", time: "1:12:45", pace: "4:51 min/km", date: "23 Apr 2023", location: "Monza", improvement: "-2:30" },
  { id: 4, distance: "Half Marathon", time: "1:45:22", pace: "5:00 min/km", date: "10 Oct 2023", event: "Milano21", eventUrl: "#" }
];

// Dati di esempio per i certificati medici
const medicalCertificates = [
  { 
    id: 1, 
    name: "Certificato agonistico", 
    issuedDate: "20 Gen 2023", 
    expiryDate: "20 Gen 2024", 
    status: "Valido"
  }
];

// Dati di esempio per gli achievement
const achievements: Achievement[] = [
  {
    id: 1,
    name: "10K Sub-50",
    description: "Hai completato la tua prima 10K sotto i 50 minuti",
    icon: "🏃",
    date: "15 Mar 2023",
    category: "velocità",
    level: "silver"
  },
  {
    id: 2,
    name: "Road Warrior",
    description: "Hai corso per più di 1000 km in totale",
    icon: "🛣️",
    date: "2 Apr 2023",
    category: "distanza",
    level: "gold"
  },
  {
    id: 3,
    name: "Streak Master",
    description: "Hai corso per 14 giorni consecutivi",
    icon: "🔥",
    date: "10 Mag 2023",
    category: "costanza",
    level: "bronze"
  },
  {
    id: 4,
    name: "VO2 Improver",
    description: "Hai migliorato il tuo VO2max di 3 punti in un mese",
    icon: "📈",
    date: "30 Giu 2023",
    category: "miglioramento",
    level: "silver"
  }
];

// Dati di esempio per l'equipaggiamento
const equipment: Equipment[] = [
  {
    id: 1,
    name: "Nike Pegasus 39",
    type: "scarpe",
    brand: "Nike",
    model: "Pegasus 39",
    purchaseDate: "10 Gen 2023",
    distance: 450,
    sessions: 62,
    wearPercentage: 45,
    notes: "Ottime per allenamenti quotidiani"
  },
  {
    id: 2,
    name: "Adidas Adizero Adios Pro 3",
    type: "scarpe",
    brand: "Adidas",
    model: "Adizero Adios Pro 3",
    purchaseDate: "15 Mar 2023",
    distance: 120,
    sessions: 8,
    wearPercentage: 20,
    notes: "Scarpe da gara per 10K e mezza maratona"
  },
  {
    id: 3,
    name: "Garmin Forerunner 955",
    type: "tecnologia",
    brand: "Garmin",
    model: "Forerunner 955",
    purchaseDate: "5 Feb 2023",
    sessions: 180,
    notes: "Ottimo per tracciare tutti i parametri avanzati"
  },
  {
    id: 4,
    name: "Maglia tecnica Under Armour",
    type: "abbigliamento",
    brand: "Under Armour",
    model: "Tech 2.0",
    purchaseDate: "20 Apr 2023",
    sessions: 25,
    notes: "Leggera e traspirante"
  }
];

// Dati di esempio per il Runner DNA
const runnerDNAData = [
  { subject: 'Resistenza', value: 85, fullMark: 100, tooltip: 'Capacità di mantenere lo sforzo nel tempo' },
  { subject: 'Velocità', value: 65, fullMark: 100, tooltip: 'Capacità di esprimere velocità massimale' },
  { subject: 'Forza', value: 70, fullMark: 100, tooltip: 'Capacità muscolare e gestione delle salite' },
  { subject: 'Tecnica', value: 78, fullMark: 100, tooltip: 'Efficienza della corsa e biomeccanica' },
  { subject: 'Efficienza', value: 82, fullMark: 100, tooltip: 'Economia di corsa e consumo energetico' },
  { subject: 'Recupero', value: 68, fullMark: 100, tooltip: 'Velocità di recupero tra allenamenti' },
];

// Dati di esempio per lo stato di forma
const fitnessStateData = {
  fitnessScore: 75,
  fatigueScore: 60,
  formScore: 15,
  readinessScore: 85,
  peakDate: "15 Maggio 2024",
  daysToGoal: 21,
  fitnessData: [
    { date: "1 Apr", fitness: 65, fatigue: 70, form: -5 },
    { date: "8 Apr", fitness: 68, fatigue: 65, form: 3 },
    { date: "15 Apr", fitness: 70, fatigue: 68, form: 2 },
    { date: "22 Apr", fitness: 72, fatigue: 65, form: 7 },
    { date: "29 Apr", fitness: 75, fatigue: 60, form: 15 },
  ]
};

// Dati di esempio per gli obiettivi
const goals = [
  {
    id: 1,
    title: "Milano Half Marathon",
    type: "race" as const,
    target: "Sub 1:40:00",
    deadline: "15 Maggio 2024",
    daysLeft: 21,
    progress: 85,
    readiness: 78
  },
  {
    id: 2,
    title: "Migliorare VO2max",
    type: "performance" as const,
    target: "Da 52 a 55 ml/kg/min",
    deadline: "30 Giugno 2024",
    daysLeft: 67,
    progress: 60,
    readiness: 65
  },
  {
    id: 3,
    title: "Consistenza allenamenti",
    type: "habit" as const,
    target: "4 sessioni a settimana",
    deadline: "Continuo",
    daysLeft: 999,
    progress: 90,
    readiness: 95
  }
];

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Banner profilo migliorato */}
          <div className="relative h-40 rounded-lg overflow-hidden mb-8 bg-gradient-to-r from-runner to-runner-accent animate-fade-in">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <div className="text-sm font-medium">Stato runner</div>
              <div className="flex items-center space-x-2 mt-1">
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                  In forma
                </div>
                <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium flex items-center">
                  <Heart size={14} className="mr-1" />
                  Fase di peak
                </div>
              </div>
            </div>
          </div>

          <ProfileTabs 
            tabs={[
              { id: 'overview', label: 'Panoramica', icon: <User size={16} /> },
              { id: 'progression', label: 'Progressione', icon: <LineChart size={16} /> },
              { id: 'equipment', label: 'Attrezzatura', icon: <Footprints size={16} /> },
              { id: 'records', label: 'Record & Achievement', icon: <Medal size={16} /> },
              { id: 'settings', label: 'Impostazioni', icon: <Settings size={16} /> },
            ]}
            defaultValue="overview"
            className="mb-8"
          >
            {/* Tab Panoramica */}
            <TabsContent value="overview" className="animate-fade-in">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <ProfileCard profile={userProfile} className="mb-8" />
                  <ProfileAchievements achievements={achievements} />
                </div>
                
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 gap-8">
                    {/* Runner DNA e Stato di forma */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="glass-card p-6">
                        <RunnerDNAChart data={runnerDNAData} />
                      </div>
                      
                      <FitnessStateCard {...fitnessStateData} />
                    </div>
                    
                    {/* Obiettivi */}
                    <GoalsSection goals={goals} />
                    
                    {/* Record personali */}
                    <PersonalRecords records={personalRecords} />
                    
                    {/* Certificati Medici */}
                    <div className="glass-card p-6 animate-fade-in">
                      <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center space-x-2">
                          <Shield size={20} className="text-green-600" />
                          <h3 className="text-lg font-medium">Certificati Medici</h3>
                        </div>
                        <button className="text-xs px-3 py-1 bg-green-50 text-green-800 rounded-full">
                          Carica nuovo
                        </button>
                      </div>
                      
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Certificato</th>
                              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Data emissione</th>
                              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Scadenza</th>
                              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Stato</th>
                              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Azioni</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-border">
                            {medicalCertificates.map((cert) => (
                              <tr key={cert.id} className="hover:bg-blue-50/30">
                                <td className="py-3 pr-4 font-medium">{cert.name}</td>
                                <td className="py-3 pr-4 text-muted-foreground">{cert.issuedDate}</td>
                                <td className="py-3 pr-4 text-muted-foreground">{cert.expiryDate}</td>
                                <td className="py-3 pr-4">
                                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                    {cert.status}
                                  </span>
                                </td>
                                <td className="py-3">
                                  <button className="text-blue-600 hover:text-blue-800 flex items-center text-sm">
                                    <Download size={14} className="mr-1" />
                                    Scarica
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Tab Progressione */}
            <TabsContent value="progression" className="animate-fade-in">
              <div className="grid grid-cols-1 gap-8">
                <div className="glass-card p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <LineChart size={20} className="text-runner" />
                      <h3 className="text-lg font-medium">Progressione nel tempo</h3>
                    </div>
                    <div className="flex space-x-2">
                      <select className="text-sm px-3 py-1 border border-border rounded focus:outline-none focus:ring-1 focus:ring-runner">
                        <option>Ultimi 6 mesi</option>
                        <option>Ultimo anno</option>
                        <option>Tutto</option>
                      </select>
                      <select className="text-sm px-3 py-1 border border-border rounded focus:outline-none focus:ring-1 focus:ring-runner">
                        <option>VO2max</option>
                        <option>Passo soglia</option>
                        <option>Carico di allenamento</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="h-80">
                    <PerformanceTrends />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="glass-card p-6">
                    <div className="flex items-center mb-4">
                      <Target size={20} className="text-runner mr-2" />
                      <h3 className="text-lg font-medium">Analisi delle tendenze</h3>
                    </div>
                    <p className="text-muted-foreground mb-8">Seleziona i parametri da analizzare per vedere correlazioni e tendenze</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <button className="px-3 py-1 bg-runner text-white rounded-full text-sm">VO2max</button>
                      <button className="px-3 py-1 border border-runner text-runner rounded-full text-sm">Distanza settimanale</button>
                      <button className="px-3 py-1 border border-runner text-runner rounded-full text-sm">Passo medio</button>
                      <button className="px-3 py-1 border border-runner text-runner rounded-full text-sm">FC media</button>
                      <button className="px-3 py-1 border border-runner text-runner rounded-full text-sm">TSS</button>
                    </div>
                    
                    <div className="p-10 bg-gray-50 rounded-lg flex items-center justify-center">
                      <p className="text-muted-foreground text-sm text-center">Seleziona almeno due parametri<br />per visualizzare l'analisi</p>
                    </div>
                  </div>
                  
                  <div className="glass-card p-6">
                    <div className="flex items-center mb-4">
                      <BarChart4 size={20} className="text-runner mr-2" />
                      <h3 className="text-lg font-medium">Confronto stagionale</h3>
                    </div>
                    
                    <div className="flex space-x-2 mb-4">
                      <button className="px-3 py-1 bg-runner text-white rounded-full text-sm">2023</button>
                      <button className="px-3 py-1 border border-runner text-runner rounded-full text-sm">2022</button>
                      <button className="px-3 py-1 border border-border text-muted-foreground rounded-full text-sm">+ Aggiungi</button>
                    </div>
                    
                    <div className="h-60 mb-4">
                      {/* Placeholder per il grafico di confronto stagionale */}
                      <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center">
                        <p className="text-muted-foreground">Grafico di confronto stagionale</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800 font-medium">Miglioramenti</p>
                        <ul className="text-sm text-green-700 mt-2">
                          <li className="flex items-center">
                            <Timer size={12} className="mr-1" />
                            Passo medio: -15s/km
                          </li>
                          <li className="flex items-center mt-1">
                            <Sigma size={12} className="mr-1" />
                            Volume: +15%
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-amber-50 p-4 rounded-lg">
                        <p className="text-amber-800 font-medium">Regressioni</p>
                        <ul className="text-sm text-amber-700 mt-2">
                          <li className="flex items-center">
                            <FileBarChart size={12} className="mr-1" />
                            Consistenza: -5%
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Tab Attrezzatura */}
            <TabsContent value="equipment" className="animate-fade-in">
              <div className="grid grid-cols-1 gap-8">
                <EquipmentTracker equipment={equipment} />
              </div>
            </TabsContent>
            
            {/* Tab Record & Achievement */}
            <TabsContent value="records" className="animate-fade-in">
              <div className="grid grid-cols-1 gap-8">
                <PersonalRecords records={personalRecords} />
                <ProfileAchievements achievements={achievements} />
              </div>
            </TabsContent>
            
            {/* Tab Impostazioni */}
            <TabsContent value="settings" className="animate-fade-in">
              <div className="glass-card p-6 animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">Impostazioni</h3>
                  <button className="text-muted-foreground hover:text-foreground">
                    <Settings size={18} />
                  </button>
                </div>
                
                <div className="space-y-4">
                  <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                    <span>Account</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                    <span>Notifiche</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                    <span>Privacy</span>
                    <ChevronDown size={16} />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-blue-50/50 transition-colors">
                    <span>Dispositivi collegati</span>
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>
            </TabsContent>
          </ProfileTabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
