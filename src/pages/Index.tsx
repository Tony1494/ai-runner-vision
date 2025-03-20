
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/home/Testimonials';
import HowItWorks from '@/components/home/HowItWorks';
import RunnerLogo from '@/components/home/RunnerLogo';
import ExclusiveFeatures from '@/components/home/ExclusiveFeatures';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <ExclusiveFeatures />
        
        <section className="py-20 bg-gradient-to-b from-white to-runner-light/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <RunnerLogo className="w-24 h-24 mx-auto mb-8" animate={true} />
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">
                Rivoluziona il tuo running. Oggi.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I dati sono la chiave per sbloccare il tuo vero potenziale. <span className="font-semibold">La differenza?</span> La nostra IA trasforma quei dati in una strategia personalizzata che evolve con te. 
                Unisciti ai runner che hanno scoperto il loro potenziale nascosto grazie all'analisi predittiva AI Runner Vision.
              </p>
              <a 
                href="/dashboard" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-runner to-runner-accent text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Inizia la tua trasformazione
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
