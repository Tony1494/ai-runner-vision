
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Info } from 'lucide-react';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const RunningDNA = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('overall');
  
  const categories = [
    { id: 'overall', label: 'Profilo complessivo' },
    { id: 'endurance', label: 'Resistenza' },
    { id: 'speed', label: 'Velocità' },
    { id: 'technique', label: 'Tecnica' },
    { id: 'recovery', label: 'Recupero' },
  ];
  
  const dnaMetrics = [
    { name: 'Efficienza energetica', value: 78, category: 'overall', color: '#9b87f5' },
    { name: 'Potenza aerobica', value: 85, category: 'endurance', color: '#9b87f5' },
    { name: 'Tolleranza lattato', value: 62, category: 'endurance', color: '#9b87f5' },
    { name: 'Forza esplosiva', value: 71, category: 'speed', color: '#f97316' },
    { name: 'Velocità massima', value: 68, category: 'speed', color: '#f97316' },
    { name: 'Economia di corsa', value: 74, category: 'technique', color: '#9b87f5' },
    { name: 'Simmetria', value: 92, category: 'technique', color: '#9b87f5' },
    { name: 'Rigidità muscolare', value: 65, category: 'recovery', color: '#f97316' },
    { name: 'Tempo ripristino FC', value: 83, category: 'recovery', color: '#9b87f5' },
  ];
  
  const filteredMetrics = selectedCategory === 'overall' 
    ? dnaMetrics.filter(m => m.category === 'overall')
    : dnaMetrics.filter(m => m.category === selectedCategory);
  
  const handleShare = () => {
    toast({
      title: "DNA condiviso!",
      description: "Il tuo profilo è stato condiviso con successo.",
    });
  };
  
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <div>
          <h4 className="text-lg font-medium mb-1">Il tuo profilo running unico</h4>
          <p className="text-sm text-muted-foreground">Basato sull'analisi di oltre 200 parametri</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button 
            onClick={handleShare}
            className="text-sm bg-runner text-white px-4 py-1.5 rounded-md hover:bg-runner-dark transition-colors"
          >
            Condividi il mio DNA
          </button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedCategory === category.id
                ? 'bg-runner text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedCategory === 'overall' ? (
          <div className="md:col-span-3 flex justify-center py-6">
            <div className="relative w-64 h-64">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-runner/5 to-runner-accent/5 animate-pulse-light"></div>
              <div className="absolute inset-4 border-4 border-dashed border-runner/20 rounded-full"></div>
              <div className="absolute inset-8 border-4 border-dashed border-runner-accent/20 rounded-full"></div>
              <div className="absolute inset-12 border-4 border-dashed border-runner-energy/20 rounded-full"></div>
              <div className="absolute inset-16 border-4 border-dashed border-runner-success/20 rounded-full"></div>
              
              <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-runner to-runner-accent bg-clip-text text-transparent">78</div>
                <div className="text-sm text-muted-foreground">Punteggio Complessivo</div>
              </div>
              
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-runner-light rounded-full px-3 py-1 text-xs font-medium text-runner shadow-sm">
                  Efficienza
                </div>
              </div>
              
              <div className="absolute top-1/2 -right-4 transform translate-y-[-50%]">
                <div className="bg-runner-accent/10 rounded-full px-3 py-1 text-xs font-medium text-runner-accent shadow-sm">
                  Potenza
                </div>
              </div>
              
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-runner-energy/10 rounded-full px-3 py-1 text-xs font-medium text-runner-energy shadow-sm">
                  Tecnica
                </div>
              </div>
              
              <div className="absolute top-1/2 -left-4 transform translate-y-[-50%]">
                <div className="bg-green-50 rounded-full px-3 py-1 text-xs font-medium text-green-600 shadow-sm">
                  Recupero
                </div>
              </div>
            </div>
          </div>
        ) : (
          filteredMetrics.map((metric, index) => (
            <div key={index} className="glass-card p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <h5 className="font-medium">{metric.name}</h5>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button className="ml-1 text-muted-foreground">
                          <Info size={14} />
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs max-w-xs">
                          Questa metrica indica quanto sei efficiente in questo aspetto del running rispetto ad altri runner del tuo livello.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <span 
                  className="text-sm font-bold"
                  style={{ color: metric.color }}
                >
                  {metric.value}%
                </span>
              </div>
              
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div 
                  className="h-full rounded-full" 
                  style={{ 
                    width: `${metric.value}%`,
                    backgroundColor: metric.color
                  }}
                ></div>
              </div>
              
              <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
        <div className="flex items-start space-x-3">
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
            <h4 className="font-medium text-sm">Insight dal tuo DNA</h4>
            <p className="text-sm text-blue-800">
              Il tuo profilo mostra un'alta efficienza di corsa, ma potresti migliorare la tolleranza al lattato. Prova ad aggiungere allenamenti di soglia una volta a settimana.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RunningDNA;
