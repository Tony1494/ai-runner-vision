
import { useState } from 'react';
import { Search, Filter, BookOpen, Tag, Clock, Calendar, ChevronRight, ArrowRight, Share2, User, UserCheck } from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Chip from '@/components/ui/Chip';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', label: 'Tutti' },
    { id: 'tecnica', label: 'Tecnica' },
    { id: 'allenamento', label: 'Allenamento' },
    { id: 'nutrizione', label: 'Nutrizione' },
    { id: 'gear', label: 'Attrezzatura' },
    { id: 'community', label: 'Community' }
  ];
  
  // Dati di esempio per gli articoli
  const articles = [
    {
      id: 1,
      title: 'La scienza dietro la cadenza ottimale: come trovare il tuo ritmo perfetto',
      excerpt: 'Uno studio approfondito su come la cadenza influisce sull\'efficienza di corsa e come calcolare il tuo range ottimale in base alla biomeccanica.',
      category: 'tecnica',
      author: 'Dr. Marco Bianchi',
      authorRole: 'Biomeccanico dello Sport',
      date: '15 Maggio 2023',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=2574&auto=format&fit=crop',
      featured: true,
      dataVisualization: true
    },
    {
      id: 2,
      title: 'Periodizzazione avanzata: come strutturare la tua stagione di gare',
      excerpt: 'Tecniche di periodizzazione dell\'allenamento basate sull\'analisi dei dati per massimizzare le performance nei giorni di gara.',
      category: 'allenamento',
      author: 'Laura Rossi',
      authorRole: 'Coach certificata IAAF',
      date: '12 Maggio 2023',
      readTime: '12 min',
      image: 'https://images.unsplash.com/photo-1486218119243-13883505764c?q=80&w=2572&auto=format&fit=crop',
      featured: false,
      dataVisualization: true
    },
    {
      id: 3,
      title: 'Nutrizione personalizzata: oltre i carboidrati e le proteine',
      excerpt: 'Come adattare la tua alimentazione in base ai dati dei tuoi allenamenti e al tuo metabolismo specifico.',
      category: 'nutrizione',
      author: 'Dott.ssa Sofia Verdi',
      authorRole: 'Nutrizionista Sportiva',
      date: '8 Maggio 2023',
      readTime: '10 min',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2553&auto=format&fit=crop',
      featured: false,
      dataVisualization: false
    },
    {
      id: 4,
      title: 'Drop delle scarpe: come influenza la tecnica di corsa',
      excerpt: 'Studio approfondito su come il drop delle scarpe modifica la biomeccanica della corsa e come scegliere quello giusto per te.',
      category: 'gear',
      author: 'Andrea Neri',
      authorRole: 'Tecnico di calzature sportive',
      date: '5 Maggio 2023',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=2574&auto=format&fit=crop',
      featured: false,
      dataVisualization: true
    },
    {
      id: 5,
      title: 'Come la community ha trasformato il mio approccio alla corsa',
      excerpt: 'Storia di un runner che è passato da principiante a maratoneta grazie al supporto della community e all\'analisi dei dati.',
      category: 'community',
      author: 'Paolo Bianchi',
      authorRole: 'Runner amatoriale',
      date: '1 Maggio 2023',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1517931524326-bdd55a541177?q=80&w=2596&auto=format&fit=crop',
      featured: false,
      dataVisualization: false
    }
  ];
  
  const filteredArticles = activeCategory === 'all'
    ? articles
    : articles.filter(article => article.category === activeCategory);
  
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20 pb-10">
        <section className="py-12 bg-gradient-to-b from-white to-runner-light/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Chip label="Running Knowledge" color="accent" className="mb-4" />
              <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">
                Blog
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Approfondimenti, casi studio e analisi basate sui dati per aiutarti a migliorare come runner
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <div className="relative w-full sm:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
                  <input 
                    type="text" 
                    placeholder="Cerca articoli..." 
                    className="pl-10 pr-4 py-3 w-full border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-runner"
                  />
                </div>
                <button className="inline-flex items-center px-4 py-3 bg-white border border-border rounded-lg hover:bg-gray-50 transition-colors sm:w-auto w-full justify-center">
                  <Filter size={18} className="mr-2" />
                  Filtri avanzati
                </button>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap gap-3 border-b border-border pb-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category.id
                      ? 'bg-runner text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 gap-8">
              {filteredArticles.map((article, index) => (
                index === 0 && article.featured ? (
                  <div key={article.id} className="glass-card p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-2 gap-8 border border-runner/10 animate-fade-in">
                    <div className="relative overflow-hidden rounded-lg" style={{ minHeight: '300px' }}>
                      <img 
                        src={article.image}
                        alt={article.title} 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Chip label="In evidenza" color="energy" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <Chip label={categories.find(c => c.id === article.category)?.label} color="purple" />
                          {article.dataVisualization && (
                            <Chip label="Data Visualization" color="accent" />
                          )}
                        </div>
                        <h2 className="text-2xl font-bold mb-4">
                          {article.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {article.excerpt}
                        </p>
                        <div className="flex items-center gap-4 mb-6">
                          <div className="flex items-center gap-2">
                            <Clock size={16} className="text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} className="text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{article.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-runner/10 flex items-center justify-center text-runner mr-3">
                            <User size={18} />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{article.author}</h4>
                            <p className="text-xs text-muted-foreground">{article.authorRole}</p>
                          </div>
                        </div>
                        <a 
                          href={`/blog/${article.id}`} 
                          className="inline-flex items-center justify-center px-4 py-2 bg-runner text-white rounded-lg hover:bg-runner-dark transition-colors"
                        >
                          Leggi l'articolo
                          <ChevronRight size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div key={article.id} className="glass-card p-6 grid grid-cols-1 md:grid-cols-3 gap-6 border border-transparent hover:border-runner/10 transition-colors animate-fade-in">
                    <div className="md:col-span-1">
                      <div className="relative overflow-hidden rounded-lg" style={{ height: '200px' }}>
                        <img 
                          src={article.image}
                          alt={article.title} 
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-3 mb-3">
                        <Chip label={categories.find(c => c.id === article.category)?.label} color="purple" size="sm" />
                        {article.dataVisualization && (
                          <Chip label="Data Visualization" color="accent" size="sm" />
                        )}
                      </div>
                      <h2 className="text-xl font-bold mb-3">
                        {article.title}
                      </h2>
                      <p className="text-muted-foreground mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <Clock size={14} className="text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{article.date}</span>
                          </div>
                        </div>
                        <a 
                          href={`/blog/${article.id}`} 
                          className="text-runner hover:text-runner-dark transition-colors text-sm font-medium flex items-center"
                        >
                          Leggi
                          <ChevronRight size={16} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <button className="inline-flex items-center justify-center px-6 py-3 bg-white border border-runner text-runner font-medium rounded-lg hover:bg-runner hover:text-white transition-colors">
                Carica altri articoli
                <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-runner-light/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Chip label="Casi studio reali" color="energy" className="mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">Insight</span> dalla community
              </h2>
              <p className="text-lg text-muted-foreground">
                Analisi dettagliate e dati anonimizzati da runner reali che utilizzano il nostro ecosistema
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-6 border border-runner/10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-runner/10 flex items-center justify-center text-runner">
                    <UserCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Runner intermedio, 42 anni</h4>
                    <div className="flex items-center">
                      <Chip label="10K" color="purple" size="xs" className="mr-1" />
                      <span className="text-xs text-muted-foreground">Milano</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">Come ho migliorato il mio tempo sui 10K di 4:53 in 8 settimane</h3>
                <p className="text-muted-foreground mb-4">
                  Un'analisi dettagliata del percorso di ottimizzazione dell'allenamento con visualizzazione dei dati progressivi settimana per settimana.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">12 min</span>
                  </div>
                  <button className="inline-flex items-center text-runner hover:text-runner-dark transition-colors">
                    <Share2 size={16} className="mr-1" />
                    Condividi
                  </button>
                </div>
              </div>
              
              <div className="glass-card p-6 border border-runner/10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-runner-accent/10 flex items-center justify-center text-runner-accent">
                    <UserCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Ultra runner, 35 anni</h4>
                    <div className="flex items-center">
                      <Chip label="Ultra" color="energy" size="xs" className="mr-1" />
                      <span className="text-xs text-muted-foreground">Torino</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">Correlazione tra variabili di carico e recupero in preparazione ultra</h3>
                <p className="text-muted-foreground mb-4">
                  Studio approfondito su come il rapporto tra carico e recupero influisce sulle performance di lungo periodo con dati raccolti su 12 mesi.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">15 min</span>
                  </div>
                  <button className="inline-flex items-center text-runner hover:text-runner-dark transition-colors">
                    <Share2 size={16} className="mr-1" />
                    Condividi
                  </button>
                </div>
              </div>
              
              <div className="glass-card p-6 border border-runner/10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <UserCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-medium text-sm">Runner principiante, 28 anni</h4>
                    <div className="flex items-center">
                      <Chip label="5K" color="green" size="xs" className="mr-1" />
                      <span className="text-xs text-muted-foreground">Roma</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3">Da 0 a 5K: un percorso guidato dai dati per principianti</h3>
                <p className="text-muted-foreground mb-4">
                  Come ho utilizzato l'analisi predittiva per creare un piano progressivo e sicuro per passare da sedentario a runner in 12 settimane.
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <BookOpen size={14} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">10 min</span>
                  </div>
                  <button className="inline-flex items-center text-runner hover:text-runner-dark transition-colors">
                    <Share2 size={16} className="mr-1" />
                    Condividi
                  </button>
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

export default Blog;
