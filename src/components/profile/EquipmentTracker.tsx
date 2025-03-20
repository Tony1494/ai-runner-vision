
import React, { useState } from 'react';
import { Footprints, Plus, Trash2 } from 'lucide-react';
import { Equipment } from '@/types/profile';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface EquipmentTrackerProps {
  equipment: Equipment[];
}

const EquipmentTracker = ({ equipment }: EquipmentTrackerProps) => {
  const [activeTab, setActiveTab] = useState<'scarpe' | 'abbigliamento' | 'accessori' | 'tecnologia'>('scarpe');
  
  const filteredEquipment = equipment.filter(item => item.type === activeTab);
  
  const tabTypes = ['scarpe', 'abbigliamento', 'accessori', 'tecnologia'] as const;
  
  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Footprints size={20} className="text-runner" />
          <h3 className="text-lg font-medium">Equipaggiamento</h3>
        </div>
        <button className="flex items-center text-xs px-3 py-1 bg-runner text-white rounded-full">
          <Plus size={14} className="mr-1" />
          Aggiungi
        </button>
      </div>
      
      <div className="flex space-x-1 mb-6 bg-gray-100 p-1 rounded-lg">
        {tabTypes.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-1.5 text-sm rounded-md transition-colors ${
              activeTab === tab 
                ? 'bg-white shadow-sm text-runner' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="space-y-4">
        {filteredEquipment.map((item) => (
          <div key={item.id} className="p-4 rounded-lg border border-border hover:border-runner/30 transition-colors">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.brand} {item.model}</p>
              </div>
              <button className="text-gray-400 hover:text-runner-energy transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
            
            {item.distance && (
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Distanza percorsa</span>
                  <span className="font-medium">{item.distance} km</span>
                </div>
                <Progress value={Math.min(item.distance / 5, 100)} className="h-2" />
              </div>
            )}
            
            {item.wearPercentage && (
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-muted-foreground">Usura</span>
                  <span className="font-medium">{item.wearPercentage}%</span>
                </div>
                <Progress 
                  value={item.wearPercentage} 
                  className={cn("h-2", 
                    item.wearPercentage > 80 ? 'bg-runner-energy' : 
                    item.wearPercentage > 50 ? 'bg-runner-warning' : 'bg-runner-success'
                  )}
                />
              </div>
            )}
            
            <div className="flex justify-between mt-3 text-xs text-muted-foreground">
              <span>Acquistato: {item.purchaseDate}</span>
              {item.sessions && <span>{item.sessions} sessioni</span>}
            </div>
          </div>
        ))}
        
        {filteredEquipment.length === 0 && (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Footprints size={24} className="text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Nessun equipaggiamento aggiunto</p>
            <button className="mt-4 text-sm text-runner hover:underline">
              Aggiungi il tuo primo {activeTab}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EquipmentTracker;
