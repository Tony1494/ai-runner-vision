
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Testimonials from '@/components/home/Testimonials';
import RunnerLogo from '@/components/home/RunnerLogo';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col page-transition">
      <Navbar />
      <main className="flex-1 pt-20">
        <Hero />
        <Features />
        <Testimonials />
        
        <section className="py-20 bg-gradient-to-b from-white to-runner-light/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <RunnerLogo className="w-24 h-24 mx-auto mb-8" animate={true} />
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">
                Supera i tuoi limiti. Oggi.
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ogni campione ha iniziato esattamente da dove sei tu ora. <span className="font-semibold">La differenza?</span> Hanno avuto gli strumenti giusti. 
                Unisciti a migliaia di runner che hanno trasformato le loro performance grazie ai nostri piani di allenamento alimentati dall'AI.
              </p>
              <a 
                href="/dashboard" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-gradient-to-r from-runner to-runner-accent text-white font-medium transition-all hover:shadow-lg hover:-translate-y-1"
              >
                Inizia la tua evoluzione
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
