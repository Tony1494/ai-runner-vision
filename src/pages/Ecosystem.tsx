import { useState } from 'react';
import { ArrowRight, Smartphone, Watch, Cloud, Zap, Cpu, Workflow, ShieldCheck, Gift } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chip from '@/components/ui/Chip';
import { useToast } from '@/hooks/use-toast';

const Ecosystem = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  
  const handlePreRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Pre-registrazione completata!",
      description: "Ti terremo aggiornato sugli sviluppi futuri del nostro ecosistema.",
    });
    
    setEmail('');
  };
  
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="py-20 bg-gradient-to-b from-white to-runner-light/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Chip label="Ecosistema completo" color="accent" className="mb-4" />
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">
                L'integrazione perfetta per il running del futuro
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Un ecosistema completo progettato per trasformare il tuo approccio alla corsa, unendo hardware all'avanguardia e analisi AI avanzata in un'esperienza seamless.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a 
                  href="#tracker" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-runner to-runner-accent text-white font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
                >
                  Scopri il Tracker
                  <ArrowRight size={18} className="ml-2" />
                </a>
                <a 
                  href="#app" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-foreground font-medium rounded-lg border border-border transition-colors"
                >
                  Esplora l'App
                </a>
              </div>
            </div>
          </div>
        </section>
        
        <section id="tracker" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Chip label="Hardware rivoluzionario" color="energy" className="mb-4" />
                <h2 className="text-3xl font-bold mb-6">
                  Tracker Screenless <span className="bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">AI-EDGE</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Il primo tracker al mondo progettato specificatamente per runner che vogliono restare immersi nella loro corsa, senza distrazioni da schermi o notifiche.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-runner/10 rounded-full flex items-center justify-center text-runner">
                        <Watch size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Design minimalista ed ergonomico</h3>
                      <p className="text-muted-foreground">
                        Ultraleggero (appena 22g) e completamente impermeabile, si indossa come un semplice bracciale con feedback tattile e audio discreto.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-runner-accent/10 rounded-full flex items-center justify-center text-runner-accent">
                        <Cpu size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Sensori avanzati multiparametrici</h3>
                      <p className="text-muted-foreground">
                        Equipaggiato con 15 sensori di precisione per catturare ogni aspetto della tua biomeccanica con precisione da laboratorio.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-runner-energy/10 rounded-full flex items-center justify-center text-runner-energy">
                        <Zap size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Feedback in tempo reale adattivo</h3>
                      <p className="text-muted-foreground">
                        Fornisce feedback tattile personalizzato sulla tecnica e sul ritmo, permettendoti di correggere e ottimizzare mentre corri.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Cloud size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Autonomia estesa</h3>
                      <p className="text-muted-foreground">
                        Fino a 30 giorni di utilizzo con una singola carica grazie all'architettura energetica ultra-efficiente.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <Chip label="In arrivo: Q4 2023" color="purple" className="mb-4" />
                  <p className="text-muted-foreground">
                    Prezzo di lancio previsto: <span className="font-medium text-foreground">€179</span>
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="relative z-10 mx-auto max-w-md">
                  <div className="glass-card p-5 rounded-2xl border border-white/20 shadow-xl overflow-hidden">
                    <div className="rounded-lg overflow-hidden mb-6">
                      <img 
                        src="https://images.unsplash.com/photo-1576243345690-4e4b79135720?q=80&w=2574&auto=format&fit=crop"
                        alt="AI Runner Tracker" 
                        className="w-full h-80 object-cover"
                      />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-xl">AI-EDGE Tracker</h4>
                        <p className="text-muted-foreground">Edizione limitata Founder</p>
                      </div>
                      <Chip label="Pre-ordine" color="energy" />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-16 w-32 h-32 bg-runner-accent/20 rounded-full blur-xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 transform translate-y-1/4 translate-x-1/4 w-64 h-64 bg-runner/20 rounded-full blur-3xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
        
        <section id="app" className="py-20 bg-runner-light/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative z-10 mx-auto max-w-xs">
                  <div className="glass-card rounded-3xl border border-white/20 shadow-xl overflow-hidden p-3 bg-white">
                    <div className="rounded-2xl overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1621274281571-092e4a5ab5c1?q=80&w=2574&auto=format&fit=crop"
                        alt="AI Runner App" 
                        className="w-full h-[500px] object-cover"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-0 left-0 transform -translate-x-1/2 w-48 h-48 bg-runner-energy/10 rounded-full blur-xl pointer-events-none"></div>
                <div className="absolute bottom-0 right-0 transform translate-y-1/4 w-32 h-32 bg-runner/10 rounded-full blur-lg pointer-events-none"></div>
              </div>
              
              <div>
                <Chip label="App mobile integrata" color="accent" className="mb-4" />
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-runner-accent to-runner-energy bg-clip-text text-transparent">Analisi</span> e pianificazione in mobilità
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Un'app mobile potente ma intuitiva che porta l'analisi avanzata e la pianificazione AI direttamente nel palmo della tua mano.
                </p>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-runner/10 rounded-full flex items-center justify-center text-runner">
                        <Smartphone size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Interfaccia su misura per runner</h3>
                      <p className="text-muted-foreground">
                        Design ottimizzato per la consultazione rapida prima, durante e dopo gli allenamenti con visualizzazioni adattive.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-runner-accent/10 rounded-full flex items-center justify-center text-runner-accent">
                        <Workflow size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Sincronizzazione real-time</h3>
                      <p className="text-muted-foreground">
                        Dati sempre sincronizzati tra app, piattaforma web e tracker per un'esperienza veramente seamless.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-runner-energy/10 rounded-full flex items-center justify-center text-runner-energy">
                        <ShieldCheck size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Privacy avanzata</h3>
                      <p className="text-muted-foreground">
                        Controllo granulare su quali dati condividere e con chi, con crittografia end-to-end per tutti i tuoi dati sensibili.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <Gift size={20} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Integrazioni versatili</h3>
                      <p className="text-muted-foreground">
                        Compatibilità con le principali app e piattaforme di running, oltre a integrazione con Apple Health e Google Fit.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 flex items-center">
                  <Chip label="Lancio: Q3 2023" color="purple" className="mr-4" />
                  <p className="text-muted-foreground">
                    Disponibile per iOS e Android
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gradient-to-b from-white to-runner-light/20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <Chip label="Domande frequenti" color="purple" className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                Tutto ciò che devi sapere sull'ecosistema <span className="bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">AI Runner</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Risposte alle domande più comuni sul nostro ecosistema integrato di prodotti e servizi
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="glass-card p-6 border border-white/20">
                  <h3 className="text-xl font-medium mb-3">Posso usare l'app senza il tracker?</h3>
                  <p className="text-muted-foreground">
                    Assolutamente sì. L'app funziona perfettamente anche con dati provenienti da altri dispositivi o inseriti manualmente, ma l'esperienza ottimale si ottiene con l'integrazione completa del nostro tracker.
                  </p>
                </div>
                
                <div className="glass-card p-6 border border-white/20">
                  <h3 className="text-xl font-medium mb-3">Quanto costa l'abbonamento?</h3>
                  <p className="text-muted-foreground">
                    Offriamo un piano base gratuito con funzionalità essenziali e un piano Premium a €9.99/mese con analisi avanzata, previsioni AI e piani personalizzati. Gli acquirenti del tracker ricevono 12 mesi di Premium inclusi.
                  </p>
                </div>
                
                <div className="glass-card p-6 border border-white/20">
                  <h3 className="text-xl font-medium mb-3">Il tracker è resistente all'acqua?</h3>
                  <p className="text-muted-foreground">
                    Il tracker è completamente impermeabile con certificazione 10ATM, quindi puoi indossarlo sotto la doccia, durante il nuoto e in qualsiasi condizione meteo.
                  </p>
                </div>
                
                <div className="glass-card p-6 border border-white/20">
                  <h3 className="text-xl font-medium mb-3">Come si integra con altri dispositivi?</h3>
                  <p className="text-muted-foreground">
                    Supportiamo l'importazione di dati da Garmin, Polar, Suunto, Strava e la maggior parte dei tracker Bluetooth. Puoi anche sincronizzare con Apple Health e Google Fit.
                  </p>
                </div>
                
                <div className="glass-card p-6 border border-white/20">
                  <h3 className="text-xl font-medium mb-3">Come vengono protetti i miei dati?</h3>
                  <p className="text-muted-foreground">
                    Tutti i dati sono crittografati end-to-end e archiviati su server EU-based conformi al GDPR. Tu mantieni sempre la proprietà dei tuoi dati e puoi esportarli o eliminarli in qualsiasi momento.
                  </p>
                </div>
                
                <div className="glass-card p-6 border border-white/20">
                  <h3 className="text-xl font-medium mb-3">È disponibile una garanzia?</h3>
                  <p className="text-muted-foreground">
                    Offriamo una garanzia estesa di 2 anni sul tracker e 30 giorni di soddisfazione garantita con rimborso completo se non sei completamente soddisfatto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-20 bg-gradient-to-r from-runner/5 to-runner-accent/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="glass-card p-8 md:p-12 border border-white/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div>
                    <Chip label="Early Access" color="energy" className="mb-4" />
                    <h2 className="text-3xl font-bold mb-4">
                      Sii il primo a provare l'ecosistema <span className="bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">completo</span>
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Registrati ora per ricevere aggiornamenti sul lancio, partecipare al programma beta e ottenere accesso a offerte esclusive per i primi utenti.
                    </p>
                    
                    <form onSubmit={handlePreRegister} className="space-y-4">
                      <div>
                        <input 
                          type="email" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="La tua email" 
                          className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-runner"
                          required
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-runner to-runner-accent text-white font-medium rounded-lg transition-all hover:shadow-lg hover:-translate-y-1"
                      >
                        Pre-registrati ora
                        <ArrowRight size={18} className="ml-2" />
                      </button>
                      <p className="text-xs text-muted-foreground text-center">
                        Riceverai solo aggiornamenti sul prodotto. Puoi annullare l'iscrizione in qualsiasi momento.
                      </p>
                    </form>
                  </div>
                  
                  <div className="hidden md:block relative">
                    <div className="relative z-10">
                      <img 
                        src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2380&auto=format&fit=crop"
                        alt="Runner with AI Runner Tracker" 
                        className="rounded-lg shadow-xl"
                      />
                    </div>
                    <div className="absolute top-8 -right-8 glass-card p-3 rounded-lg shadow-lg animate-pulse-light border border-white/20">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-runner-accent/10 rounded-full flex items-center justify-center text-runner-accent">
                          <Zap size={16} />
                        </div>
                        <div>
                          <p className="text-xs font-medium">Sconto Early Bird</p>
                          <p className="text-xs text-runner-accent">30% per i primi 500</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Ecosystem;
