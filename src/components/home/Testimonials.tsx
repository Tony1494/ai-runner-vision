
import React from 'react';
import { cn } from '@/lib/utils';
import Chip from '../ui/Chip';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  improvement: string;
  photoUrl?: string;
  className?: string;
}

const Testimonial = ({ quote, author, role, improvement, photoUrl, className }: TestimonialProps) => {
  return (
    <div className={cn(
      "glass-card p-6 transition-all hover:shadow-lg",
      className
    )}>
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-runner/30">
            <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7M10 11V9C10 8.46957 10.2107 7.96086 10.5858 7.58579C10.9609 7.21071 11.4696 7 12 7H14C14.5304 7 15.0391 7.21071 15.4142 7.58579C15.7893 7.96086 16 8.46957 16 9V11M10 11V19H20V11M10 11H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        <p className="text-muted-foreground mb-6 flex-grow italic">
          "{quote}"
        </p>
        
        <div className="flex items-center mt-auto">
          <div className="mr-4">
            {photoUrl ? (
              <img src={photoUrl} alt={author} className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-runner/10 flex items-center justify-center text-runner font-medium">
                {author.split(' ').map(name => name[0]).join('')}
              </div>
            )}
          </div>
          
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-muted-foreground">{role}</p>
          </div>
          
          <div className="ml-auto">
            <Chip 
              label={improvement} 
              color="energy" 
              size="sm" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Chip label="Storie di successo" color="accent" className="mb-4" />
          <h2 className="text-4xl font-bold mb-4">
            Trasformazioni reali, <span className="bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">risultati misurabili</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Scopri come altri runner come te hanno rivoluzionato il loro approccio all'allenamento grazie all'intelligenza artificiale.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Testimonial 
            quote="Ho migliorato il mio tempo sulla 10K di quasi 5 minuti in sole 8 settimane. L'analisi della mia tecnica di corsa ha rivelato problemi che nessun allenatore aveva mai notato."
            author="Marco Bianchi"
            role="Maratoneta amatoriale"
            improvement="-4:53 sulla 10K"
            className="animate-fade-in"
            style={{ animationDelay: '0.1s' }}
          />
          
          <Testimonial 
            quote="La personalizzazione del piano è impressionante. Si adatta perfettamente ai miei impegni lavorativi e familiari, ottimizzando ogni sessione in base ai dati raccolti."
            author="Laura Rossi"
            role="Ultra runner"
            improvement="+22% VO2max"
            className="animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          />
          
          <Testimonial 
            quote="Dopo anni di infortuni ricorrenti, finalmente ho trovato equilibrio. L'AI ha individuato pattern nel mio allenamento che causavano sovraccarico e ha corretto il tiro."
            author="Andrea Verdi"
            role="Triatleta"
            improvement="0 infortuni in 12 mesi"
            className="animate-fade-in"
            style={{ animationDelay: '0.3s' }}
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
