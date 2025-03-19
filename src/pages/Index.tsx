
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <Features />
        
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">Preparati a correre come mai prima d'ora</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Unisciti a migliaia di runner che hanno già migliorato le loro prestazioni grazie ai nostri piani di allenamento personalizzati e alle analisi AI.
              </p>
              <a 
                href="/dashboard" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-runner hover:bg-runner-dark text-white font-medium transition-colors"
              >
                Inizia il tuo viaggio
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
