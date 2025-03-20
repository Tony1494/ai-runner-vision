
import { ChevronDown, Download, Settings, Shield } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProfileCard from '@/components/profile/ProfileCard';
import ProfileAchievements from '@/components/profile/ProfileAchievements';
import EquipmentTracker from '@/components/profile/EquipmentTracker';
import PerformanceTrends from '@/components/profile/PerformanceTrends';
import { UserProfile, Achievement, Equipment } from '@/types/profile';

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
  { distance: "5K", time: "20:15", date: "12 Feb 2023", location: "Parco Sempione" },
  { distance: "10K", time: "45:30", date: "5 Mar 2023", location: "Milano City Run" },
  { distance: "15K", time: "1:12:45", date: "23 Apr 2023", location: "Monza Half" },
  { distance: "Half Marathon", time: "1:45:22", date: "10 Oct 2023", location: "Milano21" }
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

const Profile = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <ProfileCard profile={userProfile} />
              
              <div className="glass-card p-6 mt-8 animate-fade-in">
                <div className="flex justify-between items-center mb-4">
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
              
              <ProfileAchievements achievements={achievements} />
            </div>
            
            <div className="lg:col-span-2">
              <div className="glass-card p-6 mb-8 animate-fade-in">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium">Personal Best</h3>
                  <button className="text-xs px-3 py-1 bg-blue-50 text-blue-800 rounded-full">
                    Vedi tutti
                  </button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Distanza</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Tempo</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Data</th>
                        <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Luogo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {personalRecords.map((record, index) => (
                        <tr key={index} className="hover:bg-blue-50/30">
                          <td className="py-3 pr-4 font-medium">{record.distance}</td>
                          <td className="py-3 pr-4 text-runner font-medium">{record.time}</td>
                          <td className="py-3 pr-4 text-muted-foreground">{record.date}</td>
                          <td className="py-3 text-muted-foreground">{record.location}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              <div className="glass-card p-6 mb-8 animate-fade-in">
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
              
              <PerformanceTrends />
              
              <EquipmentTracker equipment={equipment} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
