
import { useState } from 'react';
import { Search, Filter, Users, User, Award, MessageCircle, Clock, Heart, Settings } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chip from '@/components/ui/Chip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Community = () => {
  const [activeTab, setActiveTab] = useState('feed');
  
  const tabs = [
    { id: 'feed', label: 'Feed', icon: <MessageCircle size={16} /> },
    { id: 'groups', label: 'Gruppi', icon: <Users size={16} /> },
    { id: 'challenges', label: 'Sfide', icon: <Award size={16} /> },
    { id: 'mentorship', label: 'Mentorship', icon: <User size={16} /> },
  ];
  
  // Dati di esempio per il feed
  const feedPosts = [
    {
      id: 1,
      user: {
        name: 'Marco B.',
        avatar: null,
        level: 'Intermedio'
      },
      content: 'Ho appena completato una 10K in 42:15, il mio nuovo personal best! La zona di allenamento ottimale suggerita dall\'AI ha fatto davvero la differenza nelle ultime settimane.',
      activity: {
        type: 'Corsa',
        distance: '10 km',
        pace: '4:13/km',
        duration: '42:15'
      },
      likes: 18,
      comments: 5,
      time: '2 ore fa'
    },
    {
      id: 2,
      user: {
        name: 'Laura R.',
        avatar: null,
        level: 'Avanzato'
      },
      content: 'Primo allenamento dopo l\'infortunio, seguendo il piano di recupero personalizzato. Sensazioni migliori del previsto!',
      activity: {
        type: 'Corsa di recupero',
        distance: '5.3 km',
        pace: '5:30/km',
        duration: '29:09'
      },
      likes: 24,
      comments: 8,
      time: '5 ore fa'
    },
    {
      id: 3,
      user: {
        name: 'Andrea V.',
        avatar: null,
        level: 'Elite'
      },
      content: 'Session di interval training completata. L\'analisi predittiva aveva ragione: ho migliorato la tolleranza al lattato del 12% nell\'ultimo mese!',
      activity: {
        type: 'Intervalli',
        distance: '12.5 km',
        pace: '3:55/km',
        duration: '48:45'
      },
      likes: 32,
      comments: 12,
      time: '1 giorno fa'
    }
  ];
  
  // Dati di esempio per i gruppi
  const groups = [
    {
      id: 1,
      name: 'Maratoneti Milano',
      members: 248,
      type: 'Locale',
      focus: 'Maratona',
      level: 'Tutti i livelli'
    },
    {
      id: 2,
      name: 'Trail Runners Italia',
      members: 512,
      type: 'Nazionale',
      focus: 'Trail Running',
      level: 'Intermedio/Avanzato'
    },
    {
      id: 3,
      name: 'Running Technique Lab',
      members: 189,
      type: 'Virtual',
      focus: 'Tecnica di corsa',
      level: 'Tutti i livelli'
    }
  ];
  
  // Dati di esempio per le sfide
  const challenges = [
    {
      id: 1,
      title: 'Sfida 100km',
      description: 'Corri 100km in una settimana',
      participants: 356,
      reward: 'Badge Distanza Gold',
      status: 'In corso',
      remaining: '3 giorni'
    },
    {
      id: 2,
      title: 'Consistency Challenge',
      description: 'Corri almeno 30 minuti ogni giorno per 30 giorni',
      participants: 512,
      reward: 'Badge Consistenza Platinum',
      status: 'In corso',
      remaining: '21 giorni'
    },
    {
      id: 3,
      title: 'Hill Crusher',
      description: 'Accumula 1000m di dislivello positivo in una settimana',
      participants: 178,
      reward: 'Badge Scalatore Silver',
      status: 'Prossimamente',
      remaining: 'Inizia tra 5 giorni'
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20 pb-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 space-y-4 md:space-y-0">
            <div>
              <h1 className="text-3xl font-bold">Community</h1>
              <p className="text-muted-foreground">
                Connettiti con altri runner, partecipa a sfide e condividi i tuoi successi
              </p>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                <input 
                  type="text" 
                  placeholder="Cerca nella community..." 
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
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
                <TabsContent value="feed" className="animate-fade-in">
                  <div className="glass-card p-6 mb-6">
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 rounded-full bg-runner/10 flex items-center justify-center text-runner mr-3">
                        <span className="font-medium">MR</span>
                      </div>
                      <input 
                        type="text" 
                        placeholder="Condividi i tuoi risultati o pensieri..." 
                        className="flex-1 bg-white border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-runner"
                      />
                      <button className="ml-3 px-4 py-2 bg-runner text-white rounded-lg hover:bg-runner-dark transition-colors">
                        Pubblica
                      </button>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="inline-flex items-center px-3 py-1.5 bg-runner/10 text-runner rounded-lg text-sm">
                        <Clock size={14} className="mr-1" /> Attività recente
                      </button>
                      <button className="inline-flex items-center px-3 py-1.5 bg-white border border-border rounded-lg text-sm">
                        <Award size={14} className="mr-1" /> Traguardo
                      </button>
                      <button className="inline-flex items-center px-3 py-1.5 bg-white border border-border rounded-lg text-sm">
                        <MessageCircle size={14} className="mr-1" /> Solo testo
                      </button>
                    </div>
                  </div>
                  
                  {feedPosts.map((post) => (
                    <div key={post.id} className="glass-card p-6 mb-6 animate-fade-in">
                      <div className="flex justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-runner-accent/10 flex items-center justify-center text-runner-accent mr-3">
                            <span className="font-medium">{post.user.name.split(' ').map(n => n[0]).join('')}</span>
                          </div>
                          <div>
                            <h4 className="font-medium">{post.user.name}</h4>
                            <div className="flex items-center">
                              <Chip label={post.user.level} color="energy" size="xs" />
                              <span className="text-xs text-muted-foreground ml-2">{post.time}</span>
                            </div>
                          </div>
                        </div>
                        <button className="text-muted-foreground hover:text-foreground">
                          <Settings size={16} />
                        </button>
                      </div>
                      
                      <p className="mb-4">{post.content}</p>
                      
                      {post.activity && (
                        <div className="bg-runner/5 p-4 rounded-lg mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <h5 className="font-medium text-sm">{post.activity.type}</h5>
                            <Chip label="Running DNA aggiornato" color="purple" size="xs" />
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div>
                              <p className="text-xs text-muted-foreground">Distanza</p>
                              <p className="font-medium">{post.activity.distance}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Ritmo</p>
                              <p className="font-medium">{post.activity.pace}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Tempo</p>
                              <p className="font-medium">{post.activity.duration}</p>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <button className="inline-flex items-center text-muted-foreground hover:text-runner transition-colors">
                          <Heart size={16} className="mr-1" />
                          <span>{post.likes}</span>
                        </button>
                        <button className="inline-flex items-center text-muted-foreground hover:text-runner transition-colors">
                          <MessageCircle size={16} className="mr-1" />
                          <span>{post.comments} commenti</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </TabsContent>
                
                <TabsContent value="groups" className="animate-fade-in">
                  <div className="glass-card p-6 mb-6">
                    <h3 className="text-lg font-medium mb-4">Gruppi suggeriti per te</h3>
                    <p className="text-muted-foreground mb-6">Basati sul tuo livello e interessi</p>
                    
                    <div className="space-y-4">
                      {groups.map((group) => (
                        <div key={group.id} className="flex items-center justify-between p-4 bg-white rounded-lg border border-border">
                          <div>
                            <h4 className="font-medium mb-1">{group.name}</h4>
                            <div className="flex flex-wrap gap-2">
                              <Chip label={group.type} color="purple" size="xs" />
                              <Chip label={group.focus} color="energy" size="xs" />
                              <Chip label={group.level} color="gray" size="xs" />
                            </div>
                          </div>
                          <div className="flex flex-col items-end">
                            <p className="text-sm text-muted-foreground mb-2">{group.members} membri</p>
                            <button className="text-sm bg-runner text-white px-3 py-1 rounded-md hover:bg-runner-dark transition-colors">
                              Unisciti
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 text-center">
                      <button className="text-runner hover:text-runner-dark transition-colors">
                        Vedi tutti i gruppi
                      </button>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="challenges" className="animate-fade-in">
                  <div className="glass-card p-6 mb-6">
                    <h3 className="text-lg font-medium mb-4">Sfide attive</h3>
                    <p className="text-muted-foreground mb-6">Metti alla prova i tuoi limiti e guadagna riconoscimenti</p>
                    
                    <div className="space-y-6">
                      {challenges.map((challenge) => (
                        <div key={challenge.id} className="glass-card p-6 border border-runner/20">
                          <div className="flex justify-between mb-4">
                            <h4 className="text-xl font-bold">{challenge.title}</h4>
                            <Chip 
                              label={challenge.status} 
                              color={challenge.status === 'In corso' ? 'green' : 'purple'} 
                              size="sm" 
                            />
                          </div>
                          
                          <p className="mb-4">{challenge.description}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                              <p className="text-xs text-muted-foreground">Partecipanti</p>
                              <p className="font-medium">{challenge.participants}</p>
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground">Tempo rimanente</p>
                              <p className="font-medium">{challenge.remaining}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <Award size={18} className="text-runner-accent mr-1" />
                              <span className="text-sm">{challenge.reward}</span>
                            </div>
                            <button className="text-sm bg-runner text-white px-3 py-1 rounded-md hover:bg-runner-dark transition-colors">
                              Partecipa
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="mentorship" className="animate-fade-in">
                  <div className="glass-card p-6 mb-6">
                    <h3 className="text-lg font-medium mb-4">Programma di Mentorship</h3>
                    <p className="text-muted-foreground mb-6">Connettiti con runner esperti o offri la tua esperienza</p>
                    
                    <div className="flex flex-col space-y-4">
                      <div className="p-6 border border-dashed border-runner rounded-lg bg-runner/5 text-center">
                        <h4 className="font-medium mb-2">Vuoi migliorare con l'aiuto di un mentor?</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Un mentor ti può aiutare a raggiungere i tuoi obiettivi più velocemente con consigli personalizzati
                        </p>
                        <button className="bg-runner text-white px-4 py-2 rounded-md hover:bg-runner-dark transition-colors">
                          Trova un mentor
                        </button>
                      </div>
                      
                      <div className="p-6 border border-dashed border-runner-accent rounded-lg bg-runner-accent/5 text-center">
                        <h4 className="font-medium mb-2">Hai esperienza da condividere?</h4>
                        <p className="text-sm text-muted-foreground mb-4">
                          Diventa mentor e aiuta altri runner a migliorare, guadagnando badge esclusivi
                        </p>
                        <button className="bg-runner-accent text-white px-4 py-2 rounded-md hover:bg-runner-accent/80 transition-colors">
                          Diventa mentor
                        </button>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-6 animate-fade-in">
                <h3 className="text-lg font-medium mb-4">Il tuo profilo community</h3>
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-runner/10 flex items-center justify-center text-runner mr-4">
                    <span className="text-xl font-medium">MR</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Marco Rossi</h4>
                    <div className="flex items-center">
                      <Chip label="Intermedio" color="energy" size="sm" className="mr-2" />
                      <span className="text-xs text-muted-foreground">Milano, IT</span>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <p className="font-bold">248</p>
                    <p className="text-xs text-muted-foreground">Attività</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">32</p>
                    <p className="text-xs text-muted-foreground">Badge</p>
                  </div>
                  <div className="text-center">
                    <p className="font-bold">15</p>
                    <p className="text-xs text-muted-foreground">Sfide</p>
                  </div>
                </div>
                
                <button className="w-full py-2 text-center text-runner border border-runner rounded-lg hover:bg-runner hover:text-white transition-colors">
                  Modifica profilo
                </button>
              </div>
              
              <div className="glass-card p-6 animate-fade-in">
                <h3 className="text-lg font-medium mb-4">Runner simili a te</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Basato sui tuoi interessi, livello e obiettivi
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-runner-accent/10 flex items-center justify-center text-runner-accent mr-3">
                        <span className="font-medium">LR</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Laura Rossi</h4>
                        <div className="flex items-center">
                          <Chip label="10K" color="purple" size="xs" className="mr-1" />
                          <span className="text-xs text-muted-foreground">Milano</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-xs text-runner border border-runner px-2 py-1 rounded-md hover:bg-runner hover:text-white transition-colors">
                      Connetti
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-runner-energy/10 flex items-center justify-center text-runner-energy mr-3">
                        <span className="font-medium">AV</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Andrea Verdi</h4>
                        <div className="flex items-center">
                          <Chip label="Half Marathon" color="energy" size="xs" className="mr-1" />
                          <span className="text-xs text-muted-foreground">Roma</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-xs text-runner border border-runner px-2 py-1 rounded-md hover:bg-runner hover:text-white transition-colors">
                      Connetti
                    </button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                        <span className="font-medium">SB</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Sofia Bianchi</h4>
                        <div className="flex items-center">
                          <Chip label="5K" color="green" size="xs" className="mr-1" />
                          <span className="text-xs text-muted-foreground">Torino</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-xs text-runner border border-runner px-2 py-1 rounded-md hover:bg-runner hover:text-white transition-colors">
                      Connetti
                    </button>
                  </div>
                </div>
                
                <button className="w-full py-2 text-center text-runner mt-4">
                  Mostra altri
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Community;
