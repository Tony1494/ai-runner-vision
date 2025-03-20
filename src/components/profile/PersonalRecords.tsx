
import React from 'react';
import { Award, Calendar, MapPin, TrendingUp, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PersonalRecord {
  id: number;
  distance: string;
  time: string;
  pace: string;
  date: string;
  location: string;
  improvement?: string;
  event?: string;
  eventUrl?: string;
}

interface PersonalRecordsProps {
  records: PersonalRecord[];
  className?: string;
}

const PersonalRecords = ({ records, className }: PersonalRecordsProps) => {
  return (
    <div className={cn("glass-card p-6", className)}>
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Award size={20} className="text-runner" />
          <h3 className="text-lg font-medium">Personal Best</h3>
        </div>
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
              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Passo</th>
              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Data</th>
              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Luogo</th>
              <th className="pb-3 text-left text-muted-foreground font-medium text-sm">Miglioramento</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {records.map((record) => (
              <tr key={record.id} className="hover:bg-blue-50/30">
                <td className="py-3 pr-4 font-medium">{record.distance}</td>
                <td className="py-3 pr-4 text-runner font-medium">{record.time}</td>
                <td className="py-3 pr-4">{record.pace}</td>
                <td className="py-3 pr-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {record.date}
                  </div>
                </td>
                <td className="py-3 pr-4 text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {record.event ? (
                      <a 
                        href={record.eventUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-runner"
                      >
                        {record.event}
                        <ExternalLink size={12} className="ml-1" />
                      </a>
                    ) : (
                      record.location
                    )}
                  </div>
                </td>
                <td className="py-3">
                  {record.improvement && (
                    <div className="flex items-center text-green-600">
                      <TrendingUp size={14} className="mr-1" />
                      {record.improvement}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PersonalRecords;
