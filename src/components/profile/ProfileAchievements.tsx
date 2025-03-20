
import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import { Achievement } from '@/types/profile';
import Chip from '../ui/Chip';

interface ProfileAchievementsProps {
  achievements: Achievement[];
}

const levelColors = {
  'bronze': 'bg-amber-700',
  'silver': 'bg-gray-400',
  'gold': 'bg-amber-400',
  'platinum': 'bg-gradient-to-r from-indigo-500 to-purple-600'
};

const categoryIcons = {
  'distanza': '🏃',
  'velocità': '⚡',
  'costanza': '📊',
  'miglioramento': '📈'
};

const ProfileAchievements = ({ achievements }: ProfileAchievementsProps) => {
  return (
    <div className="glass-card p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <Award size={20} className="text-runner" />
          <h3 className="text-lg font-medium">Achievement</h3>
        </div>
        <button className="text-xs px-3 py-1 bg-runner/10 text-runner rounded-full">
          Vedi tutti
        </button>
      </div>
      
      <div className="space-y-4">
        {achievements.slice(0, 4).map((achievement) => (
          <div key={achievement.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${levelColors[achievement.level]}`}>
              <span className="text-xl">{categoryIcons[achievement.category as keyof typeof categoryIcons]}</span>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex justify-between">
                <h4 className="font-medium">{achievement.name}</h4>
                <Chip label={achievement.level} color="purple" size="xs" />
              </div>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
              <p className="text-xs text-muted-foreground mt-1">{achievement.date}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-border">
        <button className="w-full flex items-center justify-center text-runner hover:text-runner-dark transition-colors">
          <span className="mr-2">Visualizza tutti gli achievement</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProfileAchievements;
